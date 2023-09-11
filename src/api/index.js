import { handler } from "./handler";

export default ({
    loginAdmin: (body) => handler.post('/admin/auth/login', body),
    getCars: (queryParams) => handler.get('/admin/v2/car', {params: queryParams}),
    getCarById: (id, queryParams) => handler.get(`/admin/car/${id}`, {params: queryParams}),
    putCarById: (id, body) => handler.put(`/admin/car/${id}`, body)
});