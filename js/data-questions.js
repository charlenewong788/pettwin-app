/* 宠格 PetPersona — owner observation questionnaire
   axis: EI | SN | TF | JP | NEU
   dir +1 = agreement scores toward the FIRST letter (E/S/T/J) or higher sensitivity (NEU);
   dir -1 = reverse-scored.
   species: 'both' | 'cat' | 'dog' */
(function () {
  const Q = [
    /* ---- E/I 外向亲人 ↔ 独立高冷 ---- */
    { id: 'q_e1', axis: 'EI', dir: +1, species: 'both',
      zh: '我回家时，它会主动跑来迎接我。',
      en: 'When I come home, my pet rushes over to greet me.' },
    { id: 'q_e2', axis: 'EI', dir: +1, species: 'both',
      zh: '它喜欢待在有人的房间里，即使没有人摸它。',
      en: 'My pet likes to stay in the room where people are, even without being petted.' },
    { id: 'q_e3', axis: 'EI', dir: +1, species: 'both',
      zh: '家里来客人时，它会主动出来打招呼、蹭人或求关注。',
      en: 'When guests visit, my pet comes out to greet them or asks for attention.' },
    { id: 'q_e4', axis: 'EI', dir: -1, species: 'both',
      zh: '它更喜欢自己待着，被打扰时会起身走开。',
      en: 'My pet prefers being alone and walks away when disturbed.' },

    /* ---- S/N 务实警觉 ↔ 好奇探索 ---- */
    { id: 'q_s1', axis: 'SN', dir: -1, species: 'both',
      zh: '遇到没见过的新物品，它会主动上前研究。',
      en: 'Facing a brand-new object, my pet goes up to investigate.' },
    { id: 'q_s2', axis: 'SN', dir: -1, species: 'both',
      zh: '搬动家具或更换环境后，它很快就能适应。',
      en: 'After furniture moves or environment changes, my pet adapts quickly.' },
    { id: 'q_s3', axis: 'SN', dir: -1, species: 'cat',
      zh: '它经常研究怎么打开柜门、抽屉，或想办法够到高处。',
      en: 'My cat often figures out how to open cabinets or reach high places.' },
    { id: 'q_s3d', axis: 'SN', dir: -1, species: 'dog',
      zh: '散步时它总想探索新路线，而不是走熟悉的老路。',
      en: 'On walks, my dog wants to explore new routes rather than the usual path.' },
    { id: 'q_s4', axis: 'SN', dir: +1, species: 'both',
      zh: '对陌生的声音或气味，它会立刻警觉起来。',
      en: 'My pet instantly goes on alert at unfamiliar sounds or smells.' },

    /* ---- T/F 冷静自主 ↔ 敏感共情 ---- */
    { id: 'q_t1', axis: 'TF', dir: -1, species: 'both',
      zh: '当我情绪低落时，它似乎能察觉，并主动靠近陪我。',
      en: 'When I feel down, my pet seems to notice and comes to stay near me.' },
    { id: 'q_t2', axis: 'TF', dir: -1, species: 'both',
      zh: '它会观察我的表情和动作，来决定自己接下来做什么。',
      en: 'My pet reads my expressions and gestures before deciding what to do.' },
    { id: 'q_t3', axis: 'TF', dir: -1, species: 'both',
      zh: '遇到自己解决不了的问题（玩具卡住、够不到零食），它会来找我求助。',
      en: 'When stuck (toy trapped, treat out of reach), my pet comes to me for help.' },
    { id: 'q_t4', axis: 'TF', dir: +1, species: 'both',
      zh: '它想做什么就去做，很少在意我的反应。',
      en: 'My pet does whatever it wants, rarely checking my reaction.' },

    /* ---- J/P 规律稳定 ↔ 随性贪玩 ---- */
    { id: 'q_j1', axis: 'JP', dir: +1, species: 'both',
      zh: '它每天吃饭、睡觉、活跃的时间点都很固定。',
      en: 'My pet eats, sleeps and gets active at fixed times every day.' },
    { id: 'q_j2', axis: 'JP', dir: -1, species: 'both',
      zh: '它随时随地都能立刻进入疯玩模式。',
      en: 'My pet can switch into full play mode anytime, anywhere.' },
    { id: 'q_j3', axis: 'JP', dir: -1, species: 'both',
      zh: '想要的东西没有马上得到时，它会表现得非常急躁。',
      en: 'When my pet wants something and doesn’t get it at once, it gets very impatient.' },
    { id: 'q_j4', axis: 'JP', dir: +1, species: 'both',
      zh: '它有雷打不动的小习惯，比如固定的睡觉位置或巡逻路线。',
      en: 'My pet keeps unshakeable little rituals - a fixed sleeping spot or patrol route.' },

    /* ---- NEU 敏感度（隐藏轴） ---- */
    { id: 'q_n1', axis: 'NEU', dir: +1, species: 'both',
      zh: '突然的巨响会让它躲藏很久才恢复。',
      en: 'A sudden loud noise sends my pet into hiding for a long while.' },
    { id: 'q_n2', axis: 'NEU', dir: +1, species: 'cat',
      zh: '独自在家的日子，它会出现过度舔毛、乱尿等异常表现。',
      en: 'On days alone, my cat over-grooms or urinates outside the litter box.' },
    { id: 'q_n2d', axis: 'NEU', dir: +1, species: 'dog',
      zh: '独自在家时，它会嚎叫、拆家或不停踱步。',
      en: 'Left alone, my dog howls, destroys things or paces restlessly.' },
    { id: 'q_n3', axis: 'NEU', dir: -1, species: 'both',
      zh: '去陌生环境（宠物医院、外出）它也能保持淡定。',
      en: 'Even in strange places (the vet, outings), my pet stays calm.' },
  ];

  window.PP = window.PP || {};
  window.PP.QUESTIONS = Q;
  window.PP.questionsFor = function (species) {
    return Q.filter((q) => q.species === 'both' || q.species === species);
  };
})();
