export interface FormFields {
  address: string;
  hostName: string;
  password: string;
  portNumber: number;
  prefix: string;
  protocol: string;
  serverName: string;
  timeout: number;
  userName: string;
}

export const STORE_FORM = "STORE_FORM";
export const DELETE_FORM = "DELETE_FORM";

interface StoreFormAction {
  type: typeof STORE_FORM;
  payload: FormFields;
}

interface DeleteFormAction {
  type: typeof DELETE_FORM;
}

export type FormActionTypes = StoreFormAction | DeleteFormAction;
