import React from "react";
import { ArrayField } from "react-admin";
import { CommentsList, CommentCreate } from "../index";

/**
 * Permet d'itérer sur les commentaires et embarque l'ajout de commentaire.
 * @returns Composant liste + création de commentaire
 */
export default function CommentsIterator() {
  return (
    <>
      <ArrayField source="comments" label="Commentaires">
        <CommentsList />
      </ArrayField>
      <CommentCreate />
    </>
  );
}
