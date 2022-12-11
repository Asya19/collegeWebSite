// changing languages
// function languages() {
  window.addEventListener('DOMContentLoaded', () => {
      const changelangObj = {
      'en': {
          // 'skills': 'Skills',
          // 'portfolio': 'Portfolio',
          // 'video': 'Video',
          // 'price': 'Price',
          // 'contacts': 'Contacts',
          'en': 'en',
          'ru': 'ru'
      },
      'ru': {
          // 'skills': 'Навыки',
          // 'portfolio': 'Портфолио',
          // 'video': 'Видео',
          // 'price': 'Цены',
          // 'contacts': 'Контакты',
          'en': 'анг',
          'ru': 'рус'          
      }
      };
      let lang = 'en';
      const btnLang = document.querySelectorAll('.btnLang');
      const transAtr = document.querySelectorAll('[data-changelang]');
      // const transInp = document.querySelectorAll('.contacts-input');
      //Translate page

      const getTranslate = (lang) => {
          transAtr.forEach(el => {
            console.log(el);
              let valueData = el.dataset.changelang;
              console.log(valueData);
              el.textContent = `${lang[valueData]}`;
          });

          // transInp.forEach(elem => {
          //     let valueData = elem.dataset.changelang;
          //     elem.placeholder = `${lang[valueData]}`;
          // })
      };

      const changeTranslate = (e) => {
          if (e.target.classList.contains('btnLang')) {
              btnLang.forEach(el => el.classList.remove('_active'));
              e.target.classList.add('_active');
              getTranslate(changelangObj[e.target.dataset.changelang]);
          }
          lang = e.target.dataset.changelang;
          setLocalStorage();
      };

      btnLang.forEach(el => el.addEventListener('click', changeTranslate));

      // Local storage for language
      function getLocalStorage() {
      if (localStorage.getItem('lang')) {
          const language = localStorage.getItem('lang');
          getTranslate(changelangObj[language]);
      }
      btnLang.forEach((el) => {
          if (el.dataset.changelang === localStorage.getItem('lang')) {
          el.classList.add('_active');
          }
          if (localStorage.getItem('lang') === null) {
          setLocalStorage();
          }
      });
      }
      window.addEventListener('load', getLocalStorage);

      function setLocalStorage() {
      localStorage.setItem('lang', lang);
      btnLang.forEach((el) => {
          if (el.dataset.changelang === localStorage.getItem('lang')) {
          el.classList.add('_active');
          }
      });
      }
  });

// languages();