import { Button, CardActions, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { AppCard } from '../../../styles/theme'

export interface MachineCardProps {
  description: string
  image: StaticImageData
  name: string
}

const MachineCard = ({ description, image, name }: MachineCardProps) => (
  <AppCard>
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
  </AppCard>
)

export default MachineCard
