/* PetPersona — at-home experiments (Dognition-inspired)
   Each option maps to an axis and a signed weight (-2..+2 toward first letter / higher NEU).
   icon: key into PP.icons */
(function () {
  const E = [
    {
      id: 'treatcup', icon: 'cup', minutes: 3, species: 'both', recommended: true,
      zh: { name: '零食纸杯测试', props: '2 个不透明纸杯 + 一块零食',
        steps: [
          '当着它的面，把零食扣在其中一个杯子下。',
          '用手挡住它视线 5 秒，同时不要移动杯子。',
          '放开，看它直接走向哪个杯子。',
        ],
        observe: '它是记住了正确的杯子，还是随便乱找、或直接放弃？' },
      en: { name: 'Treat-cup test', props: '2 opaque cups + one treat',
        steps: [
          'With your pet watching, hide a treat under one cup.',
          'Block its view for 5 seconds without moving the cups.',
          'Release it and see which cup it goes to.',
        ],
        observe: 'Did it remember the right cup, search randomly, or give up?' },
      options: [
        { zh: '直奔正确的杯子', en: 'Went straight to the right cup', w: { SN: -2, TF: +1 } },
        { zh: '两个杯子都扒拉一下', en: 'Pawed at both cups', w: { SN: -1, JP: -1 } },
        { zh: '看我，等我给提示', en: 'Looked at me for a hint', w: { TF: -2, EI: +1 } },
        { zh: '没兴趣，走开了', en: 'Lost interest and walked off', w: { EI: -1, JP: +1 } },
      ],
    },
    {
      id: 'point', icon: 'hand', minutes: 3, species: 'both', recommended: true,
      zh: { name: '指向跟随测试', props: '两块零食、两个碗或纸片',
        steps: [
          '两侧各放一个碗，只在一侧偷偷放零食（别让它看到）。',
          '伸手明确指向有零食的一侧。',
          '看它是否顺着你的手指方向走。',
        ],
        observe: '它能读懂你的手势，还是完全靠自己嗅探？' },
      en: { name: 'Point-following test', props: 'Two treats, two bowls or cards',
        steps: [
          'Place a bowl on each side; secretly bait only one.',
          'Clearly point toward the baited side.',
          'See whether it follows the direction of your finger.',
        ],
        observe: 'Does it read your gesture, or rely purely on its own nose?' },
      options: [
        { zh: '立刻跟着手指走对方向', en: 'Followed my finger right away', w: { TF: -2 } },
        { zh: '犹豫了一下才跟随', en: 'Hesitated, then followed', w: { TF: -1, SN: +1 } },
        { zh: '不看手指，自己嗅探', en: 'Ignored the finger and sniffed around', w: { TF: +2 } },
        { zh: '完全没反应', en: 'No response at all', w: { EI: -1 } },
      ],
    },
    {
      id: 'name', icon: 'wave', minutes: 2, species: 'both', recommended: true,
      zh: { name: '呼名反应测试', props: '不需要道具',
        steps: [
          '在它放松、没有干扰时，用平常的音量叫它的名字。',
          '不要重复太多次，观察第一次的反应。',
        ],
        observe: '它转头、走来、还是完全无视？' },
      en: { name: 'Name-response test', props: 'No props needed',
        steps: [
          'When relaxed and undistracted, call its name at normal volume.',
          'Don’t over-repeat; watch the first reaction.',
        ],
        observe: 'Does it turn, come over, or fully ignore you?' },
      options: [
        { zh: '马上跑过来', en: 'Came right over', w: { EI: +2, TF: -1 } },
        { zh: '转头看我一眼', en: 'Turned and looked at me', w: { EI: +1 } },
        { zh: '耳朵动了但没理我', en: 'Ear twitched but ignored me', w: { EI: -1 } },
        { zh: '完全没反应', en: 'No reaction whatsoever', w: { EI: -2, JP: +1 } },
      ],
    },
    {
      id: 'novelobject', icon: 'box', minutes: 3, species: 'both', recommended: true,
      zh: { name: '陌生物品测试', props: '一件它没见过的物品（雨伞、纸箱等）',
        steps: [
          '把新物品放在房间中央。',
          '不引导，静静观察它接下来 1 分钟的反应。',
        ],
        observe: '它是好奇靠近，谨慎观望，还是紧张躲开？' },
      en: { name: 'Novel-object test', props: 'An item it has never seen (umbrella, box)',
        steps: [
          'Place the new object in the middle of the room.',
          'Don’t guide it; quietly watch for one minute.',
        ],
        observe: 'Curious approach, cautious watching, or nervous retreat?' },
      options: [
        { zh: '马上凑上去研究', en: 'Went to investigate immediately', w: { SN: -2, NEU: -1 } },
        { zh: '绕着圈慢慢靠近', en: 'Circled and approached slowly', w: { SN: +1 } },
        { zh: '远远观望不敢动', en: 'Watched from afar, wouldn’t move', w: { SN: +1, NEU: +1 } },
        { zh: '扭头就躲起来', en: 'Turned and hid', w: { NEU: +2, EI: -1 } },
      ],
    },
    {
      id: 'toy', icon: 'ball', minutes: 4, species: 'both', recommended: false,
      zh: { name: '新玩具偏好测试', props: '2–3 种不同类型的玩具',
        steps: [
          '同时把几种玩具放在它面前。',
          '看它先选哪个、玩多久、会不会都试一遍。',
        ],
        observe: '它是热情投入，挑挑拣拣，还是兴致缺缺？' },
      en: { name: 'New-toy preference test', props: '2–3 different types of toys',
        steps: [
          'Put several toys in front of it at once.',
          'Watch which it picks first, how long it plays, whether it tries them all.',
        ],
        observe: 'Enthusiastic, picky, or indifferent?' },
      options: [
        { zh: '立刻扑上去疯玩', en: 'Pounced and went wild', w: { JP: -2, EI: +1 } },
        { zh: '每个都玩一会儿', en: 'Tried each one for a bit', w: { SN: -1, JP: -1 } },
        { zh: '只挑固定那一个', en: 'Only wanted its usual favourite', w: { JP: +2 } },
        { zh: '闻了闻就不玩了', en: 'Sniffed and lost interest', w: { EI: -1, JP: +1 } },
      ],
    },
    {
      id: 'puzzle', icon: 'towel', minutes: 4, species: 'both', recommended: false,
      zh: { name: '零食获取难题', props: '零食 + 一条毛巾或小盒子',
        steps: [
          '当它面把零食藏进毛巾褶皱里或轻盖的盒子里。',
          '观察它接下来怎么做。',
        ],
        observe: '它是自己想办法解决，还是马上向你求助或放弃？' },
      en: { name: 'Treat-retrieval puzzle', props: 'A treat + a towel or small box',
        steps: [
          'Hide a treat in a towel fold or a loosely covered box in front of it.',
          'Observe what it does next.',
        ],
        observe: 'Does it problem-solve alone, ask you for help, or give up?' },
      options: [
        { zh: '自己扒开拿到了', en: 'Dug it out on its own', w: { TF: +2, SN: -1 } },
        { zh: '试了几下就来找我', en: 'Tried a bit, then came to me', w: { TF: -2 } },
        { zh: '看我一眼再继续试', en: 'Glanced at me, kept trying', w: { TF: -1, SN: -1 } },
        { zh: '直接放弃了', en: 'Just gave up', w: { JP: +1, NEU: +1 } },
      ],
    },
    {
      id: 'touch', icon: 'heart', minutes: 2, species: 'both', recommended: false,
      zh: { name: '抚摸耐受测试', props: '不需要道具',
        steps: [
          '在它平静时，依次轻抚头、背、肚子。',
          '记录它享受、容忍、还是躲开的部位。',
        ],
        observe: '它对身体接触的接受度和信任度如何？' },
      en: { name: 'Petting-tolerance test', props: 'No props needed',
        steps: [
          'When calm, gently pet its head, back, then belly in turn.',
          'Note where it enjoys, tolerates, or pulls away.',
        ],
        observe: 'How much body contact and trust does it accept?' },
      options: [
        { zh: '哪里都能摸，还蹭手', en: 'Loved it everywhere, leaned in', w: { EI: +2, TF: -1 } },
        { zh: '头背可以，肚子不行', en: 'Head/back yes, belly no', w: { EI: +1 } },
        { zh: '勉强容忍一会儿', en: 'Tolerated it briefly', w: { EI: -1 } },
        { zh: '很快就躲开了', en: 'Pulled away quickly', w: { EI: -1, NEU: +1 } },
      ],
    },
    {
      id: 'sound', icon: 'sound', minutes: 2, species: 'both', recommended: false,
      zh: { name: '声音反应测试', props: '手机（播放吸尘器、门铃、鸟叫等声音）',
        steps: [
          '以中等音量播放一段它平时较少听到的声音。',
          '观察它的第一反应，之后关掉。',
        ],
        observe: '它是好奇探究、无动于衷，还是被吓到？' },
      en: { name: 'Sound-reaction test', props: 'Your phone (vacuum, doorbell, birdsong)',
        steps: [
          'Play a sound it rarely hears at medium volume.',
          'Watch its first reaction, then stop.',
        ],
        observe: 'Curious, unbothered, or startled?' },
      options: [
        { zh: '好奇地找声音来源', en: 'Curiously searched for the source', w: { SN: -1, NEU: -1 } },
        { zh: '抬头看看就没事了', en: 'Glanced up, then relaxed', w: { NEU: -1 } },
        { zh: '警觉僵住', en: 'Froze on alert', w: { NEU: +1 } },
        { zh: '受惊逃走', en: 'Startled and fled', w: { NEU: +2 } },
      ],
    },
    {
      id: 'patience', icon: 'clock', minutes: 3, species: 'dog', recommended: false,
      zh: { name: '延迟满足测试', props: '一块零食',
        steps: [
          '把零食放在它面前，用手势或口令让它“等一下”。',
          '记录它能忍住不吃多久。',
        ],
        observe: '它的自控力和冲动性如何？' },
      en: { name: 'Delayed-gratification test', props: 'One treat',
        steps: [
          'Place a treat in front of it and signal "wait".',
          'Time how long it can resist.',
        ],
        observe: 'How strong is its self-control versus impulse?' },
      options: [
        { zh: '能稳稳等我发令', en: 'Waited calmly for my cue', w: { JP: +2 } },
        { zh: '忍了几秒才动', en: 'Held out a few seconds', w: { JP: +1 } },
        { zh: '几乎立刻抢走', en: 'Grabbed it almost instantly', w: { JP: -2 } },
        { zh: '急得团团转', en: 'Fussed and spun around', w: { JP: -1, NEU: +1 } },
      ],
    },
    {
      id: 'visitor', icon: 'door', minutes: 5, species: 'dog', recommended: false,
      zh: { name: '访客反应测试', props: '一位它不太熟悉的朋友',
        steps: [
          '请朋友正常进门。',
          '观察它是迎接、观望还是躲藏。',
        ],
        observe: '它的社交性和对陌生人的信任度？' },
      en: { name: 'Visitor-reaction test', props: 'A friend it doesn’t know well',
        steps: [
          'Have your friend enter normally.',
          'Watch whether it greets, observes, or hides.',
        ],
        observe: 'Its sociability and trust toward strangers?' },
      options: [
        { zh: '热情迎上去', en: 'Greeted them warmly', w: { EI: +2, NEU: -1 } },
        { zh: '远远观察后才靠近', en: 'Observed, then approached', w: { EI: +1, SN: +1 } },
        { zh: '保持距离警惕', en: 'Kept a wary distance', w: { EI: -1, NEU: +1 } },
        { zh: '躲起来不出来', en: 'Hid and stayed away', w: { EI: -2, NEU: +2 } },
      ],
    },
    {
      id: 'mirror', icon: 'mirror', minutes: 2, species: 'cat', recommended: false,
      zh: { name: '镜子测试', props: '一面镜子',
        steps: [
          '让它面对镜子里的自己。',
          '观察它的第一反应。',
        ],
        observe: '它是好奇、警觉、还是完全无视？' },
      en: { name: 'Mirror test', props: 'A mirror',
        steps: [
          'Let it face its own reflection.',
          'Observe the first reaction.',
        ],
        observe: 'Curious, alert, or totally indifferent?' },
      options: [
        { zh: '好奇地拍打镜子', en: 'Curiously pawed the mirror', w: { SN: -1, EI: +1 } },
        { zh: '盯着看很久', en: 'Stared for a long time', w: { SN: +1 } },
        { zh: '炸毛/警惕', en: 'Puffed up / went wary', w: { NEU: +1 } },
        { zh: '看都不看', en: 'Didn’t even look', w: { EI: -1 } },
      ],
    },
    {
      id: 'routine', icon: 'calendar', minutes: 1, species: 'both', recommended: false,
      zh: { name: '作息规律回顾', props: '回顾最近几天',
        steps: [
          '回想它这几天的进食、玩耍、睡觉时间。',
          '判断规律程度。',
        ],
        observe: '它的生活是像时钟一样准，还是全凭心情？' },
      en: { name: 'Routine review', props: 'Reflect on recent days',
        steps: [
          'Recall its eating, playing and sleeping times lately.',
          'Judge how regular it is.',
        ],
        observe: 'Clockwork-precise, or purely by mood?' },
      options: [
        { zh: '几乎像时钟一样准', en: 'Almost clockwork', w: { JP: +2 } },
        { zh: '大致规律', en: 'Roughly regular', w: { JP: +1 } },
        { zh: '看心情，没准点', en: 'By mood, no set time', w: { JP: -2 } },
        { zh: '完全没规律', en: 'No pattern at all', w: { JP: -1, NEU: +1 } },
      ],
    },
  ];

  window.PP = window.PP || {};
  window.PP.EXPERIMENTS = E;
  window.PP.experimentsFor = function (species) {
    return E.filter((e) => e.species === 'both' || e.species === species);
  };
})();
