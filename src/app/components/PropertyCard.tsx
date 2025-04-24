"use client";
import React, { useState } from "react";
import BedIcon from "@mui/icons-material/Bed";
import CropIcon from "@mui/icons-material/Crop";
import Image from "next/image";
import { Bathtub, LocationOnTwoTone, Close } from "@mui/icons-material";
import Modal from "./modal";
import { useRouter } from "next/navigation";

interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  square_feet: string;
  available: string;
  address: string;
  images: string[];
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/properties/${property.id}`);
  };
  return (
    <>
      <div
        className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
        onClick={() => {
          handleCardClick();
        }}
      >
        <Image
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
          src={property.images[0]}
          alt="property"
        />
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-lg font-bold text-gray-800">{property.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-blue-600 font-semibold text-lg">
              D{property.price}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <LocationOnTwoTone className="mr-1 text-base text-red-400" />
              {property.address}
            </p>
          </div>
          <div className="flex justify-between text-sm text-gray-600 pt-2 border-t mt-2">
            <span className="flex items-center gap-1">
              <BedIcon fontSize="small" />
              {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bathtub fontSize="small" />
              {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <CropIcon fontSize="small" />
              {property.square_feet}
            </span>
          </div>
        </div>
      </div>

      {/* {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="text-center p-4">
            <h1 className="text-2xl font-bold mb-4">{property.title}</h1>
            <Image
              width={600}
              height={400}
              className="rounded-lg mx-auto"
              src={property.images[0]}
              alt="property large"
            />
            <p className="mt-4 text-gray-700">{property.description}</p>
            <p className="mt-2 text-blue-600 text-lg font-bold">
              Price: D{property.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">{property.address}</p>
          </div>
        </Modal>
      )} */}
    </>
  );
};

export default PropertyCard;
