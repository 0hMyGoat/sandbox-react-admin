import * as React from "react";
import { ArrayField, Button } from "react-admin";
import { AlbumsList, AlbumCreate } from "./";

/**
 * Composant qui affiche la liste des albums de l'artiste et permet de les modifier
 * @returns Composant d'affichage/modification des albums d'un artiste
 */
export default function AlbumIterator() {
    
    const [toggle, setToggle] = React.useState(false);

    /**
     * Change le boolean toggle pour afficher le formulaire d'ajout d'album
     */
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
