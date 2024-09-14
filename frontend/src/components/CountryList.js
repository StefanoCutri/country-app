import CountryCard from './CountryCard';

import styles from '../app/page.module.css';

export default function CountryList({ countries }) {
  return (
    <div>
      {countries.length > 0 ? (
        <ul className={styles.grid}>
          {countries.map((country) => (
            <CountryCard key={country.countryCode} country={country} />
          ))}
        </ul>
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
}
