import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    //inside server
    
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    //inside browser

    return axios.create({
      baseURL: '/'
    });
  }

  // return axios.create({
  //   baseURL: 'http://ticketing.dev'
  // })

}