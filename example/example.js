import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../index';

const fields = [
    {prop: 'login', caption: 'Login / Email'},
    {prop: 'email', caption: 'Email'}
];
const element = (
    <div>
        <h1>react-form</h1>
        <h2>Basic Example</h2>
        <Form fields={fields} button="Sign in"/>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));