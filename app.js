
const STORAGE_KEY = 'mufasih-student-v5';

const baseData = {
  dialects: {
    'تلقائي': {
      examples: ['اكتشاف اللهجة الأقرب من الكلمات المكتوبة.'],
      map: { 'أبغي':'أريد', 'ابغي':'أريد', 'الحين':'الآن', 'وش':'ما', 'شو':'ماذا', 'السالفة':'الخبر', 'عايز':'أريد', 'إزاي':'كيف', 'مش':'ليس', 'مرة':'جدًا', 'كتير':'جدًا', 'بدك':'تريد', 'منيح':'جيد', 'كويس':'جيد', 'مدري':'لا أدري' }
    },
    'إماراتي/خليجي': {
      examples: ['وش السالفة؟ → ما الخبر؟', 'أبغي أروح الحين → أريد أن أذهب الآن.'],
      map: { 'أبغي':'أريد', 'ابغي':'أريد', 'بغيت':'أردت', 'وش':'ما', 'السالفة':'الخبر', 'الحين':'الآن', 'ماشي':'حسنًا' }
    },
    'سعودي': {
      examples: ['ودي أذاكر → أود أن أذاكر.', 'مرة حلو → جميل جدًا.'],
      map: { 'ودي':'أود', 'مرة':'جدًا', 'يبغى':'يريد', 'مدري':'لا أدري' }
    },
    'مصري': {
      examples: ['عايز أفهم → أريد أن أفهم.', 'إزايك؟ → كيف حالك؟'],
      map: { 'عايز':'أريد', 'إزاي':'كيف', 'كويس':'جيد', 'مش':'ليس', 'بلاش':'دع', 'هزار':'مزاح' }
    },
    'شامي': {
      examples: ['شو بدك؟ → ماذا تريد؟', 'كتير منيح → جيد جدًا.'],
      map: { 'شو':'ماذا', 'بدك':'تريد', 'كتير':'جدًا', 'منيح':'جيد' }
    }
  },
  questions: {
    'مبتدئ': [
      { q:'اختر الصياغة الفصحى لـ (أبغي أروح الحين).', choices:['أريد أن أذهب الآن.','أبي أروح الحين.','أريد أروح الحين.'], correct:0, why:'«أريد» فصحى و«الآن» أدق من «الحين».' },
      { q:'اختر الفصحى لـ (شو بدك؟).', choices:['ماذا تريد؟','شو تبي؟','ليش بدك؟'], correct:0, why:'«ماذا تريد؟» صياغة معيارية.' }
    ],
    'متوسط': [
      { q:'اختر الفصحى لـ (مش فاهم الكلام).', choices:['لستُ فاهمًا الكلام.','مش فاهم.','مو فاهم.'], correct:0, why:'«لست» أسلوب نفي فصيح.' },
      { q:'اختر الأفضل: (مرة كويس) تصبح…', choices:['جيد جدًا','كويس مرة','زين واجد'], correct:0, why:'«جدًا» تقابل «مرة» في الفصحى.' }
    ],
    'متقدم': [
      { q:'اختر الصياغة الأفصح: (أبي أعرف وش القصة الآن).', choices:['أريد أن أعرف ما القصة الآن.','أبغي أعرف وش السالفة.','أريد أعرف وش القصة.'], correct:0, why:'استخدام «أريد أن» + «ما» استفهامية.' },
      { q:'اختر الصياغة البلاغية الأنسب لـ (مرة حزين).', choices:['أشعر بحزنٍ عميق.','أنا مرة حزين.','حزين واجد.'], correct:0, why:'«حزن عميق» تعبير فصيح أقوى.' }
    ]
  },
  
jokes: [
  'واحد قال لصاحبه: وش تسوي؟ قال: أرتّب كلامي قبل لا أرتّب غرفتي!',
  'طالب قال: أبي أخلص الواجب بسرعة، قال له المعلم: بسرعة نعم، لكن بإتقان أجمل.',
  'واحد قال: الفصحى صعبة. قال الثاني: إذا أخذتها شوي شوي، صارت صاحبتك.'
],

stories: {
  'قصص جاهزة': [
    { title:'الطالب المثابر', text:'كان الطالب يعود إلى كتبه كل مساء، فيقرأ قليلًا ويفهم كثيرًا، حتى صار الاجتهاد عادةً محببة إليه.' },
    { title:'موعد مع النجاح', text:'أدركت الطالبة أن تنظيم الوقت يفتح أبواب الإنجاز، فجعلت لكل مهمة وقتًا، ولكل هدف خطوة.' }
  ],
  'شعر/أمثال': [
    { title:'مثل', text:'من جدَّ وجد، ومن سار على الدرب وصل.' },
    { title:'بيت شعر', text:'العلم يرفع بيتًا لا عماد له، والجهل يهدم بيت العز والكرم.' }
  ]
},

prizes: [
  { name:'مجموعة كتب عربية', cost:180 },
  { name:'بطاقة متجر تعليمي', cost:220 },
  { name:'رحلة ثقافية', cost:300 },
  { name:'اشتراك منصة قراءة', cost:140 }
],
titles: [
    { name:'فصيح ناشئ', need:20 },
    { name:'سفير الفصحى', need:80 },
    { name:'أديب صغير', need:150 },
    { name:'بلاغي محترف', need:250 }
  ],
  wordPairs: [
    ['أبغي','أريد'], ['وش','ما'], ['عايز','أريد'], ['شو','ماذا'], ['كتير','جدًا'], ['مرة','جدًا'], ['مش','ليس'], ['مدري','لا أدري']
  ],
  reorderSentences: [
    'أريد أن أذهب الآن',
    'كيف حالك اليوم',
    'أحب تعلم اللغة العربية',
    'من جد وجد ومن زرع حصد'
  ]
};


