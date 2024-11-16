// script.js

// 绑定生成按钮的点击事件
document.getElementById('generate-btn').addEventListener('click', generateNarration);

// 与“玉石”相关的扩展训练文本
const trainingText = `
琢玉成瑜，璃光璀璨。
玦佩腰间，璎色半紫。
钰质温润，琚带轻扬。
珏合双璧，玉德绵长。
琼琳满目，瑜璇交辉。
璠琬在手，瑰色盈眸。
琮礼天地，璜映华裳。
璋才难遇，玉韵悠扬。
琢心如玉，璃梦常新。
玦月当空，璎星点缀。
钰魂不灭，琚音绕梁。
珏誓永存，玉缘绵缈。
玉石兮温润泽，璀璨兮光凝华。
凝天地兮灵气蕴，质如冰兮色若霞。
声如磬兮韵悠扬，光如月兮映银沙。
月下观兮玉石辉，美人倾兮风姿佳。
君子器兮古所称，洁白瑕兮敬且畏。
玉石瑰宝，古之所爱。
材料科学，丰盈迷魂。
化学成分，硅酸盐主。
硅铝铁镁，纷杂组合。
色彩质地，元素异配。
多样纷呈，矿物之美。
软硬分类，透闪阳起。
玛瑙水晶，各异其趣。
物理性质，硬耐磨蚀。
密度光泽，温润如脂。
油脂玻璃，温润半透。
白青黄绿，紫彩纷纭。
地质漫长，作用繁多。
岩浆熔融，高温高压。
硅酸盐结，玉质初现。
沉积生物，有机质富。
变质成玉，构造运动。
矿物新组，品种独特。
区域热蚀，质地精美。
纹理图案，奇妙无双。
构造破碎，岩石变形。
空间物质，优化重组。
玉石之奇，天地所赋。
美非形兮在其神，声清脆兮天籁闻。
载文化兮历千秋，非石焉兮时代征。
经雕琢兮方显丽，犹人学兮理方明。
兮珠宝首饰兮，色泽质地美兮，手镯项链戒指兮，文化象征载兮。
艺术品雕刻兮，细腻易雕兮，摆件挂件精美兮，技艺巧妙兮。
保健功能兮，传统之说兮，调和气血平衡兮，安神清心兮。
虽科学依据乏兮，温润触感悦兮。
兮玉石兮，天然矿物岩兮，知识丰富兮。
矿物特性兮，形成过程兮，科学应用兮，皆令人迷兮。
深入了解兮，鉴赏更美兮，珍惜保护兮，瑰宝永存兮。
秋风起兮叶瑟瑟，玉石辉兮光未歇。
静谧深兮如至境，超尘外兮不染埃。
玉石名兮品世态，繁华苍兮皆历怀。
玉石者，华夏瑰宝，璀璨夺目，历史深远，文化丰富。观其形成，乃地质之奇，岁月之功。
白云石大理岩浆，孕育胚胎于海底；炽热岩浆渗入，变幻结构于岩心。
透闪石为主，玉质初现；亿年磨砺，方成瑰宝。
兴隆洼文化，玉器出土，八千年前之遗韵；周口店上洞，玉石珠饰，两万年前之遗珍。
祭祀用具，专属物品，玉石象征地位与权力，神秘色彩浓厚。
史前至商，巫玉阶段。红山文化，动物圆形，玉器独特；良渚文化，玉琮玉璧，深沉严谨。
祭天祀地，陪葬殓尸，玉石之用，神秘而庄严。
先秦时代，玉器过渡。夏代始兴，风格渐变；春秋战国，诸侯争霸，玉雕艺术光辉灿烂。
和田玉兴，礼学与玉，君子比德，观念应运而生。
秦汉玉器，继承发展，礼玉葬玉，饰玉陈设，四大类俱全。
宋辽金时，实用装饰，玉器兴盛，礼减玩增，贴近生活。
明清之际，玉器鼎盛。玉质之美，琢工之精，器形之丰，作品之多，使用之广，前所未有。
皇室爱玉，民间兴隆，茶酒具盛，仿古玉器，层出不穷。
玉石文化，道德象征。美好纯洁，高贵典雅，与神沟通，权力地位。
祭祀会盟，朝聘之礼，玉石为贵，化干戈为玉帛，核心价值理念。
政治经济，玉石亦重。和田名玉，皇权象征；开采加工，贸易繁荣，经济交流，地区互动。
现代传承，玉石犹新。雕刻艺术，收藏鉴赏，活跃依旧。文化内涵，时代价值，赋予新义。
全球发展，文化交流，玉石之魅，世界共享。
综观玉石之历史，丰富多彩，文明之光。史前巫玉，明清鼎盛，玉石伴华夏文明而演变升华。
如今瑰宝，中华文化之象征，闪耀独特光芒于现代社会。
傥辨美玉，君收白珪。
凤箫声动，玉壶光转，一夜鱼龙舞。
玉阶生白露，夜久侵罗袜。
玉器七千陈湛露，翠蛾三百舞灵风。
瑶池仙境藏宝玉，霓裳羽衣舞翩跹。
翡翠盈盘似秋水，佳人轻舞动云烟。
玕光映日初，瑾瑜满吾庐。
玚色润如酥，君子佩玦琚。
玏华照夜途，瑁石闪幽蓝。
玡彩映星河，佳人饰瑂簪。
玓璎盈手间，瑆琛共璀璨。
瑰璁映华裳，心悦此玮璠。
玷瑕藏深闺，玟珠隐碧潭。
玽彩难遮掩，君子心常瞻。
玿石虽暗黑，亦藏玉之颜。
珋理通天地，玉德永流传。
`;

