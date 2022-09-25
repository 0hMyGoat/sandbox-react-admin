import React from "react";
import {
  Form,
  TextInput,
  NumberInput,
  SaveButton,
  useEditController,
} from "react-admin";
import AddCircleIcon from "@mui/icons-material/AddCircle";

/**
 * Permet la création de commentaire.
 * @returns Composant formulaire de création de commentaire
 */
export default function CommentCreate() {
  const [newComment, setNewComment] = React.useState({
    date: new Date(),
    comment: "",
    note: 0,
  });

  const { save, record } = useEditController({ redirect: "show" });

  /**
   * Met à jour le commentaire dans le state.
   * @param event
   */
  const handleChange = (event: any) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };

  /**
   * Ajoute le commentaire dans le record et l'enregistre.
   * @param event
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    record.comments.push(newComment);
    save?.(record);
  };

  return (
    <Form>
      <TextInput
        source="comment"
        sx={{ width: "60%", margin: "1%" }}
        onChange={handleChange}
        multiline
      />
      <NumberInput
        source="note"
        max={5}
        sx={{ margin: "1%" }}
        onChange={handleChange}
      />
      <SaveButton
        sx={{ marginTop: "20px" }}
        size="large"
        onClick={handleSubmit}
        label="Ajouter"
        icon={<AddCircleIcon />}
      />
    </Form>
  );
}