const defaultState = {
  currentView: 'convert',
  testLevel: 'مبتدئ',
  profile: { name:'ناصر', school:'المدرسة الأمريكية للإبداع العلمي.', grade:'الصف التاسع', avatar:'ن', mode:'متصل' },
  settings: { dialect:'تلقائي', level:'مباشر', voice:'محلي', reminders:'مفعّل', readingMode:'واضح' },
  points: 21,
  badges: ['فصيح ناشئ'],
  tests: { 'مبتدئ':[50,0], 'متوسط':[0], 'متقدم':[] },
  gameBest: { word:0, reorder:2 },
  myStories: [],
  activity: { expressions:0, dailyDone:0, weeklyDone:false, jokeConversions:0 },
  currentTestIndex: 0,
  currentTestScore: 0,
  testStarted: false,
  selectedJoke: 0,
  selectedStoryCategory: 'قصص جاهزة',
  selectedStoryIndex: 0,
  game1: { score:0, answer:null, current:null },
  game2: { score:0, current:'' }
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return deepMerge(structuredClone(defaultState), saved || {});
  } catch {
    return structuredClone(defaultState);
  }
}

function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const state = loadState();
const q = (s) => document.querySelector(s);
const qa = (s) => Array.from(document.querySelectorAll(s));
const contentScroll = () => q('#contentScroll');
const loginScreen = q('#loginScreen');
const appScreen = q('#appScreen');
const drawer = q('#drawer');
const drawerOverlay = q('#drawerOverlay');

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function addPoints(points) {
  state.points += points;
  if (state.points < 0) state.points = 0;
  saveState();
  refreshGlobalUI();
}


function refreshGlobalUI() {
  q('#pointsBadgeTop').textContent = `⭐ ${state.points}`;
  q('#progressPoints').textContent = state.points;
  q('#progressBadges').textContent = state.badges.length;
  q('#profilePoints').textContent = state.points;
  q('#profileTestCount').textContent = Object.values(state.tests).reduce((sum, arr) => sum + arr.length, 0);
  q('#profileGameBest').textContent = Math.max(state.gameBest.word, state.gameBest.reorder);

  const avatar = (state.profile.avatar || state.profile.name || 'ط').trim().slice(0, 1);
  q('#drawerAvatar').textContent = avatar;
  q('#profileAvatar').textContent = avatar;
  q('#studentNameLabel').textContent = state.profile.name;
  q('#studentSchoolLabel').textContent = state.profile.school;
  q('#profileName').textContent = state.profile.name;
  q('#profileSchoolGrade').textContent = `${state.profile.school} • ${state.profile.grade}`;
  q('#profileNameInput').value = state.profile.name;
  q('#profileSchoolInput').value = state.profile.school;
  q('#profileGradeInput').value = state.profile.grade;
  q('#profileAvatarInput').value = state.profile.avatar;
  q('#profileModeSelect').value = state.profile.mode;
  renderProfileTitles();
  renderChallenges();
}



