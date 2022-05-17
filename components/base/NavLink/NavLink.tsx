import { Link } from '@mui/material'
import { useRouter } from 'next/router'
import theme from '../../../styles/Theme'

export interface NavLinkProps {
  to: string
  children?: JSX.Element | string
  props?: any
}

const NavLink = ({ to, children, ...props }: NavLinkProps) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(to)
  }

  return (
    <Link
      sx={{
        fontSize: 16,
        color: 'common.white',
        marginLeft: theme.spacing(3),
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.primary.dark,
          cursor: 'pointer',
        },
      }}
      {...props}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

export default NavLink
