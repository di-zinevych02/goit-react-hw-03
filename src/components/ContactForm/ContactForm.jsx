import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ ContactForm.module.css";
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = () => {
    const FeedBackSchema = Yup.object().shape({name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")});
    const fieldId = useId();
    const handleSubmit= (values, actions) => {
        actions.resetForm();
    };
    return (
        <Formik initialValues={{name: "", number: ""}}
        onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={'${useId}-name'}>Name</label>
                    <Field className={css.input} type="text" name="name" id={'${useId}-name'}/>
                </div>

                <div className={css.group}>
                    <label htmlFor={'${useId}-number'}>Number</label>
                    <Field className={css.input} type="number" name="number" id={'${useId}-number'}/>
                </div>
                <button type="submit">Add contact</button>
            </Form>

        </Formik>
    );
};
export default ContactForm;