import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';

@Component({
  selector: 'app-loging',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.scss'
})
export class LogingComponent implements AfterViewInit {
  @ViewChild('cubeCanvas') cubeCanvas!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initThreeCube();
    }
  }

  initThreeCube() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(350, 350);
    this.cubeCanvas.nativeElement.appendChild(renderer.domElement);

  
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00f2ff, 
      wireframe: true,
      transparent: true,
      opacity: 0.6 
    });
    
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
  }
}