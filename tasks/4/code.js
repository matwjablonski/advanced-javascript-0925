// część z partial application

function request(baseUrl, path, options) {
    fetch(`${baseUrl}/${path}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

request("https://jsonplaceholder.typicode.com", "posts", { method: "GET" });
request("https://jsonplaceholder.typicode.com", "users", { method: "GET" });

api("posts", { method: "GET" }); // https://jsonplaceholder.typicode.com/posts
api("users", { method: "GET" }); // https://jsonplaceholder.typicode.com/users


// część z licznikiem wywołań z domknięciem

const apiWithCounter = () => {}


apiWithCounter("posts", { method: "GET" }); // [Request #1] https://jsonplaceholder.typicode.com/posts
apiWithCounter("users", { method: "GET" }); // [Request #2] https://jsonplaceholder.typicode.com/users