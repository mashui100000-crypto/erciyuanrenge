const dimensionMeta = {
  S1: { name: "热血值", model: "自我模型" },
  S2: { name: "人设稳定度", model: "自我模型" },
  S3: { name: "主角光环感", model: "自我模型" },
  E1: { name: "共情力", model: "情感模型" },
  E2: { name: "羁绊投入度", model: "情感模型" },
  E3: { name: "情绪爆发阈值", model: "情感模型" },
  A1: { name: "世界观乐观度", model: "态度模型" },
  A2: { name: "规则服从度", model: "态度模型" },
  A3: { name: "宿命接受度", model: "态度模型" },
  Ac1: { name: "行动速度", model: "行动驱动模型" },
  Ac2: { name: "决策果断度", model: "行动驱动模型" },
  Ac3: { name: "执行稳定度", model: "行动驱动模型" },
  So1: { name: "社交主动性", model: "社交模型" },
  So2: { name: "表达直率度", model: "社交模型" },
  So3: { name: "团队协作度", model: "社交模型" }
};

const dimOrder = [
  "S1", "S2", "S3",
  "E1", "E2", "E3",
  "A1", "A2", "A3",
  "Ac1", "Ac2", "Ac3",
  "So1", "So2", "So3"
];

const groupedDims = [
  ["S1", "S2", "S3"],
  ["E1", "E2", "E3"],
  ["A1", "A2", "A3"],
  ["Ac1", "Ac2", "Ac3"],
  ["So1", "So2", "So3"]
];

const dimExplanations = {
  S1: {
    L: "你更偏稳健，不太容易被热血口号带节奏。",
    M: "你在理性和热血之间可切换，场景适配能力强。",
    H: "你的燃点很高，关键时刻常能点燃全队。"
  },
  S2: {
    L: "你会随环境调整身份，灵活但偶尔摇摆。",
    M: "你的人设大体稳定，偶尔会因为情绪改剧本。",
    H: "你对自己的定位非常清晰，外部噪音很难动摇。"
  },
  S3: {
    L: "你更像幕后型选手，结果导向高于存在感。",
    M: "你既能站 C 位，也能在需要时退到辅助位。",
    H: "你天然有主角驱动，总想把剧情推向更高能。"
  },
  E1: {
    L: "你情绪边界清楚，先分析后共情。",
    M: "你会共情，但通常保留理性缓冲区。",
    H: "你对他人情绪非常敏感，容易形成深层连接。"
  },
  E2: {
    L: "你投入关系较慢，重视安全和验证。",
    M: "你会投入，但会给自己留回旋余地。",
    H: "一旦认定羁绊，你会给出非常高的承诺。"
  },
  E3: {
    L: "你情绪外显较多，爆发速度快。",
    M: "你能控场，但在触底线时会快速升温。",
    H: "你自控力强，情绪大多先沉淀再表达。"
  },
  A1: {
    L: "你看世界更现实，先看风险再谈理想。",
    M: "你在谨慎和乐观之间保持动态平衡。",
    H: "你倾向先相信可能性，愿意给世界更多善意。"
  },
  A2: {
    L: "你天生不太爱被规则束缚，偏创新突破。",
    M: "你会在规则内优化，也会在必要时变通。",
    H: "你擅长在秩序中发挥，纪律感较强。"
  },
  A3: {
    L: "你更强调主动改命，不太相信天注定。",
    M: "你会尊重现实限制，也保留逆转空间。",
    H: "你更愿意顺势而为，接受阶段性命运安排。"
  },
  Ac1: {
    L: "你出手前会做足准备，速度让位于准确。",
    M: "你行动节奏稳定，既不拖也不莽。",
    H: "你是先动起来再校准的类型，执行起手快。"
  },
  Ac2: {
    L: "你决策前会反复权衡，容错意识高。",
    M: "你能在信息不全时做中速决策。",
    H: "你下判断干脆，关键节点不容易犹豫。"
  },
  Ac3: {
    L: "你执行受状态影响较大，容易阶段性起伏。",
    M: "你的执行整体在线，偶尔需要外部推进。",
    H: "你执行力稳定持久，擅长把计划落地到底。"
  },
  So1: {
    L: "你社交更偏被动选择，质量优先于数量。",
    M: "你社交弹性较高，熟场主动陌生场观察。",
    H: "你很会主动破冰，能快速带起现场氛围。"
  },
  So2: {
    L: "你表达更含蓄，习惯先打磨再说。",
    M: "你会按对象调整表达直率程度。",
    H: "你表达直接坦诚，沟通效率很高。"
  },
  So3: {
    L: "你更擅长独立推进，合作需求较克制。",
    M: "你在单打和协作之间都能发挥。",
    H: "你有强团队意识，愿意为整体主动补位。"
  }
};

