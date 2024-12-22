import React from 'react';
import { Formik } from 'formik';
import { SignupSchema } from '../utils/validation';

const Contact = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values, 'Form submitted values');
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className='text-red-700'>{errors.email}</p>}
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p className='text-red-700'>{errors.password}</p>}
          <button type='submit'>Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Contact;
