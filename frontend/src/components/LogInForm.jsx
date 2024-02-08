import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";
import { apiUrl } from '../utils/globals.js';

const LogInForm = () => {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      username: "",
      password: ""
    },

    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required')
    }),

    onSubmit: async (values, actions) => {
      console.log(values);
    
      try {
        const login = await fetch(apiUrl + "api/Authenticate/login", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values)
        });
    
        if (!login.ok) {
          // If the response is not successful (status code other than 2xx)
          // Throw an error and handle it in the catch block
          throw new Error('Login failed');
        }

        const { token, expiration } = await login.json();
        localStorage.setItem('authToken', token);
    
        // If login is successful, navigate to the dashboard
        return navigate("/dashboard");
      } catch (error) {
        // Handle errors here
        console.error('Error during login:', error);
    
        // Set field error or API error state as per your requirement
        actions.setFieldError("api", "An error occurred during login. Please try again.");
      }
    }
  });

  return (
    <div data-testid="loginForm" className="formTemplate loginForm">
      <form autoComplete="off" onSubmit={ form.handleSubmit }>
        <h1>Log In</h1>
          <label>Username:</label>
          <input
            data-testid="username-input"
            type="text" 
            name="username" 
            value={ form.values.username } 
            onChange={ form.handleChange }
            onBlur={ form.handleBlur }
            className={ form.touched.username && form.errors.username ? "input-error" : "" }
          />
          <p data-testid="username-error" className="error">{ form.touched.username && form.errors.username ? form.errors.username : null }</p>
          <label>Password:</label>
          <input
            data-testid="password-input"
            type="password" 
            name="password" 
            value={ form.values.password } 
            onChange={ form.handleChange }
            onBlur={ form.handleBlur }
            className={ form.touched.password && form.errors.password ? "input-error" : "" }
          />
          <p data-testid="password-error" className="error">{ form.touched.password && form.errors.password ? form.errors.password : null }</p>
          { form.isSubmitting ? <button disabled className="disabledButton"><Loader /></button> : <button type="submit">Log In</button> }
          <p data-testid="api-error" className="error">{ form.errors.api ? form.errors.api : null }</p>
      </form>
    </div>
  )
}

export default LogInForm