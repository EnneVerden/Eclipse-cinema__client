import { ISetOrdersToStateAction } from "types/orders";
import { SET_ORDERS_TO_STATE } from "constants/orders";
import setOrdersToState from ".";
import { orderTestData } from "utils/orders";

describe("SetOrders action creator", () => {
  it("Should create an action to set orders", () => {
    const expectedAction: ISetOrdersToStateAction = {
      type: SET_ORDERS_TO_STATE,
      orders: [orderTestData],
    };

    expect(setOrdersToState([orderTestData])).toEqual(expectedAction);
  });
});
