import React from 'react'

import API from 'services/api'
import { Container, Card, FormWrapper } from './AppStyled'

// COMPONENTS
import { Modal, notification as noti, Icon } from 'antd'
import RegisTestForm from 'components/Form'

export default function App() {
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
                {[...values['password']].reduce(
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
