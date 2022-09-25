import React from "react";
import { ArrayField } from "react-admin";
import { CommentsList, CommentCreate } from "../index";

export default function CommentsIterator() {
  return (
    <>
      <ArrayField source="comments">
        <CommentsList />
      </ArrayField>
      <CommentCreate />
    </>
  );
}
