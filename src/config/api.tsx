import axios from "axios";

// import { getEnvVars } from "./env";

const {
  NODE_ENV,
  REACT_APP_API_BASE_URL_DEV,
  REACT_APP_API_BASE_URL_PROD,
  REACT_APP_THIS_DEVICE_IP,
} = process.env;

export const IS_DEV = NODE_ENV === "development";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
      navigator.userAgent
    );

    if (IS_DEV) {
      if (isMobile) {
        config.headers["X-Device-Type"] = "Mobile";
        // config.baseURL = `http://${REACT_APP_THIS_DEVICE_IP}:8080/api/`;
        config.baseURL = REACT_APP_API_BASE_URL_DEV;
        // config.baseURL = "http://laptop-env.eba-xd8ax2fn.eu-west-2.elasticbeanstalk.com/api/";
      } else {
        config.headers["X-Device-Type"] = "Computer";
        config.baseURL = REACT_APP_API_BASE_URL_DEV;
        // config.baseURL = `http://${REACT_APP_THIS_DEVICE_IP}:8080/api/`;
        //  config.baseURL = "https://corruptlaptop-2cedf4105f7a.herokuapp.com/api/";
        //config.baseURL = "http://laptop-env.eba-xd8ax2fn.eu-west-2.elasticbeanstalk.com/api/";
      }
    } else {
      if (isMobile) {
        config.headers["X-Device-Type"] = "Mobile";
      } else {
        config.headers["X-Device-Type"] = "Computer";
      }

      config.baseURL = "https://corruptlaptop-2cedf4105f7a.herokuapp.com/api/";
    }

    return config;
  },
  (error) => {
    console.log("error from axios interceptor");
    return Promise.reject(error);
  }
);

export default instance;
