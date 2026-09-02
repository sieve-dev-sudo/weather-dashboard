function CityList({ cities, onSelectCity }) {
  if (cities.length === 0) {
    return (
      <p className="text-slate-500 text-sm mt-2">No cities found.</p>
    )
  }

  return (
    <ul className="mt-2 border border-slate-200 rounded-lg divide-y divide-slate-200 bg-white">
      {cities.map((city) => (
        <li
          key={city.id}
          onClick={() => onSelectCity(city)}
          className="px-4 py-2 cursor-pointer hover:bg-slate-100 flex items-center justify-between"
        >
          <span>{city.city}, {city.country}</span>
          <span>{city.icon} {city.temp}°C</span>
        </li>
      ))}
    </ul>
  )
}

export default CityList
