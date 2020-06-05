import { REMOVE_TICKET } from "constants/user";

export interface IRemoveTicketAction {
  type: typeof REMOVE_TICKET;
  deletedMovieId: string;
}
