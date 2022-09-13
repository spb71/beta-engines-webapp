
import { Routes, Route } from 'react-router';
import './App.css';
import BuyCars from './components/BuyCars';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import RegisterForm from './components/RegisterForm';
import SellCars from './components/SellCars';
import UpdateCars from './components/UpdateCars';
import ViewCars from './components/ViewCars';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reg" element={<RegisterForm />} />
        <Route path="/log" element={<LoginForm />} />
        <Route path="/view" element={<ViewCars />} />
        <Route path="/buy" element={<BuyCars />} />
        <Route path="/sell" element={<SellCars />} />
        <Route path="/update" element={<UpdateCars />} />

      </Routes>
    </div>
  );
}

export default App;
