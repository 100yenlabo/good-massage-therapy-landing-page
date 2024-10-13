// ページ内スクロール機能
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});