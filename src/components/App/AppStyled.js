import styled, { css } from 'styled-components'

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

export { Container, Card, FormWrapper }
