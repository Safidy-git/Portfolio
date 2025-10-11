<template>
  <div class="portfolio-container">
    
    <div class="bg-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    
    <header class="header">
      <div class="header-badge">Portfolio</div>
      <h1 class="header-title">
        <span class="gradient-text">Mes Projets</span>
      </h1>
      <p class="header-subtitle">Découvrez mes réalisations et projets innovants</p>
    </header>

     
    <div class="projects-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="project-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="openModal(project)"
      >
         
        <div class="card-shine"></div>
        
         
        <div class="media-container">
          <img 
            v-if="project.demo.type === 'image'" 
            :src="project.demo.src" 
            :alt="project.title" 
            class="project-media" 
          />
          <video 
            v-else-if="project.demo.type === 'video'" 
            :src="project.demo.src" 
            muted 
            loop 
            @mouseenter="$event.target.play()" 
            @mouseleave="$event.target.pause()"
            class="project-media"
          ></video>
          <div v-else-if="project.demo.type === 'badge'" class="badge">
            <div class="badge-icon">🚧</div>
            <p class="badge-text">En Cours</p>
            <div class="badge-pulse"></div>
          </div>

         
          <div class="overlay">
            <button class="overlay-btn">
              <span>Voir les détails</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="technologies">
            <span 
              v-for="(tech, idx) in project.technologies" 
              :key="idx"
              class="tech-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>


    <Transition name="modal">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content">
         
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div class="modal-color-bar"></div>

          <div class="modal-media">
            <img 
              v-if="selectedProject.demo.type === 'image'" 
              :src="selectedProject.demo.src" 
              :alt="selectedProject.title" 
            />
            <video 
              v-else-if="selectedProject.demo.type === 'video'" 
              :src="selectedProject.demo.src" 
              controls
            ></video>
            <div v-else-if="selectedProject.demo.type === 'badge'" class="badge-large">
              <div class="badge-icon-large">🚧</div>
              <p class="badge-large-title">Projet en Cours</p>
              <p class="badge-large-subtitle">Bientôt disponible</p>
            </div>
          </div>

          
          <div class="modal-details">
            <h2 class="modal-title">{{ selectedProject.title }}</h2>
            <div class="modal-description-box">
              <div class="description-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <p class="modal-description">{{ selectedProject.description }}</p>
            </div>
            
            <div class="modal-tech-section">
              <h3 class="modal-tech-title">Technologies utilisées</h3>
              <div class="technologies-modal">
                <span 
                  v-for="(tech, idx) in selectedProject.technologies" 
                  :key="idx"
                  class="tech-badge-modal"
                  :style="{ animationDelay: `${idx * 0.05}s` }"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <a :href="selectedProject.github" target="_blank" class="github-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Voir sur GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import milangImage from './assets/milang.png'
import inumeraVideo from './assets/video/inumera.mp4'
import indeedVideo from './assets/video/indeed.mp4'
import outscallerVideo from './assets/video/outscaller.mp4'

const projects = ref([
  { 
    title: "Site Évaluation Linguistique", 
    description: "Stage chez Hopes Formation, on était deux sur ce projet, fullstack, donc back et front. Le site permet de tester le niveau de français et d'anglais des apprenants avec des quiz interactifs, suivi des résultats et rapports automatiques pour les formateurs.", 
    demo: { type: "image", src: milangImage }, 
    technologies: ["HTML","CSS","Bootstrap","JavaScript","PHP","MySQL"], 
    github: "#" 
  },
  { 
    title: "CRM d'Appel – i-numera / Outscaller", 
    description: "Stage chez i-numera, participation au développement d'un CRM d'appel et intégration de l'API téléphonique pour automatiser les appels. Suivi des interactions clients, génération de statistiques et optimisation des processus commerciaux.", 
    demo: { type: "video", src: inumeraVideo }, 
    technologies: ["Tailwind","Laravel","Vue.js","MySQL"], 
    github: "#" 
  },
  { 
    title: "INDEED - Projet Personnel", 
    description: "Plateforme de recherche d'emploi avec postulation et suivi des candidatures. Le projet est encore en cours d'amélioration, avec ajout progressif de nouvelles fonctionnalités pour gérer efficacement les offres et les interactions utilisateurs.", 
    demo: { type: "video", src: indeedVideo }, 
    technologies: ["HTML","CSS","Laravel","MySQL"], 
    github: "#" 
  },
  { 
    title: "ORALIS - Billetterie", 
    description: "Projet en cours : plateforme de billetterie intuitive pour événements modernes. Développement progressif d'un système de réservation en ligne avec gestion des places et interface responsive, optimisation pour les utilisateurs et organisateurs.", 
    demo: { type: "badge" }, 
    technologies: ["Laravel","Vue.js","MySQL"], 
    github: "#" 
  },
  { 
    title: "Site Vitrine - I-Numera", 
    description: "Site vitrine moderne pour valoriser l'entreprise et ses services. Interface dynamique et responsive avec sections animées, intégration multimédia et optimisation SEO pour améliorer la visibilité et l'engagement des visiteurs.", 
    demo: { type: "video", src: outscallerVideo }, 
    technologies: ["HTML","Tailwind","Vue.js","Laravel"], 
    github: "#" 
  }
])

