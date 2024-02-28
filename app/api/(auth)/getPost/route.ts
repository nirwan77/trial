import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import publishedPost from "@/models/publishedPosts";

export const GET = async (request: Request, response: Response) => {
  try {
    const { searchParams } = new URL(request.url);

    await connect();

    const id = searchParams.get("id");

    const detail = await publishedPost.findOne({ _id: id });

    return new NextResponse(JSON.stringify(detail), { status: 201 });
  } catch (error) {
    return new NextResponse("Error posting data" + error, { status: 400 });
  }
};

export const POST = async (request: Request, response: Response) => {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    await connect();

    const detail = await publishedPost.findOneAndUpdate(
      { _id: id },
      { $addToSet: { views: body.views } }
    );

    return new NextResponse(JSON.stringify(detail), { status: 201 });
  } catch (error) {
    return new NextResponse("Error posting data" + error, { status: 400 });
  }
};
