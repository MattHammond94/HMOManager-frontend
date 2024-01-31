import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

    onSubmit: async (values) => {
      console.log(values)
      // const login = await fetch("url goes here", {
      //   method: 'POST',
      //   headers: {
      //      "Content-Type": "application/json",
      //      // OTHER HEADERS IF REQUIRED
      //   },
      //   //  body: JSON.strigify(values)
      // });

      // if login returns an error response and error message - display this
      // Check is formik auto stores an error for error responses.
      // If not can use an api error state.
  
      // if (login) {
      // return navigate("/dashboard");
      // }
    }
  });

  console.log(form.isSubmitting)

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
          { form.isSubmitting ? <button disabled className="disabledButton">Loading</button> : <button type="submit">Log In</button> }
      </form>
    </div>
  )
}

export default LogInForm