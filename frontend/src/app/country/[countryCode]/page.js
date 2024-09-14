"use client";

import { fetchCountryInfo } from "@/services/countriesServices";
import { useState, useEffect } from "react";

const CountryPage = ({ params }) => {

    const { countryCode } = params;

    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("PAGES INDEX");

        async function loadCountryInfo() {
            const countryData = await fetchCountryInfo(countryCode);
            setCountryData(countryData);
            setLoading(false);
        }

        loadCountryInfo();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    
    return (
        <div>
            <h1>{countryData.country.commonName}</h1>
            <h1>{countryData.country.countryCode}</h1>
            <img src={countryData.flagUrl} alt={`${countryData.country.commonName} flag`} />
            <h2>Population</h2>
            {/* <ul>
                {countryData.population.map((pop, index) => (
                    <li key={index}>{pop.year}: {pop.value}</li>
                ))}
            </ul>
            <h2>Borders</h2>
            <ul>
                {countryData.borders.map((border, index) => (
                    <li key={index}>{border}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default CountryPage

// import { fetchCountryInfo } from '@/services/countriesServices';
// import { notFound } from 'next/navigation';

// export default async function CountryPage ({ params }) {
//     const { countryCode } = params;

//     const countryData = await fetchCountryInfo(countryCode);

//    if (!countryData) {
//     notFound(); // Redirect to 404 page if no data is found
//     return null;
//   }

//     if (loading) return <p>Loading...</p>;

//     return (
//         <div>
//             <h1>{countryData.country.name}</h1>
//             <img src={countryData.flagUrl} alt={`${countryData.country.name} flag`} />
//             <h2>Population</h2>
//             {/* Render population data here */}
//             <ul>
//                 {countryData.population.map((pop, index) => (
//                     <li key={index}>{pop.year}: {pop.value}</li>
//                 ))}
//             </ul>
//             <h2>Borders</h2>
//             <ul>
//                 {countryData.borders.map((border, index) => (
//                     <li key={index}>{border}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// // Fetch data during server-side rendering (if needed)
// export async function generateMetadata({ params }) {
//     const { countryCode } = params;
//     const countryData = await fetchCountryInfo(countryCode);

//     return {
//         title: countryData?.country?.name || 'Country Details',
//         description: `Details for ${countryData?.country?.name || 'country'}`,
//     };
// }



