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
