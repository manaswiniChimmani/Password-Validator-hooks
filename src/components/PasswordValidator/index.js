// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  Card,
  Sen,
  Heading,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
    // const a = event.target.value.length
    // console.log(a)
    // if (a >= 8) {
    //   checkPassword(true)
    // } else if (a < 8) {
    //   checkPassword(false)
    // }
  }

  return (
    <BgContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Sen>Check how strong and secure is your password</Sen>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length >= 8 ? null : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </Card>
    </BgContainer>
  )
}
export default PasswordValidator
