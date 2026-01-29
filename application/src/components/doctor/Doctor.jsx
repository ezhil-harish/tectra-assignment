import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Doctor = () => {
    const [doctors, setDoctors] = useState([])

    const [newDoctorName, setNewDoctorName] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingName, setEditingName] = useState('')

    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    const API_BASE = 'http://localhost:3000'

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${API_BASE}/doctors`)
                setDoctors(Array.isArray(response.data) ? response.data : [])
            } catch (error) {
                console.error('Failed to load doctors', error)
            }
        }

        fetchDoctors()
    }, [API_BASE])

    const onAdd = (e) => {
        e.preventDefault()
        const trimmed = newDoctorName.trim()
        if (!trimmed) return

        const createDoctor = async () => {
            try {
                setSaving(true)
                const response = await axios.post(`${API_BASE}/doctor`, { name: trimmed })
                const created = response.data ?? { name: trimmed }
                setDoctors((prev) => [created, ...prev])
                setNewDoctorName('')
            } catch (error) {
                console.error('Failed to add doctor', error)
            }
        }

        void createDoctor()
    }

    const onStartEdit = (doctor) => {
        const id = doctor._id ?? doctor.id
        if (!id) return
        setEditingId(id)
        setEditingName(doctor.name)
    }

    const onCancelEdit = () => {
        setEditingId(null)
        setEditingName('')
    }

    const onSaveEdit = () => {
        const trimmed = editingName.trim()
        if (!trimmed || editingId == null) return

        const updateDoctor = async () => {
            try {
                setSaving(true)
                const response = await axios.put(`${API_BASE}/doctor/${editingId}`, {
                    name: trimmed,
                })
                const updated = response.data ?? { id: editingId, name: trimmed }
                setDoctors((prev) =>
                    prev.map((d) => {
                        const docId = d._id ?? d.id
                        return docId === editingId ? { ...d, ...updated } : d
                    }),
                )
                onCancelEdit()
            } catch (error) {
                console.error('Failed to update doctor', error)
            }
        }

        void updateDoctor()
    }

    const onDelete = (id) => {
        const removeDoctor = async () => {
            try {
                setSaving(true)
                await axios.delete(`${API_BASE}/doctor/${id}`)
                setDoctors((prev) =>
                    prev.filter((d) => {
                        const docId = d._id ?? d.id
                        return docId !== id
                    }),
                )
                if (editingId === id) onCancelEdit()
            } catch (error) {
                console.error('Failed to delete doctor', error)
            }
        }

        void removeDoctor()
    }

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <h1 className="dashboard__title">
                    Doctors
                </h1>
            </div>

            <section className="dashboard__table-section">
                <header className="panel__header panel__header--table">
                    <div>
                        <h2 className="panel__title">Doctors List</h2>
                    </div>
                    <div className="panel__header-actions">
                        <form onSubmit={onAdd} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input
                                type="text"
                                className="panel__search-input"
                                placeholder="Enter doctor name..."
                                value={newDoctorName}
                                onChange={(e) => setNewDoctorName(e.target.value)}
                            />
                            <button className="table__action-button" type="submit">
                                Add
                            </button>
                        </form>
                    </div>
                </header>

                <div className="table">
                    <div className="table__head">
                        <div className="table__row">
                            <div className="table__cell">No</div>
                            <div className="table__cell">Name</div>
                            <div className="table__cell">Action</div>
                        </div>
                    </div>
                    <div className="table__body" style={{ gap: '20px' }}>
                        {doctors.map((doctor) => {
                            const docId = doctor._id ?? doctor.id
                            return (
                                <div key={docId} className="table__row">
                                    <div className="table__cell">{docId}</div>
                                    <div className="table__cell table__cell--name">
                                        <div className="avatar-circle">{doctor.name?.[0] ?? 'D'}</div>
                                        {editingId === docId ? (
                                            <input
                                                type="text"
                                                className="panel__search-input"
                                                value={editingName}
                                                onChange={(e) => setEditingName(e.target.value)}
                                                style={{ maxWidth: 320 }}
                                            />
                                        ) : (
                                            <span>{doctor.name}</span>
                                        )}
                                    </div>
                                    <div className="table__cell table__cell--actions" style={{ display: 'flex', gap: '8px' }}>
                                        {editingId === docId ? (
                                            <>
                                                <button className="table__action-button" type="button" onClick={onSaveEdit}>
                                                    Save
                                                </button>
                                                <button className="table__action-button" type="button" onClick={onCancelEdit}>
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="table__action-button"
                                                    type="button"
                                                    onClick={() => onStartEdit(doctor)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="table__action-button"
                                                    type="button"
                                                    style={{ backgroundColor: '#c01d1d', color: '#ffffff', padding: '10px', borderRadius: '10px' }}
                                                    onClick={() => onDelete(docId)}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                        {doctors.length === 0 ? (
                            <div className="table__row">
                                <div className="table__cell" style={{ gridColumn: '1 / -1' }}>
                                    No doctors added yet.
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Doctor