// ===== ДАННЫЕ КВЕСТОВ =====
const QUESTS = [
  {
    id: 'sudnaya',
    name: 'СУДНАЯ НОЧЬ',
    image: 'images/sudnaya.svg',
    age: '16+',
    desc: 'СЕГОДНЯ МОЖНО ВСЁ.\nСИРЕНЫ МОЛЧАТ, ЗАКОН СПИТ.\nВОПРОС НЕ В ТОМ, ЧТО ТЫ СДЕЛАЕШЬ, А В ТОМ, УСПЕЕШЬ ЛИ ТЫ ДОБЕЖАТЬ ДО РАССВЕТА.',
    fear: 3,
    fearLevel: 'very',   // notscary | scary | very
    horrorType: 'trap',  // slasher | psych | trap
  },
  {
    id: 'solnce',
    name: 'СОЛНЦЕСТОЯНИЕ',
    image: 'images/solnce.svg',
    age: '18+',
    desc: 'ТЕБЯ ПРИГЛАСИЛИ НА ПРАЗДНИК ЛЕТА В ТИХУЮ ШВЕДСКУЮ ДЕРЕВНЮ. ОБРАТНОГО БИЛЕТА НЕ БУДЕТ. УЛЫБАЙСЯ, ПОКА ОНИ НЕ УЛЫБНУЛИСЬ ТЕБЕ В ПОСЛЕДНИЙ РАЗ.',
    fear: 1,
    fearLevel: 'notscary',
    horrorType: 'psych',
  },
  {
    id: 'collec',
    name: 'КОЛЛЕКЦИОНЕР',
    image: 'images/collec.svg',
    age: '16+',
    desc: 'ТЫ ДУМАЛ, ЧТО В ЭТОМ ДОМЕ ТОЛЬКО ЦЕННЫЕ ВЕЩИ. НО ТОТ, КТО ПРИШЁЛ СЮДА РАНЬШЕ ТЕБЯ, КОЛЛЕКЦИОНИРУЕТ СОВСЕМ ДРУГОЕ. И ТЫ КАК РАЗ ПОДОШЁЛ.',
    fear: 3,
    fearLevel: 'very',
    horrorType: 'trap',
  },
  {
    id: 'ono',
    name: 'ОНО',
    image: 'images/ono.svg',
    age: '16+',
    desc: 'СПУСТИСЬ В КАНАЛИЗАЦИЮ. УЛЫБНИСЬ КЛОУНУ.\nОН УЛЫБНЁТСЯ В ОТВЕТ.\nПОТОМ ТЫ ПОПЛЫВЁШЬ ТУДА, ГДЕ ТВОИ СТРАХИ ОБРЕТАЮТ ФОРМУ.',
    fear: 1,
    fearLevel: 'notscary',
    horrorType: 'psych',
  },
  {
    id: 'tishina',
    name: 'МЁРТВАЯ ТИШИНА',
    image: 'images/tishina.svg',
    age: '16+',
    desc: 'ТЕАТР ОТКРЫТ, НО ЗРИТЕЛИ СТРАННО МОЛЧАТ.\nКУКЛЫ НА СЦЕНЕ СЛЕДЯТ ЗА ТОБОЙ. ОДНО ДВИЖЕНИЕ — И ТЫ ЗАЙМЁШЬ МЕСТО В ПЕРВОМ РЯДУ. НАВСЕГДА.',
    fear: 2,
    fearLevel: 'scary',
    horrorType: 'psych',
  },
  {
    id: 'uzhas',
    name: 'УЖАСАЮЩИЙ',
    image: 'images/uzhas.svg',
    age: '18+',
    desc: 'КЛОУН АРТ ПРИГЛАШАЕТ ТЕБЯ НА ПРЕДСТАВЛЕНИЕ.\nОН ПОКАЗЫВАЕТ ФОКУСЫ. ГЛАВНЫЙ ТРЮК — ТВОЙ ПОСЛЕДНИЙ ВДОХ. АПЛОДИСМЕНТЫ НЕ НУЖНЫ.',
    fear: 2,
    fearLevel: 'scary',
    horrorType: 'slasher',
  },
  {
    id: 'pila',
    name: 'ПИЛА',
    image: 'images/pila.svg',
    age: '16+',
    desc: 'ТЫ ОТКРЫВАЕШЬ ГЛАЗА. ВОКРУГ РЖАВЧИНА, ПЛЁНКА И ТАЙМЕР.\nПРАВИЛО ПРОСТОЕ: ЧТОБЫ ЖИТЬ, НУЖНО ОТДАТЬ. ВОПРОС — ЧТО ИМЕННО.',
    fear: 2,
    fearLevel: 'scary',
    horrorType: 'trap',
  },
  {
    id: 'krik',
    name: 'КРИК',
    image: 'images/krik.svg',
    age: '18+',
    desc: 'СНИМИ ТРУБКУ.\nТВОЙ ЛЮБИМЫЙ ФИЛЬМ УЖАСОВ ПОДСКАЖЕТ ПРАВИЛА ВЫЖИВАНИЯ.\nОНИ НАПИСАНЫ ТОЛЬКО ДЛЯ ТОГО, ЧТОБЫ ИХ НАРУШИТЬ.',
    fear: 1,
    fearLevel: 'notscary',
    horrorType: 'slasher',
  },
  {
    id: 'texas',
    name: 'ТЕХАССКАЯ РЕЗНЯ БЕНЗОПИЛОЙ',
    image: 'images/texas.svg',
    age: '18+',
    desc: 'ЗАБРОШЕННАЯ ФЕРМА ПОСРЕДИ ЖАРЫ.\nВНУТРИ ПАХНЕТ ЖЕЛЕЗОМ И СТАРЫМ МЯСОМ.\nУ МЕСТНОГО ПОВАРА УЖЕ ГОТОВ НОВЫЙ РЕЦЕПТ.',
    fear: 3,
    fearLevel: 'very',
    horrorType: 'slasher',
  },
];

