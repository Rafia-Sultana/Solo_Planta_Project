import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import LoginComponent from './components/Authenticator/Login/Login.component';
import auth from './utils/auth'
import SignUpComponent from './components/Authenticator/SignUp/SignUp.component';
import LottiePlayer from './components/Lottie/Lottie.component';
function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated,setIsAuthenticated] = useState<boolean>(initialState)
   return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<LottiePlayer />}></Route>
      <Route path='login' 
      element={
      <LoginComponent
      setIsAuthenticated={setIsAuthenticated}
      isAuthenticated={isAuthenticated}
      />}>

      </Route>
      <Route path='register' element={<SignUpComponent
      setIsAuthenticated={setIsAuthenticated}
      isAuthenticated={isAuthenticated}
      />}></Route>
      </Routes>
    </Router>
    
      
  </>
  )
}

export default App
