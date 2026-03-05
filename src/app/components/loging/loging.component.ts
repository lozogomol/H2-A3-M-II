import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-loging',
  standalone: true,
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.scss'
})
export class LogingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cubeCanvas') cubeCanvas!: ElementRef;
  private renderer?: THREE.WebGLRenderer;
  private frameId?: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initThree();
    }
  }

  initThree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    this.renderer.setSize(400, 400);
    this.cubeCanvas.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 1); 
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00f2ff, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;

    const animate = () => {
      this.frameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      this.renderer?.render(scene, camera);
    };
    animate();
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log("Intentando iniciar sesión...");
  }

  ngOnDestroy() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    this.renderer?.dispose();
  }
}