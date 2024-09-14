import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
    return (
        <div>
            {countries.length > 0 ? (
                <div>
                    {countries.map((country) => (
                        <CountryCard key={country.code} country={country} />
                    ))}
                </div>
            ) : (
                <p>No countries found.</p>
            )}
        </div>
    );
}
