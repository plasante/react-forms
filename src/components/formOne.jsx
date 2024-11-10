import {Formik} from 'formik';

const FormOne = () => {

  return (
      <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            country: '',
            state: '',
            zip: ''
          }}
          validate={(values) => {
            const errors = {};

            if (!values.firstname) {
              errors.firstname = 'First name is required';
            }
            if (!values.lastname) {
              errors.lastname = 'Last name is required';
            }
            if (!values.email) {
              errors.email = 'Email is required';
            } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email))
            {
              errors.email = 'Invalid email address';
            }


            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <div className="container">
              <div className="col-md-12 mt-5">
                <form onSubmit={handleSubmit}>
                  <h4 className="mb-3">Personal information</h4>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstname">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        onChange={handleChange}
                        value={values.firstname}
                      />
                      { errors.firstname && touched.firstname ?
                          <span>{errors.firstname}</span>
                          : null
                      }
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastname">Last name</label>
                      <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          onChange={handleChange}
                          value={values.lastname}
                      />
                      { errors.lastname && touched.lastname ?
                          <span>{errors.lastname}</span>
                          : null
                      }
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="you@example.com"
                    />
                    { errors.email && touched.email ?
                        <span>{errors.email}</span>
                        : null
                    }
                  </div>


                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">Country</label>
                      <select className="custom-select d-block w-100" id="country" name="country">
                        <option value="">Choose...</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="NL">Netherlands</option>
                      </select>

                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state">State</label>
                      <select className="custom-select d-block w-100" id="state" name="state">
                        <option value="">Choose...</option>
                        <option value="california">California</option>
                        <option value="toronto">Toronto</option>
                        <option value="utrech">Utrech</option>
                      </select>

                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" className="form-control" id="zip" name="zip"/>
                    </div>
                  </div>

                  <hr className="mb-4"/>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
        )}
      </Formik>
  );

}

export default FormOne;