import * as React from "react";
import { Datagrid, DateField, TextField } from "react-admin";

export default function AlbumsList() {
  return (
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" />
      <DateField source="release_date" />
    </Datagrid>
  );
}
