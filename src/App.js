import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import List from './pages/List';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import About from './pages/About';
import Dashboard from './pages/dashboard/Dashboard';
import Expense from './pages/dashboard/Expense';
import Revenue from './pages/dashboard/Revenue';
import Goal from './pages/dashboard/Goal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/expense" element={<Expense />} />
        <Route path="/dashboard/revenue" element={<Revenue />} />
        <Route path="/dashboard/goal" element={<Goal />} />

        <Route path="/list" element={<List />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
