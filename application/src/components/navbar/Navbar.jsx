import React from 'react'
import search from '../../assets/search.png'
import notification from '../../assets/notification.png'
import settings from '../../assets/settings.png'
import logout from '../../assets/exit.png'

const Navbar = () => {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <div className="topbar__search">
          <span className="topbar__search-icon">
            <img src={search} alt="" />
          </span>
          <input
            type="text"
            className="topbar__search-input"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__icon-group">
          <button className="topbar__icon" aria-label="Notifications">
            <img src={notification} alt="" />
          </button>
          <button className="topbar__icon" aria-label="Settings">
            <img src={settings} alt="" />
          </button>
          <button className="topbar__icon" aria-label="Logout">
            <img src={logout} alt="" />
          </button>
        </div>
        <div className="topbar__divider" />
        <div className="topbar__profile">
          <div className="topbar__avatar">D</div>
          <div className="topbar__profile-text">
            <span className="topbar__profile-name">Dhanush</span>
            <span className="topbar__profile-status">
              <span className="topbar__status-dot" />
              Online
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar



