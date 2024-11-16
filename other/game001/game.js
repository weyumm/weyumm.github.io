// 画布和游戏设置
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 10;
const cellSize = 60;  // 设置每个格子的大小
let player1 = { x: 4, y: 4 };  
let player2 = { x: 3, y: 3 };
let eventTriggered = false;
let eventTile = { x: 9, y: 0 };
let eventTitle = "发现玉石";
let eventDescription = "按重来再次游玩";
let eventImageSrc = "game.jpeg"; // 初始事件图像

// 事件类型
// 事件类型
const events = [
    { 
        title: "发现翡翠", 
        description: "恭喜，你发现了珍贵的翡翠！活力值+5，智慧值+3，心情+10，san值提升", 
        image: "jade1.jpg" 
    },
    { 
        title: "发现和田玉", 
        description: "你找到了美丽的和田玉！活力值+7，智慧值+5，心情+8，san值显著提升", 
        image: "jade2.jpg" 
    },
    { 
        title: "被玻璃骗了", 
        description: "小心，你被假玉石骗了！活力值-10，智慧值-5，心情-15，san值下降", 
        image: "jade3.jpg" 
    },
    { 
        title: "发现蓝田玉", 
        description: "你发现了古老的蓝田玉！活力值+6，智慧值+4，心情+7，san值有所提升", 
        image: "jade4.jpg" 
    },
    { 
        title: "发现独山玉", 
        description: "你意外发现了稀有的独山玉！活力值+8，智慧值+7，心情+10，san值显著提升", 
        image: "jade5.jpg" 
    },
    { 
        title: "发现岫岩玉", 
        description: "你找到了珍贵的岫岩玉！活力值+6，智慧值+6，心情+8，san值有所提升", 
        image: "jade6.jpg" 
    }
];

