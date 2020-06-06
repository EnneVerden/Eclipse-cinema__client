import { SET_USER_TO_STATE, CLEAR_USER_STATE } from "constants/authorization";
import { userTestData, balanceTestData, newUserInfoTestData } from "utils/user";
import userReducer from ".";
import {
  SET_BALANCE_TO_STATE,
  REMOVE_TICKET_FROM_STATE,
  SET_NEW_USER_INFO_TO_STATE,
} from "constants/user";
import { moviesTestData } from "utils/movies";

describe("Users reducer", () => {
  it("Should return state with user data if receiving type", () => {
    const state = userReducer(undefined, {
      type: SET_USER_TO_STATE,
      user: userTestData,
    });

    expect(state).toEqual(userTestData);
  });

  it("Should return state with new balance if receiving type", () => {
    const state = userReducer(undefined, {
      type: SET_BALANCE_TO_STATE,
      balance: balanceTestData,
    });

    expect(state).toEqual(balanceTestData);
  });

  it("Should return state with new user info if receiving type", () => {
    const initialState = userTestData;
    const expectedData = userTestData;
    expectedData.email = newUserInfoTestData.email;
    expectedData.fullName = newUserInfoTestData.fullName;

    const state = userReducer(initialState, {
      type: SET_NEW_USER_INFO_TO_STATE,
      newUserInfo: newUserInfoTestData,
    });

    expect(state).toEqual(expectedData);
  });

  it("Should return state without deleted movie if receiving type", () => {
    const tickets = userTestData.tickets?.filter(
      (ticket) => ticket._id !== moviesTestData.movies[0]._id
    );

    let expectedData = userTestData;
    expectedData.tickets = tickets;

    const state = userReducer(userTestData, {
      type: REMOVE_TICKET_FROM_STATE,
      movie: moviesTestData.movies[0],
    });

    expect(state).toEqual(expectedData);
  });

  it("Should return state with empty user if receiving type", () => {
    const state = userReducer(undefined, {
      type: CLEAR_USER_STATE,
    });

    expect(state).toEqual({});
  });
});
