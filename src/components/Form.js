import React from 'react'
import { Form, Icon, Input, Button } from 'antd'

const NormalLoginForm = ({ form, onSubmit = () => {} }) => {
  const { getFieldDecorator } = form
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values, form)
      }
    })
  }

  const validatPassword = (rule, value, callback) => {
    if (!value) return callback('Please input your Password!')
    if (value.length < 8)
      return callback('Password length must more than 8 characters')
    return callback()
  }

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: 'Please input your username!'
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            {
              validator: validatPassword
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm)
