document.addEventListener('DOMContentLoaded', function() {

    const nome = document.querySelector('#nome');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#foto'); 
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    const perfil = 'MvthLeao'

    try {
        fetch(`https://api.github.com/users/${perfil}`)
        .then(function(res) {
            return res.json();
        })

        .then(function(json) {
            nome.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.innerText = json.html_url;
        })
        
        .catch(function(error) {
            console.log('Por favor, tente novamente mais tarde. ', error);
        });

    } catch(error) {
        console.log('Ocorreu um erro na requisição', error);
    }
});