
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { AirBuds } from '../components/AirBuds'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="absolute top-0 left-0 p-8">
        <h1 className="text-4xl font-bold">AIr Buds</h1>
        <p className="text-lg text-gray-600">The next generation of sound.</p>
      </div>
      <div className="w-full h-screen">
        <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
          <color attach="background" args={['#f0f0f0']} />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} position={[-10, 10, 10]} />
          <Stage environment="city" intensity={0.6}>
            <AirBuds />
          </Stage>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
      <div className="absolute bottom-0 right-0 p-8 text-right">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg">
          Order Now
        </button>
      </div>
    </main>
  )
}