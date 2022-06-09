import {useState} from 'react'; //Permitira usar diferentes elementos de estado en los componentes
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';


function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className='overlay'>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
        <MainMint accounts={accounts} setAccounts={setAccounts}/>
      </div>
      
      <div className='moving-background'></div>
    </div>
    
  );
}

export default App;
