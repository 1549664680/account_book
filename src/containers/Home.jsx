import React from 'react';
import logo from '../logo.svg';
import PriceList from '../components/PriceList.jsx'
import ViewTab from '../components/ViewTab.jsx'
import MonthPicker from '../components/MonthPicker.jsx'
import TotalPrice from '../components/TotalPrice.jsx'
import CreateBtn from '../components/CreateBtn.jsx'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth } from '../utility'

const categoies = {
  "1": {
    id: "1",
    name: "旅行",
    type: "outcome",
    iconName: "ios-plane"
  },
  "2": {
    id: "2",
    name: "工资",
    type: "income",
    iconName: "logo-yen"
  }
}
const items = [
  {
    id: 1,
    title: "去云南",
    price: 200,
    date: "2018-09-10",
    cid: 1
  },
  {
    id: 2,
    title: "发工资",
    price: 200,
    date: "2019-09-10",
    cid:2
  },
  {
    id: 2,
    title: "理财",
    price: 10000,
    date: "2020-09-10",
    cid:2
  }
]
function Home() {
  let currentDate = parseToYearAndMonth()
  let tabView = LIST_VIEW
  let totalIncome = 0, totalOutcome = 0;
  const itemsWithCategory = items.map((item)=>{
    item.category = categoies[item.cid]
    return item
  })
  itemsWithCategory.forEach(item => {
    if (item.category.type === TYPE_OUTCOME) {
      totalOutcome += item.price
    } else {
      totalIncome += item.price
    }
  })
  return (
    <React.Fragment>
      <header className="App-header">
        <div className="row mb-5">
          <img src={logo} alt="logo" className="App-logo" />
        </div>
        <div className="row">
          <div className="col">
            <MonthPicker
              year={currentDate.year}
              month={currentDate.month}
            />
          </div>
          <div className="col">
            <TotalPrice
              income={totalIncome}
              outcome={totalOutcome}
            />
          </div>
        </div>
      </header>
      <div className="content-area py-3 px 3">
        <ViewTab
          activeTab={tabView}
          ontabChange={(view) => { alert(view) }}
        />
        <CreateBtn
          onClick={() => { }}
        />
      </div>
      <PriceList
        items={itemsWithCategory}
        onModifyItem={(item) => { alert(item.id) }}
        onDeleteItem={(item) => { alert(item.id) }}
      />
    </React.Fragment>
  )
}
export default Home