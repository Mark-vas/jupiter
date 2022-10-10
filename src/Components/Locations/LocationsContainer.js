import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationsTC, loadLocationsTC } from "../../Store/Locations/action";
import {
  errorSelector,
  locationsSelector,
  infoSelector,
  numberPageSelector,
} from "../../Store/Locations/LocationsSelector";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Locations from "./Locations";

const LocationsContainer = () => {
  const numberPage = useSelector(numberPageSelector);
  const locations = useSelector(locationsSelector);
  const error = useSelector(errorSelector);
  const info = useSelector(infoSelector);
  const dispatch = useDispatch();
  const requestLocations = async (numberPage) => {
    dispatch(locationsTC(numberPage));
  };
  useEffect(() => {
    requestLocations(numberPage);
  }, []);
  debugger;
  const handleChange = (e, value) => {
    dispatch(loadLocationsTC(value));
    // console.log(e);
    // // e.target.dataset.testid;
    // // setCount(count + 1);
    // console.log(e.target.dataset.testid);
  };

  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : locations.length > 0 ? (
        <div>
          <Stack>
            <Pagination
              page={numberPage}
              count={info.pages}
              onChange={handleChange}
            />
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
