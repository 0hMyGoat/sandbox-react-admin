import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  List,
  SingleFieldList,
  TextField,
} from "react-admin";

export default function ArtistList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="birth_date" />
        <DateField source="death_date" />
        <TextField source="birth_place" />
        <TextField source="death_place" />
        <ArrayField source="albums">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="tags" />
      </Datagrid>
    </List>
  );
}