const questions = [
  { id: "q1", dim: "S1", text: "大战前夜，作战室安静得只剩呼吸声，你更像哪种人？", options: [{ label: "先把风险和退路理清，别让情绪带队", value: 1 }, { label: "会被点燃，但还是想听完计划再上", value: 2 }, { label: "先把士气撑起来，哪怕先说一句“能赢”", value: 3 }] },
  { id: "q2", dim: "S1", text: "同伴明知道很难，还是说“我想再试一次”，你通常会？", options: [{ label: "先提醒他别把自己搭进去", value: 1 }, { label: "陪他试，但会顺手留个后手", value: 2 }, { label: "直接跟上，一起把不可能打成可能", value: 3 }] },

  { id: "q3", dim: "S2", text: "命运突然把你从配角推到聚光灯下，你会？", options: [{ label: "根据局势换打法，赢下来最重要", value: 1 }, { label: "先适应一下，再决定自己该怎么站位", value: 2 }, { label: "还是按自己的方式来，不想临场改掉核心设定", value: 3 }] },
  { id: "q4", dim: "S2", text: "大家因为一个误会开始怀疑你时，你第一反应更像？", options: [{ label: "想想是不是该换种表现方式，减少误解", value: 1 }, { label: "先观察局势，再决定要不要解释", value: 2 }, { label: "只要我知道自己没偏航，就不会轻易被带跑", value: 3 }] },

  { id: "q5", dim: "S3", text: "队伍准备分组潜入时，你最自然会站到哪个位置？", options: [{ label: "后方支援位，稳住情报和补给", value: 1 }, { label: "机动补位，哪里缺人我顶哪里", value: 2 }, { label: "关键突破位，最好由我来推进主线", value: 3 }] },
  { id: "q6", dim: "S3", text: "决胜那一下没人接时，你通常会？", options: [{ label: "如果有更稳的人选，我愿意让位", value: 1 }, { label: "看现场情况，需要我上我就上", value: 2 }, { label: "这种时候我会主动顶上，把戏接住", value: 3 }] },

  { id: "q7", dim: "E1", text: "战斗结束后，同伴一个人坐在楼顶吹风，你会先做什么？", options: [{ label: "先想想怎么帮他解决眼前的问题", value: 1 }, { label: "先坐到旁边，等他愿意开口", value: 2 }, { label: "先顾他的情绪，至少别让他一个人扛着", value: 3 }] },
  { id: "q8", dim: "E1", text: "看到别人嘴上说“我没事”，但状态明显不对时，你通常会？", options: [{ label: "先判断到底出了什么问题", value: 1 }, { label: "先陪一会儿，再慢慢聊", value: 2 }, { label: "会很快代入，甚至想替他分担一点", value: 3 }] },

  { id: "q9", dim: "E2", text: "新搭档第一次出任务就说“后背交给你了”，你会？", options: [{ label: "先相处几次，信任这事不能急", value: 1 }, { label: "边合作边建立默契，慢慢加深信任", value: 2 }, { label: "很快就会把他划进“自己人”范围", value: 3 }] },
  { id: "q10", dim: "E2", text: "对你来说，羁绊更像什么？", options: [{ label: "一种需要谨慎管理的风险", value: 1 }, { label: "既是力量也是牵挂，要尽量平衡", value: 2 }, { label: "越深越能让我爆发出真正的力量", value: 3 }] },

  { id: "q11", dim: "E3", text: "如果你被误认为是害大家陷入危机的人，你会？", options: [{ label: "情绪会先冲上来，很难立刻压住", value: 1 }, { label: "先稳一下，再看怎么把话讲清楚", value: 2 }, { label: "越是这种时刻，反而会越冷静", value: 3 }] },
  { id: "q12", dim: "E3", text: "作战会上你的方案被当众否掉，你的反应更像？", options: [{ label: "第一反应就是顶回去，情绪先上来", value: 1 }, { label: "看对象和场合，决定是争还是缓一缓", value: 2 }, { label: "先稳住，把证据和备选方案补上", value: 3 }] },

  { id: "q13", dim: "A1", text: "班里转来一个气场很强、背景成谜的新同学，你会？", options: [{ label: "先保留判断，别太快相信谁", value: 1 }, { label: "先观察一阵，再决定怎么靠近", value: 2 }, { label: "先给一点善意，主动认识一下", value: 3 }] },
  { id: "q14", dim: "A1", text: "遗迹深处出现一扇写着“不要进入”的门，你更可能？", options: [{ label: "先查清危险来源，再决定碰不碰", value: 1 }, { label: "小范围试探一下，不急着一头扎进去", value: 2 }, { label: "会觉得里面多半藏着新的机会或答案", value: 3 }] },

  { id: "q15", dim: "A2", text: "校规写着夜里不能外出，可这时朋友发来求救消息，你会？", options: [{ label: "先去救人，回来再承担后果", value: 1 }, { label: "一边救人一边找规则里的变通办法", value: 2 }, { label: "先按流程调动能帮忙的人，别让局面更乱", value: 3 }] },
  { id: "q16", dim: "A2", text: "你更认同哪种处理危机的方式？", options: [{ label: "先把人和事救下来，规矩之后再补", value: 1 }, { label: "规则是工具，能用就用，不够用就调整", value: 2 }, { label: "越是混乱，越要靠流程把局面稳住", value: 3 }] },

  { id: "q17", dim: "A3", text: "如果预言书写着“你改不了结局”，你会？", options: [{ label: "我偏要试试看，结局哪有写死的", value: 1 }, { label: "先接受现状，再找还有哪些地方能改", value: 2 }, { label: "大方向也许真改不了，但细节还能补救", value: 3 }] },
  { id: "q18", dim: "A3", text: "你觉得命运更像哪一种东西？", options: [{ label: "一条会被选择不断改写的路线", value: 1 }, { label: "自己、环境和运气一起写成的剧本", value: 2 }, { label: "大方向早有轨道，人更多是在顺势前进", value: 3 }] },

  { id: "q19", dim: "Ac1", text: "接到突发任务，要你十分钟后就出发，你的起手动作通常是？", options: [{ label: "先把情报、路线和准备工作补齐", value: 1 }, { label: "先列出优先级，动起来的同时保持节奏", value: 2 }, { label: "先出发，路上再把细节一点点校准", value: 3 }] },
  { id: "q20", dim: "Ac1", text: "主线危机和支线求助同时弹出来时，你更容易？", options: [{ label: "按顺序一个个处理，避免自己乱掉", value: 1 }, { label: "两边一起推进，尽量都不落下", value: 2 }, { label: "先狠狠干最急的那条线，别让时机溜走", value: 3 }] },

  { id: "q21", dim: "Ac2", text: "三条路都能通向目标时，你平时更像？", options: [{ label: "会反复衡量，尽量把风险压低再选", value: 1 }, { label: "给自己一个截止时间，到了就定", value: 2 }, { label: "先选一条走，走着再根据情况修正", value: 3 }] },
  { id: "q22", dim: "Ac2", text: "战场上敌人突然亮出从没见过的新招，你通常会？", options: [{ label: "先让大家别乱冲，重新判断一遍", value: 1 }, { label: "边打边试，边试边调整", value: 2 }, { label: "很快拍板一个新战术，先执行起来", value: 3 }] },

  { id: "q23", dim: "Ac3", text: "如果要经历一段很长的修行期，你更像哪种节奏？", options: [{ label: "前几天很猛，后面容易被状态带着跑", value: 1 }, { label: "中后段最稳，前面需要一点热身时间", value: 2 }, { label: "每天都能稳定推进，不太靠情绪吃饭", value: 3 }] },
  { id: "q24", dim: "Ac3", text: "没人监督、也没人催进度的时候，你通常会？", options: [{ label: "看当天状态，容易一阵一阵地推进", value: 1 }, { label: "至少会把最核心的部分按时完成", value: 2 }, { label: "照着自己的节奏表继续往前推", value: 3 }] },

  { id: "q25", dim: "So1", text: "第一次进新公会语音频道，你最像哪种开场方式？", options: [{ label: "先安静听一会儿，摸清氛围再说", value: 1 }, { label: "有人点到我，我就自然接话", value: 2 }, { label: "会主动打招呼，顺手把气氛带热一点", value: 3 }] },
  { id: "q26", dim: "So1", text: "漫展或同好面基时，你的社交状态通常是？", options: [{ label: "更愿意待在熟一点的小圈子里", value: 1 }, { label: "看现场状态切换，舒服就多聊几句", value: 2 }, { label: "会主动串场，认识新朋友也不太费劲", value: 3 }] },

  { id: "q27", dim: "So2", text: "你发现队长的战术有漏洞时，通常会怎么开口？", options: [{ label: "我会先垫很多话，尽量说得委婉一点", value: 1 }, { label: "先看场合和对方状态，再决定怎么讲", value: 2 }, { label: "直接指出问题，再把替代方案一起给出来", value: 3 }] },
  { id: "q28", dim: "So2", text: "团队里两派意见正面撞起来时，你一般会？", options: [{ label: "先不急着表态，等局势再清一点", value: 1 }, { label: "先找双方都能接受的共识点", value: 2 }, { label: "会很明确说出自己站哪边，别让大家猜", value: 3 }] },

  { id: "q29", dim: "So3", text: "团战任务里，你最常扮演的角色更像？", options: [{ label: "先把自己负责的那部分稳稳做好", value: 1 }, { label: "按分工协作，哪里缺一点我就补一点", value: 2 }, { label: "主动串联全队，让大家更像在打一场配合", value: 3 }] },
  { id: "q30", dim: "So3", text: "最终结算页面弹出来时，你最在意的通常是？", options: [{ label: "我自己这部分到底有没有做好", value: 1 }, { label: "个人和团队都别掉链子就行", value: 2 }, { label: "队伍能赢最重要，我的数据一般也能接受", value: 3 }] }
];

