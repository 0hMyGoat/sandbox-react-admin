import * as React from "react";
import {
  Datagrid,
  TextField,
  FunctionField,
  EditButton,
  WrapperField,
  ListContextProvider,
  useList,
  WithRecord,
  useEditController,
} from "react-admin";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

/**
 * Affiche le composant de liste des commentaires.
 * @returns Composant liste de commentaire
 */
export default function CommentsList() {
  const { save, record } = useEditController({redirect: "show"});
  const listContext = useList({ data: record.comments });

  /**
   * Met à jour la note dans le record et l'enregistre.
   * @param event Contenu de l'événement.
   * @param newNote Ecart entre la note actuelle et la nouvelle note.
   * @param comment Record du commentaire.
   * @returns 
   */
  const handleChange = (event: any, newNote: any, comment: any) => {
    // Get index of the comment
    const index = record.comments.findIndex(
      (commentUpdate: any) => commentUpdate === comment
    );

    // eslint-disable-next-line eqeqeq
    if (comment.note == +event.target.value) {
      return;
    } else {
      record.comments[index].note = +event.target.value;
      save?.(record);
    }
  };
  return (
    <ListContextProvider value={listContext}>
      <Typography variant="h5">Commentaires</Typography>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="Date"
          render={(record: any) => {
            if (typeof record.date === "string") {
              return new Date(record.date).toLocaleDateString();
            } else {
              return record.date.toLocaleDateString();
            }
          }}
        />
        <TextField source="comment" />
        <WithRecord
          label="Note"
          render={(record: any) => {
            return (
              <Rating
                name="read-only"
                value={record.note}
                onChange={(event: any, newNote: any) =>
                  handleChange(event, newNote, record)
                }
              />
            );
          }}
        />
        <WrapperField textAlign="right">
          {/* NB : pour l'édition, utiliser l'éditable datagrid */}
          <EditButton label="" />
        </WrapperField>
      </Datagrid>
    </ListContextProvider>
  );
}
