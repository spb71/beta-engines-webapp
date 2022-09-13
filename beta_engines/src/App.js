
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reg" element={<RegisterForm />} />
        <Route path="/log" element={<LoginForm />} />

      </Routes>
    </div>
  );
}

export default App;
