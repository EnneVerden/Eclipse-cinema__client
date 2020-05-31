import { IOrder } from "types/orders";
import { TOrdersAction } from "types/orders";
import { SET_ORDERS_TO_STATE } from "constants/orders";

type TState = IOrder[] | [];

const initialState: TState = [];

const orders = (state = initialState, action: TOrdersAction): TState => {
  switch (action.type) {
    case SET_ORDERS_TO_STATE:
      return action.orders;
    default:
      return state;
  }
};

export default orders;
