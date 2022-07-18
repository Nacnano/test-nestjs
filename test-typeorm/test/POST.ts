(async () => {
  const rawResponse = await fetch("http://localhost:3000/users/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 123,
      firstName: "KU",
      lastName: "Y",
      isActive: true,
    }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();
