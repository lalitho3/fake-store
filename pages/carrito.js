import { useEffect, useState } from "react";

import BaseLayout from "../components/BaseLayout";

export default function carrito({carrito, eliminarProducto}) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cargarTotal = carrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0 )
        setTotal(cargarTotal);
    })

  return (
    <BaseLayout titulo={'Fake store | Mi Carrito'} descripcion={''}>
        <h1 className="text-6xl font-bold text-gray-600 py-10 text-center">Carrito</h1>
        <div className="flex justify-between items-center p-10">
            {
                carrito.length === 0 ? (
                    <p className="text-2xl font-bold w-full text-gray-600 py-10 text-center">No hay productos en el carrito</p>
                ) : (
                    <>
                        <div className="w-2/4">
                            <h2 className="text-2xl font-bold text-gray-600 py-10 text-center">Productos</h2>
                            {
                                carrito.map(producto => (
                                    <div className="w-full flex items-center text-center my-4" key={producto.id}>
                                        <img src={producto.image} alt={producto.title} className="w-16" />
                                        <div className="flex flex-col items-center text-center">
                                            <p className="text-xl font-bold text-gray-600 m-0 p-4 text-center">{producto.title}</p>
                                            <div className="flex">
                                                <p className="text-xl font-bold text-gray-600 m-0 mx-2 p-0 text-center">Precio: $ {producto.price}</p>
                                                <p className="text-xl font-bold text-gray-600 m-0 mx-2 p-0 text-center">Qty: {producto.cantidad}</p>
                                                <p className="text-xl font-bold text-white m-0 mx-2 p-0 text-center">Subtotal: $ {producto.cantidad * producto.price}</p>
                                                <button className="mx-2 p-2 bg-red-700 rounded text-white"
                                                onClick={()=>{
                                                    eliminarProducto(producto.id)
                                                }}>
                                                    Eliminar producto
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-2/4">
                            <h2 className="text-2xl font-bold text-gray-600 py-10 text-center">Resumen del pedido</h2>
                            <div className="w-full p-8 bg-gray-600 rounded">
                                <p className="text-xl font-bold text-blue-500 m-0 p-0 text-center">Subtotal: $ {total}</p>
                                <p className="text-xl font-bold text-blue-500 m-0 p-0 text-center">Envio: Gratis</p>
                                <p className="text-xl font-bold text-white m-0 p-0 text-center">Total: $ {(total * 1.16).toFixed(2) } <span className="text-gray-500">Impuestos incluidos.</span></p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    </BaseLayout>

  )
}
