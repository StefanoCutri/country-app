export default function CountryCard({ country }) {
    return (
        <div>
            <h3>{country.name}</h3>
            <img src={country.flag} alt={`Flag of ${country.name}`} width="100" />
        </div>
    );
}
