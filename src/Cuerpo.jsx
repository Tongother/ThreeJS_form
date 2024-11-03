// Librerias de React
import './App.css'
import { Suspense } from 'react'

// Librerías de react-three-fiber y drei
import { Stars, Bounds} from "@react-three/drei"

// Modelos
import Modelo from './components/Modelo'
import PaginaWeb from './components/paginaWeb'

function Cuerpo() {

  return (
    <>
        <Suspense fallback={null}>
            <Bounds>
                <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
                <group position={[0, 0, 0]}>
                    <Modelo url={"./../public/computer.glb"} position={[0, 0, 0]} rotation={[0.2, 0, 0]} scale={[.5, .5, .5]} rota={false}/>
                    <mesh>
                    <PaginaWeb/>
                    </mesh>
                </group>
                <Modelo url={"./../public/black_hole_1.glb"} position={[1000, 0, 30000]} rotation={[0.2, 0, -0.3]} scale={[100, 100, 100]} rota={false}/>
                <Modelo url={"./../public/jupiter.glb"} position={[100, 0, -100]} rotation={[0, 0, 0]} scale={[10, 10, 10]} rota={true}/>
                <Modelo url={"./../public/sol.glb"} position={[-5000, 0, -12000]} rotation={[0.2, 0, 0]} scale={[800, 800, 800]} rota={true}/>
                <Modelo url={"./../public/tierra.glb"} position={[-300, 0, 0]} rotation={[0.2, 0, 0]} scale={[300, 300, 300]} rota={true}/>
                <Stars 
                    radius={10000}
                    depth={5}
                    count={2000}
                    factor={10}
                    saturation={0}
                    fade
                />
                </group>
            </Bounds>
        </Suspense>
    </>
  )
}

export default Cuerpo;
