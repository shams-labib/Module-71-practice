import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Feedbacks",
};

export const dynamic = "force-dynamic";

const getFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/feedback`, {
    // cache: "force-cache",
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const feedbacks = await getFeedbacks();

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        <span className="text-yellow-500">{feedbacks.length}</span> Feedbacks
        Found
      </h1>

      <div className="my-5">
        <Link href={"/feedback/add"} className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="my-3 space-y-5">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default page;
