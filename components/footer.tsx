export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} | Todos los derechos reservados</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Diseñado y desarrollado con <span className="text-red-500">❤</span> por{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 font-medium">
                Tu Nombre
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
