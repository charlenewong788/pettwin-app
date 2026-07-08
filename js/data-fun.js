/* PetPersona — fun hooks data & generators:
   collection rarity (C/R/SR/SSR), daily fortune, soul twins, pet letters. */
(function () {
  /* ---- Collection rarity (per species, sums to 100) — PetPersona's own distribution
     model, for collection fun only; not a real-world statistic. ---- */
  var RARITY = {
    cat: {
      ISTJ: 9, ISFJ: 8, INFJ: 3, INTJ: 5,
      ISTP: 12, ISFP: 14, INFP: 6, INTP: 10,
      ESTP: 5, ESFP: 4, ENFP: 5, ENTP: 4,
      ESTJ: 4, ESFJ: 6, ENFJ: 3, ENTJ: 2,
    },
    dog: {
      ISTJ: 6, ISFJ: 8, INFJ: 2, INTJ: 2,
      ISTP: 5, ISFP: 6, INFP: 4, INTP: 2,
      ESTP: 9, ESFP: 12, ENFP: 13, ENTP: 5,
      ESTJ: 6, ESFJ: 12, ENFJ: 6, ENTJ: 2,
    },
  };

  function tierOf(pct) {
    if (pct <= 2) return 'ssr';
    if (pct <= 4) return 'sr';
    if (pct <= 7) return 'r';
    return 'c';
  }

  function rarity(species, code) {
    var table = RARITY[species] || RARITY.cat;
    var pct = table[code] || 6;
    return { pct: pct, tier: tierOf(pct) };
  }

  /* ---- Daily fortune content pool ---- */
  var YI = [
    { zh: '追着太阳挪窝', en: 'Migrate with the sun patch' },
    { zh: '偷袭主人的脚踝', en: 'Ambush an unsuspecting ankle' },
    { zh: '睡到日上三竿', en: 'Sleep in like royalty' },
    { zh: '霸占全屋最软的窝', en: 'Claim the softest spot in the house' },
    { zh: '监督主人上班', en: "Supervise the human's work shift" },
    { zh: '光速拆一个快递', en: 'Speed-run unboxing a package' },
    { zh: '翻出肚皮讨摸', en: 'Flip over and demand belly rubs' },
    { zh: '窗台蹲班看鸟', en: 'Clock in for bird-watching duty' },
    { zh: '装没听见名字', en: 'Pretend your name rings no bells' },
    { zh: '打断一场视频会议', en: 'Crash an important video call' },
    { zh: '把玩具藏进床底', en: 'Smuggle a toy under the bed' },
    { zh: '对着零食柜静坐', en: 'Hold a sit-in by the treat cabinet' },
    { zh: '演一出饿了三天', en: "Act like you haven't eaten in days" },
    { zh: '在新床单上打滚', en: 'Roll across the freshly made bed' },
    { zh: '巡视全屋领地', en: 'Patrol the kingdom room by room' },
    { zh: '用头槌表达爱意', en: 'Headbutt someone you love' },
    { zh: '练习无辜眼神', en: 'Rehearse the innocent look' },
    { zh: '半夜开运动会', en: 'Host the midnight zoomies' },
    { zh: '抢占主人的椅子', en: "Steal the chair the moment it's free" },
    { zh: '闻遍每个新袋子', en: 'Inspect every bag that comes home' },
    { zh: '蹲守浴室门口', en: 'Stand guard outside the bathroom' },
    { zh: '接住空中的零食', en: 'Catch a flying treat mid-air' },
    { zh: '甩毛甩出艺术感', en: 'Shed with artistic flair' },
    { zh: '大声催促开饭', en: 'Announce loudly that dinner is late' },
  ];
  var JI = [
    { zh: '直面体重秤', en: 'Lock eyes with the scale' },
    { zh: '单挑吸尘器', en: 'Duel the vacuum cleaner' },
    { zh: '轻信剪指甲的邀约', en: 'Fall for the nail-trim invitation' },
    { zh: '多看航空箱一眼', en: 'Give the carrier a second look' },
    { zh: '试探鱼缸深浅', en: 'Test the depth of the fish tank' },
    { zh: '招惹扫地机器人', en: 'Mess with the robot vacuum' },
    { zh: '高估自己的弹跳力', en: "Overestimate today's vertical leap" },
    { zh: '把洗澡当成玩水', en: 'Confuse bath time with pool time' },
    { zh: '偷舔主人的奶茶', en: "Sample the human's bubble tea" },
    { zh: '追问镜子里是谁', en: 'Interrogate the stranger in the mirror' },
    { zh: '替主人乱发消息', en: "Send texts on the human's behalf" },
    { zh: '考古花盆里的土', en: 'Run an excavation in the flowerpot' },
    { zh: '对月亮开嗓', en: 'Give the moon a midnight concert' },
    { zh: '测量花瓶的口径', en: 'Measure the vase with your head' },
    { zh: '数自己掉的毛', en: 'Count the fur you shed today' },
    { zh: '跟橘猫比腰围', en: 'Compare waistlines with the orange cat' },
    { zh: '挑衅隔壁的大鹅', en: 'Provoke the goose next door' },
    { zh: '给黑裤子贴毛', en: 'Leave your mark on black trousers' },
    { zh: '卡进沙发缝里', en: 'Wedge yourself into the couch crack' },
    { zh: '打咖啡的主意', en: 'Plot against the coffee cup' },
    { zh: '把快递员当仇人', en: 'Declare war on the delivery guy' },
    { zh: '相信零食只吃一颗', en: "Believe 'just one treat' is a real thing" },
    { zh: '挑战新窗帘的极限', en: 'Stress-test the brand-new curtains' },
    { zh: '高冷拒绝梳毛', en: 'Play too cool for the brush' },
  ];
  var LUCKY = [
    { zh: '冻干鸡肉粒', en: 'Freeze-dried chicken bites' },
    { zh: '小鱼干', en: 'Crispy little fish' },
    { zh: '新纸箱', en: 'A box fresh out of the mail' },
    { zh: '发声小鸡', en: 'The squeaky chicken' },
    { zh: '冻干蛋黄', en: 'Freeze-dried egg yolk' },
    { zh: '羊奶酪', en: 'A goat-milk cheese nibble' },
    { zh: '逗猫棒', en: 'The feather wand' },
    { zh: '磨牙棒', en: 'A trusty chew stick' },
    { zh: '苹果脆片', en: 'Crunchy apple chips' },
    { zh: '旧网球', en: 'The veteran tennis ball' },
    { zh: '猫薄荷球', en: 'A catnip ball' },
    { zh: '鸡肉条', en: 'Chicken jerky strips' },
    { zh: '主人的旧T恤', en: "The human's worn T-shirt" },
    { zh: '漏食球', en: 'The treat-puzzle ball' },
  ];
  var MOODS = [
    { zh: '今日平平，睡饱了运气自然来', en: 'An ordinary day - sleep it off and luck will circle back.' },
    { zh: '小事勿扰，留点力气等开饭', en: 'Nothing urgent today; save your strength for dinner.' },
    { zh: '微风渐起，尾巴尖先知道', en: 'A breeze is turning - the tip of your tail knows first.' },
    { zh: '阳光正在路上，窗台宜早占', en: 'Sunshine is on its way; book the windowsill early.' },
    { zh: '小吉之日，零食柜有松动迹象', en: 'Minor fortune ahead: the treat cabinet shows signs of weakness.' },
    { zh: '顺风顺水，撒娇一次顶三次', en: 'The wind is at your back - one round of charm counts for three.' },
    { zh: '好运扎堆，连纸箱都是新的', en: 'Luck arrives in bulk today - even the boxes are new.' },
    { zh: '大吉大利，今天全世界都让着你', en: 'Grand fortune: the whole world yields the right of way to you.' },
  ];

  /* deterministic per pet+date: same fortune all day, new one tomorrow */
  function seedOf(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function makeRng(s) {
    return function () {
      s ^= s << 13; s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  function fortuneFor(petId, typeCode, dateStr) {
    var rnd = makeRng(seedOf(petId + '|' + dateStr + '|' + (typeCode || '')));
    var yiIdx = Math.floor(rnd() * YI.length);
    var jiIdx = Math.floor(rnd() * JI.length);
    var mood = 62 + Math.floor(rnd() * 39); // 62..100
    var moodIdx = Math.min(MOODS.length - 1, Math.floor((mood - 62) / 39 * MOODS.length));
    return {
      yi: YI[yiIdx],
      ji: JI[jiIdx],
      lucky: LUCKY[Math.floor(rnd() * LUCKY.length)],
      mood: mood,
      moodText: MOODS[moodIdx],
    };
  }

  /* ---- Soul twins ---- */
  var TWINS = {
    INTJ: { figure_zh: '诸葛亮', figure_en: 'Zhuge Liang', line_zh: '同款神机妙算，只不过它的空城计专骗你开罐头。', line_en: 'A grandmaster strategist at heart - except every scheme it hatches ends with you opening a can.' },
    INTP: { figure_zh: '爱因斯坦', figure_en: 'Albert Einstein', line_zh: '盯墙两小时不是发呆，是在验证饭点的相对论。', line_en: "Two hours staring at the wall isn't zoning out - it's fieldwork proving that dinnertime is relative." },
    ENTJ: { figure_zh: '拿破仑', figure_en: 'Napoleon Bonaparte', line_zh: '个头不大野心不小，全家沙发早被划入它的版图。', line_en: 'Short king, imperial ambitions - every sofa in the house has quietly been annexed.' },
    ENTP: { figure_zh: '苏格拉底', figure_en: 'Socrates', line_zh: '规矩是用来质疑的，你的每个“不行”它都要亲自验证。', line_en: "Rules exist to be cross-examined - every 'no' you issue gets personally put on trial." },
    INFJ: { figure_zh: '王阳明', figure_en: 'Wang Yangming', line_zh: '平时高冷话不多，蹲在窗台格物致知，心里全是你。', line_en: 'Looks aloof, thinks deep - meditating on the windowsill, with you at the center of its philosophy.' },
    INFP: { figure_zh: '陶渊明', figure_en: 'Tao Yuanming', line_zh: '不争不抢不社交，一方阳台晒成了它的桃花源。', line_en: 'No fuss, no fights, no small talk - one sunny balcony is all the utopia it needs.' },
    ENFJ: { figure_zh: '孔子', figure_en: 'Confucius', line_zh: '小区猫狗都服它，见谁都要循循善诱地蹭一蹭。', line_en: 'Every cat and dog on the block looks up to it - the neighborhood sage who teaches by gentle head-boop.' },
    ENFP: { figure_zh: '李白', figure_en: 'Li Bai', line_zh: '凌晨三点跑酷开麦，颇有仰天大笑出门去的豪迈。', line_en: 'Zoomies and arias at three a.m. - a free soul that drinks with the moon and laughs at the sky.' },
    ISTJ: { figure_zh: '包拯', figure_en: 'Bao Zheng', line_zh: '铁面无私盯饭点，晚一分钟都要立案审理。', line_en: 'An incorruptible judge of the dinner schedule - one minute late and the case goes straight to court.' },
    ISFJ: { figure_zh: '南丁格尔', figure_en: 'Florence Nightingale', line_zh: '你一咳嗽它就凑来查房，毛茸茸的提灯天使。', line_en: 'One cough from you and it starts bedside rounds - the lady with the lamp, reborn in fur.' },
    ESTJ: { figure_zh: '秦始皇', figure_en: 'Qin Shi Huang', line_zh: '家中动线归它统一规划，书同文车同轨碗不许挪。', line_en: 'Runs the household by imperial decree: one script, one axle width, and nobody moves the food bowl.' },
    ESFJ: { figure_zh: '孟尝君', figure_en: 'Lord Mengchang', line_zh: '客人还没进门它先迎三步，门下食客三千的排场。', line_en: 'Greets guests before they clear the doorway - a grand host who would gladly keep three thousand retainers.' },
    ISTP: { figure_zh: '宫本武藏', figure_en: 'Miyamoto Musashi', line_zh: '独来独往出手极快，逗猫棒在它面前撑不过三招。', line_en: 'A lone swordsman with lightning paws - no feather wand survives three rounds against it.' },
    ISFP: { figure_zh: '莫奈', figure_en: 'Claude Monet', line_zh: '追着一束光从客厅睡到阳台，睡姿自带印象派构图。', line_en: 'Chases the light from living room to balcony, napping in compositions Monet would sign.' },
    ESTP: { figure_zh: '海明威', figure_en: 'Ernest Hemingway', line_zh: '拆家不叫闯祸，那是它硬汉派的冒险文学现场。', line_en: "Wrecking the couch isn't mischief - it's drafting a tough-guy adventure novel, one chapter a day." },
    ESFP: { figure_zh: '莫扎特', figure_en: 'Wolfgang Amadeus Mozart', line_zh: '人越多它越来劲，即兴演出从不缺安可返场。', line_en: 'The bigger the crowd, the bigger the show - a born prodigy who always plays the encore.' },
  };

  /* ---- Letters from your pet (per temperament group, {name} slot) ---- */
  var LETTERS = {
    NT: {
      zh: '你有没有发现，每次你对着电脑皱眉，我都会准时出现在键盘旁边？别误会，我不是来撒娇的，我是来巡逻的。虽然平时懒得理你，但你叹第三口气的时候我就知道：今天的班，加得不太顺。{name}的高冷是真的，可偷偷观察你也是真的——毕竟全世界这么无聊，只有你，值得我反复研究。',
      en: "Ever notice how I materialize beside your keyboard the second you start frowning at the screen? Don't flatter yourself - I'm not here to cuddle, I'm here to supervise. I may act like I couldn't care less, but by your third sigh I've already done the math: rough day at work. The aloofness is real. So is the surveillance. Honestly, the world is a boring place, and you're the only mystery {name} has ever wanted to solve twice.",
    },
    NF: {
      zh: '那天晚上你关了灯，躲在被子里看手机，屏幕的光一闪一闪的。你以为我睡着了，其实我把耳朵竖了一整夜。我说不出安慰的话，只好把下巴搁在你手边——你摸了摸我，我听见你的呼吸慢慢变稳。{name}没什么本事，不会赚钱也不会讲道理，但你所有没说出口的难过，我都替你数着呢，一件都没弄丢。',
      en: "That night you turned off the lights and hid under the covers with your phone, the screen glowing on and off. You thought I was asleep - my ears stayed up the whole night. I don't know how to say comforting things, so I just rested my chin against your hand, and when you reached over to pet me, I felt your breathing slowly settle. I can't earn money and I can't give advice, but every sadness you've never said out loud? {name} has been keeping count. Not one of them has gone missing.",
    },
    SJ: {
      zh: '我的一天是有课表的：七点叫你起床，七点半检查早饭，晚上六点四十，准时坐到门口那块地垫上等你。你的钥匙声和邻居的不一样，我隔着门就能分辨。其实你加班晚归的那些天，我连电梯停在几楼都听得出来——{name}不懂什么叫日子，我只是把「等你回家」这一件事，认认真真做了一遍又一遍。',
      en: "My day runs on a timetable: wake you at seven, inspect breakfast at seven-thirty, and at six-forty sharp every evening, take up my post on the doormat. I can tell your keys from the neighbor's through a closed door. On the nights you work late, I even know which floor the elevator has stopped at. {name} doesn't really understand what a life is - I just took one job, waiting for you to come home, and did it properly, over and over again.",
    },
    SP: {
      zh: '先坦白：上周失踪的那只袜子，确实在我这儿，藏在沙发底下第三个角落。别问为什么，好玩的东西就该收藏。你总说{name}没心没肺，光知道疯——可你发现没有，我每次闯完祸，都会叼着玩具跑到你面前？那不是认错，是我发现，你憋笑的样子比生气好看多了。陪你把无聊的日子玩出花样，就是我的正经事。',
      en: "Confession time: the sock that vanished last week? It's with me - third corner under the sofa. Don't ask why; fun things deserve to be collected. You always say {name} is all play and no brains, but have you noticed that after every crime scene, I come trotting over with a toy? That's not an apology. It's because I worked something out: you trying not to laugh is far better-looking than you being mad. Turning your ordinary days into a game - that's my real full-time job.",
    },
  };

  function letterGroup(code) {
    if (code[1] === 'N') return code[2] === 'T' ? 'NT' : 'NF';
    return code[3] === 'J' ? 'SJ' : 'SP';
  }

  function letterFor(code, name, lang) {
    var g = LETTERS[letterGroup(code)];
    var text = lang === 'zh' ? g.zh : g.en;
    return text.replace(/\{name\}/g, name);
  }

  window.PP = window.PP || {};
  window.PP.fun = {
    rarity: rarity,
    fortuneFor: fortuneFor,
    twin: function (code) { return TWINS[code] || null; },
    letterFor: letterFor,
    letterGroup: letterGroup,
  };
})();
