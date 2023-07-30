import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{

        key: '6a1865dd9f4e4e5cb0766d7cb453fe06'
    }
})

/*import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{

        key: '6a1865dd9f4e4e5cb0766d7cb453fe06'
    }
})*/
