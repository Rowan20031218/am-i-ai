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
    a: { label: '文本 A', content: '中文文本通常需要经过显式的词边界建模才能获得更稳定的语义表示。为此，我们提出一种基于层次化分词的编码方法，在字符级表示与词级表示之间建立动态交互。实验表明，该方法能够有效缓解未登录词带来的表示缺失，并在多个中文理解任务上取得一致提升。' },
    b: { label: '文本 B', content: '将文本划分为词通常是中文文本处理的第一步，但这种划分对于深度学习中文表示是否必要，很少得到系统研究。本文在语言建模、机器翻译、句子匹配以及文本分类等多个端到端任务中，对依赖分词的词级模型和不进行分词的字级模型进行了比较。实验结果表明，字级模型在这些任务上始终优于词级模型。' },
    answer: 'A',
  },
  {
    id: 't2',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '机器阅读理解要求系统根据给定文档回答相关问题。本文提出了首个自由形式的中文多项选择阅读理解数据集 C³，其中包含 13,369 篇文档以及 19,577 个相关问题。我们进一步分析了这些任务所需要的先验知识，并发现当问题需要文档之外的知识时，现有模型与人类之间仍存在明显差距。' },
    b: { label: '文本 B', content: '机器阅读理解的主要困难来自篇章内部信息之间复杂的语义关联。针对这一问题，我们构建了一种具有多级上下文聚合能力的中文阅读理解模型，通过联合建模问题、段落以及候选答案之间的关系来增强推理能力。在多个测试集上的结果说明，该模型能够明显减少长文本环境中的信息遗漏。' },
    answer: 'B',
  },
  {
    id: 't3',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '中文预训练模型的性能提升主要依赖于更大规模的参数容量，而预训练目标本身的影响相对有限。基于这一观察，我们重新设计了遮蔽机制，并通过引入多粒度上下文约束，使模型在保持语言建模能力的同时进一步提升下游任务中的语义一致性。' },
    b: { label: '文本 B', content: '中文自然语言处理中的预训练语言模型近年来取得了显著进展。本文重新考察了中文预训练模型，并提出了一个简单而有效的模型 MacBERT。该模型在 RoBERTa 的基础上进行了多项改进，其中最重要的是采用纠错形式的掩码语言建模策略。' },
    answer: 'A',
  },
  {
    id: 't4',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '自然场景中的中文文本具有较大的视觉变化，因此传统文档识别方法难以直接迁移到街景环境。我们提出一种统一的数据增强框架，通过模拟字体变化、复杂背景以及局部遮挡来提高模型的环境适应能力。实验显示，该策略能够在不同采集条件下保持较稳定的识别性能。' },
    b: { label: '文本 B', content: '中文街景文本识别仍然是一个具有挑战性的问题，尤其是在字符集合更加复杂的情况下。本文构建了一个大规模中文自然场景文本数据集，其中包含约一百万个经过人工标注的汉字，来自三万多张街景图像。数据覆盖城市、农村、低照度、远距离以及部分遮挡等多种场景。' },
    answer: 'A',
  },
  {
    id: 't5',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '本文研究一个基本问题：在中文自然语言处理中，词级表示是否真的优于字符级表示。通过对多个任务进行直接比较，我们发现字符级模型始终取得更好的结果。进一步分析表明，词级模型更容易受到数据稀疏和未登录词的影响，因此也更容易出现过拟合。' },
    b: { label: '文本 B', content: '我们进一步观察到，字符级模型的优势主要来源于其更高的词汇覆盖率，而不是编码粒度本身。基于这一结论，我们提出一种混合表示策略，在训练阶段动态选择字符和词作为基本单元，从而在语言完整性与计算效率之间取得更好的平衡。' },
    answer: 'B',
  },
  {
    id: 't6',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '本文提出一种用于中文预训练语言模型的改进方法，并在八个中文自然语言处理任务上进行了广泛实验。结果表明，所提出的模型能够在多个任务上达到当时的最佳性能，同时消融实验也揭示了不同预训练设计对于最终性能的影响。' },
    b: { label: '文本 B', content: '为了进一步验证模型的泛化能力，我们在多个具有不同领域分布的数据集上进行了统一评估。实验结果显示，经过领域自适应后的模型不仅能够改善目标任务性能，还能够降低不同数据来源之间的表示偏移，从而获得更加稳定的跨领域表现。' },
    answer: 'B',
  },
  {
    id: 't7',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '现有中文文本数据集通常集中于清晰、规则的文档图像，因此难以反映真实环境中的视觉噪声。我们收集来自不同地点和不同拍摄条件的数据，并利用统一标注协议建立多层次字符属性，从而为复杂场景下的中文文字理解提供更加全面的训练基础。' },
    b: { label: '文本 B', content: '数据规模一直是深度学习中文文本识别中的重要限制因素，因为许多方法需要大量训练数据。为了解决这一问题，我们建立了一个具有较高多样性的中文文本数据集，并对每个字符提供类别、边界框以及多个属性标注，使其能够用于不同类型的检测与识别任务。' },
    answer: 'A',
  },
  {
    id: 't8',
    type: 'text',
    question: '请判断：以下两段文字，哪一段是 AI 生成的？',
    a: { label: '文本 A', content: '实验进一步表明，阅读理解系统的性能瓶颈并不完全来自模型结构，而与知识获取方式密切相关。因此，我们设计一种外部知识增强机制，使模型能够在回答问题时同时检索文档内部信息与相关背景知识，并通过联合注意力机制完成最终判断。' },
    b: { label: '文本 B', content: '现有中文阅读理解系统与人类读者之间仍存在明显性能差距，特别是在需要使用先验知识的问题上。我们的分析表明，部分问题无法仅依赖题目所附文档解决，而需要结合语言知识、领域知识以及一般世界知识。' },
    answer: 'A',
  },
]

export const IMAGE_LEVELS = [
  {
    id: 'i1',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/3nroNBn3.png' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/1787415087855_tommaso-teloni-8GpG2unH7j8-unsplash.jpg' },
    answer: 'A',
  },
  {
    id: 'i2',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/TC5l8Ser.jpg' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/aLRsA89D.png' },
    answer: 'B',
  },
  {
    id: 'i3',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/FLTOUGjo.png' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/eKJO1cRL.jpg' },
    answer: 'A',
  },
  {
    id: 'i4',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/T7W8K85e.jpg' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/3gq2nF17.png' },
    answer: 'B',
  },
  {
    id: 'i5',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/ibRBMFRG.png' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/JG0dwfpu.jpg' },
    answer: 'A',
  },
  {
    id: 'i6',
    type: 'image',
    question: '请判断：以下两张图，哪一张是 AI 生成的？',
    a: { label: '图 A', image: 'https://rowan-img.pages.dev/file/EM5VVuFW.jpg' },
    b: { label: '图 B', image: 'https://rowan-img.pages.dev/file/X8lcnKnp.png' },
    answer: 'B',
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
