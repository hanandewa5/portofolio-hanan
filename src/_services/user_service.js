import axios from "axios";
import { configConstants } from "../_constants/config_constant";
const { urlApi, headers } = configConstants;

export const userService = {
    getUsers
};

function getUsers() {
    return axios.get(`${urlApi}users`, { headers }).then(res => {
        return res.data;
    });
}
