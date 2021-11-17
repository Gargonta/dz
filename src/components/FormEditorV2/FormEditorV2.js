import React, {useState} from "react"

export default function FormEditorV2({idCompany, idUser, userEdit, name, email}) {
    const [showPassword, setShowPassword] = useState(false)

    const [fields, setFields] = useState({
        name: name,
        email: email,
        password: '',
    })

    const changeFields = (name, value) => {
        const fieldsCopy = {...fields}
        fieldsCopy[name] = value
        setFields(fieldsCopy)
    }

    const sendForm = () => {
        const errors = []

        if (!fields.name.trim()) {
            errors.push('Заполните поле "Логин пользователя"')
        }

        if (!fields.email.trim()) {
            errors.push('Заполните поле "Электронная почта"')
        }

        if (!fields.password.trim()) {
            errors.push('Заполните поле "Пароль"')
        }

        if (errors.length) {
            alert(errors.join("\n"))
        } else {
            userEdit(idCompany, idUser, fields)
        }
    }

    return (
        <div>
            <input
                type="text"
                value={fields.name}
                onChange={(event) => changeFields('name', event.target.value)}
                placeholder="Логин пользователя"
            />

            <input
                type="text"
                value={fields.email}
                onChange={(event) => changeFields('email', event.target.value)}
                placeholder="Электронная почта"
            />

            <input
                type={showPassword ? 'text' : 'password'}
                value={fields.password}
                onChange={(event) => changeFields('password', event.target.value)}
                placeholder="Пароль"
            />

            <span onClick={() => setShowPassword(!showPassword)}>
                <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0849 10C29.0251 9.87805 23.3996 2.43902 15.5 2.43902C7.60039 2.43902 1.9749 9.87805 1.91506 10L0 8.47561L0.0188636 8.45134L0.0188647 8.45134C0.464041 7.87691 6.56853 0 15.5 0C24.4315 0 30.536 7.87693 30.9811 8.45134L31 8.47561L29.0849 10ZM22 12.5C22 8.90179 19.0982 6 15.5 6C11.9018 6 9 8.90179 9 12.5C9 16.0982 11.9018 19 15.5 19C19.0402 19 21.942 16.0982 22 12.5ZM15.5 17C17.9375 17 20 15 20 12.5C20 10 17.9375 8 15.5 8C13 8 11 10 11 12.5C11 14.9375 13 17 15.5 17Z" fill="#BECBDC"/>
                </svg>
            </span>

            <button
                type="submit"
                onClick={sendForm}
            >Сохранить</button>
        </div>
    )
}