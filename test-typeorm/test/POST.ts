(async () => {
  const rawResponse = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 69,
      firstName: "Ligma",
      lastName: "Ball",
      email: "ligma.ball@nacnano.com",
      password: "llabamgil",
      isActive: true,
    }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();

// just fetch
fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 8,
    userId: "1282xm1j",
    firstName: "Chika",
    lastName: "Fujiwara",
    email: "fujiwara.chika@nacnano.com",
    password: "chika",
    role: "the unpredictable",
    isActive: true,
  }),
});
