// Khi trang đã tải xong, thực hiện các thao tác JavaScript
// Chú ý: file này xử lý hiệu ứng nhấn nút và hover card
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('is-pressed');
      setTimeout(() => button.classList.remove('is-pressed'), 180);
    });
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.transition = 'transform 0.2s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});