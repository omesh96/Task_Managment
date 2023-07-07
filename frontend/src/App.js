
import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { AuthContext } from './Context/Context';
import Modal from './Components/Modal';

function App() {
  const {state}=useContext(AuthContext)
  return (
    <div className="App">
   <Navbar />
   {state.isModal && <Modal></Modal>}
    </div>
  );
}

export default App;
