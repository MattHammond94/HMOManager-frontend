import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";

const AddSiteForm = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      address: "",
      rooms: ""
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
      <div className="formTemplate addNewSiteForm">
        <form autoComplete="off" onSubmit={ form.handleSubmit }>
          <h1>Add New Site</h1>
            <label>Site Name</label>
            <input
              type="text" 
              name="name" 
              value={ form.values.name } 
              onChange={ form.handleChange }
              onBlur={ form.handleBlur }
              className={ form.touched.name && form.errors.name ? "input-error" : "" }
            />
            <p className="error">{ form.touched.name && form.errors.name ? form.errors.name : null }</p>
            <label>Address:</label>
            <input
              type="text" 
              name="address" 
              value={ form.values.address } 
              onChange={ form.handleChange }
              onBlur={ form.handleBlur }
              className={ form.touched.address && form.errors.address ? "input-error" : "" }
            />
            <p className="error">{ form.touched.address && form.errors.address ? form.errors.address : null }</p>
            <label>Rooms:</label>
            <input
              type="number" 
              name="rooms" 
              value={ form.values.rooms } 
              onChange={ form.handleChange }
              onBlur={ form.handleBlur }
              className={ form.touched.rooms && form.errors.rooms ? "input-error" : "" }
            />
            <p className="error">{ form.touched.rooms && form.errors.rooms ? form.errors.rooms : null }</p>
            { form.isSubmitting ? <button disabled className="disabledButton"><Loader /></button> : <button type="submit">Add</button> }
        </form>
      </div>
    </div>
  )
}

export default AddSiteForm