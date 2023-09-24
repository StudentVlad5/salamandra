import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { logIn } from 'redux/auth/operations';
import schemas from 'utils/schemas';
import theme from 'components/baseStyles/Variables.styled';
import {
  FormStyled,
  FormContainer,
  Input,
  Btn,
  Title,
  ShowPassword,
  StyledLink,
  BoxText,
  IconValid,
  IconInValid,
  ErrorBox,
  Div,
  BtnContainer,
  Span,
} from './Forms.styled';

export const Login = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    setIsLoading(true);
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      }),
      hideForm()
    );
    setIsLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemas.schemasLogin,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    formik.values.email === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.darkGreen}`;
  };
  return (
    <FormContainer>
      <Formik validationSchema={schemas.schemasLogin}>
        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
          <Title>Login Page</Title>
          {isShown && (
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.email,
                    formik.errors.email
                  ),
                }}
                name="email"
                type="email"
                validate={schemas.schemasLogin.email}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {!formik.values.email ? null : !formik.errors.email ? (
                <IconValid color={theme.colors.green} />
              ) : (
                <IconInValid color={theme.colors.red} />
              )}
              {formik.errors.email || formik.touched.email ? (
                <ErrorBox>{formik.errors.email}</ErrorBox>
              ) : null}
              <Span className="floating-label">Email</Span>
            </Div>
          )}

          {isShown && (
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.password,
                    formik.errors.password
                  ),
                }}
                name="password"
                type={showPass ? 'text' : 'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />

              <ShowPassword onClick={showPassword}>
                {!showPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {formik.errors.password && formik.touched.password ? (
                <ErrorBox>{formik.errors.password}</ErrorBox>
              ) : null}
              <Span className="floating-label">Password</Span>
            </Div>
          )}
          <BtnContainer>
            {isShown && (
              <Btn type="submit" disabled={isValid} aria-label="submit sign in">
                {isLoading ? 'Loading' : 'Sign In'}
              </Btn>
            )}

            {!isShown && (
              <Btn type="submit">{isLoading ? 'Loading' : 'Sign In'}</Btn>
            )}
            <BoxText>
              <StyledLink to="/register">Create account</StyledLink>
              {/* <StyledLink to="/forgot_password">
                Forgot your password?
              </StyledLink> */}
            </BoxText>
          </BtnContainer>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
