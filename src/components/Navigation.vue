<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- Logo avec animation -->
      <div class="logo">
        <span class="logo-icon">✨</span>
        <span class="logo-text">Portfolio</span>
        <span class="logo-dot">.</span>
      </div>
      
      <!-- Navigation principale -->
      <div class="nav-menu" :class="{ active: menuOpen }">
        <a 
          href="#home" 
          class="nav-link" 
          :class="{ 'scrolled-link': isScrolled, 'active-link': activeSection === 'home' }" 
          @click="closeMenu"
        >
          <span class="link-number">01</span>
          <span class="link-text">Accueil</span>
          <span class="link-indicator"></span>
        </a>
        <a 
          href="#about" 
          class="nav-link" 
          :class="{ 'scrolled-link': isScrolled, 'active-link': activeSection === 'about' }" 
          @click="closeMenu"
        >
          <span class="link-number">02</span>
          <span class="link-text">À propos</span>
          <span class="link-indicator"></span>
        </a>
        <a 
          href="#projects" 
          class="nav-link" 
          :class="{ 'scrolled-link': isScrolled, 'active-link': activeSection === 'projects' }" 
          @click="closeMenu"
        >
          <span class="link-number">03</span>
          <span class="link-text">Projets</span>
          <span class="link-indicator"></span>
        </a>
        <a 
          href="#contact" 
          class="nav-link nav-link-cta" 
          :class="{ 'scrolled-link': isScrolled, 'active-link': activeSection === 'contact' }" 
          @click="closeMenu"
        >
          <span class="link-text">Contact</span>
          <span class="cta-arrow">→</span>
        </a>
      </div>

      <!-- Hamburger moderne -->
      <div class="hamburger" @click="toggleMenu" :class="{ active: menuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
    </div>

    <!-- Background blur effect -->
    <div class="nav-blur"></div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      activeSection: 'home'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.observeSections()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      // Prevent body scroll when menu is open
      if (this.menuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    },
    observeSections() {
      const sections = document.querySelectorAll('section[id]')
      const options = {
        threshold: 0.3,
        rootMargin: '-100px'
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id
          }
        })
      }, options)
      
      sections.forEach(section => observer.observe(section))
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* ====== Navigation principale ====== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
   background: linear-gradient(135deg, #1b2568 0%, #1a1f3a 50%, #2a4387 100%);

  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
}

.navbar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(102, 126, 234, 0.1), 
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.navbar.scrolled {
  padding: 1rem 0;

  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar.scrolled::before {
  opacity: 1;
}

.nav-blur {
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(8px);
  z-index: -1;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ====== Logo moderne ====== */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 1.8rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
    filter: brightness(1);
  }
  50% { 
    transform: scale(1.15) rotate(180deg); 
    filter: brightness(1.3);
  }
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.navbar.scrolled .logo-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-dot {
  font-size: 2rem;
  font-weight: 900;
  color: #667eea;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ====== Navigation Menu ====== */
.nav-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.nav-link:hover::before {
  opacity: 1;
}

.link-number {
  font-size: 0.75rem;
  font-weight: 700;
  color: #667eea;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.link-text {
  position: relative;
  z-index: 1;
}

.link-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-link:hover .link-indicator {
  width: 80%;
}

.nav-link:hover {
  color: #fff;
  transform: translateY(-2px);
}

.nav-link:hover .link-number {
  opacity: 1;
  transform: scale(1.1);
}

/* Active link */
.nav-link.active-link {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  color: #fff;
}

.nav-link.active-link .link-indicator {
  width: 80%;
}

/* Scrolled state */
.nav-link.scrolled-link {
  color: #ffffff;
}

.nav-link.scrolled-link:hover {
  color: #667eea;
}

.nav-link.scrolled-link .link-number {
  color: #667eea;
}

.nav-link.scrolled-link.active-link {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  color: #667eea;
}

/* CTA Button style */
.nav-link-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 0.8rem 1.8rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  margin-left: 0.5rem;
}

.nav-link-cta::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
}

.nav-link-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
}

.nav-link-cta .link-text {
  font-weight: 700;
}

.cta-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.nav-link-cta:hover .cta-arrow {
  transform: translateX(5px);
}

/* ====== Hamburger moderne ====== */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: 1001;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.navbar.scrolled .hamburger:hover {
  background: rgba(0, 0, 0, 0.05);
}

.hamburger-line {
  width: 28px;
  height: 3px;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
  position: relative;
}

.navbar.scrolled .hamburger-line {
  background: #333;
}

.hamburger-line::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 3px;
}

.hamburger:hover .hamburger-line::before {
  opacity: 1;
}

.hamburger.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(9px, 9px);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
}

/* ====== Responsive ====== */
@media (max-width: 968px) {
  .hamburger {
    display: flex;
  }

  .nav-container {
    padding: 0 2rem;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    max-width: 400px;
    flex-direction: column;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(26, 31, 58, 0.98) 100%);
    backdrop-filter: blur(20px);
    padding: 8rem 2rem 2rem;
    gap: 1rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    overflow-y: auto;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    width: 100%;
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    justify-content: flex-start;
    border-radius: 15px;
  }

  .nav-link:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
    transform: translateX(10px);
  }

  .link-number {
    font-size: 0.9rem;
  }

  .link-indicator {
    display: none;
  }

  .nav-link-cta {
    margin-left: 0;
    margin-top: 1rem;
    justify-content: center;
    font-size: 1.3rem;
  }

  .navbar.scrolled .nav-menu {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.98) 100%);
  }

  .navbar.scrolled .nav-menu .nav-link {
    color: #333;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1.5rem;
  }

  .logo-text {
    font-size: 1.5rem;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .nav-menu {
    max-width: 100%;
    padding: 6rem 1.5rem 2rem;
  }

  .nav-link {
    font-size: 1.1rem;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Animation for menu items */
.nav-menu.active .nav-link {
  animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nav-menu.active .nav-link:nth-child(1) { animation-delay: 0.1s; }
.nav-menu.active .nav-link:nth-child(2) { animation-delay: 0.2s; }
.nav-menu.active .nav-link:nth-child(3) { animation-delay: 0.3s; }
.nav-menu.active .nav-link:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Overlay when mobile menu is open */
.nav-menu.active::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: -1;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>