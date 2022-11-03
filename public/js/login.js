//Handle the login form
async function loginFormHandler(e) {
  e.preventDefault();

  console.log("we have clicked login");

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    response.json;

    console.log("response . . . ", response);
    if (response.ok) {
      console.log("ok location", document.location);
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

// signup form
async function signupFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(username, password);

  if (username && password) {
    const response = await fetch("api/", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("post requested in signup");

    if (response.ok) {
      console.log("going to dash");

      window.location.replace("/dashboard/");
    } else {
      alert(`Uh oh ... ${response.statusText}`);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
