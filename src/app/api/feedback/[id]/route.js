import { connect } from "@/lib/dbConnect";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";

const feedbackData = connect("feedbackNew");

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: "404",
      message: "send correct_id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await feedbackData.findOne(query);

  return Response.json(result);
}
export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: "404",
      message: "send correct_id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await feedbackData.deleteOne(query);

  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { id } = await params;

  const { message } = await request.json();

  if (id.length !== 24) {
    return Response.json({
      status: "404",
      message: "send correct_id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message,
    },
  };

  const result = await feedbackData.updateOne(query, newData);

  return Response.json(result);
}
