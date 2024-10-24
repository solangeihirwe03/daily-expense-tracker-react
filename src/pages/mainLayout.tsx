import { Outlet } from 'react-router-dom'
import Header from '../components/header'

export const MainLayout = () => {
  return (
    <div className='bg-gray-200 h-screen'>
        <Header/>
        <Outlet/>
    </div>
  )
}
