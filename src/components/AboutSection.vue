<template>
  <section id="about" class="about">
    <!-- Animated background particles -->
    <div class="particles">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>

    <!-- Glowing orbs background -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <div class="about-container">
      <!-- Enhanced title with icon -->
      <h2 class="section-title">
        <span class="title-icon">✨</span>
        <span class="title-number">01.</span>
        <span class="title-text">À propos de moi</span>
        <span class="title-decoration"></span>
      </h2>

      <div class="about-content">
        <!-- Text and slides with glass morphism card -->
        <div class="about-text">
          <div class="glass-card">
            <!-- Slide text with smooth transitions -->
            <div class="slide-text">
              <transition name="fade-zoom" mode="out-in">
                <p :key="currentSlide" class="about-paragraph">
                  {{ slideTexts[currentSlide] }}
                </p>
              </transition>
            </div>

            <!-- Slide indicators -->
            <div class="slide-indicators">
              <span 
                v-for="(text, index) in slideTexts" 
                :key="index"
                class="indicator"
                :class="{ active: index === currentSlide }"
                @click="currentSlide = index"
              ></span>
            </div>

            <!-- Enhanced subtitle with icon -->
            <div class="subtitle-wrapper">
              <span class="subtitle-icon">🚀</span>
              <p class="about-paragraph subtitle">
                Technologies et outils que je maîtrise
              </p>
            </div>

            <!-- Modern skills with animated progress bars -->
            <div class="skills-list">
              <div 
                class="skill-item" 
                v-for="(skill, index) in skills" 
                :key="index"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="skill-header">
                  <div class="skill-name-wrapper">
                    <span class="skill-icon">▹</span>
                    <span class="skill-name">{{ skill.name }}</span>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ 
                      width: skill.level + '%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }"
                  >
                    <span class="progress-shine"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- GIF with enhanced wrapper and floating comments -->
        <div class="about-gif-wrapper">
          <!-- Top-left floating comment -->
          <div class="floating-comment top-left">
            <div class="comment-bubble">
              <span class="comment-icon">💡</span>
              <span class="comment-text">Créatif & Innovant</span>
              
            </div>
          </div>

          <!-- Main GIF container with glow effect -->
          <div class="about-gif">
            
            <img :src="gifSrc" alt="Animation GIF" />
          </div>

          <!-- Bottom-right floating comment -->
          <div class="floating-comment bottom-right">
            <div class="comment-bubble">
              <span class="comment-icon">🚀</span>
              <span class="comment-text">Toujours en évolution</span>
              
            </div>
          </div>

          <!-- Decorative elements around GIF -->
          <div class="deco-circle deco-1"></div>
          <div class="deco-circle deco-2"></div>
          <div class="deco-circle deco-3"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BirdGif from '../assets/Bird.gif'

export default {
  name: 'AboutSection',
  data() {
    return {
      currentSlide: 0,
      slideTexts: [
        "Bonjour je m'appelle RAKOTOZAFY Safidinirina, 20ans , originaire de Madagascar",
        "Je suis un étudiant en informatique passionné par le développement web, la création de logiciel et les technologies modernes.",
        "J'adore créer des interfaces élégantes et performantes qui marquent les utilisateurs.",
        "Mon objectif :Ameliorer mes compétennces , transformer des idées en expériences digitales fluides et intuitives."
      ],
      skills: [
        { name: "HTML & CSS", level: 90, color: "#E34F26" },
        { name: "Bootstrap & Tailwind", level: 95, color: "#06B6D4" },
        { name: "Responsive Design", level: 92, color: "#9333EA" },
        { name: "JavaScript", level: 53, color: "#F7DF1E" },
        { name: "Vue.js", level: 45, color: "#42B883" },
        { name: "Laravel", level: 60, color: "#FF2D20" },
        { name: "Git & GitHub", level: 65, color: "#F05032" }
      ],
      gifSrc: BirdGif
    }
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slideTexts.length
    }, 4500)
  },
  methods: {
    getParticleStyle(i) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: (Math.random() * 10 + 10) + 's'
      }
    }
  }
}
</script>

