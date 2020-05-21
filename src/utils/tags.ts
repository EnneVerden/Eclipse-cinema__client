export const tagsTestData = [
  {
    _id: "1",
    name: "tag1",
  },
  {
    _id: "2",
    name: "tag2",
  },
  {
    _id: "3",
    name: "tag3",
  },
];

export const fetchTagsResponse = (): Response => {
  const json = JSON.stringify({ tags: tagsTestData });

  return new Response(json, { status: 201 });
};
