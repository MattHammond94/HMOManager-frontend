import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";

const UpdateSiteForm = () => {
  const form = useFormik({
    initialValues: {
      room: "",
    },

    validationSchema: Yup.object({
      room: Yup.string().required('This field is required')
    }),

    onSubmit: async (values, actions) => {
      console.log(values);
    }
  });

  return (
    <div>
      <form autoComplete="off" onSubmit={ form.handleSubmit } className="formTemplate">
        <h1>Update Site</h1>
          <label>New Site Details:</label>
          <input
            type="text" 
            name="room" 
            value={ form.values.room } 
            onChange={ form.handleChange }
            onBlur={ form.handleBlur }
            className={ form.touched.room && form.errors.room ? "input-error" : "" }
          />
          <p className="error">{ form.touched.room && form.errors.room ? form.errors.room : null }</p>
          { form.isSubmitting ? <button disabled className="disabledButton"><Loader /></button> : <button type="submit">Add</button> }
          <p className="error">{ form.errors.api ? form.errors.api : null }</p>
      </form>
    </div>
  )
}

export default UpdateSiteForm