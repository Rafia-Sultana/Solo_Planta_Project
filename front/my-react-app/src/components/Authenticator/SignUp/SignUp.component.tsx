import { useState, ChangeEvent, FormEvent } from 'react';
import User from '../../../Interfaces/User.interface';
import authJWT from '../../../Services/ApiServiceJWT';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../../../Interfaces/Authentication.interface';
import auth from '../../../utils/auth';
const initialState: User = {
  name: '',
  email: '',
  password: ''
}

const SignUpComponent = (props: Authentication) => {
  let navigate = useNavigate();
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
    const registerData = await authJWT.register(user);
    // console.log(registerData);
    if (registerData) {
      props.setIsAuthenticated(true);
      auth.login(() => navigate('/login'));
    }

  }

  const validateForm = (): boolean => {
    return (
      !state.name || !state.email || !state.password
    )
  }



  return (
    <div className='mt-28 p-5'>

      <h2 className='text-green-800 text-center font-bold text-3xl mb-4'>Sign Up</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          placeholder='John Doe'
          name='name'
          value={state.name}
          onChange={handleChange}
          className='border-2 border-green-800 rounded-lg p-3 w-full'
        />
        <input
          type='email'
          placeholder='x@gmail.com'
          name='email'
          value={state.email}
          onChange={handleChange}
          className='border-2 border-green-800 rounded-lg p-3 w-full'
        />
        <input
          type='password'
          placeholder='XXXXXXXX'
          name='password'
          value={state.password}
          onChange={handleChange}
          className='border-2 border-green-800 rounded-lg p-3 w-full'
        />
        <button
          className='primaryBackground text-white py-4 w-full rounded-lg'
          type='submit'
          disabled={validateForm()}
        >
          Sign Up
        </button>
      </form>

      <p className='text-center my-3'>Already have an account? <Link to='/login' className='primaryColor'>Login</Link> </p>
    </div>

  );
};

export default SignUpComponent;