const selectedProject = ref(null)
const openModal = (project) => selectedProject.value = project
const closeModal = () => selectedProject.value = null
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container */
.portfolio-container {
  min-height: 100vh;
  padding: 6rem 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .portfolio-container {
    padding: 4rem;
  }
}

@media (min-width: 1024px) {
  .portfolio-container {
    padding: 6rem;
  }
}

/* Animated Background Orbs */
.bg-orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  bottom: -250px;
  right: -250px;
  animation-delay: 7s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #ec4899, #f59e0b);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(100px, -100px) scale(1.1);
  }
  66% {
    transform: translate(-100px, 100px) scale(0.9);
  }
}

/* Header */
.header {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  animation: fadeInDown 0.8s ease-out;
}

@media (min-width: 768px) {
  .header {
    margin-bottom: 4rem;
  }
}

.header-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.header-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .header-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .header-title {
    font-size: 4.5rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.header-subtitle {
  color: #c4b5fd;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .header-subtitle {
    font-size: 1.25rem;
  }
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Project Card */
.project-card {
  background: rgba(30, 27, 75, 0.4);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.6s ease-out backwards;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-12px);
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 
    0 20px 40px rgba(139, 92, 246, 0.3),
    0 0 80px rgba(236, 72, 153, 0.2);
}

/* Card Shine Effect */
.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.6s;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover .card-shine {
  left: 100%;
}

/* Media Container */
.media-container {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
}

@media (min-width: 768px) {
  .media-container {
    height: 280px;
  }
}

.project-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-media {
  transform: scale(1.15);
}

/* Badge */
.badge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  position: relative;
  overflow: hidden;
}

.badge-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.badge-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  animation: bounce 2s infinite;
  position: relative;
  z-index: 1;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.badge-text {
  font-size: 1.25rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 2;
}

.project-card:hover .overlay {
  opacity: 1;
}

.overlay-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.overlay-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.6);
}

.overlay-btn svg {
  transition: transform 0.3s;
}

.overlay-btn:hover svg {
  transform: translateX(5px);
}

/* Project Content */
.project-content {
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .project-content {
    padding: 2rem;
  }
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
  line-height: 1.3;
}

@media (min-width: 768px) {
  .project-title {
    font-size: 1.5rem;
  }
}

.project-description {
  color: #c4b5fd;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.875rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 768px) {
  .project-description {
    font-size: 0.9375rem;
  }
}

/* Technologies */
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.375rem 0.875rem;
  border-radius: 50px;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c4b5fd;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
}

@media (min-width: 768px) {
  .tech-badge {
    font-size: 0.8125rem;
  }
}

.tech-badge:hover {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-color: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;
}

.modal-content {
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 32px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

/* Modal Color Bar */
.modal-color-bar {
  height: 6px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899, #f59e0b);
  background-size: 200% 100%;
  animation: gradientSlide 3s linear infinite;
  border-radius: 32px 32px 0 0;
}

@keyframes gradientSlide {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}

/* Modal Close Button */
.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(239, 68, 68, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(239, 68, 68, 0.4);
}

.modal-close:hover {
  background: #dc2626;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.6);
}

/* Modal Media */
.modal-media {
  padding: 2rem;
  padding-top: 1rem;
}

@media (min-width: 768px) {
  .modal-media {
    padding: 3rem;
    padding-top: 2rem;
  }
}

.modal-media img,
.modal-media video {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.badge-large {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.badge-large::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  animation: pulse 2s infinite;
}

.badge-icon-large {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
  position: relative;
  z-index: 1;
}

.badge-large-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.badge-large-subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

/* Modal Details */
.modal-details {
  padding: 0 2rem 2rem;
}

@media (min-width: 768px) {
  .modal-details {
    padding: 0 3rem 3rem;
  }
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
}

@media (min-width: 768px) {
  .modal-title {
    font-size: 2.25rem;
  }
}

.modal-description-box {
  background: rgba(139, 92, 246, 0.1);
  border-left: 4px solid #8b5cf6;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.description-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.modal-description {
  color: #e0e7ff;
  line-height: 1.7;
  font-size: 0.9375rem;
}

@media (min-width: 768px) {
  .modal-description {
    font-size: 1rem;
  }
}

/* Modal Tech Section */
.modal-tech-section {
  margin-bottom: 2rem;
}

.modal-tech-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #c4b5fd;
}

.technologies-modal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-badge-modal {
  padding: 0.625rem 1.25rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s;
  animation: fadeInScale 0.4s ease-out backwards;
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-badge-modal:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.5);
}

/* GitHub Link */
.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.github-link:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.6);
}

.github-link svg {
  transition: transform 0.3s;
}

.github-link:hover svg {
  transform: rotate(360deg);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

/* Scrollbar Styling */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(139, 92, 246, 0.1);
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #7c3aed, #db2777);
}
</style>