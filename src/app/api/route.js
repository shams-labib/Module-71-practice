export const feedback = [
  {
    id: 1,
    message: "The food was too amazing",
  },
  {
    id: 2,
    message: "Waiter need to improve his behavior",
  },
  {
    id: 3,
    message: "Akmal Waiter have good heart",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yaaho mal is created",
  });
}
