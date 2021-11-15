import React from "react"
import classes from "./FormEditor.module.scss"

export default function FormEditor({id, formOpen, clickForm, fields, changeFieldsForm, showPassword, toggleShowPassword, send}) {
    return (
        <div className={classes.FormPlus}
            data-open={formOpen ? "Y" : null}>
            <div className={classes.Top}>
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillrule="evenodd" cliprule="evenodd" d="M19 6.5V9.5C19 13.0899 16.0899 16 12.5 16C8.91015 16 6 13.0899 6 9.5V6.5C6 2.91015 8.91015 0 12.5 0C16.0899 0 19 2.91015 19 6.5ZM12.5 14C14.9853 14 17 11.9853 17 9.5V6.5C17 4.01472 14.9853 2 12.5 2C10.0147 2 8 4.01472 8 6.5V9.5C8 11.9853 10.0147 14 12.5 14ZM9 20H11C11.5523 20 12 19.5523 12 19C12 18.4477 11.5523 18 11 18H9C4.02944 18 0 22.0294 0 27V31C0 31.5523 0.447715 32 1 32H11C11.5523 32 12 31.5523 12 31C12 30.4477 11.5523 30 11 30H2V27C2 23.134 5.13401 20 9 20ZM20.4 30.4H14V24L24 14L30.4 20.4L20.4 30.4ZM16 28.4H19.6L16 24.8V28.4ZM21 27L17.4 23.4L21.5 19.3L25.1 22.9L21 27ZM22.9 17.9L26.5 21.5L27.6 20.4L24 16.8L22.9 17.9Z" fill="white"/>
                </svg>
                <p className={classes.Title}>Редактирование учетной записи пользователя</p>
            </div>

            <form action="#">
                <div className={classes.WrapFormPlus}>
                    <div className={classes.WrapInput + ' ' + classes.Login}>
                        <span>Логин пользователя:</span>

                        <input
                            type="text"
                            value={fields.name}
                            onChange={(event) => changeFieldsForm(id, 'name', event.target.value)}
                        />
                    </div>

                    <div className={classes.WrapInput + ' ' + classes.Email}>
                        <span>Электронная почта:</span>

                        <input
                            type="text"
                            value={fields.email}
                            onChange={(event) => changeFieldsForm(id, 'email', event.target.value)}
                        />
                    </div>

                    <div className={classes.WrapInput + ' ' + classes.Password}>
                        <span>Пароль:</span>

                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={fields.password}
                            onChange={(event) => changeFieldsForm(id, 'password', event.target.value)}
                        />

                        <span
                            className={classes.TypeSelect}
                            onClick={() => toggleShowPassword(id)}
                        >
                            <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M29.0849 10C29.0251 9.87805 23.3996 2.43902 15.5 2.43902C7.60039 2.43902 1.9749 9.87805 1.91506 10L0 8.47561L0.0188636 8.45134L0.0188647 8.45134C0.464041 7.87691 6.56853 0 15.5 0C24.4315 0 30.536 7.87693 30.9811 8.45134L31 8.47561L29.0849 10ZM22 12.5C22 8.90179 19.0982 6 15.5 6C11.9018 6 9 8.90179 9 12.5C9 16.0982 11.9018 19 15.5 19C19.0402 19 21.942 16.0982 22 12.5ZM15.5 17C17.9375 17 20 15 20 12.5C20 10 17.9375 8 15.5 8C13 8 11 10 11 12.5C11 14.9375 13 17 15.5 17Z" fill="#BECBDC"/>
                            </svg>
                        </span>
                    </div>

                    <button
                        type="submit"
                        onClick={() => send(id)}
                    >Создать</button>
                </div>
            </form>
        </div>
    )
}