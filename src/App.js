import './App.css';
import NavBar from './components/NavBar';
import FormText from './components/FormText';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NavBar title="TextUtils by Turab" />
      <Alert alert={alert} />
      <div className="container py-3">
        <FormText showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
