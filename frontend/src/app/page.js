"use client";

import { useState, useEffect } from "react";

import { fetchCountries } from "@/services/countriesServices";

import styles from './page.module.css';
import CountryList from "@/components/CountryList";

export default function Home() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("PAGES INDEX");

    async function loadCountries() {
      const countryData = await fetchCountries();
      setCountries(countryData);
      setLoading(false);
    }

    loadCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Country Info App</h1>
      <p className={styles.description}>Explore detailed information about countries around the world.</p>
      <main className={styles.main}>

        {/* {Country list} */}
        <CountryList countries={countries} />
      </main>
    </div>
  );
}
