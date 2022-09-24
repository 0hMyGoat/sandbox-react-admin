import {
  ArrayField,
  ChipField,
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  ShowButton,
  SingleFieldList,
  WrapperField,
} from "react-admin";

export default function ArtistList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <FunctionField
          label="Nom"
          render={(record: any) => {
            return `${record.first_name} ${record.last_name}`;
          }}
          sortBy="Nom"
          sortable
        />
        {/* Transforme une date au format local */}
        <FunctionField 
            label= "Date de naissance"
            render={(record: any) => {
                return `${record.birth_date.toLocaleString()}`;
            }}
        />
        {/* Gère le cas ou la date de décès est vide */}
        <FunctionField
            label="Date de décès"
            render={(record: any) => {
                if (record.death_date) {return `${record.death_date.toLocaleString()}`}
                else {return "Vivant"}
            }}
        />
        {/* Parcours la liste des albums */}
        <ArrayField source="albums">
          <SingleFieldList linkType={false}>
            {/* Et retourne l'attribut 'titre' de chaque album */}
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="tags">
            <SingleFieldList linkType={false}>
                <FunctionField 
                    render={(record: any) => {
                        return <ChipField record={{tags: record}} source="tags" />
                    }} 
                />
            </SingleFieldList>
        </ArrayField>
        <WrapperField label="Actions" textAlign="right">
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" />
        </WrapperField>
      </Datagrid>
    </List>
  );
}
