import axios from "axios";

const baseUrl = "https://localhost:44311/api/Data"

export default {
    getData(url = baseUrl) {
        return {
            fetchAll: () => axios.get(url),           
        }
    }
}