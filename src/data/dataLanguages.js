const languages = [
    {
      id: 1,
      name: "English",
      flag: "/united-statesUS.png",
      prefix: "EN",
      languages: {
        title: "Select your language",
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
                team: {
                    title: "Our Team",
                    description: `Our <b>highly qualified team</b> of architects, engineers, and builders works in 
                    a <b>professional</b> and <b>personalized</b> manner to tailor to the specific needs 
                    of each client.W`
                },
                location: {
                    title: "Our Location",
                    locations: [
                        {
                            city: "Los Santos",
                            address: "555 Victory Boulevard, Los Santos",
                            telephone: "(555) 123-4567",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/los-santos-real_kqdfnd.jpg",
                            alt: "Foto de los Santos",
                        },
                        {
                            city: "Vice City",
                            address: "321 Ocean Beach Avenue, Vice City",
                            telephone: "(555) 321-6547",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/vice-city-real_brzmgl.jpg",
                            alt: "Foto de la ciudad de Vice City",
                        },
                        {
                            city: "Liberty City",
                            address: "123 Liberty Avenue, Liberty City",
                            telephone: "(555) 789-0123",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/liberty-city-real_mpnw4s.jpg",
                            alt: "Foto de la ciudad de Liberty City",
                        },
                    ]
                },
                contact: {
                    title: "Contact Us",
                    description: "Send us an email to schedule an appointment",
                    description2: "Send us a message to our inbox or follow us on our social media channels",
                }
            }
        },
        footer: {
          copyright: "Copyright © 2024. Todos los derechos reservados.",
          designBy: "Website designed by",
        }
      } 
    },
    {
      id: 2,
      name: "Español",
      flag: "/spainES.png",
      prefix: "ES",
      languages: {
        title: "Seleccione su idioma",
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
                team: {
                    title: "Equipo",
                    description: `Nuestro <b>equipo altamente calificado</b> de arquitectos, ingenieros y constructores trabaja 
                    de forma <b>profesional</b> y <b>personalizada</b> para que se ajusten a las necesidades específicas
                    de cada cliente.`,
                },
                location: {
                    title: "Nuestras Ubicaciones",
                    locations: [
                        {
                            city: "Los Santos",
                            address: "555 Victory Boulevard, Los Santos",
                            telephone: "(555) 123-4567",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/los-santos-real_kqdfnd.jpg",
                            alt: "Foto de los Santos",
                            map: "https://www.google.com/maps/place/Victory+Blvd,+Burbank,+CA,+EE.+UU./@34.1866408,-118.4876741,16z/data=!4m6!3m5!1s0x80c29995b6862361:0x46258d3a632e8397!8m2!3d34.1845309!4d-118.3336855!16s%2Fm%2F03hglg1?entry=ttu",
                        },
                        {
                            city: "Vice City",
                            address: "321 Ocean Beach Avenue, Vice City",
                            telephone: "(555) 321-6547",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/vice-city-real_brzmgl.jpg",
                            alt: "Foto de la ciudad de Vice City",
                            map: "https://www.google.com/maps/place/Downtown+Miami,+Miami,+Florida,+EE.+UU./@25.7620727,-80.3272535,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x88d9b4929f108bd7:0xfa10852c65eae94!2sOcean+Dr,+Miami+Beach,+FL+33139,+EE.+UU.!3b1!8m2!3d25.7685168!4d-80.1332062!16zL20vMDlxbGQ2!3m5!1s0x88d9b69c694cbbc9:0xab1a06f50823e79b!8m2!3d25.7712513!4d-80.1918728!16zL20vMGcwbG41?entry=ttu",
                        },
                        {
                            city: "Liberty City",
                            address: "123 Liberty Avenue, Liberty City",
                            telephone: "(555) 789-0123",
                            url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/liberty-city-real_mpnw4s.jpg",
                            alt: "Foto de la ciudad de Liberty City",
                            map: "https://www.google.com/maps/place/Manhattan,+Nueva+York,+EE.+UU./@40.7263278,-73.9806258,17.86z/data=!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
                        },                        
                    ]
                },
                contact: {
                    title: "Contactanos",
                    description: "Envianos un correo para agendar una cita",
                    description2: "Envianos un mensaje al indox o siguenos en nuestras redes sociales",
                },
            }
        },
        footer: {
            copyright: "Copyright © 2024. Todos los derechos reservados.",
            designBy: "Sitio Web diseñado por",
        }
      } 
    },
    {
      id: 3,
      name: "עברית",
      flag: "/israelHE.png",
      prefix: "HE",
      languages: {
        en: "אנגלית",
        es: "ספרדית",
        he: "עברית",
      },
      data: {
        header: {
          welcome: "אנו השותפים האמינים שלך בלוס סנטוס, וייס סיטי וליברטי סיטי."
        },
        body: {
          sections: {
              welcome: {
                  title: "ברוך הבא לבניית המבוך",
                  description: "ב- Maze Constructions אנו גאים בעצמנו על היותנו מובילים בתעשיית הבנייה בערים החשובות ביותר בארצות הברית. עם 10 שנות ניסיון, אנו ממשיכים לספק שירות איכותי ברמה גבוהה, מוכר כשהיכולת שלנו להפוך את חלומות הלקוחות שלנו למציאות."
              },
              specialty: {
                  title: "התמחותנו",
                  description: "אנו מתמחים במגוון רחב של שירותי בנייה, מפרויקטים מגורים ועד פרויקטים מסחריים, ומבטיחים תוצאות מצוינות בכל שלב של הדרך.",
                  description2: "פרויקטים נוכחיים בבנייה",
                  projects: [
                      {
                          name: "בניית ביתו של השחקן מאט פיליפס",
                          address: "רחוב פינווד, לוס סנטוס",
                          alt: "בנייה של בית",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg"
                      },
                      {
                          name: "בניית מרכז הקניות קינמון",
                          address: "חוף הקוקוס, וייס סיטי",
                          alt: "מרכז קניות בבנייה",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg"
                      },
                      {
                          name: "בניית מגדל סקיילר",
                          address: "שדרות ליברטי, ליברטי סיטי",
                          alt: "בנייה של מגדל",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg"
                      }
                  ]
              },
              team: {
                  title: "צוותנו",
                  description: "צוותנו המומחה והמקצועי של אדריכלים, מהנדסים ובונים עובד בדרך אישית ומקצועית כדי להתאים אישית לצרכי המסוימים של כל לקוח."
              },
              location: {
                  title: "המיקום שלנו",
                  locations: [
                      {
                          city: "לוס סנטוס",
                          address: "555 שדרות הניצחון, לוס סנטוס",
                          telephone: "(555) 123-4567",
                          alt: "תמונת לוס סנטוס",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/los-santos-real_kqdfnd.jpg"
                      },
                      {
                          city: "וייס סיטי",
                          address: "321 שדרות החוף, וייס סיטי",
                          telephone: "(555) 321-6547",
                          alt: "תמונת וייס סיטי",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/vice-city-real_brzmgl.jpg"
                      },
                      {
                          city: "ליברטי סיטי",
                          address: "123 שדרות ליברטי, ליברטי סיטי",
                          telephone: "(555) 789-0123",
                          alt: "תמונת ליברטי סיטי",
                          url: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1710282483/2024/MazeConstructions/liberty-city-real_mpnw4s.jpg"
                      }
                  ]
              },
              contact: {
                  title: "צור קשר",
                  description: "שלחו לנו דואר אלקטרוני כדי לתיאום"
              }
          }
        },
        footer: {
          copyright: "כל הזכויות שמורות © 2024.",
          designBy: "אתר עוצב על ידי"
        } 
      }
    }
];

export { languages }