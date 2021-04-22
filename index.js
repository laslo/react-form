import React, {Component} from 'react';
import PropTypes from "prop-types";

const Form = (props) => {
    const values = {};
    props.fields.forEach(field => values[field.prop] = null);
    const onChange = (key, value) => {
        values[key] = value;
    }
    const renderField = (field) => {
        switch (field.type) {
            case 'select':
            case 'checkbox':
            case 'radio':
            case 'textarea':
            default:
                return <TextField {...field} onChange={onChange}/>;
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
                <button onClick={() => props.onSubmit(values)}>{props.button}</button>
            </div>
        </div>
    );
}

const TextField = (props) => (
    <input type="text" name={props.prop} onChange={e => props.onChange(props.prop, e.target.value)}/>
);

// FormField.propTypes = {};
Form.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
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