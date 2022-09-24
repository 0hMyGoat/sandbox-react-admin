import * as React from "react";
import {
    DateInput,
  Form,
  SaveButton,
  TextInput,
  useEditController,
  useRecordContext,
} from "react-admin";

export default function AlbumCreate() {
    // Création d'un state pour stocker l'album
  const [newAlbum, setNewAlbum] = React.useState({
    title: "",
    release_date: "",
  });
//   Ajout du hook pour récupérer le record (ici, les albums)
  const record = useRecordContext();
//   Import du hook pour récupérer le controller de l'edit (ici, save et son comportement)
  const { save } = useEditController({ redirect: "show" });

//  Fonction pour gérer la modification des champs album
  const handleChange = (event: any) => {
    setNewAlbum({ ...newAlbum, [event.target.name]: event.target.value });
  };

//   Fonction pour gérer l'ajout d'un album lorsque l'utilisateur clique sur le bouton
  const handleSubmit = (event: any) => {
    //  On empêche le comportement par défaut du formulaire
    event.preventDefault();
    //  On ajoute le nouvel album au tableau d'albums du record
    record.albums.push(newAlbum);
    //  On sauvegarde le record
    // On est obligé de lui passer '?' pour dire que save peut être undefined
    save?.(record);
  };

  return (
    <Form>
        {/* On appelle handlechange sur chaque champs concerné */}
      <TextInput source="title" onChange={handleChange} sx={{marginLeft: '5px', width: '63%'}} />
      <DateInput source="release_date" onChange={handleChange} sx={{ marginLeft: '1%' }} />
      {/* Et on passe le handleSubmit sur le savebutton */}
      <SaveButton onClick={handleSubmit} sx={{ marginTop: '15px', marginLeft: "1%" }} />
    </Form>
  );
}
