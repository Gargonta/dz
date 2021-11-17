import React from "react"
import classes from "./Users.module.scss"
import Form from "../../Form/Form"
import OneUser from "../../OneUser/OneUser"

export default function Users({id, formOpen, clickForm, userAdd, userEdit, userDelete, userEditToggle, users}) {
    return (

        <div className={classes.Users}>

            <div className={classes.ContentTop}>

                <p className={classes.Title}>ПОЛЬЗОВАТЕЛИ</p>

                <div className={classes.Plus}
                onClick={() => clickForm(id)}
                data-open={formOpen ? "Y" : null}
                >
                    <svg className={classes.in} width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5V6.5C19 2.91015 16.0899 0 12.5 0C8.91015 0 6 2.91015 6 6.5V9.5C6 13.0899 8.91015 16 12.5 16C16.0899 16 19 13.0899 19 9.5ZM17 9.5C17 11.9853 14.9853 14 12.5 14C10.0147 14 8 11.9853 8 9.5V6.5C8 4.01472 10.0147 2 12.5 2C14.9853 2 17 4.01472 17 6.5V9.5ZM11 20H9C5.13401 20 2 23.134 2 27V30H11C11.5523 30 12 30.4477 12 31C12 31.5523 11.5523 32 11 32H1C0.447715 32 0 31.5523 0 31V27C0 22.0294 4.02944 18 9 18H11C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20ZM14 25C14 21.134 17.134 18 21 18C24.866 18 28 21.134 28 25C28 28.866 24.866 32 21 32C17.134 32 14 28.866 14 25ZM16 25C16 27.7614 18.2386 30 21 30C22.3261 30 23.5979 29.4732 24.5355 28.5355C25.4732 27.5979 26 26.3261 26 25C26 22.2386 23.7614 20 21 20C18.2386 20 16 22.2386 16 25ZM22 24H24C24.5523 24 25 24.4477 25 25C25 25.5523 24.5523 26 24 26H22V28C22 28.5523 21.5523 29 21 29C20.4477 29 20 28.5523 20 28V26H18C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24H20V22C20 21.4477 20.4477 21 21 21C21.5523 21 22 21.4477 22 22V24Z" fill="white"/>
                    </svg>

                    <svg className={classes.out} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15C28 18.4478 26.6304 21.7544 24.1924 24.1924C21.7544 26.6304 18.4478 28 15 28ZM10.36 11H17C20.3137 11 23 13.6863 23 17C23 20.3137 20.3137 23 17 23H14V21H17C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13H10.41L12.41 15L11 16.38L7.33 12.73L6.59 12L7.33 11.2L11 7.52L12.41 8.94L10.36 11Z" fill="white"/>
                    </svg>
                </div>

                {formOpen ? (
                    <Form
                        id={id}
                        userAdd={userAdd}
                    />
                ) : null}
            </div>
            <table className={classes.TableContentItem}>
                <thead>
                <tr>
                    <th className={classes.Head1}>Логин пользователя:</th>
                    <th className={classes.Head2}>Роль</th>
                    <th className={classes.Head3} />
                    <th className={classes.Head4}>Статус</th>
                    <th className={classes.Head5} />
                </tr>
                </thead>
                <tbody>

                      {users && users.length ? users.map((item, index) => (
                            <OneUser
                              key={index}
                              idCompany={id}
                              idUser={item.id}
                              name={item.name}
                              email={item.email}
                              password={item.password}
                              role={item.role}
                              status={item.status}
                              formEditor={item.formEditor}
                              formDelete={item.formDelete}
                              userEdit={userEdit}
                              userDelete={userDelete}
                              userEditToggle={userEditToggle}
                            />
                          )) : null} 
                </tbody>
            </table>
        </div>
    )
}