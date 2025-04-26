import axiosClient from "./axiosClient";

const handleAPI = (url, method = 'get', data, config = {}) => {
    return axiosClient({
        url,
        method,
        data,
        ...config,
    })
}
export default handleAPI;