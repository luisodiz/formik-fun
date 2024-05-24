import {useState, type ReactNode} from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const PasswordField = (props: {helpertext?: ReactNode}) => {
  const [shownPass, setShownPass] = useState(false)

  const handleClickShowPassword = () => setShownPass(!shownPass)

  return (
    <FormControl variant="outlined" {...props}>
      <InputLabel>Пароль</InputLabel>
      <OutlinedInput
        type={shownPass ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {shownPass ?
                <VisibilityOff fontSize="small" />
              : <Visibility fontSize="small" />}
            </IconButton>
          </InputAdornment>
        }
        label="Пароль"
      />
      <FormHelperText>{props.helpertext}</FormHelperText>
    </FormControl>
  )
}

export default PasswordField
