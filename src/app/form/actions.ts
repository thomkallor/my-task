import { FormFields, STORE_FORM, DELETE_FORM, FormActionTypes } from "./types";

// function sending storeform
export function storeForm(data: FormFields): FormActionTypes {
  return {
    type: STORE_FORM,
    payload: data,
  };
}

// function sending deleteform action
export function deleteForm(): FormActionTypes {
  return {
    type: DELETE_FORM,
  };
}
