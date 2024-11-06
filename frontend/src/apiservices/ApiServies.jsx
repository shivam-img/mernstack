import axios from "axios"
import { TOKEN_NAME } from "../constant";


const baseURL = "http://localhost:7777/api/v1"


export const getAPIAuth = async (url, tokenInit) => {
    // console.log("dsafyuahsd", url);
    const bURL = baseURL;
    const token = localStorage.getItem(TOKEN_NAME);
    // console.log("token from getapiAuth", token)
    try {
        const response = await axios.get(`${bURL}/${url}`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
            },
        });
        return response;
    } catch (error) {
        // console.log("error from  getApiAuth",error?.response?.data ,error?.response ,error );

        if (error?.response?.data?.message === "Invalid token") {
            // alert('getAPIAuth')
            localStorage.removeItem(TOKEN_NAME);
            localStorage.removeItem(ADMIN_FRONTEND_LOGGED_IN_ID);
            localStorage.removeItem(STOCK_USER_ID);
            // window.location.reload(true);
        }
        throw error;
    }
};


export const postAPIFormData = async (url, params) => {
    const bURL = baseURL;
    try {
        const response = await axios.post(`${bURL}/${url}`, params, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        throw error
    }
};

export const postAPI = async (url, params) => {
    const bURL = baseURL;
    try {
        const response = await axios.post(`${bURL}/${url}`, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
            },
        });
        return response;
    } catch (error) {
        console.log("error=>", error)
        throw error

    }
};

export const postAPIAuth = async (url, params, tokenInit) => {
    // const token = localStorage.getItem(TOKEN_NAME)
    const bURL = baseURL;
    const token = localStorage.getItem(TOKEN_NAME);
    try {
      const response = await axios.post(`${bURL}/${url}`, params, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
        },
      });
      return response;
    } catch (error) {
      if (error?.response?.data?.msg === "Invalid token") {
        // alert('postAPIAuth')
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem(ADMIN_FRONTEND_LOGGED_IN_ID);
        localStorage.removeItem(STOCK_USER_ID);
        // signOut(auth)
        //     .then(() => {
        //         // succesToaster("Logged Out")
        //     })
        //     .catch((error) => {
        //         // An error happened.
        //     });
        // window.location.reload(true);
      }
      // console.log("error=>", error);
      throw error;
    }
  };