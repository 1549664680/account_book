import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'
function MonthPicker(props) {
  const { year, month } = props
  let [isOpen, setIsOpen] = useState(false)
  let [selectedYear, setSelectedYear] = useState(year)
  let [selectedMonth, setSelectedMonth] = useState(month)
  const yearRange = range(9, -4).map(number => number + year)
  const monthRange = range(12, 1)
  return (
    <div className="dropdown month-picker-component">
      <h4>选择月份</h4>
      <button className="btn btn-lg btn-secondary dropdown-toggle" onClick={() => { setIsOpen(!isOpen) }}>
        {`${selectedYear}年${padLeft(selectedMonth)}月`}
      </button>
      {isOpen &&
        <div className="dropdown-menu" style={{ display: 'block' }}>
          <div className="row">
            <div className="col border-right">
              {yearRange.map((yearNumber,index) =>{
                return (
                  <a 
                  key={index} 
                  className={(yearNumber === selectedYear)?'dropdown-item active':'dropdown-item'}
                  href="#"
                  onClick={()=>{setSelectedYear(yearNumber)}}
                  >
                    {yearNumber}年
                  </a>
                )
              })
              }
            </div>
            <div className="col">
            {monthRange.map((monthNumber,index) =>{
                return (
                  <a 
                  key={index} 
                  className={(monthNumber === selectedMonth)?'dropdown-item active':'dropdown-item'}
                  href="#"
                  onClick={()=>{setSelectedMonth(monthNumber);setIsOpen(!isOpen)}}
                  >
                    {padLeft(monthNumber)}月
                  </a>
                )
              })
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}
MonthPicker.propTypes = {
  year:PropTypes.number.isRequired,
  month:PropTypes.number.isRequired
}
export default MonthPicker