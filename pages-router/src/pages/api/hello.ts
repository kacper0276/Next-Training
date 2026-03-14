import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

// URL: /api/hello (zalezy od nazwy pliku)
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "POST") {
    res.status(200).json({
      message: "This is post",
    });
  } else {
    res.status(200).json({
      message: "This is post",
    });
  }
}
