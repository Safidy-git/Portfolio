<template>
  <section id="about" class="about">
    <div class="about-container">
      <h2 class="section-title">
        <span class="title-number">01.</span>
        À propos de moi
      </h2>

      <div class="about-content">
        <!-- Texte et slides -->
        <div class="about-text">
          <div class="slide-text">
            <transition-group name="fade-zoom" tag="div">
              <p v-for="(text, index) in [slideTexts[0]]" :key="index" class="about-paragraph">
                {{ text }}
              </p>
            </transition-group>
          </div>

          <!-- Added styled subtitle with gradient and better typography -->
          <p class="about-paragraph subtitle">
            Technologies et outils que je maîtrise :
          </p>

          <!-- Replaced simple skill list with progress bars showing mastery percentage -->
          <div class="skills-list">
            <div class="skill-item" v-for="(skill, index) in skills" :key="index">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: skill.level + '%' }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- GIF animé avec commentaires -->
        <div class="about-gif-wrapper">
          <!-- Added floating comment at top-left of GIF -->
          <div class="floating-comment top-left">
            <div class="comment-bubble">
              <span class="comment-icon">💡</span>
              <span class="comment-text">Créatif & Innovant</span>
            </div>
          </div>

          <div class="about-gif">
            <img :src="gifSrc" alt="Animation GIF" />
          </div>

          <!-- Added floating comment at bottom-right of GIF -->
          <div class="floating-comment bottom-right">
            <div class="comment-bubble">
              <span class="comment-icon">🚀</span>
              <span class="comment-text">Toujours en évolution</span>
            </div>
          </div>
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
      slideTexts: [
        "Bonjour je m'appelle RAKOTOZAFY Safidinirina, originaire de madagascar , etudiant en informatique",
        "Je suis un étudiant en informatique  passionné par le  développement web, la creation de logiciel et les technologies modernes.",
        "J'adore créer des interfaces élégantes et performantes qui marquent les utilisateurs.",
        "Mon objectif : transformer des idées complexes en expériences digitales fluides et intuitives."
      ],
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "Bootstrap & tailwind",  level: 95 },
        { name: "Responsive Design", level: 92 },
         { name: "JavaScript", level: 53 },
        { name: "Vue.js", level: 45 },       
        { name: "laravel", level: 60 },
        { name: "Git & GitHub", level: 50 },
      ],
      gifSrc: BirdGif
    }
  },
  mounted() {
    setInterval(() => {
      const first = this.slideTexts.shift()
      this.slideTexts.push(first)
    }, 4500)
  }
}
</script>

<style scoped>
/* --- Section --- */
.about {
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #fef5ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.about-container {
  max-width: 1200px;
  width: 100%;
}

/* --- Titre --- */
.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: #111;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  position: relative;
  letter-spacing: 1px;
}

.title-number {
  color: #007aff;
  font-size: 2rem;
  font-weight: 600;
}

.section-title::after {
  content: '';
  flex: 1;
  height: 3px;
  background: linear-gradient(to right, #007aff, #00d4ff);
  max-width: 350px;
  border-radius: 2px;
}

/* --- Contenu --- */
.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* --- Texte et slides --- */
.about-text {
  animation: fadeInLeft 1s ease;
}

.slide-text {
  min-height: 90px;
  margin-bottom: 1.5rem;
}

.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}

.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(-20px);
}

/* Enhanced paragraph styling with better gradient and shadow effects */
.about-paragraph {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #222;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #007aff 0%, #00d4ff 50%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 0.3px;
  position: relative;
}

/* --- Subtitle --- */
.subtitle {
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #555, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* New skills list with progress bars */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Reduced gap from 1.2rem to 0.8rem */
  margin-top: 1.5rem;
  max-width: 500px; /* Added max-width to reduce overall width of skill bars */
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem; /* Reduced gap from 0.5rem to 0.3rem */
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.9rem; /* Reduced from 1rem to 0.9rem */
  font-weight: 600;
  color: #333;
  letter-spacing: 0.5px;
}

.skill-percentage {
  font-size: 0.85rem; /* Reduced from 0.95rem to 0.85rem */
  font-weight: 700;
  color: #007aff;
  background: linear-gradient(135deg, #007aff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skill-bar {
  width: 100%; /* Width is now constrained by parent max-width */
  height: 6px; /* Reduced height from 10px to 6px */
  background: #e0e7ff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #007aff 0%, #00d4ff 100%);
  border-radius: 10px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: progressGlow 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 122, 255, 0.5);
}

@keyframes progressGlow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 122, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
}

/* GIF wrapper with floating comments */
.about-gif-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-gif {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.about-gif img {
  width: 100%;
  max-width: 600px;
  animation: floatRotate 5s ease-in-out infinite;
  filter: drop-shadow(0 10px 30px rgba(0, 122, 255, 0.2));
}

/* Floating comment bubbles */
.floating-comment {
  position: absolute;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

.floating-comment.top-left {
  top: -20px;
  left: -40px;
  animation-delay: 0s;
}

.floating-comment.bottom-right {
  bottom: -20px;
  right: -40px;
  animation-delay: 1.5s;
}

.comment-bubble {
  background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 122, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: 2px solid #e0e7ff;
  transition: all 0.3s ease;
}

.comment-bubble:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 122, 255, 0.25);
}

.comment-icon {
  font-size: 1.3rem;
  animation: pulse 2s ease-in-out infinite;
}

.comment-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  letter-spacing: 0.3px;
}

/* --- Animations --- */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes floatRotate {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(-3deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
  75% { transform: translateY(-15px) rotate(-1deg); }
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

/* --- Responsive --- */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  /* Center skills list on mobile */
  .skills-list {
    margin-left: auto;
    margin-right: auto;
  }
  
  .floating-comment.top-left {
    top: -10px;
    left: 10px;
  }
  
  .floating-comment.bottom-right {
    bottom: -10px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .about-gif img {
    max-width: 400px;
  }
  
  .comment-bubble {
    padding: 0.6rem 1rem;
  }
  
  .comment-text {
    font-size: 0.8rem;
  }
}
</style>
