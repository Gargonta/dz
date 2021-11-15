import React from "react"
import classes from "./FormDelete.module.scss"

export default function FormDelete({id, formOpen, clickForm, fields, changeFieldsForm, showPassword, toggleShowPassword, send}) {
    return (
        <div className={classes.FormDelete}
            // data-open={FormDelete ? "Y" : null}>
            <div className={classes.Top}>
                <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.5V9.5C19 13.0899 16.0899 16 12.5 16C8.91015 16 6 13.0899 6 9.5V6.5C6 2.91015 8.91015 0 12.5 0C16.0899 0 19 2.91015 19 6.5ZM12.5 14C14.9853 14 17 11.9853 17 9.5V6.5C17 4.01472 14.9853 2 12.5 2C10.0147 2 8 4.01472 8 6.5V9.5C8 11.9853 10.0147 14 12.5 14ZM9 20H11C11.5523 20 12 19.5523 12 19C12 18.4477 11.5523 18 11 18H9C4.02944 18 0 22.0294 0 27V31C0 31.5523 0.447715 32 1 32H11C11.5523 32 12 31.5523 12 31C12 30.4477 11.5523 30 11 30H2V27C2 23.134 5.13401 20 9 20ZM17.7226 18.3697L22.0924 22.7394L26.4621 18.3697L28.815 20.7226L24.4453 25.0924L28.815 29.4621L26.4621 31.815L22.0924 27.4453L17.7226 31.815L15.3697 29.4621L19.7394 25.0924L15.3697 20.7226L17.7226 18.3697Z" fill="white"/>
                </svg>

                <p className={classes.Title}>Удаление учетной записи пользователя</p>
            </div>
            <div className={classes.Main}>
                 <p className={classes.DeleteTitle}>Вы действительно хотите удалить пользователя <span>Sulevan — Менеджер (производство)<span> из системы?</p>
                 <button className={classes.No}>Нет</button>
                 <button className={classes.Yes}>Да</button>
            </div>
           
        </div>
    )
}