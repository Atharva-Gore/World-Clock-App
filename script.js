const apiKey = "a53eb5438cf2463c9c105dcaf26b5f2d"; // Replace with your TimeZoneDB API key

async function getTimeData() {
  const location = document.getElementById("locationInput").value.trim();
  const result = document.getElementById("result");

  if (!location) {
    result.innerHTML = "<p>Please enter a location.</p>";
    return;
  }

  try {
    const response = await fetch(
      `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${location}`
    );

    if (!response.ok) throw new Error("Invalid location or API error");

    const data = await response.json();

    result.innerHTML = `
      <h2>${data.zoneName}</h2>
      <p>🕒 Time: ${data.formatted}</p>
      <p>🌍 Country: ${data.countryName}</p>
      <p>🕹 Timezone: ${data.abbreviation}</p>
      <p><a href="https://www.google.com/maps/search/${data.zoneName}" target="_blank">📍 View on Google Maps</a></p>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
