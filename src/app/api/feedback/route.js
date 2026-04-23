import { feedback } from "../route";

export async function GET(request) {
  return Response.json(feedback);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: "404",
      message: "Please send a massage",
    });
  }

  // New Feedback data created

  const newFeedBack = { message, id: feedback.length + 1 };
  feedback.push(newFeedBack);

  return Response.json({
    acknowledged: true,
    insertedId: newFeedBack.id,
  });
}
