import * as React from "react";
import {
  ArrayInput,
  Edit,
  FormTab,
  SimpleFormIterator,
  Tab,
  TabbedForm,
  TextInput,
} from "react-admin";
import { CommentsIterator } from "../../components/comments";

/**
 * Composant qui permet d'éditer un client
 * @returns Composant formulaire d'édition de client
 */
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
