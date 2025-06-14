import axios from 'axios';

const API_BASE = 'https://testing-api.ru-rating.ru';


export const fetchCars = async (page: number, sort?: string, order?: 'asc' | 'desc') => {
    const params = new URLSearchParams({
        _limit: '12',
        _page: page.toString(),
        ...(sort && { _sort: sort }),
        ...(order && { _order: order })
    });

    const response = await axios.get(`${API_BASE}/cars?${params}`);
    const data = response.data;
    return {
        cars: data.data,
        meta: {
            totalPages: Math.ceil(response.headers['x-total-count'] / 12),
            currentPage: page
        }
    };
};