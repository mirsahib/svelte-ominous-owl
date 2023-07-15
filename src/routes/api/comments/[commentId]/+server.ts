import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export function GET(RequestEvent) {
  const { params } = RequestEvent;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return json(comment);
}

export async function PATCH(RequestEvent) {
  const { request, params } = RequestEvent;
  const { commentId } = params;
  const { text } = await request.json();
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  if (comment) {
    comment.text = text;
  }
  return new Response(JSON.stringify(comment));
}

export async function DELETE(RequestEvent) {
  const { params } = RequestEvent;
  const { commentId } = params;
  const deletedComment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments.splice(index, 1);
  return new Response(JSON.stringify(deletedComment));
}
