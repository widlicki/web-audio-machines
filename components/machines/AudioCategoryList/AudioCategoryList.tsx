import FolderIcon from '@mui/icons-material/Folder'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { AudioCategory } from '../../../interfaces/library'
import { NotFoundMessage } from '../../../styles/Theme'

export interface AudioCategoryListProps {
  categories: AudioCategory[]
}

const AudioCategoryList = ({ categories }: AudioCategoryListProps) => {
  const [selected, setSelected] = useState<string>('')

  const selectCat = (id: string) => {
    setSelected(id)
  }

  return (
    <Box>
      <List>
        {categories && categories.length > 0 ? (
          categories.map((cat) => (
            <ListItem key={cat.id} sx={{ padding: 0 }}>
              <ListItemButton
                onClick={() => selectCat(cat.id)}
                selected={cat.id === selected}
              >
                <ListItemAvatar>
                  <Avatar>
                    {cat.tier === 'PREMIUM' ? (
                      <FolderSpecialIcon />
                    ) : (
                      <FolderIcon />
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={cat.name} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <NotFoundMessage>- No Data -</NotFoundMessage>
        )}
      </List>
    </Box>
  )
}

export default AudioCategoryList
