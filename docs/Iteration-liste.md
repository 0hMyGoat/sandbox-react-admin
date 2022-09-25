# Itération de liste

Composants permettant de créer une liste de tags customs, à partir d'une liste

## Setup

- [ ] Créer un objet ayant un attribut contenant une liste de string dans le json (ici `artists.tags`)

## Liste de tags dans un composant liste

### Etape 1 : Itérateur

Ce composant affiche un nombre donné de tags (au lieu de toute la liste), et précise le nombre de tags restants.

- [ ] Créer un composant `TagList` dans `components\TagIterator.tsx`
- [ ] Le composant doit accepter une liste de props `...props: any`

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {
  return <span>Hello World</span>;
}
```

- [ ] Ajouter une méthode qui permet de générer les tags à partir de la liste de props
- [ ] Elle prendra en paramètre le nombre de tags à afficher, avec une valeur par défaut de 3

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {
    
    const generateChip = (max: number = 3) => {
        ...
    };
    return <span>Hello World</span>;
}
```

- [ ] Elle récupèrera le record actuel (attention, il faut aller chercher l'index 0 du tableau !), sous le nom `record`
- [ ] Elle stockera dans une variable à part le nombre total de tags sous le nom `recordLength`
- [ ] Elle initialise un tableau vide pour stocker les chip que nous allons créer sous le nom `chipList`

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {
    
    const generateChip = (max: number = 3) => {
        const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];
    ...
    };

    return <span>Hello World</span>;
}
```

- [ ] Itérez sur le tableau de tags dans la limite du maximum et pour chaque élément, ajoutez un composant `Chip` dans le tableau `chipList`
- [ ] Récupérez le nom du tag grâce à `records[index]` et enregistrez le dans une variable `label` (elle sera utile plus tard)

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {
    
    const generateChip = (max: number = 3) => {
        const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];

    for (let index = 0; index < max; index++) {
        let label = records[index];
      chipList.push(<Chip key={label} label={label} sx={{ margin: "1%" }} />);
    }
  };
    return <span>Hello World</span>;
}
```

- [ ] Après la boucle, insérez une chip supplémentaire avec le nombre de tags restants
- [ ] Retournez ensuite la chipList

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {
    
    const generateChip = (max: number = 3) => {
        const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];

    for (let index = 0; index < max; index++) {
        
        let label = records[index];
      chipList.push(<Chip key={label} label={label} sx={{ margin: "1%" }} />);
    }

    chipList.push(
        <Chip
        key={recordsLength}
        label={`+${recordsLength - max}`}
        sx={{ margin: "1%" }}
      />
    );
    return chipList;
  };
  
    return <span>Hello World</span>;
}
```

- [ ] Si vous souhaitez tronquer le nom des tags, vous pouvez ajouter une condition pour les tronquer, avec la méthode `substring()`

```tsx
import Chip from "@mui/material/Chip";

export default function TagIterator(...props: any) {

    const generateChip = (max: number = 3) => {
    const records: any[] = props[0].records;
    const recordsLength = records.length;
    let chipList: any = [];
    for (let index = 0; index < max; index++) {
      let label = records[index];
      if (label.length > 8) {
        label = label.substring(0, 5) + "...";
      }
      chipList.push(<Chip key={label} label={label} sx={{ margin: "1%" }} />);
    }
    chipList.push(
      <Chip
        key={recordsLength}
        label={`+${recordsLength - max}`}
        sx={{ margin: "1%" }}
      />
    );
    return chipList;
  };
  return <>{generateChip(props[0].max)}</>;
}
```

- [ ] Ensuite, il ne reste plus qu'à appeler la méthode lors de l'appel du composant

```tsx
export default function TagIterator(...props: any) {

    const generateChip = (max: number = 3) => {
    ...
  };
  return <>{generateChip(props[0].max)}</>;
}
```

- [ ] Il est bien sur possible (voire nécessaire) de découper un peu plus la méthode `generateChip` en plusieurs méthodes afin de la rendre plus lisible.

### Etape 2 : Appel de l'itérateur

- [ ] Il peut être appelé dans un function field dans le composant souhaité

- [ ] Il faut bien sur lui passer le tableau de tags 

- [ ] On peut aussi ajouter le nombre l'éléments à afficher

```tsx
<FunctionField
    label="Tags"
    render={(record: any) => {
    return <TagIterator records={record.tags} />;
    }}
