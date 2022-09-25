# Itération sur liste d'objets

Composants permettant d'itérer sur une liste d'objets **dépourvus d'id**.

## Composants

- AlbumIterator : Pour regrouper la liste et le formulaire d'ajout d'élément
- AlbumList : pour afficher les éléments
- AlbumCreate : pour ajouter un élément

Le composant AlbumItérator sera ensuite appelé par le composant souhaité (ici, `ArtistShow`)

### AlbumIterator

- [ ] Créez les composants `AlbumIterator`, `AlbumList` et `AlbumCreate` dans le dossier `src/components/album` sans les implémenter.
- [ ] Implémentez ensuite le composant Itérateur
  - [ ] Il sera chargé de passer la source (album) aux composants enfants dans un arrayfield
  - [ ] Il prend aussi en charge l'affichage conditionnel pour afficher/cacher directement le formulaire dans le composant
    - [ ] Ce dernier focus sur l'élément formulaire lorsqu'on clique sur le bouton
    - [ ] Il y a un timeout car sinon, l'élément n'est pas retrouvé.

```tsx
import * as React from "react";
import { ArrayField, Button } from "react-admin";
import { AlbumsList, AlbumCreate } from "./";

/**
 * Composant qui affiche la liste des albums de l'artiste et permet de les modifier
 * @returns Composant d'affichage/modification des albums d'un artiste
 */
export default function AlbumIterator() {
  const [toggle, setToggle] = React.useState(false);

  function jumToComponent() {
    const element = document.getElementById("titleForm");
    element?.scrollIntoView();
  }

  /**
   * Change le boolean toggle pour afficher le formulaire d'ajout d'album
   */
  const handleClick = () => {
    setToggle(!toggle);
    setTimeout(() => {
      jumToComponent();
    }, 100);
  };

  return (
    <>
        <ArrayField source="albums">
          <AlbumsList />
        </ArrayField>
        <Button onClick={handleClick} label="Ajouter un album" />
        {toggle && <AlbumCreate />}
      </>
  );
}
```

### AlbumsList

```tsx
import * as React from "react";
import {
  Button,
  Datagrid,
  DateField,
  FunctionField,
  TextField,
  useEditController,
  useRecordContext,
} from "react-admin";
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * Affiche les albums de l'artiste sous forme de liste.
 * Doit être enfant d'une ArrayField.
 * @returns Liste des albums
 */
export default function AlbumsList() {
  const record = useRecordContext();
  const { save } = useEditController({ redirect: "show" });

  /**
   * Récupère l'index de l'album à partir de son titre et de sa date de sortie.
   * @param title Titre de l'album
   * @returns L'index de l'album dans la liste
   */
  const getAlbumIndex = (title: string, releaseDate: Date) => {
    return record.albums.findIndex(
      (album: any) =>
        album.title === title && album.release_date === releaseDate
    );
  };

  /**
   * Supprime un album de la liste des albums de l'artiste à partir de son index.
   * @param albumIndex Index de l'album à supprimer
   */
  const deleteAlbum = (albumIndex: string) => {
    record.albums.splice(albumIndex, 1);
  };

  /**
   * Supprime un album à partir de son titre et de sa date de sortie.
   * @param title titre de l'album
   * @param releaseDate date de sortie de l'albul
   */
  const handleClick = (title: any, releaseDate: Date) => {
    const albumIndex = getAlbumIndex(title, releaseDate);
    deleteAlbum(albumIndex);
    console.log(record);
    save?.(record);
  };

  return (
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" />
      <DateField source="release_date" />
      <FunctionField
        render={(record: any) => {
          return (
            <Button
              onClick={() => handleClick(record.title, record.release_date)}
            >
              <DeleteIcon />
            </Button>
          );
        }}
      />
    </Datagrid>
  );
}
```

### AlbumCreate

```tsx
import * as React from "react";
import {
    DateInput,
  Form,
  SaveButton,
  TextInput,
  useEditController,
  useRecordContext,
} from "react-admin";

/**
 * Inputs de création d'albums.
 * @returns Formulaire d'ajout d'un album
 */
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

  /**
   * Met à jour l'album dans le state.
   * @param event 
   */
  const handleChange = (event: any) => {
    setNewAlbum({ ...newAlbum, [event.target.name]: event.target.value });
  };

  /**
   * Ajoute l'album à la liste et l'enregistre.
   * @param event 
   */
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
      <TextInput source="title" onChange={handleChange} sx={{marginLeft: '5px', width: '63%'}} id="titleForm"/>
      <DateInput source="release_date" onChange={handleChange} sx={{ marginLeft: '1%' }} />
      {/* Et on passe le handleSubmit sur le savebutton */}
      <SaveButton onClick={handleSubmit} sx={{ marginTop: '15px', marginLeft: "1%" }} />
    </Form>
  );
}
```