import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {

    const {pathname} = useRouter()

  return (
    <nav className="flex flex-col items-center p-8 bg-gray-800">
        <Link href={'/'} className="font-extrabold text-transparent text-6xl md:text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            FakeStore
        </Link>
        <ul className="flex justify-center items-center mt-6">
            <li className="mx-4">
                <Link href={'/'} className={
                    pathname === '/' ? 'text-lg font-semibold text-gray-200 bg-blue-500 p-2 rounded' : 'text-lg font-semibold text-gray-500'
                }>
                    Inicio
                </Link>
            </li> 
            <li className="mx-4">
                <Link href={'/tienda'} className={
                    pathname === '/tienda' ? 'text-lg font-semibold text-gray-200 bg-blue-500 p-2 rounded' : 'text-lg font-semibold text-gray-500'
                }>
                    Tienda
                </Link>
            </li>
            <li className="mx-4">
                <Link href={'/nosotros'} className={
                    pathname === '/nosotros' ? 'text-lg font-semibold text-gray-200 bg-blue-500 p-2 rounded' : 'text-lg font-semibold text-gray-500'
                }>
                    Nosotros
                </Link>
            </li>
            <li className="mx-4">
                <Link href={'/carrito'} className={
                    pathname === '/carrito' ? 'text-lg font-semibold text-gray-200 bg-blue-500 p-2 rounded' : 'text-lg font-semibold text-gray-500'
                }>
                    Carrito
                </Link>
            </li>
        </ul>
    </nav>
  )
}
