// Camera animation controller — lives inside R3F Canvas, animates camera with GSAP
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { CameraPosition } from '../../context/LabContext';

interface CameraRigProps {
  target: CameraPosition;
  reducedMotion: boolean;
}

export function CameraRig({ target, reducedMotion }: CameraRigProps) {
  const { camera } = useThree();
  const lookAtRef = useRef(new THREE.Vector3(target.lookAt[0], target.lookAt[1], target.lookAt[2]));
  const initialized = useRef(false);

  useEffect(() => {
    const [px, py, pz] = target.position;
    const [lx, ly, lz] = target.lookAt;

    if (!initialized.current) {
      camera.position.set(px, py, pz);
      lookAtRef.current.set(lx, ly, lz);
      camera.lookAt(lookAtRef.current);
      initialized.current = true;
      return;
    }

    if (reducedMotion) {
      camera.position.set(px, py, pz);
      lookAtRef.current.set(lx, ly, lz);
      camera.lookAt(lookAtRef.current);
      return;
    }

    // Kill any in-progress tweens
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(lookAtRef.current);

    gsap.to(camera.position, {
      x: px, y: py, z: pz,
      duration: 1.4,
      ease: 'power2.inOut',
    });

    gsap.to(lookAtRef.current, {
      x: lx, y: ly, z: lz,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(lookAtRef.current);
      },
    });
  }, [target, camera, reducedMotion]);

  return null;
}
