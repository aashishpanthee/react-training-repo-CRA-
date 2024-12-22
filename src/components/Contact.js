import React from 'react';
import { Formik } from 'formik';
import { SignupSchema } from '../utils/validation';

const Contact = () => (
  <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
      <h2 className='mb-6 text-2xl font-bold text-center text-gray-700'>
        Contact Form
      </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values, 'Form submitted values');
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Input */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                value={values.email}
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter your email'
              />
              {errors.email && (
                <p className='mt-2 text-sm text-red-600'>{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                value={values.password}
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter your password'
              />
              {errors.password && (
                <p className='mt-2 text-sm text-red-600'>{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Contact;
