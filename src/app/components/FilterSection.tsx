import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
// import { Bathroom } from "@mui/icons-material";

interface FilterSectionProps {
  city: string;
  setCity: (city: string) => void;
  action: string;
  setAction: (action: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  city,
  setCity,
  // action,
  // setAction,
}) => {
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathroom, setBathroom] = useState<number>();

  return (
    <div className="flex w-full flex-col gap-4 px-8 max-sm:px-3 py-4">
      <div className="w-full flex gap-4">
        <FormControl className="w-2/4 max-sm:w-2/3">
          <InputLabel id="city-label">Location</InputLabel>
          <Select
            className="h-12 border"
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
        <Button className="px-3 py-2 rounded-md bg-blue-500 text-white">
          Search <SearchIcon className="ml-1 text-xl" />
        </Button>
      </div>
      <div className="w-full flex gap-4">
        <FormControl className="w-[100px]">
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            className="h-[50px]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={propertyType}
            label="type"
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <MenuItem value={"apartment"}>Apartment</MenuItem>
            <MenuItem value={"house"}>House</MenuItem>
            <MenuItem value={"land"}>Land</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-[100px]">
          <InputLabel id="demo-simple-select-label">Bed</InputLabel>
          <Select
            className="h-[50px]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bedrooms}
            label="type"
            onChange={(e) => setBedrooms(Number(e.target.value))}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-[100px]">
          <InputLabel id="demo-simple-select-label">Bath</InputLabel>
          <Select
            className="h-[50px]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bathroom}
            label="type"
            onChange={(e) => setBathroom(Number(e.target.value))}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-[100px]">
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            className="h-[50px]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priceRange}
            label="type"
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <MenuItem value="0-50k">0 - 50k</MenuItem>
            <MenuItem value="50k-100k">50k - 100k</MenuItem>
            <MenuItem value="100k-200k">100k - 200k</MenuItem>
            <MenuItem value="200k+">200k+</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterSection;