function renderProfileTitles() {
  const currentTitle = [...baseData.titles]
    .reverse()
    .find(item => state.points >= item.need || state.badges.includes(item.name));
  q('#profileCurrentTitle').textContent = currentTitle ? currentTitle.name : 'في بداية الطريق';
  q('#profileTitlesList').innerHTML = baseData.titles
    .filter(item => state.points >= item.need || state.badges.includes(item.name))
    .map(item => `<div class="title-chip unlocked">${item.name}</div>`)
    .join('') || '<div class="title-chip">اجمع نقاطًا أكثر لفتح أول لقب.</div>';
}

function getWeeklyTasks() {
  const testsDone = Object.values(state.tests).reduce((sum, arr) => sum + arr.length, 0) >= 2;
  const gameDone = Math.max(state.gameBest.word, state.gameBest.reorder) >= 1;
  const storyDone = state.myStories.length >= 1;
  const expressionDone = (state.activity?.expressions || 0) >= 1;
  return [
    { label:'أنهِ اختبارين على الأقل', done: testsDone },
    { label:'أنجز لعبة واحدة بنجاح', done: gameDone },
    { label:'احفظ نصًا في أدبنا الفصيح', done: storyDone },
    { label:'استخدم نافذة التعبير مرة واحدة', done: expressionDone }
  ];
}

function renderChallenges() {
  const tasks = getWeeklyTasks();
  q('#dailyDoneCount').textContent = state.activity?.dailyDone || 0;
  q('#weeklyTaskCount').textContent = `${tasks.filter(task => task.done).length}/4`;
  q('#weeklyTaskList').innerHTML = tasks.map(task => `
    <div class="task-item ${task.done ? 'done' : ''}">
      <span class="task-mark">${task.done ? '✓' : '•'}</span>
      <span>${task.label}</span>
    </div>
  `).join('');
}

function openDrawer() {

  drawer.classList.add('open');
  drawerOverlay.classList.add('show');
}
function closeDrawerNow() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
}

