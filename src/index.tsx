import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './configs/routes';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';
import './index.less';
import { message } from 'antd';
import { API_URL } from './constants/general';

Axios.defaults.headers.common['Accept'] = 'application/json';
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.baseURL = API_URL;

Axios.interceptors.request.use(
  async (config) => {
    const token = "";
    if (!token) {
      return config;
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = 'application/json';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    message.destroy();
    if (error.response?.data?.errors) {
      console.log(error.response.data.errors);
    } else {
      message.warning(error.response?.data?.message ?? error.message);
    }
    if (error.response?.status === 401) {
      console.log('401 error');
    //   authToken.clearAll();
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
