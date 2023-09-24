import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { createServiceData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { setImage } from 'utils/setimage';
import {
  Backdrop,
  CloseBtn,
  DoneBtn,
  Error,
  FormField,
  FormInput,
  FormInputFile,
  FormLabel,
  FormList,
  Modal,
  ModalForm,
} from './Modal.styled';

export const CreateModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  async function createService(values) {
    const file = document.querySelector('#images')?.files[0];
    setIsLoading(true);
    try {
      const { code } = await createServiceData(`/admin/create`, values, file);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
    }
  }

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  return createPortal(
    Object.values(modal)[0] === 'admin_create' && (
      <Backdrop
        onClick={e => {
          if (e.currentTarget === e.target) closeDataModal(e);
        }}
      >
        <Modal onClick={e => e.stopPropagation()}>
          <CloseBtn
            type="button"
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose size={15} />
          </CloseBtn>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <Formik
            initialValues={{
              article: '',
              product: '',
              category: '',
              name: '',
              price: '',
              currency: '',
              latin_name: '',
              alcohol: [],
              details: [],
              images: '',
              //   size: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              createService(values);
              dispatch(addReload(false));
              setSubmitting(false);
              closeDataModal();
            }}
            enableReinitialize={true}
          >
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <ModalForm
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="article">Article</FormLabel>
                    <FormInput
                      id="article"
                      type="text"
                      name="article"
                      placeholder="Position article"
                      value={values.article}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="product">
                      <span>Product</span>
                      {errors.product && touched.product ? (
                        <Error>{errors.product}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="product"
                      name="product"
                      placeholder="Position product"
                      value={values.product}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="category">
                      <span>Category</span>
                      {errors.category && touched.category ? (
                        <Error>{errors.category}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Position category"
                      value={values.category}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="name">
                      <span>Name</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Position name"
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="latin_name">
                      <span>Latin name</span>
                      {errors.latin_name && touched.latin_name ? (
                        <Error>{errors.latin_name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="latin_name"
                      name="latin_name"
                      placeholder="Position latin_name"
                      value={values.latin_name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="alcohol">
                      <span>Alcohol</span>
                      {errors.alcohol && touched.alcohol ? (
                        <Error>{errors.alcohol}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="alcohol"
                      name="alcohol"
                      placeholder="Position alcohol"
                      value={values.alcohol}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="details">
                      <span>Details</span>
                      {errors.details && touched.details ? (
                        <Error>{errors.details}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="details"
                      name="details"
                      placeholder="Position details"
                      value={values.details}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="price">
                      <span>Price</span>
                      {errors.price && touched.price ? (
                        <Error>{errors.price}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Position price"
                      value={values.price}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="currency">
                      <span>Currency</span>
                      {errors.currency && touched.currency ? (
                        <Error>{errors.currency}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="currency"
                      name="currency"
                      placeholder="Position currency"
                      value={values.currency}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="images">
                      <span>Image</span>
                      {errors.images && touched.images ? (
                        <Error>{errors.images}</Error>
                      ) : null}
                    </FormLabel>
                    {values.images ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${values.images})`,
                          backgroundSize: '20px ,20px',
                        }}
                        type="file"
                        id="images"
                        name="images"
                        placeholder="Type images"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setImage(e);
                        }}
                      />
                    ) : (
                      <FormInputFile
                        type="file"
                        id="images"
                        name="images"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setImage(e);
                        }}
                      />
                    )}
                  </FormField>
                  {/* <FormField>
                    <FormLabel htmlFor="size">
                      <span>Size</span>
                      {errors.size && touched.size ? (
                        <Error>{errors.size}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="size"
                      name="size"
                      placeholder="Position size"
                      value={values.size}
                    />
                  </FormField> */}
                </FormList>

                <DoneBtn
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  <MdDone size={15} />
                </DoneBtn>
              </ModalForm>
            )}
          </Formik>
        </Modal>
      </Backdrop>
    ),
    document.querySelector('#popup-root')
  );
};
