import React, { Component } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import pointer from './assets/computers.glb';
import bgColor from './assets/26.png';
class Scene extends Component {
    constructor(props) {
        super(props)

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }
    loadPointer() {
        let self = this;
        const gltfLoader = new GLTFLoader(this.loadingManager)
        gltfLoader.load(
            pointer,
            (gltf) => {
                self.pointer = gltf.scene;
                self.pointer.scale.set(.6, .6, .6);
                self.pointer.position.y -= 1;
                self.pointer.position.z += 2;
                // self.pointer.add(self.camera);
                // self.pointer.castShadow = true;

                self.scene.add(gltf.scene)
                console.log(self.pointer);
            },
            (x) => {
            },
            // called when loading has errors
            (error) => {

                console.log('An error happened');
                console.log(error);

            }
        )

    }

    componentDidMount() {

        var loader = new THREE.TextureLoader();
        var backgroundTexture = loader.load(bgColor);
        const scene = new THREE.Scene()


        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 1.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        pointLight.rotation.x += 0.5;
        scene.add(pointLight)

        /**
         * Objects
         */
        // Material
        var material = new THREE.MeshStandardMaterial({ map: backgroundTexture });


        const geometry = new THREE.SphereGeometry(200, 32, 32);
        this.sphere = new THREE.Mesh(geometry, material);
        this.sphere.material.side = THREE.DoubleSide;
        scene.add(this.sphere);






        const sizes = {
            width: this.mount.clientWidth,
            height: this.mount.clientHeight
        }

        this.loadPointer();
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // renderer.shadowMap.enabled = true
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap
        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        )
        // camera.position.x = 1

        camera.position.y = 2;
        camera.position.z = 3;
        // camera.position.z = 2
        scene.add(camera)


        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        // controls.enableDamping = true

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        // scene.background = backgroundTexture;

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {
        if (this.pointer && this.sphere) {
            this.sphere.rotation.z += Math.cos(Math.PI / 5) / 100;
            this.sphere.rotation.x += Math.cos(Math.PI / 5) / 100;
            this.sphere.rotation.y += Math.cos(Math.PI / 2) / 100;
        }



        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
                style={{ width: '500px', height: '600px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default Scene;