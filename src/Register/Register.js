import React from 'react';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from './register.schema';
import './Register.scss'

function Register(props) {

    const submit = async (values) => {
        try {
            await fetch('http://localhost:4000/users', {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Register pb-5 pt-4">
            <h2 className="ml-4 pt-3">Create your new Instagram account</h2>
            <Formik 
                initialValues={{username:'', password:'',email:'',agreeToTerms: false}}
                validationSchema={RegisterSchema}
                onSubmit={submit}>
                
                {({ errors, touched }) => (  //() instead of {} cause in js6 we want to return all the Form  col-4 offset-7

                    <Form className="col-3 mt-4 ml-4 p-3">
                        <div className="form-group">
                            <label htmlFor="username">User Name:</label>
                            <Field type="text" className="form-control" id="username" name="username" placeholder="2-16 characters" aria-describedby="UserNameHelp"/>
                            {errors.username && touched.username && <small className="text-danger pl-2">{errors.username}</small>}
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" className="form-control" id="password" name="password" placeholder="6-16 characters"/>
                            {errors.password && touched.password && <small className="text-danger pl-2">{errors.password}</small>}
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <Field type="email" className="form-control" id="email" name="email" placeholder="email address..." aria-describedby="emailHelp"/>
                            {errors.email && touched.email && <small className="text-danger pl-2">{errors.email}</small>}
                        </div>
                        <div class="form-group form-check">
                            <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms"/>
                            <label className="form-check-label" htmlFor="agreeToTerms">Agree to terms?</label>
                            <div>
                                {errors.agreeToTerms && touched.agreeToTerms && <small className="text-danger">{errors.agreeToTerms}</small>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-dark animated-button victoria-two w-100">Submit</button>
                    </Form>

                )}
                
            </Formik>
            <div className="instagtam-def col-3 ml-4 mt-4">
                <p>
                    <strong>Instagram </strong>
                     is a free, online photo-sharing application and social network platform that was acquired by Facebook in 2012. Instagram allows users to edit and upload photos and short videos through a mobile app
                     <br />
                     <strong>Sign Up For Free!</strong>
                </p>
                
            </div>
        </div>
    );
}

export default Register;