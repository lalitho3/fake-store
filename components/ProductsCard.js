import Link from "next/link";

export default function ProductsCard({producto}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img 
            src={producto.image}
            alt={producto.title}
            width="200"
            height="200"
            className="p-8-rounded-t-lg mx-auto"/>
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {producto.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5 text-gray-600">
          <p>{producto.category}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${producto.price}
          </span>
          <Link href={`/productos/${producto.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
}
