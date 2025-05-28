let scene, camera, renderer, geometries = [], particles = [];
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initBackground() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    const container = document.getElementById('background-animation');
    container.appendChild(renderer.domElement);

    // Create filled circles
    for(let i = 0; i < 30; i++) {
        const circleGeometry = new THREE.CircleGeometry(Math.random() * 0.5 + 0.2, 32);
        const circleMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`hsl(220, 70%, ${20 + Math.random() * 20}%)`),
            transparent: true,
            opacity: 0.6
        });
        const circle = new THREE.Mesh(circleGeometry, circleMaterial);
        
        circle.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
        );
        
        geometries.push({
            mesh: circle,
            initialPosition: circle.position.clone(),
            speed: Math.random() * 0.01 + 0.005
        });
        scene.add(circle);
    }

    // Create triangles
    for(let i = 0; i < 20; i++) {
        const triangleGeometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            0, 1, 0,
            -0.866, -0.5, 0,
            0.866, -0.5, 0
        ]);
        triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        
        const triangleMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`hsl(220, 70%, ${25 + Math.random() * 20}%)`),
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        
        const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
        triangle.scale.set(2, 2, 2);
        
        triangle.position.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40
        );
        
        geometries.push({
            mesh: triangle,
            initialPosition: triangle.position.clone(),
            speed: Math.random() * 0.01 + 0.005
        });
        scene.add(triangle);
    }

    // Create interactive particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 50;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(`hsl(220, 70%, 40%)`),
        size: 0.3,
        transparent: true,
        opacity: 0.8
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particles = positions;

    camera.position.z = 30;

    // Add mouse move event listener
    document.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
}

function animateBackground() {
    requestAnimationFrame(animateBackground);

    // Smooth camera movement
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    camera.position.x += (targetX - camera.position.x) * 0.01;
    camera.position.y += (-targetY - camera.position.y) * 0.01;
    camera.lookAt(scene.position);

    // Animate geometries
    geometries.forEach((item, index) => {
        const time = Date.now() * item.speed;
        
        // Circular motion
        item.mesh.position.x = item.initialPosition.x + Math.cos(time) * 2;
        item.mesh.position.y = item.initialPosition.y + Math.sin(time) * 2;
        
        // Rotate based on mouse position
        item.mesh.rotation.x += 0.002 * (mouseY * 0.5);
        item.mesh.rotation.y += 0.002 * (mouseX * 0.5);
    });

    // Animate particles
    for(let i = 0; i < particles.length; i += 3) {
        const time = Date.now() * 0.0005;
        particles[i + 1] += Math.sin(time + i) * 0.02;
        particles[i] += Math.cos(time + i) * 0.02;
    }
    scene.children[scene.children.length - 1].geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

window.addEventListener('load', () => {
    initBackground();
    animateBackground();
}); 