import type { Menu } from '@/types/Menus'
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import Questions from '@/pages/Questions'
import Session from '@/pages/Session'
import AuthService from './services/AuthService'
import { useSelector } from 'react-redux'
import { isAuthenticatedSelector } from '@/services/authReducer'

export default function App () {
  useEffect(() => { AuthService.init() }, [])
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  return (
    <Layout menus={menus(isAuthenticated)}>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/questions" element={isAuthenticated ? <Questions /> : <Navigate replace to='/'/>}/>
          <Route path="/session" element={<Session />}/>
      </Routes>
    </Layout>
  )
}

function menus (isAuthenticated: Boolean) {
  const _menus: Menu[] = [
    { text: 'Home', href: '/' }
  ]

  if (isAuthenticated) {
    _menus.push({ text: 'Questões', href: '/questions' })
  }

  _menus.push({ text: 'Sessão', href: '/session' })

  return _menus
}
