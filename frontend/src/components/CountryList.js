import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  return (
    <div>
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </ul>
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
}
