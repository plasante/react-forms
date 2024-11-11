import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const FormThree = () => {
  const initialValues = {firstname: '', color: ''};

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter firstname"),
    color: Yup.string()
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const lastnameComponent = ({
                               field,// {name, value, onchange, onblur}
                               form:{ touched, errors },
                               ...props
                             }) => (
      <>
        <label htmlFor={field.name}>{props.labelname}</label>
        <input
            type='text'
            className='form-control'
            {...field}
        />
        { errors[field.name] && touched[field.name]?
            <span>{errors[field.name]}</span>
            :null}
      </>
  )

  return (
      <div className="container">
        <div className="col-md-12 mt-5">
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
          >
            { formik => (
                <Form>
                  <label htmlFor="firstname">First name</label>
                  <Field name={'firstname'} type={'text'} className="form-control"/>
                  {/*<ErrorMessage name={'firstname'}/>*/}
                  {formik.errors.firstname && formik.touched.firstname ?
                      <span>{formik.errors.firstname}</span>
                      : null
                  }
                  <hr className="mb-4"/>

                  <Field
                    name={'lastname'}
                    placeholder={'Last name'}
                    component={lastnameComponent}
                  />

                  <hr className="mb-4"/>
                  <Field
                      as={'select'}
                      name={'color'}
                      className={'custom-select'}
                  >
                    <option value={'red'}>Red</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'green'}>Green</option>
                  </Field>
                  <hr className="mb-4"/>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Submit
                  </button>
                </Form>
            )}
          </Formik>
        </div>
      </div>

  )
}

export default FormThree;