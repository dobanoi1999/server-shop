import Toast from 'component/shared/Toast/Toast'
import { useState } from 'react'


const useForm = (callback) => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [err, setErr] = useState("")

    const handleOnChange = e => {

        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
        setErr("")
    }

    const handleSubmit = e => {
        e.preventDefault()
        callback(values)
            .then(res => {

                if (res?.status === 500) return Toast.error()
                if (res?.status === 400) return setErr(res.data.msg)
                localStorage.setItem("token", res.token);

                localStorage.setItem("userid", res.userId)

                window.location.href = "/"

            })
            .catch(err => {
                console.log(err)
            })

    }
    return { handleOnChange, values, handleSubmit, err }
}

export default useForm
