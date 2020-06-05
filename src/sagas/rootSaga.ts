import { all, AllEffect, CallEffect, TakeEffect } from "redux-saga/effects";

import { authorization } from "./authorization";
import { login } from "./login";
import { registration } from "./registration";
import { logout } from "./logout";
import { fetchTags } from "./fetch-tags";
import { fetchMovies } from "./fetch-movies";
import { fetchUsers } from "./fetch-users";
import { fetchOrders } from "./fetch-orders";
import { replenishBalance } from "./replenish-balance";
import { buyMovie } from "./buy-movie";
import { removeTicket } from "./remove-ticket";

export default function* rootSaga(): Generator<
  AllEffect<Generator<TakeEffect | CallEffect>>
> {
  yield all([
    login(),
    registration(),
    authorization(),
    logout(),
    fetchTags(),
    fetchMovies(),
    fetchUsers(),
    fetchOrders(),
    replenishBalance(),
    buyMovie(),
    removeTicket(),
  ]);
}
