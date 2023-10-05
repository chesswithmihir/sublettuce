import React, { useState } from 'react';
import '../css/Locations.css';

const Locations = () => {
  // Example property data
  const properties = [
    { id: 1, name: 'Property 1', location: 'Los Angeles', price: '$1000/mo' },
    { id: 2, name: 'Property 2', location: 'San Francisco', price: '$1200/mo' },
    { id: 3, name: 'Property 3', location: 'Los Angeles', price: '$1100/mo' },
    // Add more property objects as needed
  ];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    // Filter properties based on the selected location
    const filtered = properties.filter((property) =>
      property.location === location
    );
    setFilteredProperties(filtered);
  };

  return (
    <div id="page-wrapper">
      <div id="header-wrapper">
        {/* ... Header content (if any) ... */}
      </div>

      <div id="main-wrapper">
        <div className="container">
          <div id="content">
            <article>
              <h2>Locations</h2>
              <p>Let's find you a good match!</p>
              <h3>Select a location:</h3>

              <div className="custom-dropdown">
                <select
                  className="styled-select"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="">Select a location</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Austin, TX">Austin, TX</option>
                </select>
                <span className="custom-arrow">&#9660;</span>
              </div>

              {selectedLocation && (
                <>
                  <h3>Properties in {selectedLocation}:</h3>
                  <ul>
                    {filteredProperties.map((property) => (
                      <li key={property.id}>
                        <strong>{property.name}</strong> - {property.price}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </div>
        </div>
      </div>

      <div id="footer-wrapper">
        {/* ... Footer content (if any) ... */}
      </div>
    </div>
  );
};

export default Locations;
