import { useRef, useState } from "react";

// Librerías de react-three-fiber y drei
import { Canvas } from "@react-three/fiber"
import { CameraControls, Loader } from "@react-three/drei"

// Modelos
import Cuerpo from "./Cuerpo"

function App() {


  const cameraControlsRef = useRef();
  const [minimaDistancia, setMinimaDistancia] = useState(3.2)
  const [maximaDistancia, setMaximaDistancia] = useState(4)

  const handleCambiarPosicion = (posicionCam, tipoObjeto) => {
    if(tipoObjeto === "Formulario") {
      cameraControlsRef.current?.setLookAt(0, 1.8, 2.5, posicionCam[0], 1, posicionCam[2], true)
      setMinimaDistancia(3.2)
      setMaximaDistancia(4)
    }
    else if(tipoObjeto === "Tierra") {
      cameraControlsRef.current?.setLookAt(posicionCam[0], posicionCam[1], 100, ...posicionCam, true) 
      setMinimaDistancia(100)
      setMaximaDistancia(200)
    }
    else if(tipoObjeto === "Jupiter") {
      cameraControlsRef.current?.setLookAt(posicionCam[0], posicionCam[1], 10, ...posicionCam, true)
      setMinimaDistancia(100)
      setMaximaDistancia(130)
    }
    else if(tipoObjeto === "Sol") {
      cameraControlsRef.current?.setLookAt(posicionCam[0], posicionCam[1], -10000, ...posicionCam, true)
      setMinimaDistancia(2000)
      setMaximaDistancia(3600)
    }
  }

  return (
    <>
      <div className='espacioCanva'>
        <Canvas camera={{position:[0, 1.3, 3], far: 100000}} style={{zIndex: "-1"}}>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={.5} />
          <directionalLight position={[-5000, 0, -12000]}/>
          <Cuerpo/>
          <CameraControls ref={cameraControlsRef} minDistance={minimaDistancia} maxDistance={maximaDistancia}/>
        </Canvas>
        <Loader dataInterpolation={(p) => `Cargando ${p.toFixed(2)}%`}/>
        <div className='footerCanvas'>
          <button onClick={() => handleCambiarPosicion([0, 0, 0], "Formulario")}>Formulario</button>
          <button onClick={() => handleCambiarPosicion([-300, 0, 0], "Tierra")}>Planeta tierra</button>
          <button onClick={() => handleCambiarPosicion([100, 0, -100], "Jupiter")}>Jupiter</button>
          <button onClick={() => handleCambiarPosicion([-5000, 0, -12000], "Sol")}>Sol</button>
        </div>
      </div>
    </>
  )
}

export default App;
