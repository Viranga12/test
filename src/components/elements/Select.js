import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ fieldName, fieldLabel, fieldData }) => {
    const { handleChange } = useContext(FormContext)
    const handleInput =(e) =>{
        localStorage.removeItem(fieldName)
       
       localStorage.setItem(fieldName,e.target.value)
       
    }
    return (
        <div className='select'>
            <label className="form-label">{fieldLabel}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={handleInput}
                defaultValue={"Sri Lanka"}
            >
                
                {fieldData.length > 0 && fieldData.map((option, i) =>
                    <option   value={option.countryName} key={i}>{option.countryName}</option>

                )}
            </select>
        </div>
    )
}

export default Select