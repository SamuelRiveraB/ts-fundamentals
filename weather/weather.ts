const GEOCODE_AP_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
  if (process.argv.length !== 3) {
    console.error("usage: weather.ts LOCATION");
    return 1;
  }
  const location = process.argv[2];
  return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
