document.addEventListener('DOMContentLoaded', () => {

  // --- STICKY HEADER & SCROLL EFFECTS ---
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
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

    // --- PARALLAX EFFECT ---

    // 1. Ambient Background Orbs
    const orb1 = document.querySelector('.orb-w-1');
    const orb2 = document.querySelector('.orb-w-2');
    const orb3 = document.querySelector('.orb-w-3');
    if (orb1) orb1.style.transform = `translateY(${scrollY * 0.22}px)`;
    if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.12}px)`;
    if (orb3) orb3.style.transform = `translateY(${scrollY * 0.08}px)`;

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
        const rect = companyBanner.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollPercent = (rect.top + rect.height) / (viewportHeight + rect.height);
          const translateVal = (scrollPercent - 0.5) * 90; // smooth range translation
          companyVideo.style.transform = `scale(1.15) translateY(${translateVal}px)`;
        }
      }
    }

    // 4. Parallax & Fade on Ticker Section (Arts-site Style)
    const tickerSection = document.getElementById('ticker-section');
    if (tickerSection) {
      const rect = tickerSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const tickerCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(tickerCenter - viewportCenter);
      
      const maxDistance = viewportHeight * 0.7; // fade boundary
      let opacity = 1 - (distanceFromCenter / maxDistance);
      opacity = Math.max(0, Math.min(1, opacity));
      
      const scale = 0.93 + opacity * 0.07;
      let skew = (tickerCenter - viewportCenter) * 0.035; // dynamic skew angle
      skew = Math.max(-8, Math.min(8, skew)); // clamp skew

      tickerSection.style.opacity = opacity;
      tickerSection.style.transform = `scale(${scale}) skewY(${skew * 0.2}deg)`;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        tickerSection.classList.add('visible');
      } else {
        tickerSection.classList.remove('visible');
      }
    }

    // 5. Cinematic Credit Roll Section (#statement)
    const statementSection = document.getElementById('statement');
    if (statementSection) {
      const rect = statementSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // セクションが画面内に存在するかチェック
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // スクロール進捗を 0 から 1 に正規化
        // 0: セクションの上端が画面の下端に達したとき
        // 1: セクションの下端が画面の上端に達したとき
        const totalDist = rect.height + viewportHeight;
        const scrolledDist = viewportHeight - rect.top;
        let progress = scrolledDist / totalDist;
        progress = Math.max(0, Math.min(1, progress));
        
        // 背景暗転オーバーレイの不透明度計算
        // 開始時（0%〜20%）でフェードイン、終了時（80%〜100%）でフェードアウト
        let bgOpacity = 0;
        if (progress < 0.2) {
          bgOpacity = progress / 0.2;
        } else if (progress > 0.8) {
          bgOpacity = (1 - progress) / 0.2;
        } else {
          bgOpacity = 1;
        }
        
        const overlay = statementSection.querySelector('.credit-bg-overlay');
        if (overlay) {
          overlay.style.opacity = bgOpacity;
        }
        
        // ダークモードクラスのトグル（背景が十分に暗くなったら文字色を白くする）
        if (bgOpacity > 0.4) {
          statementSection.classList.add('active-theater');
        } else {
          statementSection.classList.remove('active-theater');
        }
        
        // クレジットロール（文字盤）の上昇スクロール
        const creditRoll = statementSection.querySelector('.credit-roll');
        const creditWindow = statementSection.querySelector('.credit-window');
        if (creditRoll && creditWindow) {
          const rollHeight = creditRoll.offsetHeight;
          const windowHeight = creditWindow.offsetHeight;
          
          // 進捗率 0 のときは creditRoll はウィンドウの底（windowHeight）に配置
          // 進捗率 1 のときは creditRoll はウィンドウのトップから見えなくなる位置（-rollHeight）に配置
          const startY = windowHeight;
          const endY = -rollHeight;
          
          const currentY = startY + progress * (endY - startY);
          creditRoll.style.transform = `translateY(${currentY}px)`;
        }
      } else {
        // 画面外のときは暗転をリセット
        const overlay = statementSection.querySelector('.credit-bg-overlay');
        if (overlay) {
          overlay.style.opacity = 0;
        }
        statementSection.classList.remove('active-theater');
      }
    }
  };

  // Set initial state
  scrollTopBtn.style.opacity = '0';
  scrollTopBtn.style.pointerEvents = 'none';
  scrollTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll(); // Trigger once on load

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
      
      // Leaving a slight trail of previous frames for motion blur
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
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
    
    const handleServiceScroll = () => {
      // Only run sticky calculations on desktop (screen width >= 992px)
      if (window.innerWidth < 992) {
        // Reset styles for mobile just in case
        cards.forEach(card => {
          card.classList.remove('active', 'exit-up', 'exit-down');
        });
        navItems.forEach(item => item.classList.remove('active'));
        serviceSection.removeAttribute('data-active-index');
        serviceSection.style.removeProperty('--scroll-progress');
        return;
      }

      const rect = serviceSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;
      
      if (totalScrollable <= 0) return;
      
      // Calculate scroll progress within the sticky section
      const scrolled = -rect.top;
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      
      const numCards = cards.length;
      let activeIndex = Math.floor(progress * numCards);
      if (activeIndex >= numCards) activeIndex = numCards - 1;
      
      // Update section data attribute and custom property for ambient background transition
      serviceSection.setAttribute('data-active-index', activeIndex);
      serviceSection.style.setProperty('--scroll-progress', progress);
      
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
    };
    
    // Add click listeners to nav items for smooth navigation to segments
    navItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        const rect = serviceSection.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const viewportHeight = window.innerHeight;
        const totalScrollable = rect.height - viewportHeight;
        
        // Calculate scroll target based on index segment center
        const segmentCenter = (idx + 0.5) / navItems.length;
        const targetScroll = absoluteTop + segmentCenter * totalScrollable;
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      });
    });

    window.addEventListener('scroll', handleServiceScroll);
    window.addEventListener('resize', handleServiceScroll);
    handleServiceScroll(); // trigger once initially
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
