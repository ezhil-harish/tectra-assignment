import React from 'react'
import logo from '../../assets/logo.png'
import { applications, overviews } from './list'
import List from '../list/List'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} className="sidebar__logo-image" alt="Tectra Clinic" />
      </div>

      <div className="sidebar__sections">
        <div className="sidebar-section">
          <span className="sidebar-section__label">OVERVIEW</span>
          <div className="sidebar-section__list">
            {overviews.map((overview) => (
              <List
                picture={overview.img}
                key={overview.path}
                to={overview.path}
                listName={overview.listName}
              />
            ))}
          </div>
        </div>

        <div className="sidebar-section sidebar-section--spaced">
          <span className="sidebar-section__label">APPLICATIONS</span>
          <div className="sidebar-section__list">
            {applications.map((application) => (
              <List
                key={application.path}
                to={application.path}
                picture={application.img}
                listName={application.listName}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar