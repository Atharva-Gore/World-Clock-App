async function getTime() {
  const timezone = document.getElementById("timezone").value;
  const result = document.getElementById("result");

  if (!timezone) {
    result.innerHTML = "<p>Please select a timezone.</p>";
    return;
  }

  try {
    const res = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    const data = await res.json();

    const time = new Date(data.datetime).toLocaleTimeString();
    const date = data.datetime.split("T")[0];

    result.innerHTML = `
      <h2>${data.timezone}</h2>
      <p>🗓️ Date: ${date}</p>
      <p>🕒 Time: ${time}</p>
      <p>🕹 Offset: ${data.utc_offset}</p>
    `;
  } catch (error) {
    result.innerHTML = "<p style='color:red;'>Could not fetch time. Try again later.</p>";
  }
}
