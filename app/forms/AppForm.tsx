import { Formik } from "formik";
import React from "react";
interface IFormType {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: React.ReactNode;
}
function AppForm({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: IFormType) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
