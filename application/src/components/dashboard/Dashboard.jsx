import React from 'react'
import more from '../../assets/more.png'
import chart from '../../assets/chart.png'
import full_chart from '../../assets/full-chart.png'
import search from '../../assets/search.png'

const stats = [
  {
    label: 'Total Visitors',
    value: '42,946',
    change: '+36%',
  },
  {
    label: 'Paid Visitors',
    value: '7,929',
    change: '+26%',
  },
  {
    label: 'Total Appointments',
    value: '4,199',
    change: '+26%',
  },
  {
    label: 'New Patients',
    value: '1,647',
    change: '+26%',
  },
]

const doctors = [
  {
    id: '01',
    name: 'Dr. Amit Mishra',
    specialty: 'Heart Surgeon',
    dob: '14th Jan, 1992',
    email: 'amitmishra@gmail.com',
    status: 'Active',
    contact: '+91 9999999999',
  },
  {
    id: '02',
    name: 'Dr. Amit Mishra',
    specialty: 'Heart Surgeon',
    dob: '14th Jan, 1992',
    email: 'amitmishra@gmail.com',
    status: 'Active',
    contact: '+91 9999999999',
  },
  {
    id: '03',
    name: 'Dr. Amit Mishra',
    specialty: 'Heart Surgeon',
    dob: '14th Jan, 1992',
    email: 'amitmishra@gmail.com',
    status: 'Active',
    contact: '+91 9999999999',
  },
  {
    id: '04',
    name: 'Dr. Amit Mishra',
    specialty: 'Heart Surgeon',
    dob: '14th Jan, 1992',
    email: 'amitmishra@gmail.com',
    status: 'Active',
    contact: '+91 9999999999',
  },
]

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard <span style={{ color: '#d6c8c8' }}>/ Analytics and Reports</span></h1>
      </div>

      <section className="dashboard__stats">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <header className="stat-card__header">
              <h2 className="stat-card__label">{item.label}</h2>
              <button className="stat-card__menu" >
                <img src={more} aria-label='start-card__menu__img' alt="" />
              </button>
            </header>
            <div className="stat-card__body">
              <span className="stat-card__value">{item.value}</span>
              <span className="stat-card__trend">{item.change}</span>
              <img src={chart} aria-label='start-card__chart' alt="" />
            </div>
          </article>
        ))}
      </section>

      <section className="dashboard__middle">
        <article className="panel panel--wide">
          <header className="panel__header">
            <div>
              <h2 className="panel__title">Cashflow</h2>
              <p className="panel__subtitle">Total <span style={{ color: 'black', fontWeight: 'bold', fontSize: '25px', marginLeft: '10px' }}>44,10,840</span></p>
            </div>
            <div className="panel__controls">
              <label className="panel__select">
                <span>Last 12 Months</span>
                <span className="panel__select-chevron">▾</span>
              </label>
            </div>
          </header>
          <div className="panel__chart">
            <div className="chart-line">
              <img src={full_chart} alt="Cashflow Chart" />
            </div>
            <div className="chart-line__axis">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
                (month) => (
                  <span key={month}>{month}</span>
                ),
              )}
            </div>
          </div>
        </article>

        <article className="panel panel--side">
          <header className="panel__header">
            <div>
              <h2 className="panel__title">Expenses</h2>
            </div>
            <div className="panel__controls">
              <label className="panel__select">
                <span>Last 12 Months</span>
                <span className="panel__select-chevron">▾</span>
              </label>
            </div>
          </header>
          <div className="donut-chart">
            <div className="donut-chart__ring" />
            <div className="donut-chart__ring-1">
              <div className="donut-chart__ring-2">
                <div className="donut-chart__ring-3">
                  <div className="donut-chart__center">
                    <span className="donut-chart__label">Total</span>
                    <span className="donut-chart__value">18,22,240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="donut-chart__legend">
            <div className="legend-item">
              <span className="legend-item__label"><p className='legend-item__dot legend-item__label-dot1'></p>Rental Cost</span>
              <span className="legend-item__value">₹ 8,88,240</span>
            </div>
            <div className="legend-item">
              <span className="legend-item__label"><p className='legend-item__dot legend-item__label-dot2'></p>Wages</span>
              <span className="legend-item__value">₹ 6,19,000</span>
            </div>
            <div className="legend-item">
              <span className="legend-item__label"><p className='legend-item__dot legend-item__label-dot3'></p>Supplies</span>
              <span className="legend-item__value">₹ 4,67,000</span>
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard__table-section">
        <header className="panel__header panel__header--table">
          <div>
            <h2 className="panel__title">Doctors Overview</h2>
          </div>
          <div className="panel__header-actions">
            <div className="panel__search">
              <span className="panel__search-icon">
                <img src={search}  alt="" />
              </span>
              <input
                type="text"
                className="panel__search-input"
                placeholder="Search..."
              />
            </div>
            <div className="panel__filters">
              <label className="panel__select">
                <span>Heart Surgeon</span>
                <span className="panel__select-chevron">▾</span>
              </label>
              <label className="panel__select">
                <span>Last 12 Months</span>
                <span className="panel__select-chevron">▾</span>
              </label>
            </div>
          </div>
        </header>

        <div className="table">
          <div className="table__head">
            <div className="table__row">
              <div className="table__cell table__cell--checkbox">
                <input type="checkbox" aria-label="Select all doctors" />
              </div>
              <div className="table__cell">No</div>
              <div className="table__cell">Name</div>
              <div className="table__cell">Specialty</div>
              <div className="table__cell">DOB</div>
              <div className="table__cell">Email Address</div>
              <div className="table__cell">Status</div>
              <div className="table__cell">Contact</div>
              <div className="table__cell table__cell--actions">Action</div>
            </div>
          </div>
          <div className="table__body">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="table__row">
                <div className="table__cell table__cell--checkbox">
                  <input
                    type="checkbox"
                    aria-label={`Select ${doctor.name}`}
                  />
                </div>
                <div className="table__cell">{doctor.id}</div>
                <div className="table__cell table__cell--name">
                  <div className="avatar-circle">{doctor.name[0]}</div>
                  <span>{doctor.name}</span>
                </div>
                <div className="table__cell">{doctor.specialty}</div>
                <div className="table__cell">{doctor.dob}</div>
                <div className="table__cell">{doctor.email}</div>
                <div className="table__cell">
                  <span className="badge badge--success">{doctor.status}</span>
                </div>
                <div className="table__cell">{doctor.contact}</div>
                <div className="table__cell table__cell--actions">
                  <button className="table__action-button" aria-label="More">
                    ...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard



