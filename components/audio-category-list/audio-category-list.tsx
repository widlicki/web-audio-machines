import { Menu, MenuItem, MenuList } from '@chakra-ui/react'
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
    <Menu defaultIsOpen closeOnBlur={false} closeOnSelect={false}>
      <MenuList>
        {categories.map((cat) => (
          <MenuItem
            id={cat.id}
            onClick={() => selectCat(cat.id)}
            key={cat.id}
            bg={selected === cat.id ? 'gray.400' : 'gray.100'}
            _focus={{ bg: 'gray.400' }}
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            _active={{
              bg: 'gray.400',
            }}
          >
            {cat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default AudioCategoryList
