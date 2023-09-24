import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'utils/schemas';
import { register } from 'redux/auth/operations';
import { selectId } from 'redux/auth/selectors';
import { ModalInfo } from '../ModalInfo/ModalInfo';

import logo from 'images/hero/salamandra.png';
import theme from 'components/baseStyles/Variables.styled';
import {
  FormStyled,
  FormContainer,
  Input,
  Btn,
  Title,
  BackButton,
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

export const Register = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectId);
  // const [isOpenModal, setOpenModal] = useState(false);
  // const toggleOpenModal = () => setOpenModal(state => !state);

  const onSubmit = ({ values }) => {
    setIsLoading(true);
    const { name, email, password, phone } = values;
    dispatch(
      register({
        name,
        email,
        password,
        phone,
      })
    );
    setIsLoading(false);
  };

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
    validationSchema: schemas.registerSchema,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.braun}`
      : `${theme.colors.black}`;
  };

  return (
    <FormContainer>
      <NavLink to={'/'}>
        <img src={logo} width={42} height={42} alt="Logo" />
      </NavLink>
      <Formik validationSchema={schemas.registerSchema}>
        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
          <Title>Register</Title>
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
                value={formik.values.email}
                validate={schemas.registerSchema.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {!formik.values.email ? null : !formik.errors.email ? (
                <IconValid color={theme.colors.black} />
              ) : (
                <IconInValid color={theme.colors.braun} />
              )}
              {formik.errors.email && formik.touched.email ? (
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
          {isShown && (
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.confirmPassword,
                    formik.errors.confirmPassword
                  ),
                }}
                name="confirmPassword"
                type={showConfirmPass ? 'text' : 'password'}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
              <ShowPassword onClick={showConfirmPassword}>
                {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <ErrorBox>{formik.errors.confirmPassword}</ErrorBox>
              ) : null}
              <Span className="floating-label">Confirm Password</Span>
            </Div>
          )}
          {isShown && (
            <BtnContainer>
              <Btn type="button" onClick={showForm} disabled={isValid}>
                Next
              </Btn>
              <BoxText>
                <span>Already have an account?</span>
                <StyledLink to="/signin">Sign In</StyledLink>
              </BoxText>
            </BtnContainer>
          )}
          {!isShown && (
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.name,
                    formik.errors.name
                  ),
                }}
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {!formik.values.name ? null : !formik.errors.name ? (
                <IconValid color={theme.colors.black} />
              ) : (
                <IconInValid color={theme.colors.braun} />
              )}
              {formik.errors.name && formik.touched.name ? (
                <ErrorBox>{formik.errors.name}</ErrorBox>
              ) : null}
              <Span className="floating-label">Name</Span>
            </Div>
          )}
          {!isShown && (
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.phone,
                    formik.errors.phone
                  ),
                }}
                id="phone"
                type="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                name="phone"
              />
              {!formik.values.phone ? null : !formik.errors.phone ? (
                <IconValid color={theme.colors.black} />
              ) : (
                <IconInValid color={theme.colors.braun} />
              )}
              {formik.errors.phone && formik.touched.phone ? (
                <ErrorBox>{formik.errors.phone}</ErrorBox>
              ) : null}
              <Span className="floating-label">Mobile phone</Span>
            </Div>
          )}
          {!isShown && (
            <>
              <BtnContainer>
                <Btn type="submit" aria-label="submit registration">
                  {isLoading ? 'Loading' : 'Register'}
                </Btn>
                <BackButton
                  type="button"
                  aria-label="back button"
                  onClick={hideForm}
                >
                  Back
                </BackButton>
              </BtnContainer>
              <BoxText>
                <span>Already have an account?</span>
                <StyledLink to="/signin">LOG IN</StyledLink>
              </BoxText>
            </>
          )}
        </FormStyled>
      </Formik>
      {user !== null && <ModalInfo />}
    </FormContainer>
  );
};
