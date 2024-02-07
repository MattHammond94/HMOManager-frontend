import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";

const UpdatePasswordForm = () => {
  const form = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      newPassword: Yup.string().required('Field is required'),
      confirmPassword: Yup.string().required('Field is required')
    }),

    onSubmit: async (values) => {
      console.log(values)
    //  fetch REQ here:
    }
  });

  return (
    <div className="container">
      <div data-testid="updateAdminPassForm" className="formTemplate updateAdminPassForm">
        <form autoComplete="off" onSubmit={ form.handleSubmit }>
          <h1>Change Password</h1>
            <label>New password:</label>
            <input
              data-testid="new-password-input"
              type="password" 
              name="newPassword" 
              value={ form.values.newPassword } 
              onChange={ form.handleChange }
              onBlur={ form.handleBlur }
              className={ form.touched.newPassword && form.errors.newPassword ? "input-error" : "" }
            />
            <p data-testid="newPassword-error" className="error">{ form.touched.newPassword && form.errors.newPassword ? form.errors.newPassword : null }</p>
            <label>Confirm Password:</label>
            <input
              data-testid="confirm-password-input"
              type="password" 
              name="confirmPassword" 
              value={ form.values.confirmPassword } 
              onChange={ form.handleChange }
              onBlur={ form.handleBlur }
              className={ form.touched.confirmPassword && form.errors.confirmPassword ? "input-error" : "" }
            />
            <p data-testid="confirmPassword-error" className="error">{ form.touched.confirmPassword && form.errors.confirmPassword ? form.errors.confirmPassword : null }</p>
            { form.isSubmitting ? <button disabled className="disabledButton"><Loader /></button> : <button type="submit">Update</button> }
        </form>
      </div>
    </div>
  )
}

export default UpdatePasswordForm