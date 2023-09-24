import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, updateServiceData } from 'services/APIservice'; //fetchServiceData,
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

export const EditModal = () => {
  const { BASE_URL_IMG } = window.global;

  const [dataUpdate, setDataUpdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/admin/${modal.id}`;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataUpdate(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (modal.id !== '' && modal.id !== undefined) {
      getData();
    }
  }, [itemForFetch, modal.id]);

  async function editPosition(values) {
    const file = document.querySelector('#images')?.files[0];
    setIsLoading(true);
    try {
      const { code } = await updateServiceData(
        `/admin/${modal.id}`,
        values,
        file
      );
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
    Object.values(modal)[0] === 'admin' && (
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
              article: dataUpdate?.article ? dataUpdate.article : '',
              product: dataUpdate?.product ? dataUpdate.product : '',
              category: dataUpdate?.category ? dataUpdate.category : '',
              name: dataUpdate?.name ? dataUpdate.name : '',
              price: dataUpdate?.price ? dataUpdate.price : '',
              currency: dataUpdate?.currency ? dataUpdate.currency : '',
              latin_name: dataUpdate?.latin_name ? dataUpdate.latin_name : '',
              alcohol: dataUpdate?.alcohol ? dataUpdate.alcohol : [],
              details: dataUpdate?.details ? dataUpdate.details : [],
              images: '',
              //   size: dataUpdate?.size ? dataUpdate.size : '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editPosition(values);
              dispatch(addReload(false));
              closeDataModal();
              setSubmitting(false);
            }}
            enableReinitialize={true}
          >
            {({
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <ModalForm
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={e => {
                  handleChange(e);
                }}
              >
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="article">
                      <span>Article</span>
                      {errors.article && touched.article ? (
                        <Error>{errors.article}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="article"
                      name="article"
                      placeholder="Type position article"
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
                      placeholder="Type position product"
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
                    <div style={{ position: 'relative' }}>
                      <FormInput
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Type category"
                        value={values.category}
                      />
                    </div>
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
                      placeholder="Type name"
                      value={values.name}
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
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Type position price"
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
                      placeholder="Type position currency"
                      value={values.currency}
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
                      placeholder="Type position latin_name"
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
                      placeholder="Type alcohol"
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
                      placeholder="Type details"
                      value={values.details}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="images">
                      <span>Image</span>
                      {errors.images && touched.images ? (
                        <Error>{errors.images}</Error>
                      ) : null}
                    </FormLabel>
                    {dataUpdate.images ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${
                            BASE_URL_IMG + dataUpdate.images
                          })`,
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
                    <div style={{ position: 'relative' }}>
                      <FormInput
                        type="text"
                        id="size"
                        name="size"
                        placeholder="Type size"
                        value={values.size}
                      />
                    </div>
                  </FormField> */}
                </FormList>

                <DoneBtn
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={e => closeDataModal(e)}
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
