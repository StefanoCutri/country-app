
const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Function to fetch the list of available countries from the backend
export async function fetchCountries() {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/api/countries`);
    if (!response.ok) {
      throw new Error("Failed to fetch countries from backend");
    }
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

// Function to fetch detailed info about a specific country from the backend
export async function fetchCountryInfo(countryCode) {
  console.log("Call country info");
  
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/api/country/${countryCode}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch info for country: ${countryCode}`);
    }
    const countryInfo = await response.json();
    
    return countryInfo;
  } catch (error) {
    console.error(`Error fetching country info for ${countryCode}:`, error);
    return null;
  }
}
