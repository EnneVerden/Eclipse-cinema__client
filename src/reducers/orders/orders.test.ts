import { SET_ORDERS_TO_STATE } from "constants/orders";
import { orderTestData } from "utils/orders";
import ordersReducer from ".";

describe("Orders reducer", () => {
  it("Should return state with orders data if receiving type", () => {
    const state = ordersReducer(undefined, {
      type: SET_ORDERS_TO_STATE,
      orders: [orderTestData],
    });

    expect(state).toEqual([orderTestData]);
  });
});
