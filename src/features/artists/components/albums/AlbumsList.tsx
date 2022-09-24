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

export default function AlbumsList() {
  const record = useRecordContext();
  const { save } = useEditController({ redirect: "show" });

  /**
   * Récupère l'index de l'élément dans la liste
   */
  const getAlbumIndex = (title: any) => {
    return record.albums.findIndex((album: any) => album.title === title);
  };

  /**
   * Permet de supprimer l'album
   */
  const deleteAlbum = (albumIndex: string) => {
    record.albums.splice(albumIndex, 1);
  };

  const handleClick = (title: any) => {
    const albumIndex = getAlbumIndex(title);
    deleteAlbum(albumIndex);
    console.log(record)
    save?.(record);
  };

  return (
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" />
      <DateField source="release_date" />
      <FunctionField
        render={(record: any) => {
          return (
            <Button onClick={() => handleClick(record.title)} label="Supprimer" />
          );
        }}
      />
    </Datagrid>
  );
}
