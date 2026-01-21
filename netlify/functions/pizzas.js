export async function handler() {
  try {
    const response = await fetch(
      "https://api.hothousenorthwood.co.uk/api/v1/pizza",
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch pizzas" }),
    };
  }
}
