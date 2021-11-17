import React, {useState} from 'react'

import './css/global.scss'
import ItemList from "./components/ItemList/ItemList"

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      name: 'ООО «Ромашка»',
      open: false,
      FormOpen: false,
      showPassword: false,
      users: [
        {
          id: 1,
          name: 'Иванов Иван1',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)1111',
          status: false,
          formEditor: false,
          formDelete: false,
        },
        {
          id: 2,
          name: 'Иванов Иван2',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)22222',
          status: true,
          formEditor: false,
          formDelete: false,
        },
      ],
    },
    {
      id: 2,
      name: 'ООО «Ромашка2»',
      open: false,
      FormOpen: false,
      showPassword: false,
      users: [
        {
          id: 1,
          name: 'Иванов Иван33',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)123',
          status: false,
          formEditor: false,
          formDelete: false,
        },
        {
          id: 2,
          name: 'Иванов Иван555',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)6325',
          status: true,
          formEditor: false,
          formDelete: false,
        },
      ],
    },
    {
      id: 3,
      name: 'ООО «Ромашка3»',
      open: false,
      FormOpen: false,
      showPassword: false,
      users: [],
    },
    {
      id: 4,
      name: 'ООО «Ромашка4»',
      open: false,
      FormOpen: false,
      showPassword: false,
      users: [],
    },
  ])

  const clickCompany = (id) => {
    // const contentCopy = [...content]
    // const item = contentCopy.find(i => i.id === id)
    // console.log(item)

    const contentCopy = content.map(item => {
      if (item.id === id) {
        item.open = !item.open
        if (item.FormOpen === true) {
          item.FormOpen = false
        }
      }

      return item
    })

    setContent(contentCopy)
  }

  const clickForm = (id) => {
    const contentCopy = content.map(item => {
      if (item.id === id) {
        item.FormOpen = !item.FormOpen
      }

      return item
    })

    setContent(contentCopy)
  }

  const userEditToggle = (idCompany, idUser) => {
    const contentCopy = content.map(item => {
      if (item.id === idCompany) {
        item.users = item.users.map(user => {
          if (user.id === idUser) {
            user.formEditor = !user.formEditor
          }

          return user
        })
      }

      return item
    })

    setContent(contentCopy)
  }

  const userAdd = (id, fields) => {
    const contentCopy = content.map(item => {
      if (item.id === id) {
        item.FormOpen = false

        item.users.push({
          id: item.users.length + 1,
          name: fields.name,
          email: fields.email,
          password: fields.password,
          role: 'Клиент',
          status: true,
          formEditor: false,
          formDelete: false,
        })
      }

      return item
    })

    setContent(contentCopy)
  }

  const userEdit = (idCompany, idUser, fields) => {
    const contentCopy = content.map(item => {
      if (item.id === idCompany) {
        item.users = item.users.map(user => {
          if (user.id === idUser) {
            user.formEditor = false
            user.name = fields.name
            user.email = fields.email
            user.password = fields.password
          }

          return user
        })
      }

      return item
    })

    setContent(contentCopy)
  }

  const userDelete = (idCompany, idUser) => {
    const contentCopy = content.map(item => {
      if (item.id === idCompany) {
        item.users = item.users.filter(i => i.id !== idUser)
      }

      return item
    })

    setContent(contentCopy)
  }

  return (
    <div className="container">
      {content && content.length ? content.map((item, index) => (
        <ItemList
          key={index}
          id={item.id}
          name={item.name}
          open={item.open}
          formOpen={item.FormOpen}
          clickCompany={clickCompany}
          clickForm={clickForm}
          userAdd={userAdd}
          userEdit={userEdit}
          userDelete={userDelete}
          userEditToggle={userEditToggle}
          users={item.users}
        />
      )) : null} 
    </div>
  )
}

export default App;
