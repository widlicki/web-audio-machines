import { Card, CardActions, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import theme from '../../../styles/Theme'
import AppButton from '../../base/Button/Button'

export interface MachineCardProps {
  description: string
  image?: StaticImageData
  name: string
  to: string
}

const MachineCard = ({ description, image, name, to }: MachineCardProps) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(to)
  }

  return (
    <Card
      sx={{
        background: theme.background.color.light,
        borderRadius: theme.border.radius.sm,
        color: 'common.white',
        padding: theme.spacing(4),
      }}
    >
      {image && <Image src={image} alt={name} />}
      <CardContent>
        <Typography gutterBottom variant="h4">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <AppButton onClick={handleClick} text="Launch" />
      </CardActions>
    </Card>
  )
}

export default MachineCard
