/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `HOME worker response to ${data}`;
  postMessage(response);
});
