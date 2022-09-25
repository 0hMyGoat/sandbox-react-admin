import * as React from "react";
import {
  ArrayInput,
  DateInput,
  Edit,
  FormTab,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  Tab,
  TabbedForm,
  TabbedShowLayout,
  TextInput,
} from "react-admin";
import { CommentsIterator } from "../../components/comments";

export default function CustomerEdit() {
  return (
    <Edit>
      <TabbedForm>
        <FormTab label="Identité">
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="email" />
          <TextInput source="phone" />
        </FormTab>
        <FormTab label="Adresses">
          <ArrayInput source="address">
            <SimpleFormIterator>
              <TextInput source="number" />
              <TextInput source="street" />
              <TextInput source="city" />
              <TextInput source="state" />
              <TextInput source="country" />
              <TextInput source="postal_code" />
              <TextInput source="type" />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
        <FormTab label="Commentaires">
          <Tab label="">
            <CommentsIterator />
          </Tab>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
}
