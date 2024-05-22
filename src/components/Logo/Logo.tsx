import {Box, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" style={{textDecoration: 'none', color: ''}}>
      <Box sx={{width: '90px'}}>
        <img src="/img/logo.png" alt="Логотип проекта" />
      </Box>
      <Typography sx={{fontStyle: 'italic'}}>Что-то интересное...</Typography>
    </Link>
  )
}

export default Logo
