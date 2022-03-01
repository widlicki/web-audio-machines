import { Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import { AppHeader, NavLink } from '../../../styles/theme'

export interface HeaderProps {
  isAuthenticated: boolean
}

const Header = ({ isAuthenticated }: HeaderProps) => (
  <AppHeader elevation={0} position="fixed">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ flex: 1 }} />
      <NavLink variant="h6" href="/" sx={{ fontSize: 24 }}>
        webaudiomachines
      </NavLink>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {!isAuthenticated ? (
          <>
            <NavLink variant="h6" href="/sign-in/">
              Sign In
            </NavLink>
            <NavLink variant="h6" href="/sign-up/">
              Sign Up
            </NavLink>
          </>
        ) : (
          <NavLink variant="h6" href="/sign-in/">
            Sign Out
          </NavLink>
        )}
      </Box>
    </Toolbar>
  </AppHeader>
)

export default Header
