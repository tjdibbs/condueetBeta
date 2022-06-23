import { BrowserRouter, Routes, Route } from 'react-router-dom';

//styles
import './App.css';

//components
import Banks from './pages/bank/Banks';
import Consent from './pages/consent/Consent';
import BankForm from './pages/bankform/BankForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Consent />} />
          <Route path='/banks' element={<Banks />} />
          <Route path='/banks/:id' element={<BankForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
