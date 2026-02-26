import LightRays from "@/components/LightRays";

export default function Home() {
  return (
  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1}
    lightSpread={1}
    rayLength={2}
    pulsating={false}
    fadeDistance={1}
    saturation={1}
    followMouse
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
  />
</div>
  );
}
