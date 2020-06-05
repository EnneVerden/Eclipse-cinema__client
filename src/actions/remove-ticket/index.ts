import { IRemoveTicketAction } from "./types";
import { REMOVE_TICKET } from "constants/user";

const removeTicket = (deletedMovieId: string): IRemoveTicketAction => ({
  type: REMOVE_TICKET,
  deletedMovieId,
});

export default removeTicket;
