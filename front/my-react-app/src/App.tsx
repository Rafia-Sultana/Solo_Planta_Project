import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import LoginComponent from './components/Authenticator/Login/Login.component';
import auth from './utils/auth';
import SignUpComponent from './components/Authenticator/SignUp/SignUp.component';
import LottiePlayer from './components/Lottie/Lottie.component';
import LeafLottiePlayer from './components/Lottie/LeafLottie.component';
import SkillLevel from './components/UserInfo/SkillLevel';
import IndoorOutdoor from './components/UserInfo/IndoorOutdoor';
import UserInfo from './pages/UserInfo';
import LightMeter from './components/LightMeter/LightMeter';
import Modal from './components/UserInfo/Modal';
import Tab from './components/Home/tab';
import Home from './pages/Home';
import FindPlant from './components/FindPlant/FindPlant';
import Profile from './components/Profile/Profile';
// import AllData from './components/UserInfo/allData';
// import Modal from './components/UserInfo/modal';
function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LottiePlayer />}></Route>
          <Route path='/light' element={<LightMeter/>}></Route>

          <Route
            path='userinfo'
            element={<UserInfo  />}
          ></Route>
<Route path='find' element={<FindPlant/>}></Route>

          <Route
          path='home' element={<Home/>}
          ></Route>
          <Route
          path='profile' element={<Profile/>}
          ></Route>

         {/* <Route
            path='userinfo'
            element={<UserInfo />}
          ></Route>  */}
          <Route
            path='login'
            element={
              <LoginComponent
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            }
          ></Route>
          <Route
            path='register'
            element={
              <SignUpComponent
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
