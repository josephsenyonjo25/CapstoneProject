/*import React from 'react';
import Input from 'input';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import { reducer as form } from 'redux-form'

const renderInput = ({input, meta}) => <Input { ...input} type="text" errormessage={meta.touched && meta.eror} />;

const onSubmit = values => {
    alert(JSON.stringify(values));
};

const required =v =>{
    if (!v || v === '') {
        return "This field is required"
    }

    return undefined;
}
    const allowedNames = v =>{
        if (v === 'forbidden name') {
            return '"forbidden name is not a valid customer name';
        }
        return undefined;
    };

const ReduxForm = ({handleSubmit}, valid) => (
    <div>
        <h2> Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <Field name="firstName" component = {renderInput} validate ={[required, allowedNames]}/>
            <Field name="lastName" component = {renderInput} validate ={required}/>
            <Field name="email" component = {renderInput} validate ={required}/>
            <Field name ="address" component = {renderInput} validate ={required}/>
            <Field name ="password" component = {renderInput} validate ={required} />
            <Field name ="fee" component = {renderInput} validate ={required}/>
            <button disabled ={!valid} type ="submit">Submit</button>
            <Link to ="home">Home</Link>
        </form>
    </div>
);
export default reduxForm({
    form: 'Registration Form',
    onSubmit,
})(ReduxForm);*/