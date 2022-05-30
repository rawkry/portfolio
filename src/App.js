
import './App.css';
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import Skills from './screens/Skills';


function App() {
  
  return (
    <>
    <header>
      <Header/>
      <HomeScreen/>
    </header>


      

      <main>
       
        
        
        <AboutScreen/>
        <Skills/>

      </main>
     
    </>
    
   
  );
}

export default App;
