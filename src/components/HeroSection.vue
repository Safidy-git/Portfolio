<template>
  <section id="home" class="hero">
    <!-- Animated Background Grid -->
    <div class="bg-grid"></div>
    
    <!-- Floating Orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <!-- Particles -->
    <div class="particles">
      <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <div class="hero-content">
      <div class="text-content">
        <div class="badge">
          <span class="badge-icon">✨</span>
          <span>Developpeur web fullstack</span>
        </div>

        <h1 class="title">
          Bonjour, je suis
          <span class="highlight-name">Safidy</span>
          <span class="wave">👋</span>
        </h1>

        <div class="subtitle-wrapper">
          <div class="typing-container">
            <span class="typing-text">{{ typingText }}</span>
            <span class="cursor">|</span>
          </div>
        </div>

        <p class="description">
          Je conçois des <span class="highlight">expériences numériques</span> modernes, performantes et élégantes. 
          Actuellement étudiant en développement web, je transforme des idées en <span class="highlight">projets innovants</span>.
        </p>

        

        <div class="buttons">
          <a href="#projects" class="btn primary">
            <span class="btn-content">
              <span>Voir mes projets</span>
              <svg class="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="btn-shine"></span>
          </a>
          <a href="#contact" class="btn secondary">
            <span class="btn-content">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 8L10 13L17 8M3 8V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V8M3 8L10 3L17 8" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span>Me contacter</span>
            </span>
          </a>
        </div>

        <div class="tech-stack">
          <span class="tech-label">Tech Stack:</span>
          <div class="tech-icons">
            <div class="tech-icon">Vue.js</div>
            <div class="tech-icon">JavaScript</div>
            <div class="tech-icon">PHP</div>
            <div class="tech-icon">laravel</div>
            <div class="tech-icon">Mysql</div>
          </div>
        </div>
      </div>

      <div class="image-content">
        <div class="photo-container" @click="openModal = true">
          <!-- Rotating Ring -->
          <div class="rotating-ring"></div>
          <div class="rotating-ring-2"></div>
          
          <!-- Profile Photo -->
          <div class="photo-wrapper">
            <img :src="profilePhoto" alt="Photo de Safidy" class="profile-photo" />
            <div class="photo-glow"></div>
          </div>

          <!-- Floating Icons -->
          <div class="floating-icon icon-code">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="floating-icon icon-mail">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 8L12 13L21 8M3 8V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V8M3 8L12 3L21 8" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>

          <div class="floating-icon icon-star">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>

          <!-- Status Badge -->
          <div class="status-badge">
            <span class="status-dot"></span>
            <span>Safidy</span>
          </div>

          <div class="blur-circle"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a href="#projects" class="scroll-indicator">
      <div class="scroll-icon">
        <div class="scroll-dot"></div>
      </div>
      <span class="scroll-text">Scroll</span>
    </a>

    <!-- Modal -->
    <transition name="modal-fade">
      <div v-if="openModal" class="modal" @click.self="openModal = false">
        <div class="modal-content">
          <button class="modal-close" @click="openModal = false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <img :src="profilePhoto" alt="Photo de Safidy" class="modal-img" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import pdp from '../assets/Pdp.png'
