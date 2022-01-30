import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { AudioCategory } from '../../interfaces/library'

export interface Props {
  categories: AudioCategory[]
}

const AudioCategoryList: React.FC<Props> = ({ categories }) => {
  const [selected, setSelected] = useState<string>('')

  const selectCat = (id: string) => {
    setSelected(id)
  }

  return (
    <Box>
      <List>
        {categories &&
          categories.map((cat) => (
            <ListItem key={cat.id}>
              <ListItemButton
                onClick={() => selectCat(cat.id)}
                selected={cat.id === selected}
              >
                <ListItemText primary={cat.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  )
}

export default AudioCategoryList
