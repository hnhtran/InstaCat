import NavBar from '../../components/NavBar/NavBar';
import './App.css';
// import Test from './Test';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {
  return (
    <div className="App">
    <NavBar />
      App
      {/* <Test /> */}
      <AuthPage />
    </div>
  );
}

