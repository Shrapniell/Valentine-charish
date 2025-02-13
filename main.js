document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Force play music in SPCK
    setTimeout(() => {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }, 500);

    document.getElementById("envelope")?.addEventListener("click", function() {
        let envelope = document.getElementById("envelope");
        envelope.classList.add("opened");

        setTimeout(() => {
            document.getElementById("letter").classList.remove("hidden");
        }, 500);
    });
});

let noClickCount = 0;
const noResponses = [
    "Are you sure?", "Please reconsider!", "PLSPLPLS", "I'm sad now...", "PLEASE SAY YES", 
    "You don't love me?", "May kabit ka na ah?", "Plssss babyyy", "Sad talaga ako...", 
    "Sige kaa...", "Iiyak na ako bebi...", "PLEASEEEE"
];

function noClicked() {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    if (noClickCount < noResponses.length) {
        noBtn.textContent = noResponses[noClickCount];
        noClickCount++;
    }
    
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.1})`;
}

function goToCelebration() {
    window.location.href = "celebration.html";
}
document.getElementById("yesBtn")?.addEventListener("click", goToCelebration);
document.getElementById("noBtn")?.addEventListener("click", noClicked);
