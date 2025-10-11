<template>
  <section id="contact" class="contact">
    <!-- Animated background -->
    <div class="bg-particles">
      <div class="particle" v-for="i in 15" :key="i" :style="getParticleStyle(i)"></div>
    </div>

    <!-- Glowing orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <div class="contact-container">
      <h2 class="section-title">
        <span class="title-icon">📬</span>
        <span class="title-number">04.</span>
        <span class="title-text">Contactez-moi</span>
        <span class="title-decoration"></span>
      </h2>

      <div class="contact-content">
        <!-- Infos avec glass card -->
        <div class="contact-info">
          <div class="info-card">
            <h3 class="contact-subtitle">
              <span class="subtitle-icon">💬</span>
              Discutons de votre projet
            </h3>
            <p class="contact-text">
              Je suis toujours intéressé par de nouvelles opportunités et collaborations. 
              Que vous ayez une question ou simplement envie de discuter, n'hésitez pas à me contacter !
            </p>

            <div class="contact-details">
              <div class="contact-item">
                <div class="item-gif-wrapper">
                  <img src="../assets/email.gif" alt="Email GIF" class="contact-gif"/>
                  <div class="gif-glow"></div>
                </div>
                <div class="contact-item-content">
                  <h4>Email</h4>
                  <a href="mailto:rakotozafysafidy24@gmail.com">rakotozafysafidy24@gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="item-gif-wrapper">
                  <img src="../assets/ide.gif" alt="IDE GIF" class="contact-gif"/>
                  <div class="gif-glow"></div>
                </div>
                <div class="contact-item-content">
                  <h4>Téléphone</h4>
                  <a href="tel:+261345821829">+261 34 58 218 29</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="item-gif-wrapper">
                  <img src="../assets/papersubmit.gif" alt="Paper GIF" class="contact-gif"/>
                  <div class="gif-glow"></div>
                </div>
                <div class="contact-item-content">
                  <h4>Localisation</h4>
                  <p>Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            <div class="social-section">
              <p class="social-title">Retrouvez-moi sur</p>
              <div class="social-links">
                <a href="https://github.com" class="social-link" target="_blank" rel="noopener">
                  <span class="social-icon">→</span>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener">
                  <span class="social-icon">→</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener">
                  <span class="social-icon">→</span>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire avec glass card -->
        <div class="contact-form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-header">
              <h3 class="form-title">Envoyez-moi un message</h3>
              <p class="form-subtitle">Je vous répondrai dans les plus brefs délais</p>
            </div>

            <div class="form-group">
              <label for="name">
                <span class="label-icon">👤</span>
                Nom complet
              </label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                placeholder="Votre nom complet" 
                required
              >
            </div>

            <div class="form-group">
              <label for="email">
                <span class="label-icon">📧</span>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="votre.email@example.com" 
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">
                <span class="label-icon">📝</span>
                Sujet
              </label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                placeholder="Sujet de votre message" 
                required
              >
            </div>

            <div class="form-group">
              <label for="message">
                <span class="label-icon">💭</span>
                Message
              </label>
              <textarea 
                id="message" 
                v-model="form.message" 
                placeholder="Décrivez votre projet ou votre demande..." 
                rows="6" 
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting" class="btn-content">
                <span class="btn-icon">🚀</span>
                <span>Envoyer le message</span>
              </span>
              <span v-else class="btn-content">
                <span class="spinner"></span>
                <span>Envoi en cours...</span>
              </span>
            </button>

            <transition name="message-slide">
              <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                <span class="message-icon">{{ submitStatus === 'success' ? '✓' : '✗' }}</span>
                {{ submitMessage }}
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-main">
          <p class="footer-logo">
            <span class="footer-icon">✨</span>
            Portfolio
            <span class="footer-dot">.</span>
          </p>
          <p class="footer-text">&copy; 2025 RAKOTOZAFY Safidinirina. Tous droits réservés.</p>
        </div>
        <div class="footer-divider"></div>
        <p class="footer-credit">
          Conçu et développé avec <span class="heart">❤️</span> à Madagascar
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactSection',
  data() {
    return {
      form: { name: '', email: '', subject: '', message: '' },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: ''
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.submitMessage = '';

      const templateParams = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message
      };

      try {
        await emailjs.send(
          'service_kwt3jkc',
          'template_agse9vg',
          templateParams,
          'ogxgSDzThDwPGtBcv'
        );

        this.submitMessage = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
        this.submitStatus = 'success';
        this.form = { name: '', email: '', subject: '', message: '' };
      } catch (error) {
        console.error('Erreur EmailJS:', error);
        this.submitMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.submitStatus = 'error';
      } finally {
        this.isSubmitting = false;
        setTimeout(() => { this.submitMessage = '' }, 5000);
      }
    },
    getParticleStyle(i) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: (Math.random() * 10 + 10) + 's'
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* Section principale */
.contact {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
  color: #fff;
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
  animation: particleFloat 15s infinite linear;
  box-shadow: 0 0 8px rgba(100, 200, 255, 0.7);
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
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
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -150px;
  right: -150px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -100px;
  left: -100px;
  animation-delay: 5s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 50px) scale(0.9); }
}

.contact-container {
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

/* Content grid */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

/* Info card */
.contact-info {
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

.info-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.3);
}

.contact-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #fff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle-icon {
  font-size: 1.8rem;
}

.contact-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

/* Contact details */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-item:hover {
  transform: translateX(10px);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  border-color: rgba(102, 126, 234, 0.3);
}

.item-gif-wrapper {
  position: relative;
  flex-shrink: 0;
}

.contact-gif {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.gif-glow {
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  filter: blur(20px);
  opacity: 0.3;
  z-index: 0;
  border-radius: 15px;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; transform: scale(0.9); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

.contact-item-content h4 {
  font-size: 1.1rem;
  color: #64b5f6;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.contact-item-content a,
.contact-item-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item-content a:hover {
  color: #64b5f6;
}

/* Social section */
.social-section {
  margin-top: 2rem;
}

.social-title {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  border-color: transparent;
}

.social-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: translateX(3px);
}

/* Form wrapper */
.contact-form-wrapper {
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

.contact-form {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.3);
}

.form-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

.form-group {
  margin-bottom: 1.8rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.label-icon {
  font-size: 1.1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

/* Submit button */
.submit-btn {
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.submit-btn:hover::before {
  opacity: 1;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 1.3rem;
}

/* Spinner */
.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Submit message */
.message-slide-enter-active,
.message-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.message-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.message-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1.2rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.message-icon {
  font-size: 1.3rem;
  font-weight: bold;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

/* Footer */
.footer {
  padding: 3rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.footer-main {
  margin-bottom: 1.5rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.footer-icon {
  font-size: 1.3rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.15) rotate(180deg); }
}

.footer-logo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-dot {
  color: #667eea;
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.footer-divider {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #667eea, transparent);
  margin: 1.5rem auto;
  border-radius: 2px;
}

.footer-credit {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.heart {
  color: #f87171;
  animation: heartbeat 1.5s ease-in-out infinite;
  display: inline-block;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 1200px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .info-card,
  .contact-form {
    padding: 2rem;
  }

  .contact-subtitle {
    font-size: 1.6rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .social-links {
    flex-direction: column;
  }

  .social-link {
    justify-content: center;
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

  .info-card,
  .contact-form {
    padding: 1.5rem;
  }

  .contact-gif {
    width: 60px;
    height: 60px;
  }

  .contact-item {
    padding: 1rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.9rem 1rem;
  }
}
</style>