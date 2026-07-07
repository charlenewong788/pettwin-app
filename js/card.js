/* 宠格 PetPersona — shareable personality card (SVG -> PNG) */
(function () {
  var W = 1080, H = 1440;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function star(cx, cy, r, filled) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var ang = -Math.PI / 2 + i * Math.PI / 5;
      var rad = i % 2 === 0 ? r : r * 0.44;
      pts.push((cx + rad * Math.cos(ang)).toFixed(1) + ',' + (cy + rad * Math.sin(ang)).toFixed(1));
    }
    return '<polygon points="' + pts.join(' ') + '" fill="' + (filled ? '#e07a4e' : 'none') +
      '" stroke="#e07a4e" stroke-width="3" stroke-linejoin="round"/>';
  }

  function axisRow(y, leftLabel, rightLabel, firstPct, winnerLeft) {
    var x0 = 120, x1 = 960, w = x1 - x0;
    var markerX = x0 + w * (100 - firstPct) / 100; // firstPct toward left label
    var s = '';
    s += '<text x="' + x0 + '" y="' + (y - 26) + '" font-size="30" font-weight="' + (winnerLeft ? '800' : '400') +
      '" fill="' + (winnerLeft ? '#c05f35' : '#a1968a') + '">' + esc(leftLabel) + '</text>';
    s += '<text x="' + x1 + '" y="' + (y - 26) + '" text-anchor="end" font-size="30" font-weight="' + (!winnerLeft ? '800' : '400') +
      '" fill="' + (!winnerLeft ? '#c05f35' : '#a1968a') + '">' + esc(rightLabel) + '</text>';
    s += '<rect x="' + x0 + '" y="' + y + '" width="' + w + '" height="14" rx="7" fill="#f0e6d8"/>';
    s += '<circle cx="' + markerX.toFixed(1) + '" cy="' + (y + 7) + '" r="16" fill="#e07a4e"/>';
    return s;
  }

  function buildSVG(pet, type, result, lang) {
    var i18n = window.PP.i18n;
    var isZh = (lang || i18n.lang) === 'zh';
    var nickname = isZh ? type.nickname_zh : type.nickname_en;
    var tagline = isZh ? type.tagline_zh : type.tagline_en;
    var petName = pet.name || (isZh ? '我的毛孩子' : 'My pet');
    var speciesLabel = pet.species === 'dog' ? (isZh ? '狗狗' : 'Dog') : (isZh ? '猫咪' : 'Cat');

    var svg = '';
    svg += '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">';
    // background
    svg += '<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#fff6ee"/><stop offset="1" stop-color="#f7ddc9"/></linearGradient>' +
      '<clipPath id="ac"><circle cx="540" cy="330" r="150"/></clipPath></defs>';
    svg += '<rect width="' + W + '" height="' + H + '" fill="url(#bg)"/>';
    svg += '<rect x="40" y="40" width="1000" height="1360" rx="48" fill="#ffffff" opacity="0.55"/>';

    // brand
    svg += '<text x="540" y="140" text-anchor="middle" font-size="34" letter-spacing="4" fill="#c05f35" font-weight="700">' +
      (isZh ? '宠格 · PetPersona' : 'PetPersona') + '</text>';

    // avatar
    svg += '<circle cx="540" cy="330" r="160" fill="#fbe9df" stroke="#f0d3bf" stroke-width="4"/>';
    if (pet.photo) {
      svg += '<image href="' + esc(pet.photo) + '" x="390" y="180" width="300" height="300" ' +
        'preserveAspectRatio="xMidYMid slice" clip-path="url(#ac)"/>';
    } else {
      // default paw
      svg += '<g fill="#e0b79c" transform="translate(540,330)">' +
        '<ellipse cx="-42" cy="-40" rx="24" ry="32"/><ellipse cx="42" cy="-40" rx="24" ry="32"/>' +
        '<ellipse cx="-82" cy="4" rx="20" ry="27"/><ellipse cx="82" cy="4" rx="20" ry="27"/>' +
        '<path d="M0 -12c34 0 62 26 62 58 0 24-20 40-44 40-8 0-16-3-22-8-6 5-14 8-22 8-24 0-44-16-44-40 0-32 28-58 70-58z"/></g>';
    }

    // pet name
    svg += '<text x="540" y="560" text-anchor="middle" font-size="46" font-weight="700" fill="#2e2a25">' + esc(petName) + '</text>';

    // type code
    svg += '<text x="540" y="700" text-anchor="middle" font-size="150" font-weight="800" letter-spacing="14" fill="#c05f35">' +
      esc(type.code) + '</text>';
    // nickname
    svg += '<text x="540" y="770" text-anchor="middle" font-size="52" font-weight="700" fill="#2e2a25">' + esc(nickname) + '</text>';
    // tagline
    svg += '<text x="540" y="838" text-anchor="middle" font-size="34" fill="#6b6259">“' + esc(tagline) + '”</text>';

    // axis rows
    var axisKeys = ['EI', 'SN', 'TF', 'JP'];
    var yStart = 960, gap = 96;
    axisKeys.forEach(function (ax, i) {
      var first = ax[0], second = ax[1];
      var pct = result.axes[ax];
      var leftLabel = i18n.t('axisFull.' + first);
      var rightLabel = i18n.t('axisFull.' + second);
      svg += axisRow(yStart + i * gap, leftLabel, rightLabel, pct, pct >= 50);
    });

    // stars
    var starsY = 1320, n = result.confidence || 3;
    var sx = 540 - (5 - 1) * 34 / 2;
    for (var s2 = 0; s2 < 5; s2++) {
      svg += star(540 - (2 - s2) * 60, starsY, 26, s2 < n);
    }
    svg += '<text x="540" y="1385" text-anchor="middle" font-size="26" fill="#a1968a">' +
      esc(speciesLabel) + ' · ' + (isZh ? '置信度' : 'Confidence') + ' ' + n + '/5' + '</text>';

    svg += '</svg>';
    return svg;
  }

  function svgToPngDataURL(svg) {
    return new Promise(function (resolve, reject) {
      var blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = W; canvas.height = H;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, W, H);
        URL.revokeObjectURL(url);
        try { resolve(canvas.toDataURL('image/png')); }
        catch (e) { reject(e); }
      };
      img.onerror = function (e) { URL.revokeObjectURL(url); reject(e); };
      img.src = url;
    });
  }

  window.PP = window.PP || {};
  window.PP.card = { buildSVG: buildSVG, svgToPngDataURL: svgToPngDataURL };
})();
