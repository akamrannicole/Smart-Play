import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import OnBoarding from './pages/onboard';
import SignUp from './pages/SignUp';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import About from './components/About';
import EducationLevels from './pages/EducationLevels';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-levels" element={<EducationLevels/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
