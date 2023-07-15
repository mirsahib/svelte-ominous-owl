import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export function GET() {
  return json(comments);
}

export async function POST(RequestEvent) {
  const { request } = RequestEvent;
  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment),{status:201})
}
