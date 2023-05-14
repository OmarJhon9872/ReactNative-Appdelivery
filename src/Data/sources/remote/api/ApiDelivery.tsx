import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: '192.168.1.96',
    headers: {
        'Content-Type': 'application/json'
    }
});

export { ApiDelivery }