const animeTypes = [
  {
    code: "NARU",
    cn: "热血逆袭者",
    role: "漩涡鸣人",
    pattern: "HMH-HHM-HMH-HHH-HHM",
    intro: "你是会把“做不到”改写成“再来一次”的人。",
    desc: "你有很强的感染力和不服输精神。即使开局不顺，也能靠耐力、意志和对同伴的重视把局面翻回来。你的核心不是天赋，而是持续点燃自己与他人的能力。",
    sub: "关键词：热血、坚持、团队意志",
    image: "./assets/naruto.svg"
  },
  {
    code: "LUFF",
    cn: "自由开拓者",
    role: "蒙奇·D·路飞",
    pattern: "HHL-HHM-HHH-HHH-HHL",
    intro: "你的方向感来自内心，而不是地图。",
    desc: "你追求自由、讨厌被定义。面对挑战时你更愿意先行动再修正，行动速度快、主见强。你把伙伴看得很重，愿意为信念承担风险。",
    sub: "关键词：自由、冲劲、义气",
    image: "./assets/luffy.svg"
  },
  {
    code: "LEVI",
    cn: "冷锋执行者",
    role: "利威尔",
    pattern: "MHH-MHL-MHM-HHH-LLH",
    intro: "你擅长在混乱里保持精确。",
    desc: "你重视效率和标准，判断克制、执行干净利落。你不爱空话，更相信结果。虽然外表冷静，但在关键时刻会坚定守护重要的人。",
    sub: "关键词：冷静、精准、守护",
    image: "./assets/levi.svg"
  },
  {
    code: "TANJ",
    cn: "温柔守护者",
    role: "灶门炭治郎",
    pattern: "HMH-HHH-HHH-MHH-MHM",
    intro: "你温柔，但绝不软弱。",
    desc: "你有稳定的共情能力和很高的道德感，愿意为家人、伙伴和信念长期坚持。你不靠锋芒压人，而靠持续行动赢得信任。",
    sub: "关键词：共情、责任、韧性",
    image: "./assets/tanjiro.svg"
  },
  {
    code: "LITE",
    cn: "策略操盘者",
    role: "夜神月",
    pattern: "MHH-LML-LHH-HHH-MLL",
    intro: "你习惯先搭好棋盘，再落子。",
    desc: "你具备强逻辑和全局规划能力，善于在复杂信息里提炼关键路径。你不喜欢低效试错，更偏好可控、可复盘的解决方案。",
    sub: "关键词：理性、布局、控制力",
    image: "./assets/light.svg"
  },
  {
    code: "USAG",
    cn: "治愈发光体",
    role: "月野兔",
    pattern: "MHM-HHH-HHH-MHM-HHH",
    intro: "你的温度，本身就是一种超能力。",
    desc: "你善于连接情绪和关系，容易成为团队里的“情绪稳定器”。你可能会犹豫，但在守护重要的人时会非常果断，拥有强大的内在光亮。",
    sub: "关键词：治愈、连接、光感",
    image: "./assets/usagi.svg"
  },
  {
    code: "GINT",
    cn: "松弛破局者",
    role: "坂田银时",
    pattern: "HMM-HMM-MMM-MMM-HMM",
    intro: "你表面散漫，关键时刻总能顶上。",
    desc: "你拥有独特的松弛感和临场应变力，平时不抢镜，真正遇到事会快速切换到高效模式。你幽默但不轻浮，能在压力里保持人味。",
    sub: "关键词：松弛、机变、反差",
    image: "./assets/gintoki.svg"
  },
  {
    code: "EDWD",
    cn: "炼成行动派",
    role: "爱德华·艾尔利克",
    pattern: "HHH-MHM-MHH-HHH-MHL",
    intro: "你是“先动手，再把答案做出来”的类型。",
    desc: "你行动驱动力强，遇到难题不逃避，倾向通过实践逼近真相。你在意承诺和底线，讨厌空转，喜欢把复杂问题炼成可执行步骤。",
    sub: "关键词：执行、信念、成长",
    image: "./assets/edward.svg"
  }
];

const atlasEntries = [
  { name: "爱德华·艾尔利克", anime: "钢之炼金术师" },
  { name: "L", anime: "死亡笔记" },
  { name: "孙悟空", anime: "龙珠" },
  { name: "艾伦·耶格尔", anime: "进击的巨人" },
  { name: "漩涡鸣人", anime: "火影忍者" },
  { name: "罗伊·马斯坦古", anime: "钢之炼金术师" },
  { name: "利威尔·阿克曼", anime: "进击的巨人" },
  { name: "三笠·阿克曼", anime: "进击的巨人" },
  { name: "贝吉塔", anime: "龙珠" },
  { name: "鲁路修·兰佩路基", anime: "Code Geass" },
  { name: "灶门炭治郎", anime: "鬼灭之刃" },
  { name: "碇真嗣", anime: "新世纪福音战士" },
  { name: "卡米那", anime: "天元突破 红莲螺岩" },
  { name: "宇智波鼬", anime: "火影忍者" },
  { name: "宇智波佐助", anime: "火影忍者" },
  { name: "旗木卡卡西", anime: "火影忍者" },
  { name: "明日香·兰格雷", anime: "新世纪福音战士" },
  { name: "蕾薇", anime: "黑礁" },
  { name: "布尔玛", anime: "龙珠" },
  { name: "白", anime: "NO GAME NO LIFE 游戏人生" },
  { name: "我妻由乃", anime: "未来日记" },
  { name: "阿尼亚·福杰", anime: "SPY×FAMILY" },
  { name: "蕾姆", anime: "Re:从零开始的异世界生活" },
  { name: "惠惠", anime: "为美好的世界献上祝福！" },
  { name: "雾岛董香", anime: "东京喰种" },
  { name: "猫猫", anime: "药屋少女的呢喃" },
  { name: "平泽唯", anime: "K-On!" },
  { name: "日向雏田", anime: "火影忍者" },
  { name: "晓美焰", anime: "魔法少女小圆" },
  { name: "蒙奇·D·路飞", anime: "海贼王" },
  { name: "埼玉", anime: "一拳超人" },
  { name: "小杰·富力士", anime: "猎人×猎人" },
  { name: "奇犽·揍敌客", anime: "猎人×猎人" },
  { name: "高仓健", anime: "胆大党" },
  { name: "绫濑桃", anime: "胆大党" },
  { name: "电次", anime: "电锯人" },
  { name: "玛奇玛", anime: "电锯人" },
  { name: "帕瓦", anime: "电锯人" },
  { name: "早川秋", anime: "电锯人" },
  { name: "蕾塞", anime: "电锯人" },
  { name: "姬野", anime: "电锯人" },
  { name: "东山小红", anime: "电锯人" },
  { name: "吉田宽文", anime: "电锯人" },
  { name: "黑崎一护", anime: "漂白剂" },
  { name: "金木研", anime: "东京喰种" },
  { name: "夜神月", anime: "死亡笔记" },
  { name: "冈部伦太郎", anime: "命运石之门" },
  { name: "牧濑红莉栖", anime: "命运石之门" },
  { name: "椎名真由理", anime: "命运石之门" },
  { name: "阿万音铃羽", anime: "命运石之门" },
  { name: "桥田至", anime: "命运石之门" },
  { name: "菲利丝·喵喵", anime: "命运石之门" },
  { name: "漆原琉华", anime: "命运石之门" },
  { name: "桐生萌郁", anime: "命运石之门" },
  { name: "乔瑟夫·乔斯达", anime: "JOJO的奇妙冒险" },
  { name: "迪奥·布兰度", anime: "JOJO的奇妙冒险" },
  { name: "乔鲁诺·乔巴拿", anime: "JOJO的奇妙冒险" },
  { name: "东方仗助", anime: "JOJO的奇妙冒险" },
  { name: "空条徐伦", anime: "JOJO的奇妙冒险" },
  { name: "布鲁诺·布加拉提", anime: "JOJO的奇妙冒险" },
  { name: "空条承太郎", anime: "JOJO的奇妙冒险" },
  { name: "罗罗诺亚·索隆", anime: "海贼王" },
  { name: "江户川柯南", anime: "名侦探柯南" },
  { name: "虎杖悠仁", anime: "咒术回战" },
  { name: "伏黑惠", anime: "咒术回战" },
  { name: "两面宿傩", anime: "咒术回战" },
  { name: "夏油杰", anime: "咒术回战" },
  { name: "七海建人", anime: "咒术回战" },
  { name: "乙骨忧太", anime: "咒术回战" },
  { name: "禅院真希", anime: "咒术回战" },
  { name: "五条悟", anime: "咒术回战" },
  { name: "灶门祢豆子", anime: "鬼灭之刃" },
  { name: "妮可·罗宾", anime: "海贼王" },
  { name: "Saber", anime: "命运/停留之夜" },
  { name: "娜美", anime: "海贼王" },
  { name: "薇尔莉特·伊芙加登", anime: "紫罗兰永恒花园" },
  { name: "月野兔", anime: "美少女战士" },
  { name: "Zero Two", anime: "DARLING in the FRANXX" },
  { name: "桐谷和人", anime: "刀剑神域" },
  { name: "亚丝娜", anime: "刀剑神域" },
  { name: "芙莉莲", anime: "葬送的芙莉莲" },
  { name: "星野爱", anime: "【我推的孩子】" },
  { name: "有马加奈", anime: "【我推的孩子】" },
  { name: "成振宇", anime: "我独自升级" },
  { name: "日比野卡夫卡", anime: "怪兽8号" },
  { name: "灵幻新隆", anime: "路人超能100" },
  { name: "藤冈春绯", anime: "樱兰高校男公关部" },
  { name: "灰原哀", anime: "名侦探柯南" },
  { name: "钉崎野蔷薇", anime: "咒术回战" },
  { name: "露西·哈特菲利亚", anime: "妖精的尾巴" },
  { name: "格斯", anime: "剑风传奇" },
  { name: "坂田银时", anime: "银魂" }
];

