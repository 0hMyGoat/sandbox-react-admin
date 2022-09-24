import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ArtistList, ArtistShow } from "./features/artists/pages";

const dataProvider = jsonServerProvider('http://localhost:3001');

export default function App () {
  return (
  <Admin dataProvider={dataProvider}>
    <Resource name="artists" list={ArtistList} show={ArtistShow} />
  </Admin>
  )
}