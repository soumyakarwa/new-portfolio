import React, { useEffect } from "react";
import "./Background.css";

/**
 * Background.jsx created a gradient background in the form of moving blobs
 */
const Background = () => {
  useEffect(() => {
    const canvas = document.getElementById("blobCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to generate a random number
    const randomNum = (min, max) => Math.random() * (max - min) + min;

    // Function to create blobs
    const createBlob = (color) => {
      // Increase the radius for larger blobs
      const radius = randomNum(canvas.width / 3, canvas.width / 2); // larger radius for bigger blobs
      const posX = randomNum(0, canvas.width);
      const posY = randomNum(0, canvas.height);
      const speedX = randomNum(-2, 2);
      const speedY = randomNum(-2, 2);

      return { radius, posX, posY, speedX, speedY, color };
    };

    // Create 3 blobs with specified colors
    let blobs = [
      createBlob("rgba(228, 213, 242, 0.8)"), // lavender
      createBlob("rgba(181, 245, 238, 0.6)"), // light blue
      createBlob("rgba(243, 244, 181, 0.7)"), // yellow
    ];

    // GREYS
    // createBlob("rgba(120, 120, 120, 0.5)"), // lavender
    // createBlob("rgba(100, 100, 100, 0.7)"), // light blue
    // createBlob("rgba(50, 50, 50, 0.8)"), // yellow

    // Function to animate blobs
    const animateBlobs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((blob) => {
        let gradient = ctx.createRadialGradient(
          blob.posX,
          blob.posY,
          0,
          blob.posX,
          blob.posY,
          blob.radius
        );
        gradient.addColorStop(0, blob.color); // Inner color is the blob's color
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Outer color - transparent white for a soft edge

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.posX, blob.posY, blob.radius, 0, Math.PI * 2, false);
        ctx.fill();

        // Update blob position
        blob.posX += blob.speedX;
        blob.posY += blob.speedY;

        // Reverse direction if blob hits canvas edges
        if (blob.posX < 0 || blob.posX > canvas.width) {
          blob.speedX *= -1;
        }
        if (blob.posY < 0 || blob.posY > canvas.height) {
          blob.speedY *= -1;
        }

        // // Animate gradient colors (example)
        // // This is a simplistic example and you would want to create a more complex function
        // // that generates colors dynamically and changes over time
        // blob.color = `rgba(${Math.floor(Math.random() * 255)},
        //                        ${Math.floor(Math.random() * 255)},
        //                        ${Math.floor(Math.random() * 255)}, 0.5)`;
      });

      requestAnimationFrame(animateBlobs);
    };

    // Start animation
    animateBlobs();
  }, []);

  return <canvas id="blobCanvas" />;
};

export default Background;