// 构建一阶马尔科夫链的函数
function buildFirstOrderMarkovChain(text) {
    const words = text.split(/\s+/);
    const markovChain = {};

    // 遍历每个单词，生成一阶马尔科夫链
    for (let i = 0; i < words.length - 1; i++) {
        const word = words[i];
        const nextWord = words[i + 1];

        // 如果该单词尚未存在于马尔科夫链中，则初始化为空数组
        if (!markovChain[word]) {
            markovChain[word] = [];
        }

        // 将下一个单词添加到该单词对应的数组中
        markovChain[word].push(nextWord);
    }

    return markovChain;
}

// 初始化马尔科夫链
const markovChain = buildFirstOrderMarkovChain(trainingText);

// 生成句子的函数，使用一阶马尔科夫链
function generateSentence(maxLength = 8) {
    // 随机选择一个起始单词
    const keys = Object.keys(markovChain);
    let currentWord = keys[Math.floor(Math.random() * keys.length)];
    let sentence = [currentWord];

    // 生成句子，直到达到最大长度
    for (let i = 0; i < maxLength - 1; i++) {
        const possibleNextWords = markovChain[currentWord]; // 获取当前单词的可能下一个单词
        if (!possibleNextWords || possibleNextWords.length === 0) {
            break; // 如果没有可能的下一个单词，则停止
        }

        // 随机选择下一个单词
        const nextWord = weightedRandomChoice(possibleNextWords);
        sentence.push(nextWord); // 将下一个单词加入句子

        // 更新当前单词
        currentWord = nextWord;

        // 如果下一个单词以句号结尾，则结束句子
        if (nextWord.endsWith('。')) {
            break;
        }
    }

    // 将句子的首字母大写，并确保句子以句号结尾
    let generated = sentence.join(' ');
    generated = generated.charAt(0).toUpperCase() + generated.slice(1);
    if (!generated.endsWith('。')) {
        generated += '。';
    }

    return generated; // 返回生成的句子
}

// 加权随机选择函数
function weightedRandomChoice(arr) {
    // 为每个词分配一个动态的随机权重
    const weights = arr.map(() => Math.random() * 3); // 权重范围调整为0到3之间
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const random = Math.random() * totalWeight;

    let cumulativeSum = 0;
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += weights[i];
        if (random < cumulativeSum) {
            return arr[i];
        }
    }

    return arr[arr.length - 1]; // 默认返回最后一个单词
}

// 生成叙述的函数
function generateNarration() {
    // 生成一句话，设置最大长度为8
    const narration = generateSentence(8);

    // 将生成的叙述显示在页面上
    document.getElementById('narration').textContent = narration;
}
