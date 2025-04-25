import axiosClient from "./axiosClient";

const handleAPI = (uri, method='get', data) => {
    return axiosClient({
        uri,
        method,
        data
    })
}
export default handleAPI;