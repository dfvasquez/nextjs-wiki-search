import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
      <h1 className='text-3xl font-bold text-white grid'>
        <Link href={'/'}>DiviCrafter</Link>
      </h1>
      <Search/>
    </nav>
  )
}
