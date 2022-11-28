import BaseLayout from "../components/BaseLayout"

export default function index() {
  return (
    <BaseLayout titulo={'Fake store | Inicio'}
    descripcion={'Fake store es una tienda en linea que consume una API llamada Fake Store API'}>
      //CREADO POR EDUARDO ALVAREZ
      <div className="flex flex-col md:flex-row justify-between items-center p-10">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-white py-10">Bienvenidos a <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Fake Store </span>
            una tienda en linea diseñada con Next.js y Tailwind CSS
            </h1>
        </div>
        <div className="w-1/2">
          <img src="https://innatos.com.mx/wp-content/uploads/2021/11/Ecommerce-4.png" alt="Hero" className="mx-auto" />
        </div>
      </div>
    </BaseLayout>
  )
}
