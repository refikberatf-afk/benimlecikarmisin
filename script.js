let noClickCount = 0;

// Hayır butonuna mouse yaklaştığında veya tıklandığında rastgele ışınlanma mantığı
function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    // Ekran sınırları içinde rastgele koordine üret
    // Kartın boyutlarına göre butonun dışarı taşmasını engelliyoruz
    const maxX = 130; 
    const maxY = 100;

    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Her kaçtığında "Evet" butonunu biraz daha büyütelim ki çaresizce evete bassınlar 😄
    noClickCount++;
    let currentScale = 1 + (noClickCount * 0.1);
    yesBtn.style.transform = `scale(${currentScale})`;
}

function sayYes() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
}