const atlasBaseOrderByName = Object.fromEntries(
  atlasEntries.map((entry, index) => [entry.name, atlasEntries.length - index])
);

const atlasImageMap = {
  "爱德华·艾尔利克": "https://s4.anilist.co/file/anilistcdn/character/large/b11-TA5Nuk7EDUZG.jpg",
  "L": "https://s4.anilist.co/file/anilistcdn/character/large/b71-1W4panC53vfs.png",
  "孙悟空": "https://s4.anilist.co/file/anilistcdn/character/large/246-wsRRr6z1kii8.png",
  "艾伦·耶格尔": "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg",
  "漩涡鸣人": "https://s4.anilist.co/file/anilistcdn/character/large/b17-phjcWCkRuIhu.png",
  "罗伊·马斯坦古": "https://s4.anilist.co/file/anilistcdn/character/large/b68-moBLY2WO2am3.png",
  "利威尔·阿克曼": "https://s4.anilist.co/file/anilistcdn/character/large/b45627-CR68RyZmddGG.png",
  "三笠·阿克曼": "https://myanimelist.net/images/characters/9/215563.jpg",
  "贝吉塔": "https://s4.anilist.co/file/anilistcdn/character/large/b913-NIFkKazWM8VO.png",
  "鲁路修·兰佩路基": "https://s4.anilist.co/file/anilistcdn/character/large/b417-gVLmIJu9phcK.png",
  "灶门炭治郎": "https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png",
  "碇真嗣": "https://s4.anilist.co/file/anilistcdn/character/large/b89-ZtZhXkh1rITn.png",
  "卡米那": "https://s4.anilist.co/file/anilistcdn/character/large/b2075-sWb5Xz76JWdX.png",
  "宇智波鼬": "https://s4.anilist.co/file/anilistcdn/character/large/b14-9Kb1E5oel1ke.png",
  "宇智波佐助": "https://myanimelist.net/images/characters/9/131317.jpg",
  "旗木卡卡西": "https://myanimelist.net/images/characters/7/284129.jpg",
  "明日香·兰格雷": "https://s4.anilist.co/file/anilistcdn/character/large/b94-d631a3Z2KPvd.png",
  "蕾薇": "https://s4.anilist.co/file/anilistcdn/character/large/b458-tlKqPcuR287U.png",
  "布尔玛": "https://s4.anilist.co/file/anilistcdn/character/large/b678-2YCe13F0tFos.jpg",
  "白": "https://s4.anilist.co/file/anilistcdn/character/large/b82525-sKk2FGRKN4aK.png",
  "我妻由乃": "https://s4.anilist.co/file/anilistcdn/character/large/b4963-7ZMcCtXW5hkY.png",
  "阿尼亚·福杰": "https://myanimelist.net/images/characters/4/457933.jpg",
  "蕾姆": "https://myanimelist.net/images/characters/9/311327.jpg",
  "惠惠": "https://myanimelist.net/images/characters/14/349249.jpg",
  "雾岛董香": "./assets/custom/touka.png",
  "猫猫": "https://myanimelist.net/images/characters/7/494014.jpg",
  "平泽唯": "https://s4.anilist.co/file/anilistcdn/character/large/b19565-7gMiEAm7NGNK.png",
  "日向雏田": "https://s4.anilist.co/file/anilistcdn/character/large/b1555-Q41GLTV3FvYF.png",
  "晓美焰": "https://s4.anilist.co/file/anilistcdn/character/large/b38005-T3NR8p2f021x.jpg",
  "蒙奇·D·路飞": "https://s4.anilist.co/file/anilistcdn/character/large/b40-MNypXsxSRb1R.png",
  "埼玉": "https://s4.anilist.co/file/anilistcdn/character/large/b73935-ON5d0mAcrItd.jpg",
  "小杰·富力士": "https://s4.anilist.co/file/anilistcdn/character/large/b30-lyFExKyDhefc.jpg",
  "奇犽·揍敌客": "https://myanimelist.net/images/characters/2/327920.jpg",
  "高仓健": "https://myanimelist.net/images/characters/5/531081.jpg",
  "绫濑桃": "https://myanimelist.net/images/characters/7/562295.jpg",
  "电次": "./assets/custom/denji.png",
  "玛奇玛": "https://myanimelist.net/images/characters/4/489561.jpg",
  "帕瓦": "https://myanimelist.net/images/characters/7/494969.jpg",
  "早川秋": "./assets/custom/aki.png",
  "蕾塞": "https://myanimelist.net/images/characters/10/618421.jpg",
  "姬野": "https://s4.anilist.co/file/anilistcdn/character/large/b144596-kvL6SD2litJu.png",
  "东山小红": "https://myanimelist.net/images/characters/3/467961.jpg",
  "吉田宽文": "https://myanimelist.net/images/characters/13/619970.jpg",
  "黑崎一护": "https://s4.anilist.co/file/anilistcdn/character/large/b5-a7bkJgjhhigE.png",
  "金木研": "./assets/custom/kaneki.png",
  "夜神月": "https://s4.anilist.co/file/anilistcdn/character/large/b80-26EhwSsSqQ50.png",
  "冈部伦太郎": "https://myanimelist.net/images/characters/6/122643.jpg",
  "牧濑红莉栖": "https://myanimelist.net/images/characters/12/492885.jpg",
  "椎名真由理": "https://myanimelist.net/images/characters/4/131329.jpg",
  "阿万音铃羽": "https://myanimelist.net/images/characters/3/148223.jpg",
  "桥田至": "https://myanimelist.net/images/characters/6/113767.jpg",
  "菲利丝·喵喵": "https://myanimelist.net/images/characters/2/142621.jpg",
  "漆原琉华": "https://myanimelist.net/images/characters/7/133805.jpg",
  "桐生萌郁": "https://myanimelist.net/images/characters/12/275310.jpg",
  "乔瑟夫·乔斯达": "./assets/custom/joseph.png",
  "迪奥·布兰度": "https://myanimelist.net/images/characters/8/330539.jpg",
  "乔鲁诺·乔巴拿": "https://myanimelist.net/images/characters/16/571466.jpg",
  "东方仗助": "./assets/custom/josuke.png",
  "空条徐伦": "https://myanimelist.net/images/characters/8/476401.jpg",
  "布鲁诺·布加拉提": "https://myanimelist.net/images/characters/6/558883.jpg",
  "空条承太郎": "https://s4.anilist.co/file/anilistcdn/character/large/b4003-gWDSEGbeOAll.png",
  "罗罗诺亚·索隆": "https://s4.anilist.co/file/anilistcdn/character/large/b62-S7oAeA9WInjV.png",
  "江户川柯南": "https://s4.anilist.co/file/anilistcdn/character/large/b1742-NiV278NBFOvZ.png",
  "虎杖悠仁": "https://myanimelist.net/images/characters/6/467646.jpg",
  "伏黑惠": "https://myanimelist.net/images/characters/12/621887.jpg",
  "两面宿傩": "https://myanimelist.net/images/characters/6/431152.jpg",
  "夏油杰": "https://myanimelist.net/images/characters/7/619361.jpg",
  "七海建人": "https://myanimelist.net/images/characters/16/581424.jpg",
  "乙骨忧太": "https://myanimelist.net/images/characters/10/461503.jpg",
  "禅院真希": "https://myanimelist.net/images/characters/15/423949.jpg",
  "五条悟": "./assets/custom/gojo.png",
  "灶门祢豆子": "https://s4.anilist.co/file/anilistcdn/character/large/b127518-NRlq1CQ1v1ro.png",
  "妮可·罗宾": "https://s4.anilist.co/file/anilistcdn/character/large/b61-ywXUyyocEEqt.png",
  "Saber": "https://s4.anilist.co/file/anilistcdn/character/large/b497-Yg5pNmC8kxzs.png",
  "娜美": "https://s4.anilist.co/file/anilistcdn/character/large/b723-vp5hPptgnNEC.png",
  "薇尔莉特·伊芙加登": "https://s4.anilist.co/file/anilistcdn/character/large/b90169-4wr1Zehnsac8.png",
  "月野兔": "https://s4.anilist.co/file/anilistcdn/character/large/b2030-GQvVYPEYkXCy.jpg",
  "Zero Two": "https://myanimelist.net/images/characters/14/559013.jpg",
  "桐谷和人": "https://myanimelist.net/images/characters/7/204821.jpg",
  "亚丝娜": "https://myanimelist.net/images/characters/15/262053.jpg",
  "芙莉莲": "https://myanimelist.net/images/characters/7/525105.jpg",
  "星野爱": "https://myanimelist.net/images/characters/6/496453.jpg",
  "有马加奈": "https://myanimelist.net/images/characters/6/503733.jpg",
  "成振宇": "https://myanimelist.net/images/characters/2/540692.jpg",
  "日比野卡夫卡": "https://myanimelist.net/images/characters/15/556696.jpg",
  "灵幻新隆": "https://myanimelist.net/images/characters/16/308364.jpg",
  "藤冈春绯": "https://s4.anilist.co/file/anilistcdn/character/large/b18-SAz5kAo2Fhm1.png",
  "灰原哀": "https://s4.anilist.co/file/anilistcdn/character/large/b1743-yw1FloPUI7jO.png",
  "钉崎野蔷薇": "https://s4.anilist.co/file/anilistcdn/character/large/b133700-f6sOO3TcgLV6.png",
  "露西·哈特菲利亚": "https://s4.anilist.co/file/anilistcdn/character/large/b5186-izgXf2S86K9u.png",
  "格斯": "https://myanimelist.net/images/characters/13/284125.jpg",
  "坂田银时": "https://s4.anilist.co/file/anilistcdn/character/large/b672-cP5VPriN67xJ.png"
};

