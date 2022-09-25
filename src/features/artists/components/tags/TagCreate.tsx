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