import React, {Component, useState} from 'react';
import PropTypes from "prop-types";

const _class = (...classes) => classes.join(' ').trim();

const Form = (props) => {
    const values = {};
    const [isLoading, setLoading] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    props.fields.forEach(field => values[field.prop] = null);
    const onChange = (key, value) => {
        values[key] = value;
    };
    const onSubmit = () => {
        setLoading(true);
        setSubmitted(false);
        props.onSubmit(values, response => {
            setLoading(false);
            setSubmitted(true);
        });
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'select':
                return <Select {...field} onChange={onChange} className={props.classes.select}/>;
            case 'radio':
            case 'checkbox':
            case 'switch':
                return <Check {...field} onChange={onChange} classes={props.classes}/>;
            // case 'number':
            // case 'buttons':
            // case 'file':
            // case 'date':
            case 'textarea':
                return <Textarea {...field} onChange={onChange} className={props.classes.input}/>;
            // case 'email':
            // case 'phone':
            // case 'country':
            // case 'region':
            // case 'slider':
            // case 'money':
            // case 'custom':
            case 'text':
            case 'password':
            default:
                return <TextField {...field} onChange={onChange} className={props.classes.input}/>;
        }
    };

    return (
        <>
            {props.fields.map((field, key) => (
                <div key={key} className={field.className || props.classes.fieldOuter}>
                    {!!field.caption && (
                        <label className={props.classes.label}>{field.caption}</label>
                    )}
                    {renderField(field)}
                    {!!props.errors[field.prop] && (
                        <span className={props.classes.help}>{props.errors[field.prop]}</span>
                    )}
                </div>
            ))}
            <div>
                <button onClick={() => onSubmit()} disabled={isLoading} className={props.classes.submit}>{props.button}</button>
                {isSubmitted && (
                    Object.keys(props.errors).length ? (
                        <div>{props.errorMessage}</div>
                    ) : (
                        <div>{props.successMessage}</div>
                    )
                )}
            </div>
        </>
    );
}
Form.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    button: PropTypes.string,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    classes: PropTypes.object,
};
Form.defaultProps = {
    button: "Submit",
    successMessage: "Done",
    errorMessage: "Something went wrong",
    errors: {},
    classes: {
        label: 'form-label',
        fieldOuter: 'col-sm-12',
        help: 'help-block',
        input: 'form-control',
        select: 'form-select',
        submit: 'btn btn-primary btn-lg',
        check: 'form-check',
        checkInput: 'form-check-input',
        checkLabel: 'form-check-label',
        switch: 'form-switch',
    },
};

const TextField = (props) => (
    <input type={props.type} name={props.prop} onChange={e => props.onChange(props.prop, e.target.value)} className={props.className}/>
);
const Textarea = (props) => (
    <div>
        <textarea name={props.prop} onChange={e => props.onChange(props.prop, e.target.value)} className={props.className}/>
    </div>
);
const Select = (props) => (
    <select name={props.prop} onChange={e => props.onChange(props.prop, e.target.value)} className={props.className}>
        <option value="">Please select...</option>
        {props.options.map((caption, key) => (
            <option key={key}>{caption}</option>
        ))}
    </select>
);
const Check = (props) => props.options.map((item, key) => (
    <div className={_class(props.classes.check, props.type === 'switch' ? props.classes.switch : '')}>
        <input className={props.classes.checkInput} type={props.type} id={props.prop+'Check'+key}/>
        <label className={props.classes.checkLabel} for={props.prop+'Check'+key}>{item.caption}</label>
    </div>
));

export default Form;