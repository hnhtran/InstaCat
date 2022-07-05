import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {

  const [user, setUser] = useState(getUser())
  
  return (
    <div className="App">
    <NavBar user={user} setUser={setUser} />
      App
      {/* <Test /> */}
      <AuthPage />
    </div>
  );
}

