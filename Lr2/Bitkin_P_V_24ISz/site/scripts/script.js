// Получаем необходимые элементы из DOM
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeIcon = document.querySelector('.close');
const closeBtn = document.getElementById('closeBtn');
const contactForm = document.getElementById('contactForm');

// Открытие модального окна по клику на кнопку "Заказать консультацию"
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });
}

// Закрытие модального окна при клике на крестик
if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        modal?.classList.remove('show');
    });
}

// Закрытие модального окна при клике на кнопку "Закрыть"
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal?.classList.remove('show');
    });
}

// Закрытие модального окна при клике на подложку
if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Обработка отправки формы
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Форма отправлена!');
        modal?.classList.remove('show');
        e.target.reset();
    });
}

// Инициализация маски для поля ввода номера телефона
document.addEventListener('DOMContentLoaded', function () {
    var phoneInput = document.getElementById("tel");
    if (phoneInput) {
        Inputmask("+7 (999) 999-99-99").mask(phoneInput);
    }
});

