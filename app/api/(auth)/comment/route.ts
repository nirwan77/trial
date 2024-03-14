import comments from "@/models/comments";
import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request: Request, response: Response) => {
  try {
    const { searchParams } = new URL(request.url);

    await connect();

    const id = searchParams.get("id");

    const commentsList = await comments
      .find({ postId: id })
      .sort({ createdAt: "desc" });

    return new NextResponse(JSON.stringify(commentsList), { status: 201 });
  } catch (error) {
    return new NextResponse("Error getting data" + error, { status: 400 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    console.log(body);
    await connect();

    const newComment = new comments(body);
    await newComment.save();

    return new NextResponse(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new NextResponse("Error posting comment" + error, { status: 400 });
  }
};
