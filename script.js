/**
 * SANTHOSH BUSSA DEVELOPER PORTFOLIO v2 — CLIENT ENGINE
 * Handles:
 *  1. Modern Web Guidance compliant Theme Engine
 *  2. Web Audio API SFX Synthesizer
 *  3. Interactive 3D Bento Tilt & Cursor Spotlight
 *  4. Hero Dynamic Typist Engine
 *  5. Spring Boot 3 REST API Interactive Simulator
 *  6. System Architecture Blueprint Inspector
 *  7. Skills Matrix Filter
 *  8. DevOS Hacker Terminal Shell (with Tab autocomplete & Command History)
 *  9. Matrix Digital Rain & Particle Mesh Canvas Systems
 * 10. Direct WhatsApp & Recruiter Connect Gateways
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. AUDIO SYNTHESIZER (Web Audio API)
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
      } catch (e) {}
    }

    playKeystroke() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200 + Math.random() * 200, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
      } catch (e) {}
    }

    playSuccess() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.05, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.2);
        });
      } catch (e) {}
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  const sfx = new SoundEngine();

  /* ==========================================================================
     2. THEME ENGINE (Modern Web Guidance Compliant)
     ========================================================================== */
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const iconSun = btnThemeToggle.querySelector('.icon-sun');
  const iconMoon = btnThemeToggle.querySelector('.icon-moon');

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getResolvedTheme() {
    const metaVal = metaColorScheme.content;
    if (metaVal === 'dark') return 'dark';
    if (metaVal === 'light') return 'light';
    return getSystemPreference();
  }

  function updateThemeIcons(activeTheme) {
    if (activeTheme === 'dark') {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    } else {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    }
  }

  function applyThemeToggle() {
    const current = getResolvedTheme();
    const target = current === 'dark' ? 'light' : 'dark';
    const system = getSystemPreference();

    if (target === system) {
      localStorage.removeItem('color-scheme');
      metaColorScheme.content = 'light dark';
    } else {
      localStorage.setItem('color-scheme', target);
      metaColorScheme.content = target;
    }

    updateThemeIcons(target);
    sfx.playClick();
  }

  btnThemeToggle.addEventListener('click', applyThemeToggle);
  updateThemeIcons(getResolvedTheme());

  // Sound toggle button
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const iconSoundOn = btnSoundToggle.querySelector('.icon-sound-on');
  const iconSoundOff = btnSoundToggle.querySelector('.icon-sound-off');

  btnSoundToggle.addEventListener('click', () => {
    const isOn = sfx.toggle();
    iconSoundOn.style.display = isOn ? 'block' : 'none';
    iconSoundOff.style.display = isOn ? 'none' : 'block';
    if (isOn) sfx.playClick();
  });

  /* ==========================================================================
     3. VIEW MODE CONTROLLER (Bento GUI <-> DevOS CLI)
     ========================================================================== */
  const bentoView = document.getElementById('bentoView');
  const terminalView = document.getElementById('terminalView');
  const btnModeBento = document.getElementById('btnModeBento');
  const btnModeTerminal = document.getElementById('btnModeTerminal');
  const btnHeroOpenCli = document.getElementById('btnHeroOpenCli');
  const btnTermClose = document.getElementById('btnTermClose');
  const termInput = document.getElementById('termInput');

  function setViewMode(mode) {
    sfx.playClick();
    if (mode === 'terminal') {
      bentoView.classList.remove('active-view');
      terminalView.classList.add('active-view');
      btnModeBento.classList.remove('active');
      btnModeTerminal.classList.add('active');
      setTimeout(() => termInput.focus(), 150);
    } else {
      terminalView.classList.remove('active-view');
      bentoView.classList.add('active-view');
      btnModeTerminal.classList.remove('active');
      btnModeBento.classList.add('active');
    }
  }

  btnModeBento.addEventListener('click', () => setViewMode('bento'));
  btnModeTerminal.addEventListener('click', () => setViewMode('terminal'));
  btnHeroOpenCli.addEventListener('click', () => setViewMode('terminal'));
  btnTermClose.addEventListener('click', () => setViewMode('bento'));

  /* ==========================================================================
     4. HERO TYPIST ENGINE
     ========================================================================== */
  const typistTarget = document.getElementById('typistTarget');
  const roles = [
    'Spring Boot 3 & Microservices Architecture',
    'Stateless JWT Security & RBAC Pipelines',
    'High-Throughput RESTful API Architecture',
    'Indexed PostgreSQL & Hibernate ORM Caching',
    'Enterprise Data Structures & Algorithms (360+ Solved)'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function runTypist() {
    const current = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
      typistTarget.textContent = current.substring(0, charIdx);
      typeSpeed = 35;
    } else {
      charIdx++;
      typistTarget.textContent = current.substring(0, charIdx);
      typeSpeed = 70;
    }

    if (!isDeleting && charIdx === current.length) {
      typeSpeed = 2200; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before new word
    }

    setTimeout(runTypist, typeSpeed);
  }
  runTypist();

  /* ==========================================================================
     5. 3D BENTO TILT & RADIAL SPOTLIGHT
     ========================================================================== */
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  /* ==========================================================================
     6. SPRING BOOT REST API SIMULATOR
     ========================================================================== */
  const apiEndpointSelect = document.getElementById('apiEndpointSelect');
  const btnExecuteApi = document.getElementById('btnExecuteApi');
  const apiRouteDisplay = document.getElementById('apiRouteDisplay');
  const apiStatusBadge = document.getElementById('apiStatusBadge');
  const apiLatencyBadge = document.getElementById('apiLatencyBadge');
  const apiResponseBody = document.getElementById('apiResponseBody');
  const btnCopyApiOutput = document.getElementById('btnCopyApiOutput');

  const apiMockData = {
    'auth-login': {
      route: 'POST https://api.santhosh.dev/v1/auth/login',
      status: '200 OK',
      latency: '18ms',
      payload: {
        status: 'SUCCESS',
        code: 200,
        timestamp: new Date().toISOString(),
        data: {
          tokenType: 'Bearer',
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW50aG9zaC5idXNzYSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNzM5MDc4NDAwfQ.SignatureValidated',
          expiresIn: 86400,
          user: {
            id: 'usr_9981',
            username: 'santhosh.bussa',
            role: 'ROLE_ADMIN',
            organization: 'Test Yantra Software Solutions',
            permissions: ['READ_TELEMETRY', 'EXECUTE_ORDERS', 'WRITE_PRODUCTS', 'MANAGE_RBAC']
          }
        }
      }
    },
    'products-list': {
      route: 'GET https://api.santhosh.dev/v1/products?category=electronics&page=1',
      status: '200 OK',
      latency: '24ms',
      payload: {
        status: 'SUCCESS',
        page: 1,
        pageSize: 10,
        totalItems: 48,
        data: [
          {
            id: 'prd_101',
            name: 'High-Performance Spring Microservices Node',
            category: 'electronics',
            price: 499.00,
            stock: 35,
            rating: 4.9,
            cached: true
          },
          {
            id: 'prd_102',
            name: 'Distributed Telemetry Ingestion Hub',
            category: 'electronics',
            price: 749.50,
            stock: 12,
            rating: 5.0,
            cached: true
          }
        ]
      }
    },
    'order-checkout': {
      route: 'POST https://api.santhosh.dev/v1/orders/checkout',
      status: '201 CREATED',
      latency: '36ms',
      payload: {
        orderId: 'ord_live_8841920',
        paymentGateway: 'RAZORPAY_API_V2',
        signatureVerified: true,
        hashAlgorithm: 'HMAC-SHA256',
        amountPaid: 499.00,
        currency: 'INR',
        receiptNumber: 'RCP_SANTHOSH_2026',
        status: 'CONFIRMED',
        message: 'Order persisted to PostgreSQL with transactional consistency.'
      }
    },
    'actuator-health': {
      route: 'GET https://api.santhosh.dev/actuator/health',
      status: '200 UP',
      latency: '8ms',
      payload: {
        status: 'UP',
        components: {
          db: {
            status: 'UP',
            details: {
              database: 'PostgreSQL 16.2',
              connectionPool: 'HikariCP',
              activeConnections: 4,
              maxConnections: 30
            }
          },
          diskSpace: { status: 'UP', total: '256GB', free: '184GB' },
          jvm: {
            runtime: 'OpenJDK 64-Bit Server VM (build 17.0.12+7)',
            uptimeMs: 84920400,
            threadCount: 42
          }
        }
      }
    }
  };

  function executeApiCall() {
    sfx.playClick();
    const endpointKey = apiEndpointSelect.value;
    const res = apiMockData[endpointKey];

    apiRouteDisplay.textContent = 'Executing: ' + res.route + ' ...';
    apiStatusBadge.textContent = 'PENDING';
    apiStatusBadge.style.color = 'var(--accent-amber)';
    apiLatencyBadge.textContent = '...';
    btnExecuteApi.disabled = true;

    setTimeout(() => {
      sfx.playSuccess();
      apiRouteDisplay.textContent = res.route;
      apiStatusBadge.textContent = res.status;
      apiStatusBadge.style.color = 'var(--accent-emerald)';
      apiLatencyBadge.textContent = res.latency;
      apiResponseBody.textContent = JSON.stringify(res.payload, null, 2);
      btnExecuteApi.disabled = false;
    }, 280);
  }

  btnExecuteApi.addEventListener('click', executeApiCall);
  apiEndpointSelect.addEventListener('change', executeApiCall);

  btnCopyApiOutput.addEventListener('click', () => {
    sfx.playClick();
    navigator.clipboard.writeText(apiResponseBody.textContent).then(() => {
      const originalText = btnCopyApiOutput.querySelector('span').textContent;
      btnCopyApiOutput.querySelector('span').textContent = 'Copied!';
      setTimeout(() => {
        btnCopyApiOutput.querySelector('span').textContent = originalText;
      }, 1500);
    });
  });

  /* ==========================================================================
     7. ARCHITECTURE BLUEPRINT INSPECTOR
     ========================================================================== */
  const archNodes = document.querySelectorAll('.arch-node');
  const archDetailTitle = document.getElementById('archDetailTitle');
  const archDetailDesc = document.getElementById('archDetailDesc');

  const archData = {
    gateway: {
      title: 'Spring Cloud Gateway (Reverse Proxy & Edge Ingress)',
      desc: 'Central entry gate implementing non-blocking asynchronous Netty routing, client IP token bucket rate-limiting, SSL termination, and cross-origin resource sharing (CORS) pre-flight handling.'
    },
    security: {
      title: 'Spring Security Filter Chain (Stateless JWT & RBAC)',
      desc: 'Interception pipeline verifying HMAC-SHA256 signature, expiry claims, and populating SecurityContextHolder with GrantedAuthority sets (ROLE_CUSTOMER, ROLE_ADMIN) for endpoint isolation.'
    },
    services: {
      title: 'Core Microservices (Dockerized Spring Boot Nodes)',
      desc: 'Autonomous microservices (Orders, Telemetry Ingestion, AI Inference) communicating via lightweight RESTful contracts with Circuit Breaker resilience and independent scaling.'
    },
    database: {
      title: 'PostgreSQL 16 & Hibernate ORM (Storage Tier)',
      desc: 'High-performance relational persistence featuring composite B-Tree indexes, parameterized JPQL execution, HikariCP connection pooling, and ACID transactional guarantees (@Transactional).'
    }
  };

  archNodes.forEach(node => {
    node.addEventListener('click', () => {
      sfx.playClick();
      archNodes.forEach(n => n.classList.remove('active-node'));
      node.classList.add('active-node');
      const key = node.dataset.node;
      const data = archData[key];
      if (data) {
        archDetailTitle.textContent = data.title;
        archDetailDesc.textContent = data.desc;
      }
    });
  });

  /* ==========================================================================
     8. SKILLS MATRIX FILTER
     ========================================================================== */
  const skillTabs = document.querySelectorAll('.skill-tab-btn');
  const skillChips = document.querySelectorAll('.skill-chip');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sfx.playClick();
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;

      skillChips.forEach(chip => {
        if (cat === 'all' || chip.dataset.category === cat) {
          chip.style.display = 'flex';
        } else {
          chip.style.display = 'none';
        }
      });
    });
  });

  // Trigger initial filter on backend
  const defaultTab = document.querySelector('.skill-tab-btn[data-cat="backend"]');
  if (defaultTab) defaultTab.click();

  /* ==========================================================================
     9. DEVOS HACKER TERMINAL SHELL
     ========================================================================== */
  const termHistory = document.getElementById('termHistory');
  const btnTermClear = document.getElementById('btnTermClear');
  const btnTermMaximize = document.getElementById('btnTermMaximize');
  const terminalWindow = document.querySelector('.terminal-window');
  const hireModal = document.getElementById('hireModal');
  const btnCloseHireModal = document.getElementById('btnCloseHireModal');

  const commandHistory = [];
  let historyIdx = -1;

  const terminalCommands = {
    help: () => `Available DevOS Commands:
  - about       : Inspect Santhosh Bussa's background & core summary
  - skills      : Print categorized Java backend & cloud stack
  - projects    : Explore flagship repositories & architectural links
  - experience  : Review Test Yantra enterprise engineering role
  - dsa         : Solved LeetCode & GeeksforGeeks metrics
  - curl <path> : Test live mock API (e.g. curl /api/v1/auth/login)
  - matrix      : Toggle cyberpunk digital rain canvas overlay
  - sudo hire   : Execute recruitment pipeline easter egg
  - resume      : Download Santhosh's official PDF resume
  - gui         : Switch to 3D Spatial Bento GUI view
  - contact     : Print email, phone, LinkedIn & GitHub profiles
  - clear       : Clear terminal screen buffer`,

    about: () => `[SANTHOSH BUSSA]
Role       : Associate Software Engineer (Java Full-Stack & Microservices)
Experience : 1+ Years Enterprise Experience (Test Yantra, Bengaluru)
Notice     : 15 Days or less (Ready for Immediate Impact)
Education  : MCA (Master of Computer Applications) - Osmania University
Location   : Bengaluru, Karnataka, India
Philosophy : Writing clean, high-performance, modular Java code that scales.`,

    skills: () => `BACKEND CORE    : Java 17/21, Spring Boot 3, Hibernate ORM, Spring Security (JWT)
MICROSERVICES   : Spring Cloud Gateway, RESTful APIs, Swagger/OpenAPI, Feign
DATA & STORAGE  : PostgreSQL, MySQL, Redis, JPA/JPQL, Indexing Optimization
FRONTEND        : React 18, Tailwind CSS, Material UI, JavaScript ES2023
DEVOPS & TOOLS  : Docker, Docker Compose, Postman (300+ Tests), Git, Linux/Bash`,

    projects: () => `1. Ecommerce Management System (Full-Stack Backend + Frontend)
   Stack: Java 17, Spring Boot 3, Spring Security JWT, PostgreSQL, React, Razorpay
   Link : https://github.com/SanthoshBussa/ecommerce-management-system

2. ISS Orbital Real-Time AI Microservices Suite
   Stack: Spring Boot Microservices, Web Gateway, Docker Compose, Python AI
   Link : https://github.com/SanthoshBussa

3. Enterprise DSA Pattern Suite (360+ Solved)
   Stack: Java 17, LeetCode, GeeksforGeeks, 10 Algorithmic Patterns
   Link : https://github.com/SanthoshBussa/DSA`,

    experience: () => `COMPANY : Test Yantra Software Solutions, Bengaluru
ROLE    : Associate Software Engineer (Full-time)
PERIOD  : March 2025 - Present (1+ Years)
METRICS :
  - Engineered & optimized 20+ production RESTful APIs with 20% response time reduction.
  - Built stateless JWT authentication with Spring Security, mitigating 99.99% unauthorized access.
  - Authored and maintained 300+ automated test cases in Postman.
  - Active participant in architectural code reviews and Agile sprint cycles.`,

    dsa: () => `DATA STRUCTURES & ALGORITHMS METRICS:
  - Total Problems Solved : 360+ across LeetCode & GeeksforGeeks
  - Mastered Patterns    : Two Pointers, Sliding Window, Binary Trees, Graphs, Dynamic Programming
  - Focus                : Space-time optimization (O(1) / O(log N) / O(N)) & modular code`,

    contact: () => `CONTACT COORDINATES:
  Email    : iamsanthoshbussa@gmail.com
  Phone    : +91 6305344901
  LinkedIn : https://www.linkedin.com/in/santhosh-bussa
  GitHub   : https://github.com/SanthoshBussa`,

    date: () => new Date().toString(),
    whoami: () => 'santhosh.bussa@testyantra.dev',

    resume: () => {
      const link = document.createElement('a');
      link.href = 'Santhosh_Resume.pdf';
      link.download = 'Santhosh_Resume.pdf';
      link.click();
      return 'Initiated download for Santhosh_Resume.pdf...';
    },

    gui: () => {
      setViewMode('bento');
      return 'Switched to Bento GUI Mode.';
    },

    clear: () => {
      termHistory.innerHTML = '';
      return '';
    }
  };

  function handleCommand(cmdRaw) {
    const cmdClean = cmdRaw.trim();
    if (!cmdClean) return;

    commandHistory.push(cmdClean);
    historyIdx = commandHistory.length;

    const lower = cmdClean.toLowerCase();

    // Check for easter eggs
    if (lower === 'sudo hire santhosh' || lower === 'sudo hire' || lower === 'hire') {
      sfx.playSuccess();
      hireModal.style.display = 'flex';
      printTermOutput(cmdClean, 'Initiated hiring protocol! Review modal for details.');
      return;
    }

    // Check for curl command
    if (lower.startsWith('curl')) {
      sfx.playSuccess();
      const endpoint = lower.replace('curl', '').trim();
      printTermOutput(cmdClean, `HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Server: Spring-Boot/3.3.4 (Tomcat/10.1)
Content-Type: application/json

{
  "status": "SUCCESS",
  "endpoint": "${endpoint || '/api/v1'}",
  "latency": "19ms",
  "data": "Simulated REST response from Santhosh's backend engine."
}`);
      return;
    }

    if (lower === 'matrix') {
      toggleMatrixRain();
      printTermOutput(cmdClean, 'Toggled Matrix Digital Rain visual mode.');
      return;
    }

    if (terminalCommands[lower]) {
      sfx.playKeystroke();
      const out = terminalCommands[lower]();
      if (lower !== 'clear') {
        printTermOutput(cmdClean, out);
      }
    } else {
      printTermOutput(cmdClean, `devos: command not found: ${cmdClean}. Type 'help' to see valid commands.`);
    }
  }

  function printTermOutput(cmd, output) {
    const entry = document.createElement('div');
    entry.className = 'term-history-entry';

    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-cmd-echo';
    cmdLine.innerHTML = `<span class="prompt-user">santhosh@devbox</span>:<span class="prompt-path">~</span>$ <strong>${escapeHtml(cmd)}</strong>`;

    const outLine = document.createElement('div');
    outLine.className = 'term-output-text';
    outLine.textContent = output;

    entry.appendChild(cmdLine);
    entry.appendChild(outLine);
    termHistory.appendChild(entry);

    const termBody = document.getElementById('termOutputBody');
    termBody.scrollTop = termBody.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  termInput.addEventListener('keydown', e => {
    sfx.playKeystroke();

    if (e.key === 'Enter') {
      const val = termInput.value;
      termInput.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        termInput.value = commandHistory[historyIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < commandHistory.length - 1) {
        historyIdx++;
        termInput.value = commandHistory[historyIdx] || '';
      } else {
        historyIdx = commandHistory.length;
        termInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = termInput.value.toLowerCase().trim();
      const matches = Object.keys(terminalCommands).concat(['matrix', 'sudo hire santhosh', 'curl']).filter(c => c.startsWith(val));
      if (matches.length === 1) {
        termInput.value = matches[0];
      }
    }
  });

  btnTermClear.addEventListener('click', () => {
    sfx.playClick();
    terminalCommands.clear();
  });

  btnTermMaximize.addEventListener('click', () => {
    sfx.playClick();
    terminalWindow.classList.toggle('maximized');
  });

  btnCloseHireModal.addEventListener('click', () => {
    sfx.playClick();
    hireModal.style.display = 'none';
  });

  /* ==========================================================================
     10. DIGITAL RAIN & PARTICLE CANVAS SYSTEMS
     ========================================================================== */
  // Particle Canvas
  const pCanvas = document.getElementById('particleCanvas');
  const pCtx = pCanvas.getContext('2d');
  let pWidth, pHeight;
  const particles = [];

  function resizeParticles() {
    pWidth = pCanvas.width = window.innerWidth;
    pHeight = pCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeParticles);
  resizeParticles();

  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * pWidth,
      y: Math.random() * pHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5
    });
  }

  function drawParticles() {
    pCtx.clearRect(0, 0, pWidth, pHeight);
    const isDark = getResolvedTheme() === 'dark';
    pCtx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(14, 165, 233, 0.25)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = pWidth;
      if (p.x > pWidth) p.x = 0;
      if (p.y < 0) p.y = pHeight;
      if (p.y > pHeight) p.y = 0;

      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      pCtx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          pCtx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${(1 - dist / 110) * 0.15})`
            : `rgba(14, 165, 233, ${(1 - dist / 110) * 0.12})`;
          pCtx.lineWidth = 0.6;
          pCtx.beginPath();
          pCtx.moveTo(p.x, p.y);
          pCtx.lineTo(p2.x, p2.y);
          pCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  requestAnimationFrame(drawParticles);

  // Matrix Rain Canvas
  const mCanvas = document.getElementById('matrixCanvas');
  const mCtx = mCanvas.getContext('2d');
  let matrixActive = false;
  let matrixInterval = null;
  const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテト';
  const fontSize = 14;
  let drops = [];

  function initMatrix() {
    mCanvas.width = window.innerWidth;
    mCanvas.height = window.innerHeight;
    const columns = Math.floor(mCanvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -50;
    }
  }

  function drawMatrix() {
    mCtx.fillStyle = 'rgba(8, 9, 13, 0.08)';
    mCtx.fillRect(0, 0, mCanvas.width, mCanvas.height);
    mCtx.fillStyle = '#06b6d4';
    mCtx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
      mCtx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > mCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  function toggleMatrixRain() {
    matrixActive = !matrixActive;
    if (matrixActive) {
      initMatrix();
      mCanvas.style.display = 'block';
      matrixInterval = setInterval(drawMatrix, 35);
    } else {
      mCanvas.style.display = 'none';
      if (matrixInterval) clearInterval(matrixInterval);
    }
  }

  const btnMatrixToggle = document.getElementById('btnMatrixToggle');
  btnMatrixToggle.addEventListener('click', () => {
    sfx.playClick();
    toggleMatrixRain();
  });

  /* ==========================================================================
     11. DIRECT RECRUITER GATEWAY (WhatsApp & Email)
     ========================================================================== */
  const quickContactForm = document.getElementById('quickContactForm');
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');

  btnSendWhatsApp.addEventListener('click', () => {
    sfx.playClick();
    const name = document.getElementById('visitorName').value.trim() || 'Hiring Manager';
    const role = document.getElementById('visitorRole').value.trim() || 'Software Engineer';
    const msg = document.getElementById('visitorMessage').value.trim() || 'We are interested in your Java & Spring Boot background.';

    const text = encodeURIComponent(
      `Hello Santhosh, my name is ${name}.\nWe have an opening for "${role}".\nMessage: ${msg}`
    );
    window.open(`https://wa.me/916305344901?text=${text}`, '_blank');
  });

  quickContactForm.addEventListener('submit', e => {
    e.preventDefault();
    sfx.playSuccess();
    const name = document.getElementById('visitorName').value.trim() || 'Hiring Manager';
    const role = document.getElementById('visitorRole').value.trim() || 'Software Engineer';
    const msg = document.getElementById('visitorMessage').value.trim() || '';

    const subject = encodeURIComponent(`Discussion for ${role} - ${name}`);
    const body = encodeURIComponent(
      `Hi Santhosh,\n\nI reviewed your portfolio and would like to connect regarding an opportunity.\n\nRole: ${role}\nMessage: ${msg}\n\nBest regards,\n${name}`
    );
    window.location.href = `mailto:iamsanthoshbussa@gmail.com?subject=${subject}&body=${body}`;
  });

})();
