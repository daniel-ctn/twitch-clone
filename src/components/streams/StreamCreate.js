import React from 'react';
import {Field, reduxForm} from 'redux-form';

const StreamCreate = (props) => {
    const renderInput = (inputProps) => {
        return (
            <input {...inputProps.input}/>
        );
    };

    return (
        <form>
            <Field name="title" component={renderInput}/>
            <Field name="description" component={renderInput}/>
        </form>
    );
};

export default reduxForm({
    form: 'streamCreate',
})(StreamCreate);
