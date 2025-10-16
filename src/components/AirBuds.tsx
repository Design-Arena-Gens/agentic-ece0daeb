
'use client'

import React, { useRef } from 'react'
import { Group } from 'three'

export function AirBuds(props: React.JSX.IntrinsicElements['group']) {
  const group = useRef<Group>(null)

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 64]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.2, 0.2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow receiveShadow position={[0.2, 0.2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.2, 0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 64]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh castShadow receiveShadow position={[0.2, 0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 64]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  )
}
