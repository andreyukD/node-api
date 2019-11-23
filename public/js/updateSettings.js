/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      url: url,
      method: 'PATCH',
      data: data
    });

    //console.log(res.data);
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} successfully updated`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
