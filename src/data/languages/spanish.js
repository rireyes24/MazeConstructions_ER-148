const spanish = {
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
        welcome: "Somos tu socio confiable en Los Santos, Vice City & Liberty City.",
        nav: {
            welcome: "Bienvenido",
            specialty: "Especialidad",
            team: "Equipo",
            location: "Ubicación",
            contact: "Contactanos",
        }
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
};

export { spanish }