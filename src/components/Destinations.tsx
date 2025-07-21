import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import RishikeshImg from "../assets/rishikesh.jpg";
import KedarnathImg from "../assets/kedarnath (2).jpg";
import badrinath from "../assets/Badrinath.png"
import valleyofflower from "../assets/valleyofflower.jpg"
import jimcorbet from "../assets/jimcornetpark.jpg"
import yumnotri from "../assets/yumnotri.jpg"
import gangotri from "../assets/gangotri.jpg"
import tunnath from "../assets/tungnath.jpg"
const destinations = [
  {
    name: "Nainital",
    location: "Nainital, Uttarakhand, India",
    description: "A beautiful lake town nestled in the Kumaon hills.",
    lat: 29.3919,
    lng: 79.4542,
    image:
      "https://media.istockphoto.com/id/471622053/photo/lake-in-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUNzGKRKZOwadhaM7asCvPBUlmTjCDwYXTp6V_oZd7A=",
  },
  {
    name: "Rishikesh",
    location: "Rishikesh, Uttarakhand, India",
    lat: 30.0869,
    lng: 78.2676,
    description: "Yoga capital of the world with river rafting adventures.",
    image: RishikeshImg,
  },
  {
    name: "Kedarnath",
    location: "Kedarnath, Uttarakhand, India",
    lat: 30.7352,
    lng: 79.0669,
    description: "Sacred Himalayan temple surrounded by majestic peaks.",
    image: KedarnathImg,
  },
  {
    name: "Valley of Flowers National Park",
    location: "Chamoli, Uttarakhand",
    lat: 30.728,
    lng: 79.605,
    description: "Famous for its endemic flora and alpine meadows.",
    image: valleyofflower,
  },
  {
    name: "Jim Corbett National Park",
    location: "Nainital District, Uttarakhand",
    lat: 29.53,
    lng: 78.7747,
    description: "India’s oldest national park known for Bengal tigers.",
    image: jimcorbet,
  },
  {
    name: "Gangotri",
    location: "Gangotri, Uttarakhand, India",
    lat: 30.9943,
    lng: 78.9368,
    description: "One of the Char Dham pilgrimage sites, origin of river Ganga.",
    image: gangotri,
  },
  {
    name: "Yamunotri",
    location: "Yamunotri, Uttarakhand, India",
    lat: 31.0142,
    lng: 78.4601,
    description: "One of the sacred Char Dham, source of Yamuna River.",
    image: yumnotri,
  },
  {
    name: "Badrinath",
    location: "Badrinath, Uttarakhand, India",
    lat: 30.7433,
    lng: 79.493,
    description: "A major pilgrimage site of Char Dham nestled in Garhwal hills.",
    image: badrinath,
  },
  {
    name: "Tungnath",
    location: "Tungnath, Uttarakhand, India",
    lat: 30.4897,
    lng: 79.2194,
    description: "Highest Shiva temple in the world and part of Panch Kedar.",
    image: tunnath,
  },
];

const Destinations: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  // Center the map on Uttarakhand
  const center: [number, number] = [30.0668, 79.0193];

  // Polyline for connecting destinations (optional)
  const polylinePositions = destinations.map((dest) => [dest.lat, dest.lng]) as [number, number][];

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="py-10 px-4 bg-green-50">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Top Destinations in Uttarakhand</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {destinations.map((dest, idx) => (
          <div
            key={dest.name}
            className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ${
              selected === idx ? "ring-4 ring-green-400" : ""
            }`}
            onClick={() => setSelected(idx)}
            tabIndex={0}
            role="button"
            aria-pressed={selected === idx}
          >
            <img
              src={typeof dest.image === "string" ? dest.image : ""}
              alt={dest.name}
              className="w-full md:w-56 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2 text-green-700">{dest.name}</h3>
              <p className="text-green-600 mb-2">{dest.location}</p>
              <p className="text-gray-600">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={center} zoom={7} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {destinations.map((dest, idx) => (
            <Marker
              key={dest.name}
              position={[dest.lat, dest.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelected(idx),
              }}
            >
              <Popup>
                <div>
                  <strong className="text-green-700">{dest.name}</strong>
                  <br />
                  <span className="text-green-600">{dest.location}</span>
                  <br />
                  <img
                    src={typeof dest.image === "string" ? dest.image : ""}
                    alt={dest.name}
                    style={{ width: "100px", marginTop: "8px" }}
                  />
                  <br />
                  <span>{dest.description}</span>
                </div>
              </Popup>
            </Marker>
          ))}
          <Polyline positions={polylinePositions} color="green" />
        </MapContainer>
      </div>
    </div>
  );
};

export default Destinations;
