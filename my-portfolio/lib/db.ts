import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

let cachedConnection: typeof mongoose | null = null;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to your environment if you intend to use the database.",
    );
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(MONGODB_URI);
  return cachedConnection;
}
