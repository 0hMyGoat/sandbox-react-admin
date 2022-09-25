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
  useRecordContext,
  WrapperField,
} from "react-admin";
import { TagChipIterator, AlbumChipIterator } from "../../components";

export default function ArtistList() {
  const record = useRecordContext();
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
        {/* ====================================================== */}
        {/* Parcours la liste des albums (version classique) */}
        {/* ====================================================== */}
        {/* Version classique avec un arrayfield */}
        {/* <ArrayField source="albums">
          <SingleFieldList linkType={false}>
            Et retourne l'attribut 'titre' de chaque album
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField> */}
        {/* ====================================================== */}
        {/* Parcours la liste des albums (itérateur custom) */}
        {/* ====================================================== */}
        <FunctionField 
            label="Albums"
            render={(record: any) => {
              console.log(record.albums);
                return <AlbumChipIterator records={record.albums} max={5} />
            }}
        />
        {/* ======================================================= */}
        {/* Parcours la liste des tags (version classique) */}
        {/* ======================================================= */}
        {/* <ArrayField source="tags" >
            <SingleFieldList linkType={false} >
                <FunctionField 
                    render={(record: any) => {
                        return <ChipField record={{tags: record}} source="tags" />
                    }} 
                />
            </SingleFieldList>
        </ArrayField> */}
        {/* ======================================================= */}
        {/* Parcours la liste des tags (itérateur custom) */}
        {/* ======================================================= */}
        <FunctionField 
            label="Tags"
            render={(record: any) => {
                return <TagChipIterator records={record.tags} />
            }}
        />
        <WrapperField label="Actions" textAlign="right">
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" />
        </WrapperField>
      </Datagrid>
    </List>
  );
}
