import React from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'

// COMPONENTS
import { Modal, notification as noti, Icon } from 'antd'
import RegisTestForm from './Form'

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const bgGradient = css`
  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
  ${bgGradient}
`
const Card = styled.div`
  ${flexCenter}
  flex-direction: column;
  max-width: 500px;
  width: 60vw;
  height: 40vh;
  border-radius: 8px;
  background: white;
`

const FormWrapper = styled.div`
  width: 80%;

  form {
    > .ant-row.ant-form-item {
      :last-child {
        > * {
          text-align: center;
        }
      }
    }
  }

  button {
    width: 40%;
    height: 40px;
  }
`

const apis = () => {
  const endpoint = 'http://localhost:9000'

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

export default function App() {
  const API = apis()
  const onSubmit = async (values, form) => {
    try {
      const { response: { data } = {} } = await API.user.create(values)
      if (data) {
        form.resetFields()
        Modal.success({
          centered: true,
          title: 'Your account created successfully',
          content: (
            <div>
              สร้าง Account ของคุณสำเร็จ! กรุณาใช้
              <div>
                <br />
                Username: {values['username']}
                <br />
                Password:{' '}
                {values['password']
                  .split('')
                  .reduce(
                    (a, c) =>
                      a.length < 2 || (a.length > 6 && a.length < 9)
                        ? a + c
                        : a + '*',
                    ''
                  )}
              </div>
              <br />
              นี้ ในการ login ตอนสร้าง Login page เพื่อรับ Jwt token
              ในการเรียกใช้ API อื่นๆ
            </div>
          )
        })
      }
    } catch (error) {
      noti.error({
        message: 'Something went wrong!?',
        description: error.message || 'Please re-check form and try again.'
      })
    }
  }

  return (
    <Container>
      <Card>
        <h2>
          <Icon type={'user'} /> Create Account
        </h2>
        <FormWrapper>
          <RegisTestForm onSubmit={onSubmit} />
        </FormWrapper>
      </Card>
    </Container>
  )
}
