import BaseLayout from "../components/BaseLayout"
import ProductsCard from "../components/ProductsCard"

export default function tienda({productos}) {
  return (
    <BaseLayout titulo={'Fake store | Tienda'}
    descripcion={'Esta es la tienda oficial de Fake Store, puedes consultar terminos y condiciones en la página oficial'}>
        <h1 className="text-6xl font-bold text-center text-gray-600 py-10">Tienda oficial Fake store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-8">
            {productos.map(producto => (
                <ProductsCard key={producto.id} producto={producto}/>
            ))}
        </div>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const productos = await res.json()

    return {
        props: {
            productos
        }
    }
}
