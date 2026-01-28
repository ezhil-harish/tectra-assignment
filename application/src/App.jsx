import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Doctor from './components/doctor/Doctor'
import PlaceholderPage from './components/PlaceholderPage'
import { applications, overviews } from './components/sidebar/list'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="app-layout__main">
          <Navbar />
          <main className="app-layout__content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/doctors" element={<Doctor />} />
              <Route
                path="/dental-dashboard"
                element={<PlaceholderPage title="Dental Dashboard" />}
              />
              {applications
                .filter((item) => item.path !== '/doctors')
                .map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<PlaceholderPage title={item.listName} />}
                />
              ))}
              <Route
                path="*"
                element={<PlaceholderPage title="Page not found" />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
