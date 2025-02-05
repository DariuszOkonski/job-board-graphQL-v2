function fetchGreeting() {
  fetch('http://localhost:9000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: '',
    }),
  });
}
