async function newFormHandler(e) {
  e.preventDefault();

  console.log("call");
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const userId = document.querySelector("#userId").value.trim();

  console.log("calling:", [title, content, userId]);
  const response = await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify({
      title,
      userId,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#new-post").addEventListener("submit", newFormHandler);
