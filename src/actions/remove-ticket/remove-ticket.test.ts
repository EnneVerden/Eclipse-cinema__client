import { IRemoveTicketAction } from "./types";
import { REMOVE_TICKET } from "constants/user";
import removeTicket from ".";

describe("RemoveTicket action creator", () => {
  it("Should create an action to remove ticket", () => {
    const testData = "1";

    const expectedAction: IRemoveTicketAction = {
      type: REMOVE_TICKET,
      deletedMovieId: testData,
    };

    expect(removeTicket(testData)).toEqual(expectedAction);
  });
});
