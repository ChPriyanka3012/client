import './App.css';
import Login from './components/user/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/user/AdminLogin';
import EmpLogin from './components/user/EmpLogin';
import { NotificationProvider } from './context/NotificationContext';
import Mainboard from './components/Employee/mainboard/Mainboard';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/menubar/Dashboard';
import Chat from './components/menubar/Chat';
import Meetings from './components/menubar/Meetings';
import About from './components/menubar/About';
import Contact from './components/menubar/Contact';
import Helpdesk from './components/menubar/Helpdesk';
import RaT from './components/menubar/RaT';

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
          <Route path='/menubar' element={<Dashboard />} />
          <Route path='/menubar' element={<Chat/>} />
          <Route path='/menubar' element={<Meetings/>} />
          <Route path='/menubar' element={<About/>} />
          <Route path='/menubar' element={<Contact/>} />
          <Route path='/live-chat' element={<Helpdesk/>} />
          <Route path='/menubar' element={<RaT />} />

        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;
