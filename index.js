function sayHi(user) {
    alert(`Hello, {user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  const Sentry = require("@sentry/node");

Sentry.startSpan({
  op: "test",
  name: "My First Test Span",
}, () => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  }
});