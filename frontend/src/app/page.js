"use client";

import { useState, useEffect } from "react";

import CountryList from "@/components/CountryList";
import { fetchCountries } from "@/services/countriesServices";

import styles from './page.module.css';

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
    <div className={styles.container}>
      <h1 className={styles.title}>Country List</h1>
      <main className={styles.main}>
        <CountryList countries={countries} />
      </main>
    </div>
  );
}
