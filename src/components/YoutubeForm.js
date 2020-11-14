import React from 'react';
import { useFormik } from 'formik';
  /*Aqui podemos setar valores iniciais 
        Na console do Browser será exibido os valores digitados devidos ao 
        onChange={formik.handleChange} vale={formik.values.name}*/
const initialValues={
    name:'',
    email:'',
    channel:'',
}
/* Ao pressionar o submit exibimos os valores na console do Browser
        */
const onSubmit=values=>{
    console.log('Form values', values)
}

const validate= values=>{
    let errors ={}
    if(!values.name){
        errors.name='Required!'
    }
    if(!values.email){
        errors.email='Required!'
    }
    if(!values.channel){
        errors.channel='Required!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = 'Invalid email format!'
       }  return errors
}
function YoutubeForm() {
    const formik=useFormik({
        initialValues,
                onSubmit,
                validate
       })
       // Ao habilitar linha abaixo mostramos na console os valores que foram digitados pelo usuário
       //console.log('Form value', formik.values)
       // Exibira os erros 
       //console.log('Form errors', formik.errors)
       console.log('Visited Fields', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'      onChange={formik.handleChange} vale={formik.values.name} onBlur={formik.handleBlur}/>
               {formik.errors.name?<div className='error'>{formik.errors.name}</div> : null}
               </div>
               <div className='form-control'>

                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' name='email'    onChange={formik.handleChange} vale={formik.values.email} onBlur={formik.handleBlur}/>
                {formik.errors.email?<div className='error'>{formik.errors.email}</div> : null}
                </div>
               <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel'onChange={formik.handleChange} vale={formik.values.channel} onBlur={formik.handleBlur}/>
                {formik.errors.channel?<div className='error'>{formik.errors.channel}</div> : null}
                </div>
       <button type='submit' >Submit</button>
       </form>
        </div>
    )
}

export default YoutubeForm

