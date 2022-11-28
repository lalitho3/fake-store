import { useState } from "react"

import BaseLayout from "../../components/BaseLayout"

export default function singleProduct({producto, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(1)

    const handleSubmit = e => {
        e.preventDefault()
        
        const productoAgregado = {
            id: producto.id,
            title: producto.title,
            price: producto.price,
            image: producto.image,
            cantidad: Number(cantidad)
        }

        agregarCarrito(productoAgregado)

        alert('Producto agregado al carrito CANTIDAD: ' + cantidad )

    }

  return (
    <BaseLayout titulo={producto.title} descripcion={producto.description}>
        <h1 className="text-6xl font-bold text-gray-600 py-10 text-center">{producto.title}</h1>
        <div className="flex flex-col md:flex-row items-start justify-between p-8">
            <img src={producto.image} alt={producto.title} width="350" className="p-8-rounded-t-lg mx-auto"/>
            <div className="flex flex-col justify-between p-10">
                <p className="text-2xl font-semibold text-gray-600 py-2">{producto.description}</p>
                <p className="text-2xl font-semibold text-gray-600 py-2 mb-8">Categoría: {producto.category}</p>
                <form onSubmit={handleSubmit}>
                    <label className="text-2xl font-semibold text-gray-600 py-2 my-4">Cantidad:</label>
                    
                    <select name="cantidad"
                    onChange={e => {
                        setCantidad(e.target.value)
                    }} id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <input type="submit" value="Agregar al carrito" className="cursor-pointer w-full my-4 text-center text-white p-4 rounded bg-blue-500" />
                </form>
            </div>
        </div>
    </BaseLayout>
  )
}

export async function getServerSideProps(data){

    const {id} = data.query

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const producto = await res.json()

    return {
        props: {
            producto
        }
    }

}
