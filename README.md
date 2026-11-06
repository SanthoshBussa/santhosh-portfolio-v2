# ⚡ Santhosh Bussa — Next-Gen DevOS & Spatial Bento Portfolio (v2)

> **High-Performance, Hyper-Interactive Developer Portfolio with Dual Visual Modes: 3D Spatial Bento GUI & Interactive DevOS Hacker CLI.**

---

## 🌟 Overview & Architectural Features

This portfolio (`v2`) represents an evolution designed to stand out to engineering leaders, technical recruiters, and hiring managers. Engineered with zero frontend framework overhead, pure vanilla ES2023, modern CSS design tokens, and Web Audio API synthesis.

### 🚀 Key Features

1. **Dual Visual Modes**:
   - **3D Spatial Bento GUI**: Featuring dynamic cursor-following radial specular lighting, interactive 3D perspective tilts, live KPI metric badges, and interactive component blueprints.
   - **DevOS Hacker CLI Terminal**: Authentic Linux-style bash terminal (`santhosh@devbox:~$`) with command history (Up/Down arrows), Tab-key autocompletion, real-time command evaluation (`help`, `skills`, `projects`, `curl`, `matrix`, `sudo hire santhosh`), and Matrix digital rain canvas.

2. **Live Spring Boot 3 REST API Simulator**:
   - In-browser interactive HTTP console allowing recruiters to test mock backend endpoints (`POST /api/v1/auth/login`, `GET /api/v1/products`, `POST /api/v1/orders/checkout`, `GET /actuator/health`).
   - Realistic network latency simulation, status codes (`200 OK`, `201 CREATED`), headers, and 1-click JSON payload copy.

3. **System Design Architecture Blueprint**:
   - Interactive distributed microservices visualization (`Edge Gateway` ➔ `Spring Security JWT Filter` ➔ `Core Services` ➔ `PostgreSQL/Hibernate`).
   - Clickable nodes reveal production architecture rationales.

4. **Web Audio API Synthesizer**:
   - In-browser synthesized audio feedback for mechanical keystrokes, mode changes, and successful API calls with a top-bar mute toggle.

5. **Modern Web Standards & Dark Mode**:
   - Strict compliance with modern web guidelines (`color-scheme: light dark`, `:has(> head > meta[name="color-scheme"][content="..."])`, and zero FOUC inline theme hydration).

6. **Direct Recruiter Connect & Instant PDF Resume**:
   - Direct WhatsApp message generation with pre-filled opportunity details.
   - 1-Click instant download of `Santhosh_Resume.pdf`.

---

## 📁 Project Structure

```
d:/Santhosh/gravity/portfolio-v2/
├── index.html           # Modern semantic HTML5 markup & FOUC-prevention script
├── styles.css           # Modern CSS tokens, 3D tilt, Bento layout & dark/light themes
├── script.js            # Audio synthesizer, DevOS CLI engine, API simulator & particles
├── Santhosh_Resume.pdf  # Downloadable PDF resume
├── java-icon.svg        # Java icon asset
├── favicon.svg          # Portfolio favicon
├── render.yaml          # Render static deployment configuration
└── README.md            # Documentation
```

---

## 🚀 Instant Local Preview

Simply double-click `index.html` or run any lightweight local server:

```powershell
# Using Python
python -m http.server 8080

# Or using Node / npx
npx serve .
```

Visit: `http://localhost:8080` in Chrome or your favorite browser.

---

## 🌐 1-Click Deployment to Render / Vercel

### Deploy to Render:
1. Push this folder to a GitHub repository: `https://github.com/SanthoshBussa/santhosh-portfolio-v2`
2. In [Render Dashboard](https://dashboard.render.com), click **New +** ➔ **Static Site**.
3. Point to your repository:
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.`
4. Click **Deploy**!
