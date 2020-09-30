import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { storeForm, deleteForm } from "../app/form/actions";
import { RootState } from "../app/store";
import { FormFields } from "../app/form/types";
import FormComponent from "../components/FormComponent";

interface IFormContainer
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

const FormContainer = (props: IFormContainer) => {
  const onFinish = (data: FormFields): void => {
    props.storeForm(data);
  };
  const onClear = (): void => {
    props.deleteForm();
  };
  return (
    <FormComponent {...props.formData} onFinish={onFinish} onClear={onClear} />
  );
};

const mapStateToProps = ({ formData }: RootState) => ({
  formData: formData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  storeForm: (data: FormFields) => dispatch(storeForm(data)),
  deleteForm: () => dispatch(deleteForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
