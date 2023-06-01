import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isHome = router.pathname === '/'

  return (
    <header>
      <Link href='/' className='mb-4 home'>Home</Link>      
      {!isHome && <button onClick={() => router.back()} className='my-2'>Back</button>}
    </header>
  )
}
