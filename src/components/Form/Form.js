import React, {useState} from "react"
import classes from "./Form.module.scss"

export default function Form({id, userAdd}) {
    const [showPassword, setShowPassword] = useState(false)

    const [fields, setFields] = useState({
        name: '',
        email: '',
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
            userAdd(id, fields)
        }
    }

    return (
        <div className={classes.FormPlus}>
            <div className={classes.Top}>
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5V6.5C19 2.91015 16.0899 0 12.5 0C8.91015 0 6 2.91015 6 6.5V9.5C6 13.0899 8.91015 16 12.5 16C16.0899 16 19 13.0899 19 9.5ZM17 9.5C17 11.9853 14.9853 14 12.5 14C10.0147 14 8 11.9853 8 9.5V6.5C8 4.01472 10.0147 2 12.5 2C14.9853 2 17 4.01472 17 6.5V9.5ZM11 20H9C5.13401 20 2 23.134 2 27V30H11C11.5523 30 12 30.4477 12 31C12 31.5523 11.5523 32 11 32H1C0.447715 32 0 31.5523 0 31V27C0 22.0294 4.02944 18 9 18H11C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20ZM14 25C14 21.134 17.134 18 21 18C24.866 18 28 21.134 28 25C28 28.866 24.866 32 21 32C17.134 32 14 28.866 14 25ZM16 25C16 27.7614 18.2386 30 21 30C22.3261 30 23.5979 29.4732 24.5355 28.5355C25.4732 27.5979 26 26.3261 26 25C26 22.2386 23.7614 20 21 20C18.2386 20 16 22.2386 16 25ZM22 24H24C24.5523 24 25 24.4477 25 25C25 25.5523 24.5523 26 24 26H22V28C22 28.5523 21.5523 29 21 29C20.4477 29 20 28.5523 20 28V26H18C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24H20V22C20 21.4477 20.4477 21 21 21C21.5523 21 22 21.4477 22 22V24Z" fill="white"/>
                </svg>
                <p className={classes.Title}>Создание учетной записи пользователя</p>
            </div>

            <div>
                <div className={classes.WrapFormPlus}>
                    <div className={classes.WrapInput + ' ' + classes.Login}>
                        <span>Логин пользователя:</span>

                        <input
                            type="text"
                            value={fields.name}
                            onChange={(event) => changeFields('name', event.target.value)}
                        />
                    </div>

                    <div className={classes.WrapInput + ' ' + classes.Email}>
                        <span>Электронная почта:</span>

                        <input
                            type="text"
                            value={fields.email}
                            onChange={(event) => changeFields('email', event.target.value)}
                        />
                    </div>

                    <div className={classes.WrapInput + ' ' + classes.Password}>
                        <span>Пароль:</span>

                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={fields.password}
                            onChange={(event) => changeFields('password', event.target.value)}
                        />

                        <span
                            className={classes.TypeSelect}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M29.0849 10C29.0251 9.87805 23.3996 2.43902 15.5 2.43902C7.60039 2.43902 1.9749 9.87805 1.91506 10L0 8.47561L0.0188636 8.45134L0.0188647 8.45134C0.464041 7.87691 6.56853 0 15.5 0C24.4315 0 30.536 7.87693 30.9811 8.45134L31 8.47561L29.0849 10ZM22 12.5C22 8.90179 19.0982 6 15.5 6C11.9018 6 9 8.90179 9 12.5C9 16.0982 11.9018 19 15.5 19C19.0402 19 21.942 16.0982 22 12.5ZM15.5 17C17.9375 17 20 15 20 12.5C20 10 17.9375 8 15.5 8C13 8 11 10 11 12.5C11 14.9375 13 17 15.5 17Z" fill="#BECBDC"/>
                            </svg>
                        </span>
                    </div>

                    <button
                        type="submit"
                        onClick={sendForm}
                    >Создать</button>
                </div>
            </div>
        </div>
    )
}