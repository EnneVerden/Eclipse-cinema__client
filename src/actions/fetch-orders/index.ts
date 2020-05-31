import { IFetchOrdersAction } from "types/orders";
import { FETCH_ORDERS } from "constants/orders";

const fetchOrders = (): IFetchOrdersAction => ({
  type: FETCH_ORDERS,
});

export default fetchOrders;
