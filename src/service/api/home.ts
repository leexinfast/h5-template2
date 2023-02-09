import service from '../request';

export function apiGetHomeData(params: any) {
    return service({
        url: '/home/getHomeData',
        method: 'get',
        data: params
    })
}

export function apiSubmit(params: any) {
    return service({
        url: '/home/submit',
        method: 'post',
        data: params
    })
}
