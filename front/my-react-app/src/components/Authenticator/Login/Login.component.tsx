import {FormEvent,ChangeEvent,useState} from 'react';
import Cookies from 'js-cookie';
import User from '../../../Interfaces/User.interface';
import authJWT from '../../../Services/ApiServiceJWT';
import Authentication from '../../../Interfaces/Authentication.interface';


const initialState:User = {
    email: '',
    name:'',
    password: '',
  };
const LoginComponent = (props:Authentication) => {
const [state, setState] = useState<User>(initialState);

const handleChange =(e: ChangeEvent<HTMLInputElement>) =>{
const {name,value} = e.target;
setState((prevState)=>({
    ...prevState,
    [name]:value,
}))
}

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData: FormData = new FormData(form);
        const user = Object.fromEntries(formData);
        // console.log(user);
        const loginData = await authJWT.login(user)
     //console.log(loginData);
        if(loginData){
            localStorage.setItem('accessToken',loginData);
           Cookies.set('accessToken', loginData.accessToken);
          props.setIsAuthenticated(true);
         setState(initialState)
        }
       
      };
      const validateForm = () => {
        return !state.email || !state.password;
      };
    return (
        <div>
            <h1>login</h1>
            <div>
      

      <form
        onSubmit={handleSubmit}
        
      >
        <input
          type='email'
          placeholder='Email Address'
          name='email'
      value={state.email}
          onChange={handleChange}
          
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
        value={state.password}
          onChange={handleChange}
          
        />
		
     
	  <button
          type='submit'
       disabled={validateForm()}
        >
          Login
        </button>
	 
      </form>
    </div>
        </div>
    );
};

export default LoginComponent;