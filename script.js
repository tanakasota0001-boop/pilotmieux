document.addEventListener('DOMContentLoaded', () => {

  // --- STICKY HEADER & SCROLL EFFECTS ---
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  let handleServiceScroll;
  
  // Service section snapping & locking variables
  let serviceSnapPoints = [];
  let activeCardIndex = 0;
  let isLockedInService = false;
  let isScrollingToCard = false;
  
  // Section positions cache for performant & smooth layout calculations
  const sectionPositions = {
    statement: { top: 0, height: 0 },
    companyBanner: { top: 0, height: 0 },
    tickerSection: { top: 0, height: 0 },
    service: { top: 0, height: 0 }
  };

  const updateSectionPositions = () => {
    const scrollY = window.scrollY;

    const statementSection = document.getElementById('statement');
    if (statementSection) {
      const rect = statementSection.getBoundingClientRect();
      sectionPositions.statement.top = rect.top + scrollY;
      sectionPositions.statement.height = rect.height;
    }

    const companyBanner = document.getElementById('company-banner');
    if (companyBanner) {
      const rect = companyBanner.getBoundingClientRect();
      sectionPositions.companyBanner.top = rect.top + scrollY;
      sectionPositions.companyBanner.height = rect.height;
    }

    const tickerSection = document.getElementById('ticker-section');
    if (tickerSection) {
      const rect = tickerSection.getBoundingClientRect();
      sectionPositions.tickerSection.top = rect.top + scrollY;
      sectionPositions.tickerSection.height = rect.height;
    }

    const serviceSection = document.getElementById('service');
    if (serviceSection) {
      const rect = serviceSection.getBoundingClientRect();
      sectionPositions.service.top = rect.top + scrollY;
      sectionPositions.service.height = rect.height;
      
      // Calculate snap points for desktop
      const serviceStart = sectionPositions.service.top;
      const vh = window.innerHeight;
      serviceSnapPoints = [
        serviceStart,
        serviceStart + vh,
        serviceStart + 2 * vh
      ];
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
    let bgOpacity = 0;
    let statementProgress = 0;
    const statementSection = document.getElementById('statement');
    
    if (statementSection) {
      const pos = sectionPositions.statement;
      const rectTop = pos.top - scrollY;
      const rectBottom = rectTop + pos.height;
      const viewportHeight = window.innerHeight;
      
      if (rectTop < viewportHeight && rectBottom > 0) {
        const totalDist = pos.height + viewportHeight;
        const scrolledDist = viewportHeight - rectTop;
        statementProgress = Math.max(0, Math.min(1, scrolledDist / totalDist));
        
        const fadeRange = 0.3; // 30% のフェード区間
        if (statementProgress < fadeRange) {
          const ratio = statementProgress / fadeRange;
          bgOpacity = Math.sin(ratio * Math.PI / 2);
        } else if (statementProgress > (1 - fadeRange)) {
          const ratio = (1 - statementProgress) / fadeRange;
          bgOpacity = Math.sin(ratio * Math.PI / 2);
        } else {
          bgOpacity = 1;
        }
      }
    }

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

    // 3. Company Banner Video
    const companyBanner = document.getElementById('company-banner');
    if (companyBanner) {
      const companyVideo = companyBanner.querySelector('video');
      if (companyVideo) {
        const pos = sectionPositions.companyBanner;
        const rectTop = pos.top - scrollY;
        const rectBottom = rectTop + pos.height;
        const viewportHeight = window.innerHeight;
        if (rectTop < viewportHeight && rectBottom > 0) {
          const scrollPercent = (rectTop + pos.height) / (viewportHeight + pos.height);
          const translateVal = (scrollPercent - 0.5) * 90;
          companyVideo.style.transform = `scale(1.15) translateY(${translateVal}px)`;
        }
      }
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
      
      const maxDistance = viewportHeight * 0.7;
      let opacity = 1 - (distanceFromCenter / maxDistance);
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

    // 5. Cinematic Credit Roll Section (#statement) with Art Animations
    if (statementSection) {
      const pos = sectionPositions.statement;
      const rectTop = pos.top - scrollY;
      const rectBottom = rectTop + pos.height;
      const viewportHeight = window.innerHeight;
      
      if (rectTop < viewportHeight && rectBottom > 0) {
        const enterEnd = 0.3;
        const exitStart = 0.7;
        const globalOverlay = document.querySelector('.global-dark-overlay');
        if (globalOverlay) {
          let radius = 0;
          const sectionCenterY = rectTop + pos.height / 2;
          const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
          const maxRadius = (diagonal / 2) * 1.15;
          
          if (statementProgress < enterEnd) {
            const ratio = statementProgress / enterEnd;
            const easedRatio = ratio * ratio * (3 - 2 * ratio);
            radius = easedRatio * maxRadius;
          } else if (statementProgress > exitStart) {
            const ratio = (statementProgress - exitStart) / (1 - exitStart);
            const t = 1 - ratio;
            const easedRatio = t * t * (3 - 2 * t);
            radius = easedRatio * maxRadius;
          } else {
            radius = maxRadius;
          }
          
          globalOverlay.style.clipPath = `circle(${radius}px at 50% ${sectionCenterY}px)`;
        }
        
        // Label opacity control (Philosophy)
        const label = statementSection.querySelector('.section-label');
        if (label) {
          let labelOpacity = 0;
          if (statementProgress >= 0.1 && statementProgress <= 0.3) {
            labelOpacity = (statementProgress - 0.1) / 0.2;
          } else if (statementProgress > 0.3 && statementProgress < 0.7) {
            labelOpacity = 1;
          } else if (statementProgress >= 0.7 && statementProgress <= 0.9) {
            labelOpacity = 1 - (statementProgress - 0.7) / 0.2;
          }
          label.style.opacity = labelOpacity;
        }
        
        if (statementProgress >= 0.05 && statementProgress <= 0.95) {
          statementSection.classList.add('active-theater');
          header.classList.add('header-dark');
        } else {
          statementSection.classList.remove('active-theater');
          header.classList.remove('header-dark');
        }
        
        const creditRoll = statementSection.querySelector('.credit-roll');
        const creditWindow = statementSection.querySelector('.credit-window');
        
        if (creditRoll && creditWindow) {
          const rollHeight = creditRoll.offsetHeight;
          const windowHeight = creditWindow.offsetHeight;
          const windowRect = creditWindow.getBoundingClientRect();
          const windowCenterY = windowRect.top + windowHeight / 2;
          
          const startY = windowHeight * 1.05;
          const endY = -rollHeight - windowHeight * 0.05;
          
          let scrollProgress = 0;
          const scrollStart = 0.38;
          
          if (statementProgress < scrollStart) {
            scrollProgress = 0;
          } else if (statementProgress > exitStart) {
            scrollProgress = 1;
          } else {
            scrollProgress = (statementProgress - scrollStart) / (exitStart - scrollStart);
          }
          const currentY = startY + scrollProgress * (endY - startY);
          
          creditRoll.style.transform = `translateY(${currentY}px)`;
          
          // Credit roll opacity control
          let rollOpacity = 0;
          if (statementProgress >= 0.25 && statementProgress <= 0.35) {
            rollOpacity = (statementProgress - 0.25) / 0.1;
          } else if (statementProgress > 0.35 && statementProgress < 0.65) {
            rollOpacity = 1;
          } else if (statementProgress >= 0.65 && statementProgress <= 0.75) {
            rollOpacity = 1 - (statementProgress - 0.65) / 0.1;
          }
          creditRoll.style.opacity = rollOpacity;
          
          const paragraphs = statementSection.querySelectorAll('.statement-desc p');
          
          paragraphs.forEach((el) => {
            if (!el) return;
            const elRect = el.getBoundingClientRect();
            const elCenterY = elRect.top + elRect.height / 2;
            
            let diffY = elCenterY - windowCenterY;
            
            // 下方向（次に読まれる行）へはっきり表示する範囲を2行分（約24%）拡張する
            const lineOffset = windowHeight * 0.24;
            if (diffY > 0) {
              diffY = Math.max(0, diffY - lineOffset);
            }
            
            const maxDistance = windowHeight * 0.45;
            
            let x = diffY / maxDistance;
            x = Math.max(-1, Math.min(1, x));
            
            const elOpacity = Math.max(0, Math.cos(x * Math.PI / 2));
            const elRotateX = x * -20;
            const elTranslateY = x * -10;
            
            el.style.opacity = elOpacity;
            el.style.transform = `translateY(${elTranslateY}px) rotateX(${elRotateX}deg)`;
          });
        }
      } else {
        const globalOverlay = document.querySelector('.global-dark-overlay');
        if (globalOverlay) {
          globalOverlay.style.clipPath = 'circle(0px at 50% 50%)';
        }
        statementSection.classList.remove('active-theater');
        header.classList.remove('header-dark');
        
        const label = statementSection.querySelector('.section-label');
        const paragraphs = statementSection.querySelectorAll('.statement-desc p');
        
        const resetEl = (el) => {
          if (el) {
            el.style.opacity = '';
            el.style.transform = '';
          }
        };
        resetEl(label);
        paragraphs.forEach(p => resetEl(p));
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
    if (typeof handleServiceScroll === 'function') {
      handleServiceScroll(smoothScrollY);
    }
    
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
    if (typeof handleServiceScroll === 'function') {
      handleServiceScroll(window.scrollY);
    }
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

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


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

    // Definition of three wave bands with differing frequencies, waves, and speeds (cyan/blue theme)
    const waves = [
      {
        y: 0.55, // Center line position (55% height)
        length: 0.002, // Wave frequency (low, long waves)
        amplitude: 70, // Height of the waves
        speed: 0.008, // Animation speed
        lines: 10, // Number of parallel lines to draw
        color: 'rgba(0, 180, 216, 0.05)' // Light cyan color
      },
      {
        y: 0.60,
        length: 0.004, // Wave frequency (mid)
        amplitude: 45,
        speed: 0.015,
        lines: 8,
        color: 'rgba(72, 149, 239, 0.04)' // Soft blue color
      },
      {
        y: 0.50,
        length: 0.0015, // Wave frequency (very long waves)
        amplitude: 85,
        speed: 0.004,
        lines: 6,
        color: 'rgba(67, 97, 238, 0.03)' // Deep indigo-blue color
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
          ctx.strokeStyle = wave.color;
          
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


  // --- SERVICE STICKY SCROLL SWITCHING ---
  const serviceSection = document.getElementById('service');
  if (serviceSection) {
    const cards = serviceSection.querySelectorAll('.service-content-card');
    const navItems = serviceSection.querySelectorAll('.service-nav-item');
    const dots = serviceSection.querySelectorAll('.service-dot');
    
    handleServiceScroll = (scrollY) => {
      // Only run sticky calculations on desktop (screen width >= 992px)
      if (window.innerWidth < 992) {
        // Reset styles for mobile just in case
        cards.forEach(card => {
          card.classList.remove('active', 'exit-up', 'exit-down');
        });
        navItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        return;
      }

      const pos = sectionPositions.service;
      const rectTop = pos.top - scrollY;
      const viewportHeight = window.innerHeight;
      const totalScrollable = pos.height - viewportHeight;
      
      if (totalScrollable <= 0) return;

      // Manually trigger reveal animations when scroll reaches the sticky section
      if (scrollY >= pos.top - 120) {
        const leftCol = serviceSection.querySelector('.service-sticky-left');
        const rightCol = serviceSection.querySelector('.service-sticky-right');
        if (leftCol && !leftCol.classList.contains('visible')) {
          leftCol.classList.add('visible');
        }
        if (rightCol && !rightCol.classList.contains('visible')) {
          rightCol.classList.add('visible');
        }
      }
      
      // Calculate scroll progress within the sticky section
      const scrolled = -rectTop;
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      
      const numCards = cards.length;
      let activeIndex = Math.floor(progress * numCards);
      if (activeIndex >= numCards) activeIndex = numCards - 1;
      
      // Update active state of cards
      cards.forEach((card, idx) => {
        if (idx === activeIndex) {
          card.classList.add('active');
          card.classList.remove('exit-up', 'exit-down');
        } else {
          card.classList.remove('active');
          if (idx < activeIndex) {
            card.classList.add('exit-up');
            card.classList.remove('exit-down');
          } else {
            card.classList.add('exit-down');
            card.classList.remove('exit-up');
          }
        }
      });
      
      // Update active state of nav items
      navItems.forEach((item, idx) => {
        if (idx === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Update active state of dots
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };
    
    // Helper function to find closest card snap point
    const getClosestSnapPointIndex = (scrollY) => {
      let closestIndex = 0;
      let minDiff = Infinity;
      serviceSnapPoints.forEach((point, idx) => {
        const diff = Math.abs(point - scrollY);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });
      return closestIndex;
    };

    // Smoothly scrolls to target card snap point and enforces a cooldown
    const scrollToSnapPoint = (index) => {
      if (index < 0 || index >= serviceSnapPoints.length) return;
      isScrollingToCard = true;
      const targetY = serviceSnapPoints[index];
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isScrollingToCard = false;
      }, 600);
    };

    // Add click listeners to nav items for smooth navigation to segments
    navItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        isLockedInService = true;
        activeCardIndex = idx;
        scrollToSnapPoint(idx);
      });
    });

    // Add click listeners to dots for smooth navigation to segments
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        isLockedInService = true;
        activeCardIndex = idx;
        scrollToSnapPoint(idx);
      });
    });

    // Intercept scroll wheel events to lock in the What We Do section
    window.addEventListener('wheel', (e) => {
      if (window.innerWidth < 992) return;
      if (serviceSnapPoints.length < 3) return;

      const currentScrollY = window.scrollY;
      const deltaY = e.deltaY;
      
      const serviceStart = serviceSnapPoints[0];
      const serviceEnd = serviceSnapPoints[2];
      
      // Ignore wheel input while scroll animation is in progress
      if (isScrollingToCard) {
        e.preventDefault();
        return;
      }
      
      if (isLockedInService) {
        if (deltaY > 0) {
          // Scroll Down
          if (activeCardIndex < 2) {
            e.preventDefault();
            activeCardIndex++;
            scrollToSnapPoint(activeCardIndex);
          } else {
            // Exiting downwards
            isLockedInService = false;
          }
        } else if (deltaY < 0) {
          // Scroll Up
          if (activeCardIndex > 0) {
            e.preventDefault();
            activeCardIndex--;
            scrollToSnapPoint(activeCardIndex);
          } else {
            // Exiting upwards
            isLockedInService = false;
          }
        }
        return;
      }
      
      // Check if we should lock into service sticky scroll snapping
      if (currentScrollY >= serviceStart - 15 && currentScrollY <= serviceEnd + 15) {
        // Do not snap lock if user is scrolling in the exit direction
        if (currentScrollY <= serviceStart + 50 && deltaY < 0) {
          return; // Exiting upwards
        }
        if (currentScrollY >= serviceEnd - 50 && deltaY > 0) {
          return; // Exiting downwards
        }
        
        e.preventDefault();
        isLockedInService = true;
        activeCardIndex = getClosestSnapPointIndex(currentScrollY);
        scrollToSnapPoint(activeCardIndex);
      }
    }, { passive: false });

    // Intercept key down events to support keyboard scroll locking (Arrows, PageUp/PageDown, Space)
    window.addEventListener('keydown', (e) => {
      if (window.innerWidth < 992) return;
      if (serviceSnapPoints.length < 3) return;

      const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '];
      if (!keys.includes(e.key)) return;

      const currentScrollY = window.scrollY;
      const serviceStart = serviceSnapPoints[0];
      const serviceEnd = serviceSnapPoints[2];

      if (isScrollingToCard) {
        e.preventDefault();
        return;
      }

      let direction = 0; // 1 for down, -1 for up
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        direction = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        direction = -1;
      }

      if (direction === 0) return;

      if (isLockedInService) {
        if (direction === 1) {
          if (activeCardIndex < 2) {
            e.preventDefault();
            activeCardIndex++;
            scrollToSnapPoint(activeCardIndex);
          } else {
            isLockedInService = false;
          }
        } else {
          if (activeCardIndex > 0) {
            e.preventDefault();
            activeCardIndex--;
            scrollToSnapPoint(activeCardIndex);
          } else {
            isLockedInService = false;
          }
        }
        return;
      }

      if (currentScrollY >= serviceStart - 15 && currentScrollY <= serviceEnd + 15) {
        if (currentScrollY <= serviceStart + 50 && direction === -1) {
          return; // Exiting upwards
        }
        if (currentScrollY >= serviceEnd - 50 && direction === 1) {
          return; // Exiting downwards
        }
        
        e.preventDefault();
        isLockedInService = true;
        activeCardIndex = getClosestSnapPointIndex(currentScrollY);
        scrollToSnapPoint(activeCardIndex);
      }
    }, { passive: false });

    // Initial trigger
    handleServiceScroll(window.scrollY);
  }


  // --- CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  const successAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      // Show sending loading state
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中...';
      submitBtn.style.opacity = '0.7';

      // Mock API delay
      setTimeout(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
        
        // Hide form, show alert message
        contactForm.style.display = 'none';
        successAlert.style.display = 'flex';
        
        // Scroll slightly to position success alert nicely
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1500);
    });
  }

});
