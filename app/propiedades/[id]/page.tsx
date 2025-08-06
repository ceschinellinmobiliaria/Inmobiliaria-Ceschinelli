"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin, ArrowLeft, Heart, Share2 } from 'lucide-react'
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
  7: {
    titulo: "Departamento en Venta",
    precio: "U$S 100.000",
    descripcion:
      "Este departamento de 1 dormitorio se encuentra en el séptimo piso, lo que le otorga una vista panorámica destacada. Su calefacción por caldera con losa radiante brinda una climatización eficiente y confortable en toda la unidad. Está ubicado en una zona céntrica",
    imagenes: [
      "/mitre1.png",
      "/mitre2.png",
      "/mitre3.png",
      "/mitre4.png",
      "/mitre6.png",
    ],
    metros: "consulte ",
    dormitorios: 1,
    baños: 1,
    tipo: "Departamento",
    zona: "Mitre 700",
    caracteristicas: [
      "Cochera",
      "Zona centrica",
      "Excelente estado",
      "Calefaccion por caldera",
      "Excelente vista",
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
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">INMOBILIARIA</h1>
              <p className="text-sm sm:text-base text-cyan-600 font-semibold">CESCHINELLI</p>
            </div>
          </Link>
          <Link
            href="/propiedades"
            className="flex items-center space-x-2 text-gray-700 hover:text-cyan-600 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Volver a propiedades</span>
            <span className="sm:hidden">Volver</span>
          </Link>
        </div>
      </motion.header>

      {/* WhatsApp Button con ícono original */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <a href="https://wa.me/5492494311589" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </a>
        </Button>
      </motion.div>

      {/* Contenido Principal */}
      <section className="py-4 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Columna Principal - Carrusel e Información */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden bg-white shadow-lg">
                  <Image
                    src={propiedad.imagenes[imagenActual] || "/placeholder.svg"}
                    alt={`${propiedad.titulo} - Imagen ${imagenActual + 1}`}
                    fill
                    className="object-contain"
                  />
                  
                  {/* Controles del carrusel - Solo mostrar si hay más de una imagen */}
                  {propiedad.imagenes.length > 1 && (
                    <>
                      <button
                        onClick={imagenAnterior}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={siguienteImagen}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Badges */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex space-x-2">
                    <Badge className="bg-cyan-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1">
                      {propiedad.tipo}
                    </Badge>
                  </div>
                  
                  {/* Acciones */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm p-2">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm p-2">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                  
                  {/* Contador de imágenes */}
                  {propiedad.imagenes.length > 1 && (
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {imagenActual + 1} / {propiedad.imagenes.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Miniaturas - Solo mostrar si hay más de una imagen */}
              {propiedad.imagenes.length > 1 && (
                <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2">
                  {propiedad.imagenes.map((imagen, index) => (
                    <button
                      key={index}
                      onClick={() => setImagenActual(index)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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
              )}

              {/* Información de la Propiedad */}
              <Card className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {propiedad.zona}, Tandil
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {propiedad.titulo}
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 text-gray-600">
                  {propiedad.dormitorios && (
                    <div className="flex items-center bg-gray-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                      <Bed className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-cyan-600" />
                      <span className="font-medium text-xs sm:text-sm">{propiedad.dormitorios} dorm.</span>
                    </div>
                  )}
                  {propiedad.baños && (
                    <div className="flex items-center bg-gray-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                      <Bath className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-cyan-600" />
                      <span className="font-medium text-xs sm:text-sm">{propiedad.baños} baños</span>
                    </div>
                  )}
                  <div className="flex items-center bg-gray-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                    <Square className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-cyan-600" />
                    <span className="font-medium text-xs sm:text-sm">{propiedad.metros}m²</span>
                  </div>
                </div>
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600 mb-6 sm:mb-8">
                  {propiedad.precio}
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Descripción</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{propiedad.descripcion}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Características</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {propiedad.caracteristicas.map((caracteristica, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Sidebar de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="p-4 sm:p-6 sticky top-24">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  ¿Te interesa esta propiedad?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Contactanos para más información o para coordinar una visita.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base">
                    <a
                      href={`https://wa.me/5492494311589?text=Hola, me interesa la propiedad: ${propiedad.titulo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                      CONSULTAR POR WHATSAPP
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent text-sm sm:text-base"
                  >
                    <a href="tel:+5492494311589">Llamar: +54 9 2494 311589</a>
                  </Button>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo.png"
                      alt="Inmobiliaria Ceschinelli"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Inmobiliaria Ceschinelli</p>
                      <p className="text-xs sm:text-sm text-gray-600">Tandil, Buenos Aires</p>
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
