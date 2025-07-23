// Modal Box
const itemDetailModal2 = document.querySelector('#item-detail-modal-2');
const itemDetailButton2 = document.querySelector('.item-detail-button-2');

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
const modal = document.querySelector('#item-detail-modal-2');
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};