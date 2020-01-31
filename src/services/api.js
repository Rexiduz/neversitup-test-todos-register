import axios from 'axios'

const endpoint = 'http://localhost:9000'

const apis = () => {
  return {
    user: {
      create(data) {
        const mock = {
          _id: '5e346c73359b5e0012163450',
          username: 'test',
          createdAt: '2020-01-31T18:05:39.817Z',
          updatedAt: '2020-01-31T18:05:39.817Z'
        }

        return true
          ? Promise.resolve({
              response: {
                data: mock
              }
            })
          : axios({
              method: 'post',
              url: endpoint + '/users/register/',
              data
            })
      }
    }
  }
}

export default apis()
