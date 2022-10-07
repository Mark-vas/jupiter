import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationsTC, loadLocationsTC } from "../../Store/Locations/action";
import {
  errorSelector,
  locationsSelector,
  infoSelector,
} from "../../Store/Locations/LocationsSelector";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Locations from "./Locations";

const LocationsContainer = () => {
  const locations = useSelector(locationsSelector);
  const error = useSelector(errorSelector);
  const info = useSelector(infoSelector);
  const dispatch = useDispatch();
  const requestLocations = async () => {
    dispatch(locationsTC());
  };
  useEffect(() => {
    requestLocations();
  }, []);

  const handleChange = (e, value) => {
    debugger;
    dispatch(loadLocationsTC(value));
    // console.log(e);
    // // e.target.dataset.testid;
    // // setCount(count + 1);
    // console.log(e.target.dataset.testid);
  };

  console.log(locations);
  // console.log(info);
  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : locations.length > 0 ? (
        <div>
          <Stack>
            <Pagination count={info.pages} onChange={handleChange} />
          </Stack>
          <Locations locations={locations} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default LocationsContainer;
