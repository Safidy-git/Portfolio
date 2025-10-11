<template>
  <section id="projects" class="projects">
    <!-- Animated background elements -->
    <div class="bg-particles">
      <div class="particle" v-for="i in 15" :key="i" :style="getParticleStyle(i)"></div>
    </div>

    <div class="projects-container">
      <h2 class="section-title">
        <span class="title-icon">💼</span>
        <span class="title-number">02.</span>
        <span class="title-text">Mes Projets</span>
        <span class="title-decoration"></span>
      </h2>

      <div class="projects-wrapper">
        <!-- GIF décoratif avec commentaires flottants -->
        <div class="projects-gif">
          <!-- Floating comment top-left -->
          <div class="floating-comment top-left">
            <div class="comment-bubble">
              <span class="comment-icon">⚡</span>
              <span class="comment-text">Passionné</span>
            </div>
          </div>

          <!-- Floating comment top-right -->
          <div class="floating-comment top-right">
            <div class="comment-bubble">
              <span class="comment-icon">💻</span>
              <span class="comment-text">Full-Stack</span>
            </div>
          </div>

          <div class="gif-wrapper">
            <img :src="gifSrc" alt="GIF décoratif" />
          </div>

          <!-- Floating comment bottom-left -->
          <div class="floating-comment bottom-left">
            <div class="comment-bubble">
              <span class="comment-icon">🎯</span>
              <span class="comment-text">Précis</span>
            </div>
          </div>

          <!-- Floating comment bottom-right -->
          <div class="floating-comment bottom-right">
            <div class="comment-bubble">
              <span class="comment-icon">✨</span>
              <span class="comment-text">Créatif</span>
            </div>
          </div>

          <!-- Decorative circles -->
          <div class="deco-ring ring-1"></div>
          <div class="deco-ring ring-2"></div>
        </div>

        <!-- Carousel -->
        <div class="projects-carousel">
          <div
            class="project-card"
            v-for="(project, index) in projects"
            :key="index"
            v-show="currentIndex === index"
          >
            <div class="project-image">
              <template v-if="project.demo.type === 'video'">
                <video :src="project.demo.src" muted autoplay loop playsinline></video>
              </template>

              <template v-else-if="project.demo.type === 'image'">
                <img :src="project.demo.src" :alt="project.title" />
              </template>

              <template v-else>
                <div class="badge-en-cours">
                  <span class="badge-icon">🚧</span> EN COURS
                </div>
              </template>

              <div class="project-overlay">
                <div class="project-links">
                  <a
                    :href="project.github"
                    class="project-link"
                    target="_blank"
                    rel="noopener"
                  >
                    <span class="link-icon">→</span> GitHub
                  </a>
                  <button class="project-link" @click="openDemo(project)">
                    <span class="link-icon">▶</span> Demo
                  </button>
                </div>
              </div>
            </div>

            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span
                  class="tech-tag"
                  v-for="(tech, idx) in project.technologies"
                  :key="idx"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Contrôles -->
          <div class="carousel-controls">
            <button @click="prevProject" class="control-btn">
              <span>‹</span>
            </button>
            <button @click="nextProject" class="control-btn">
              <span>›</span>
            </button>
          </div>

          <!-- Indicateurs -->
          <div class="carousel-indicators">
            <button
              v-for="(project, index) in projects"
              :key="index"
              @click="currentIndex = index"
              :class="['indicator', { active: currentIndex === index }]"
            ></button>
          </div>
        </div>
      </div>

      <!-- Modal vidéo / image -->
      <transition name="modal">
        <div v-if="demoOpen" class="demo-modal" @click.self="closeDemo">
          <button class="close-modal" @click="closeDemo">×</button>
          <div class="demo-content">
            <video
              v-if="currentDemo.type === 'video'"
              :src="currentDemo.src"
              controls
              autoplay
              playsinline
            ></video>

            <img
              v-else-if="currentDemo.type === 'image'"
              :src="currentDemo.src"
              alt="Demo"
            />

            <div v-else class="badge-en-cours-modal">
              <span class="badge-icon">🚧</span> EN COURS
            </div>
          </div>
        </div>
      </transition>
    </div>
    
  </section>

</template>

<script>
import LoveGif from "../assets/bot.gif";
import inumeraVideo from "../assets/video/inumera.mp4";
import outscallerVideo from "../assets/video/outscaller.mp4";
import indeedVideo from "../assets/video/indeed.mp4";
import milangImage from "../assets/milang.png";

