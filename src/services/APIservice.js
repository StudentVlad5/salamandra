import axios from 'axios';
import PropTypes from 'prop-types';

// const { BASE_URL } = window.global;
// const BASE_URL = "https://";
// const BASE_URL = 'http://localhost:3030/api';
const BASE_URL = 'https://salamandrabackend.studentvlad5.repl.co/api';

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });

  return await axiosInstance.get();
}

async function updateUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('email', body.email);
  formData.append('birthday', body.birthday);
  formData.append('location', body.location);
  formData.append('phone', body.phone);
  formData.append('role', body.role);
  formData.append('userName', body.userName);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function createUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('userName', body.userName);
  formData.append('email', body.email);
  formData.append('password', body.password);
  formData.append('phone', body.phone);
  formData.append('birthday', body.birthday);
  formData.append('location', body.location);
  formData.append('role', body.role);

  return await axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function fetchServiceData(pathParams, body, file) {
  const formData = new FormData();
  formData.append('article', body.article);
  formData.append('product', body.product);
  formData.append('category', body.category);
  formData.append('name', body.name);
  formData.append('latin_name', body.latin_name);
  formData.append('price', body.price);
  formData.append('currency', body.currency);
  formData.append('alcohol', body.alcohol);
  formData.append('details', body.details);
  // formData.append('images', file);
  file && formData.set('images', file);
  // formData.append('size', body.size);

  return await axios.get(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function updateServiceData(pathParams, body, file) {
  const formData = new FormData();
  formData.append('article', body.article);
  formData.append('product', body.product);
  formData.append('category', body.category);
  formData.append('name', body.name);
  formData.append('latin_name', body.latin_name);
  formData.append('price', body.price);
  formData.append('currency', body.currency);
  formData.append('alcohol', body.alcohol);
  formData.append('details', body.details);
  // formData.append('images', file);
  file && formData.set('images', file);
  // formData.append('size', body.size);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function createServiceData(pathParams, body, file) {
  const formData = new FormData();
  formData.append('article', body.article);
  formData.append('product', body.product);
  formData.append('category', body.category);
  formData.append('name', body.name);
  formData.append('latin_name', body.latin_name);
  formData.append('price', body.price);
  formData.append('currency', body.currency);
  formData.append('alcohol', body.alcohol);
  formData.append('details', body.details);
  // formData.append('images', file);
  file && formData.set('images', file);
  // formData.append('size', body.size);

  return await axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function deleteData(pathParams) {
  const formData = new FormData();
  return axios.delete(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function changePassword(pathParams, body) {
  const formData = new FormData();
  formData.append('password', body);
  return axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

deleteData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

updateUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

createUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

fetchServiceData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

updateServiceData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

createServiceData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

export {
  fetchData,
  fetchServiceData,
  updateUserData,
  createUserData,
  createServiceData,
  updateServiceData,
  deleteData,
  changePassword,
};