/>
```

---

## Liste de tags dans un composant show

Ici, les tags embarqueront la possibilité d'être supprimé. S'agissant d'une liste de strings, ils n'ont pas d'index : il faudra donc le récupérer et le supprimer du tableau.
Il intégrera aussi un bouton permettant d'insérer des tags dans le tableau de tags

### Etape 1 : Afficher la liste

Il n'est pas nécessaire de créer un composant à part ici, mais le faire permettrait d'ajouter le tag 'ajouter' de manière plus ergonomique (mais flemme).
Ici, nous avons juste utilisé un `ArrayField` pour afficher la liste de tags.

```tsx
<ArrayField source="tags" label="Tags">
    <SingleFieldList linkType={false}>
        <FunctionField
        render={(record: any) => {
            return (
            <ChipField
                record={{ tags: record }}
                source="tags"
            />
            );
        }}
        />
    </SingleFieldList>
</ArrayField>
```

### Etape 2 : Ajouter le boutton de supperssion

- [ ] Il faut également impoter le hook `useEditController` pour envoyer la modification au serveur
  - [ ] On récupère la méthode `save` pour enregistrer les modifications
  - [ ] On récupère aussi la méthode `record` pour manipuler le record courant
- [ ] La méthode `handleOnDelete` doit être déclarée dans le composant
  - [ ] Elle prend en paramètre le nom du tag à supprimer
  - [ ] Elle va parcourir la liste grâce à la méthode `findIndex` et récupérer l'index du tag à supprimer
  - [ ] Elle utilisera ensuite la méthode `splice` sur l'array pour supprimer l'élément du tableau
  - [ ] Ensuite, elle appelera la méthode `save` pour mettre à jour le tableau de tags
    - [ ] On doit lui passer le record courant que l'on vient de modifier en paramètre
    - [ ] Il est nécessaire d'ajouter un `?` pour éviter les erreurs de compilation
- [ ] Il faut ensuite ajouter un `FunctionField` dans le `ChipField` et lui passer la méthode `handleOnDelete` sur le props 'onDelete'. C'est ce dernier qui va automatiquement ajouter le boutton de suppression. Il faut également lui passer le nom du tag en paramètre

```tsx
  const { save, record } = useEditController({ redirect: "show" });

  const handleOnDelete = (tagToDelete: string) => {
    const tagIndex = record.tags.findIndex((tag: any) => tag === tagToDelete);
    record.tags.splice(tagIndex, 1);
    save?.(record);
  };
```

```tsx
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
```

### Etape 3 : Créer le composant d'ajout

Le composant d'ajout permettra d'ajouter des tags plus facilement.

```tsx
import * as React from 'react'
import { Form, SaveButton, TextInput, useEditController, useRecordContext } from 'react-admin'
import AddBoxIcon from '@mui/icons-material/AddBox';

/**
 * Permet l'ajout de tags à un artiste.
 * @returns Composant de création de tag
 */
export default function TagCreate() {

    // Record context pour récupérer toutes les infos du record
    const record = useRecordContext();
    // Hook pour récupérer le controller de l'edit de react admin
    const { save } = useEditController({ redirect: 'show' });
    // State pour stocker le tag à ajouter
    const [newTag, setNewTag] = React.useState('')

    /**
     * Récupère la valeur du champ de texte et l'affecte au state.
     * @param event
     */
    const handleChange = (event: any) => {
        setNewTag(event.target.value)
    }

    /**
     * Ajout un tag au tableau de tags du record et sauvegarde le record.
     * @param event 
     */
    const handleSubmit = (event: any) => {
        event.preventDefault()
        record.tags.push(newTag)
        save?.(record)
    }

  return (
    <Form>
        <TextInput source='newTag'  onChange={handleChange} label="Nouveau tag" />
        <SaveButton label='Ajouter' onClick={handleSubmit} sx={{margin: '15px' }} icon={<AddBoxIcon />} />
    </Form>
  )
}
```

- [ ] Il suffira ensuite d'appeler le composant sous le `ArrayField` pour l'afficher

- [ ] On peut utiliser l'affichage conditionnel de react pour cacher et afficher le bouton.

```tsx
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
```
