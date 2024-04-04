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
                specialty: "Specialty",
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
                specialty: "Specialty",
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