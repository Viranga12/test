import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
import './App.css'

function App() {
  const [elements, setElements] = useState(null);
  
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fieldDefinitions, formName } = elements ?? {}
  const handleSubmit = (event) => {
    
    event.preventDefault();
   
   console.log("AGE :" +localStorage.getItem("AGE"))
   console.log("NAME :" +localStorage.getItem("NAME"))
   console.log("Country :" +localStorage.getItem("Country"))
  }
  const handleChange =(id,event) =>{
    const newElements ={...elements}
    newElements.fieldDefinitions.foreach(fieldDefinitions =>{
      const {fieldName} =fieldDefinitions;

      if(id === fieldName){
        fieldDefinitions['fieldData'] =event.target.value;
      }
      setElements(newElements)
      console.log(elements)
    });

  }
 
  return (
    <FormContext.Provider value={{ handleSubmit }}>
    <div className="App container">
      <h3>{formName}</h3>
      <form className='form'>
        {fieldDefinitions ? fieldDefinitions.map((fieldDefinitions, i) => <Element key={i} fieldDefinitions={fieldDefinitions} />) : null}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  </FormContext.Provider>
  )
}

export default App