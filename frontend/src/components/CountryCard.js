import Link from 'next/link';

import styles from '../app/page.module.css';

export default function CountryCard({ country }) {


    return (
        <li key={country.countryCode} className={styles.countryItem}>
            <Link href={`/country/${country.countryCode}`} className={styles.countryLink}>
                <span className={styles.countryName}>{country.name}</span>
                <span className={styles.countryCode}>{country.countryCode}</span>
            </Link>
        </li>
    );
}
