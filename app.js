const gqlUrl = "http://localhost:3300/";

const fetchGreeting = async () => {
  const response = await fetch(gqlUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query {
                greeting
            }
        `,
    }),
  });
  const { data } = await response.json();
  return data;
};

fetchGreeting().then((data) => console.log(data)); // data - {greeting: "Hello from GraphQL"}
fetchGreeting().then(({ greeting }) => {
  console.log(greeting);
  document.querySelector("h1").innerText = greeting;
});
