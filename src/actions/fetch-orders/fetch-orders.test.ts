import { IFetchOrdersAction } from "types/orders";
import { FETCH_ORDERS } from "constants/orders";
import fetchOrders from ".";

describe("FetchOrders action creator", () => {
  it("Should create an action to fetch orders", () => {
    const expectedAction: IFetchOrdersAction = {
      type: FETCH_ORDERS,
    };

    expect(fetchOrders()).toEqual(expectedAction);
  });
});
