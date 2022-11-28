import BaseLayout from "../components/BaseLayout"

export default function Nosotros() {
  return (
    <BaseLayout titulo={'Fake store | Sobre nosotros'}>
        <h1 className="text-6xl font-bold text-gray-600 py-10 text-center">Sobre nosotros</h1>
        <div className="flex flex-col md:flex-row p-10 justify-between items-center">
            <div className="w-1/2">
                <img src="https://innatos.com.mx/wp-content/uploads/2021/11/Ecommerce-4.png" alt="Hero" width={300} className="mx-auto" />
            </div>
            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-blue-500 text-center">¿Quienes somos?</h2>
                <p className="text-lg font-bold text-gray-600 py-5 text-center">Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado y muchos clientes satisfechos.</p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row p-10 justify-between items-center">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-blue-500 text-center">¿Cual es nuestra misión?</h2>
                <p className="text-lg font-bold text-gray-600 py-5 text-center">
                Nuestra misión es ofrecer productos de calidad a precios accesibles, con un excelente servicio al cliente,
                para que nuestros clientes puedan disfrutar de una experiencia de compra única.
                </p>
            </div>
            <div className="w-1/2">
                <img src="https://calidevs.com/wp-content/uploads/2021/09/2-2.png" alt="Hero" width={300} className="mx-auto" />
            </div>
        </div>
    </BaseLayout>
  )
}
