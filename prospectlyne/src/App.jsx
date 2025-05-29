import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import JobListingsPage from './pages/JobListingsPage';
import PostJobPage from './pages/PostJobPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/job-listings" element={<JobListingsPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
      </Routes>

  );
};

export default App;
