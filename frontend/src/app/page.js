"use client";

import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";

import CountryList from "@/components/CountryList";
import { fetchCountries } from "@/services/countriesServices";

import styles from './page.module.css';

export default function Home() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCountries() {
      const countryData = await fetchCountries();
      setCountries(countryData);
      setLoading(false);
    }

    loadCountries();
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country List</h1>
      <main className={styles.main}>
        <CountryList countries={countries} />
      </main>
    </div>
  );
}
