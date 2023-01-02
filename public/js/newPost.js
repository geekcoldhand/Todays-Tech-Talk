async function newFormHandler(e) {
  e.preventDefault();

  console.log("call");
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const userId = document.querySelector("#userId").value.trim();

  const response = await fetch(`/api/posts/new`, {
    method: "POST",
    credentials: "include",

    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to create post:::" + response.statusText);
  }
}

document.querySelector("#new-post").addEventListener("submit", newFormHandler);
