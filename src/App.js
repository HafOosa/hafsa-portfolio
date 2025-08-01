import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'education', label: 'Formation', icon: '🎓' },
    { id: 'experience', label: 'Expériences', icon: '💼' },
    { id: 'projects', label: 'Projets', icon: '💻' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'about', label: 'About Me', icon: '👩‍💻' }
  ];

  // Updated data with all your content
  const personalInfo = {
    name: "Hafsa El Guallaf",
    title: "Étudiante Master Sécurité IT & Big Data",
    subtitle: "Data Analyst & Security Enthusiast", 
    location: "Boukhalef, Tanger",
    email: "hafsaelguallaf@gmail.com",
    phone: "+212 706218017",
    linkedin: "https://www.linkedin.com/in/hafsa-el-guallaf/",
    github: "https://github.com/HafOosa",
    description: "Spécialiste émergente en Data Science et Cybersécurité, combinant formation académique solide et expérience terrain. Compétente dans le cycle complet du traitement de données sécurisées : collecte, analyse, visualisation et recommandations stratégiques. Expertise en infrastructure cloud, machine learning, et sécurisation des systèmes d'information."
  };

  const education = [
    {
      degree: "Master sécurité IT et Big Data",
      school: "FACULTE DES SCIENCES ET DE TECHNIQUES, TANGER",
      period: "2024 - Actuellement",
      status: "current"
    },
    {
      degree: "Licence Analytique des données", 
      school: "FACULTE DES SCIENCES ET DE TECHNIQUES, TANGER",
      period: "2023 - 2024",
      status: "completed"
    },
    {
      degree: "Diplôme d'études universitaires scientifiques et techniques (MIPC)",
      school: "FACULTE DES SCIENCES ET DE TECHNIQUES, TANGER",
      period: "2020-2023",
      status: "completed"
    },
    {
      degree: "Baccalauréat en Sciences Physiques Chimiques",
      school: "LYCÉE, MAATI BOU ABID, TÉMARA",
      period: "2020-2023",
      status: "completed"
    }
  ];

  // All your certifications from the images
  const certifications = [
    {
      name: "Certification en Python for Data Science & AI Development",
      company: "IBM",
      logo: "🔵",
      category: "Data Science",
      status: "completed"
    },
    {
      name: "Big Data 101 → Understanding the landscape",
      company: "IBM", 
      logo: "🔵",
      category: "Big Data",
      status: "completed"
    },
    {
      name: "Hadoop 101 → Learning the foundation",
      company: "IBM",
      logo: "🔵", 
      category: "Big Data",
      status: "completed"
    },
    {
      name: "Spark Fundamentals I → Mastering the tools",
      company: "IBM",
      logo: "🔵",
      category: "Big Data", 
      status: "completed"
    },
    {
      name: "Certification en Bases des données",
      company: "Google",
      logo: "📜",
      category: "Database",
      status: "completed"
    },
    {
      name: "Certification en Programmation Python",
      company: "University of Michigan", 
      logo: "📜",
      category: "Programming",
      status: "completed"
    },
    {
      name: "Certification en Structured Query Language (SQL)",
      company: "University of Michigan",
      logo: "🏛️",
      category: "Database",
      status: "completed"
    },
    {
      name: "Certification en Data Visualization with Power BI",
      company: "Great Learning",
      logo: "📊",
      category: "Visualization",
      status: "completed"
    }
  ];

  // All your projects from both CV and additional ones
  const projects = [
    {
      title: "BANCATI - Plateforme Fintech hybride",
      tech: ["Angular", "FastAPI", "Web3.js", "Docker"],
      description: "Plateforme Fintech hybride complète avec intégration blockchain, API REST moderne et interface utilisateur responsive.",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: "🏦",
      category: "FinTech"
    },
    {
      title: "Agence immobilière - Gestion complète",
      tech: ["Python", "Tkinter", "phpMyAdmin"],
      description: "Application de gestion immobilière avec interface graphique intuitive et base de données relationnelle.",
      gradient: "from-blue-400 via-indigo-500 to-purple-600", 
      icon: "🏠",
      category: "Management"
    },
    {
      title: "Gestion FST - Système académique",
      tech: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
      description: "Système de gestion académique complet pour faculté avec gestion des étudiants, cours et notes.",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      icon: "🎓", 
      category: "Education"
    },
    {
      title: "E-commerce - Plateforme de vente",
      tech: ["Java", "Spring Boot", "MySQL"],
      description: "Plateforme e-commerce complète avec gestion des produits, commandes et paiements sécurisés.",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      icon: "🛒",
      category: "E-commerce"  
    },
    {
      title: "Serveur podcast distribué",
      tech: ["Python", "Socket", "Pygame"],
      description: "Architecture distribuée pour streaming audio avec gestion multi-clients et synchronisation temps réel.",
      gradient: "from-purple-400 via-pink-500 to-rose-600",
      icon: "🎧",
      category: "Streaming"
    },
    {
      title: "Analyse de malwares (ML non supervisé)",
      tech: ["Angular", "FastAPI", "Kubeflow", "Docker", "MLOps"],
      description: "Pipeline complet de détection de malwares avec clustering, API REST, déploiement MLOps et visualisation en cours.",
      gradient: "from-red-400 via-orange-500 to-yellow-600", 
      icon: "🛡️",
      category: "Cybersecurity"
    },
    {
      title: "Architecture Cloud UAE avec SLA",
      tech: ["CloudSim", "OpenStack", "Python"],
      description: "Simulation de déploiement IaaS/SaaS avec surveillance SLA et script d'automatisation (en cours).",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      icon: "☁️", 
      category: "Cloud"
    },
    {
      title: "Infrastructure virtualisée hybride",
      tech: ["VMware", "Docker", "Prometheus", "Grafana"],
      description: "Infrastructure hybride avec surveillance système complète et métriques de performance (en cours).",
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      icon: "🖥️",
      category: "Infrastructure"
    }
  ];

  const experiences = [
    {
      company: "Suprajit Morocco",
      period: "23 Juin 2025 - 23 Août 2025", 
      location: "Tanger",
      role: "Stage - Gestion RH via Power BI",
      description: "Transformation complète de l'infrastructure de cybersécurité d'entreprise par la migration vers Sophos UTM et l'obtention de la certification TISAX.",
      status: "upcoming"
    },
    {
      company: "CLOUD MARKETING HUB AGENCY",
      period: "15 Avril 2024 - 15 Juin 2024",
      location: "Tanger", 
      role: "Stage - Gestion RH via Power BI",
      description: "Gestion des ressources humaines via Power BI, avec analyse des données RH en utilisant Python pour optimiser les processus internes.",
      status: "completed"
    }
  ];

  const parascolaires = [
    {
      club: "Club Together We Can",
      role: "Présidente / Cheffe d'équipe d'organisation",
      description: "Membre active (Organisation des hackathons, caravanes, etc.)",
      status: "current"
    },
    {
      club: "Club Cyber Force (Master)", 
      role: "Fondatrice du club / Responsable médiatisation",
      description: "Création et gestion du club de cybersécurité",
      status: "current"
    },
    {
      club: "Club IT GEEGS",
      role: "Organisatrice d'événements",
      description: "Organisation d'événements et des formations (Postman, informatique b darija)",
      status: "completed"
    }
  ];

  const skills = {
    programming: ["SQL", "R", "Python", "C", "Java"],
    visualization: ["Power BI", "Tableau", "Docker"],
    systems: ["Windows", "Linux (Ubuntu, Debian)"],
    frameworks: ["Spring Boot", "Laravel", "Flask", "Angular", "FastAPI"],
    bigData: ["Hadoop", "Spark", "Apache Kafka", "MLOps", "Kubeflow"],
    cloud: ["OpenStack", "CloudSim", "VMware", "Prometheus", "Grafana"]
  };

  const languages = [
    { name: "Arabe", level: "Maternelle", flag: "🇲🇦", percentage: 100 },
    { name: "Français", level: "Opérationnel", flag: "🇫🇷", percentage: 85 },
    { name: "Anglais", level: "Intermédiaire", flag: "🇬🇧", percentage: 70 }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <section className="py-20 px-6 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`space-y-8 transition-all duration-1500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <div className="space-y-6">
                    <div className={`inline-flex items-center space-x-2 ${
                      isDark ? 'bg-gray-800/50' : 'bg-white/80'
                    } backdrop-blur-sm border ${
                      isDark ? 'border-gray-700' : 'border-gray-200'
                    } rounded-full px-4 py-2`}>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {personalInfo.title}
                      </span>
                    </div>
                    
                    <h1 className="text-6xl lg:text-8xl font-black leading-none font-heading">
                      <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>Hafsa</span>
                      <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        El Guallaf
                      </span>
                      <span className={`block text-4xl lg:text-5xl font-light ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Cyber Data Specialist
                      </span>
                    </h1>
                    
                    <p className={`text-xl lg:text-2xl max-w-2xl leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'  
                    }`}>
                      Étudiante en Master Sécurité IT & Big Data, je conçois des solutions sécurisées et intelligentes en exploitant les données pour renforcer la prise de décision et la résilience des systèmes.
                      <span className="text-emerald-400"> Basée à {personalInfo.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setActiveSection('projects')}
                      className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
                    >
                      Découvrir Mon Travail
                    </button>
                    <a 
                      href="/documents/hafsa-cv.pdf" 
                      download="Hafsa_El_Guallaf_CV.pdf"
                      className={`inline-block px-8 py-4 border-2 ${
                        isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                      } rounded-full font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 text-center`}
                    >
                      📄 Télécharger CV
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{projects.length}+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projets</div>
                    </div>
                    <div className={`w-px h-16 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{certifications.length}+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</div>
                    </div>
                    <div className={`w-px h-16 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{parascolaires.length}+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clubs Actifs</div>
                    </div>
                  </div>
                </div>
                
                <div className={`relative transition-all duration-1500 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <div className="relative w-96 h-96 mx-auto">
                    {/* Profile Photo */}
                    <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-1 shadow-2xl shadow-emerald-500/30">
                      <div className={`w-full h-full rounded-full overflow-hidden border-4 ${
                        isDark ? 'border-gray-800' : 'border-gray-200'
                      }`}>
                        <img 
                          src="/images/profile/hafsa-photo.jpg" 
                          alt="Hafsa El Guallaf"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center text-6xl`} style={{display: 'none'}}>
                          <div className="text-center">
                            <div className="text-4xl mb-2">👩‍💻</div>
                            <div className="text-xs text-emerald-400 font-medium">
                              <span className="bg-emerald-500/20 px-2 py-1 rounded-full backdrop-blur-sm">Add your photo to public/images/profile/hafsa-photo.jpg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating tech icons */}
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-3xl rotate-12 shadow-xl shadow-emerald-500/30 animate-float">
                      🐍
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center text-3xl -rotate-12 shadow-xl shadow-teal-500/30 animate-float">
                      📊
                    </div>
                    <div className="absolute top-8 -left-12 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl rotate-45 shadow-xl shadow-cyan-500/30 animate-float">
                      🔒
                    </div>
                    <div className="absolute bottom-8 -right-12 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl -rotate-45 shadow-xl shadow-blue-500/30 animate-float">
                      ☁️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'education':
        return (
          <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Formation
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                  Mon parcours académique en sciences et technologies
                </p>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className={`${
                    isDark ? 'bg-gray-800/50' : 'bg-white/80'
                  } backdrop-blur-sm rounded-3xl p-8 border ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  } hover:border-emerald-500/50 transition-all duration-300 hover:scale-105`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                          {edu.degree}
                        </h3>
                        <p className="text-emerald-400 font-medium mb-2">{edu.school}</p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.period}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'current' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {edu.status === 'current' ? 'En cours' : 'Terminé'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'experience':
        return (
          <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Expériences
                  </span>
                </h2>
              </div>
              
              {/* Stages */}
              <div className="mb-16">
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
                  Stages Professionnels
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className={`${
                      isDark ? 'bg-gray-800/50' : 'bg-white/80'
                    } backdrop-blur-sm rounded-3xl p-8 border ${
                      isDark ? 'border-gray-700' : 'border-gray-200'
                    } hover:border-teal-500/50 transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl">
                              🏢
                            </div>
                            <div>
                              <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {exp.company}
                              </h4>
                              <p className="text-blue-400 font-medium">{exp.role}</p>
                            </div>
                          </div>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                            {exp.description}
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            📍 {exp.location} • 📅 {exp.period}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'upcoming' 
                            ? 'bg-yellow-500/20 text-yellow-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {exp.status === 'upcoming' ? 'À venir' : 'Terminé'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expériences Parascolaires */}
              <div>
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
                  Expériences Parascolaires
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {parascolaires.map((exp, index) => (
                    <div key={index} className={`${
                      isDark ? 'bg-gray-800/50' : 'bg-white/80'
                    } backdrop-blur-sm rounded-3xl p-8 border ${
                      isDark ? 'border-gray-700' : 'border-gray-200'
                    } hover:border-teal-500/50 transition-all duration-300 hover:scale-105`}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-3xl flex items-center justify-center text-2xl mb-6 mx-auto">
                          🌟
                        </div>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                          {exp.club}
                        </h4>
                        <p className="text-teal-400 font-medium mb-4">{exp.role}</p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-4`}>
                          {exp.description}
                        </p>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'current' 
                            ? 'bg-teal-500/20 text-teal-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {exp.status === 'current' ? 'Actuel' : 'Terminé'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case 'projects':
        return (
          <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    Projets Académiques
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                  Portfolio complet de mes projets techniques couvrant FinTech, Machine Learning, Cloud Computing et plus
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className={`group ${
                    isDark ? 'bg-gray-800/50' : 'bg-white/80'
                  } backdrop-blur-sm rounded-3xl p-8 border ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  } hover:border-emerald-500/50 transition-all duration-500 hover:scale-105`}>
                    <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 flex items-center justify-center text-4xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative text-white">{project.icon}</div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                        {project.category}
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                      {project.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed text-sm`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`${
                          isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                        } text-emerald-400 px-3 py-1 rounded-full text-xs font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'certifications':
        return (
          <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Certifications
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                  Mes certifications en Data Science, Big Data et technologies émergentes
                </p>
              </div>

              {/* Group certifications by category */}
              <div className="space-y-12">
                {['Data Science', 'Big Data', 'Database', 'Programming', 'Visualization'].map((category) => {
                  const categoryCerts = certifications.filter(cert => cert.category === category);
                  if (categoryCerts.length === 0) return null;
                  
                  return (
                    <div key={category}>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 flex items-center`}>
                        <span className="mr-3">
                          {category === 'Data Science' ? '🔬' : 
                           category === 'Big Data' ? '📊' :
                           category === 'Database' ? '🗄️' :
                           category === 'Programming' ? '💻' : '📈'}
                        </span>
                        {category}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryCerts.map((cert, index) => (
                          <div key={index} className={`${
                            isDark ? 'bg-gray-800/50' : 'bg-white/80'
                          } backdrop-blur-sm rounded-3xl p-6 border ${
                            isDark ? 'border-gray-700' : 'border-gray-200'
                          } hover:border-yellow-500/50 transition-all duration-300 hover:scale-105`}>
                            <div className="flex items-start space-x-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                                {cert.logo}
                              </div>
                              <div className="flex-1">
                                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm mb-2 leading-tight`}>
                                  {cert.name}
                                </h4>
                                <p className="text-yellow-500 text-sm font-medium mb-2">{cert.company}</p>
                                <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium inline-block">
                                  ✓ Certifié
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Achievement highlight */}
              <div className={`mt-16 ${isDark ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50' : 'bg-gradient-to-r from-white/80 to-gray-50/80'} backdrop-blur-sm rounded-3xl p-8 border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                    "From curiosity to competency!" 📝
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}>
                    Recently completed three IBM SkillsBuild certifications that took me deep into the world of Big Data: 
                    <strong> Big Data 101, Hadoop 101, and Spark Fundamentals I</strong>. 
                    Each certificate built upon the last, creating a comprehensive foundation in distributed computing and data processing.
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    Next step: applying these skills to solve actual business challenges! 🎯
                  </p>
                  <div className="mt-6 flex justify-center space-x-2">
                    {['#LearningJourney', '#BigData', '#ApacheSpark', '#Hadoop', '#IBM', '#DataEngineering'].map((tag) => (
                      <span key={tag} className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                  {personalInfo.description}
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Skills */}
                <div>
                  <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
                    Compétences Techniques
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-emerald-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">💻</span>
                        Langages de programmation
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">📊</span>
                        Outils de visualisation & conteneurisation
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.visualization.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">🖥️</span>
                        Systèmes d'exploitation
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.systems.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">🔧</span>
                        Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.frameworks.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-purple-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">🌐</span>
                        Big Data & MLOps
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.bigData.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-indigo-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">☁️</span>
                        Cloud & Infrastructure
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.cloud.map((skill, i) => (
                          <span key={i} className={`${
                            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                          } border px-4 py-2 rounded-full text-sm font-medium`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Languages & Contact */}
                <div>
                  <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
                    Langues
                  </h3>
                  <div className="space-y-6 mb-12">
                    {languages.map((lang, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center`}>
                            <span className="mr-3 text-2xl">{lang.flag}</span>
                            {lang.name}
                          </span>
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {lang.level}
                          </span>
                        </div>
                        <div className={`w-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full h-3`}>
                          <div
                            className={`h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
                      Contact
                    </h3>
                    <div className="space-y-4">
                      <div className={`flex items-center space-x-4 p-4 ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      } rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center text-white">
                          📧
                        </div>
                        <div>
                          <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</p>
                          <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 hover:text-emerald-300 transition-colors">
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className={`flex items-center space-x-4 p-4 ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      } rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center text-white">
                          📱
                        </div>
                        <div>
                          <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Téléphone</p>
                          <a href={`tel:${personalInfo.phone}`} className="text-teal-400 hover:text-teal-300 transition-colors">
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className={`flex items-center space-x-4 p-4 ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      } rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center text-white">
                          📍
                        </div>
                        <div>
                          <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Localisation</p>
                          <p className="text-cyan-400">{personalInfo.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-20 text-center">
                <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm rounded-3xl p-12 border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                    Prête pour de nouveaux défis !
                  </h3>
                  <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
                    Je recherche des opportunités de stage et projets en analyse de données, cybersécurité et big data.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
                    >
                      Me Contacter
                    </a>
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 py-4 border-2 ${
                        isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                      } rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300`}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      {isDark && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{ left: mousePos.x / 10, top: mousePos.y / 10 }}
          />
          <div 
            className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out delay-100"
            style={{ right: mousePos.x / 15, bottom: mousePos.y / 15 }}
          />
          <div 
            className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out delay-200"
            style={{ left: mousePos.x / 20, bottom: mousePos.y / 20 }}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDark ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-xl border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="text-3xl font-bold cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Hafsa
              </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>IT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } hover:text-emerald-400 transition-all duration-300 font-medium relative group flex items-center space-x-2 ${
                    activeSection === item.id ? 'text-emerald-400' : ''
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-7' : 'translate-x-0.5'
                }`}>
                  <span className="text-xs">{isDark ? '🌙' : '☀️'}</span>
                </div>
              </button>
              
              {/* CTA Button */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
              } border`}>
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}></div>
                  <div className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}></div>
                  <div className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className={`py-12 px-6 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } text-center border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Hafsa</span>
            <span className={isDark ? 'text-white' : 'text-gray-900'}>.</span>
          </div>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Analyste de données passionnée par la sécurité et l'innovation
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              💼 LinkedIn
            </a>
            <a 
              href={personalInfo.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-emerald-400 transition-colors`}
            >
              💻 GitHub
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              📧 Email
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="text-teal-500 hover:text-teal-400 transition-colors"
            >
              📱 Phone
            </a>
          </div>
          <div className={`mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2024 Hafsa El Guallaf. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;