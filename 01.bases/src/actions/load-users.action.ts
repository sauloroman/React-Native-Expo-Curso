import axios from "axios"

export const loadUsersAction = async ( page: number ) => {
  try {

    const {data} = await axios.get(`https://reqres.in/api/users`, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      params: {
        page: page
      }
    })

    return data.data

  } catch(error) {
    console.error(error)
    return []
  }
}