function setView(viewName) {
  state.currentView = viewName;
  qa('.view').forEach(v => v.classList.toggle('active', v.dataset.view === viewName));
  qa('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.section === viewName));
  const currentBtn = q(`.nav-item[data-section="${viewName}"]`);
  q('#activeTitle').textContent = currentBtn ? currentBtn.textContent : 'مُفصّح اللسان';
  closeDrawerNow();
  saveState();
  const scroller = contentScroll();
  if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateDialectSelects() {
  const options = Object.keys(baseData.dialects).map(name => `<option>${name}</option>`).join('');
  q('#dialectSelect').innerHTML = options;
  q('#settingsDialectSelect').innerHTML = options;
  q('#dialectSelect').value = state.settings.dialect;
  q('#settingsDialectSelect').value = state.settings.dialect;
  q('#settingsLevelSelect').value = state.settings.level;
  q('#convertLevelSelect').value = state.settings.level;
  renderDialectExamples();
}

function renderDialectExamples() {
  const dialect = q('#dialectSelect').value || 'تلقائي';
  const examples = baseData.dialects[dialect].examples || [];
  q('#dialectExamples').innerHTML = examples.map(text => `<span class="demo-chip active">${text}</span>`).join('');
}

function detectDialect(text) {
  for (const [dialect, info] of Object.entries(baseData.dialects)) {
    if (dialect === 'تلقائي') continue;
    if (Object.keys(info.map).some(word => text.includes(word))) return dialect;
  }
  return 'إماراتي/خليجي';
}

function convertDialectText(text, selectedDialect) {
  const dialect = selectedDialect === 'تلقائي' ? detectDialect(text) : selectedDialect;
  const mapping = { ...baseData.dialects['تلقائي'].map, ...baseData.dialects[dialect].map };
  let output = text;
  const changes = [];
  Object.entries(mapping).forEach(([from, to]) => {
    if (output.includes(from)) {
      output = output.replaceAll(from, to);
      changes.push([from, to]);
    }
  });

  output = output
    .replaceAll('أريد أذهب', 'أريد أن أذهب')
    .replaceAll('أريد أعرف', 'أريد أن أعرف')
    .replaceAll('ما الخبر', 'ما الخبر')
    .replaceAll('ما القصة', 'ما القصة');

  const explain = [];
  if (selectedDialect === 'تلقائي') explain.push(`تم التعرف على لهجة أقرب إلى: ${dialect}`);
  if (changes.length === 0) explain.push('لم تُكتشف كلمات كثيرة قابلة للاستبدال، فتم الحفاظ على النص كما هو مع تهذيبه.');
  else explain.push(`تم استبدال ${changes.length} مفردات بصياغات فصيحة أوضح.`);
  const level = q('#convertLevelSelect').value;
  if (level === 'رشيق') explain.push('المستوى الرشيق يجعل الجملة أنعم وأقرب إلى الأسلوب الدراسي.');
  if (level === 'محسّن') explain.push('المستوى المحسّن يركز على إكمال التركيب وصقل العبارة.');

  return { output, explain, changes };
}

function renderConvert() {
  const text = q('#dialectInput').value.trim();
  const dialect = q('#dialectSelect').value;
  if (!text) return;
  const result = convertDialectText(text, dialect);
  q('#convertResult').textContent = result.output;
  q('#convertExplain').innerHTML = result.explain.map(item => `<span class="explain-item">${item}</span>`).join('');
  q('#convertDiff').innerHTML = result.changes.map(([from, to]) => `<span class="diff-item">${from} ← ${to}</span>`).join('');
}

function resetTestUI() {
  q('#quizQuestion').textContent = 'اضغط على بدء الاختبار.';
  q('#answerList').innerHTML = '';
  q('#quizFeedback').textContent = 'شرح الإجابة يظهر هنا.';
  q('#testProgressChip').textContent = '0 / 0';
  q('#testProgressBar').style.width = '0%';
}

function startTest() {
  state.testStarted = true;
  state.currentTestIndex = 0;
  state.currentTestScore = 0;
  saveState();
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const level = state.testLevel;
  const bank = baseData.questions[level];
  if (!bank.length) return;
  const current = bank[state.currentTestIndex];
  q('#quizQuestion').textContent = current.q;
  q('#testProgressChip').textContent = `${state.currentTestIndex + 1} / ${bank.length}`;
  q('#testProgressBar').style.width = `${(state.currentTestIndex / bank.length) * 100}%`;
  q('#quizFeedback').textContent = 'اختر إجابة ثم اضغط على التالي.';
  q('#answerList').innerHTML = '';

  current.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(index, btn);
    q('#answerList').appendChild(btn);
  });
}

function handleAnswer(index, btn) {
  const current = baseData.questions[state.testLevel][state.currentTestIndex];
  qa('#answerList .answer-btn').forEach((b, i) => {
    b.classList.remove('correct', 'wrong');
    if (i === current.correct) b.classList.add('correct');
  });

  if (index === current.correct) {
    btn.classList.add('correct');
    state.currentTestScore += 1;
    q('#quizFeedback').textContent = `✅ صحيح. ${current.why}`;
  } else {
    btn.classList.add('wrong');
    q('#quizFeedback').textContent = `❌ غير صحيح. ${current.why}`;
  }
  saveState();
}