// 玉石科普内容
const gemFacts = [
     "玉石，是由矿物或天然物质所构成的一类美丽坚硬的材料，通常用于雕刻、饰品等。",
     "玉石的种类有很多，包括翡翠、和田玉、南红、岫岩玉等，每种玉石的品质都与其成分、颜色及纹理等因素有关。",
     "翡翠，是最具价值和稀有的玉石之一，透明度高，色泽鲜艳，常用于高级珠宝和装饰品。",
     "和田玉，产自中国新疆，是一种历史悠久的玉石，以其温润如脂的质地著称，被誉为‘软玉之王’。",
     "岫岩玉，产自中国辽宁岫岩，颜色多样，质地细腻，是中国四大名玉之一。",
     "南红，是一种红色玛瑙，因其颜色鲜艳、质地温润而备受喜爱，常用于制作首饰和雕刻。",
     "玉石被认为具有某种神秘的能量，常常被用作保健或祈福的物品，尤其在中国文化中有着极高的象征意义。",
     "在中国古代，玉石被视为天地精华的凝聚，象征着纯洁、高尚和吉祥。",
     "《周礼》中有‘苍璧礼天，黄琮礼地’的说法，用青色的璧玉祭祀天神，黄色的琮玉祭祀地神。",
     "《礼记》中提到‘君子比德于玉焉’，意思是君子应该像玉一样品德高尚。",
     "中国古代帝王常用玉璧、玉圭等玉器作为权力的象征，如秦始皇的传国玉玺。",
     "玉佩、玉镯、玉雕等玉器不仅是装饰品，还承载着深厚的文化内涵和美好的寓意。",
     "在中国传统文化中，玉龙象征着吉祥和权力，常用于皇家建筑和器物的装饰。",
     "玉如意是一种传统吉祥物，象征着如意、吉祥和幸福。",
     "玉蝉在古代常被用作陪葬品，象征着重生和永生。",
     "玉佛像、玉观音等宗教题材的玉雕作品，不仅具有艺术价值，还寄托了人们对美好生活的向往。",
     "玉文化在中国已有数千年的历史，从新石器时代的红山文化、良渚文化到现代，玉器一直是中华文化的瑰宝。",
     "玉器的制作工艺精湛，包括选材、设计、雕刻、打磨等多个环节，每一步都需要匠人的精心操作。",
     "现代玉器市场中，除了传统的和田玉、翡翠外，还有许多新兴的玉石品种，如碧玉、青玉等。",
     "玉石的保养需要注意避免撞击、高温和化学腐蚀，定期用软布擦拭可以保持其光泽。",
     "在国际市场上，中国的玉石制品深受各国收藏家的喜爱，成为中国传统文化的重要载体。",
    "玉石的硬度因种类而异，翡翠硬度较高，适合精细雕刻；而和田玉则相对较软，易于加工。",
    "玉石的密度和折射率也是鉴别其真伪和品质的重要指标之一。",
    "玉石中的‘水头’指的是其透明度，水头越好，玉石越显得晶莹剔透。",
    "玉石中的‘棉’是指内部的白色或灰色杂质，过多的棉会影响玉石的美观和价值。",
    "玉石的‘裂’是指其内部的裂纹或缝隙，裂的存在会降低玉石的坚固性和价值。",
    "‘俏色’是玉石雕刻中的一种技法，利用玉石本身的不同颜色进行巧妙设计，使作品更加生动逼真。",
    "玉石雕刻中的‘镂空’技法，要求匠人技艺高超，能在保证玉石结构完整的同时，雕刻出精美的镂空图案。",
    "‘阴刻’和‘阳刻’是玉石雕刻中的两种基本技法，前者是在玉石表面刻出凹陷的线条，后者则是刻出凸起的线条。",
    "玉石的‘包浆’是指其表面经过长时间氧化和摩擦形成的一层自然光泽，是玉石老化和成熟的标志。",
    "‘籽料’是指从河床中冲刷出来的玉石原料，因其形状圆润、皮色自然，备受玉石收藏者的喜爱。",
    "玉石的‘山料’则是指直接从山体中开采出来的原料，通常形状不规则，需要进一步的加工和切割。",
    "‘赌石’是玉石交易中的一种特殊方式，买家通过观察和分析玉石的外观、皮色等特征，来预测其内部的质量和价值。",
    "玉石的‘皮色’是指其表面的颜色和纹理，是鉴别玉石真伪和品质的重要依据之一。",
    "‘沁色’是指玉石在长时间的地质作用下，外部物质渗透进入玉石内部形成的颜色变化，沁色往往使玉石更加独特和珍贵。",
    "玉石的‘开窗’是指在玉石原料上开一个小口，让买家能够窥见其内部的质量和颜色，以评估其价值。",
    "‘玉雕大师’是指技艺精湛、作品风格独特的玉石雕刻艺术家，他们的作品往往具有极高的艺术价值和收藏价值。",
    "玉石的‘抛光’是指对其表面进行精细打磨，使其呈现出更加明亮和光滑的光泽，是玉石加工的最后一道工序。",
    "‘玉石文化’是中国传统文化的重要组成部分，它涵盖了玉石的开采、加工、使用、鉴赏等多个方面，体现了中华民族对玉石的深厚情感和独特审美。",
    "随着科技的发展，现代玉石加工技术日益先进，如激光雕刻、3D打印等技术的应用，为玉石雕刻艺术带来了新的发展机遇。",
    "玉石的收藏和投资需要具备一定的专业知识和鉴别能力，以避免购买到假冒伪劣的产品。",
    "玉石的‘养护’是指在日常佩戴和保存过程中，对其进行适当的清洁和保养，以延长其使用寿命和保持其美观。",
    "玉石不仅是一种珍贵的自然资源，更是一种文化的传承和艺术的展现，它以其独特的魅力和价值，成为了人们追求美好生活的象征。",
    "玉石种类繁多，按成因可分为原生矿和次生矿。原生矿是指直接从山体或岩层中开采的玉石，次生矿则是经过风化、搬运等地质作用后形成的。",
    "玉石的产地遍布全球，但中国、缅甸、俄罗斯等地是主要的玉石生产国。中国的玉石产地主要集中在新疆、青海、辽宁、河南等地。",
    "玉石的质地细腻，触感温润，是制作首饰和工艺品的理想材料。其独特的颜色和纹理，也为艺术家提供了广阔的创作空间。",
    "玉石在中国文化中占据着重要地位，被视为吉祥、美好和尊贵的象征。在古代，玉石常被用于制作祭祀用品和宫廷饰品。",
    "玉石的颜色丰富多样，包括白、绿、黄、红、黑等。不同颜色的玉石，往往具有不同的寓意和象征意义。例如，绿色玉石通常被视为生命的象征，寓意生机勃勃、充满活力。",
    "玉石的透明度也是其品质的重要评价指标之一。透明度高的玉石，往往更加晶莹剔透，具有更高的收藏价值。",
    "玉石的保养需要注意避免与硬物碰撞，避免高温和阳光直射，以及定期清洁和保养。正确的保养方法可以使玉石保持光泽和延长使用寿命。",
    "玉石的鉴别需要具备一定的专业知识和经验。通过观察玉石的颜色、纹理、硬度、密度等特征，以及借助专业的检测仪器，可以对玉石的真伪和品质进行鉴别。",
    "玉石市场鱼龙混杂，存在大量假冒伪劣产品。购买玉石时，建议选择正规渠道和信誉良好的商家，避免上当受骗。",
    "玉石的价值不仅取决于其品质，还受到市场需求和供应情况的影响。因此，在投资和收藏玉石时，需要密切关注市场动态和价格走势。"
];
// 随机显示玉石科普内容
function randomGemFact() {
    const fact = gemFacts[Math.floor(Math.random() * gemFacts.length)];
    document.getElementById('gemFact').innerText = fact;
}

