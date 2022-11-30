import React from "react";
import { AppButton } from "../components/AppButton";
import { useFormikContext } from "formik";

interface IButton {
  title: string;
  color?: string;
}

function SubmitButton({ color }: IButton) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={"Login"} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;
