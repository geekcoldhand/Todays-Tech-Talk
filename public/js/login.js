//Handle the login form
async function loginFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.replace("/dashboard");
      console.log("done");
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
      window.location.href = "/dashboard";
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
