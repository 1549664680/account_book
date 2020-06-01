import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { LIST_VIEW, CHART_VIEW } from '../utility'
const generateLinkClass = (current, view) => {
  return (current === view) ? 'nav-link active' : 'nav-link'
}
function ViewTab(props) {
  const { activeTab, ontabChange } = props
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item ">
        <a className={generateLinkClass(activeTab, LIST_VIEW)} 
        href="#"
        onClick={(event)=>{event.preventDefault();ontabChange(CHART_VIEW)}}
        >
          <Ionicon
            className="rounded-circle mr-2"
            fontSize="25px"
            color={'#007bff'}
            icon='ios-paper'
          />
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a className={generateLinkClass(activeTab, CHART_VIEW)} 
        href="#"
        onClick={(event)=>{event.preventDefault();ontabChange(LIST_VIEW)}}
        >
        <Ionicon
            className="rounded-circle mr-2"
            fontSize="25px"
            color={'#007bff'}
            icon='ios-pie'
          />
          图标模式
        </a>
      </li>
    </ul>
  )
}
ViewTab.propTypes = {
  activeTab:PropTypes.string.isRequired,
  ontabChange:PropTypes.func.isRequired
}
export default ViewTab