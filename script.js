let noClickCount = 0;

// Sayfalar arası geçiş fonksiyonu
function nextStep(stepNumber) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// 1. Aşamada "Hayır" butonunu kaçırma mantığı
function moveButton() {
    const btn = document.getElementById('runaway-btn');
    const maxX = 100;
    const maxY = 50;

    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// "Vazgeçtim" butonuna basınca çalışan ceza ekranı ve 3 saniyelik bar
function showCryScreen() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('cry-screen').classList.add('active');

    let timeLeft = 3;
    let progressBar = document.getElementById('progress-bar');
    let timerText = document.getElementById('timer-text');
    
    progressBar.style.width = '0%';
    timerText.textContent = `Lütfen bekleyin, kendinize geliyorsunuz... (${timeLeft})`;

    // Barın dolması ve sürenin sayılması
    let startTime = Date.now();
    let duration = 3000; // 3 saniye

    let interval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let percentage = (elapsed / duration) * 100;
        
        if (percentage >= 100) {
            percentage = 100;
        }
        progressBar.style.width = percentage + '%';

        let currentSecond = 3 - Math.floor(elapsed / 1000);
        if (currentSecond < 1) currentSecond = 1;
        timerText.textContent = `Hayır vazgeçmedin! (${currentSecond})`;

        if (elapsed >= duration) {
            clearInterval(interval);
            // 3 saniye bitince otomatik olarak 3. aşamaya ("ÇOK HEYECANLANDIM") at
            nextStep(3);
        }
    }, 50);
}

// 4. Aşamada "Hayır" butonunu kaçırma ve "Evet"i büyütme mantığı
function moveFinalNo() {
    const noBtn = document.getElementById('final-no');
    const yesBtn = document.getElementById('final-yes');
    
    const maxX = 120; 
    const maxY = 80;

    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    noClickCount++;
    let currentScale = 1 + (noClickCount * 0.12);
    yesBtn.style.transform = `scale(${currentScale})`;
}

// Başarı ekranı
function sayYes() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
}
