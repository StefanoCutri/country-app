import Link from 'next/link';

export default function CountryCard({ country }) {


    return (
        <li key={country.countryCode}>
            <Link href={`/country/${country.countryCode}`}>
                {country.name}
            </Link>
        </li>
    );
}
