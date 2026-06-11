import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, code } = await request.json();

    console.log("Received:", { username, code });

    const user = await UserModel.findOne({
      username: decodeURIComponent(username),
    });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const isCodeValid = user.verifyCode === code;
    const isCodeNotExpired =
      new Date(user.verifyCodeExpiry) > new Date();

    console.log({
      dbCode: user.verifyCode,
      enteredCode: code,
      isCodeValid,
      isCodeNotExpired,
    });

    if (!isCodeValid) {
      return Response.json(
        {
          success: false,
          message: "Wrong verification code",
        },
        { status: 400 }
      );
    }

    if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message: "Verification code expired",
        },
        { status: 400 }
      );
    }

    user.isVerified = true;
    await user.save();

    return Response.json(
      {
        success: true,
        message: "User verified successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verification error:", error);

    return Response.json(
      {
        success: false,
        message: "Error verifying user",
      },
      { status: 500 }
    );
  }
}