import type { Menu } from '@/types/Menus'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import Questions from '@/pages/Questions'

export default function App () {
  return (
    <Layout menus={menus}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/questions" element={<Questions />}/>
      </Routes>
    </Layout>
  )
}

const menus: Menu[] = [
  { text: 'Home', href: '/' },
  { text: 'Questões', href: '/questions' }
]
