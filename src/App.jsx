import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import OnBoarding from './pages/onboard';
import SignUp from './pages/SignUp';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import About from './components/About';
import EducationLevels from './pages/EducationLevels';
import EarlyYearsEducation from './pages/EarlyYearsEduaction';
import LowerPrimaryEducation from './pages/LowerPrimaryEducation';
import MiddleSchoolEducation from './pages/MiddleSchoolEducation';
import SeniorSchoolEducation from './pages/SeniorSchoolEducation';
import TertiaryEducation from './pages/TertiaryAndUniversityEducation';

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
        <Route path="/education/early-years-education" element={<EarlyYearsEducation />} />
        <Route path="/education/lower-primary-education" element={<LowerPrimaryEducation />} />
        <Route path="/education/middle-school-education" element={<MiddleSchoolEducation />} />
        <Route path="/education/senior-school-education" element={<SeniorSchoolEducation />} />
        <Route path="/education/tertiary-and-university-education" element={<TertiaryEducation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
