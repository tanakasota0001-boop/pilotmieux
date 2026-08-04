document.addEventListener('DOMContentLoaded', () => {

  // --- ARTISTIC LOADER CONTROL ---
  const loaderOverlay = document.getElementById('loader-overlay');
  const minLoadingTime = 1600; // minimum display time in ms (1.6s)
  const startTime = Date.now();
  let initRevealObserver = null;

  const hideLoader = () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    setTimeout(() => {
      if (loaderOverlay && !loaderOverlay.classList.contains('exit')) {
        loaderOverlay.classList.add('exit');
        document.body.classList.remove('loading');
        
        // Trigger scroll position updates and animations after loader fades
        setTimeout(() => {
          loaderOverlay.style.display = 'none';
          updateSectionPositions();
          renderAnimations(window.scrollY);
          
          // Start scroll reveal animations precisely after loader has completely disappeared
          if (typeof initRevealObserver === 'function') {
            initRevealObserver();
          }
        }, 1000); // matches the 1.0s transition duration in CSS
      }
    }, remainingTime);
  };

  // Run when the whole page and all resources are loaded
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }

  // Fallback to prevent infinite loading in case of slow resources
  setTimeout(() => {
    if (loaderOverlay && !loaderOverlay.classList.contains('exit')) {
      hideLoader();
    }
  }, 5000);

  // --- STICKY HEADER & SCROLL EFFECTS ---
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  // Section positions cache for performant & smooth layout calculations
  const sectionPositions = {
    statement: { top: 0, height: 0 },
    tickerSection: { top: 0, height: 0 }
  };



  const updateSectionPositions = () => {
    const scrollY = window.scrollY;

    const statementSection = document.getElementById('statement');
    if (statementSection) {
      const rect = statementSection.getBoundingClientRect();
      sectionPositions.statement.top = rect.top + scrollY;
      sectionPositions.statement.height = rect.height;
    }

    const tickerSection = document.getElementById('ticker-section');
    if (tickerSection) {
      const rect = tickerSection.getBoundingClientRect();
      sectionPositions.tickerSection.top = rect.top + scrollY;
      sectionPositions.tickerSection.height = rect.height;
    }
  };

  // Smooth scroll interpolation variables
  let smoothScrollY = window.scrollY;
  let targetScrollY = window.scrollY;
  let isAnimating = false;
  const scrollEase = 0.08; // Lower is smoother (0.08-0.1 is optimal)

  const renderAnimations = (scrollY) => {
    // Header shadow/blur toggle
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Scroll to Top button visibility
    if (scrollY > 500) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.pointerEvents = 'none';
    }

    // --- PRE-CALCULATE STATEMENT SCROLL PROGRESS ---
    // --- PRE-CALCULATE STATEMENT SCROLL PROGRESS ---
    let bgOpacity = 0;
    const statementSection = document.getElementById('statement');

    // --- PARALLAX & COLLAPSE EFFECT ---
    const orb1 = document.querySelector('.orb-w-1');
    const orb2 = document.querySelector('.orb-w-2');
    const orb3 = document.querySelector('.orb-w-3');
    
    const orbScale = 1 - bgOpacity * 0.85;
    const orbBlur = 120 + bgOpacity * 100;
    const orbOpacity = 0.35 * (1 - bgOpacity * 0.9);
    
    if (orb1) {
      orb1.style.transform = `translateY(${scrollY * 0.22}px) scale(${orbScale})`;
      orb1.style.filter = `blur(${orbBlur}px)`;
      orb1.style.opacity = orbOpacity;
    }
    if (orb2) {
      orb2.style.transform = `translateY(${-scrollY * 0.12}px) scale(${orbScale})`;
      orb2.style.filter = `blur(${orbBlur}px)`;
      orb2.style.opacity = orbOpacity;
    }
    if (orb3) {
      orb3.style.transform = `translateY(${scrollY * 0.08}px) scale(${orbScale})`;
      orb3.style.filter = `blur(${orbBlur}px)`;
      orb3.style.opacity = orbOpacity * 0.7;
    }

    // 2. Hero Section Elements
    const heroContent = document.querySelector('.hero-content');
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.35}px)`;
      heroContent.style.opacity = Math.max(0, 1 - scrollY / 700);
    }
    if (heroCanvas) {
      heroCanvas.style.transform = `translateY(${scrollY * 0.15}px)`;
    }



    // 4. Parallax & Fade on Ticker Section (Arts-site Style)
    const tickerSection = document.getElementById('ticker-section');
    if (tickerSection) {
      const pos = sectionPositions.tickerSection;
      const rectTop = pos.top - scrollY;
      const rectBottom = rectTop + pos.height;
      const viewportHeight = window.innerHeight;
      
      const tickerCenter = rectTop + pos.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(tickerCenter - viewportCenter);
      
      // Center active zone (70% of viewport) stays 100% visible. Fades smoothly only near top/bottom edges.
      const activeRange = viewportHeight * 0.35;
      const fadeRange = viewportHeight * 0.35;
      
      let opacity = 1;
      if (distanceFromCenter > activeRange) {
        opacity = 1 - ((distanceFromCenter - activeRange) / fadeRange);
      }
      opacity = Math.max(0, Math.min(1, opacity));
      
      const scale = 0.93 + opacity * 0.07;
      let skew = (tickerCenter - viewportCenter) * 0.035;
      skew = Math.max(-8, Math.min(8, skew));

      tickerSection.style.opacity = opacity;
      tickerSection.style.transform = `scale(${scale}) skewY(${skew * 0.2}deg)`;
      
      if (rectTop < viewportHeight && rectBottom > 0) {
        tickerSection.classList.add('visible');
      } else {
        tickerSection.classList.remove('visible');
      }
    }

    // 5. Normal Header Dark Toggle on Statement Section
    if (statementSection) {
      const pos = sectionPositions.statement;
      const rectTop = pos.top - scrollY;
      const rectBottom = rectTop + pos.height;
      
      // ヘッダー（高さ約80px）が #statement セクションに入っている間、ヘッダーをダークにする
      if (rectTop <= 80 && rectBottom >= 0) {
        header.classList.add('header-dark');
      } else {
        header.classList.remove('header-dark');
      }
    }
  };

  // Set initial state
  scrollTopBtn.style.opacity = '0';
  scrollTopBtn.style.pointerEvents = 'none';
  scrollTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
  // Smooth scroll animation loop
  const animateLoop = () => {
    const diff = targetScrollY - smoothScrollY;
    if (Math.abs(diff) < 0.05) {
      smoothScrollY = targetScrollY;
      isAnimating = false;
    } else {
      smoothScrollY += diff * scrollEase;
      isAnimating = true;
    }
    
    renderAnimations(smoothScrollY);

    
    if (isAnimating) {
      requestAnimationFrame(animateLoop);
    }
  };

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateLoop);
    }
  });

  window.addEventListener('resize', () => {
    updateSectionPositions();
    targetScrollY = window.scrollY;
    smoothScrollY = window.scrollY;
    renderAnimations(window.scrollY);

  });

  // Initial load
  updateSectionPositions();
  renderAnimations(window.scrollY);

  // Scroll to top action
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- MOBILE NAVIGATION ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    mobileToggle.classList.toggle('active');
    
    // Animate burger lines
    const spans = mobileToggle.querySelectorAll('span');
    if (navMenu.classList.contains('open')) {
      spans[0].style.transform = 'translateY(8px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu when links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });


  // --- INTERSECTION OBSERVER FOR REVEALS ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // On desktop, defer revealing the sticky service section cols until scroll enters
        if (window.innerWidth >= 992 && 
            (entry.target.classList.contains('service-sticky-left') || 
             entry.target.classList.contains('service-sticky-right'))) {
          return;
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Run animation once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  initRevealObserver = () => {
    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  };

  // If loader overlay is not present, initialize reveal animations immediately
  if (!loaderOverlay) {
    initRevealObserver();
  }


  // --- INTERACTIVE CANVAS - ARTISTIC FLUID WAVES ---
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let time = 0;
    
    let mouse = {
      x: null,
      y: null,
      radius: 220
    };

    // Track mouse coordinates relative to canvas
    window.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Resize handler
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Definition of three wave bands shifted downwards to prevent text overlap, with reduced opacity for enhanced readability
    const waves = [
      {
        y: 0.68, // Center line position shifted down (68% height)
        length: 0.002, // Wave frequency (low, long waves)
        amplitude: 70, // Height of the waves
        speed: 0.008, // Animation speed
        lines: 10, // Number of parallel lines to draw
        type: 'cyan'
      },
      {
        y: 0.73, // Shifted down (73% height)
        length: 0.004, // Wave frequency (mid)
        amplitude: 45,
        speed: 0.015,
        lines: 8,
        type: 'blue'
      },
      {
        y: 0.63, // Shifted down (63% height)
        length: 0.0015, // Wave frequency (very long waves)
        amplitude: 85,
        speed: 0.004,
        lines: 6,
        type: 'purple'
      }
    ];

    // Main animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Leaving a slight trail of previous frames for motion blur while keeping background transparent
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      
      time += 0.8;

      waves.forEach(wave => {
        const baseHeight = canvas.height * wave.y;
        
        for (let j = 0; j < wave.lines; j++) {
          ctx.beginPath();
          ctx.lineWidth = 0.8 + j * 0.12;
          
          // Create horizontal gradient for waves to look more artistic and subtle
          const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
          if (wave.type === 'cyan') {
            grad.addColorStop(0, 'rgba(0, 180, 216, 0.02)');
            grad.addColorStop(0.5, 'rgba(72, 149, 239, 0.15)'); // Opacity reduced to prevent text overlap
            grad.addColorStop(1, 'rgba(114, 9, 183, 0.02)');
          } else if (wave.type === 'blue') {
            grad.addColorStop(0, 'rgba(72, 149, 239, 0.02)');
            grad.addColorStop(0.5, 'rgba(114, 9, 183, 0.12)'); // Opacity reduced
            grad.addColorStop(1, 'rgba(247, 37, 133, 0.02)');
          } else {
            grad.addColorStop(0, 'rgba(114, 9, 183, 0.02)');
            grad.addColorStop(0.5, 'rgba(0, 180, 216, 0.10)'); // Opacity reduced
            grad.addColorStop(1, 'rgba(72, 149, 239, 0.02)');
          }
          ctx.strokeStyle = grad;
          
          for (let x = 0; x < canvas.width; x += 15) {
            // Wave calculations combining trigonometric offsets and time
            let y = baseHeight + Math.sin(x * wave.length + (time * wave.speed) + (j * 0.18)) * wave.amplitude;
            
            // Interaction with mouse pointer
            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - x;
              const dy = mouse.y - y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < mouse.radius) {
                // Gaussian-like curve for smooth deflection field
                const force = (mouse.radius - distance) / mouse.radius;
                const push = Math.sin(force * Math.PI) * 55; // Up to 55px push
                
                // Deflect waves away vertically
                y += (dy > 0) ? -push : push;
                // Add micro-ripples based on connection proximity
                y += Math.sin(x * 0.02 + time * 0.08) * push * 0.15;
              }
            }
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      });
    };

    animate();
  }





});
