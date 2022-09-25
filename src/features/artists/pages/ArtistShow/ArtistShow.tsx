import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ArrayField,
  FunctionField,
  SingleFieldList,
  ChipField,
  WrapperField,
  useEditController,
} from "react-admin";
import { AlbumIterator, TagCreate } from "../../components";
import Chip from "@mui/material/Chip";

/**
 * Affiche le composant qui display les détails d'un artiste.
 * @returns composant détail artiste
 */
export default function ArtistShow() {
  const [toggle, setToggle] = React.useState(false);
  const { save, record } = useEditController({ redirect: "show" });
  const dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const handleOnDelete = (tagToDelete: string) => {
    const tagIndex = record.tags.findIndex((tag: any) => tag === tagToDelete);
    record.tags.splice(tagIndex, 1);
    save?.(record);
  };
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
              return `${new Date(record.birth_date).toLocaleDateString('fr-FR', dateFormat)} @ ${
                record.birth_place
              }`;
            }}
          />
          {" - "}
          <FunctionField
            render={(record: any) => {
              if (record.death_date) {
                return `${new Date(record.death_date).toLocaleDateString('fr-FR', dateFormat)} @ ${
                  record.death_place
                }`;
              } else {
                return "Vivant(e)";
              }
            }}
          />
        </WrapperField>
        {/* Boucler sur une liste de string */}
        <ArrayField source="tags" label="Tags">
          <>
            <SingleFieldList linkType={false}>
              <FunctionField
                render={(record: any) => {
                  return (
                    <ChipField
                      record={{ tags: record }}
                      source="tags"
                      onDelete={() => handleOnDelete(record)}
                    />
                  );
                }}
              />
            </SingleFieldList>
            <Chip
              label="Ajouter"
              sx={{ margin: "5px" }}
              onClick={() => setToggle(!toggle)}
            />
          </>
        </ArrayField>
        {toggle && <TagCreate />}
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
