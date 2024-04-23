var hasNormalised = false;

normaliseBanner();
myInterval = setInterval(changeLanguage, 5000);

function normaliseBanner() {
    if (!hasNormalised) {
        var greeting = document.getElementById("greeting");
        var greetingDescription = document.getElementById(
            "greetingDescription",
        );
        greeting.innerHTML = "Hello!";
        greetingDescription.innerHTML =
            "We are Cenixa | Welcome to our website";
        hasNormalised = true;
    }
}

function changeLanguage() {
    var greeting = document.getElementById("greeting");
    var greetingDescription = document.getElementById("greetingDescription");
    if (greeting.innerHTML === "Hello!") {
        greeting.innerHTML = "नमस्ते!";
        greetingDescription.innerHTML =
            "हामी सेनिक्सा | हाम्रो वेबसाइटमा स्वागत छ";
    } else if (greeting.innerHTML === "नमस्ते!") {
        greeting.innerHTML = "hola!";
        greetingDescription.innerHTML =
            "Somos Cenixa | Bienvenido a nuestro sitio web!";
    } else if (greeting.innerHTML === "hola!") {
        greeting.innerHTML = "你好!";
        greetingDescription.innerHTML = "我們是 塞尼克薩 | 歡迎來到我們的網站";
    } else if (greeting.innerHTML === "你好!") {
        greeting.innerHTML = "Hello!";
        greetingDescription.innerHTML =
            "We are Cenixa | Welcome to our website";
    } else {
    }
}
