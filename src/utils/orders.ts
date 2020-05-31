export const orderTestData = {
  avatar: "https://image.flaticon.com/icons/svg/236/236831.svg",
  tickets: [
    {
      _id: "1",
      movieName: "test",
      poster: "test",
      startDate: "test",
      ticketPrice: 10,
    },
  ],
  _id: "1",
  email: "test@gmail.com",
};

export const fetchOrdersResponse = (): Response => {
  const json = JSON.stringify({ orders: [orderTestData] });

  return new Response(json, { status: 201 });
};
