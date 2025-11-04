"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 4
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0a0e27, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.TorusGeometry(1, 0.4, 16, 100),
      new THREE.OctahedronGeometry(1),
    ]

    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        emissive: 0x6d28d9,
        shininess: 100,
        wireframe: false,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        emissive: 0x4f46e5,
        shininess: 80,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xec4899,
        emissive: 0xbe185d,
        shininess: 120,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x14b8a6,
        emissive: 0x0d9488,
        shininess: 100,
      }),
    ]

    const objects: THREE.Mesh[] = []
    for (let i = 0; i < 5; i++) {
      const geom = geometries[i % geometries.length]
      const mat = materials[i % materials.length]
      const mesh = new THREE.Mesh(geom, mat.clone())
      mesh.position.x = (Math.random() - 0.5) * 10
      mesh.position.y = (Math.random() - 0.5) * 10
      mesh.position.z = (Math.random() - 0.5) * 8
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      scene.add(mesh)
      objects.push(mesh)
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 1.5)
    pointLight1.position.set(8, 8, 8)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x6366f1, 1)
    pointLight2.position.set(-8, -8, 8)
    scene.add(pointLight2)

    const pointLight3 = new THREE.PointLight(0x14b8a6, 0.8)
    pointLight3.position.set(0, 8, -8)
    scene.add(pointLight3)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      objects.forEach((obj, index) => {
        obj.rotation.x += 0.003 * (index + 1)
        obj.rotation.y += 0.005 * (index + 1)
        obj.rotation.z += 0.002 * (index + 1)
        obj.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.015
        obj.position.x += Math.cos(Date.now() * 0.0003 + index) * 0.01
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      // Cleanup geometries and materials
      geometries.forEach((g) => g.dispose())
      materials.forEach((m) => m.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-primary animate-glow">Parthasarathi V</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">MERN Stack Developer</p>

        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Crafting dynamic, responsive web applications with MongoDB, Express, React, and Node.js
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
