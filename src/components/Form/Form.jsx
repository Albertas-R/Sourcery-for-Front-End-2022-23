import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
// import { getDatabase, ref, set } from 'firebase/database';
import useFetch from '~/hooks/useFetch';
import classNames from 'classnames/bind.js';
import Filter from '/src/components/Filter';
import Button from '/src/components/Button';
import SuccessScreen from '~/components/SuccessScreen';
import { STRINGVALIDATORS } from '../../constants/constants';
import styles from './Form.module';

const cn = classNames.bind(styles);

const RegisterForm = () => {
  const { isLoading, error, sendRequest: sendFormRequest } = useFetch();

  function validateFirstName(value) {
    let error;
    if (!value) {
      error = 'Please enter your first name';
    } else if (!STRINGVALIDATORS.nameValidator.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  function validateLastName(value) {
    let error;
    if (!value) {
      error = 'Please enter your last name';
    } else if (!STRINGVALIDATORS.nameValidator.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Please enter your email';
    } else if (!STRINGVALIDATORS.emailValidator.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  function validateTermsCheckbox(value) {
    let error;
    if (!value) {
      error = 'Please confirm';
    }
    return error;
  }

  const submitFormHandler = async (values) => {
    sendFormRequest({
      url: `https://react-htpp-8c884-default-rtdb.europe-west1.firebasedatabase.app/academyRegistry/${values.academy}/applicants.json`,
      method: 'POST',
      body: { values },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Formik
      initialValues={{
        academy: 'developers',
        id: 123,
        city: 'Kaunas',
        firstName: '',
        lastName: '',
        email: '',
        terms: '',
      }}
      onSubmit={(values) => {
        submitFormHandler(values);
      }}
      validateOnBlur
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={cn('form-container')}>
          <h3 className={cn('form-container__header')}>Academy information</h3>
          <div className={cn('filter-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy type
            </label>
            <Filter data={['Developers', 'Testers', 'Front-End']} />
          </div>
          <div className={cn('radio-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy city
            </label>
            <div className={cn('radio-container__multiple-button-container')}>
              <div className={cn('single-radio-button-container')}>
                <div className={cn('single-radio-button-container__button')}>
                  <Field type="radio" id="city" name="city" value="Kaunas" />
                </div>
                <div className={cn('single-radio-button-container__value')}>
                  Kaunas
                </div>
              </div>
              <div className={cn('single-radio-button-container')}>
                <div className={cn('single-radio-button-container__button')}>
                  <Field type="radio" id="city" name="city" value="Vilnius" />
                </div>
                <div className={cn('single-radio-button-container__value')}>
                  Vilnius
                </div>
              </div>
            </div>
          </div>
          <h3 className={cn('form-container__header')}>Personal information</h3>
          <div className={cn('input-container')}>
            <label
              htmlFor="firstName"
              className={cn('label', 'label--personal')}
            >
              First name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              validate={validateFirstName}
              className={cn('input-container__input')}
            />
            {errors.firstName && touched.firstName && (
              <div className={cn('label', 'label--error-message')}>
                {errors.firstName}
              </div>
            )}

            <label
              htmlFor="lastName"
              className={cn('label', 'label--personal')}
            >
              Last name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              validate={validateLastName}
              className={cn('input-container__input')}
            />
            {errors.lastName && touched.lastName && (
              <div className={cn('label', 'label--error-message')}>
                {errors.lastName}
              </div>
            )}

            <label htmlFor="email" className={cn('label', 'label--personal')}>
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              className={cn('input-container__input')}
              validate={validateEmail}
            />
            {errors.email && touched.email && (
              <div className={cn('label', 'label--error-message')}>
                {errors.email}
              </div>
            )}
            <label>
              <div className={cn('checkbox-container')}>
                <Field
                  type="checkbox"
                  name="terms"
                  className={cn('checkbox-container__checkbox')}
                  validate={validateTermsCheckbox}
                />
                <p className={cn('checkbox-container__text')}>
                  I have read, understand and accept the content of the Privacy
                  Notice and consent to the processing of my data as part of
                  this application.
                </p>
              </div>
              {errors.terms && touched.terms && (
                <div className={cn('label', 'label--error-message')}>
                  {errors.terms}
                </div>
              )}
            </label>
          </div>
          <div className={cn('form-container__button')}>
            <Button type={'submit'} disabled={!(isValid && dirty)}>
              {'Register'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
