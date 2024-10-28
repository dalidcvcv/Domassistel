import React, { useState, useEffect, useCallback } from 'react';
import './Accueil.css';
import BureauImage from '../Assets/Bureau.png';
import Adaptability from '../Assets/Adaptability.png';
import Confidentiality from '../Assets/Confidentiality.png';
import Economic from '../Assets/Economic.png';
import Flexibility from '../Assets/Flexibility.png';
import logo2 from '../Assets/logo2.png';

function Accueil() {
  const services = [
    { 
      title: "Professionnalisme", 
      description: "Secrétaires formées, avec une expérience spécifique dans le domaine médical.",
      image: BureauImage,
      textColor: '#2F372A' 
    },
    { 
      title: "Flexibilité", 
      description: "Disponibilité adaptée à vos horaires, sans contrainte d'engagement à long terme.",
      image: Flexibility,
      textColor: 'white' 
    },
    { 
      title: "Confidentialité", 
      description: "Nous garantissons la sécurité et la confidentialité des données médicales de vos patients.",
      image: Confidentiality,
      textColor: 'white'
    },
    { 
      title: "Économique", 
      description: "Un service externalisé sans les charges liées à un emploi interne.",
      image: Economic,
      textColor: '#2F372A' 
    },
    { 
      title: "Adaptabilité", 
      description: "Nous travaillons avec des cabinets généralistes, spécialistes, et autres professionnels de santé.",
      image: Adaptability,
      textColor: 'white'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modal

  const nextSlide = useCallback(() => {
    if (isRunning) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      console.log(`Changement d'image : ${services[currentIndex].title}`);
    }
  }, [currentIndex, isRunning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    console.log(`Navigation vers l'image : ${services[index].title}`);
  };

  const handleImageClick = () => {
    setIsRunning((prev) => !prev);
    console.log(isRunning ? "Défilement arrêté" : "Défilement relancé");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="centered-title">Pourquoi choisir notre service ?</h2>
      <div className="carousel">
        <div className="carousel-content" onClick={handleImageClick}>
          <img 
            src={services[currentIndex].image} 
            alt={services[currentIndex].title} 
            className="carousel-image" 
          />
          <h3 
            id={currentIndex === 1 ? 'second-text-h3' : ''} 
            style={{ color: services[currentIndex].textColor }}>
            {services[currentIndex].title}
          </h3>
          <p 
            id={currentIndex === 1 ? 'second-text-p' : ''} 
            style={{ color: services[currentIndex].textColor }}>
            {services[currentIndex].description}
          </p>
        </div>
      </div>

      <div className="pagination">
        {services.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
  
      <section className="services-section">
        <h2 className="centered-title">Nos Services</h2>
        <div className="services-container">
          <div className="service-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Gestion des appels téléphoniques</h3>
            <p>Prise de rendez-vous, gestion des annulations, répondeur personnalisé.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Gestion des agendas</h3>
            <p>Organisation en temps réel de votre planning.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-folder-open"></i>
            <h3>Suivi des dossiers patients</h3>
            <p>Classement et transmission des documents administratifs.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-bell"></i>
            <h3>Relance des patients</h3>
            <p>Rappels automatisés des rendez-vous.</p>
          </div>
        </div> 
      </section>
  
      <section>
        <h2 className="fonctionnement">Comment ça fonctionne ?</h2>
        <hr />
        <div className="container">
          <div className="item">
            <div className="separator"></div>
            <div className="text-container">
              <strong>Première prise de contact :</strong>
              <p>Un échange téléphonique ou via formulaire pour comprendre vos besoins spécifiques.</p>
            </div>
          </div>

          <div className="item">
            <div className="separator"></div>
            <div className="text-container">
              <strong>Mise en place du service :</strong>
              <p>Paramétrage des outils nécessaires pour harmoniser notre travail avec votre cabinet.</p>
            </div>
          </div>

          <div className="item">
            <div className="separator"></div>
            <div className="text-container">
              <strong>Gestion continue :</strong>
              <p>Suivi quotidien et ajustement de la prestation selon l'évolution de votre activité.</p>
            </div>
          </div>
        </div>

        <div className="tarification-section">
          <h2>Tarification transparente</h2>
          <img src={logo2} alt="logo2" />
          <p>
            Nous proposons des formules adaptées à vos besoins, de la gestion ponctuelle à un service à temps plein. 
            <br />
            Contactez-nous pour un devis personnalisé !
          </p>
          <button className="contact-button" onClick={openModal}>
            Contactez-nous
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <section className="contact-section">
              <h2>Contactez-nous</h2>
              <p>Remplissez le formulaire ci-dessous ou appelez-nous directement pour discuter de la meilleure solution pour votre cabinet.</p>
              <form id="contactForm">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Envoyer</button>
              </form>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accueil;
