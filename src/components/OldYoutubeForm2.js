import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
/*Aqui podemos setar valores iniciais 
        Na console do Browser será exibido os valores digitados devidos ao 
        onChange={formik.handleChange} vale={formik.values.name}*/
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
/* Ao pressionar o submit exibimos os valores na console do Browser
 */
const onSubmit = (values) => {
  console.log("Form values", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});
function OldYoutubeForm2() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });
  // Ao habilitar linha abaixo mostramos na console os valores que foram digitados pelo usuário
  //console.log('Form value', formik.values)
  // Exibira os erros
  //console.log('Form errors', formik.errors)
  console.log("Visited Fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm2;