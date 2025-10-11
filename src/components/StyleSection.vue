<template>
  <div class="details-section">
    <div class="details-container">
      <!-- Contenu texte à gauche -->
      <div class="details-content">
        <h2 class="details-title">
          <span class="title-icon">🔍</span>
          Voir les détails des projets
        </h2>
        <p class="details-description">
          Découvrez en profondeur chacun de mes projets : technologies utilisées, 
          défis relevés, solutions apportées et résultats obtenus. Chaque projet 
          raconte une histoire unique de développement et d'innovation.
        </p>
        <button @click="navigateToDetails" class="details-btn">
          <span class="btn-text">Voir les détails</span>
          <span class="btn-arrow">→</span>
        </button>
      </div>

      <!-- Image GIF à droite -->
      <div class="details-image">
        <div class="image-wrapper">
          <img :src="detail" alt="Détails des projets" class="detail-gif" />
          <div class="image-glow"></div>
        </div>
        <!-- Badge flottant -->
        <div class="floating-badge">
          <span class="badge-icon">✨</span>
          <span>En savoir plus</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import detail from '../assets/detail.gif'

export default {
  name: 'ProjectDetailsSection',
  setup() {
    const router = useRouter()

    const navigateToDetails = () => {
      router.push('/details-projets') // redirige vers la page Detail.vue
    }

    return {
      detail,
      navigateToDetails
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

.details-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background decorative elements */
.details-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

.details-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Contenu texte */
.details-content {
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

.details-title {
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff 0%, #64b5f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-icon {
  font-size: 2.5rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.details-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.details-btn {
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.details-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.details-btn:hover::before {
  opacity: 1;
}

.details-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.6);
}

.details-btn:active {
  transform: translateY(-2px);
}

.btn-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.details-btn:hover .btn-arrow {
  transform: translateX(8px);
}

/* Image section */
.details-image {
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

.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-gif {
  width: 100%;
  max-width: 550px;
  
  animation: float 5s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(-2deg); }
  50% { transform: translateY(-30px) rotate(2deg); }
  75% { transform: translateY(-20px) rotate(-1deg); }
}

.image-glow {
  position: absolute;
  inset: -30px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  filter: blur(60px);
  opacity: 0.5;
  z-index: 0;
  border-radius: 30px;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { 
    opacity: 0.5; 
    transform: scale(0.95); 
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.1); 
  }
}

/* Floating badge */
.floating-badge {
  position: absolute;
  bottom: -20px;
  right: 50px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 1.8rem;
  border-radius: 25px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: floatBadge 3s ease-in-out infinite;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.badge-icon {
  font-size: 1.3rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
    filter: brightness(1);
  }
  50% { 
    transform: scale(1.2) rotate(180deg); 
    filter: brightness(1.5);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .details-container {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  .details-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .details-title {
    justify-content: center;
  }

  .details-description {
    max-width: 100%;
  }

  .floating-badge {
    right: 50%;
    transform: translateX(50%);
  }
}

@media (max-width: 768px) {
  .details-section {
    padding: 4rem 1.5rem;
  }

  .details-title {
    font-size: 2.3rem;
  }

  .details-description {
    font-size: 1.05rem;
  }

  .detail-gif {
    max-width: 100%;
  }

  .floating-badge {
    bottom: -15px;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .details-title {
    font-size: 1.9rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-icon {
    font-size: 2rem;
  }

  .details-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
  }

  .floating-badge {
    position: relative;
    bottom: auto;
    right: auto;
    transform: none;
    margin-top: 1.5rem;
  }
}
</style>