import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Modelo = ({url, position, rotation, scale, rota}) => {
    const { scene } = useGLTF(url);

    const referenciaObjeto = useRef();

    useFrame(() => {
        if(rota) {
            referenciaObjeto.current.rotation.y += 0.0006;
        }
    });

    return (
        <mesh ref={referenciaObjeto} position={position} rotation={rotation} scale={scale}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Modelo;