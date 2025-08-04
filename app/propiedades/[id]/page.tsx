"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  MapPin,
  MessageCircle,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

const propiedadesData = {
  1: {
    titulo: "Casa en Belgrano 1200",
    precio: "U$S 270.000",
    descripcion:
      "Excelente construccion y carpinteria. Balcones a la calle y al jardin. Amplio living comedor y cocina. Pequeño lavadero con salida al patio. Amplio fondo con espacio verde, quincho y parrilla. Cochera para dos autos con portón de madera",
    imagenes: [
      "/belgrano1200.png",
      "/belgrano1200-2.png",
      "/belgrano1200-3.png",
      "/belgrano1200-4.png",
      "/belgrano1200-5.png",
    ],
    dormitorios: 4,
    baños: 3,
    metros: 340,
    tipo: "Casa",
    zona: "Centro",
    caracteristicas: [
      "Jardín con parrilla",
      "Garage para 2 autos",
      "Calefacción por caldera (Blitan)",
      "Cocina con anafe y campana extractora",
      "Patio trasero",
    ],
  },
  2: {
    titulo: "Departamento zona centrica",
    precio: "U$S 50.000",
    descripcion:
      "En venta departamento en planta baja, situado en una zona privilegiada del centro de Tandil, con cercanía a comercios, transporte público, escuelas y servicios esenciales. La unidad cuenta con un dormitorio, un baño completo y una cocina comedor",
    imagenes: [
      "/depto.png",
      "/depto2.png",
      "/depto3.png",
      "/depto4.png",
      "/depto5.png",
    ],
    dormitorios: 1,
    baños: 1,
    metros: 30,
    tipo: "Departamento",
    zona: "Centro",
    caracteristicas: [
      "Planta baja",
      "Zona centrica",
      "Muy luminoso",
      "Práctica y funcional",
    ],
  },
  3: {
    titulo: "Lote con posibilidad de financiar",
    precio: "U$S 26.000",
    descripcion:
      "2 Lotes disponibles. Medidas 10 x 39 cada uno. Todos los servicios. Se escucha oferta de contado. Posibilidad de financiar el 50 %",
    imagenes: [
      "/lote.png",
      "/lote11.png",
      "/lote12.png",
      "/lote13.png",
      "/lote14.png",
    ],
    metros: 390,
    tipo: "Terreno",
    zona: "Cabral y Chapeaurouge",
    caracteristicas: [
      "Todos los servicios",
    ],
  },
  4: {
    titulo: "Ruben Dario 200 - El Cerrito",
    precio: "U$S 130.000",
    descripcion:
      "Casa en esquina, con 4 dormitorios. Excelente ubicacion. Se escucha oferta",
    imagenes: [
      "/cerrito1.png",
      "/cerrito2.png",
      "/cerrito3.png",
      "/cerrito4.png",
    ],
    dormitorios: 4,
    baños: 1,
    metros: "Consulte ",
    tipo: "Casa",
    zona: "Cerrito",
    caracteristicas: [
      "Garage",
      "Patio",
      "Excelente ubicacion",
    ],
  },
  5: {
    titulo: "Casa en venta en barrio Villa Italia",
    precio: "U$S 80.000",
    descripcion:
      "Casa en venta ubicada en el barrio Villa Italia. La propiedad cuenta con dos habitaciones amplias, living comedor, cocina, garaje, patio y galpón, todo sobre un lote de 10 x 45 metros. Ideal para quienes buscan comodidad y espacio.",
    imagenes: [
      "/villa1.png",
      "/villa2.png",
      "/villa3.png",
      "/villa4.png",
      "/villa5.png",
    ],
    dormitorios: 2,
    baños: 1,
    metros: 450,
    tipo: "Casa",
    zona: "Villa italia",
    caracteristicas: [
      "2 Habitaciones amplias",
      "Garage",
      "Patio",
      "Galpon",
    ],
  },
  6: {
    titulo: "Lote en Venta",
    precio: "U$S 125.000",
    descripcion:
      "Lote de 33 x 65. Posibilidad de subdividir en 5 lotes de 14 x 33",
    imagenes: [
      "/lote2.png",
    ],
    metros: "33 x 65",
    tipo: "Terreno",
    zona: "Cabral y Guisse",
    caracteristicas: [
      "Servicios de agua y cloacas",
      "Posibilidad de comprar dos lotes iguales (33 x 65 cada uno)",
    ],
  },
}

