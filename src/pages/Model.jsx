import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf"); 
  const modelRef = useRef(); 
  
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = -Math.PI / 2 + Math.sin(clock.elapsedTime * 0.5) * (Math.PI / 36);
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1} 
      position={[1.5, -1.5, 0]} 
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
};

export default Model;
