import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null)
      const response = await axios[method](url, body);
      if  (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {

      const errors = error.response.data.errors?.map(err => {
        if (err.field) {
          return {
            [err.field]:
              <div className='alert alert-danger'>
                <ul className='my-0'>
                  <li key={err.message}>{err.message}</li>
                </ul>
              </div>
          }
        } else {
          return {
            'noField':
              <div className='alert alert-danger'>
                <ul className='my-0'>
                  <li key={err.message}>{err.message}</li>
                </ul>
              </div>
          }
        }
      })
      let obj = {};
      if (errors.length > 0) {
        errors.forEach(item => {
          for (let [key, value] of Object.entries(item)) {
            obj[key] = value
          }
        })
      }
      setErrors(obj);
    }
  }
  return { doRequest, errors };
};

