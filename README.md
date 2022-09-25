# Description

Répository pour s'amuser avec react-admin et tester ses limites.
Il a aussi pour but de show-caser des utilisations avancées des hook que propose react admin.

## ShowCases

Les showcases utilisent les hooks `useRecordContext` et `useEditController`.

- `useRecordContext` : permet de récupérer le record courant et le manipuler
- `useEditController` : ajoute tous les éléments de l'interface d'édition (record, save, loading, etc.)

### Manipulation de liste

Voir le composant `TagCreate` dans `src/features/artists/components/tags/TagCreate.tsx` pour voir comment manipuler les listes.

### Manipulation de liste d'objets

Le composant `AlbumIterator` dans `src/features/artists/components/albums` montre à la fois l'affichage de liste et l'insertion d'objets dépourvus d'`id` dans la liste.
Il appelle deux composants distincts, pour afficher et ajouter des albums. Le composant d'affichage permet aussi la suppression d'albums via un bouton directement présrent dans la liste.

### Ajout de commentaires

Voir le composant `Customer` et ses sous-composants dans `src/features/customers/components` pour voir comment ajouter des commentaires à un élément depuis une liste.

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
└───features # Features
    ├───artists
    │   ├───components # Composants propres à artistes
    │   │   ├───albums
    │   │   ├───ChipListIterator
    │   │   └───tags
    │   └───pages # Pages propres à artistes
    │       ├───ArtistShow
    │       └───ArtistsList
    └───customers 
        ├───components
        │   ├───address
        │   │   ├───AddressCreate
        │   │   ├───AddressesList
        │   │   └───AddressIterator
        │   └───comments
        │       ├───CommentCreate
        │       ├───CommentEdit
        │       ├───CommentsIterator
        │       └───CommentsList
        └───pages
            ├───CustomerEdit
            ├───CustomerShow
            └───CustomersList
```
