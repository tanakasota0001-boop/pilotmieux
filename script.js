document.addEventListener('DOMContentLoaded', () => {

  // --- ARTISTIC LOADER CONTROL (FIRST ACCESS ONLY) ---
  const loaderOverlay = document.getElementById('loader-overlay');
  // sessionStorageが端末側で保持されない場合に備え、同一サイト内からの遷移かもあわせて判定する
  const cameFromSameSite = !!(document.referrer && document.referrer.indexOf(location.origin) === 0);
  let hasVisited = cameFromSameSite;
  try {
    hasVisited = hasVisited || !!sessionStorage.getItem('pilotmieux_visited');
  } catch (e) {}
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
        try {
          sessionStorage.setItem('pilotmieux_visited', 'true');
        } catch (e) {}
        
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

  if (hasVisited) {
    // Already visited during this session: Skip loader on page navigation
    if (loaderOverlay) {
      loaderOverlay.style.display = 'none';
    }
    document.body.classList.remove('loading');
  } else {
    // First time access in this session: Show loader animation
    try {
      sessionStorage.setItem('pilotmieux_visited', 'true');
    } catch (e) {}

    if (loaderOverlay) {
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
    } else {
      document.body.classList.remove('loading');
    }
  }

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
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Scroll to Top button visibility
    if (scrollTopBtn) {
      if (scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
      } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
      }
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
    if (heroContent) {
      heroContent.style.opacity = Math.max(0, 1 - scrollY / 700);
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

    // 5. Normal Header Dark Toggle & Ambient Orbs Parallax on Statement (Philosophy) Section
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

      // Ambient Orbs parallax inside Philosophy
      const orbP1 = document.querySelector('.orb-p-1');
      const orbP2 = document.querySelector('.orb-p-2');
      if (orbP1 && orbP2) {
        const offset = (scrollY - pos.top) * 0.15;
        orbP1.style.transform = `translateY(${offset}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.05})`;
        orbP2.style.transform = `translateY(${-offset * 0.8}px) scale(${1 + Math.cos(scrollY * 0.002) * 0.05})`;
      }
    }
  };

  // Set initial state
  if (scrollTopBtn) {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.pointerEvents = 'none';
    scrollTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }
  
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
    initScrollytelling();
    initPhilosophyScrollytelling();
  });

  // Initial load
  updateSectionPositions();
  renderAnimations(window.scrollY);

  // Scroll to top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- MOBILE & DROPDOWN NAVIGATION ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownLinks = document.querySelectorAll('.dropdown-link');
  const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

  const closeMobileMenu = () => {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      const spans = mobileToggle ? mobileToggle.querySelectorAll('span') : [];
      if (spans.length >= 3) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  };

  const navBackdrop = document.getElementById('nav-backdrop');

  const closeAllDropdowns = () => {
    dropdownItems.forEach(item => {
      item.classList.remove('is-open');
      const toggle = item.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
    document.body.classList.remove('dropdown-active');
  };

  // Dropdown hover handling for backdrop dimming
  dropdownItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        document.body.classList.add('dropdown-active');
      }
    });
    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768 && !item.classList.contains('is-open')) {
        document.body.classList.remove('dropdown-active');
      }
    });
  });

  // Dropdown toggle click handler (supports mobile accordion and desktop click)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = toggle.closest('.nav-item-dropdown');
      if (parent) {
        const isOpen = parent.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (window.innerWidth > 768) {
          document.body.classList.toggle('dropdown-active', isOpen);
        }
      }
    });
  });

  // Close dropdown on backdrop click
  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => {
      closeAllDropdowns();
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      closeAllDropdowns();
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
      
      // Animate burger lines
      const spans = mobileToggle.querySelectorAll('span');
      if (spans.length >= 3) {
        if (isOpen) {
          spans[0].style.transform = 'translateY(8px) rotate(45deg)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }
    });

    // Close menu when links are clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
        closeAllDropdowns();
      });
    });

    // Close menu on screen resize to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
        closeAllDropdowns();
      }
    });
  }


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

  // If loader overlay is not present or user already visited, initialize reveal animations immediately
  if (!loaderOverlay || hasVisited) {
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

    // Definition of three wave bands shifted downwards to prevent overlap with text
    const waves = [
      {
        y: 0.72, // Center line position shifted down (72% height) to sit below text
        length: 0.002, // Wave frequency (low, long waves)
        amplitude: 50, // Height of the waves (slightly reduced to avoid text overlap)
        speed: 0.008, // Animation speed
        lines: 10, // Number of parallel lines to draw
        type: 'cyan'
      },
      {
        y: 0.78, // Shifted down (78% height)
        length: 0.004, // Wave frequency (mid)
        amplitude: 30, // Reduced amplitude
        speed: 0.015,
        lines: 8,
        type: 'blue'
      },
      {
        y: 0.66, // Shifted down (66% height)
        length: 0.0015, // Wave frequency (very long waves)
        amplitude: 55, // Reduced amplitude
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
          
          // Create horizontal gradient for waves (opacity reduced for better text contrast)
          const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
          if (wave.type === 'cyan') {
            grad.addColorStop(0, 'rgba(0, 180, 216, 0.04)');
            grad.addColorStop(0.5, 'rgba(72, 149, 239, 0.15)');
            grad.addColorStop(1, 'rgba(114, 9, 183, 0.04)');
          } else if (wave.type === 'blue') {
            grad.addColorStop(0, 'rgba(72, 149, 239, 0.03)');
            grad.addColorStop(0.5, 'rgba(114, 9, 183, 0.12)');
            grad.addColorStop(1, 'rgba(247, 37, 133, 0.03)');
          } else {
            grad.addColorStop(0, 'rgba(114, 9, 183, 0.02)');
            grad.addColorStop(0.5, 'rgba(0, 180, 216, 0.10)');
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

  // --- SCROLLYTELLING CONTROL ---
  const scrollySteps = document.querySelectorAll('.scrolly-step');
  const scrollyVisualItems = document.querySelectorAll('.scrolly-visual-item');
  let scrollyObserver = null;

  const initScrollytelling = () => {
    // Clean up existing observer if any
    if (scrollyObserver) {
      scrollyObserver.disconnect();
    }

    if (window.innerWidth >= 992) {
      // Desktop scrollytelling mode
      scrollySteps.forEach(step => step.classList.remove('active'));
      scrollyVisualItems.forEach(item => item.classList.remove('active'));

      // Set initial first step active to avoid empty visual on load
      if (scrollySteps[0]) scrollySteps[0].classList.add('active');
      if (scrollyVisualItems[0]) scrollyVisualItems[0].classList.add('active');
      scrollyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepIndex = entry.target.getAttribute('data-step');
            
            // Deactivate all steps & visuals
            scrollySteps.forEach(step => step.classList.remove('active'));
            scrollyVisualItems.forEach(item => item.classList.remove('active'));
            
            // Activate current step & visual
            entry.target.classList.add('active');
            const activeVisual = document.querySelector(`.scrolly-visual-item[data-step="${stepIndex}"]`);
            if (activeVisual) {
              activeVisual.classList.add('active');
            }
          }
        });
      }, {
        root: null,
        // Trigger when the step enters the middle section of the viewport
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0
      });

      scrollySteps.forEach(step => {
        scrollyObserver.observe(step);
      });
    } else {
      // Mobile fallback: all active
      scrollySteps.forEach(step => step.classList.add('active'));
      scrollyVisualItems.forEach(item => item.classList.add('active'));
    }
  };

  // Initialize scrollytelling
  initScrollytelling();

  // --- PHILOSOPHY SCROLLYTELLING CONTROL ---
  const philosophySteps = document.querySelectorAll('.philosophy-step');
  let philosophyObserver = null;

  const initPhilosophyScrollytelling = () => {
    if (philosophyObserver) {
      philosophyObserver.disconnect();
    }

    if (philosophySteps.length > 0) {
      if (window.innerWidth >= 768) {
        // Desktop scrollytelling mode (PC版: 一切変更なし)
        philosophySteps.forEach((step, idx) => {
          if (idx === 0) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });

        philosophyObserver = new IntersectionObserver((entries) => {
          const intersectingEntries = entries.filter(entry => entry.isIntersecting);
          if (intersectingEntries.length > 0) {
            const targetEntry = intersectingEntries[intersectingEntries.length - 1];
            philosophySteps.forEach(step => step.classList.remove('active'));
            targetEntry.target.classList.add('active');
          }
        }, {
          root: null,
          rootMargin: '-35% 0px -40% 0px',
          threshold: 0
        });

        philosophySteps.forEach(step => {
          philosophyObserver.observe(step);
        });
      } else {
        // Mobile mode: PC版と同様のフェードイン＆フェードアウト（相互排他）だが、上部に流れてから切り替わるよう調整
        philosophySteps.forEach((step, idx) => {
          if (idx === 0) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });

        philosophyObserver = new IntersectionObserver((entries) => {
          const intersectingEntries = entries.filter(entry => entry.isIntersecting);
          if (intersectingEntries.length > 0) {
            const targetEntry = intersectingEntries[intersectingEntries.length - 1];
            philosophySteps.forEach(step => step.classList.remove('active'));
            targetEntry.target.classList.add('active');
          }
        }, {
          root: null,
          rootMargin: '-20% 0px -40% 0px',
          threshold: 0
        });

        philosophySteps.forEach(step => {
          philosophyObserver.observe(step);
        });
      }
    }
  };

  // Initialize philosophy scrollytelling
  initPhilosophyScrollytelling();

});
