'use client'
import Dashboardview from '@/components/Dashboardview'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="">
      <div className="flex overflow-hidden ">
        <div className="basis-[14%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[86%] border overflow-auto h-[100vh]">
          <Dashboardview />
          <Main />
        </div>

      </div>
    </div>
  )
}
