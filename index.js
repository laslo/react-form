import React, {Component} from 'react';
import PropTypes from "prop-types";

const Form = (props) => {
    const renderField = (field) => {
        switch (field.type) {
            case 'select':
            case 'checkbox':
            case 'radio':
            case 'textarea':
            default:
                return <TextField {...field}/>;
        }
    };

    return (
        <div>
            {props.fields.map((field, key) => (
                <div key={key}>
                    <label>{field.caption || field.prop}</label>
                    {renderField(field)}
                    {/* {!!props.errors[field.prop] && (
                        <span className="help-block">{props.errors[field.prop]}</span>
                    )} */}
                </div>
            ))}
            <div>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

const TextField = (props) => (
    <input type="text" name={props.prop}/>
);

// FormField.propTypes = {};
Form.propTypes = {
    fields: PropTypes.array.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    button: PropTypes.string,
    success: PropTypes.string,
    error: PropTypes.string,
};
Form.defaultProps = {
    button: "Submit",
    success: "Done",
    error: "Something went wrong",
    errors: {},
};

export default Form;