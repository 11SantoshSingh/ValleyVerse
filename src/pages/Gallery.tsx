import valley from "../assets/valleyofflower.jpg";
import mussoorie from "../assets/mussooriehills.jpg";
import haridwar from "../assets/harkipauri.jpg";
import auli from "../assets/auli.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const images = [
    { url: valley, title: "Valley of Flowers" },
    { url: mussoorie, title: "Mussoorie Hills" },
    { url: haridwar, title: "Har Ki Pauri, Haridwar" },
    { url: auli, title: "Auli Ski Resort" },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {image.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
