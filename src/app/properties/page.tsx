"use client";
import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import PropertyCard from "../components/PropertyCard";

interface Properties {
  id: number;
  userId: number;
  type: number;
  title: string;
  price: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  square_feet: string;
  available: string;
  address: string;
  images: string[];
  longitude: string;
  latitude: string;
  created_at: Date;
  updated_at: Date;
}

const Page = () => {
  const [city, setCity] = useState("");
  const [action, setAction] = useState("");
  const [properties, setProperties] = useState<Properties[]>([
    {
      id: 1,
      userId: 1,
      type: 1,
      title: "5-Bedroom House",
      price: "1,200,000",
      description:
        "In the heart of the city, neat the beach, in a safe neighborhood, in a peaceful place.",
      bedrooms: "5",
      bathrooms: "6",
      square_feet: "6x7.5m2",
      available: "Available",
      address: "Brusubi phase 1,",
      images: ["/home.jpg", "/home.jpg", "/home.jpg", "/window-building.jpg"],
      longitude: "-16.573000",
      latitude: "13.451290",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 1,
      userId: 1,
      type: 1,
      title: "5-Bedroom House",
      price: "1,200,000",
      description:
        "In the heart of the city, neat the beach, in a safe neighborhood, in a peaceful place.",
      bedrooms: "5",
      bathrooms: "6",
      square_feet: "6x7.5m2",
      available: "Available",
      address: "Brusubi phase 1,",
      images: ["/home.jpg", "/home.jpg", "/home.jpg", "/window-building.jpg"],
      longitude: "-16.573000",
      latitude: "13.451290",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 1,
      userId: 1,
      type: 1,
      title: "5-Bedroom House",
      price: "1,200,000",
      description:
        "In the heart of the city, neat the beach, in a safe neighborhood, in a peaceful place.",
      bedrooms: "5",
      bathrooms: "6",
      square_feet: "6x7.5m2",
      available: "Available",
      address: "Brusubi phase 1,",
      images: ["/home.jpg", "/home.jpg", "/home.jpg", "/window-building.jpg"],
      longitude: "-16.573000",
      latitude: "13.451290",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  return (
    <main className="w-full bg-white min-h-screen flex flex-col items-center">
      <FilterSection
        city={city}
        setCity={setCity}
        action={action}
        setAction={setAction}
      />
      <section className="w-full px-8 max-sm:px-3 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property: Properties) => (
            <PropertyCard
              key={property.id + Math.random()}
              property={property}
            />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </section>
    </main>
  );
};

export default Page;
