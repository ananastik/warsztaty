//1. wyswietlic dane w konsoli (fetch lub $.ajax)
//2. wrzucic na strone uzytkownikow

window.onscroll = () =>{
    if (window.innerHeight+window.scrollY>=document.body.offsetHeight) {

        console.log("window.innerHeight"+"window.scrollY", window.innerHeight+window.scrollY);
        console.log("document.body.offsetHeight", document.body.offsetHeight);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
        response.forEach(user => {
            let uzytkownik = document.createElement("div");
            
            uzytkownik.innerHTML = `
            <p>Id: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Website: ${user.website}</p>
            <p>------------------------</p>
            `;
        // })
//         let uzytkownik = [];
//         for (let i = 0; i < response.length; ++i) {
//             uzytkownik = response[i];
//             let paragraf = document.createElement("p");

//             paragraf.innerHTML = `
//     Id: ${uzytkownik.id}, <br>
//     Name: ${uzytkownik.name}, <br>
//     Website: ${uzytkownik.website}
// `;

            // document.body.appendChild(paragraf);
            document.body.appendChild(uzytkownik);
        })

    })
    .catch(err => console.log("ooops, cos poszlo nie tak", err));
}}
