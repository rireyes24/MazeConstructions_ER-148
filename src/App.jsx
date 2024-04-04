import './App.css'
import { Header } from './components/Header'
import { Navigator } from './components/Navigator'
import Main from './components/Body'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { languages } from './data/dataLanguages'

function App() {

  

  const [dataLanguage, setDataLanguage] = useState(languages[0]);

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
          selectLanguage={selectLanguage} 
        ></Navigator>
        <Main 
          selectLanguage={selectLanguage} 
          dataLanguage={dataLanguage}
        ></Main>
        <Footer
          selectLanguage={selectLanguage} 
        ></Footer>
      </div>     
    </>
  )
}

export default App
