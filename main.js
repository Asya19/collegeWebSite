// changing languages
function languages() {
  window.addEventListener('DOMContentLoaded', () => {
    const changelangObj = {
      'en': {
        'ispo': 'Institute of Secondary Vocational Education',
        'booklet': 'SPO 2023 booklet',
        'contactsAdmin': 'Contacts of the admission committee',
        'openDays': 'Open days',
        'rules': 'Admission rules',
        'costEducation': 'Cost of education',
        'admission': 'Documents for admission',

        'p-1': 'Since 2012, the Institute of Secondary Vocational Education (formerly the University Polytechnic College) has been a structural subdivision of Peter the Great St. Petersburg Polytechnic University. The Institute of Secondary Vocational Education (ISPO) included the leading St. Petersburg educational institutions of secondary vocational education: the Radio Polytechnic and the Economics and Technology College of Nutrition. Over the 90 years of its existence, the Institute of Secondary Vocational Education has trained more than 77,000 highly qualified specialists.',
        'p-2': 'Successful training of specialists in demand in the labor market is ensured by the availability of modern educational and laboratory equipment and methodological support in the Institute of Postgraduate Education. A number of special disciplines are taught by the teaching staff of the university; The use of the university\'s electronic library allows organizing information and library support of the educational process at a modern level, including free access via the Internet to the electronic catalog.',
        'p-3': 'The knowledge gained during the training allows ISPO students to take part and win in national and international professional competitions as part of the Worldskills movement',
        'p-4': 'For more than 50 years, ISPO has been training specialists with in-depth knowledge of foreign languages ​​under the program of additional education, which provides for the study of special disciplines in a foreign language in senior courses. Graduates of the program receive a certificate of teaching a foreign language in the field of professional communications, which allows them to participate in various academic mobility programs, including the possibility of obtaining higher education abroad.',
        'p-5': 'ISPO graduates have the opportunity to study in specialized areas of higher education at the university. Enrollment is carried out according to the results of entrance examinations, the form and list of which is determined by the university itself. They are also always glad to see them as employees in large research and production organizations, in energy, information technology, service and food industries.',
        'p-6': 'ISPO has',

        'compCentre': 'computer center',
        'compNetwork': 'single computer network',
        'internet': 'Internet access',
        'multimed': 'multimedia cabinets',
        'educLab': 'modern educational laboratories',
        'library': 'library',
        'sportComplex': 'large sports and leisure complex',
        'swimPool': 'swimming pool',
        'cafe': 'canteen and student cafes',
        'hostel': 'comfortable hostel',
        'langClasses': 'language classes',
        
        'contacts': 'Contacts',
        'address': '23 Engels Ave., 194156, Saint Petersburg',
        'director': 'Director\'s reception:',
        'committee': 'Admission committee:',
        
        'student': 'Anastasia Kisko, correspondence department 328/1',
        'policy': 'Privacy Policy',
        'dev': 'Website development:',

        'en': 'en',
        'ru': 'ru'
      },
      'ru': {
        'ispo': 'Институт среднего профессионального образования',
        'booklet': 'Буклет ИСПО 2023',
        'contactsAdmin': 'Контакты приемной комиссии',
        'openDays': 'Дни открытых дверей',
        'rules': 'Правила приёма',
        'costEducation': 'Стоимость обучения',
        'admission': 'Документы для поступления',

        'p-1': 'С 2012 года Институт среднего профессионального образования (ранее Университетский политехнический колледж) является структурным подразделением Санкт-Петербургского политехнического университета Петра Великого. В состав Института среднего профессионального образования (ИСПО) вошли ведущие петербургские учебные заведения среднего профессионального образования: «Радиополитехникум» и «Экономико-технологический колледж питания». За 90 лет своего существования Институт среднего профессионального образования подготовил более 77000 высококвалифицированных специалистов.',
        'p-2': 'Успешная подготовка специалистов, востребованных на рынке труда, обеспечивается наличием в ИСПО современного учебно-лабораторного оборудования и методического обеспечения. По ряду специальных дисциплин преподавание ведется профессорско-преподавательским составом университета, часть лабораторных и практических занятий для студентов ИСПО проводятся в лабораториях Институтов высших школ СПбПУ. Использование электронной библиотеки университета позволяет организовать информационно-библиотечное обеспечение учебного процесса на современном уровне, включая свободный доступ через Интернет к электронному каталогу.',
        'p-3': 'Полученные во время обучения знания позволяют студентам ИСПО принимать участие и побеждать в национальных и международных профессиональных конкурсах в рамках движения Worldskills.',
        'p-4': 'Более 50-ти лет ИСПО осуществляет подготовку специалистов с углубленным знанием иностранных языков по программе дополнительного образования, которая предусматривает изучение специальных дисциплин на иностранном языке на старших курсах. Выпускники программы получают сертификат об обучении по иностранному языку в сфере профессиональных коммуникаций, что позволяет им участвовать в различных программах академической мобильности, включая возможность получения высшего образования за рубежом.',
        'p-5': 'Выпускники ИСПО имеют возможность обучаться по профильным направлениям высшего образования в университете. Зачисление осуществляется по результатам вступительных испытаний, форма и перечень которых определяется самим университетом. Их также всегда рады видеть в качестве сотрудников в крупных научно-производственных организациях, на предприятиях энергетики, информационных технологий, сферы обслуживании и индустрии питания.',
        'p-6': 'ИСПО располагает',

        'compCentre': 'вычислительным центром',
        'compNetwork': 'единой компьютерной сетью',
        'internet': 'выходом в интернет',
        'multimed': 'мультимедийными кабинетами',
        'educLab': 'современными учебными лабораториями',
        'library': 'библиотекой',
        'sportComplex': 'большим спортивно-досуговым комплексом',
        'swimPool': 'бассейном',
        'cafe': 'столовой и студенческими кафе',
        'hostel': 'благоустроенным общежитием',
        'langClasses': 'лингафонными классами',
        
        'contacts': 'Контакты',
        'address': 'пр. Энгельса, д. 23, 194156, Санкт-Петербург',
        'director': 'Приемная директора:',
        'committee': 'Приемная комиссия:',
        
        'student': 'Кисько Анастасия, заочное отделение 328/1',
        'policy': 'Политика конфиденциальности',
        'dev': 'Разработка сайта:',

        'en': 'анг',
        'ru': 'рус'
      }
    };
    let lang = 'en';
    const btnLang = document.querySelectorAll('.btnLang');
    const transAtr = document.querySelectorAll('[data-changelang]');

    const getTranslate = (lang) => {
      transAtr.forEach(el => {
        let valueData = el.dataset.changelang;
        el.textContent = `${lang[valueData]}`;
      });
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
}
languages();