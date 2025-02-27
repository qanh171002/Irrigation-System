import { useState } from "react"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        if (!email || !password) return;
        if(email === 'test@gmail.com' && password === '123456') navigate('/dashboard')
        // try {
        //     const response = await login({
        //         email,
        //         password,
        //     })
        //     }
        // catch (error) {
        //     setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
        //     console.error(error)
        }

    return (
        <Form onSubmit={handleSubmit}>
         <FormRow  label="Email address">
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
         </FormRow>
         <FormRow label="Password">
          <Input
           type="password"
           id="password"
           autoComplete="current-password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
         </FormRow>
         <FormRow>
         <Button size="large" className='w-full'>Log in</Button>
         </FormRow>
         
        </Form>
    )
}

export default LoginForm
