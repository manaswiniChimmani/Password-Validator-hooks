// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: #475569;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
`

export const Sen = styled.p`
  color: #f8fafc;
  font-size: 13px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  outline: none;
  width: 70%;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
`
