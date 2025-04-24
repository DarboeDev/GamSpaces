"use client";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [action, setAction] = useState("Buy");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  // const [completeProfile, setCompleteProfile] = useState(false);
  // const router = useRouter();

  // const fetchProfile = async () => {
  //   if (isLoaded && userId) {
  //     const checkProfile = await getProfile(userId);
  //     if (checkProfile?.message === "Profile not found") {
  //       setCompleteProfile(true);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   const checkAndFetchUser = async () => {
  //     await fetchProfile();
  //     const userData = await getUserData();
  //     if (userData === null) {
  //       await fetchUser(userId);
  //     }
  //   };

  //   if (isLoaded) {
  //     checkAndFetchUser();
  //   }
  // }, [isLoaded]);
  // useEffect(() => {
  //   router.refresh();
  // }, []);
  return (
    <>
      {/* {" "}
      {completeProfile && (
        <CompleteProfile
          userId={userId}
          setCompleteProfile={setCompleteProfile}
        />
      )} */}
      <main className="home flex h-[90vh] flex-col justify-between pt-16 pl-14 max-sm:px-3 max-sm:items-center">
        <div className="w-2/3 max-sm:w-full flex flex-col gap-10">
          <h1 className="text-black -z-0 font-bold text-7xl max-sm:text-6xl">
            <span className="sniglet-extrabold sniglet-extrabold drop-shadow-lg">
              Gam<span className="text-blue-500">Spaces</span>
            </span>
            : Your Trusted Home Finder
          </h1>
          <p className="text-xl text-black font-semibold">
            At GamSpaces , we help you discover your dream space with ease.
            Whether you&apos;re searching for a cozy apartment in the city or a
            spacious house in the suburbs, JokorHub connects you with the best
            listings in your area.
          </p>
        </div>

        <section className="search-bar -z-0 mb-8 max-sm:w-full bg-white bg-opacity-70 rounded-2xl px-6 py-4 flex gap-4 shadow-md w-2/3">
          <FormControl fullWidth>
            <InputLabel id="city-label">Location</InputLabel>
            <Select
              labelId="city-label"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="Location"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon className="text-blue-500" />
                </InputAdornment>
              }
            >
              <MenuItem value="banjul">Banjul</MenuItem>
              <MenuItem value="kanifing">Kanifing</MenuItem>
              <MenuItem value="brikama">Brikama</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="action-label">Buy or Rent</InputLabel>
            <Select
              labelId="action-label"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              label="Buy or Rent"
              startAdornment={
                <InputAdornment position="start">
                  <HouseIcon className="text-green-500" />
                </InputAdornment>
              }
            >
              <MenuItem value="buy">Buy</MenuItem>
              <MenuItem value="rent">Rent</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="property-type-label">Property Type</InputLabel>
            <Select
              labelId="property-type-label"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              label="Property Type"
              startAdornment={
                <InputAdornment position="start">
                  <HouseIcon className="text-purple-500" />
                </InputAdornment>
              }
            >
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="house">House</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="price-range-label">Price Range</InputLabel>
            <Select
              labelId="price-range-label"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              label="Price Range"
              startAdornment={
                <InputAdornment position="start">
                  <AttachMoneyIcon className="text-yellow-500" />
                </InputAdornment>
              }
            >
              <MenuItem value="low">Below D15,000</MenuItem>
              <MenuItem value="medium">D15,000 - D20,000</MenuItem>
              <MenuItem value="high">Above D20,000</MenuItem>
            </Select>
          </FormControl>

          <button
            type="button"
            title="btn"
            className="bg-black px-6 py-4 flex justify-center items-center rounded-xl"
          >
            <SearchIcon className="text-white" />
          </button>
        </section>
      </main>
    </>
  );
}
