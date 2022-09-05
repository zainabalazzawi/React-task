import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.FirstName) {
    errors.FirstName = "Enter a First name";
  }
  if (!values.SurName) {
    errors.SurName = "Enter SurName";
  }
  if (!values.City) {
    errors.City = "Enter a city";
  }
  if (!values.PostalCode) {
    errors.PostalCode = "Enter a Postal Code";
  }

  return errors;
};
const FormFields = () => {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      SurName: "",
      City: "",
      PostalCode: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { touched, errors } = formik;
  return (
    <div className="bg-emerald-700   rounded-2xl">
      <form
        className="inline-grid grid-rows-4 gap-5  p-20"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="p-3 px-6"
          id="First Name"
          type="First Name"
          placeholder="First Name"
          {...formik.getFieldProps("First Name")}
        />
        {errors.FirstName && touched.FirstName ? (
          <span className="text-xs text-red-900">{errors.FirstName}</span>
        ) : null}
        <input
          className="p-3 px-6 "
          id="Sur Name"
          type="Sur Name"
          placeholder="Sur Name"
          {...formik.getFieldProps("Sur Name")}
        />
        {errors.SurName && touched.SurName ? (
          <span className="text-xs text-red-900">{errors.SurName}</span>
        ) : null}
        <input
          className="p-3 px-6 "
          id="City"
          type="City"
          placeholder="City"
          {...formik.getFieldProps("City")}
        />
        {errors.City && touched.City ? (
          <span className="text-xs text-red-900">{errors.City}</span>
        ) : null}
        <input
          className="p-3 px-6 "
          id="Postal Code"
          type="Postal Code"
          placeholder="Postal Code"
          {...formik.getFieldProps("Postal Code")}
        />
        {errors.PostalCode && touched.PostalCode ? (
          <span className="text-xs text-red-900">{errors.PostalCode}</span>
        ) : null}
        <button className="mt-8 bg-zinc-400 py-3 rounded-2xl" type="submit">
          Order & Pay
        </button>
      </form>
    </div>
  );
};

export default FormFields;
