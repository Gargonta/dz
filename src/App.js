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
    },
    {
      id: 2,
      name: 'ООО «Ромашка2»',
      open: false,
      FormOpen: false,
    },
    {
      id: 3,
      name: 'ООО «Ромашка3»',
      open: false,
      FormOpen: false,
    },
    {
      id: 4,
      name: 'ООО «Ромашка4»',
      open: false,
      FormOpen: false,
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
        />
      )) : null} 
    </div>
  )
}

export default App;
