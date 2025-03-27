import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';
import NavBar from './components/NavBar'
import DashboardPage from './pages/DashboardPage'
import AITutor from './pages/AITutor'
import LandingPage from './pages/LandingPage' 
import LearnPage from './pages/LearnPage'
import LoginPage from './pages/LoginPage'
import MCQs from './pages/MCQs'
import Notes from './pages/Notes'
import QuizAnalysis from './pages/QuizAnalysis'
import QuizAttemptPage from './pages/QuizAttemptPage'
import QuizSelectionPage from './pages/QuizSelectionPage'
import SignupPage from './pages/SignupPage'
import TextToAudioPage from './pages/TextToAudioPage'
import VideoRecommendationPage from './pages/videoRecommendationPage'
import WeakPoints from './pages/weakPoints'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check login status on page load
    fetch("http://localhost:5000/api/auth/me", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setIsAuthenticated(true);
          setFirstVisit(data.firstVisit);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <div> 
      {location.pathname !== "/LandingPage" && <NavBar />}


      <Routes>
      <Route path="/" element={isAuthenticated ? <DashboardPage /> : <LandingPage />} />

        <Route path="/AITutor" element={<AITutor/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="/LearnPage" element={<LearnPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/MCQs" element={<MCQs/>}/>
        <Route path="/Notes" element={<Notes/>}/>
        <Route path="/QuizAnalysis" element={<QuizAnalysis/>}/>
        <Route path="/QuizAttemptPage" element={<QuizAttemptPage/>}/>
        <Route path="/QuizSelectionPage" element={<QuizSelectionPage/>}/>
        <Route path="/SignupPage" element={<SignupPage/>}/>
        <Route path="/TextToAudioPage" element={<TextToAudioPage/>}/>
        <Route path="/videoRecommendationPage" element={<VideoRecommendationPage/>}/>
        <Route path="/weakPoints" element={<WeakPoints/>}/>
      </Routes>
    </div>
  )
}

export default App
