import { TRootState } from "@reducers";
import { IError } from "@tsTypes/error";

export const getError = (state: TRootState) => state.error;
