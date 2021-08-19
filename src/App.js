import './App.css';
import NavBar from './components/NavBar';
import FormText from './components/FormText';
function App() {
  return (
    <>
      <NavBar title="TextUtils by Turab" />
      <div className="container py-3">
        <FormText />
      </div>
    </>
  );
}

export default App;
