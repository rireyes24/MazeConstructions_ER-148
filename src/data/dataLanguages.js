const languages = [
    {
      id: 1,
      name: "English",
      prefix: "EN",
      languages: {
        en: "English",
        es: "Spanish",
        he: "Hebrew",
      },
      data: {
        header: {
            welcome: "We are your reliable partner in Los Santos, Vice City & Liberty City."
        },
        body: {
            sections: {
                welcome: {
                    title: "Welcome to Maze Constructions",
                    description: ` In <b>Maze Constructions</b> we pride ourselves on being <b>leaders</b> in the construction 
                    industry in the most important cities of the USA. <br/> <br/> With <b>10 years of experience</b>, 
                    we continue to always provide high-quality service, recognized for our ability to turn our clients' 
                    dreams into reality.`,
                },
                specialty: {
                    title: "Our Specialty",
                    description: "We specialize in a wide range of construction services, from residential to commercial projects, ensuring exceptional results at every step of the way.",
                    description2: "Current projects under construction",
                    projects: [
                      {
                        name: "Construction of actor Matt Phillips' house",
                        address: "Pinewood Boulevard, Los Santos",
                        alt: "House in Construction",
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" ,
                      },
                      {
                        name: "Construction of the Cinnamon Shopping Center",
                        address: "Coconut Beach, Vice City",
                        alt: "Shopping Center in Construction",
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" ,
                      },
                      {
                        name: "Construction of the Skyler Building",
                        address: "Liberty Avenue, Liberty City",
                        alt: "Building in Construction",
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" ,
                      },
                    ]
                },
                team: "Team",
                location: "Location",
                contact: "Contact",
            }
        }
      } 
    },
    {
      id: 2,
      name: "Español",
      prefix: "ES",
      languages: {
        en: "Ingles",
        es: "Español",
        he: "Hebreo",
      },
      data: {        
        header: {
            welcome: "Somos tu socio confiable en Los Santos, Vice City & Liberty City."
        },
        body: {
            sections: {
                welcome: {
                    title: "Bienvenido a Maze Constructions",
                    description: `En <b>Maze Constructions</b> nos enorgullece ser <b>líderes</b> en la industria de la construcción en 
                    las ciudades mas importantes de EEUU. <br/> <br/> Con <b>10 años de trayectoria</b> continuamos en siempre dar un servicio
                    de alta calidad, somos reconocidos por nuestra habilidad para convertir los sueños de nuestros clientes
                    en realidad.`,
                },
                specialty: {
                    title: "Nuestra Especialidad",
                    description: "Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.",
                    description2: "Proyectos actuales en construcción",
                    projects: [
                      {
                        name: "Construcción de la casa del actor Matt Phillips",
                        address: "Pinewood Boulevard, Los Santos",
                        alt: "Casa en Construcción",
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" ,
                      },
                      {
                        name: "Construcción del Centers Comercial Cinnamon",
                        address: "Coconut Beach, Vice City",
                        alt: "Centro Comercial en Construcción",
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" ,
                      },
                      {
                        name: "Construcción del Edificio Skyler",
                        address: "Liberty Avenue, Liberty City", 
                        alt: "Edificio Skyler en Construcción",   
                        url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" ,
                      },
                    ],
                },
                team: "Team",
                location: "Location",
                contact: "Contact",
            }
        }
      } 
    },
    {
      id: 3,
      name: "Hebrew",
      prefix: "HE",
      languages: {
        en: "אנגלית",
        es: "ספרדית",
        he: "עברית",
      },
      data: {
        welcome: "אנחנו השותפים האמינים שלך בלוס סנטוס, וייס סיטי וליברטי סיטי."
      }
    }
];

export { languages }