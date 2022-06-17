import React from 'react'

import Input from './elements/Input';
import Select from './elements/Select';
const Element = ({ fieldDefinitions: { fieldType, fieldName, fieldLabel, fieldData,minLength,maxLength,dataType } }) => {

    switch (fieldType) {
        case 'TEXT':
            return (<Input
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                minLength={minLength}
                maxLength={maxLength}
                fieldData={fieldData}
                dataType ={dataType}
            />)
        case 'LOV':
            return (<Select
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                fieldData={fieldData}
            />)
       
        default:
            return null;
    }


}

export default Element