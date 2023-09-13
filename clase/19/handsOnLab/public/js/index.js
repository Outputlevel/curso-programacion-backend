function getCookies(event) {
    event.preventDefault();

    fetch("/cookies/getCookies").then(
        async (response) => {
            console.log(await response.json());
        }
    );
}