export default {
  name: "HeroSection",
  setup() {
    const profilePhoto =pdp
    const openModal = ref(false)
    const typingText = ref('')
    const fullText = 'Développeur Web Full Stack'
    let typingInterval = null

    const getParticleStyle = (index) => {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`
      }
    }

    const typeText = () => {
      let index = 0
      typingInterval = setInterval(() => {
        if (index <= fullText.length) {
          typingText.value = fullText.substring(0, index)
          index++
        } else {
          clearInterval(typingInterval)
        }
      }, 100)
    }

    onMounted(() => {
      setTimeout(() => {
        typeText()
      }, 800)
    })

    onUnmounted(() => {
      if (typingInterval) {
        clearInterval(typingInterval)
      }
    })

    return {
      profilePhoto,
      openModal,
      typingText,
      getParticleStyle
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #1b2568 0%, #1a1f3a 50%, #2a4387 100%);
  overflow: hidden;
  position: relative;
}

/* --- BACKGROUND ELEMENTS --- */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent);
  z-index: 1;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  z-index: 1;
  animation: float-orb 20s ease-in-out infinite;
}

.orb-1 {
  top: 10%;
  left: 5%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.orb-2 {
  top: 30%;
  right: 5%;
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  animation-delay: -7s;
}

.orb-3 {
  bottom: 10%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #06b6d4, #0ea5e9);
  animation-delay: -14s;
}

.particles {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  animation: particle-float 15s linear infinite;
}

@keyframes particle-float {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.hero-content {
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  position: relative;
  z-index: 2;
}

/* --- TEXT CONTENT --- */
.text-content {
  flex: 1;
  min-width: 300px;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  animation: fadeInUp 1s ease-out 0.2s both;
}

.badge-icon {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.title {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.3s both;
  letter-spacing: -0.02em;
}

.highlight-name {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
  display: inline-block;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.wave {
  display: inline-block;
  animation: wave-animation 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(0deg); }
}

.subtitle-wrapper {
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.typing-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.5rem;
}

.typing-text {
  font-size: 1.75rem;
  font-weight: 600;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cursor {
  color: #3b82f6;
  font-weight: 300;
  font-size: 1.75rem;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #94a3b8;
  max-width: 600px;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.highlight {
  color: #60a5fa;
  font-weight: 600;
}

/* --- STATS --- */
.stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(148, 163, 184, 0.2);
}

/* --- BUTTONS --- */
.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 0.7s both;
}

.btn {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn.primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn.primary:hover .btn-shine {
  left: 100%;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.5);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn.primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn.secondary {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
}

.btn.secondary:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

/* --- TECH STACK --- */
.tech-stack {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.tech-label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 600;
}

.tech-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tech-icon {
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-icon:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

/* --- IMAGE CONTENT --- */
.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 300px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.photo-container {
  position: relative;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.rotating-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: #3b82f6;
  border-right-color: #8b5cf6;
  border-radius: 50%;
  animation: spin 8s linear infinite;
}

.rotating-ring-2 {
  position: absolute;
  width: 110%;
  height: 110%;
  border: 2px solid transparent;
  border-bottom-color: #06b6d4;
  border-left-color: #8b5cf6;
  border-radius: 50%;
  animation: spin-reverse 12s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.photo-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  z-index: 2;
  transition: transform 0.5s ease;
}

.photo-container:hover .photo-wrapper {
  transform: scale(1.05);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
}

.photo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%);
  border-radius: 50%;
  filter: blur(30px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.blur-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
  filter: blur(60px);
  z-index: 1;
  animation: pulse-circle 4s ease-in-out infinite;
}

@keyframes pulse-circle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

/* --- FLOATING ICONS --- */
.floating-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60a5fa;
  z-index: 3;
  transition: all 0.3s ease;
}

.floating-icon:hover {
  transform: translateY(-5px) scale(1.1);
  background: rgba(59, 130, 246, 0.2);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.icon-code {
  top: 5%;
  right: -5%;
  animation: float-icon 4s ease-in-out infinite;
}

.icon-mail {
  bottom: 15%;
  left: -8%;
  animation: float-icon 4s ease-in-out infinite 1s;
}

.icon-star {
  top: 40%;
  right: -8%;
  animation: float-icon 4s ease-in-out infinite 2s;
}

@keyframes float-icon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.status-badge {
  position: absolute;
  bottom: 8%;
  left: 12%;
  background: rgba(16, 185, 129, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
  animation: float-icon 3s ease-in-out infinite 1.5s;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* --- SCROLL INDICATOR --- */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  z-index: 5;
  animation: fadeInUp 1s ease-out 1s both;
}

.scroll-icon {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: #3b82f6;
  border-radius: 2px;
  animation: scroll-bounce 2s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(12px); opacity: 0.5; }
}

.scroll-text {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* --- MODAL --- */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 2rem;
}

.modal-content {
  position: relative;
  animation: modal-scale 0.3s ease-out;
}

@keyframes modal-scale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-close {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-img {
  width: 500px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(59, 130, 246, 0.3);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* --- RESPONSIVE --- */
@media (max-width: 1200px) {
  .title { font-size: 3.5rem; }
  .photo-container { width: 380px; height: 380px; }
  .photo-wrapper { width: 300px; height: 300px; }
}

@media (max-width: 1024px) {
  .hero-content {
    gap: 3rem;
  }
  
  .title { font-size: 3rem; }
  .stats { gap: 1.5rem; }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-content {
    flex-direction: column-reverse;
    gap: 3rem;
    text-align: center;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .typing-text {
    font-size: 1.25rem;
  }

  .cursor {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1rem;
    max-width: 100%;
  }

  .stats {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .stat-divider {
    display: none;
  }

  .stat-item {
    width: 100%;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .buttons {
    width: 100%;
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .tech-stack {
    justify-content: center;
    width: 100%;
  }

  .tech-icons {
    justify-content: center;
  }

  .photo-container {
    width: 320px;
    height: 320px;
  }

  .photo-wrapper {
    width: 250px;
    height: 250px;
  }

  .rotating-ring,
  .rotating-ring-2 {
    width: 100%;
    height: 100%;
  }

  .floating-icon {
    width: 50px;
    height: 50px;
  }

  .floating-icon svg {
    width: 24px;
    height: 24px;
  }

  .icon-code {
    top: 8%;
    right: 0%;
  }

  .icon-mail {
    bottom: 18%;
    left: -5%;
  }

  .icon-star {
    top: 45%;
    right: -5%;
  }

  .status-badge {
    font-size: 0.75rem;
    padding: 0.5rem 0.9rem;
    bottom: 10%;
    left: 15%;
  }

  .status-dot {
    width: 6px;
    height: 6px;
  }

  .scroll-indicator {
    bottom: 20px;
  }

  .scroll-icon {
    width: 24px;
    height: 40px;
  }

  .scroll-text {
    font-size: 0.65rem;
  }

  .modal-img {
    width: 90vw;
    height: 90vw;
    max-width: 400px;
    max-height: 400px;
  }

  .modal-close {
    top: -40px;
    right: 0;
    width: 36px;
    height: 36px;
  }

  .orb-1,
  .orb-2,
  .orb-3 {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .typing-text {
    font-size: 1.1rem;
  }

  .cursor {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.9rem;
  }

  .tech-icon {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .photo-container {
    width: 280px;
    height: 280px;
  }

  .photo-wrapper {
    width: 220px;
    height: 220px;
  }

  .floating-icon {
    width: 45px;
    height: 45px;
  }

  .floating-icon svg {
    width: 20px;
    height: 20px;
  }

  .status-badge {
    font-size: 0.7rem;
    padding: 0.45rem 0.8rem;
  }
}

@media (min-width: 1400px) {
  .title {
    font-size: 5rem;
  }

  .photo-container {
    width: 500px;
    height: 500px;
  }

  .photo-wrapper {
    width: 400px;
    height: 400px;
  }
}
</style>