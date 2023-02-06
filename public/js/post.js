const formElement = document.querySelector(".dashboardForm");

function handleFormSubmit(event) {
    event.preventDefault
    const obj = {
        title: document.getElementById("postTitle").value,
        content: document.getElementById("postContent").value,
    }
    fetch ('/api/post', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json(
    )).then(data => console.log(data))
}

formElement.addEventListener("submit", handleFormSubmit)