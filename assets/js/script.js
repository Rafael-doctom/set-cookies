function setCookie() {
    var data = new Date();
    data = data.toGMTString();
    var nome = ''
    document.cookie = nome + data + "; path=/";
    console.log(data);
    localStorage.setItem("1", "valueStorage");
};

function rejected() {
    console.log('Função rejected!');
};

