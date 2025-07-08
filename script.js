const apiKey = "a53eb5438cf2463c9c105dcaf26b5f2d"; // ✅ Your key

async function getTime() {
  const timezone = document.getElementById("timezone").value;
  const result = document.getElementById("result");

  if (!timezone) {
    result.innerHTML = "<p>Please select a timezone.</p>";
    return;
  }

  try {
    const res = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&tz=${timezone}`);
    const data = await res.json();

    result.innerHTML = `
      <h2>${data.timezone}</h2>
      <p>🗓️ Date: ${data.date}</p>
      <p>🕒 Time: ${data.time_24}</p>
      <p>🕹 Offset: ${data.offset}</p>
      <p><a href="https://www.google.com/maps/search/${timezone}" target="_blank">📍 View on Google Maps</a></p>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color:red;">❌ Could not fetch time data.</p>`;
  }
}