// ===== ПОРЯДКИ ДЛЯ ФИЛЬТРОВ =====

// Фильтр "ВСЕ" — порядок как в ТЗ (row1: судная, солнце, коллек; row2: оно, тишина, ужас; row3: пила, крик, техас)
const ORDER_ALL = [
  { ids: ['sudnaya', 'solnce', 'collec'] },
  { ids: ['ono', 'tishina', 'uzhas'] },
  { ids: ['pila', 'krik', 'texas'] },
];

// Фильтр "УРОВЕНЬ СТРАХА"
const ORDER_FEAR = [
  {
    label: 'НЕ СТРАШНО',
    zombies: 1,
    ids: ['ono', 'krik', 'solnce'],
  },
  {
    label: 'СТРАШНО',
    zombies: 2,
    ids: ['pila', 'tishina', 'uzhas'],
  },
  {
    label: 'ОЧЕНЬ СТРАШНО',
    zombies: 3,
    ids: ['sudnaya', 'collec', 'texas'],
  },
];

// Фильтр "ТИП ХОРРОРА"
const ORDER_TYPE = [
  {
    label: 'СЛЭШЕР (С АКЦЕНТОМ НА НАСИЛИЕ И ВЫЖИВАНИЕ ЖЕРТВ)',
    zombies: 0,
    ids: ['uzhas', 'krik', 'texas'],
  },
  {
    label: 'ПСИХОЛОГИЧЕСКИЙ ХОРРОР (МЕДЛЕННЫЙ ВНУТРЕННИЙ УЖАС)',
    zombies: 0,
    ids: ['ono', 'tishina', 'solnce'],
  },
  {
    label: 'ТРАП-ХОРРОР (СТРАДАНИЕ ПО ПРАВИЛАМ)',
    zombies: 0,
    ids: ['pila', 'sudnaya', 'collec'],
  },
];

// ===== HELPERS =====
function getQuest(id) {
  return QUESTS.find(q => q.id === id);
}

function zombieIcons(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<img src="images/zombie.svg" alt="zombie" />`;
  }
  return html;
}

function buildCard(quest) {
  return `
    <a class="quest-card" href="quest-${quest.id}.html">
      <div class="quest-card__img-wrap">
        <img src="${quest.image}" alt="${quest.name}" />
        <span class="quest-card__age">${quest.age}</span>
      </div>
      <div class="quest-card__body">
        <p class="quest-card__name">${quest.name}</p>
        <p class="quest-card__desc">${quest.desc}</p>
        <div class="quest-card__fear">
          <span class="quest-card__fear-label">УРОВЕНЬ СТРАХА</span>
          <div class="quest-card__fear-icons">${zombieIcons(quest.fear)}</div>
        </div>
      </div>
    </a>
  `;
}

function buildRow(ids) {
  return `<div class="cards-row">${ids.map(id => buildCard(getQuest(id))).join('')}</div>`;
}

// ===== RENDER =====
function renderAll() {
  const grid = document.getElementById('questsGrid');
  let html = '';
  ORDER_ALL.forEach(row => {
    html += buildRow(row.ids);
  });
  grid.innerHTML = html;
}

function renderFear() {
  const grid = document.getElementById('questsGrid');
  let html = '';
  ORDER_FEAR.forEach(group => {
    html += `<div class="cat-group">
      <div class="cat-row">
        <span class="cat-row__label">${group.label}</span>
        <div class="cat-row__zombies">${zombieIcons(group.zombies)}</div>
      </div>
      ${buildRow(group.ids)}
    </div>`;
  });
  grid.innerHTML = html;
}

function renderType() {
  const grid = document.getElementById('questsGrid');
  let html = '';
  ORDER_TYPE.forEach(group => {
    html += `<div class="cat-group">
      <div class="cat-row">
        <span class="cat-row__label">${group.label}</span>
      </div>
      ${buildRow(group.ids)}
    </div>`;
  });
  grid.innerHTML = html;
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    if (f === 'all') renderAll();
    else if (f === 'fear') renderFear();
    else if (f === 'type') renderType();
  });
});

// ===== INIT =====
renderAll();
