import * as React from "react";
import { ArrayField } from "react-admin";
import { AlbumsList, AlbumCreate } from "./";

export default function AlbumIterator() {
  return (
    <>
      <AlbumCreate />
      <ArrayField source="albums">
        <AlbumsList />
      </ArrayField>
    </>
  );
}
