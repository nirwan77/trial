import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import crypto from "crypto";

export const uploadPost = async (files: File[], user: string) => {
  let image: string[] = [];

  await Promise.all(
    files.map(async (file) => {
      const generateFileName = (bytes = 32) =>
        crypto.randomBytes(bytes).toString("hex");

      const s3 = new S3Client({
        region: process.env.NEXT_PUBLIC_AWS_BUCKET_REGION,
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY || "",
          secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
        },
      });

      const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
        Key: generateFileName(),
        Metadata: {
          userId: user,
        },
      });

      const signedUrl = await getSignedUrl(s3, putObjectCommand, {
        expiresIn: 3000,
      });

      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      image.push(signedUrl.split("?")[0]);
    })
  );
  return image;
};
