# Description

Répository pour s'amuser avec react-admin et tester ses limites.
Il a aussi pour but de show-caser des utilisations avancées des hook que propose react admin.

## ShowCases

Les deux showcases utilisent les hooks `useRecordContext` et `useEditController`.

- `useRecordContext` : permet de récupérer le record courant et le manipuler
- `useEditController` : ajoute tous les éléments de l'interface d'édition (record, save, loading, etc.)

### Manipulation de liste

Voir le composant `TagCreate` dans `src/features/artists/components/tags/TagCreate.tsx` pour voir comment manipuler les listes.

### Manipulation de liste d'objets

Le composant `AlbumIterator` dans `src/features/artists/components/albums` montre à la fois l'affichage de liste et l'insertion d'objets dépourvus d'`id` dans la liste.
Il appelle deux composants distincts, pour afficher et ajouter des albums. Le composant d'affichage permet aussi la suppression d'albums via un bouton directement présrent dans la liste.

## Setup

### Installation

```sh
git clone https://github.com/0hMyGoat/sandbox-react-admin.git
cd sandbox-react-admin
npm install
```

### Démarrage

```sh
npm run api # Démarre l'API json-server
npm start # Démarre le front
```

## Arborecense

```sh
└───features # Liste des features
    └───artists # Feature artiste
        ├───components # Composants utilisés par la feature
        │   ├───albums # Composants pour gérer les albums
        │   └───tags # Composants pour gérer les tags
        └───pages # Pages de la feature artiste (CRUD)
            ├───ArtistCreate # Page de création d'un artiste
            ├───ArtistEdit # Page d'édition d'un artiste
            ├───ArtistShow # Page de visualisation d'un artiste
            └───ArtistsList # Page de liste des artistes
```
