import * as React from "react";
import Chip from "@mui/material/Chip";

export default function TagChipIterator(...props: any) {
  const generateChip = (max: number = 3) => {
    const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];
    for (let index = 0; index < max; index++) {
      let label = records[index]
      if (label.length > 8) {
        label = label.substring(0, 5) + "..."
      }
      chipList.push(<Chip key={label} label={label} sx={{margin: '1%'}} />);
    }
    chipList.push(
      <Chip key={recordsLength} label={`+${recordsLength - max}`} sx={{margin: '1%'}} />
    );
    return chipList;
  };
  return <>{generateChip(props[0].max)}</>;
}
