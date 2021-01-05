export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioStop = document.querySelector('.radio-stop');

  // Создание нового объекта Audio
  const audio = new Audio();

  // Определение типа нашего Audio
  audio.type = 'audio/aac';

  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  };

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }

  radioNavigation.addEventListener('change', event => {
    radioStop.disabled = false;
    const target = event.target;
    const parent = target.closest('.radio-item');

    selectItem(parent);

    // Получили название радиостанции и меняем его при выборе радиостанции
    const title = parent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parent.querySelector('.radio-img').src;
    radioCoverImg.src = urlImg;

    // Получаем src адрес станции через дата-атрибут и запускаем станцию с помощью методоа play()
    audio.src = target.dataset.radioStantion;

    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });
  
};