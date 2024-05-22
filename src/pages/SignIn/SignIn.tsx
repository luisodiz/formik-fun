import {Grid} from '@mui/material'
import SignInForm from '../../components/SignInForm/SignInForm.tsx'

const SignIn = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid width={500}>
        <SignInForm />
      </Grid>
    </Grid>
  )
}

export default SignIn
