import Loader from '../components/loader/loader'

export const WithRequest = (WrappedComponent: React.FC) => {
  const WithRequestComponent = (props: any) => {
    if (props.isLoading) {
      return <Loader size="xl" />
    }

    if (props.isError) {
      return 'Error'
    }

    return <WrappedComponent {...props} />
  }

  return WithRequestComponent
}

export default WithRequest
