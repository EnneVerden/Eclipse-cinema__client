export const moviesTestData = {
  movies: [
    {
      _id: "1",
      movieName: "test",
      poster: "test",
      description: "test",
      tags: [{ _id: "1", name: "testTag" }],
      startDate: "test",
      endDate: "test",
      ticketPrice: 10,
    },
    {
      _id: "2",
      movieName: "test",
      poster: "test",
      description: "test",
      tags: [{ _id: "1", name: "testTag" }],
      startDate: "test",
      endDate: "test",
      ticketPrice: 10,
    },
    {
      _id: "3",
      movieName: "test",
      poster: "test",
      description: "test",
      tags: [{ _id: "1", name: "testTag" }],
      startDate: "test",
      endDate: "test",
      ticketPrice: 10,
    },
  ],
  pageCount: 1,
};

export const newMovieInfo = {
  movie: {
    _id: "1",
    movieName: "newTest",
  },
};

export const fetchMoviesResponse = (): Response => {
  const json = JSON.stringify({ movies: moviesTestData });

  return new Response(json, { status: 201 });
};

export const fetchRemoveMovieResponse = (): Response => {
  const json = JSON.stringify({ deletedMovieId: "1" });

  return new Response(json, { status: 201 });
};

export const errorMessage = "Test error";

export const getErrorResponse = (): Response => {
  const json = JSON.stringify({ error: { message: errorMessage } });

  return new Response(json, { status: 201 });
};
