import * as React from "react";
import Chip from "@mui/material/Chip";

/**
 * Génère une liste de chips à partir d'une liste d'objet ayant un attribut 'title'.
 * @param props liste des albums et maximum à afficher
 * @returns Liste de chips 
 */
export default function AlbumChipIterator(...props: any) {
  /**
   * Génère les chips dans une limite donnée et ajoute le nombre de chip restant.
   * @param max Nombre maximum d'albums à afficher
   * @returns Liste de chips
   */
  const generateChip = (max: number = 3) => {
    const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];
    for (let index = 0; index < max; index++) {
      let title = records[index].title
      if (title.length > 18) {
        title = title.substring(0, 15) + "..."
      }
      chipList.push(<Chip key={title} label={title} sx={{margin: '1%'}} />);
    }
    chipList.push(
      <Chip key={recordsLength} label={`+${recordsLength - max}`} sx={{margin: '1%'}} />
    );
    return chipList;
  };
  return <>{generateChip(props[0].max)}</>;
}
