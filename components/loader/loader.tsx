import { CircularProgress } from '@mui/material'
import { Size } from '../../interfaces'

export interface Props {
  size?: Size
}

const Loader: React.FC<Props> = ({ size }) => {
  const getSize = () => {
    return size === 'lg' ? 40 : 20
  }
  return <CircularProgress size={getSize()} />
}

export default Loader
