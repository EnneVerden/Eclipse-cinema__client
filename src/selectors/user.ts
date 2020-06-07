import { TRootState } from "reducers";
import { createSelector } from "reselect";

export const getUser = (state: TRootState) => state.user;

export const getUserId = createSelector(getUser, (user) => user._id);

export const getUserFullName = createSelector(getUser, (user) => user.fullName);

export const getUserEmail = createSelector(getUser, (user) => user.email);

export const getUserAvatar = createSelector(getUser, (user) => user.avatar);

export const getUserAccountStatus = createSelector(
  getUser,
  (user) => user.accountStatus
);

export const getUserTickets = createSelector(getUser, (user) => user.tickets);

export const getUserRoles = createSelector(getUser, (user) => user.roles);

export const getUserBalance = createSelector(getUser, (user) => user.balance);
