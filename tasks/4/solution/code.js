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

const api = request.bind(null, "https://jsonplaceholder.typicode.com");

api("posts", { method: "GET" }); // https://jsonplaceholder.typicode.com/posts
api("users", { method: "GET" }); // https://jsonplaceholder.typicode.com/users

const createApi = (baseUrl) => {
    return function (path, options) {
        request(baseUrl, path, options);
    }
}

const api2 = createApi("https://jsonplaceholder.typicode.com");

api2("posts", { method: "GET" }); // https://jsonplaceholder.typicode.com/posts
api2("users", { method: "GET" }); // https://jsonplaceholder.typicode.com/users

const partial = (fn, ...args) => {
    return function(...rest) {
        return fn(...args, ...rest);
    }
}

const api3 = partial(request, "https://jsonplaceholder.typicode.com");

api3("posts", { method: "GET" });
api3("users", { method: "GET" });
// część z licznikiem wywołań z domknięciem

const createApiWithCounter = (baseUrl) => {
    let counter = 0;

    return function (path, options) {
        counter++;
        console.log(`[Request #${counter}] ${baseUrl}/${path}`);

        return request(baseUrl, path, options);
    }
}

const apiWithCounter = createApiWithCounter("https://jsonplaceholder.typicode.com");

apiWithCounter("posts", { method: "GET" }); // [Request #1] https://jsonplaceholder.typicode.com/posts
apiWithCounter("users", { method: "GET" }); // [Request #2] https://jsonplaceholder.typicode.com/users