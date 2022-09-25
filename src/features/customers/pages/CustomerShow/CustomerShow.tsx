import {
  ArrayField,
  Datagrid,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { CommentsIterator } from "../../components/comments";

export default function CustomerShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <ArrayField source="address">
          <Datagrid>
            <TextField source="number" />
            <TextField source="street" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="country" />
            <TextField source="postal_code" />
            <TextField source="type" />
          </Datagrid>
        </ArrayField>
        <CommentsIterator />
      </SimpleShowLayout>
    </Show>
  );
}
