// ============================================================
// 题库与玩法定义
// 内容为占位素材，后续按 DESIGN.md 替换为真实对比内容
// type: 'text' 文本关 / 'image' 图像关
// a / b 为两个选项，answer 为正确答案（'A' | 'B'）
// ============================================================

export const TEXT_LEVELS = [
  {
    id: 't1',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '今天傍晚去河边走了走，风挺大的，路灯亮得早。回来的路上买了一袋橘子，老板说这茬橘子甜。' },
    b: { label: '文本 B', content: '在全球化浪潮不断推进的时代背景下，创新已成为推动经济社会可持续发展的核心驱动力之一。我们应准确把握机遇，积极应对挑战。' },
    answer: 'B',
  },
  {
    id: 't2',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '本研究采用系统综述的方法，对既有文献进行整合梳理，在此基础上提出了一套兼顾效率与公平的分析框架，并展望了未来的研究方向。' },
    b: { label: '文本 B', content: '上周把阳台的花换了盆，累是累点，但看着它们精神多了。邻居家小猫老跑过来，蹲在花盆边上看好久，可爱死了。' },
    answer: 'A',
  },
  {
    id: 't3',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '今天心情不错，约了老同学去那家开了二十年的面馆，还是原来的味道。老板记得我，多给了两块肉。' },
    b: { label: '文本 B', content: '综上所述，合理利用有限的资源并优化配置结构，是提升整体效益、实现可持续协调发展的必然选择与重要保障。' },
    answer: 'B',
  },
  {
    id: 't4',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '我妈昨天打电话来，说家里换了新窗帘，问我国庆回不回去。其实就几个小时的高铁，但我票到现在还没买。' },
    b: { label: '文本 B', content: '亲情作为人类情感纽带的重要组成部分，在维系家庭关系、促进社会和谐稳定方面发挥着不可替代的重要作用。' },
    answer: 'B',
  },
  {
    id: 't5',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '为了提升工作效率，建议采用科学的时间管理方法，合理划分任务优先级，并保持规律的作息习惯，从而实现工作与生活的良性平衡。' },
    b: { label: '文本 B', content: '昨晚熬夜赶方案，早上差点睡过头。地铁上人挤人，好在赶上了打卡。中午吃的那家麻辣烫，辣得我直喝水。' },
    answer: 'A',
  },
  {
    id: 't6',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '代码重构是软件工程中优化既有代码结构的重要手段，它能够在不改变外部行为的前提下，有效提升代码的可读性与可维护性。' },
    b: { label: '文本 B', content: '今天终于把那段写了半年的老代码重构了，删了两千行，神清气爽。不过测试挂了两个，明天再修吧。' },
    answer: 'A',
  },
  {
    id: 't7',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '小区门口的梧桐树开始掉叶子了，环卫工人一早就在扫。卖煎饼的大叔多给我加了个蛋，说我看着像没睡醒。' },
    b: { label: '文本 B', content: '城市绿化建设作为改善人居环境的重要举措，不仅有助于净化空气、调节气候，更能显著提升居民的幸福感与获得感。' },
    answer: 'B',
  },
  {
    id: 't8',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '方案我看了，大方向没问题。就是第三部分的数据来源再核实一下，周三前给我新版。另外预算那块，能砍就砍点吧。' },
    b: { label: '文本 B', content: '综上所述，该方案具备较强的可操作性与前瞻性，建议相关部门结合实际情况予以采纳，并在实施过程中持续优化完善。' },
    answer: 'B',
  },
]

export const IMAGE_LEVELS = [
  {
    id: 'i1',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/eeeeee/888888?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/cccccc/666666?font=roboto&text=B' },
    answer: 'B',
  },
  {
    id: 'i2',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/f0f0f0/777777?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/fafafa/999999?font=roboto&text=B' },
    answer: 'A',
  },
  {
    id: 'i3',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/eeeeee/888888?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/e0e0e0/555555?font=roboto&text=B' },
    answer: 'B',
  },
  {
    id: 'i4',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/d8d8d8/666666?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/eeeeee/999999?font=roboto&text=B' },
    answer: 'A',
  },
  {
    id: 'i5',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/f5f5f5/777777?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/dddddd/555555?font=roboto&text=B' },
    answer: 'B',
  },
  {
    id: 'i6',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://placehold.co/600x600/e8e8e8/888888?font=roboto&text=A' },
    b: { label: '图 B', image: 'https://placehold.co/600x600/f2f2f2/666666?font=roboto&text=B' },
    answer: 'A',
  },
]

// 经典模式：3 文本 + 3 图像（对应 DESIGN.md 的 6 关）
export const CLASSIC_LEVELS = [...TEXT_LEVELS.slice(0, 3), ...IMAGE_LEVELS.slice(0, 3)]

export const ALL_LEVELS = [...TEXT_LEVELS, ...IMAGE_LEVELS]

// ------------------------------------------------------------
// 玩法定义
// ------------------------------------------------------------
export const MODES = {
  classic: { name: '经典模式', path: '/classic', desc: '6 关固定题 · 3 文本 + 3 图像' },
  blitz: { name: '限时挑战', path: '/blitz', desc: '每题 10 秒 · 8 题快节奏' },
  streak: { name: '连对挑战', path: '/streak', desc: '答错即止 · 冲击最高连对' },
  daily: { name: '每日挑战', path: '/daily', desc: '每天同一套题 · 明天再来' },
}

// ------------------------------------------------------------
// 抽题工具
// ------------------------------------------------------------
export function shuffle(arr, rand = Math.random) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 确定性伪随机（每日挑战按日期固定出题）
function seededRandom(seedStr) {
  let h = 1779033703 ^ seedStr.length
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

// 每日挑战：3 文本 + 2 图像，同一天所有人题目一致
export function dailyLevels(dateStr) {
  const rand = seededRandom(dateStr)
  const texts = shuffle(TEXT_LEVELS, rand).slice(0, 3)
  const images = shuffle(IMAGE_LEVELS, rand).slice(0, 2)
  return shuffle([...texts, ...images], rand)
}

// 随机抽 n 题（限时挑战用）
export function randomLevels(n) {
  return shuffle(ALL_LEVELS).slice(0, n)
}

// 全题库乱序（连对挑战用，用完在组件里重新洗牌）
export function shuffledAll() {
  return shuffle(ALL_LEVELS)
}

// ------------------------------------------------------------
// 评语
// ------------------------------------------------------------
const COMMENTS = [
  { min: 6, text: '全部答对 —— 你是 AI 鉴定大师！' },
  { min: 4, text: '你对 AI 内容有不错的敏感度，处于较高水平！' },
  { min: 2, text: 'AI 正在以假乱真，继续加油！' },
  { min: 0, text: '你可能需要多关注 AI 的发展了。' },
]

export function commentFor(score) {
  return (COMMENTS.find((c) => score >= c.min) || COMMENTS[COMMENTS.length - 1]).text
}
