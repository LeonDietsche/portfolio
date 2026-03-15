import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const [renderMode, setRenderMode] = useState('desktop');

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateBackgroundMode = () => {
      if (reducedMotionQuery.matches) {
        setRenderMode('static');
        return;
      }

      setRenderMode(mobileQuery.matches ? 'mobile' : 'desktop');
    };

    updateBackgroundMode();

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', updateBackgroundMode);
      reducedMotionQuery.addEventListener('change', updateBackgroundMode);
      return () => {
        mobileQuery.removeEventListener('change', updateBackgroundMode);
        reducedMotionQuery.removeEventListener('change', updateBackgroundMode);
      };
    }

    mobileQuery.addListener(updateBackgroundMode);
    reducedMotionQuery.addListener(updateBackgroundMode);
    return () => {
      mobileQuery.removeListener(updateBackgroundMode);
      reducedMotionQuery.removeListener(updateBackgroundMode);
    };
  }, []);

  useEffect(() => {
    if (renderMode === 'static') {
      return undefined;
    }

    const mount = mountRef.current;
    if (!mount) return;
    const isMobile = renderMode === 'mobile';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    camera.position.z = isMobile ? 21 : 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: isMobile ? 'default' : 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.75 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Group to hold DNA structure
    const group = new THREE.Group();

    const numPoints = isMobile ? 84 : 100;
    const radius = 2;
    const height = 20;
    const turns = 4;
    const segments = numPoints;
    const step = height / segments;

    const strand1 = [];
    const strand2 = [];

    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2 * turns;
      const y = i * step - height / 2;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      strand1.push(new THREE.Vector3(x1, y, z1));
      strand2.push(new THREE.Vector3(x2, y, z2));

      // Add rung line
      const rungGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y, z1),
        new THREE.Vector3(x2, y, z2),
      ]);
      const rungMaterial = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.3 });
      const rung = new THREE.Line(rungGeometry, rungMaterial);
      group.add(rung);
    }

    // Add the two spiral strands as straight line segments
    const strandMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });

    const strand1Geometry = new THREE.BufferGeometry().setFromPoints(strand1);
    const strand2Geometry = new THREE.BufferGeometry().setFromPoints(strand2);

    const strand1Line = new THREE.Line(strand1Geometry, strandMaterial);
    const strand2Line = new THREE.Line(strand2Geometry, strandMaterial);

    group.add(strand1Line);
    group.add(strand2Line);

    scene.add(group);

    const animate = (time = 0) => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (document.hidden) {
        return;
      }

      if (isMobile) {
        const frameInterval = 1000 / 36;
        if (time - lastFrameTimeRef.current < frameInterval) {
          return;
        }
        lastFrameTimeRef.current = time;
      }

      group.rotation.y += isMobile ? 0.0024 : 0.003;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.75 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [renderMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        zIndex: -1,
        background: renderMode === 'static'
          ? 'radial-gradient(circle at top, rgba(226, 232, 240, 0.65), transparent 45%), radial-gradient(circle at bottom right, rgba(241, 245, 249, 0.95), rgba(255, 255, 255, 0.98) 55%)'
          : undefined,
      }}
    />
  );
};

export default ThreeBackground;
