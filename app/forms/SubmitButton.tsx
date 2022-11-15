import React from "react";
import { AppButton } from "../components/AppButton";
import { useFormikContext } from "formik";

interface IButton {
  title: string;
}

function SubmitButton({ title }: IButton) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={"Login"} onPress={handleSubmit} />;
}

export default SubmitButton;
