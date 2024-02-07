import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";

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
      console.log(values)

      const login = await fetch("http://localhost:5037/api/Authenticate/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
      });
  
      // if login returns an error response and error message - display this
      // Check is formik auto stores an error for error responses.
      // If not can use an api error state.

      // console.log(login)

      // if (!login) {
      //   actions.setFieldError("api", login.error.message);
      // }
  
      if (login) {
        return navigate("/dashboard")
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
          {/* <p data-testid="api-error" className="error">{ form.errors.api ? form.errors.api : null }</p> */}
      </form>
    </div>
  )
}

export default LogInForm