"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { fetchCountryInfo } from "@/services/countriesServices";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CountryPage = ({ params }) => {
  const { countryCode } = params;

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <img
        src={countryData.flagUrl}
        alt={`${countryData.country.commonName} flag`}
      />
      <ul>
        {countryData.borders.map((border, index) => (
          <li key={index}>{border.commonName}</li>
        ))}
      </ul>
      <h2>Population</h2>
      <Line
        data={{
          labels: countryData.population.map((pop) => pop.year),
          datasets: [
            {
              label: "Población",
              data: countryData.population.map((pop) => pop.value),
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default CountryPage;
