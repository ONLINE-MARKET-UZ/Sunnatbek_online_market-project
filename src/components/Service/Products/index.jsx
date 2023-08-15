import axios from "../axios";

const productAPI = {
    getProducts: async function () {
        return axios.get("/products")
    }
}

export default productAPI;