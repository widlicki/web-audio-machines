import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import theme from '../../../styles/theme'

export interface MachineCardProps {
  description: string
  image: StaticImageData
  name: string
}

const MachineCard = ({ description, image, name }: MachineCardProps) => (
  <Card
    sx={{
      background: theme.background.color.light,
      borderRadius: '14px',
      color: 'common.white',
      padding: theme.spacing(4),
    }}
  >
    <Image src={image} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h4">
        {name}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="medium">Launch</Button>
    </CardActions>
  </Card>
)

export default MachineCard
