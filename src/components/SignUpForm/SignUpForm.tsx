import {Field, Form, Formik} from 'formik'
import {Button, TextField} from '@mui/material'
import * as yup from 'yup'
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  type AuthError,
} from 'firebase/auth'

import {app} from '../../firebase/config.ts'

const nameRegex = new RegExp(/^[А-ЯЁ][а-яё]*$/)

const SignUpSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required('Поле обязательное')
    .min(2, 'Длина от 2-х до 20-ти символов')
    .test('first-symbol-is-uppercase', (value, ctx) => {
      if (!(value.trim() && value[0] === value[0].toUpperCase())) {
        return ctx.createError({
          message: 'Имя должно начинаться с заглавной буквы',
        })
      }

      if (!nameRegex.test(value)) {
        return ctx.createError({
          message: 'Имя должно использовать кириллицу',
        })
      }

      return true
    }),
  email: yup
    .string()
    .email('Неверный формат email адреса')
    .required('Поле обязательное'),
  password: yup
    .string()
    .min(2, 'Пароль должен быть не менее 6-ти символов')
    .required('Поле обязательное'),
  confirmPassword: yup
    .string()
    .min(2, 'Пароль должен быть не менее 6-ти символов')
    .test('password-match', 'Пароли не совпадают', function (value) {
      return this.parent.password === value
    })
    .required('Поле обязательное'),
})

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={async (values, helpers) => {
        try {
          const auth = getAuth(app)
          const {email, password} = values
          await createUserWithEmailAndPassword(auth, email, password)
          console.log('success')
          helpers.resetForm()
        } catch (err) {
          if ((err as AuthError)?.code === AuthErrorCodes.EMAIL_EXISTS) {
            helpers.setFieldError(
              'email',
              'Email адресс уже используется другим аккаунтом'
            )
          }
          if ((err as AuthError)?.code === AuthErrorCodes.INVALID_EMAIL) {
            helpers.setFieldError('email', 'Email указан неверно')
          }
          if ((err as AuthError)?.code === AuthErrorCodes.WEAK_PASSWORD) {
            helpers.setFieldError(
              'password',
              'Пароль должен быть не менее 6-ти символов'
            )
            helpers.setFieldError(
              'confirmPassword',
              'Пароль должен быть не менее 6-ти символов'
            )
          }
          console.log(err)
        }
      }}
      validationSchema={SignUpSchema}
    >
      {({values, errors, handleChange, handleBlur, touched}) => (
        <Form>
          <Field
            as={TextField}
            fullWidth
            label="Имя"
            value={values.fullName}
            error={Boolean(touched.fullName && errors.fullName)}
            helperText={touched.fullName && errors.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            name="fullName"
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Email"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            name="email"
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль"
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            name="password"
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль еще раз"
            value={values.confirmPassword}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            name="confirmPassword"
            sx={{mb: 2}}
            size="small"
          />
          <Button fullWidth variant="contained" size="large" type="submit">
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
