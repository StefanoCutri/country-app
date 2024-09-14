"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Rings } from "react-loader-spinner";
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

import styles from "../../countryPage.module.css";

// Chart configuration
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

  // Fetch country data by code
  useEffect(() => {
    async function loadCountryInfo() {
      const countryData = await fetchCountryInfo(countryCode);
      setCountryData(countryData);
      setLoading(false);
    }

    loadCountryInfo();
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Rings
          height="220"
          width="220"
          color="#000"
          radius="20"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }

  console.log(countryData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.countryName}>{countryData.country.commonName}</h1>
        <p className={styles.countryCode}>
          Code: {countryData.country.countryCode}
        </p>
      </div>
      <div className={styles.flagContainer}>
        <img
          src={countryData.flagUrl}
          alt={`${countryData.country.name} flag`}
          className={styles.flagImage}
        />
      </div>
      <p>Neighbouring countries:</p>
      {countryData.borders.length === 0 ? (
        <p style={{ "margin-top": "20px" }}>No neighbouring countries</p>
      ) : (
        <ul className={`${styles.bordersList} ${styles.grid}`}>
          {countryData.borders.map((border, index) => (
            <li key={index} className={styles.bordersListItem}>
              {border.commonName}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.populationSection}>
        <h2 className={styles.populationTitle}>Population</h2>
        <div className={styles.chartContainer}>
          <Line
            data={{
              labels: countryData.population.map((pop) => pop.year),
              datasets: [
                {
                  label: "Población",
                  data: countryData.population.map((pop) => pop.value),
                  fill: false,
                  borderColor: "#00aaff",
                  tension: 0.1,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
