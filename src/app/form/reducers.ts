import { FormFields, FormActionTypes, STORE_FORM, DELETE_FORM } from "./types";
const initialState: FormFields = {
  address: "",
  hostName: "",
  password: "",
  portNumber: 0,
  prefix: "",
  protocol: "",
  serverName: "",
  timeout: 0,
  userName: "",
};

export default function formReducer(
  state = initialState,
  action: FormActionTypes
): FormFields {
  switch (action.type) {
    case STORE_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_FORM:
      return initialState;
    default:
      return state;
  }
}
