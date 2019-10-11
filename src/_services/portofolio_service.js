import axios from "axios";
import { configConstants } from "../_constants/config_constant";
const { urlApi, headers } = configConstants;

export const portofolioService = {
    getPortofolio
};

function getPortofolio() {
    return axios.get(`${urlApi}portofolio`, { headers }).then(res => {
        return res.data;
    });
}
