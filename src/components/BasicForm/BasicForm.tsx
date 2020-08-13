/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Formik } from "formik";

type Values = {
  email?: string;
};

type Errors = {
  email?: string;
};

const BasicForm: React.FC = () => {
  const validate = (values: Values): Errors => {
    const errors: Errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleIOnSubmit = (values: Values, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div css={style}>
      <h1>Formik BasicForm!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleIOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="errors">{errors.email && touched.email && errors.email}</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="errors">{errors.password && touched.password && errors.password}</div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;

const style = css`
  width: 20rem;
  height: 30rem;
  margin: 2rem auto;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    width: 15rem;
  }

  .errors {
    color: red;
  }
`;
