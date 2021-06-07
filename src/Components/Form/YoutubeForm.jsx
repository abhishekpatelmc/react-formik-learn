import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form values on submit", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required!"),
});

function YoutubeForm() {
  // The valeus passed in the this initla values are the field called "name" from the input tag

  // console.log("Visited Fields", formik.touched);

  return (
    <Formik
      intialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* Form will autmaticall link onsubmit method we dont need to specify it  */}
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* The Field Compinent will take care of handling the change on blur */}
          <Field
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            // instead of calling these three again and again we can use the below code
            // {...formik.getFieldProps("name")}
          />
          {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
          {/* Error Message will take care of above condition */}
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