// 启动游戏
function startGame() {
    document.getElementById('startButton').style.display = 'none'; // 隐藏开始按钮
    renderGame();  // 启动游戏绘制
}

// 画迷宫格子
function drawGrid() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            ctx.strokeStyle = 'white';
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);

            // 在事件格子上绘制事件贴图
            if (x === eventTile.x && y === eventTile.y) {
                const eventImage = new Image();
                eventImage.src = eventImageSrc;
                
                eventImage.onload = function() {
                    ctx.drawImage(eventImage, x * cellSize, y * cellSize, cellSize, cellSize);
                };
            }
        }
    }
}


// 画玩家
function drawPlayers() {
    const player1Image = new Image();
    player1Image.src = 'player1.jpg';
    ctx.drawImage(player1Image, player1.x * cellSize, player1.y * cellSize, cellSize, cellSize);

    const player2Image = new Image();
    player2Image.src = 'player2.jpg';
    ctx.drawImage(player2Image, player2.x * cellSize, player2.y * cellSize, cellSize, cellSize);
}


// 渲染游戏
function renderGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawPlayers();
    checkEventTrigger();  // 检查是否触发事件
}

// 检查事件是否触发
function checkEventTrigger() {
    if ((player1.x === eventTile.x && player1.y === eventTile.y) ||
        (player2.x === eventTile.x && player2.y === eventTile.y)) {
        triggerEvent();
    }
}

// 触发事件
function triggerEvent() {
    eventTriggered = true;
    document.getElementById('eventPopup').style.display = 'block';
    document.getElementById('eventTitle').innerText = `事件：${eventTitle}`;
    document.getElementById('eventDescription').innerText = eventDescription;
    
    // 设置事件图片
    const eventImage = new Image();
    eventImage.src = eventImageSrc;  // 设置事件图像来源
    eventImage.onload = function() {
        document.getElementById('eventImage').src = eventImage.src;  // 设置弹窗中的图片
    };
}

// 重来按钮
function retryGame() {
    // 重置玩家位置
    player1.x = 4;
    player1.y = 4;
    player2.x = 3;
    player2.y = 3;
    eventTriggered = false;
    document.getElementById('eventPopup').style.display = 'none';

    // 随机选择事件并随机生成位置
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    eventTitle = randomEvent.title;
    eventDescription = randomEvent.description;
    eventImageSrc = randomEvent.image; // 选择事件对应的图片
    eventTile = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };

    renderGame();
}

// 继续游戏
function continueGame() {
    window.location.href = "https://gaoshutongbu.tongji.edu.cn/index.htm";
}

// 监听键盘按键事件
document.addEventListener('keydown', function (e) {
    if (eventTriggered) return;  // 如果事件已触发，则禁止移动

    switch (e.key) {
        case 'ArrowUp':
            if (player1.y > 0) player1.y--;
            break;
        case 'ArrowDown':
            if (player1.y < gridSize - 1) player1.y++;
            break;
        case 'ArrowLeft':
            if (player1.x > 0) player1.x--;
            break;
        case 'ArrowRight':
            if (player1.x < gridSize - 1) player1.x++;
            break;
        case 'w':
            if (player2.y > 0) player2.y--;
            break;
        case 's':
            if (player2.y < gridSize - 1) player2.y++;
            break;
        case 'a':
            if (player2.x > 0) player2.x--;
            break;
        case 'd':
            if (player2.x < gridSize - 1) player2.x++;
            break;
    }

    renderGame();
});


// 处理玩家1的控制（右侧红色按钮）
document.getElementById('player1Up').addEventListener('click', function() {
    if (player1.y > 0) player1.y--;  // 玩家1向上移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player1Down').addEventListener('click', function() {
    if (player1.y < gridSize - 1) player1.y++;  // 玩家1向下移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player1Left').addEventListener('click', function() {
    if (player1.x > 0) player1.x--;  // 玩家1向左移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player1Right').addEventListener('click', function() {
    if (player1.x < gridSize - 1) player1.x++;  // 玩家1向右移动
    renderGame();  // 更新游戏界面
});

// 处理玩家2的控制（左侧黄色按钮）
document.getElementById('player2Up').addEventListener('click', function() {
    if (player2.y > 0) player2.y--;  // 玩家2向上移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player2Down').addEventListener('click', function() {
    if (player2.y < gridSize - 1) player2.y++;  // 玩家2向下移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player2Left').addEventListener('click', function() {
    if (player2.x > 0) player2.x--;  // 玩家2向左移动
    renderGame();  // 更新游戏界面
});

document.getElementById('player2Right').addEventListener('click', function() {
    if (player2.x < gridSize - 1) player2.x++;  // 玩家2向右移动
    renderGame();  // 更新游戏界面
});
