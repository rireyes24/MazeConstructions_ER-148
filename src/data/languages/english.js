const english  = {
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
          welcome: "We are your reliable partner in Los Santos, Vice City & Liberty City.",
          nav: {
            welcome: "WELCOME",
            specialty: "SPECTIALITY",
            team: "TEAM",
            location: "LOCATION",
            contact: "CONTACT US",
          }
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
        designBy: "Website designed by:",
      }
    } 
};

export { english } 