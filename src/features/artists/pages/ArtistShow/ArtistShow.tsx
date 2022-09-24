import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ArrayField,
  FunctionField,
  SingleFieldList,
  ChipField,
  WrapperField,
} from "react-admin";
import { AlbumIterator } from "../../components";

export default function ArtistShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <FunctionField
          render={(record: any) => {
            return ` ${record.first_name} ${record.last_name} `;
          }}
          label="Nom"
        />
        <WrapperField label="Naissance - Mort">
          <FunctionField
            render={(record: any) => {
              return `${record.birth_date.toLocaleString()} @ ${
                record.birth_place
              }`;
            }}
          />
          {" - "}
          <FunctionField
            render={(record: any) => {
              if (record.death_date) {
                return `${record.death_date.toLocaleString()} @ ${
                  record.death_place
                }`;
              } else {
                return "Vivant(e)";
              }
            }}
          />
        </WrapperField>
        {/* Boucler sur une liste de string */}
        <ArrayField source="tags">
          <SingleFieldList>
            <FunctionField
              render={(record: any) => {
                return <ChipField record={{ tags: record }} source="tags" />;
              }}
            />
          </SingleFieldList>
        </ArrayField>
        {/* Opérations sur attribut non existant */}
        <FunctionField
          render={(record: any) => {
            return `${record.albums.length} album(s)`;
          }}
          label="Albums"
        />
          <AlbumIterator />
      </SimpleShowLayout>
    </Show>
  );
}
