import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#111',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h2>Crypto On-Chain</h2>
      <div>
        <Link to="/" style={{ color: pathname === '/' ? 'cyan' : '#fff', marginRight: '1rem' }}>Início</Link>
        <Link to="/metrics" style={{ color: pathname === '/metrics' ? 'cyan' : '#fff' }}>Métricas</Link>
      </div>
    </nav>
  )
}
