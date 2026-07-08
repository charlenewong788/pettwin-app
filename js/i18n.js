/* 宠格 PetPersona — i18n dictionary (zh / en) */
(function () {
  const D = {
    'app.name': { zh: '宠格', en: 'PetPersona' },
    'app.slogan': { zh: '读懂你的毛孩子', en: 'Understand your furry friend' },

    'nav.home': { zh: '首页', en: 'Home' },
    'nav.assess': { zh: '测评', en: 'Test' },
    'nav.records': { zh: '记录', en: 'Records' },
    'nav.me': { zh: '我的', en: 'Me' },

    'common.cancel': { zh: '取消', en: 'Cancel' },
    'common.save': { zh: '保存', en: 'Save' },
    'common.delete': { zh: '删除', en: 'Delete' },
    'common.back': { zh: '返回', en: 'Back' },
    'common.next': { zh: '下一步', en: 'Next' },
    'common.done': { zh: '完成', en: 'Done' },
    'common.confirm': { zh: '确认', en: 'Confirm' },
    'common.edit': { zh: '编辑', en: 'Edit' },
    'common.close': { zh: '关闭', en: 'Close' },
    'common.cat': { zh: '猫', en: 'Cat' },
    'common.dog': { zh: '狗', en: 'Dog' },
    'common.male': { zh: '男孩', en: 'Boy' },
    'common.female': { zh: '女孩', en: 'Girl' },
    'common.unknown': { zh: '未知', en: 'Unknown' },
    'common.neutered': { zh: '已绝育', en: 'Neutered' },
    'common.notNeutered': { zh: '未绝育', en: 'Not neutered' },
    'common.minutes': { zh: '分钟', en: 'min' },

    /* home */
    'home.heroTitle': { zh: '用一杯零食，\n读懂你的毛孩子', en: 'One treat cup away from\nknowing your pet' },
    'home.heroSub': { zh: '主人观察问卷 + 在家小实验，生成一张属于它的人格卡', en: 'Owner quiz + at-home mini experiments, one shareable personality card' },
    'home.heroCta': { zh: '开始测评', en: 'Start the test' },
    'home.myPets': { zh: '我的毛孩子', en: 'My pets' },
    'home.addPet': { zh: '添加毛孩子', en: 'Add a pet' },
    'home.untested': { zh: '尚未测评', en: 'Not tested yet' },
    'home.viewResult': { zh: '查看人格', en: 'View persona' },
    'home.retest': { zh: '复测', en: 'Retest' },
    'home.whatIs': { zh: '宠格是什么', en: 'How it works' },
    'home.whatIsBody': {
      zh: '宠格把 Feline Five、C-BARQ 等动物行为学量表和 Dognition 式在家认知游戏，包装成一次轻松的测评：你答几道观察题，再陪它玩几个小实验，就能得到一张 MBTI 风格的宠物人格卡。',
      en: 'PetPersona wraps animal-behavior science (Feline Five, C-BARQ) and Dognition-style at-home games into one playful test: answer a short quiz, play a few mini experiments, and get an MBTI-style persona card for your pet.',
    },

    /* onboarding */
    'onboard.title': { zh: '认识一下你的毛孩子', en: 'Tell us about your pet' },
    'onboard.name': { zh: '名字', en: 'Name' },
    'onboard.namePh': { zh: '比如：olie', en: 'e.g. olie' },
    'onboard.species': { zh: '物种', en: 'Species' },
    'onboard.breed': { zh: '品种（选填）', en: 'Breed (optional)' },
    'onboard.breedPh': { zh: '比如：英国短毛猫', en: 'e.g. British Shorthair' },
    'onboard.birthday': { zh: '生日（选填）', en: 'Birthday (optional)' },
    'onboard.gender': { zh: '性别', en: 'Sex' },
    'onboard.neutered': { zh: '绝育情况', en: 'Neutered?' },
    'onboard.photo': { zh: '头像（选填）', en: 'Photo (optional)' },
    'onboard.pickPhoto': { zh: '选择照片', en: 'Choose photo' },
    'onboard.create': { zh: '建好档案，开始测评', en: 'Create profile & start' },
    'onboard.needName': { zh: '先给它起个名字吧', en: 'Please enter a name first' },

    /* assess hub */
    'assess.title': { zh: '性格测评', en: 'Personality test' },
    'assess.pickPet': { zh: '选择要测评的毛孩子', en: 'Choose a pet to test' },
    'assess.quiz': { zh: '观察问卷', en: 'Owner quiz' },
    'assess.quizDesc': { zh: '{n} 道题 · 约 3 分钟 · 凭日常观察作答', en: '{n} questions · ~3 min · based on daily observation' },
    'assess.quizDone': { zh: '问卷已完成', en: 'Quiz completed' },
    'assess.exps': { zh: '在家小实验', en: 'Home experiments' },
    'assess.expsDesc': { zh: '选做 · 做得越多，结果越准（已完成 {n} 个）', en: 'Optional · more experiments, higher confidence ({n} done)' },
    'assess.genResult': { zh: '生成人格卡', en: 'Generate persona card' },
    'assess.needQuiz': { zh: '先完成观察问卷，实验可以之后补做', en: 'Finish the quiz first — experiments can be added later' },
    'assess.continueQuiz': { zh: '继续答题', en: 'Resume quiz' },
    'assess.startQuiz': { zh: '开始答题', en: 'Start quiz' },
    'assess.redoQuiz': { zh: '重新作答', en: 'Redo quiz' },
    'assess.confidence': { zh: '当前置信度', en: 'Confidence' },

    /* likert */
    'likert.1': { zh: '完全不像它', en: 'Not at all' },
    'likert.2': { zh: '不太像', en: 'Not really' },
    'likert.3': { zh: '说不好', en: 'Hard to say' },
    'likert.4': { zh: '有点像', en: 'Somewhat' },
    'likert.5': { zh: '就是它本人了', en: 'Exactly my pet' },

    /* experiments */
    'exp.props': { zh: '道具', en: 'You need' },
    'exp.observe': { zh: '观察重点', en: 'What to watch' },
    'exp.record': { zh: '它的反应是？', en: 'How did they react?' },
    'exp.redo': { zh: '重新记录', en: 'Record again' },
    'exp.doneTag': { zh: '已完成', en: 'Done' },
    'exp.recommended': { zh: '推荐', en: 'Recommended' },
    'exp.safety': { zh: '实验以它自愿参与为前提，任何时候它想走开都没关系。', en: 'All experiments are voluntary for your pet — let them walk away anytime.' },

    /* result */
    'result.title': { zh: '人格报告', en: 'Persona report' },
    'result.axes': { zh: '四维倾向', en: 'Four dimensions' },
    'result.summary': { zh: '性格综述', en: 'Overview' },
    'result.strengths': { zh: '闪光点', en: 'Strengths' },
    'result.quirks': { zh: '小怪癖', en: 'Quirks' },
    'result.voice': { zh: '它想对你说', en: 'A word from your pet' },
    'result.guide': { zh: '相处指南', en: 'How to live together' },
    'result.pitfalls': { zh: '易踩雷点', en: 'Watch out' },
    'result.speciesNote': { zh: '在它身上的样子', en: 'In your pet' },
    'result.sensitivity': { zh: '敏感度', en: 'Sensitivity' },
    'result.sens.low': { zh: '心大淡定型：环境变化基本影响不了它。', en: 'Unbothered: changes in the environment rarely faze them.' },
    'result.sens.mid': { zh: '正常敏感：新事物需要一点适应时间，属于健康范围。', en: 'Typically sensitive: new things need a little adjustment time - totally healthy.' },
    'result.sens.high': { zh: '高敏感型：请给它更多安全感，环境变化要循序渐进；持续应激请咨询兽医。', en: 'Highly sensitive: provide extra security and introduce changes gradually; consult a vet if stress persists.' },
    'result.saveCard': { zh: '保存人格卡', en: 'Save card' },
    'result.shareHint': { zh: '保存图片后即可分享给朋友', en: 'Save the image and share it anywhere' },
    'result.moreExp': { zh: '补做实验提升准确度', en: 'Add experiments for accuracy' },
    'result.pairing': { zh: '主宠契合度', en: 'Owner-pet match' },
    'result.pairingCta': { zh: '设置我的 MBTI，解锁契合度报告', en: 'Set your MBTI to unlock the match report' },
    'result.pairingScore': { zh: '契合度', en: 'Match' },
    'result.borderline': { zh: '{axis} 维度接近中线，两种倾向它都有一点', en: '{axis} is close to the midline - your pet shows a bit of both' },
    'result.starsHint': { zh: '置信度 {n}/5 星 · 多做实验可提升', en: 'Confidence {n}/5 - add experiments to raise it' },
    'result.methodology': { zh: '测评方法论与边界', en: 'Methodology & limits' },

    /* pairing axis text: same / diff */
    'pair.EI.same': { zh: '你们的能量频道一致：要么一起热闹，要么一起宅。相处不费力。', en: 'Same energy channel: party together or hole up together. Easy company.' },
    'pair.EI.diff': { zh: '一个爱热闹一个爱清静，互补型组合——它教你独处，你带它看世界。', en: 'One loves the buzz, one loves the quiet - a complementary pair.' },
    'pair.SN.same': { zh: '对新鲜事物的态度相似，探索或谨慎都合拍，很少互相吓到。', en: 'Similar takes on novelty - you explore or stay cautious in sync.' },
    'pair.SN.diff': { zh: '一个想冲一个想稳，记得尊重它自己的节奏，别硬拉它探险。', en: 'One charges ahead, one holds back - respect your pet’s own pace.' },
    'pair.TF.same': { zh: '情感表达方式相近：黏就一起黏，酷就一起酷，误会不多。', en: 'Matching emotional styles: clingy together or cool together, few mix-ups.' },
    'pair.TF.diff': { zh: '一个感性一个理性，注意读懂彼此的信号，别把独立当冷漠。', en: 'Heart meets head - learn each other’s signals, and don’t read independence as coldness.' },
    'pair.JP.same': { zh: '生活节奏同步，作息互不打扰，规律或随性都过得舒服。', en: 'Synced routines - regular or spontaneous, you fit each other’s rhythm.' },
    'pair.JP.diff': { zh: '一个按表生活一个随心所欲，固定喂食时间是你们最好的和平条约。', en: 'Scheduler meets free spirit - a fixed feeding time is your best peace treaty.' },

    /* records */
    'records.title': { zh: '记录', en: 'Records' },
    'records.history': { zh: '人格成长', en: 'Persona history' },
    'records.reminders': { zh: '健康提醒', en: 'Health reminders' },
    'records.addReminder': { zh: '添加提醒', en: 'Add reminder' },
    'records.emptyHistory': { zh: '还没有测评记录，先去给毛孩子做一次测评吧', en: 'No assessments yet - run your pet’s first test' },
    'records.emptyReminders': { zh: '还没有健康提醒。疫苗、驱虫日期记在这里，到期前会标红。', en: 'No reminders yet. Track vaccine and deworming dates here.' },
    'records.due': { zh: '到期：{date}', en: 'Due: {date}' },
    'records.overdue': { zh: '已过期', en: 'Overdue' },
    'records.ics': { zh: '导出到日历 (.ics)', en: 'Export to calendar (.ics)' },
    'records.type.vaccine': { zh: '疫苗', en: 'Vaccine' },
    'records.type.deworm.in': { zh: '体内驱虫', en: 'Deworming (internal)' },
    'records.type.deworm.out': { zh: '体外驱虫', en: 'Deworming (external)' },
    'records.type.checkup': { zh: '体检', en: 'Check-up' },
    'records.type.custom': { zh: '自定义', en: 'Custom' },
    'records.customPh': { zh: '提醒内容', en: 'What to remember' },
    'records.compare': { zh: '与上次相比', en: 'vs last test' },

    /* me */
    'me.title': { zh: '我的', en: 'Me' },
    'me.ownerMbti': { zh: '我的 MBTI', en: 'My MBTI' },
    'me.ownerMbtiDesc': { zh: '用于生成主宠契合度报告', en: 'Used for the owner-pet match report' },
    'me.notSet': { zh: '未设置', en: 'Not set' },
    'me.quickQuiz': { zh: '不确定？做个 8 题快测', en: 'Not sure? Take the 8-question quick quiz' },
    'me.pickDirect': { zh: '直接选择', en: 'Pick directly' },
    'me.language': { zh: '语言 / Language', en: 'Language / 语言' },
    'me.methodology': { zh: '方法论与免责声明', en: 'Methodology & disclaimer' },
    'me.export': { zh: '导出数据 (JSON)', en: 'Export data (JSON)' },
    'me.import': { zh: '导入数据', en: 'Import data' },
    'me.importOk': { zh: '导入成功', en: 'Import complete' },
    'me.importBad': { zh: '文件格式不对，导入失败', en: 'Invalid file - import failed' },
    'me.about': { zh: '关于宠格', en: 'About PetPersona' },
    'me.aboutBody': {
      zh: '宠格 PetPersona 是一个开源的宠物性格测评应用。所有数据只保存在你自己的设备上（浏览器本地存储），不会上传到任何服务器。',
      en: 'PetPersona is an open-source pet personality app. All data stays on your device (browser local storage) and is never uploaded anywhere.',
    },
    'me.deletePet': { zh: '删除这只宠物的所有数据', en: 'Delete all data for this pet' },
    'me.deleteConfirm': { zh: '确定删除 {name} 的档案和全部测评记录吗？此操作不可恢复。', en: 'Delete {name}’s profile and all assessments? This cannot be undone.' },
    'me.managePets': { zh: '宠物档案管理', en: 'Manage pet profiles' },

    /* methodology modal */
    'legal.title': { zh: '方法论与边界', en: 'Methodology & limits' },
    'legal.science.h': { zh: '科学依据', en: 'The science' },
    'legal.science.p': {
      zh: '四个维度的设计参考了猫的五因素人格模型 Feline Five、犬类行为评估问卷 C-BARQ / 猫版 Fe-BARQ，以及杜克大学 Dognition 项目的在家认知游戏（如零食纸杯测试、指向跟随测试）。“MBTI 风格”只是更好记的外壳，内核是这些可观察的行为学维度。',
      en: 'The four dimensions draw on the Feline Five personality model, the C-BARQ / Fe-BARQ behavior questionnaires, and at-home cognition games from Duke’s Dognition project (treat-cup, point-following). The MBTI-style letters are a memorable wrapper; the core is observable behavior.',
    },
    'legal.mbti.h': { zh: '关于 “MBTI”', en: 'About "MBTI"' },
    'legal.mbti.p': {
      zh: '本测评为“MBTI 风格”的娱乐与观察工具，与 Myers-Briggs Type Indicator® 官方无关。结果反映的是主人视角下的行为倾向，不是绝对定论。',
      en: 'This is an MBTI-style observation tool for fun, unaffiliated with the official Myers-Briggs Type Indicator®. Results reflect behavior tendencies as seen by you, not absolute truths.',
    },
    'legal.medical.h': { zh: '不是医疗建议', en: 'Not medical advice' },
    'legal.medical.p': {
      zh: '宠格不提供任何医疗诊断。若它的饮食、饮水、排泄、精神状态出现持续异常，请及时就医，而不是依赖本应用。',
      en: 'PetPersona provides no medical diagnosis. If eating, drinking, litter habits or energy change persistently, see a veterinarian - do not rely on this app.',
    },
    'legal.privacy.h': { zh: '隐私', en: 'Privacy' },
    'legal.privacy.p': {
      zh: '所有档案、照片与测评数据仅存储在你的设备本地，可随时导出或删除。',
      en: 'All profiles, photos and results are stored locally on your device and can be exported or deleted anytime.',
    },

    /* owner quiz questions (8) */
    'oq.1': { zh: '聚会结束后，你通常感觉充电了还是被掏空了？', en: 'After a party, do you feel charged up or drained?' },
    'oq.1a': { zh: '充电了，还想继续', en: 'Charged - keep it going' },
    'oq.1b': { zh: '被掏空，需要独处回血', en: 'Drained - need alone time' },
    'oq.2': { zh: '认识新朋友时，你更常是——', en: 'Meeting new people, you are usually the one who-' },
    'oq.2a': { zh: '主动开启话题的那个', en: 'starts the conversation' },
    'oq.2b': { zh: '等对方先开口的那个', en: 'waits for them to speak first' },
    'oq.3': { zh: '做决定时你更相信——', en: 'When deciding, you trust-' },
    'oq.3a': { zh: '实际经验和眼前事实', en: 'experience and concrete facts' },
    'oq.3b': { zh: '直觉和各种可能性', en: 'intuition and possibilities' },
    'oq.4': { zh: '你更喜欢的工作方式是——', en: 'You prefer work that is-' },
    'oq.4a': { zh: '按成熟方法一步步来', en: 'step-by-step with proven methods' },
    'oq.4b': { zh: '尝试没人试过的新路子', en: 'trying paths nobody has tried' },
    'oq.5': { zh: '朋友向你倾诉烦恼时，你的第一反应是——', en: 'A friend vents to you. Your first instinct-' },
    'oq.5a': { zh: '帮 TA 分析问题、给方案', en: 'analyze and offer solutions' },
    'oq.5b': { zh: '先共情安慰，让 TA 好受点', en: 'comfort first, make them feel heard' },
    'oq.6': { zh: '别人评价你时，你更希望听到——', en: 'You’d rather be praised as-' },
    'oq.6a': { zh: '“你真靠谱、有逻辑”', en: '"reliable and logical"' },
    'oq.6b': { zh: '“你真温暖、懂人心”', en: '"warm and understanding"' },
    'oq.7': { zh: '旅行前，你会——', en: 'Before a trip, you-' },
    'oq.7a': { zh: '做好攻略，订好每一天', en: 'plan every day in advance' },
    'oq.7b': { zh: '订张票，剩下的到了再说', en: 'book a ticket and wing the rest' },
    'oq.8': { zh: '你的桌面/房间通常是——', en: 'Your desk or room is usually-' },
    'oq.8a': { zh: '整齐有序，各归其位', en: 'tidy - everything in its place' },
    'oq.8b': { zh: '乱中有序，我自己能找到就行', en: 'organized chaos - I know where things are' },

    /* fortune */
    'fortune.title': { zh: '{name}的今日运势', en: "{name}'s fortune today" },
    'fortune.yi': { zh: '宜', en: 'Do' },
    'fortune.ji': { zh: '忌', en: 'Avoid' },
    'fortune.lucky': { zh: '幸运零食', en: 'Lucky treat' },
    'fortune.mood': { zh: '心情指数', en: 'Mood' },
    'fortune.locked': { zh: '完成测评，解锁它的专属每日运势', en: 'Finish the test to unlock daily fortunes' },
    'fortune.share': { zh: '复制运势', en: 'Copy' },
    'fortune.copyTpl': {
      zh: '【宠格】{name}（{code}）今日运势：宜{yi}，忌{ji}。幸运零食：{lucky}。心情指数 {mood}：{moodText}',
      en: '[PetPersona] {name} ({code}) today: Do {yi}. Avoid {ji}. Lucky treat: {lucky}. Mood {mood}: {moodText}',
    },
    'toast.copied': { zh: '已复制，快去分享吧', en: 'Copied - go share it' },

    /* reveal */
    'reveal.hint': { zh: '点击卡片，揭晓它的人格', en: 'Tap the card to reveal' },
    'reveal.open': { zh: '查看完整报告', en: 'See full report' },

    /* rarity */
    'rarity.label': { zh: '图鉴收录率', en: 'Collection rate' },
    'rarity.per': { zh: '每 100 只{sp}中约有 {n} 只', en: 'about {n} in every 100 {sp}s' },
    'rarity.note': { zh: '收录率来自宠格类型分布模型，仅供收藏玩乐', en: "Rates come from PetPersona's own distribution model - collection fun only" },
    'rarity.c': { zh: '常见', en: 'Common' },
    'rarity.r': { zh: '少见', en: 'Uncommon' },
    'rarity.sr': { zh: '稀有', en: 'Rare' },
    'rarity.ssr': { zh: '传说', en: 'Legendary' },

    /* hidden trait */
    'hidden.badge': { zh: '隐藏体质 · 薛定谔的毛孩子', en: "Hidden trait: Schrödinger's Fluffball" },
    'hidden.desc': {
      zh: '四个维度全部徘徊在中线附近——它可能同时拥有所有人格，也可能一个都不承认。这是触发率极低的隐藏体质，过段时间复测，也许会看到它的另一面。',
      en: 'All four dimensions hover at the midline - your pet may hold every personality at once, or deny all of them. This hidden trait is extremely rare; retest later and you may meet its other side.',
    },

    /* letter */
    'letter.btn': { zh: '拆开它写给你的信', en: 'Open the letter it wrote you' },
    'letter.title': { zh: '来自{name}的一封信', en: 'A letter from {name}' },
    'letter.sign': { zh: '—— 你的{name}', en: '- Your {name}' },
    'letter.replay': { zh: '再读一遍', en: 'Read again' },

    /* twin */
    'twin.title': { zh: '世另我', en: 'Soul twin' },
    'twin.same': { zh: '和{figure}是同款人格', en: 'Same type as {figure}' },

    /* misc */
    'toast.saved': { zh: '已保存', en: 'Saved' },
    'toast.cardSaved': { zh: '人格卡已保存到相册/下载', en: 'Card image saved' },
    'toast.reminderAdded': { zh: '提醒已添加', en: 'Reminder added' },
    'toast.needPet': { zh: '先添加一只毛孩子', en: 'Add a pet first' },
    'axisFull.E': { zh: '外向亲人', en: 'Social' },
    'axisFull.I': { zh: '独立高冷', en: 'Independent' },
    'axisFull.S': { zh: '务实警觉', en: 'Grounded' },
    'axisFull.N': { zh: '好奇探索', en: 'Curious' },
    'axisFull.T': { zh: '冷静自主', en: 'Self-reliant' },
    'axisFull.F': { zh: '敏感共情', en: 'Empathic' },
    'axisFull.J': { zh: '规律稳定', en: 'Routine-loving' },
    'axisFull.P': { zh: '随性贪玩', en: 'Playful' },
  };

  let lang = 'zh';

  function t(key, params) {
    const entry = D[key];
    let s = entry ? (entry[lang] || entry.zh) : key;
    if (params) {
      Object.keys(params).forEach((k) => {
        s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
      });
    }
    return s;
  }

  function pick(obj, zhKey, enKey) {
    if (!obj) return '';
    if (zhKey && enKey) return lang === 'zh' ? obj[zhKey] : obj[enKey];
    return lang === 'zh' ? obj.zh : obj.en;
  }

  window.PP = window.PP || {};
  window.PP.i18n = {
    t,
    pick,
    get lang() { return lang; },
    setLang(l) { lang = l === 'en' ? 'en' : 'zh'; document.documentElement.lang = lang === 'zh' ? 'zh' : 'en'; },
  };
})();
