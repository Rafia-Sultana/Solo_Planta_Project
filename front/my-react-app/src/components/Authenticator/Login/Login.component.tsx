import { FormEvent, ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie';
import LottiePlayer from '../../Lottie/Lottie.component'
import User from '../../../Interfaces/User.interface';
import authJWT from '../../../Services/ApiServiceJWT';
import Authentication from '../../../Interfaces/Authentication.interface';
import LeafLottiePlayer from '../../Lottie/LeafLottie.component';
import { useNavigate } from 'react-router-dom';

const initialState: User = {
  email: '',
  name: '',
  password: '',
};
const LoginComponent = (props: Authentication) => {
  const navigate = useNavigate();
  const [state, setState] = useState<User>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData: FormData = new FormData(form);
    const user = Object.fromEntries(formData);
    // console.log(user);
    const loginData = await authJWT.login(user);
    //console.log(loginData);
    if (loginData) {
      localStorage.setItem('accessToken', loginData);
      Cookies.set('accessToken', loginData.accessToken);
      props.setIsAuthenticated(true);
      setState(initialState);
      navigate('/userInfo');
    }
  };
  const validateForm = () => {
    return !state.email || !state.password;
  };
  return (
   
    <div className=''>
      
      <h2 className='text-green-800 text-center  font-bold text-3xl mb-4'>LogIn</h2>
      <>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={state.email}
            onChange={handleChange}
            className='border-2 border-green-800 rounded-lg  p-3 w-full '
          />

          <input
            type='password'
            placeholder='Password'
            name='password'
            value={state.password}
            onChange={handleChange}
            className='border-2 border-green-800 rounded-lg  p-3 w-full '
          />

          <button
            type='submit'
            disabled={validateForm()}
            className='primaryBackground py-4  text-white w-full '
          >
            Login
          </button>
        </form>
        
      </>
      <LeafLottiePlayer/>
    </div>
  );
};

export default LoginComponent;