const atlasArchetypeByName = {
  "爱德华·艾尔利克": "EDWD",
  "L": "LITE",
  "孙悟空": "NARU",
  "艾伦·耶格尔": "LEVI",
  "漩涡鸣人": "NARU",
  "罗伊·马斯坦古": "LITE",
  "利威尔·阿克曼": "LEVI",
  "三笠·阿克曼": "LEVI",
  "贝吉塔": "NARU",
  "鲁路修·兰佩路基": "LITE",
  "灶门炭治郎": "TANJ",
  "碇真嗣": "USAG",
  "卡米那": "NARU",
  "宇智波鼬": "LITE",
  "宇智波佐助": "LEVI",
  "旗木卡卡西": "LEVI",
  "明日香·兰格雷": "GINT",
  "蕾薇": "GINT",
  "布尔玛": "LUFF",
  "白": "USAG",
  "我妻由乃": "USAG",
  "阿尼亚·福杰": "USAG",
  "蕾姆": "USAG",
  "惠惠": "GINT",
  "雾岛董香": "LEVI",
  "猫猫": "LITE",
  "平泽唯": "USAG",
  "日向雏田": "TANJ",
  "晓美焰": "LITE",
  "蒙奇·D·路飞": "LUFF",
  "埼玉": "GINT",
  "小杰·富力士": "LUFF",
  "奇犽·揍敌客": "LEVI",
  "高仓健": "TANJ",
  "绫濑桃": "LUFF",
  "电次": "LUFF",
  "玛奇玛": "LITE",
  "帕瓦": "GINT",
  "早川秋": "LEVI",
  "蕾塞": "LUFF",
  "姬野": "TANJ",
  "东山小红": "USAG",
  "吉田宽文": "LITE",
  "黑崎一护": "LEVI",
  "金木研": "LEVI",
  "夜神月": "LITE",
  "冈部伦太郎": "LITE",
  "牧濑红莉栖": "LITE",
  "椎名真由理": "USAG",
  "阿万音铃羽": "EDWD",
  "桥田至": "GINT",
  "菲利丝·喵喵": "USAG",
  "漆原琉华": "USAG",
  "桐生萌郁": "LEVI",
  "乔瑟夫·乔斯达": "GINT",
  "迪奥·布兰度": "LITE",
  "乔鲁诺·乔巴拿": "LITE",
  "东方仗助": "LUFF",
  "空条徐伦": "LUFF",
  "布鲁诺·布加拉提": "TANJ",
  "空条承太郎": "LEVI",
  "罗罗诺亚·索隆": "LEVI",
  "江户川柯南": "LITE",
  "虎杖悠仁": "NARU",
  "伏黑惠": "LEVI",
  "两面宿傩": "LITE",
  "夏油杰": "LITE",
  "七海建人": "LEVI",
  "乙骨忧太": "TANJ",
  "禅院真希": "EDWD",
  "五条悟": "LUFF",
  "灶门祢豆子": "TANJ",
  "妮可·罗宾": "LITE",
  "Saber": "LEVI",
  "娜美": "LUFF",
  "薇尔莉特·伊芙加登": "TANJ",
  "月野兔": "USAG",
  "Zero Two": "LUFF",
  "桐谷和人": "EDWD",
  "亚丝娜": "TANJ",
  "芙莉莲": "LITE",
  "星野爱": "USAG",
  "有马加奈": "GINT",
  "成振宇": "LEVI",
  "日比野卡夫卡": "EDWD",
  "灵幻新隆": "GINT",
  "藤冈春绯": "USAG",
  "灰原哀": "LITE",
  "钉崎野蔷薇": "GINT",
  "露西·哈特菲利亚": "USAG",
  "格斯": "LEVI",
  "坂田银时": "GINT"
};

