<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-text">Portfolio</span>
      </div>
      
      <div class="nav-menu" :class="{ active: menuOpen }">
        <a href="#home" class="nav-link" :class="{color : isScrolled}" @click="closeMenu">Accueil</a>
        <a href="#about" class="nav-link" :class="{color : isScrolled}" @click="closeMenu">À propos</a>
        <a href="#projects" class="nav-link" :class="{color : isScrolled}" @click="closeMenu">Projets</a>
        <a href="#contact" class="nav-link" :class="{color : isScrolled}" @click="closeMenu">Contact</a>
      </div>

      <div class="hamburger" @click="toggleMenu" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
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
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
/* ====== Apple-like Light Navbar ====== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
   background: linear-gradient(135deg, #1b2568 0%, #2c335f 50%, #2a4387 100%);
 
  backdrop-filter: saturate(180%) blur(15px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ====== Logo ====== */
.logo-text {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #007aff, #00b0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

/* ====== Nav Menu ====== */
.nav-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link.color{
  color: black;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 2px;
  background: #007aff;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover {
  color: #007aff;
}

.nav-link:hover::after {
  width: 100%;
}

/* ====== Hamburger ====== */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 26px;
  height: 3px;
  background: #333;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ====== Responsive ====== */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    right: -100%;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    width: 100%;
    padding: 2rem 0;
    transition: right 0.3s ease;
    gap: 1.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.3rem;
    color: #111;
  }

  .nav-link::after {
    background: #007aff;
  }
}
</style>
