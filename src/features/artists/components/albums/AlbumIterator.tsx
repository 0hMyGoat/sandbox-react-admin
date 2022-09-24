import * as React from "react";
import { ArrayField, Button } from "react-admin";
import { AlbumsList, AlbumCreate } from "./";

export default function AlbumIterator() {
    const [toggle, setToggle] = React.useState(false);
    const handleClick = () => setToggle(!toggle);
  return (
    <>
      <ArrayField source="albums">
        <AlbumsList />
      </ArrayField>
      <Button onClick={handleClick} label="Ajouter un album"/>
      {toggle && <AlbumCreate />}
    </>
  );
}
