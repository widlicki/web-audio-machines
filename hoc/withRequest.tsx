import { Box } from '@mui/material'
import { Loader } from '../styles/theme'

export const withRequest = (WrappedComponent: React.FC) => {
  const withRequestComponent = (props: any) => {
    if (props.isLoading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Loader />
        </Box>
      )
    }

    if (props.isError) {
      return <Box>An error has occurred</Box>
    }

    return <WrappedComponent {...props} />
  }

  return withRequestComponent
}

export default withRequest
