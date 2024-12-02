import { fetchLocationData } from "./location";
import type { LocationInfo } from "./location";

const GEOCODE_API_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
  if (process.argv.length !== 3) {
    console.error("usage: weather.ts LOCATION");
    return 1;
  }
  const location = process.argv[2];
  let locationInfo: LocationInfo;
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
  } catch (err) {
    console.error(err);
    return 1;
  }
  console.log(locationInfo);
  return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
