import { SET_ERROR } from "@constants/error";
import { IError, ISetErrorAction } from "@tsTypes/error";

const setError = (error: IError): ISetErrorAction => ({
  type: SET_ERROR,
  error,
});

export default setError;
