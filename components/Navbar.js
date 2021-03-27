import Link from 'next/link'
import {signIn, signOut, useSession } from 'next-auth/client'


const Navbar = () => {
  const [session, loading] = useSession()
  return (
    <nav>
        <ul className={`navbar ${loading ? 'loading': 'loaded'}`}>
            <li>
            <Link href="/" className='nav-link'>
                <a>Home</a>
            </Link>
            </li>
            <li>
            <Link href="/about" className='nav-link'>
                <a>About</a>
            </Link>
            </li>
            <li>
            <Link href="/profile" className='nav-link'>
                <a>Profile</a>
            </Link>
            </li>
            <li>
            <Link href="/blog" className='nav-link'>
                <a>Blog</a>
            </Link>
            </li>
            <li>
            <Link href="/docs" className='nav-link'>
                <a>Docs</a>
            </Link>
            </li>
            <li>
            <Link href="/users" className='nav-link'>
                <a>Users</a>
            </Link>
            </li>
            <li>
            <Link href="/papers" className='nav-link'>
                <a>Papers</a>
            </Link>
            </li>
            <li>
            <Link href="/product" className='nav-link'>
                <a>Product</a>
            </Link>
            </li>
            {!session && (
                <li>
                    <Link href="/api/auth/signin" className='nav-link'>
                        <a onClick={e => {
                            e.preventDefault()
                            signIn('github')
                        }}>SignIn</a>
                    </Link>
                </li>
            )}
            {session && (
                <li>
                    <Link href="/api/auth/signout" className='nav-link'>
                        <a onClick={e => {
                            e.preventDefault()
                            signOut()
                        }}>SignOut</a>
                    </Link>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default Navbar
