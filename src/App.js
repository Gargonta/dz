import React from 'react'

import './App.scss'
import Item from "./components/Item/Item"
import ItemList from "./components/ItemList/ItemList"

function App() {
  const content = [
    {
      date: '03.06.2020',
      site: 'utinet.ru',
      text: '<p>Статья рассматривает такую структурную и семантическую единицу драматургического текста, как реплика, которая реализуется, будучи связанной с тремя другими компонентами текста: монологом.</p>',
      status: 'Открыть согласование',
      statusId: 1,
    },
    {
      date: '03.06.2020',
      site: 'utinet.ru',
      text: '<p>Статья рассматривает такую структурную и семантическую единицу драматургического текста, как реплика, которая реализуется, будучи связанной с тремя другими компонентами текста: монологом.</p>',
      status: 'Создана',
      statusId: 2,
    },
    {
      date: '03.06.2020',
      site: 'utinet.ru',
      text: '<p>Статья рассматривает такую структурную и семантическую единицу драматургического текста, как реплика, которая реализуется, будучи связанной с тремя другими компонентами текста: монологом.</p>',
      status: 'Ожидает согласования',
      statusId: 3,
    },
    {
      date: '03.06.2020',
      site: 'utinet.ru',
      text: '<p>Статья рассматривает такую структурную и семантическую единицу драматургического текста, как реплика, которая реализуется, будучи связанной с тремя другими компонентами текста: монологом.</p>',
      status: 'Отклонено',
      statusId: 4,
    },
    {
      date: '03.06.2020',
      site: 'utinet.ru',
      text: '<p>Статья рассматривает такую структурную и семантическую единицу драматургического текста, как реплика, которая реализуется, будучи связанной с тремя другими компонентами текста: монологом.</p>',
      status: 'На размещении',
      statusId: 5,
    },
  ]

  const company = [
  {
    name: 'ООО «Ромашка»',
    status: '',
    poststatus: '',
    id: '1',
  },
    {
    name: 'ООО «Ромашка2»',
    status: 'active',
    poststatus: '',
    id: '2',
  },
    {
    name: 'ООО «Ромашка3»',
    status: '',
    poststatus: 'open',
    id: '3',
  },
    {
    name: 'ООО «Ромашка4»',
    status: 'active',
    poststatus: 'open',
    id: '4',
  },
  ]

  return (
    <div className="container">
  {/*   {content && content.length ? content.map((item, index) => (
        <Item
          key={index}
          date={item.date}
          site={item.site}
          text={item.text}
          status={item.status}
          statusId={item.statusId}
        />
      )) : null} 
  */}

  {company && company.length ? company.map((item, index) => (
        <ItemList
          key={index}
          name={item.name}
          status={item.status}
          poststatus={item.poststatus}
          id={item.id}
        />
      )) : null} 
    </div>
  )
}

export default App;