export default {
  name: "ProjectsSection",
  data() {
    return {
      currentIndex: 0,
      gifSrc: LoveGif,
      demoOpen: false,
      currentDemo: {},
      projects: [
        {
          title: "Site Évaluation Linguistique",
          description:
            "Plateforme pour tester le niveau de français et d'anglais des apprenants.",
          demo: { type: "image", src: milangImage },
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
          github: "#",
        },
        {
          title: "CRM d'Appel – i-numera",
          description:
            "Outil de gestion des relations clients et automatisation des appels.",
          demo: { type: "video", src: outscallerVideo },
          technologies: ["Tailwind", "Laravel", "Vue.js", "MySQL"],
          github: "#",
        },
        {
          title: "INDEED - Projet Personnel",
          description:
            "Plateforme de recherche d'emploi avec gestion de profil et postulation.",
          demo: { type: "video", src: indeedVideo },
          technologies: ["HTML", "CSS", "Laravel", "MySQL"],
          github: "#",
        },
        {
          title: "ORALIS - Billetterie",
          description: "Plateforme de billetterie intuitive pour événements modernes.",
          demo: { type: "badge" },
          technologies: ["Laravel", "Vue.js", "MySQL"],
          github: "#",
        },
        {
          title: "Site Vitrine - I-Numera",
          description:
            "Site vitrine moderne pour valoriser l'entreprise et ses services.",
          demo: { type: "video", src: inumeraVideo },
          technologies: ["HTML", "Tailwind", "Vue.js", "Laravel"],
          github: "#",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => this.nextProject(), 7000);
  },
  methods: {
    nextProject() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevProject() {
      this.currentIndex =
        (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    openDemo(project) {
      this.currentDemo = project.demo || { type: "badge" };
      this.demoOpen = true;
    },
    closeDemo() {
      this.demoOpen = false;
    },
    getParticleStyle(i) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: (Math.random() * 8 + 8) + 's'
      }
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* Section principale */
.projects {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
  padding: 6rem 2rem;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background particles */
.bg-particles {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(100, 200, 255, 0.5);
  border-radius: 50%;
  animation: particleRise 15s infinite linear;
  box-shadow: 0 0 8px rgba(100, 200, 255, 0.7);
}

@keyframes particleRise {
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

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
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
  letter-spacing: -0.5px;
}

.title-icon {
  font-size: 2.5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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

/* Wrapper layout */
.projects-wrapper {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 5rem;
  align-items: center;
}

/* GIF décoratif avec commentaires */
.projects-gif {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

.gif-wrapper {
  position: relative;
  z-index: 2;
}

.gif-wrapper img {
  width: 100%;
  max-width: 400px;
  border-radius: 30px;
  animation: floatGif 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(102, 126, 234, 0.3));
}

@keyframes floatGif {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(-2deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
  75% { transform: translateY(-15px) rotate(-1deg); }
}

/* Floating comments autour du GIF */
.floating-comment {
  position: absolute;
  z-index: 3;
  animation: float 3s ease-in-out infinite;
}

.floating-comment.top-left {
  top: -20px;
  left: -40px;
}

.floating-comment.top-right {
  top: -20px;
  right: -40px;
  animation-delay: 0.5s;
}

.floating-comment.bottom-left {
  bottom: -20px;
  left: -40px;
  animation-delay: 1s;
}

.floating-comment.bottom-right {
  bottom: -20px;
  right: -40px;
  animation-delay: 1.5s;
}

.comment-bubble {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.comment-bubble:hover {
  transform: scale(1.08) translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  border-color: rgba(102, 126, 234, 0.5);
}

.comment-icon {
  font-size: 1.3rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.comment-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Decorative rings */
.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.15);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}

.ring-1 {
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
}

.ring-2 {
  width: 140%;
  height: 140%;
  top: -20%;
  left: -20%;
  animation-duration: 30s;
  animation-direction: reverse;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

/* Carousel */
.projects-carousel {
  position: relative;
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

.project-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4);
  border-color: rgba(102, 126, 234, 0.3);
}

.project-image {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  height: 280px;
  margin-bottom: 1.5rem;
}

.project-image img,
.project-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-image:hover img,
.project-image:hover video {
  transform: scale(1.08);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: opacity 0.4s ease;
}

.project-image:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(10px);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.project-link:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.link-icon {
  font-size: 1.1rem;
}

.project-content {
  text-align: left;
}

.project-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  background: linear-gradient(135deg, #fff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-tag {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  color: #64b5f6;
  border: 1px solid rgba(100, 181, 246, 0.3);
  border-radius: 12px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

/* Contrôles carousel */
.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
}

.control-btn {
  font-size: 2.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.control-btn:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
}

.control-btn:active {
  transform: scale(0.95);
}

/* Indicateurs */
.carousel-indicators {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.indicator {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
}

.indicator.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.6);
}

.indicator:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.2);
}

/* Badge EN COURS */
.badge-en-cours {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

.badge-icon {
  font-size: 1.5rem;
}

/* Modal */
.demo-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-from .demo-content,
.modal-leave-to .demo-content {
  transform: scale(0.8);
}

.close-modal {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
}

.close-modal:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  transform: rotate(90deg);
}

.demo-content {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 90%;
  max-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.demo-content video,
.demo-content img {
  max-width: 100%;
  max-height: 75vh;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.badge-en-cours-modal {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 2rem 3rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.5);
}

/* Responsive */
@media (max-width: 1200px) {
  .projects-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  .projects-gif {
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .gif-wrapper img {
    max-width: 300px;
  }

  .floating-comment.top-left,
  .floating-comment.bottom-left {
    left: -20px;
  }

  .floating-comment.top-right,
  .floating-comment.bottom-right {
    right: -20px;
  }

  .project-card {
    min-height: auto;
    padding: 1.5rem;
  }

  .project-image {
    height: 220px;
  }

  .control-btn {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
    gap: 0.8rem;
  }

  .title-icon {
    font-size: 2rem;
  }

  .comment-bubble {
    padding: 0.6rem 1rem;
  }

  .comment-text {
    font-size: 0.8rem;
  }

  .floating-comment.top-left,
  .floating-comment.bottom-left {
    left: 5px;
  }

  .floating-comment.top-right,
  .floating-comment.bottom-right {
    right: 5px;
  }
}
</style>