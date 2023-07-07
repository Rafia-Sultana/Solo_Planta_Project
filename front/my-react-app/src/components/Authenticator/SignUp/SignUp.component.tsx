import { useState, ChangeEvent, FormEvent } from 'react';
import User from '../../../Interfaces/User.interface';
import authJWT from '../../../Services/ApiServiceJWT';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../../Interfaces/Authentication.interface';
import auth from '../../../utils/auth';
const initialState: User = {
    name:'',
    email:'',
 password:''
}

const SignUpComponent = (props: Authentication) => {
  let navigate = useNavigate();
    const [state,setState]= useState<User>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = e.currentTarget;
        const formData: FormData = new FormData(form);
    
        const user = Object.fromEntries(formData);
        // console.log(user);
        const registerData = await authJWT.register(user);
        // console.log(registerData);
        if(registerData){
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
        <div>
            <h1 className='font-bold'>signUp</h1>
            <form onSubmit={handleSubmit}>
            <input
          type='text'
          placeholder='John Doe'
          name='name'
       value={state.name}
        onChange={handleChange}
     />
            <input
          type='email'
          placeholder='x@gmail.com'
          name='email'
        value={state.email}
        onChange={handleChange}
     />
     <input
          type='password'
          placeholder='XXXXXXXX'
          name='password'
        value={state.password}
         onChange={handleChange}
          // className='w-full border rounded py-2 px-3 mb-2'
        />
        <button
         type='submit'
         disabled={validateForm()}
        >SignUp</button>
            </form>
        </div>
    );
};

export default SignUpComponent;