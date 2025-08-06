"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Bed, Bath, Square, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const propiedades = [
  {
    id: 1,
    titulo: "Casa en Belgrano 1200",
    precio: "U$S 270.000",
    descripcion: "Hermosa casa de 4 dormitorios con jardín y garage",
    imagen: "/belgrano1200.png?height=300&width=400",
    dormitorios: 4,
    baños: 3,
    metros: 340,
    tipo: "casa",
    zona: "Centro",
    destacada: true,
  },
  {
    id: 2,
    titulo: "Departamento zona centrica",
    precio: "U$S 50.000",
    descripcion: "Departamento de 1 ambiente ubicado en zona centrica",
    imagen: "/depto.png?height=300&width=400",
    dormitorios: 1,
    baños: 1,
    metros: 30,
    tipo: "departamento",
    zona: "Centro",
    destacada: true,
  },
  {
    id: 3,
    titulo: "Lote con posibilidad de financiar",
    precio: "U$S 26.000",
    descripcion: "2 Lotes disponibles - Medidas 10 x 39 cada uno",
    imagen: "/lote.png?height=300&width=400",
    metros: 390,
    tipo: "terreno",
    zona: "Tandil",
    destacada: true,
  },
  {
    id: 4,
    titulo: "Ruben Dario 200 - El Cerrito",
    precio: "U$S 130.000",
    descripcion: "Casa en esquina, 4 dormitorios. Se escucha oferta",
    imagen: "/cerrito1.png?height=300&width=400",
    dormitorios: 4,
    baños: 1,
    metros: "consulte " ,
    tipo: "casa",
    zona: "El cerrito",
    destacada: false,
  },
  {
    id: 5,
    titulo: "Casa en venta en barrio Villa Italia",
    precio: "U$S 80.000",
    descripcion: "Ideal para quienes buscan comodidad y espacio.",
    imagen: "/villa1.png?height=300&width=400",
    dormitorios: 2,
    baños: 1,
    metros: 450,
    tipo: "Casa",
    zona: "Villa Italia",
    destacada: false,
  },
  {
    id: 6,
    titulo: "Lote en Venta ",
    precio: "U$S 125.000",
    descripcion: "Lote de 33 x 65 con posibilidad de subdividir en 5 lotes de 14 x 33",
    imagen: "/lote2.png?height=300&width=400",
    metros: "33 x 65",
    tipo: "terreno",
    zona: "Tandil",
    destacada: false,
  },
  {
    id: 7,
    titulo: "Departamento en Venta ",
    precio: "U$S 100.000",
    descripcion: "Excelente vista desde el piso 7, ubicado en zona céntrica, cochera incluida, excelente estado general, 1 dormitorio.",
    imagen: "/mitre1.png?height=300&width=400",
    dormitorios: 1,
    baños: 1,
    tipo: "departamento",
    zona: "Tandil",
    destacada: false,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PropiedadesPage() {
  const [filtroTipo, setFiltroTipo] = useState("todos")
  const [busqueda, setBusqueda] = useState("")

  const propiedadesFiltradas = propiedades.filter((propiedad) => {
    const cumpleTipo = filtroTipo === "todos" || propiedad.tipo === filtroTipo
    const cumpleBusqueda =
      propiedad.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      propiedad.descripcion.toLowerCase().includes(busqueda.toLowerCase())

    return cumpleTipo && cumpleBusqueda
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Inmobiliaria Ceschinelli" width={50} height={50} className="object-contain" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">INMOBILIARIA</h1>
              <p className="text-cyan-600 font-semibold">CESCHINELLI</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Inicio
            </Link>
            <Link href="/propiedades" className="text-cyan-600 font-semibold">
              Propiedades
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <a href="https://wa.me/5492494311589" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </a>
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nuestras Propiedades</h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Descubre todas nuestras opciones disponibles en Tandil y alrededores
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar propiedades..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filtroTipo} onValueChange={setFiltroTipo}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Tipo de propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los tipos</SelectItem>
                <SelectItem value="casa">Casas</SelectItem>
                <SelectItem value="departamento">Departamentos</SelectItem>
                <SelectItem value="terreno">Terrenos</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </section>

      {/* Propiedades Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {propiedadesFiltradas.map((propiedad) => (
              <motion.div key={propiedad.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={propiedad.imagen || "/placeholder.svg"}
                      alt={propiedad.titulo}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {propiedad.destacada && (
                      <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">Destacada</Badge>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {propiedad.zona}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{propiedad.titulo}</h3>
                    <p className="text-gray-600 mb-4">{propiedad.descripcion}</p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      {propiedad.dormitorios && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {propiedad.dormitorios}
                        </div>
                      )}
                      {propiedad.baños && (
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {propiedad.baños}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {propiedad.metros}m²
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-600">{propiedad.precio}</span>
                      <Button asChild size="sm" className="bg-gray-900 hover:bg-gray-800">
                        <Link href={`/propiedades/${propiedad.id}`} className="text-white">VER DETALLES</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {propiedadesFiltradas.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-xl text-gray-500">No se encontraron propiedades que coincidan con tu búsqueda.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
