<template>
  <section id="projects" class="projects">
    <div class="projects-container">
      <h2 class="section-title">
        <span class="title-number">02.</span> Mes Projets
      </h2>

      <div class="projects-wrapper">
        <!-- GIF décoratif -->
        <div class="projects-gif">
          <div class="gif-wrapper">
            <img :src="gifSrc" alt="GIF décoratif" />
          </div>
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
                <div class="badge-en-cours">EN COURS</div>
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
            <button @click="prevProject" class="control-btn">‹</button>
            <button @click="nextProject" class="control-btn">›</button>
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

            <div v-else class="badge-en-cours">EN COURS</div>
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
            "Plateforme de recherche d’emploi avec gestion de profil et postulation.",
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
            "Site vitrine moderne pour valoriser l’entreprise et ses services.",
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
  },
};
</script>

<style scoped>
.projects {
  background: #ffffff;
  padding: 100px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  color: #1e40af;
  font-weight: 800;
  margin-bottom: 50px;
}

.projects-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
}

/* GIF décoratif */
.projects-gif img {
  width: 320px;
  border-radius: 20px;
}

/* Carousel */
.projects-carousel {
  flex: 1;
  max-width: 650px;
  position: relative;
}

.project-card {
  background: #f9fafb;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.4s ease;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-image {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  height: 200px;
}

.project-image img,
.project-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.project-image:hover img,
.project-image:hover video {
  transform: scale(1.05);
  filter: brightness(0.75);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(37, 99, 235, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  transition: opacity 0.4s;
}

.project-image:hover .project-overlay {
  opacity: 1;
}

.project-link {
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  color: #fff;
  border: none;
  padding: 10px 18px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.project-link:hover {
  background: linear-gradient(90deg, #1e3a8a, #0ea5e9);
  transform: scale(1.08);
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

.project-content {
  text-align: left;
}

.project-title {
  color: #1e3a8a;
  font-size: 1.2rem;
  font-weight: 700;
}

.project-description {
  color: #374151;
  font-size: 0.95rem;
  margin-top: 8px;
}

.tech-tag {
  background: #e0f2fe;
  color: #0369a1;
  border-radius: 6px;
  padding: 4px 8px;
  margin: 4px;
  font-size: 0.8rem;
  display: inline-block;
}

/* Contrôles */
.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 30px;
}

.control-btn {
  font-size: 2rem;
  background: #f3f4f6;
  border: none;
  color: #1e40af;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px 16px;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: #2563eb;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

/* Indicateurs */
.carousel-indicators {
  margin-top: 12px;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
  transition: 0.3s;
}

.indicator.active {
  background: #2563eb;
  transform: scale(1.2);
}

/* Modal */
.demo-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.demo-content {
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  max-width: 90%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-content video,
.demo-content img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 12px;
}



.badge-en-cours {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 6px 10px;
  border-radius: 8px;
  width: 100px;
}

/* Responsive */
@media (max-width: 900px) {
  .projects-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .projects-gif img {
    width: 250px;
  }

  .projects-carousel {
    max-width: 100%;
  }

  .project-card {
    height: auto;
  }
}
</style>
