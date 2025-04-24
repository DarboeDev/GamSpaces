import React from "react";
import Image from "next/image";
import { LocationOnTwoTone } from "@mui/icons-material";
import { BathIcon, BedSingle } from "lucide-react";
import CropIcon from "@mui/icons-material/Crop";

const SpecificProperty = () => {
  const property = {
    id: 1,
    userId: 1,
    type: 1,
    title: "5-Bedroom House",
    owner: "John Doe",
    price: "1,200,000",
    description:
      "In the heart of the city, neat the beach, in a safe neighborhood, in a peaceful place. With a beautiful view of the beach, this house is perfect for a family or a group of friends. The house has 5 bedrooms, 6 bathrooms, a large living room, and a kitchen. The house is fully furnished and has all the amenities you need.",
    bedrooms: "5",
    bathrooms: "6",
    square_feet: "6x7.5m2",
    available: "Available",
    address: "Brusubi phase 1, Serrekunda, The Gambia",
    images: ["/living.jpg", "/home.jpg", "/home.jpg", "/window-building.jpg"],
    longitude: "-16.573000",
    latitude: "13.451290",
    created_at: new Date(),
    updated_at: new Date(),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 gap-4 p-4 md:p-6 lg:p-7 w-full">
      {/* Hero Image */}
      <div className="w-full relative">
        <Image
          src={property.images[0]}
          width={400}
          height={250}
          alt="property"
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl"
        />
        <div
          className="w-[150px] sm:w-[200px] h-[80px] sm:h-[100px] transition duration-300 hover:scale-95 bg-black bg-opacity-60 absolute bottom-5 sm:bottom-10 right-5 sm:right-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${property.images[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="text-white text-sm sm:text-base font-bold">
            View all {property.images.length} photos
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Left Side - Description */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <LocationOnTwoTone className="text-red-400" />
              {property.address}
            </p>
          </div>

          <p className="text-gray-600 text-base">{property.description}</p>

          {/* Image Thumbnails */}
          {property.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
              {property.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  alt={`property-${index}`}
                  className="w-full h-[100px] object-cover rounded-xl cursor-pointer hover:scale-95 transition ease-in-out duration-150"
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Brief Info */}
        <div className="w-full lg:w-1/3 p-5 bg-white flex flex-col gap-4 rounded-xl shadow-md">
          <h5 className="text-sm font-bold text-gray-600">Brief Information</h5>

          <div className="text-base flex items-center gap-2 text-gray-700">
            <strong>Owner:</strong> {property.owner}
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-gray-600">
              <BedSingle />
              <span className="text-base font-bold">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BathIcon />
              <span className="text-base font-bold">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CropIcon />
              <span className="text-base font-bold">
                {property.square_feet}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Price:</span>
              <span className="font-bold text-green-600">
                ${property.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Availability:</span>
              <span className="text-green-500 font-bold">
                {property.available}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Type:</span>
              <span className="text-gray-600">Residential</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecificProperty;
