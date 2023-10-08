import { useState } from 'react';
import Router from 'next/router';

import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password: pwd
    },
    onSuccess: () => Router.push('/')
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
      </div>
      {errors?.password}
      {errors?.noField}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  )


}