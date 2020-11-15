import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
/*Aqui podemos setar valores iniciais 
        Na console do Browser será exibido os valores digitados devidos ao 
        onChange={formik.handleChange} vale={formik.values.name}*/
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  //Inicio Objetos Aninhados
  social:{
      facebook:'',
      twitter:''
  },
    //Fim Objetos Aninhados
    //Inicio Array de telefones
    phoneNumbers:['','']
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
  comments: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
});
function YoutubeForm() {
  // Ao habilitar linha abaixo mostramos na console os valores que foram digitados pelo usuário
  //console.log('Form value', formik.values)
  // Exibira os erros
  //console.log('Form errors', formik.errors)
  //console.log("Visited Fields", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comnents</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address" />
          {(props) => {
            const { field, meta } = props;
            console.log("Render props", props);
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}

       <ErrorMessage name='address'>
                {error => <div className='error'>{error}</div>}
              </ErrorMessage>
        </div>


        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="facebook" component={TextError} />
          </div>

          <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="twitter" component={TextError} />
          </div>



          <div className="form-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primaryPh" name='phoneNumbers[0]' />
          <ErrorMessage name="primaryPh" component={TextError} />
          </div>

          <div className="form-control">
          <label htmlFor="secondaryPh">Secondary phone number</label>
          <Field type="text" id="secondaryPh" name='phoneNumbers[1]' />
          <ErrorMessage name="secondaryPh" component={TextError} />
          </div>


          
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