function goNextQuestion() {
  if (!state.testStarted) return;
  const bank = baseData.questions[state.testLevel];
  if (state.currentTestIndex < bank.length - 1) {
    state.currentTestIndex += 1;
    saveState();
    renderCurrentQuestion();
    return;
  }

  const percent = Math.round((state.currentTestScore / bank.length) * 100);
  state.tests[state.testLevel].push(percent);
  if (percent >= 80) addPoints(3);
  q('#quizFeedback').textContent = `انتهى الاختبار: ${state.currentTestScore}/${bank.length} • ${percent}%`;
  q('#testProgressBar').style.width = '100%';
  state.testStarted = false;
  saveState();
  renderProgress();
  refreshGlobalUI();
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderGameStats() {
  q('#game1Stats').textContent = `${state.game1.score} | أفضل ${state.gameBest.word}`;
  q('#game2Stats').textContent = `${state.game2.score} | أفضل ${state.gameBest.reorder}`;
}

function game1New() {
  state.game1.current = randomItem(baseData.wordPairs);
  state.game1.answer = null;
  const wrong = shuffle(baseData.wordPairs.filter(pair => pair[0] !== state.game1.current[0]).map(pair => pair[1])).slice(0, 3);
  const options = shuffle([state.game1.current[1], ...wrong]);
  q('#game1Prompt').textContent = `طابق الكلمة العامية: «${state.game1.current[0]}»`;
  q('#game1Feedback').textContent = '';
  q('#game1Choices').innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option;
    btn.onclick = () => {
      qa('#game1Choices .answer-btn').forEach(el => el.classList.remove('correct', 'wrong'));
      state.game1.answer = option;
      btn.classList.add('correct');
    };
    q('#game1Choices').appendChild(btn);
  });
  saveState();
}

function game1Check() {
  if (!state.game1.answer || !state.game1.current) return;
  if (state.game1.answer === state.game1.current[1]) {
    state.game1.score += 1;
    addPoints(1);
    q('#game1Feedback').textContent = '✅ صحيح!';
  } else {
    q('#game1Feedback').textContent = `❌ الصحيح: ${state.game1.current[1]}`;
  }
  state.gameBest.word = Math.max(state.gameBest.word, state.game1.score);
  saveState();
  renderGameStats();
}

function game2New() {
  state.game2.current = randomItem(baseData.reorderSentences);
  const shuffled = shuffle(state.game2.current.split(' ')).join(' | ');
  q('#game2Prompt').textContent = shuffled;
  q('#game2Answer').value = '';
  q('#game2Feedback').textContent = '';
  saveState();
}

function game2Check() {
  const typed = q('#game2Answer').value.trim();
  if (!typed || !state.game2.current) return;
  if (typed === state.game2.current) {
    state.game2.score += 2;
    addPoints(2);
    q('#game2Feedback').textContent = '✅ ممتاز!';
  } else {
    q('#game2Feedback').textContent = '❌ حاول مرة ثانية.';
  }
  state.gameBest.reorder = Math.max(state.gameBest.reorder, state.game2.score);
  saveState();
  renderGameStats();
}


function challengeCheck() {
  const text = q('#challengeInput').value.trim();
  if (text.length < 8) {
    q('#challengeFeedback').textContent = '❌ الجملة قصيرة. جرّب صياغة أوضح.';
    return;
  }
  const converted = convertDialectText(text, 'تلقائي').output;
  state.activity.dailyDone = (state.activity.dailyDone || 0) + 1;
  addPoints(2);
  q('#challengeFeedback').textContent = `✅ أحسنت. الصياغة المقترحة: ${converted}`;
  saveState();
  renderChallenges();
}

function completeWeeklyChallenge() {
  const tasks = getWeeklyTasks();
  const doneCount = tasks.filter(task => task.done).length;
  if (state.activity.weeklyDone) {
    q('#weeklyChallengeFeedback').textContent = 'تم استلام مكافأة هذا الأسبوع بالفعل.';
    return;
  }
  if (doneCount < tasks.length) {
    q('#weeklyChallengeFeedback').textContent = `أكمل ${tasks.length - doneCount} خطوة إضافية لفتح المكافأة.`;
    return;
  }
  state.activity.weeklyDone = true;
  addPoints(8);
  q('#weeklyChallengeFeedback').textContent = '⭐ ممتاز، فُتحت مكافأة الأسبوع.';
  saveState();
  renderChallenges();
}


function renderProgress() {
  const level = q('#progressLevelSelect').value;
  const results = state.tests[level] || [];
  const resultsWrap = q('#progressResults');
  const barsWrap = q('#progressBars');
  resultsWrap.innerHTML = '';
  barsWrap.innerHTML = '';

  if (!results.length) {
    resultsWrap.innerHTML = '<div class="progress-item"><strong>لا توجد نتائج محفوظة بعد.</strong><span class="soft-chip">0%</span></div>';
    return;
  }

  results.slice(-4).forEach((percent, index) => {
    resultsWrap.innerHTML += `<div class="progress-item"><strong>محاولة ${results.length - results.slice(-4).length + index + 1}</strong><span class="soft-chip">${percent}%</span></div>`;
    barsWrap.innerHTML += `<div class="bar-row"><span>المحاولة ${index + 1}</span><div class="bar"><i style="width:${percent}%"></i></div></div>`;
  });
}

