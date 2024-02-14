import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import users from "@/models/users";
import crypto from "crypto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

export const config = { runtime: "experimental-edge" };

export const GET = async () => {
  try {
    await connect();

    const user = await users.find();

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching data", { status: 400 });
  }
};

export const POST = async (request: Request, response: Response) => {
  try {
    const body = await request.json();

    await connect();

    const newUser = new users(body);
    await newUser.save();

    return new NextResponse(null, { status: 201 });
  } catch (error) {
    return new NextResponse("Error posting data" + error, { status: 400 });
  }
};

export const PATCH = async (request: Request) => {
  const body = await request.json();
  try {
    await connect();

    await users.findOneAndUpdate(body.id, body.linkedAccounts);

    return new NextResponse(null, { status: 201 });
  } catch (error) {
    console.log(`Error updating data ${error}.`);
  }
};
