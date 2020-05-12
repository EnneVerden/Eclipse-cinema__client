export const moviesTestData = [
  {
    _id: "1",
    name: "test",
    poster: "test",
    description: "test",
    tags: [{ _id: "1", name: "testTag" }],
    startDate: "test",
    endDate: "test",
    ticketPrice: 10,
  },
  {
    _id: "2",
    name: "test",
    poster: "test",
    description: "test",
    tags: [{ _id: "1", name: "testTag" }],
    startDate: "test",
    endDate: "test",
    ticketPrice: 10,
  },
  {
    _id: "3",
    name: "test",
    poster: "test",
    description: "test",
    tags: [{ _id: "1", name: "testTag" }],
    startDate: "test",
    endDate: "test",
    ticketPrice: 10,
  },
];

export const fetchMoviesResponse = (): Response => {
  const json = JSON.stringify({ movies: moviesTestData });

  return new Response(json, { status: 201 });
};
