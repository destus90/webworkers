/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `APP worker response to ${data}`;
  postMessage(response);
});
