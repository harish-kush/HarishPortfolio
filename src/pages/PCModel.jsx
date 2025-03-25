import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

const PCModel = () => {
  return (
    <div className="w-full h-[50vh] px-2 flex justify-center items-center">
      <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default PCModel;
