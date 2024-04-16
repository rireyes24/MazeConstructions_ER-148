const hebrew  = {
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
        welcome: "אנו השותפים האמינים שלך בלוס סנטוס, וייס סיטי וליברטי סיטי.",
        nav: {
            welcome: "ברוך הבא",
            specialty: "תחום התמחות",
            team: "קְבוּצָה",
            location: "מקום",
            contact: "צור קשר",
          }
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
                title: "המיקומים שלנו",
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
                description: "שלחו לנו דואר אלקטרוני כדי לתיאום",
                description2: "שלחו לנו הודעה לתיבת הדואר שלנו או עקבו אחרינו בערוצי המדיה החברתית שלנו"
            }
        }
      },
      footer: {
        copyright: "כל הזכויות שמורות © 2024.",
        designBy: "אתר עוצב על ידי"
      } 
    }
};

export { hebrew }