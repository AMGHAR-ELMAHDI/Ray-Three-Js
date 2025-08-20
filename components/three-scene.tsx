"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const productRef = useRef<THREE.Group>()
  const frameRef = useRef<number>()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 6)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Enhanced Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    const rimLight1 = new THREE.DirectionalLight(0xffd700, 0.8)
    rimLight1.position.set(-5, 2, -3)
    scene.add(rimLight1)

    const rimLight2 = new THREE.DirectionalLight(0xffffff, 0.6)
    rimLight2.position.set(3, -2, -5)
    scene.add(rimLight2)

    const pointLight = new THREE.PointLight(0xffd700, 1.0, 10)
    pointLight.position.set(0, 3, 2)
    scene.add(pointLight)

    const productGroup = new THREE.Group()

    // Main tube body - cylindrical like skincare tube
    const tubeGeometry = new THREE.CylinderGeometry(0.8, 0.8, 4.5, 32)
    const tubeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    })
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
    tube.position.y = 0
    tube.castShadow = true
    tube.receiveShadow = true
    productGroup.add(tube)

    // Tube cap - flat top like squeeze tube
    const capGeometry = new THREE.CylinderGeometry(0.85, 0.85, 0.3, 32)
    const capMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.3,
      clearcoat: 0.8,
    })
    const cap = new THREE.Mesh(capGeometry, capMaterial)
    cap.position.y = 2.4
    cap.castShadow = true
    productGroup.add(cap)

    // Gold accent band at bottom
    const goldBandGeometry = new THREE.CylinderGeometry(0.82, 0.82, 1.2, 32)
    const goldBandMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
    })
    const goldBand = new THREE.Mesh(goldBandGeometry, goldBandMaterial)
    goldBand.position.y = -1.8
    goldBand.castShadow = true
    productGroup.add(goldBand)

    // Label area - white section for text
    const labelGeometry = new THREE.CylinderGeometry(0.81, 0.81, 2.0, 32)
    const labelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.0,
      roughness: 0.8,
      opacity: 0.95,
      transparent: true,
    })
    const label = new THREE.Mesh(labelGeometry, labelMaterial)
    label.position.y = 0.2
    productGroup.add(label)

    // Decorative gold ring
    const ringGeometry = new THREE.TorusGeometry(0.85, 0.03, 8, 32)
    const ringMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd700,
      metalness: 1.0,
      roughness: 0.05,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.position.y = 1.2
    ring.castShadow = true
    productGroup.add(ring)

    scene.add(productGroup)
    productRef.current = productGroup

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 150
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 25
      posArray[i + 1] = (Math.random() - 0.5) * 25
      posArray[i + 2] = (Math.random() - 0.5) * 25

      // Gold and white particles
      const color = new THREE.Color()
      if (Math.random() > 0.5) {
        color.setHex(0xffd700) // Gold
      } else {
        color.setHex(0xffffff) // White
      }
      colorArray[i] = color.r
      colorArray[i + 1] = color.g
      colorArray[i + 2] = color.b
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let autoRotate = true
    let rotationVelocityX = 0
    let rotationVelocityY = 0
    const dampingFactor = 0.95
    const sensitivity = 0.008

    const handleMouseDown = (event: MouseEvent) => {
      setIsDragging(true)
      autoRotate = false
      rotationVelocityX = 0
      rotationVelocityY = 0
      setPreviousMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setTimeout(() => {
        autoRotate = true
      }, 4000)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        }

        rotationVelocityY = deltaMove.x * sensitivity
        rotationVelocityX = deltaMove.y * sensitivity

        if (productRef.current) {
          productRef.current.rotation.y += rotationVelocityY
          productRef.current.rotation.x += rotationVelocityX

          // Clamp X rotation to prevent flipping
          productRef.current.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, productRef.current.rotation.x))
        }

        setPreviousMousePosition({
          x: event.clientX,
          y: event.clientY,
        })
      } else {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        targetRotationY = mouseX * 0.15
        targetRotationX = mouseY * 0.08
      }
    }

    // Enhanced scroll interaction
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrollY / (maxScroll * 0.2), 1)

      if (cameraRef.current) {
        cameraRef.current.position.z = 6 - scrollProgress * 3
        cameraRef.current.position.y = scrollProgress * 2
      }

      if (productRef.current) {
        productRef.current.scale.setScalar(1 + scrollProgress * 0.5)
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        setIsDragging(true)
        autoRotate = false
        rotationVelocityX = 0
        rotationVelocityY = 0
        setPreviousMousePosition({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        })
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      setTimeout(() => {
        autoRotate = true
      }, 4000)
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isDragging && event.touches.length === 1) {
        const deltaMove = {
          x: event.touches[0].clientX - previousMousePosition.x,
          y: event.touches[0].clientY - previousMousePosition.y,
        }

        rotationVelocityY = deltaMove.x * sensitivity
        rotationVelocityX = deltaMove.y * sensitivity

        if (productRef.current) {
          productRef.current.rotation.y += rotationVelocityY
          productRef.current.rotation.x += rotationVelocityX

          // Clamp X rotation
          productRef.current.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, productRef.current.rotation.x))
        }

        setPreviousMousePosition({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        })
      }
    }

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      if (productRef.current) {
        if (!isDragging) {
          // Apply momentum when not dragging
          if (Math.abs(rotationVelocityX) > 0.001 || Math.abs(rotationVelocityY) > 0.001) {
            productRef.current.rotation.y += rotationVelocityY
            productRef.current.rotation.x += rotationVelocityX

            // Apply damping
            rotationVelocityX *= dampingFactor
            rotationVelocityY *= dampingFactor

            // Clamp X rotation
            productRef.current.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, productRef.current.rotation.x))
          }

          if (autoRotate && Math.abs(rotationVelocityX) < 0.001 && Math.abs(rotationVelocityY) < 0.001) {
            // Smooth easing to target rotation
            productRef.current.rotation.y += (targetRotationY - productRef.current.rotation.y) * 0.02
            productRef.current.rotation.x += (targetRotationX - productRef.current.rotation.x) * 0.02

            // Auto rotation when idle
            if (Math.abs(targetRotationY) < 0.01 && Math.abs(targetRotationX) < 0.01) {
              productRef.current.rotation.y += 0.002
            }
          }
        }

        // Enhanced floating animation
        const time = Date.now() * 0.001
        productRef.current.position.y = Math.sin(time * 0.8) * 0.15
        productRef.current.position.x = Math.cos(time * 0.5) * 0.05

        // Subtle breathing effect
        const breathe = 1 + Math.sin(time * 2) * 0.02
        productRef.current.scale.setScalar(breathe)
      }

      // Animate particles with more complex motion
      if (particlesMesh) {
        const time = Date.now() * 0.0005
        particlesMesh.rotation.y += 0.0008
        particlesMesh.rotation.x += 0.0003

        const positions = particlesMesh.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.001
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true
      }

      // Animate lights for dynamic atmosphere
      if (sceneRef.current) {
        const pointLight = sceneRef.current.getObjectByName("pointLight") as THREE.PointLight
        if (pointLight) {
          pointLight.intensity = 1.0 + Math.sin(Date.now() * 0.002) * 0.2
          pointLight.position.x = Math.cos(Date.now() * 0.001) * 2
        }
      }

      renderer.render(sceneRef.current, cameraRef.current)
    }

    animate()
    setIsLoaded(true)

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
        rendererRef.current.dispose()
      }
    }
  }, [isDragging, previousMousePosition])

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 transition-opacity duration-2000 cursor-grab active:cursor-grabbing ${isLoaded ? "opacity-100" : "opacity-0"}`}
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(255,215,0,0.1) 50%, rgba(0,0,0,0.05) 100%)",
      }}
    />
  )
}