const atlasPopularityByName = {
  "五条悟": 995,
  "阿尼亚·福杰": 990,
  "利威尔·阿克曼": 985,
  "漩涡鸣人": 980,
  "鲁路修·兰佩路基": 978,
  "牧濑红莉栖": 976,
  "冈部伦太郎": 974,
  "蒙奇·D·路飞": 972,
  "夜神月": 970,
  "空条承太郎": 968,
  "虎杖悠仁": 965,
  "伏黑惠": 962,
  "两面宿傩": 958,
  "夏油杰": 956,
  "乙骨忧太": 952,
  "七海建人": 950,
  "禅院真希": 946,
  "钉崎野蔷薇": 944,
  "乔鲁诺·乔巴拿": 940,
  "迪奥·布兰度": 936,
  "乔瑟夫·乔斯达": 934,
  "空条徐伦": 930,
  "东方仗助": 926,
  "布鲁诺·布加拉提": 922,
  "芙莉莲": 918,
  "猫猫": 916,
  "星野爱": 914,
  "成振宇": 912,
  "电次": 910,
  "玛奇玛": 906,
  "蕾塞": 902,
  "早川秋": 898,
  "绫濑桃": 894,
  "高仓健": 890,
  "Zero Two": 886,
  "亚丝娜": 882,
  "桐谷和人": 878,
  "有马加奈": 874,
  "日比野卡夫卡": 870,
  "三笠·阿克曼": 868,
  "奇犽·揍敌客": 864,
  "宇智波佐助": 860,
  "旗木卡卡西": 856,
  "格斯": 852,
  "坂田银时": 848
};

const atlasRoleNotes = {
  "冈部伦太郎": "嘴上是中二科学家，真到关键节点时比谁都敢扛事，是那种会一边嘴硬一边死磕到底的人。",
  "牧濑红莉栖": "理性很强、嘴也很锋利，但真正打动人的地方是她总能在混乱里把逻辑和温柔一起拎出来。",
  "椎名真由理": "表面软乎乎，实则是团队情绪锚点。她一出现，整个气压都会慢慢稳下来。",
  "阿万音铃羽": "行动果断得像开了加速器，目标一旦锁定就会直接往前冲，几乎不给自己留借口。",
  "菲利丝·喵喵": "看起来像营业型可爱选手，实际很会读空气，也很懂什么时候该把情绪价值拉满。",
  "漆原琉华": "气质非常轻和细腻，容易让人先注意到温柔感，属于安静但存在感很特别的类型。",
  "桐生萌郁": "寡言、压抑、警觉值很高，像是把很多话都折进了眼神里。",
  "虎杖悠仁": "是那种能在高压场里依旧保持热度的人，情绪真、行动快，特别容易把别人一起带燃。",
  "伏黑惠": "冷静、自持、先判断后出手，像把大部分情绪都压缩成了精准执行。",
  "两面宿傩": "压迫感很强，控制欲和危险感都写在脸上，属于一看就知道不好惹的终极问题人物。",
  "夏油杰": "思路很完整，讲话也有煽动力，越看越像那种会把自己逻辑贯彻到极致的人。",
  "七海建人": "成年人的稳定感拉满，做事干净利落，像一把已经校准好的尺子。",
  "乙骨忧太": "温和外表下其实非常能扛，属于一旦决定守护谁就会持续投入到底的类型。",
  "禅院真希": "不是嘴上喊口号的选手，而是直接拿行动和硬实力把路打穿的人。",
  "五条悟": "存在感强到像自带聚光灯，轻松、张扬、很会把压力场变成自己的主场。",
  "钉崎野蔷薇": "又刚又飒，嘴上不让人，心里也很拎得清，是典型的有态度还不虚张声势。",
  "乔瑟夫·乔斯达": "脑回路特别活，会整活也会反杀，像那种越临场越容易打出骚操作的人。",
  "迪奥·布兰度": "气场压人、控制欲强、野心值爆表，属于站着不动都像在放狠话的角色。",
  "乔鲁诺·乔巴拿": "表面稳，内里更稳，做事像先把路线图画完再落子。",
  "东方仗助": "外放、仗义、带点少年气，属于越熟越能感受到热心和冲劲的类型。",
  "空条徐伦": "抗压能力很强，局面越乱越会激出她那种硬顶上去的狠劲。",
  "布鲁诺·布加拉提": "责任感很重，像个天然队长，既能扛住局面又愿意护着团队往前走。"
};

const atlasAliasNames = new Set([
]);

const atlasRoleCountByArchetype = Object.entries(atlasArchetypeByName).reduce((acc, [, code]) => {
  acc[code] = (acc[code] || 0) + 1;
  return acc;
}, {});

const introScreen = document.getElementById("intro-screen");
const testScreen = document.getElementById("test-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const shareBtn = document.getElementById("share-btn");

const questionListEl = document.getElementById("question-list");
const progressBarEl = document.getElementById("progress-bar");
const progressTextEl = document.getElementById("progress-text");
const progressHintEl = document.getElementById("progress-hint");

const resultImageEl = document.getElementById("result-image");
const resultIntroEl = document.getElementById("result-intro");
const resultTypeNameEl = document.getElementById("result-type-name");
const resultBadgeEl = document.getElementById("result-badge");
const resultSubEl = document.getElementById("result-sub");
const resultDescEl = document.getElementById("result-desc");
const dimListEl = document.getElementById("dim-list");
const resultKickerEl = document.getElementById("result-kicker");
const atlasListEl = document.getElementById("atlas-list");
const atlasModalEl = document.getElementById("atlas-modal");
const atlasModalImageEl = document.getElementById("atlas-modal-image");
const atlasModalTitleEl = document.getElementById("atlas-modal-title");
const atlasModalSubEl = document.getElementById("atlas-modal-sub");
const atlasModalBadgesEl = document.getElementById("atlas-modal-badges");
const atlasModalDescEl = document.getElementById("atlas-modal-desc");
const atlasModalCloseBtn = document.getElementById("atlas-modal-close");

const answers = {};
let lastFocusedAtlasCard = null;

function closeAtlasModal() {
  if (!atlasModalEl) return;
  atlasModalEl.classList.add("hidden");
  atlasModalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedAtlasCard) {
    lastFocusedAtlasCard.focus();
    lastFocusedAtlasCard = null;
  }
}

function openAtlasModal(entry, sourceCard) {
  if (!atlasModalEl || !atlasModalImageEl || !atlasModalTitleEl || !atlasModalSubEl) return;
  const details = getAtlasRoleDetails(entry.name);
  const imageSrc = atlasImageMap[entry.name] || buildRoleFallbackImage(entry.name, entry.anime);
  atlasModalImageEl.src = imageSrc;
  atlasModalImageEl.alt = `${entry.name} 大图`;
  atlasModalImageEl.referrerPolicy = "no-referrer";
  atlasModalImageEl.onerror = () => {
    atlasModalImageEl.onerror = null;
    atlasModalImageEl.src = buildRoleFallbackImage(entry.name, entry.anime);
  };
  atlasModalTitleEl.textContent = entry.name;
  atlasModalSubEl.textContent = entry.anime;
  if (atlasModalBadgesEl) {
    const hotLabel = getAtlasHotLabel(details.popularity);
    const badges = [
      hotLabel ? `<span class="atlas-modal-badge">${hotLabel}</span>` : "",
      `<span class="atlas-modal-badge type">${details.archetype.cn}</span>`
    ].filter(Boolean);
    atlasModalBadgesEl.innerHTML = badges.join("");
  }
  if (atlasModalDescEl) {
    atlasModalDescEl.textContent = `${details.note} 人格原型「${details.archetype.cn}」通常会表现出：${details.archetype.desc}`;
  }
  atlasModalEl.classList.remove("hidden");
  atlasModalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastFocusedAtlasCard = sourceCard || null;
}

