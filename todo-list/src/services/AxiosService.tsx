import axios, {CreateAxiosDefaults} from "axios";

export class AxiosService {
    constructor() {
    }

    public create(config: CreateAxiosDefaults) {
        const axiosInstance = axios.create(config);
        axiosInstance.interceptors.response.use((response) => response, (error) => {
            console.log(error + " Dangerous response");
            return Promise.resolve(null);
        })
        return axiosInstance;
    };
}