function syncLaughToneChip() {
  q('#jokeToneChip').textContent = q('#laughModeSelect').value;
}

function convertSelectedJoke() {
  const text = q('#laughInput').value.trim();
  if (!text) {
    q('#jokeResult').textContent = '';
    q('#jokeExplain').textContent = 'اكتب عبارة أو موقفًا لطيفًا أولًا.';
    return;
  }
  const converted = convertDialectText(text, 'تلقائي').output;
  const mode = q('#laughModeSelect').value;
  let result = converted;
  let explain = 'تم تنظيف العبارة مع الحفاظ على خفة الأسلوب.';
  if (mode === 'مدرسي لطيف') {
    result = `في الصف قيل بلطف: ${converted}`;
    explain = 'هذا الأسلوب أنسب للمواقف المدرسية والعبارات الهادئة.';
  }
  if (mode === 'ذكي وسريع') {
    result = `وجاء التعليق سريعًا: ${converted}`;
    explain = 'هذا الأسلوب يعطي العبارة سرعة وخفة بدون مبالغة.';
  }
  q('#jokeResult').textContent = result;
  q('#jokeExplain').textContent = explain;
  state.activity.jokeConversions = (state.activity.jokeConversions || 0) + 1;
  addPoints(2);
  saveState();
}

function updateAdabGuide() {
  const type = q('#adabTypeSelect').value;
  const style = q('#adabStyleSelect').value;
  const guides = {
    'قصة قصيرة': 'اكتب حدثًا بسيطًا ببداية واضحة ونهاية مختصرة.',
    'خاطرة': 'ركّز على الشعور والفكرة الأساسية في جمل قصيرة.',
    'وصف': 'اختر شيئًا واحدًا واصفه بكلمات واضحة ودقيقة.',
    'مثل أو حكمة': 'اجعل العبارة قصيرة وقوية وسهلة الحفظ.'
  };
  const styleLine = {
    'واضح': 'الطابع الواضح مناسب للفهم السريع.',
    'أدبي': 'الطابع الأدبي يضيف جمالًا في العبارة.',
    'أقوى تعبيرًا': 'هذا الطابع يعطي النص حضورًا أقوى.'
  };
  q('#adabGuide').textContent = `${guides[type]} ${styleLine[style]}`;
}

function saveMyStory() {
  const text = q('#adabText').value.trim();
  if (text.length < 20) {
    q('#adabGuide').textContent = 'خل النص أطول شوي ثم احفظه.';
    return;
  }
  const type = q('#adabTypeSelect').value;
  state.myStories.push({ title: `${type} ${state.myStories.length + 1}`, text });
  addPoints(3);
  q('#adabGuide').textContent = 'تم حفظ النص بنجاح.';
  saveState();
}

function convertAdabText() {
  const text = q('#adabText').value.trim();
  if (!text) {
    q('#adabGuide').textContent = 'اكتب نصك أولًا ثم اضغط تهذيب النص.';
    return;
  }
  const converted = convertDialectText(text, q('#dialectSelect').value).output;
  const style = q('#adabStyleSelect').value;
  let result = converted;
  if (style === 'أدبي') result = `في لغةٍ ألطف وأجمل: ${converted}`;
  if (style === 'أقوى تعبيرًا') result = `وفي صياغةٍ أشد أثرًا: ${converted}`;
  q('#adabText').value = result;
  q('#adabGuide').textContent = 'تم تهذيب النص وصار أنظف وأقرب للأسلوب الأدبي.';
  addPoints(2);
  saveState();
}