function setScreen(screen) {
  introScreen.classList.toggle("hidden", screen !== "intro");
  testScreen.classList.toggle("hidden", screen !== "test");
  resultScreen.classList.toggle("hidden", screen !== "result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetAnswers() {
  questions.forEach((q) => {
    delete answers[q.id];
  });
}

function getQuestionMetaLabel(question) {
  return `${dimensionMeta[question.dim].model} · ${dimensionMeta[question.dim].name}`;
}

function getShuffledOptions(question) {
  const options = question.options.slice();
  let seed = hashName(`${question.id}-${question.text}`);

  for (let i = options.length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    const j = seed % (i + 1);
    const temp = options[i];
    options[i] = options[j];
    options[j] = temp;
  }

  return options;
}

function renderQuestions() {
  questionListEl.innerHTML = "";

  questions.forEach((question, index) => {
    const item = document.createElement("div");
    item.className = "question-item";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.innerHTML = `<span class="meta-label">${getQuestionMetaLabel(question)}</span>`;

    const title = document.createElement("h3");
    title.className = "question-text";
    title.textContent = `${index + 1}. ${question.text}`;

    const options = document.createElement("div");
    options.className = "options";

    getShuffledOptions(question).forEach((opt) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${question.id}`;
      input.value = String(opt.value);
      input.checked = answers[question.id] === opt.value;
      input.addEventListener("change", () => {
        answers[question.id] = opt.value;
        updateProgress();
      });

      const text = document.createElement("span");
      text.className = "option-label";
      text.textContent = opt.label;

      label.appendChild(input);
      label.appendChild(text);
      options.appendChild(label);
    });

    item.appendChild(meta);
    item.appendChild(title);
    item.appendChild(options);
    questionListEl.appendChild(item);
  });
}

function updateProgress() {
  const done = questions.reduce((acc, q) => acc + (answers[q.id] ? 1 : 0), 0);
  const total = questions.length;
  const percent = Math.round((done / total) * 100);

  progressBarEl.style.width = `${percent}%`;
  progressTextEl.textContent = `${done} / ${total}`;

  if (done === total) {
    progressHintEl.textContent = "已全部完成，可以提交并查看结果。";
    submitBtn.disabled = false;
  } else {
    progressHintEl.textContent = `还差 ${total - done} 题，完成后可解锁结果。`;
    submitBtn.disabled = true;
  }
}

function levelFromScore(score) {
  if (score <= 3) return "L";
  if (score <= 4) return "M";
  return "H";
}

function buildPattern(levels) {
  return groupedDims.map((group) => group.map((d) => levels[d]).join("")).join("-");
}

function distanceBetweenPatterns(a, b) {
  const x = a.replace(/-/g, "");
  const y = b.replace(/-/g, "");
  let distance = 0;

  for (let i = 0; i < x.length; i += 1) {
    if (x[i] !== y[i]) distance += 1;
  }

  return distance;
}

function hashName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 9973;
  }
  return hash;
}

function getArchetypeByRoleName(name) {
  const archetypeCode = atlasArchetypeByName[name] || "USAG";
  return animeTypes.find((item) => item.code === archetypeCode) || animeTypes[0];
}

function getAtlasPopularity(name) {
  return atlasPopularityByName[name] || atlasBaseOrderByName[name] || 0;
}

function getAtlasHotLabel(popularity) {
  if (popularity >= 980) return "TOP";
  if (popularity >= 940) return "热门";
  if (popularity >= 900) return "高热";
  return "";
}

function getAtlasRoleDetails(name) {
  const archetype = getArchetypeByRoleName(name);
  return {
    archetype,
    popularity: getAtlasPopularity(name),
    note: atlasRoleNotes[name] || archetype.intro
  };
}

function getTopMatchesByPattern(pattern) {
  const ranked = atlasEntries
    .filter((entry) => !atlasAliasNames.has(entry.name))
    .map((entry) => {
      const archetypeCode = atlasArchetypeByName[entry.name] || "USAG";
      const archetype = getArchetypeByRoleName(entry.name);
      const distance = distanceBetweenPatterns(pattern, archetype.pattern);
      const closeness = 16 - distance;
      const normalizedScore = closeness / (atlasRoleCountByArchetype[archetypeCode] || 1);
      const score = Math.round(normalizedScore * 1000);
      return { ...entry, archetypeCode, score, distance, closeness, normalizedScore };
    });

  ranked.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.distance !== b.distance) return a.distance - b.distance;
    return getAtlasPopularity(b.name) - getAtlasPopularity(a.name);
  });
  return ranked.slice(0, 6);
}

function getAnswerSeed() {
  return questions.reduce((acc, question, index) => {
    const value = Number(answers[question.id] || 0);
    return acc + value * (index + 11) * 17;
  }, 0);
}

function selectBalancedRole(pattern) {
  const typeDistances = animeTypes.map((type) => ({
    ...type,
    distance: distanceBetweenPatterns(pattern, type.pattern)
  }));
  const minDistance = Math.min(...typeDistances.map((type) => type.distance));
  const candidateTypes = typeDistances.filter((type) => type.distance <= minDistance + 1);
  const candidateCodes = new Set(candidateTypes.map((type) => type.code));

  const ranked = atlasEntries
    .filter((entry) => !atlasAliasNames.has(entry.name))
    .filter((entry) => candidateCodes.has(atlasArchetypeByName[entry.name] || "USAG"))
    .map((entry) => {
      const archetypeCode = atlasArchetypeByName[entry.name] || "USAG";
      const archetype = getArchetypeByRoleName(entry.name);
      const distance = distanceBetweenPatterns(pattern, archetype.pattern);
      const closeness = 16 - distance;
      const normalizedScore = closeness / (atlasRoleCountByArchetype[archetypeCode] || 1);
      const tickets = Math.max(1, Math.round(normalizedScore * 100));
      return { ...entry, archetypeCode, distance, closeness, normalizedScore, tickets };
    });

  ranked.sort((a, b) => {
    if (b.normalizedScore !== a.normalizedScore) return b.normalizedScore - a.normalizedScore;
    if (a.distance !== b.distance) return a.distance - b.distance;
    return hashName(a.name) - hashName(b.name);
  });

  const totalTickets = ranked.reduce((sum, item) => sum + item.tickets, 0);
  const seed = getAnswerSeed();
  let cursor = totalTickets === 0 ? 0 : seed % totalTickets;
  let selectedRole = null;

  for (const item of ranked) {
    if (cursor < item.tickets) {
      selectedRole = item;
      break;
    }
    cursor -= item.tickets;
  }

  return {
    selectedRole: selectedRole || ranked[0] || null,
    topMatches: ranked.slice(0, 6)
  };
}

function buildRoleFallbackImage(name, anime) {
  const safeName = String(name || "未知角色");
  const safeAnime = String(anime || "动漫角色");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="500" viewBox="0 0 900 500" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dfe8ff"/>
          <stop offset="100%" stop-color="#cdd9f6"/>
        </linearGradient>
      </defs>
      <rect width="900" height="500" rx="28" fill="url(#g)"/>
      <rect x="50" y="70" width="800" height="360" rx="22" fill="#ffffff" fill-opacity="0.65"/>
      <text x="90" y="250" font-size="58" font-family="'Noto Sans SC','Microsoft YaHei',sans-serif" font-weight="800" fill="#314d7f">${safeName}</text>
      <text x="90" y="320" font-size="30" font-family="'Noto Sans SC','Microsoft YaHei',sans-serif" fill="#4e6792">${safeAnime}</text>
      <text x="90" y="382" font-size="22" font-family="'Noto Sans SC','Microsoft YaHei',sans-serif" fill="#6f82a6">暂无角色专属插图</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function computeResult() {
  const rawScores = dimOrder.reduce((acc, dim) => {
    acc[dim] = 0;
    return acc;
  }, {});

  questions.forEach((q) => {
    rawScores[q.dim] += Number(answers[q.id] || 0);
  });

  const levels = dimOrder.reduce((acc, dim) => {
    acc[dim] = levelFromScore(rawScores[dim]);
    return acc;
  }, {});

  const pattern = buildPattern(levels);
  let bestType = animeTypes[0];
  let minDistance = Number.POSITIVE_INFINITY;

  animeTypes.forEach((type) => {
    const d = distanceBetweenPatterns(pattern, type.pattern);
    if (d < minDistance) {
      minDistance = d;
      bestType = type;
    }
  });

  const dimExplain = dimOrder.reduce((acc, dim) => {
    acc[dim] = dimExplanations[dim][levels[dim]];
    return acc;
  }, {});

  const balancedRoleResult = selectBalancedRole(pattern);
  const selectedRole = balancedRoleResult.selectedRole;
  const selectedType = selectedRole ? getArchetypeByRoleName(selectedRole.name) : bestType;
  const selectedDistance = selectedRole
    ? distanceBetweenPatterns(pattern, selectedType.pattern)
    : minDistance;
  const matchFromSelectedType = Math.max(60, Math.round((1 - selectedDistance / 15) * 100));

  return {
    finalType: selectedType,
    selectedRole,
    topMatches: balancedRoleResult.topMatches.length ? balancedRoleResult.topMatches : getTopMatchesByPattern(pattern),
    rawScores,
    levels,
    dimExplanations: dimExplain,
    modeKicker: "你最像的二次元角色",
    badge: `匹配度 ${matchFromSelectedType}%`,
    sub: `${selectedType.cn} · ${selectedType.sub}`,
    pattern
  };
}

function getRepeatTypeHint(result) {
  if (!result || !result.finalType || result.finalType.code !== "EDWD") return "";
  return "如果你经常测到爱德华型，通常不是巧合：这说明你在很多选择里都会偏向“先把局面扛起来”“边做边修正”“关键时刻自己拍板”“不太信结局只能认命”这一边。你的分数常会把热血值、行动速度、决策果断度和执行稳定度推到中高档，所以系统会反复把你归到炼成行动派。";
}

function renderResult(result) {
  const selectedImage = result.selectedRole
    ? (atlasImageMap[result.selectedRole.name] || buildRoleFallbackImage(result.selectedRole.name, result.selectedRole.anime))
    : (result.finalType.image || "./assets/hero.svg");
  resultImageEl.src = selectedImage;
  resultImageEl.referrerPolicy = "no-referrer";
  if (result.selectedRole) {
    resultImageEl.onerror = () => {
      resultImageEl.onerror = null;
      resultImageEl.src = buildRoleFallbackImage(result.selectedRole.name, result.selectedRole.anime);
    };
  } else {
    resultImageEl.onerror = null;
  }
  resultImageEl.alt = `${result.selectedRole ? result.selectedRole.name : result.finalType.role}结果图`;
  resultIntroEl.textContent = result.selectedRole ? `你和 ${result.selectedRole.name}（${result.selectedRole.anime}）的气质最接近。` : result.finalType.intro;
  resultKickerEl.textContent = result.modeKicker;
  resultTypeNameEl.textContent = result.selectedRole ? `${result.selectedRole.name}（${result.selectedRole.anime}）` : `${result.finalType.code}（${result.finalType.cn}）`;
  resultBadgeEl.textContent = result.badge;
  resultSubEl.textContent = result.sub;
  const repeatTypeHint = getRepeatTypeHint(result);
  resultDescEl.textContent = repeatTypeHint
    ? `${result.finalType.desc}\n\n${repeatTypeHint}\n\n维度模式：${result.pattern}`
    : `${result.finalType.desc}\n\n维度模式：${result.pattern}`;

  dimListEl.innerHTML = "";
  dimOrder.forEach((dim) => {
    const item = document.createElement("div");
    item.className = "dim-item";
    item.innerHTML = `
      <div class="dim-item-top">
        <div class="dim-item-name">${dimensionMeta[dim].name}</div>
        <div class="dim-item-score">${result.levels[dim]} / ${result.rawScores[dim]}分</div>
      </div>
      <p>${result.dimExplanations[dim]}</p>
    `;
    dimListEl.appendChild(item);
  });

  renderAtlas(result.selectedRole ? result.selectedRole.name : result.finalType.role);
}

function renderAtlas(currentRole) {
  if (!atlasListEl) return;

  atlasListEl.innerHTML = "";

  const normalizedCurrent = String(currentRole || "").replace(/[·\s]/g, "");
  const sortedEntries = atlasEntries
    .slice()
    .sort((a, b) => getAtlasPopularity(b.name) - getAtlasPopularity(a.name));

  sortedEntries.forEach((entry) => {
    const normalizedName = entry.name.replace(/[·\s]/g, "");
    const isActive = normalizedCurrent && (normalizedName.includes(normalizedCurrent) || normalizedCurrent.includes(normalizedName));
    const imageSrc = atlasImageMap[entry.name] || buildRoleFallbackImage(entry.name, entry.anime);
    const details = getAtlasRoleDetails(entry.name);
    const hotLabel = getAtlasHotLabel(details.popularity);

    const card = document.createElement("article");
    card.className = `atlas-card${isActive ? " is-active" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `查看 ${entry.name} 图鉴大图`);
    card.innerHTML = `
      <div class="atlas-cover">
        <img class="atlas-image" src="${imageSrc}" alt="${entry.name} 图鉴图" loading="lazy" referrerpolicy="no-referrer" />
        ${hotLabel ? `<span class="atlas-rank">${hotLabel}</span>` : ""}
      </div>
      <div class="atlas-content">
        <div class="atlas-head">
          <strong>${entry.name}</strong>
        </div>
        <div class="atlas-meta-row">
          <span class="atlas-pill">${entry.anime}</span>
          <span class="atlas-pill atlas-pill-soft">${details.archetype.cn}</span>
        </div>
      </div>
    `;
    const img = card.querySelector(".atlas-image");
    if (img) {
      img.addEventListener("error", () => {
        img.src = buildRoleFallbackImage(entry.name, entry.anime);
      });
    }
    card.addEventListener("click", () => openAtlasModal(entry, card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAtlasModal(entry, card);
      }
    });
    atlasListEl.appendChild(card);
  });
}

function startTest() {
  resetAnswers();
  renderQuestions();
  updateProgress();
  setScreen("test");
}

function submitTest() {
  if (submitBtn.disabled) return;
  const result = computeResult();
  renderResult(result);
  setScreen("result");
}

function downloadResultImage() {
  const src = resultImageEl.getAttribute("src");
  if (!src) return;

  const a = document.createElement("a");
  a.href = src;
  a.download = `${resultTypeNameEl.textContent.replace(/[\s（）]/g, "_")}.svg`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

startBtn.addEventListener("click", startTest);
backBtn.addEventListener("click", () => setScreen("intro"));
submitBtn.addEventListener("click", submitTest);
restartBtn.addEventListener("click", startTest);
homeBtn.addEventListener("click", () => setScreen("intro"));
shareBtn.addEventListener("click", downloadResultImage);
if (atlasModalCloseBtn) {
  atlasModalCloseBtn.addEventListener("click", closeAtlasModal);
}
if (atlasModalEl) {
  atlasModalEl.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.dataset && target.dataset.close === "atlas-modal") {
      closeAtlasModal();
    }
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && atlasModalEl && !atlasModalEl.classList.contains("hidden")) {
    closeAtlasModal();
  }
});

setScreen("intro");
