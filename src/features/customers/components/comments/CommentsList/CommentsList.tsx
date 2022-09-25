import React from "react";
import {
  Datagrid,
  TextField,
  NumberField,
  useRecordContext,
  FunctionField,
  EditButton,
  WrapperField,
  ListContextProvider,
  useList,
} from "react-admin";
import { CommentEdit } from "../";

export default function CommentsList() {
  const record = useRecordContext();
  const listContext = useList({ data: record.comments });
  return (
    <ListContextProvider value={listContext}>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="Date"
          render={(record: any) => {
            if (typeof record.date === "string") {
              return new Date(record.date).toLocaleDateString();
            } else {
              return record.date.toLocaleDateString();
            }
          }}
        />
        <TextField source="comment" />
        <NumberField source="note" />
        <WrapperField textAlign="right">
            {/* NB : pour l'édition, utiliser l'éditable datagrid */}
          <EditButton label="" /> 
        </WrapperField>
      </Datagrid>
    </ListContextProvider>
  );
}
