import React from 'react';
import styles from './FormWrapper.module.sass';
import FormBanner from '../formBanner/FormBanner';
import Form from '../form/Form';
import { ToastContainer } from 'react-toastify';

export default function FormWrapper() {
    return (
        <div className={styles.formWrapper}>
            <ToastContainer position="top-left" />
            <FormBanner />
            <Form />
        </div>
    );
}
