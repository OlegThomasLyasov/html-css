async function start() {
    let url = 'https://jsonplaceholder.typicode.com/users/';
    let response = await fetch(url);
    let html = '';
    users = await response.json();
    
    console.log(users);
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.name}</h2>
                            <h2>${user.phone} ${user.username}</h2>
                            <div class="email"><a href="email:${user.website}">${user.website}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.getElementById('users');
    container.innerHTML = html;
}

start();


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', false);
// xhr.send();
// if (xhr.status == 200) {
//   commits = JSON.parse(xhr.responseText);
// } else {
//   console.error(xhr.status);
// }
// console.log(commits);