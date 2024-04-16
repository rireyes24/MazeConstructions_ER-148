import './App.css'
import { Header } from './components/Header'
import { Navigator } from './components/Navigator'
import Main from './components/Body'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { languages } from './data/dataLanguages'

function App() {

  

  const [dataLanguage, setDataLanguage] = useState(languages[1]);

  const [selectLanguage, setSelectLanguage] = useState("EN");
  
  return (
    <>
      <div>
        <Header 
          selectLanguage={selectLanguage} 
          setSelectLanguage={setSelectLanguage}
          dataLanguage={dataLanguage}
          setDataLanguage={setDataLanguage}
        ></Header>
        <Navigator           
          dataLanguage={dataLanguage}
        ></Navigator>
        <Main 
          selectLanguage={selectLanguage} 
          dataLanguage={dataLanguage}
        ></Main>
        <Footer
          selectLanguage={selectLanguage} 
          dataLanguage={dataLanguage}
        ></Footer>
      </div>     
    </>
  )
}

export default App
