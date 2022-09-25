import * as React from "react";
import Chip from "@mui/material/Chip";

export default function AlbumChipIterator(...props: any) {
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
