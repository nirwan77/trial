import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import publishedPosts from "@/models/publishedPosts";

export const POST = async (request: Request, response: Response) => {
  try {
    const body = await request.json();

    await connect();

    const newPost = new publishedPosts(body);
    await newPost.save();

    return new NextResponse(null, { status: 201 });
  } catch (error) {
    return new NextResponse("Error posting data" + error, { status: 400 });
  }
};
