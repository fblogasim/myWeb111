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
            "My name is Asim | Welcome to my website";
        hasNormalised = true;
    }
}

function changeLanguage() {
    var greeting = document.getElementById("greeting");
    var greetingDescription = document.getElementById("greetingDescription");
    if (greeting.innerHTML === "Hello!") {
        greeting.innerHTML = "नमस्ते!";
        greetingDescription.innerHTML =
            "मेरो नाम आसिम हो  ।मेरो वेबसाइटमा स्वागत छ";
    } else if (greeting.innerHTML === "नमस्ते!") {
        greeting.innerHTML = "hola!";
        greetingDescription.innerHTML =
            "Mi nombre es Asim | ¡Bienvenidos a mi sitio web!";
    } else if (greeting.innerHTML === "hola!") {
        greeting.innerHTML = "你好!";
        greetingDescription.innerHTML = "我的名字是阿西姆 | 欢迎来到我的网站";
    } else if (greeting.innerHTML === "你好!") {
        greeting.innerHTML = "Hello!";
        greetingDescription.innerHTML =
            "My name is Asim | Welcome to my website";
    } else {
    }
}
