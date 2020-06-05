import { IRemoveTicketFromState } from "types/user";
import { REMOVE_TICKET_FROM_STATE } from "constants/user";
import { moviesTestData } from "utils/movies";
import removeTicketFromState from ".";

describe("RemoveTicket action", () => {
  it("Should create an action to remove ticket", () => {
    const expectedAction: IRemoveTicketFromState = {
      type: REMOVE_TICKET_FROM_STATE,
      movie: moviesTestData.movies[0],
    };

    expect(removeTicketFromState(moviesTestData.movies[0])).toEqual(
      expectedAction
    );
  });
});