function expressionConvert() {
  const text = q('#expressionInput').value.trim();
  const converted = convertDialectText(text, 'تلقائي').output;
  const mode = q('#expressionModeSelect').value;
  let result = converted;
  let hint = 'هذا الأسلوب مناسب للإجابة الواضحة والمباشرة.';
  if (mode === 'فصيح مجازي') {
    result = `يحمل هذا المعنى أثرًا لطيفًا في النفس: ${converted}`;
    hint = 'المجازي أنسب للوصف والمشاعر.';
  }
  if (mode === 'بلاغي') {
    result = `أقبل المعنى في ثوب بليغ فقال اللسان: ${converted}`;
    hint = 'البلاغي جميل للمقدمات والعبارات الأقوى.';
  }
  q('#expressionResult').textContent = result;
  q('#expressionHint').textContent = hint;
  state.activity.expressions = (state.activity.expressions || 0) + 1;
  addPoints(2);
  saveState();
  renderChallenges();
}


function renderPrizes() {
  q('#prizesList').innerHTML = baseData.prizes.map((prize, index) => `
    <article class="glass prize-card">
      <div class="prize-row">
        <div>
          <h3>${prize.name}</h3>
          <p>التكلفة: ${prize.cost} نقطة</p>
        </div>
        <button class="ghost-btn small-btn" data-buy-prize="${index}">شراء</button>
      </div>
    </article>
  `).join('');

  qa('[data-buy-prize]').forEach(btn => {
    btn.onclick = () => {
      const prize = baseData.prizes[Number(btn.dataset.buyPrize)];
      if (state.points < prize.cost) {
        q('#titleFeedback').textContent = 'نقاطك غير كافية لهذه الجائزة.';
        return;
      }
      addPoints(-prize.cost);
      q('#titleFeedback').textContent = `تم شراء: ${prize.name}`;
    };
  });
  renderTitles();
}

function renderTitles() {
  q('#titlesList').innerHTML = baseData.titles.map(item => `
    <div class="title-chip ${state.badges.includes(item.name) ? 'unlocked' : ''}">${item.name}<br><small>${item.need} نقطة</small></div>
  `).join('');
}

function claimTitles() {
  let count = 0;
  baseData.titles.forEach(item => {
    if (state.points >= item.need && !state.badges.includes(item.name)) {
      state.badges.push(item.name);
      count += 1;
    }
  });
  saveState();
  refreshGlobalUI();
  renderTitles();
  q('#titleFeedback').textContent = count ? `تم فتح ${count} من الألقاب الجديدة.` : 'لا توجد ألقاب جديدة الآن.';
}

function saveProfile() {
  state.profile.name = q('#profileNameInput').value.trim() || 'طالب';
  state.profile.school = q('#profileSchoolInput').value.trim() || 'مدرسة';
  state.profile.grade = q('#profileGradeInput').value.trim() || 'غير محدد';
  state.profile.avatar = q('#profileAvatarInput').value.trim() || state.profile.name.slice(0, 1);
  state.profile.mode = q('#profileModeSelect').value;
  saveState();
  refreshGlobalUI();
}

function syncProfile() {
  q('#connectionResult').textContent = 'تم تحديث البيانات بنجاح.';
}

function testConnection() {
  q('#connectionResult').textContent = 'الاتصال مستقر وجاهز للاستخدام.';
}

function enterApp() {
  state.profile.name = q('#studentNameInput').value.trim() || state.profile.name;
  state.profile.school = q('#studentSchoolInput').value.trim() || state.profile.school;
  state.profile.grade = q('#studentGradeInput').value.trim() || state.profile.grade;
  if (!state.profile.avatar) state.profile.avatar = state.profile.name.slice(0, 1);
  saveState();
  refreshGlobalUI();
  loginScreen.classList.remove('active');
  appScreen.classList.add('active');
  setView(state.currentView || 'convert');
}

