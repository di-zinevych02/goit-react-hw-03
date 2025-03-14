import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./ ContactForm.module.css";
import { nanoid } from 'nanoid';
import { useId } from 'react';
const initialValues = {
    name: "", 
    number: ""
  };
  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = ({onAdd}) => {
    
    const fieldId = useId();
    //Функція handleSubmit реалізована для обробки подання форми, включаючи додавання нового контакту та скидання форми.
    const handleSubmit= (values, actions) => {
        actions.resetForm();
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
    };
    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={'${useId}-name'}>Name</label>
                    <Field className={css.input} type="text" name="name" id={'${useId}-name'}/>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>

                <div className={css.group}>
                    <label htmlFor={'${useId}-number'}>Number</label>
                    <Field className={css.input} type="number" name="number" id={'${useId}-number'}/>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
                <button className={css.btnadd} type="submit">Add contact</button>
            </Form>

        </Formik>
    );
};
export default ContactForm;