import { Spinner } from '@chakra-ui/react'
import { Size } from '../../interfaces'

export interface Props {
  size?: Size
}

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      size={size || 'lg'}
    />
  )
}

export default Loader
