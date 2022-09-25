import {
  ArrayField,
  ChipField,
  Datagrid,
  EditButton,
  EmailField,
  List,
  SingleFieldList,
  TextField,
  WrapperField,
} from "react-admin";

export default function CustomerList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <ArrayField source="address">
          <SingleFieldList>
            <ChipField source="city" />
          </SingleFieldList>
        </ArrayField>
        <WrapperField label="Actions">
          <EditButton />
        </WrapperField>
      </Datagrid>
    </List>
  );
}
