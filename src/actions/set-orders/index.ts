import { ISetOrdersToStateAction, IOrder } from "types/orders";
import { SET_ORDERS_TO_STATE } from "constants/orders";

const setOrdersToState = (orders: Array<IOrder>): ISetOrdersToStateAction => ({
  type: SET_ORDERS_TO_STATE,
  orders,
});

export default setOrdersToState;
