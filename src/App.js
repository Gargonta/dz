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
      fields: {
        name: '111',
        email: '23123',
        password: '',
      },
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
      fields: {
        name: '222',
        email: '',
        password: '',
      },
      showPassword: false,
      users: [
        {
          id: 1,
          name: 'Иванов Иван33',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)123',
          status: false,
        },
        {
          id: 2,
          name: 'Иванов Иван555',
          email: 'test@test.ru',
          password: '',
          role: 'Клиент (аналитик)6325',
          status: true,
        },
      ],
    },
    {
      id: 3,
      name: 'ООО «Ромашка3»',
      open: false,
      FormOpen: false,
      fields: {
        name: '333',
        email: '',
        password: '',
      },
      showPassword: false,
    },
    {
      id: 4,
      name: 'ООО «Ромашка4»',
      open: false,
      FormOpen: false,
      fields: {
        name: '444',
        email: '',
        password: '',
      },
      showPassword: false,
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

  const changeFieldsForm = (id, name, value) => {
    // const fieldsCopy = {...fields}
    // fieldsCopy[name] = value
    // setFields(fieldsCopy)

    const contentCopy = content.map(item => {
      if (item.id === id) {
        item.fields[name] = value
      }

      return item
    })

    setContent(contentCopy)
  }

  const toggleShowPassword = (id) => {
    const contentCopy = content.map(item => {
      if (item.id === id) {
        item.showPassword = !item.showPassword
      }

      return item
    })

    setContent(contentCopy)
  }

  const send = (id) => {
    const item = content.find(i => i.id === id)
    console.log(item.fields)
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
          fields={item.fields}
          changeFieldsForm={changeFieldsForm}
          showPassword={item.showPassword}
          toggleShowPassword={toggleShowPassword}
          send={send}
          users={item.users}
        />
      )) : null} 
    </div>
  )
}

export default App;
