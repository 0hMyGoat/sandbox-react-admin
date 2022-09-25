import * as React from 'react'
import { Form, SaveButton, TextInput, useEditController, useRecordContext } from 'react-admin'
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function TagCreate() {

    const record = useRecordContext();
    const { save } = useEditController({ redirect: 'show' });

    const [newTag, setNewTag] = React.useState('')

    const handleChange = (e: any) => {
        setNewTag(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
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