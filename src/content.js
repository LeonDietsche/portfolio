export const siteContent = {
  de: {
    meta: {
      title: 'Leon Dietsche | Immobilien & Software',
      description: 'Leon Dietsche, Immobilien und Software, St. Gallen.'
    },
    navigation: {
      items: [
        { name: 'Profil', href: '#about' },
        { name: 'Kompetenzen', href: '#skills' },
        { name: 'Erfahrung', href: '#experience' },
        { name: 'Projekte', href: '#projects' },
        { name: 'Ausbildung', href: '#education' },
        { name: 'Kontakt', href: '#contact' }
      ],
      languageLabel: 'Sprache'
    },
    hero: {
      subtitle: 'Immobilien & Software',
      description: 'Gründer der Rhealis AG, St. Gallen',
      primaryCta: 'Profil',
      secondaryCta: 'Kontakt',
      secondaryHref: '#contact',
      imageAlt: 'Leon Dietsche'
    },
    about: {
      title: 'Profil',
      paragraphs: [
        'Immobilien & Software',
      ],
      factsTitle: 'Kurzprofil',
      facts: [
        { label: 'Standort', value: 'St. Gallen, Schweiz' },
        { label: 'Tätigkeit', value: 'Gründer, Rhealis AG' },
        { label: 'Erfahrung', value: '5+ Jahre Softwareentwicklung' },
        { label: 'Ausbildung', value: 'Applikationsentwickler EFZ' }
      ]
    },
    skills: {
      title: 'Kompetenzen',
      coreTitle: 'Fachgebiete',
      toolkitTitle: 'Technologien',
      skills: [
        { name: 'Immobilienbewirtschaftung', description: 'Operative Bewirtschaftung und Unternehmensführung' },
        { name: 'Softwareentwicklung', description: 'Business-Anwendungen in Frontend und Backend' },
        { name: 'Webentwicklung', description: 'Webanwendungen mit React und JavaScript' },
        { name: 'Finanzsysteme', description: 'Vier Jahre Entwicklung von Enterprise-Finanzsoftware' }
      ],
      technologies: ['JavaScript / React', 'Java', 'Python', 'SQL', 'PHP', 'C#'],
      focusItems: []
    },
    experience: {
      title: 'Erfahrung',
      items: [
        {
          title: 'Gründer',
          company: 'Rhealis AG',
          duration: 'Heute',
          location: 'St. Gallen, Schweiz',
          technologies: ['Immobilienbewirtschaftung', 'Unternehmensführung'],
          description: 'Aufbau und Führung eines Unternehmens für Immobilienbewirtschaftung.'
        },
        {
          title: 'Software Developer',
          company: 'Arvato Financial Solutions',
          duration: 'November 2021 - Dezember 2025',
          location: 'Schlieren, Zürich, Schweiz',
          technologies: ['Java', 'JavaScript', 'MSSQL'],
          description: 'Entwicklung und Wartung von Finanzsoftware im Enterprise-Umfeld.'
        },
        {
          title: 'Software Engineer Web Development',
          company: 'MF Group AG',
          duration: 'Juli 2020 - Oktober 2021',
          location: 'St. Gallen, Schweiz',
          technologies: ['PHP', 'F3-Framework'],
          description: 'Entwicklung interner und externer Webanwendungen in Frontend und Backend.'
        },
        {
          title: 'Praktikant Softwareentwicklung',
          company: 'Universität St. Gallen (HSG)',
          duration: 'Oktober 2018',
          location: 'St. Gallen, Schweiz',
          technologies: ['C#'],
          description: ''
        },
        {
          title: 'Praktikant Softwareentwicklung',
          company: 'EGELI Informatik AG',
          duration: 'September 2018',
          location: 'St. Gallen, Schweiz',
          technologies: ['C#'],
          description: ''
        }
      ]
    },
    projects: {
      title: 'Projekte',
      intro: 'Eigene Projekte, Quellcode auf GitHub.',
      featuresTitle: '',
      linkLabel: 'Auf GitHub ansehen',
      items: [
        {
          title: 'Real Estate Scraper',
          technology: 'Python',
          description: 'Sammelt Immobilienmarktdaten automatisiert und bereitet sie für Analysen auf.',
          features: [],
          github: 'https://github.com/LeonDietsche/real-estate-scraper'
        },
        {
          title: 'Jarvis Assistant',
          technology: 'Python',
          description: 'Sprachgesteuerter Assistent zur Automatisierung wiederkehrender Aufgaben.',
          features: [],
          github: 'https://github.com/LeonDietsche/jarvis-assistant'
        },
        {
          title: 'Maria Studio',
          technology: 'JavaScript',
          description: 'Full-Stack-Webanwendung mit API-Anbindung.',
          features: [],
          github: 'https://github.com/LeonDietsche/mariastudio'
        }
      ]
    },
    education: {
      title: 'Ausbildung',
      currentLabel: 'Aktuell',
      items: [
        {
          degree: 'Sachbearbeiter Immobilien-Bewirtschaftung',
          school: 'KV Business School Zürich',
          duration: '2024 - 2025',
          grade: 'Note 5',
          focus: '',
          current: false
        },
        {
          degree: 'Applikationsentwickler EFZ',
          school: 'Informatikmittelschule St. Gallen am Brühl',
          duration: 'Juli 2017 - Juli 2021',
          grade: 'Abgeschlossen',
          focus: '',
          current: false
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      intro: 'Für Anfragen zur Immobilienbewirtschaftung oder zu Softwareprojekten.',
      touchTitle: 'Kontaktdaten',
      emailLabel: 'E-Mail',
      locationLabel: 'Standort',
      locationValue: 'St. Gallen, Schweiz',
      interestTitle: '',
      interests: [],
      form: {
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        submit: 'Nachricht senden'
      }
    },
    footer: {
      tagline: 'Immobilienbewirtschaftung · Softwareentwicklung',
      emailLabel: 'E-Mail',
      copyright: 'Alle Rechte vorbehalten.',
      location: 'St. Gallen, Schweiz'
    }
  },
  en: {
    meta: {
      title: 'Leon Dietsche | Real Estate & Software',
      description: 'Leon Dietsche, real estate and software, St. Gallen.'
    },
    navigation: {
      items: [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
      ],
      languageLabel: 'Language'
    },
    hero: {
      subtitle: 'Real estate and software',
      description: 'Founder of Rhealis AG, St. Gallen',
      primaryCta: 'About',
      secondaryCta: 'Contact',
      secondaryHref: '#contact',
      imageAlt: 'Leon Dietsche'
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am the founder of Rhealis AG in St. Gallen and run the company with a focus on real estate management.',
        'Before that, I spent more than five years developing software, most recently financial software at Arvato Financial Solutions. I bring that experience into property management: clear processes, clean data, and tools that work.'
      ],
      factsTitle: 'Quick Facts',
      facts: [
        { label: 'Location', value: 'St. Gallen, Switzerland' },
        { label: 'Role', value: 'Founder, Rhealis AG' },
        { label: 'Experience', value: '5+ years software development' },
        { label: 'Training', value: 'Application Developer EFZ' }
      ]
    },
    skills: {
      title: 'Skills',
      coreTitle: 'Areas',
      toolkitTitle: 'Technologies',
      skills: [
        { name: 'Real Estate Management', description: 'Property management operations and running a company' },
        { name: 'Software Development', description: 'Business applications across frontend and backend' },
        { name: 'Web Development', description: 'Web applications with React and JavaScript' },
        { name: 'Financial Systems', description: 'Four years developing enterprise financial software' }
      ],
      technologies: ['JavaScript / React', 'Java', 'Python', 'SQL', 'PHP', 'C#'],
      focusItems: []
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Founder',
          company: 'Rhealis AG',
          duration: 'Present',
          location: 'St. Gallen, Switzerland',
          technologies: ['Real Estate Management', 'Management'],
          description: 'Building and running a real estate management company.'
        },
        {
          title: 'Software Developer',
          company: 'Arvato Financial Solutions',
          duration: 'November 2021 - December 2025',
          location: 'Schlieren, Zurich, Switzerland',
          technologies: ['Java', 'JavaScript', 'MSSQL'],
          description: 'Development and maintenance of financial software in an enterprise environment.'
        },
        {
          title: 'Software Engineer Web Development',
          company: 'MF Group AG',
          duration: 'July 2020 - October 2021',
          location: 'St. Gallen, Switzerland',
          technologies: ['PHP', 'F3-Framework'],
          description: 'Development of internal and external web applications across frontend and backend.'
        },
        {
          title: 'Software Development Intern',
          company: 'University of St. Gallen (HSG)',
          duration: 'October 2018',
          location: 'St. Gallen, Switzerland',
          technologies: ['C#'],
          description: ''
        },
        {
          title: 'Software Development Intern',
          company: 'EGELI Informatik AG',
          duration: 'September 2018',
          location: 'St. Gallen, Switzerland',
          technologies: ['C#'],
          description: ''
        }
      ]
    },
    projects: {
      title: 'Projects',
      intro: 'Personal projects, source code on GitHub.',
      featuresTitle: '',
      linkLabel: 'View on GitHub',
      items: [
        {
          title: 'Real Estate Scraper',
          technology: 'Python',
          description: 'Collects real estate market data automatically and prepares it for analysis.',
          features: [],
          github: 'https://github.com/LeonDietsche/real-estate-scraper'
        },
        {
          title: 'Jarvis Assistant',
          technology: 'Python',
          description: 'Voice-controlled assistant that automates recurring tasks.',
          features: [],
          github: 'https://github.com/LeonDietsche/jarvis-assistant'
        },
        {
          title: 'Maria Studio',
          technology: 'JavaScript',
          description: 'Full-stack web application with API integration.',
          features: [],
          github: 'https://github.com/LeonDietsche/mariastudio'
        }
      ]
    },
    education: {
      title: 'Education',
      currentLabel: 'Current',
      items: [
        {
          degree: 'Real Estate Management Specialist',
          school: 'KV Business School Zürich',
          duration: '2024 - 2025',
          grade: 'Grade 5 (Swiss scale)',
          focus: '',
          current: false
        },
        {
          degree: 'Application Developer EFZ',
          school: 'Informatikmittelschule St. Gallen am Brühl',
          duration: 'July 2017 - July 2021',
          grade: 'Completed',
          focus: '',
          current: false
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'For enquiries about real estate management or software projects.',
      touchTitle: 'Contact Details',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'St. Gallen, Switzerland',
      interestTitle: '',
      interests: [],
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    footer: {
      tagline: 'Real Estate Management · Software Development',
      emailLabel: 'Email',
      copyright: 'All rights reserved.',
      location: 'St. Gallen, Switzerland'
    }
  }
};
