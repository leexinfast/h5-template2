import axios from 'axios';
import { showToast } from 'vant';

const request = (options: any) => {
    return new Promise((resolve, reject) => {
        const service = axios.create({
            baseURL: '',
            timeout: 10000,
        })

        // request interceptor
        service.interceptors.request.use(
            (config: any) => {
                let token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = token;
                }
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        )

        // response interceptor
        service.interceptors.response.use(
            (response: any) => {
                return response.data;
            },
            (error: any) => {
                showToast(error.message);
                return Promise.reject(error);
            }
        )

        service(options).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export default request;
