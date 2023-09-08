import { useState } from 'react';
import './App.css';
import Footer from './Context/components/Footer';
import Header from './Context/components/Header';
import Main from './Context/components/Main';
import { DarkContext } from './Context/DarkContext';


function App() {
  const [isDark,setIsDark] = useState(false);
  const darkToggle = () => {
    setIsDark(!isDark);
  }
  return (
    <div className="App">
      <DarkContext.Provider value={{isDark:isDark, darkToggle:darkToggle}} >
      <Header />
      <Main />
      <Footer />
      </DarkContext.Provider>
    </div>
  );
}

export default App;
