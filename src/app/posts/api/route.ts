export async function GET() {
  return Response.json({ message: "Hello this is GET API method" });
}

export async function POST(request: Request) {
  console.log(request);
  return Response.json({ message: "Hello this is POST API method" });
}
