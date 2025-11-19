const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//Entrar
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if (!account) {
        alert("Ops! Verifique o usuário ou a senha.")
        return;
    }

    if (account) {
        if (account.password !== password) {
            alert("Ops! Verifique o usuário ou a senha.")
            return;
        }

        saveSession(email, checkSession);

        window.location.href = "home.html";
    }
})

// CRIAR CONTS
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-create-input").value;

    if (email.lenght < 5) {
        alert("Preencha o cmampo com um e-mail válido.");
        return;
    }

    if (senha.length < 4) {
        alert("Preencha a senha com no mínimo 4 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password: senha,
        transactions: []
    })

    myModal.hide();
    alert("Conta criada com sucesso!")


})

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }

    return;
}

function saveSession(data, session) {
    if (session) {
        localStorage.setItem("session", data);
    } else {
        sessionStorage.setItem("logged", data);
    }
}

function checkLogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}
