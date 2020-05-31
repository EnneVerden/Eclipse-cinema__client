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

export const fetchMoviesResponse = (): Response => {
  const json = JSON.stringify({ movies: moviesTestData });

  return new Response(json, { status: 201 });
};
