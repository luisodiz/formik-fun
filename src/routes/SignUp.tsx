import {Box, Grid, Typography} from '@mui/material'
import SignUpForm from '../components/SignUpForm/SignUpForm.tsx'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <Grid container justifyContent="center">
      <Grid sm={7} md={5}>
        <Typography
          variant="h2"
          component="h2"
          sx={{fontSize: '2.5rem', mb: 2, textAlign: 'center'}}
        >
          Регистрация
        </Typography>

        <SignUpForm />

        <Box mt={2}>
          Если у вас уже есть аккаунт, пожалуйста,{' '}
          <Link to="/sign-in">авторизуйтесь</Link>.
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignUp
