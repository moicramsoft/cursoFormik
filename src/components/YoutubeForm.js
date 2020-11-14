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
    let errros ={}
    if(!values.name){
        errros.name='Requered!'
    }
    if(!values.email){
        errros.email='Requered!'
    }
    if(!values.channel){
        errros.channel='Requered!'
    }else if (!/^[A-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(values.email)){
        errros.channel='Invalid email format!'
    }  return errros
}
function YoutubeForm() {
    const formik=useFormik({
        initialValues,
                onSubmit,
                validate
       })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'                 onChange={formik.handleChange} vale={formik.values.name}/>
               
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' name='email'  onChange={formik.handleChange} vale={formik.values.email}/>
               
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel'  onChange={formik.handleChange} vale={formik.values.channel}/>
       <button type='submit' >Submit</button>
       </form>
        </div>
    )
}

export default YoutubeForm

