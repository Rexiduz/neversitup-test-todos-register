import axios from 'axios'

const endpoint = 'https://candidate.neversitup.com'

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
