import { useState, useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLocalStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("carrito")) ?? [] : []

  const [carrito, setCarrito] = useState(carritoLocalStorage)

  const [ready, setReady] = useState(false)

  useEffect(()=>{
    setReady(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = producto => {
    if(carrito.some(item => item.id === producto.id )){
      const update = carrito.map(item => {
        if(item.id === producto.id){
          return {
            ...item,
            cantidad: item.cantidad + producto.cantidad
          }
        }
        return item
      })
      setCarrito([...update])
      // Agregar a localstorage
      window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    else {
      setCarrito([...carrito, producto])
      // Agregar a localstorage
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    localStorage.setItem('carrito', JSON.stringify( carrito ));
}

  const actualizarCarrito = id => {

  }

  return ready ? (
    <>
      <Head>
        <title>Fake store</title>
      </Head>
      <Component {...pageProps} agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCarrito={actualizarCarrito} carrito={carrito} />
    </>
  ) : null
}

export default MyApp
