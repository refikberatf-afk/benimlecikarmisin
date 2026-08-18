let noClickCount = 0;
let hasTriedVazgec = false;

function nextStep(stepNumber) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

function goToStep2() {
    nextStep(2);
    if (hasTriedVazgec) {
        let vazgecBtn = document.getElementById('vazgec-btn');
        if (vazgecBtn) {
            vazgecBtn.style.display = 'none';
        }
    }
}

// 1. Aşamada Hayır butonunun üzerine gelince kilitlenme ve solma efekti
function lockButton() {
    const btn = document.getElementById('runaway-btn');
    btn.classList.add('locked-no');
    btn.textContent = "Kilitlendi 🔒";
}

function showCryScreen() {
    hasTriedVazgec = true;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('cry-screen').classList.add('active');

    let progressBar = document.getElementById('progress-bar');
    let timerText = document.getElementById('timer-text');
    
    progressBar.style.width = '0%';
    timerText.textContent = `Hayır vazgeçmedin! (3)`;

    let startTime = Date.now();
    let duration = 3000;

    let interval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let percentage = (elapsed / duration) * 100;
        
        if (percentage >= 100) percentage = 100;
        progressBar.style.width = percentage + '%';

        let currentSecond = 3 - Math.floor(elapsed / 1000);
        if (currentSecond < 1) currentSecond = 1;
        timerText.textContent = `Hayır vazgeçmedin! (${currentSecond})`;

        if (elapsed >= duration) {
            clearInterval(interval);
            goToStep2();
        }
    }, 50);
}

// Final aşamasında Hayır butonunu kaçırma (Burası eskisi gibi kaçmaya devam ediyor)
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

function sayYes() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
}
