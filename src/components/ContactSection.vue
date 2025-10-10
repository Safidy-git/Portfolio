<template>
  <section id="contact" class="contact">
    <div class="contact-container">
      <h2 class="section-title">
        <span class="title-number">03.</span>
        Contactez-moi
      </h2>

      <div class="contact-content">
        <!-- Infos -->
        <div class="contact-info">
          <h3 class="contact-subtitle">Discutons de votre projet</h3>
          <p class="contact-text">
            Je suis toujours intéressé par de nouvelles opportunités et collaborations. 
            Que vous ayez une question ou simplement envie de discuter, n'hésitez pas à me contacter !
          </p>

          <div class="contact-details">
            <div class="contact-item">
              <img src="../assets/email.gif" alt="Email GIF" class="contact-gif"/>
              <div class="contact-item-content">
                <h4>Email</h4>
                <a href="mailto:ton.email@example.com">rakotozafysafidy24@gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <img src="../assets/ide.gif" alt="IDE GIF" class="contact-gif"/>
              <div class="contact-item-content">
                <h4>Téléphone</h4>
                <a href="tel:+33123456789">+261 34 58 218 29</a>
              </div>
            </div>

            <div class="contact-item">
              <img src="../assets/papersubmit.gif" alt="Paper GIF" class="contact-gif"/>
              <div class="contact-item-content">
                <h4>Localisation</h4>
                <p>Antananarivo, Madagascar</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://github.com" class="social-link" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener">Twitter</a>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="contact-form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Nom complet</label>
              <input type="text" id="name" v-model="form.name" placeholder="Votre nom" required>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="votre.email@example.com" required>
            </div>

            <div class="form-group">
              <label for="subject">Sujet</label>
              <input type="text" id="subject" v-model="form.subject" placeholder="Sujet de votre message" required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Votre message..." rows="6" required></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else>Envoi en cours...</span>
            </button>

            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; 2025 Votre Nom. Tous droits réservés.</p>
      <p class="footer-credit">Conçu et développé avec ❤️</p>
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
    }
  }
};
</script>

<style scoped>
.contact {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #ffffff;
  color: #111;
  font-family: 'Poppins', sans-serif;
}

.contact-container { max-width: 1200px; margin: 0 auto; }

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-number { color: #007aff; font-size: 1.8rem; font-weight: 400; }

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #007aff, transparent);
  max-width: 300px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info { animation: fadeInLeft 1s ease; }

.contact-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: #007aff;
  margin-bottom: 1rem;
}

.contact-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 2.5rem;
}

.contact-details { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2.5rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 122, 255, 0.2);
  transition: all 0.3s ease;
}

.contact-item:hover { transform: translateX(5px); }

.contact-gif { width: 120px; height: 120px; object-fit: contain; animation: bounce 2s infinite; }

@keyframes bounce { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

.contact-item-content h4 { font-size: 1.2rem; color: #007aff; margin-bottom: 0.3rem; font-weight: 600; }

.contact-item-content a,
.contact-item-content p { font-size: 1rem; color: #111; text-decoration: none; }

.contact-item-content a:hover { color: #007aff; }

.social-links { display: flex; gap: 1rem; flex-wrap: wrap; }

.social-link {
  padding: 0.6rem 1.2rem;
  background: transparent;
  color: #007aff;
  text-decoration: none;
  border: 2px solid #007aff;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #007aff, #00c6ff);
  color: #ffffff;
  transform: translateY(-2px);
}

.contact-form-wrapper { animation: fadeInRight 1s ease; }

.contact-form {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 122, 255, 0.2);
}

.form-group { margin-bottom: 1.5rem; }

.form-group label { display: block; font-size: 1rem; color: #111; margin-bottom: 0.5rem; font-weight: 600; }

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  border: 2px solid rgba(0, 122, 255, 0.3);
  border-radius: 8px;
  color: #111;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007aff;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-group textarea { resize: vertical; min-height: 120px; }

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #007aff 0%, #00c6ff 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.5);
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  animation: slideDown 0.3s ease;
}

.submit-message.success {
  background: rgba(0, 122, 255, 0.2);
  color: #007aff;
  border: 1px solid rgba(0, 122, 255, 0.5);
}

.submit-message.error {
  background: rgba(255, 50, 50, 0.2);
  color: #ff0000;
  border: 1px solid rgba(255, 50, 50, 0.5);
}

.footer {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 122, 255, 0.2);
  margin-top: 4rem;
}

.footer p { color: #475569; font-size: 1rem; margin-bottom: 0.5rem; }
.footer-credit { font-size: 0.9rem; }

@keyframes fadeInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 968px) { .contact-content { grid-template-columns: 1fr; gap: 3rem; } }
@media (max-width: 480px) { 
  .social-links { flex-direction: column; } 
  .social-link { text-align: center; } 
  .contact-gif { width: 80px; height: 80px; } 
}
</style>
