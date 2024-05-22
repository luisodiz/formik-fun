import Header from '../components/Header/Header.tsx'
import {Box, Container} from '@mui/material'
import {Outlet} from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Header />
      <Box component="main" py="30px">
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}

export default Root
