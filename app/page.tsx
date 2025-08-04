"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, ArrowRight, Bed, Bath, Square } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

const propiedadesDestacadas = [
  {
    id: 1,
    titulo: "Casa en Belgrano 1200",
    precio: "U$S 270.000",
    descripcion: "Hermosa casa de 4 dormitorios con jardín y garage",
    imagen: "/belgrano1200.png?height=300&width=400",
    dormitorios: 4,
    baños: 3,
    metros: 340,
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
  },
  {
    id: 3,
    titulo: "Lote con posibilidad de financiar",
    precio: "U$S 26.000",
    descripcion: "2 Lotes disponibles - Medidas 10 x 39 cada uno",
    imagen: "/lote.png?height=300&width=400",
    metros: 10*39,
  },
]

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Inmobiliaria Ceschinelli" width={90} height={90} className="object-contain" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">INMOBILIARIA</h1>
              <p className="text-cyan-600 font-semibold">CESCHINELLI</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Inicio
            </Link>
            <Link href="/propiedades" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Propiedades
            </Link>
            <Link href="#sobre-nosotros" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Contacto
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
            <MessageCircle className="w-8 h-8" />
          </a>
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-cyan-50"
        />
        <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-200 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Encuentra tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400">
                Hogar Ideal
              </span>
              <br />
              con Ceschinelli
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tu mejor opción para alquileres, ventas y tasaciones en Tandil y sus alrededores.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/propiedades">
                  VER PROPIEDADES
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/Sobrenosotros.png"
                alt="Sobre Nosotros"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SOBRE NOSOTROS</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En Inmobiliaria Ceschinelli, contamos con años de experiencia en el mercado inmobiliario de Tandil y la
                zona. Nuestro compromiso es brindarte un servicio de excelencia, asesoramiento personalizado y las
                mejores opciones para tus necesidades de alquiler, venta o tasación de propiedades.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos un equipo de profesionales dedicados a hacer realidad tus sueños de encontrar el lugar perfecto.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <a href="https://wa.me/5492494311589" target="_blank" rel="noopener noreferrer">
                    CONTÁCTANOS
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Propiedades Destacadas</h2>
            <p className="text-xl text-gray-600">Descubre nuestra selección de propiedades más destacadas en Tandil</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {propiedadesDestacadas.map((propiedad) => (
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
                    <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">Destacada</Badge>
                  </div>
                  <CardContent className="p-6">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/propiedades">VER TODAS LAS PROPIEDADES</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">¿Tenés una propiedad?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Nosotros te ayudamos a venderla. Contamos con años de experiencia y las mejores estrategias de marketing
              para obtener el mejor precio por tu propiedad.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://wa.me/5492494311589" target="_blank" rel="noopener noreferrer">
                  CONTÁCTENOS
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Inmobiliaria Ceschinelli"
                  width={70}
                  height={70}
                  className="object-contain filter brightness-0 invert"
                />
                <div>
                  <h3 className="text-xl font-bold">Inmobiliaria Ceschinelli</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Nos dedicamos a alquileres, ventas y tasaciones en Tandil, Buenos Aires, Argentina.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+54 9 2494 311589</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>inmobiliariaceschinelli@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Tandil, Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/ceschinellinmobiliaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.facebook.com/tandil.inmobiliariaceschinelli.942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 Inmobiliaria Ceschinelli. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
