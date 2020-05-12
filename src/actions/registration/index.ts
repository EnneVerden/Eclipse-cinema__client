import { IRegistrationAction } from "types/authorization";
import { REGISTRATION } from "constants/authorization";

const registration = (
  fullName: string,
  email: string,
  password: string
): IRegistrationAction => ({
  type: REGISTRATION,
  fullName,
  email,
  password,
});

export default registration;
