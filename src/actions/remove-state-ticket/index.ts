import { IMovie } from "types/movies";
import { IRemoveTicketFromState } from "types/user";
import { REMOVE_TICKET_FROM_STATE } from "constants/user";

const removeTicketFromState = (movie: IMovie): IRemoveTicketFromState => ({
  type: REMOVE_TICKET_FROM_STATE,
  movie,
});

export default removeTicketFromState;
