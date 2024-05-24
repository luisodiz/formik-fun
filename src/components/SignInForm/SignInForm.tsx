import {TextField, Button} from '@mui/material'
import {Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import {
  signInWithEmailAndPassword,
  type AuthError,
  AuthErrorCodes,
} from 'firebase/auth'

import {auth} from '../../firebase/auth.ts'

const SignInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Неверный формат email адреса')
    .required('Поле обязательное'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6-ти символов')
    .required('Поле обязательное'),
})

const SignInForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={async ({email, password}, actions) => {
        try {
          await signInWithEmailAndPassword(auth, email, password)
          console.log('success')
        } catch (err) {
          if (
            (err as AuthError)?.code ===
            AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
          ) {
            actions.setFieldError('email', 'Неправильные Email или Пароль')
            actions.setFieldError('password', 'Неправильные Email или Пароль')
          }
          console.log(err)
        }
      }}
      validationSchema={SignInFormSchema}
    >
      {({handleChange, handleBlur, errors, touched}) => (
        <Form>
          <Field
            component={TextField}
            label="Email"
            fullWidth
            size="small"
            sx={{mb: 2}}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            name="email"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            component={TextField}
            label="Пароль"
            fullWidth
            size="small"
            sx={{mb: 2}}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            name="password"
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button fullWidth variant="contained" size="large" type="submit">
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
