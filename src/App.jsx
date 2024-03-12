import './App.css'
import { Header } from './components/Header'
import Main from './components/Body'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {

  const [selectLanguage, setSelectLanguage] = useState("ES");
  
  return (
    <>
      <div>
        <Header 
          selectLanguage={selectLanguage} 
          setSelectLanguage={setSelectLanguage}
        ></Header>
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
