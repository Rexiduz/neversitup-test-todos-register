import axios from 'axios'

const endpoint = 'http://35.198.226.130:9000'

const apis = () => {
  return {
    user: {
      create(data) {
        return axios({
          method: 'post',
          url: endpoint + '/users/register/',
          data
        })
      }
    }
  }
}

export default apis()