function bindEvents() {
  q('#enterAppBtn').onclick = enterApp;
  q('#menuBtn').onclick = openDrawer;
  q('#closeDrawer').onclick = closeDrawerNow;
  drawerOverlay.onclick = closeDrawerNow;
  q('#scrollTopBtn').onclick = () => contentScroll()?.scrollTo({ top: 0, behavior: 'smooth' });

  qa('.nav-item').forEach(btn => btn.onclick = () => setView(btn.dataset.section));
  q('#dialectSelect').onchange = () => {
    state.settings.dialect = q('#dialectSelect').value;
    q('#settingsDialectSelect').value = state.settings.dialect;
    saveState();
    renderDialectExamples();
  };
  q('#settingsDialectSelect').onchange = () => {
    state.settings.dialect = q('#settingsDialectSelect').value;
    q('#dialectSelect').value = state.settings.dialect;
    saveState();
    renderDialectExamples();
  };
  q('#convertLevelSelect').onchange = () => { state.settings.level = q('#convertLevelSelect').value; q('#settingsLevelSelect').value = state.settings.level; saveState(); };
  q('#settingsLevelSelect').onchange = () => { state.settings.level = q('#settingsLevelSelect').value; q('#convertLevelSelect').value = state.settings.level; saveState(); };
  q('#convertBtn').onclick = renderConvert;

  qa('#testLevelSwitch .level-btn').forEach(btn => {
    btn.onclick = () => {
      qa('#testLevelSwitch .level-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      state.testLevel = btn.dataset.level;
      state.testStarted = false;
      saveState();
      resetTestUI();
    };
  });
  q('#startTestBtn').onclick = startTest;
  q('#nextQuestionBtn').onclick = goNextQuestion;

  q('#game1NewBtn').onclick = game1New;
  q('#game1CheckBtn').onclick = game1Check;
  q('#game2NewBtn').onclick = game2New;
  q('#game2CheckBtn').onclick = game2Check;
  q('#challengeBtn').onclick = challengeCheck;
  q('#weeklyChallengeBtn').onclick = completeWeeklyChallenge;

  q('#progressLevelSelect').onchange = renderProgress;
  q('#showProgressBtn').onclick = renderProgress;

  q('#laughModeSelect').onchange = syncLaughToneChip;
  q('#convertJokeBtn').onclick = convertSelectedJoke;

  q('#adabTypeSelect').onchange = updateAdabGuide;
  q('#adabStyleSelect').onchange = updateAdabGuide;
  q('#saveStoryBtn').onclick = saveMyStory;
  q('#adabConvertBtn').onclick = convertAdabText;

  qa('[data-expression-preset]').forEach(btn => btn.onclick = () => { q('#expressionInput').value = btn.dataset.expressionPreset; });
  q('#expressionBtn').onclick = expressionConvert;
  q('#claimTitlesBtn').onclick = claimTitles;
  q('#saveProfileBtn').onclick = saveProfile;
  q('#syncProfileBtn').onclick = syncProfile;

q('#settingsVoiceSelect').onchange = () => { state.settings.voice = q('#settingsVoiceSelect').value; saveState(); };
q('#settingsReminderSelect').onchange = () => { state.settings.reminders = q('#settingsReminderSelect').value; saveState(); };
q('#settingsReadingModeSelect').onchange = () => { state.settings.readingMode = q('#settingsReadingModeSelect').value; saveState(); };
q('#testConnectionBtn').onclick = testConnection;
}

function boot() {
  populateDialectSelects();
  bindEvents();
  refreshGlobalUI();
  renderConvert();
  renderGameStats();
  renderProgress();
  renderPrizes();
  q('#expressionResult').textContent = 'أنا حزين جدًا.';
  q('#expressionHint').textContent = 'هذا الأسلوب مناسب للإجابة الواضحة والمباشرة.';
  q('#laughInput').value = 'الطالب قال: خلني أخلّص الواجب قبل لا يخلّصني الواجب!';
  q('#jokeResult').textContent = '';
  q('#connectionResult').textContent = '';
  q('#jokeExplain').textContent = '';
  q('#adabText').value = 'في صباحٍ هادئ دخل الطالب فصله وهو يحمل فكرة صغيرة يريد أن يكبرها بالقراءة.';
  updateAdabGuide();
  syncLaughToneChip();
  q('#settingsVoiceSelect').value = state.settings.voice || 'محلي';
  q('#settingsReminderSelect').value = state.settings.reminders || 'مفعّل';
  q('#settingsReadingModeSelect').value = state.settings.readingMode || 'واضح';
  renderChallenges();
  renderProfileTitles();

  if (state.testStarted) renderCurrentQuestion();
  else resetTestUI();

  if (!state.game1.current) game1New();
  if (!state.game2.current) game2New();

  if (appScreen.classList.contains('active')) setView(state.currentView);
}

boot();
