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
import LightMeter from './components/MyPlants/AddSite/LightMeter/LightMeter';
import Modal from './components/UserInfo/Modal';
import Tab from './components/Home/tab';
import Home from './pages/Home';
import FindPlant from './components/FindPlant/FindPlant';
import Profile from './components/Profile/Profile';

import PlantByName from './components/FindPlant/PlantByName';
import PlantInfo from './components/FindPlant/PlantInfo';
import Climate from './components/UserInfo/Climate';
import Identification from './components/Identification/Identification';
import HealthAssessment from './components/Identification/HealthAssessment.tsx/HealthAssessment';
import MyPlants from './pages/MyPlants';
import SiteList from './components/MyPlants/AddSite/SiteList';
import Temperature from './components/MyPlants/AddSite/Temperature/Temperature';
import SelectedSite from './components/MyPlants/SelectedSite/SelectedSite';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import Done from './components/MyPlants/Done/Done';
import FilteredData from './components/Filter/FilteredData/FilteredData';
import AllPlant from './components/MyPlants/AllPlant/AllPlant';
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
          <Route path='/light' element={<LightMeter />}></Route>
          <Route path='/skillLevel' element={<SkillLevel />}></Route>
          <Route path='/indoorOutdoor' element={<IndoorOutdoor />}></Route>
          <Route path='/climate' element={<Climate />}></Route>
          <Route path='/addsite' element={<MyPlants />}></Route>
          <Route path='/sitelist' element={<SiteList />}></Route>
          <Route path='/temperature' element={<Temperature />}></Route>
          <Route path='/selectedsite' element={<SelectedSite />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/filter' element={<Filter />}></Route>
          <Route path='/done' element={<Done />}></Route>
          <Route path='/filtereddata' element={<FilteredData />}></Route>
          {/* <Route
            path='userinfo'
            element={<UserInfo  />}
          ></Route> */}
          <Route path='find' element={<FindPlant />}></Route>
          <Route path='identification' element={<Identification />}></Route>
          <Route path='/fullDescHealth' element={<HealthAssessment />}></Route>

          <Route path='home' element={<Home />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='/plantList' element={<PlantByName PlantByName={[]} />} />
          <Route path='/plantinfo' element={<PlantInfo />}></Route>
          {/* <Route path='/plantList' element={<AllPlant />}></Route> */}
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
