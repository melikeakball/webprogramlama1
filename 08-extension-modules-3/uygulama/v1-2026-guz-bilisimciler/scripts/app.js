// THE MUSE - Etkilesimli Sayfa Yonetimi ve Demo Kodlari
document.addEventListener('DOMContentLoaded', () => {
    // Sekme (Sayfa) Degistirme Yonetimi
    const buttons = document.querySelectorAll('nav button');
    const pages = document.querySelectorAll('.page');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            pages.forEach(page => page.classList.remove('active'));
            buttons.forEach(b => b.classList.remove('active'));

            const targetId = button.dataset.page;
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            button.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Kod Satiri Aciklama Etkilesimi
    document.querySelectorAll('.code .ln').forEach(line => {
        line.addEventListener('click', () => {
            const code = line.closest('.code');
            code.querySelectorAll('.ln').forEach(l => l.classList.remove('selected'));
            line.classList.add('selected');
            
            const infoBox = document.getElementById(code.dataset.explain + '-info');
            if (infoBox) {
                infoBox.textContent = line.dataset.info;
            }
        });
    });

    // Test Sekmesi - Mini Form Girdisi Dogrulama
    const input = document.getElementById('comment');
    const checkBtn = document.getElementById('check');
    const result = document.getElementById('result');

    if (checkBtn && input && result) {
        checkBtn.addEventListener('click', () => {
            const yorum = input.value.trim();
            if (yorum === '') {
                result.textContent = '⚠️ Lütfen yorum yazın.';
                result.style.color = '#9c2941';
            } else {
                result.textContent = '✓ Yorum geçerli! (Bu bir istemci doğrulama simülasyonudur.)';
                result.style.color = '#27734d';
            }
        });
    }
});

