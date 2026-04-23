import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
const feedbackData = connect("feedbackNew");

export async function GET(request) {
  const result = await feedbackData.find().toArray();

  return Response.json(result);
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

  const newFeedBack = { message, date: new Date().toISOString() };

  const result = feedbackData.insertOne(newFeedBack);
  revalidatePath("/feedback");

  return Response.json(result);
}
