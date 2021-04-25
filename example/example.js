import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/Form';

const fields = [
    {prop: 'firstname', caption: 'First name', className: 'col-sm-6'},
    {prop: 'lastname', caption: 'Last name', className: 'col-sm-6'},
    {prop: 'username', caption: 'Username', placeholder: '@'},
    {prop: 'password', type: 'password', caption: 'Password'},
    {prop: 'email', type: 'email', caption: 'Email'},
    {prop: 'region', type: 'select', caption: 'Region', 
        options: ['America', 'Asia Pacific', 'Europe', 'Middle East/Africa']},
    {prop: 'bio', type: 'textarea', caption: 'A few words about you'},
    {prop: 'terms', type: 'radio', caption: 'Payment option', options: [
        {caption: 'Credit card'},
        {caption: 'Bank wire'},
        {caption: 'PayPal'},
    ]},
    {prop: 'newsletter', type: 'switch', options: [
        {caption: 'Subscribe on monthly newsletter'},
    ]},
    {prop: 'terms', type: 'checkbox', options: [
        {caption: 'I accept Terms & Conditions'},
    ]},
];
const errors = {};
const onSubmit = (values, onReady) => {
    console.log('Posting ', values);
    setTimeout(() => {
        // console.log('Done');
        errors.email = 'Wrong email format';
        onReady();
    }, 2000)
}
const element = (
    <div className="container">
        <main>
            <h1>react-pack examples</h1>
            <h2>&lt;Form&gt;</h2>
            {/* <code></code> */}
            <div className="row g-3">
                <Form 
                fields={fields}
                button="Sign in"
                onSubmit={onSubmit}
                errors={errors}/>
            </div>
        </main>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));