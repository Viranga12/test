import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext';
import './Input.css'
const Input = ({ fieldName, fieldLabel, fieldData,minLength,maxLength,dataType }) => {
    const { handleChange } = useContext(FormContext)
    const [val,setVal] =React.useState(fieldData);
    const handleInput =(e) =>{
        localStorage.removeItem(fieldName)
       setVal(e.target.value)
       
       localStorage.setItem(fieldName,e.target.value)
       
    }

    return (
        <div className="mb-3 input">
            <label htmlFor="exampleInputEmail1" className="form-label">{fieldLabel}</label>
            
               {
                   dataType == "INTEGER" ?

                   <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   minLength={minLength}
                   maxLength={maxLength}
                    type='number'
                  
               
               value={val}
               onChange={handleInput}

               
           /> 
           :
           <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               minLength={minLength}
               maxLength={maxLength}
               type = {'text'}
               
               value={val}
               onChange={handleInput}

               
           />
               }

           
           
        </div>
    )
}

export default Input