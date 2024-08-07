import './App.css';
import Login from './components/user/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/user/AdminLogin';
import EmpLogin from './components/user/EmpLogin';
import { NotificationProvider } from './context/NotificationContext';
import Mainboard from './components/Employee/mainboard/Mainboard';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/emp' element={<EmpLogin />} />
          <Route path='/mainboard/*' element={<Mainboard />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;