<style scoped>
/* Import modern font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* Section principale */
.about {
  min-height: 100vh;
  padding: 6rem 2rem;
   background: linear-gradient(135deg, #1b2568 0%, #1a1f3a 50%, #2a4387 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Animated background particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(100, 200, 255, 0.6);
  border-radius: 50%;
  animation: particleFloat 15s infinite linear;
  box-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

/* Glowing orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: orbFloat 20s infinite ease-in-out;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -150px;
  right: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 50px) scale(0.9); }
}

.about-container {
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Enhanced title */
.section-title {
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  letter-spacing: -0.5px;
}

.title-icon {
  font-size: 2.5rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
}

.title-number {
  color: #64b5f6;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-text {
  background: linear-gradient(135deg, #fff 0%, #64b5f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-decoration {
  flex: 1;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, transparent 100%);
  border-radius: 10px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
}

.title-decoration::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  to { left: 200%; }
}

/* Content grid */
.about-content {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* Glass morphism card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: fadeInLeft 1s ease;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide text */
.slide-text {
  min-height: 120px;
  margin-bottom: 2rem;
  position: relative;
}

.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
  position: absolute;
}

.about-paragraph {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #e0e7ff;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Slide indicators */
.slide-indicators {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.indicator {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: linear-gradient(90deg, #667eea, #764ba2);
  width: 60px;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Subtitle with icon */
.subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 2.5rem 0 1.8rem;
}

.subtitle-icon {
  font-size: 1.8rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.subtitle {
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  background: linear-gradient(120deg, #64b5f6, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Modern skills list */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.skill-item {
  animation: slideInUp 0.6s ease backwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.skill-name-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-icon {
  color: #64b5f6;
  font-size: 1.2rem;
  font-weight: bold;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 700;
  color: #64b5f6;
  padding: 0.2rem 0.8rem;
  background: rgba(100, 181, 246, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(100, 181, 246, 0.3);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.skill-progress {
  height: 100%;
  border-radius: 20px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 0 20px currentColor;
  animation: progressLoad 2s ease-out;
}

@keyframes progressLoad {
  from { width: 0 !important; }
}

.progress-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: progressShine 2s infinite;
}

@keyframes progressShine {
  to { left: 200%; }
}

/* GIF wrapper enhancements */
.about-gif-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1s ease;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.about-gif {
  position: relative;
  z-index: 2;
  border-radius: 30px;
  overflow: hidden;
}

.gif-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  filter: blur(40px);
  opacity: 0.5;
  animation: glowPulse 4s ease-in-out infinite;
  z-index: -1;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: scale(0.9); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.gif-border {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  padding: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderRotate 4s linear infinite;
}

@keyframes borderRotate {
  to { filter: hue-rotate(360deg); }
}

.about-gif img {
  width: 100%;
  max-width: 500px;
  display: block;
  border-radius: 30px;
  animation: floatRotate 6s ease-in-out infinite;
}

@keyframes floatRotate {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(-2deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
  75% { transform: translateY(-15px) rotate(-1deg); }
}

/* Enhanced floating comments */
.floating-comment {
  position: absolute;
  z-index: 3;
  animation: float 3s ease-in-out infinite;
}

.floating-comment.top-left {
  top: -30px;
  left: -50px;
}

.floating-comment.bottom-right {
  bottom: -30px;
  right: -50px;
  animation-delay: 1.5s;
}

.comment-bubble {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  padding: 1rem 1.5rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.comment-bubble:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  border-color: rgba(102, 126, 234, 0.5);
}

.bubble-tail {
  position: absolute;
  width: 20px;
  height: 20px;
  background: inherit;
  border: inherit;
}

.top-left .bubble-tail {
  bottom: -8px;
  left: 30px;
  transform: rotate(45deg);
  border-top: none;
  border-left: none;
}

.bottom-right .bubble-tail {
  top: -8px;
  right: 30px;
  transform: rotate(45deg);
  border-bottom: none;
  border-right: none;
}

.comment-icon {
  font-size: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.comment-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Decorative circles */
.deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}

.deco-1 {
  width: 150px;
  height: 150px;
  top: -50px;
  right: -50px;
}

.deco-2 {
  width: 100px;
  height: 100px;
  bottom: -30px;
  left: -30px;
  animation-duration: 15s;
  animation-direction: reverse;
}

.deco-3 {
  width: 80px;
  height: 80px;
  top: 50%;
  left: -60px;
  animation-duration: 25s;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .glass-card {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .floating-comment.top-left {
    top: -20px;
    left: 10px;
  }
  
  .floating-comment.bottom-right {
    bottom: -20px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .glass-card {
    padding: 1.5rem;
  }
  
  .about-gif img {
    max-width: 100%;
  }
  
  .comment-bubble {
    padding: 0.7rem 1rem;
  }
  
  .comment-text {
    font-size: 0.85rem;
  }
}
</style>