export default function PropiedadDetalle() {
  const params = useParams()
  const id = params.id as string
  const [imagenActual, setImagenActual] = useState(0)
  const propiedad = propiedadesData[id as keyof typeof propiedadesData]

  if (!propiedad) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Propiedad no encontrada</p>
      </div>
    )
  }

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % propiedad.imagenes.length)
  }

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev - 1 + propiedad.imagenes.length) % propiedad.imagenes.length)
  }

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
          <Link
            href="/propiedades"
            className="flex items-center space-x-2 text-gray-700 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a propiedades</span>
          </Link>
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
            <MessageCircle className="w-8 h-8" />
          </a>
        </Button>
      </motion.div>

      {/* Contenido Principal */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna Izquierda - Carrusel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Imagen Principal */}
              <div className="relative mb-4">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-white shadow-lg">
                  <Image
                    src={propiedad.imagenes[imagenActual] || "/placeholder.svg"}
                    alt={`${propiedad.titulo} - Imagen ${imagenActual + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-full object-contain"
                  />

                  {/* Controles del carrusel */}
                  <button
                    onClick={imagenAnterior}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={siguienteImagen}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className="bg-cyan-600 text-white text-sm px-3 py-1">{propiedad.tipo}</Badge>
                  </div>

                  {/* Acciones */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Contador de imágenes */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {imagenActual + 1} / {propiedad.imagenes.length}
                  </div>
                </div>
              </div>

              {/* Miniaturas */}
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {propiedad.imagenes.map((imagen, index) => (
                  <button
                    key={index}
                    onClick={() => setImagenActual(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === imagenActual
                        ? "border-cyan-600 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imagen || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Información de la Propiedad */}
              <Card className="p-8 mt-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {propiedad.zona}, Tandil
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{propiedad.titulo}</h1>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                  {propiedad.dormitorios && (
                    <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                      <Bed className="w-5 h-5 mr-2 text-cyan-600" />
                      <span className="font-medium">{propiedad.dormitorios} dormitorios</span>
                    </div>
                  )}
                  {propiedad.baños && (
                    <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                      <Bath className="w-5 h-5 mr-2 text-cyan-600" />
                      <span className="font-medium">{propiedad.baños} baños</span>
                    </div>
                  )}
                  <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                    <Square className="w-5 h-5 mr-2 text-cyan-600" />
                    <span className="font-medium">{propiedad.metros}m²</span>
                  </div>
                </div>

                <div className="text-4xl font-bold text-cyan-600 mb-8">{propiedad.precio}</div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Descripción</h3>
                    <p className="text-gray-600 leading-relaxed">{propiedad.descripcion}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Características</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {propiedad.caracteristicas.map((caracteristica, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Columna Derecha - Sidebar de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Te interesa esta propiedad?</h3>
                <p className="text-gray-600 mb-6">Contactanos para más información o para coordinar una visita.</p>

                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <a
                      href={`https://wa.me/5492494311589?text=Hola, me interesa la propiedad: ${propiedad.titulo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      CONSULTAR POR WHATSAPP
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
                  >
                    <a href="tel:+5492494311589">Llamar: +54 9 2494 311589</a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo.png"
                      alt="Inmobiliaria Ceschinelli"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Inmobiliaria Ceschinelli</p>
                      <p className="text-sm text-gray-600">Tandil, Buenos Aires</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
