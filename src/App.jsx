import './App.css'
import { Header } from './components/Header'
import { Navigator } from './components/Navigator'
import Main from './components/Body'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {

  const [selectLanguage, setSelectLanguage] = useState("EN");
  
  return (
    <>
      <div>
        <Header 
          selectLanguage={selectLanguage} 
          setSelectLanguage={setSelectLanguage}
        ></Header>
        <Navigator
          selectLanguage={selectLanguage} 
        ></Navigator>
        <Main 
          selectLanguage={selectLanguage} 
        ></Main>
        <Footer
          selectLanguage={selectLanguage} 
        ></Footer>
      </div>     
    </>
  )
}

export default App
