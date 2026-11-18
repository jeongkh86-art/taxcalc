

(function () {
'use strict';
var CSS = "<style>\n@font-face{font-family:FS;font-weight:100;src:local('Freesentation-1Thin')}\n@font-face{font-family:FS;font-weight:200;src:local('Freesentation-2ExtraLight')}\n@font-face{font-family:FS;font-weight:300;src:local('Freesentation-3Light')}\n@font-face{font-family:FS;font-weight:400;src:local('Freesentation-4Regular')}\n@font-face{font-family:FS;font-weight:500;src:local('Freesentation-5Medium')}\n@font-face{font-family:FS;font-weight:600;src:local('Freesentation-6SemiBold')}\n@font-face{font-family:FS;font-weight:700;src:local('Freesentation-7Bold')}\n@font-face{font-family:FS;font-weight:800;src:local('Freesentation-8ExtraBold')}\n:root{\n  --blue:#0B3AA8; --blue-d:#072C86; --blue2:#3A62D0; --blue3:#7C98E4; --blue4:#BCCBF3; --blue5:#DCE4FA;\n  --tint:#EAEFFC; --bg:#F2F4FA; --white:#fff;\n  --ink:#121A3A; --t2:#4B5472; --t3:#737C98; --rule:#DDE2EE;\n  --risk:#D2463A; --risktint:#FCEBE9;\n  --shadow:0 1.5pt 6pt rgba(20,40,110,.07);\n}\n@page{size:960pt 540pt;margin:0}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{background:#C9CFDC}\nbody{font-family:FS,'Apple SD Gothic Neo',sans-serif;color:var(--ink);font-size:13pt;font-weight:400;\n  font-variant-numeric:tabular-nums;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.slide{width:960pt;height:540pt;position:relative;overflow:hidden;background:var(--bg);page-break-after:always;break-after:page}\n@media screen{.slide{margin:20pt auto;box-shadow:0 2pt 12pt rgba(0,0,0,.18)}}\nbody.cap .slide{margin:0;box-shadow:none}\n.abs{position:absolute}\nsvg{overflow:visible}\n\n/* ---------- header / footer ---------- */\n.eb{position:absolute;left:48pt;top:30pt;font-size:12pt;font-weight:700;color:var(--blue);letter-spacing:.2pt}\n.ttl{position:absolute;left:48pt;top:48pt;width:800pt;font-size:24pt;font-weight:700;letter-spacing:-.6pt;line-height:1.25;color:var(--ink)}\n.ttl em{font-style:normal;color:var(--blue)}\n.tr{position:absolute;right:48pt;top:28pt;display:flex;align-items:center;gap:6pt}\n.tr .co{font-size:12pt;color:var(--t3);margin-right:6pt;font-weight:500}\n.tr .chap{font-size:12pt;font-weight:600;color:var(--blue);background:#fff;border:1pt solid var(--blue4);border-radius:20pt;padding:2pt 10pt;margin-right:4pt}\n.tr i{display:block;width:18pt;height:5pt;border-radius:3pt;background:var(--blue5)}\n.tr i.on{width:30pt;background:var(--blue)}\n.ft{position:absolute;left:48pt;right:48pt;bottom:18pt;display:flex;justify-content:space-between;align-items:center;font-size:12pt;color:var(--t3)}\n.ft b{font-weight:700;color:var(--blue)}\n.pg{width:24pt;height:24pt;border-radius:12pt;background:var(--blue);color:#fff;font-size:12pt;font-weight:700;display:flex;align-items:center;justify-content:center}\n.body{position:absolute;left:48pt;right:48pt;top:112pt;bottom:52pt}\n\n/* ---------- parts ---------- */\n.card{position:absolute;background:#fff;border-radius:14pt;box-shadow:var(--shadow)}\n.ch{display:flex;align-items:center;gap:9pt}\n.ch .tt{font-size:14pt;font-weight:700;color:var(--ink)}\n.icb{width:30pt;height:30pt;border-radius:9pt;background:var(--tint);display:flex;align-items:center;justify-content:center;flex:none}\n.icb svg{width:20pt;height:20pt}\n.icb.inv{background:rgba(255,255,255,.16)}\n.pill{display:inline-block;font-size:12pt;font-weight:600;border-radius:20pt;padding:2pt 10pt;line-height:1.35;white-space:nowrap}\n.p-blue{background:var(--blue);color:#fff}\n.p-out{background:#fff;color:var(--blue);border:1pt solid var(--blue3)}\n.p-tint{background:var(--tint);color:var(--blue)}\n.p-grey{background:#EDEFF4;color:var(--t2)}\n.p-risk{background:var(--risktint);color:var(--risk)}\n.p-ink{background:var(--ink);color:#fff}\n.num{font-variant-numeric:tabular-nums;letter-spacing:-.3pt}\n.lab{font-size:12pt;color:var(--t2);font-weight:500}\n.note{font-size:12pt;color:var(--t3);line-height:1.45}\n.circ{width:24pt;height:24pt;border-radius:12pt;background:var(--blue);color:#fff;font-size:13pt;font-weight:700;display:flex;align-items:center;justify-content:center;flex:none}\n.circ.o{background:#fff;color:var(--blue);border:1.2pt solid var(--blue)}\n.chk{width:22pt;height:22pt;border-radius:11pt;background:var(--blue);display:flex;align-items:center;justify-content:center;flex:none}\n.chk svg{width:13pt;height:13pt}\n\n/* ---------- blue full pages ---------- */\n.blue{background:linear-gradient(135deg,#0D40B6 0%,#0A35A0 45%,#062677 100%);color:#fff}\n.patt{position:absolute;left:0;top:0}\n<\/style>";
var ICONS = "<svg width=\"0\" height=\"0\" style=\"position:absolute\">\n  <defs>\n    <symbol id=\"i-building\" viewBox=\"0 0 48 48\"><rect x=\"9\" y=\"12\" width=\"22\" height=\"30\" rx=\"2\" fill=\"#BCCBF3\"/><rect x=\"27\" y=\"20\" width=\"13\" height=\"22\" rx=\"2\" fill=\"#0B3AA8\"/><rect x=\"13\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"21\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"13\" y=\"25\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"21\" y=\"25\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"16\" y=\"34\" width=\"7\" height=\"8\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"30\" y=\"25\" width=\"7\" height=\"3\" rx=\"1\" fill=\"#BCCBF3\"/><rect x=\"30\" y=\"31\" width=\"7\" height=\"3\" rx=\"1\" fill=\"#BCCBF3\"/><rect x=\"5\" y=\"41\" width=\"38\" height=\"3\" rx=\"1.5\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-scale\" viewBox=\"0 0 48 48\"><rect x=\"22.5\" y=\"8\" width=\"3\" height=\"30\" rx=\"1.5\" fill=\"#0B3AA8\"/><rect x=\"8\" y=\"12\" width=\"32\" height=\"3\" rx=\"1.5\" fill=\"#0B3AA8\"/><path d=\"M4 26 L11 14 L18 26 Z\" fill=\"#BCCBF3\"/><path d=\"M30 26 L37 14 L44 26 Z\" fill=\"#BCCBF3\"/><path d=\"M3 26 h16 a8 5 0 0 1 -16 0Z\" fill=\"#0B3AA8\"/><path d=\"M29 26 h16 a8 5 0 0 1 -16 0Z\" fill=\"#0B3AA8\"/><rect x=\"14\" y=\"38\" width=\"20\" height=\"5\" rx=\"2.5\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-shield\" viewBox=\"0 0 48 48\"><path d=\"M24 4 L40 10 V23 C40 33 33 40 24 44 C15 40 8 33 8 23 V10 Z\" fill=\"#BCCBF3\"/><path d=\"M24 4 L40 10 V23 C40 33 33 40 24 44 Z\" fill=\"#0B3AA8\" opacity=\".25\"/><path d=\"M16 24 L22 30 L33 18\" fill=\"none\" stroke=\"#0B3AA8\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><\/symbol>\n    <symbol id=\"i-cal\" viewBox=\"0 0 48 48\"><rect x=\"6\" y=\"10\" width=\"36\" height=\"32\" rx=\"4\" fill=\"#BCCBF3\"/><path d=\"M6 14 a4 4 0 0 1 4-4 h28 a4 4 0 0 1 4 4 v6 H6Z\" fill=\"#0B3AA8\"/><rect x=\"14\" y=\"5\" width=\"4\" height=\"9\" rx=\"2\" fill=\"#0B3AA8\"/><rect x=\"30\" y=\"5\" width=\"4\" height=\"9\" rx=\"2\" fill=\"#0B3AA8\"/><rect x=\"12\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"21\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"30\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#0B3AA8\"/><rect x=\"12\" y=\"33\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"21\" y=\"33\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#fff\"/><\/symbol>\n    <symbol id=\"i-doc\" viewBox=\"0 0 48 48\"><path d=\"M11 5 H30 L39 14 V43 H11 Z\" fill=\"#BCCBF3\"/><path d=\"M30 5 V14 H39 Z\" fill=\"#0B3AA8\"/><rect x=\"16\" y=\"20\" width=\"18\" height=\"3\" rx=\"1.5\" fill=\"#0B3AA8\"/><rect x=\"16\" y=\"27\" width=\"18\" height=\"3\" rx=\"1.5\" fill=\"#0B3AA8\"/><rect x=\"16\" y=\"34\" width=\"11\" height=\"3\" rx=\"1.5\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-person\" viewBox=\"0 0 48 48\"><circle cx=\"24\" cy=\"16\" r=\"9\" fill=\"#0B3AA8\"/><path d=\"M7 43 C7 32 15 27 24 27 C33 27 41 32 41 43 Z\" fill=\"#BCCBF3\"/><\/symbol>\n    <symbol id=\"i-people\" viewBox=\"0 0 48 48\"><circle cx=\"31\" cy=\"15\" r=\"7\" fill=\"#BCCBF3\"/><path d=\"M20 40 C20 30 25 25 31 25 C38 25 44 30 44 40Z\" fill=\"#BCCBF3\"/><circle cx=\"18\" cy=\"18\" r=\"8\" fill=\"#0B3AA8\"/><path d=\"M3 43 C3 33 10 28 18 28 C26 28 33 33 33 43Z\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-chart\" viewBox=\"0 0 48 48\"><rect x=\"6\" y=\"28\" width=\"8\" height=\"14\" rx=\"2\" fill=\"#BCCBF3\"/><rect x=\"18\" y=\"20\" width=\"8\" height=\"22\" rx=\"2\" fill=\"#7C98E4\"/><rect x=\"30\" y=\"10\" width=\"8\" height=\"32\" rx=\"2\" fill=\"#0B3AA8\"/><path d=\"M6 20 L20 11 L28 15 L42 5\" fill=\"none\" stroke=\"#0B3AA8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><\/symbol>\n    <symbol id=\"i-gift\" viewBox=\"0 0 48 48\"><rect x=\"7\" y=\"18\" width=\"34\" height=\"8\" rx=\"2\" fill=\"#0B3AA8\"/><rect x=\"10\" y=\"26\" width=\"28\" height=\"17\" rx=\"2\" fill=\"#BCCBF3\"/><rect x=\"22\" y=\"18\" width=\"4\" height=\"25\" fill=\"#0B3AA8\"/><path d=\"M24 18 C18 8 10 10 14 16 Z M24 18 C30 8 38 10 34 16 Z\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-coin\" viewBox=\"0 0 48 48\"><ellipse cx=\"24\" cy=\"34\" rx=\"16\" ry=\"6\" fill=\"#0B3AA8\"/><rect x=\"8\" y=\"22\" width=\"32\" height=\"12\" fill=\"#0B3AA8\"/><ellipse cx=\"24\" cy=\"22\" rx=\"16\" ry=\"6\" fill=\"#BCCBF3\"/><ellipse cx=\"24\" cy=\"22\" rx=\"8\" ry=\"2.6\" fill=\"#0B3AA8\" opacity=\".35\"/><\/symbol>\n    <symbol id=\"i-flag\" viewBox=\"0 0 48 48\"><rect x=\"9\" y=\"5\" width=\"3.5\" height=\"38\" rx=\"1.7\" fill=\"#0B3AA8\"/><path d=\"M12 7 H38 L32 15 L38 23 H12Z\" fill=\"#BCCBF3\"/><path d=\"M12 7 H24 V23 H12Z\" fill=\"#0B3AA8\" opacity=\".3\"/><\/symbol>\n    <symbol id=\"i-check\" viewBox=\"0 0 24 24\"><path d=\"M5 12.5 L10 17.5 L19 7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><\/symbol>\n    <symbol id=\"i-checkb\" viewBox=\"0 0 24 24\"><path d=\"M5 12.5 L10 17.5 L19 7\" fill=\"none\" stroke=\"#0B3AA8\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><\/symbol>\n    <symbol id=\"i-tool\" viewBox=\"0 0 24 24\"><path d=\"M14.5 4 a5 5 0 0 0 -4.6 6.9 L4 16.8 L7.2 20 L13.1 14.1 a5 5 0 0 0 6.9 -4.6 l-3 3 -3 -0.6 -0.6 -3 Z\" fill=\"#0B3AA8\"/><\/symbol>\n    <symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><rect x=\"10.5\" y=\"5\" width=\"3\" height=\"9\" rx=\"1.5\" fill=\"#fff\"/><circle cx=\"12\" cy=\"18\" r=\"1.8\" fill=\"#fff\"/><\/symbol>\n    <!-- white-tone icons for blue pages -->\n    <symbol id=\"w-chart\" viewBox=\"0 0 48 48\"><rect x=\"6\" y=\"28\" width=\"8\" height=\"14\" rx=\"2\" fill=\"#6F8FE6\"/><rect x=\"18\" y=\"20\" width=\"8\" height=\"22\" rx=\"2\" fill=\"#A9BDF5\"/><rect x=\"30\" y=\"10\" width=\"8\" height=\"32\" rx=\"2\" fill=\"#fff\"/><path d=\"M6 20 L20 11 L28 15 L42 5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><\/symbol>\n    <symbol id=\"w-scale\" viewBox=\"0 0 48 48\"><rect x=\"22.5\" y=\"8\" width=\"3\" height=\"30\" rx=\"1.5\" fill=\"#fff\"/><rect x=\"8\" y=\"12\" width=\"32\" height=\"3\" rx=\"1.5\" fill=\"#fff\"/><path d=\"M4 26 L11 14 L18 26 Z\" fill=\"#6F8FE6\"/><path d=\"M30 26 L37 14 L44 26 Z\" fill=\"#6F8FE6\"/><path d=\"M3 26 h16 a8 5 0 0 1 -16 0Z\" fill=\"#fff\"/><path d=\"M29 26 h16 a8 5 0 0 1 -16 0Z\" fill=\"#fff\"/><rect x=\"14\" y=\"38\" width=\"20\" height=\"5\" rx=\"2.5\" fill=\"#fff\"/><\/symbol>\n    <symbol id=\"w-cal\" viewBox=\"0 0 48 48\"><rect x=\"6\" y=\"10\" width=\"36\" height=\"32\" rx=\"4\" fill=\"#6F8FE6\"/><path d=\"M6 14 a4 4 0 0 1 4-4 h28 a4 4 0 0 1 4 4 v6 H6Z\" fill=\"#fff\"/><rect x=\"14\" y=\"5\" width=\"4\" height=\"9\" rx=\"2\" fill=\"#fff\"/><rect x=\"30\" y=\"5\" width=\"4\" height=\"9\" rx=\"2\" fill=\"#fff\"/><rect x=\"12\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#A9BDF5\"/><rect x=\"21\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#A9BDF5\"/><rect x=\"30\" y=\"25\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"12\" y=\"33\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#A9BDF5\"/><rect x=\"21\" y=\"33\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#A9BDF5\"/><\/symbol>\n    <symbol id=\"w-building\" viewBox=\"0 0 48 48\"><rect x=\"9\" y=\"12\" width=\"22\" height=\"30\" rx=\"2\" fill=\"#6F8FE6\"/><rect x=\"27\" y=\"20\" width=\"13\" height=\"22\" rx=\"2\" fill=\"#fff\"/><rect x=\"13\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"21\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"13\" y=\"25\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"21\" y=\"25\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#fff\"/><rect x=\"16\" y=\"34\" width=\"7\" height=\"8\" rx=\"1\" fill=\"#fff\"/><rect x=\"5\" y=\"41\" width=\"38\" height=\"3\" rx=\"1.5\" fill=\"#fff\"/><\/symbol>\n    <pattern id=\"dots\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\"1.3\" fill=\"#fff\" opacity=\".22\"/><\/pattern>\n    <pattern id=\"dotsB\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\"1.2\" fill=\"#0B3AA8\" opacity=\".16\"/><\/pattern>\n    <linearGradient id=\"gBar\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#2E57CC\"/><stop offset=\"1\" stop-color=\"#0B3AA8\"/><\/linearGradient>\n  <\/defs>\n<\/svg>";
var EXTRA = '.ft{gap:16pt}.ft>span:first-child{flex:1;white-space:nowrap;overflow:hidden}.ttl{white-space:nowrap}' +
  '.nd{position:absolute;box-sizing:border-box}.tx{position:absolute;display:flex;align-items:center;white-space:pre;line-height:1.25}' +
  '.kv{white-space:nowrap}.strip{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:12pt;box-shadow:var(--shadow);padding:7pt 14pt}' +
  '.strip div{font-size:12pt;color:var(--t2);line-height:1.5;white-space:nowrap}.strip b{color:var(--blue);font-weight:700;margin-right:6pt}' +
  'body{background:#fff}.slide{margin:0!important;box-shadow:none!important}';


var RISK = {
  cretop: '본 자료는 크레탑(CRETOP) 기업정보와 예시 가정을 바탕으로 작성한 참고 자료입니다. 세무 자문이나 투자 권유가 아니며, 실제 세액은 사실관계 확인과 법령 개정에 따라 달라질 수 있습니다.',
  input: '본 자료는 입력 자료와 예시 가정을 바탕으로 작성한 참고 자료입니다. 세무 자문이나 투자 권유가 아니며, 실제 세액은 사실관계 확인과 법령 개정에 따라 달라질 수 있습니다.'
};
var RISK_S = { cretop: '크레탑 정보, 예시 가정 기반 참고 자료', input: '입력 자료, 예시 가정 기반 참고 자료' };


var PRIV_REL = /\s?\((처|부인|남편|자|녀|장남|장녀|차남|차녀|삼남|형|제|매|누나|오빠|언니|동생|부|모|부친|모친|자부|며느리|사위|손|손자|손녀|조카|숙부|모친)\)/g;
var PRIV_ASSUME = /배우자|자녀|급여|연봉|퇴직|상속세|상속재산|상속공제|상속분|금융재산|현금|주택|개인재산|증여|수증|유고|납세재원|보험|가수금|배당|건보료|소득세|특례|가업상속|인출|이전 한도|이전한도|20년|년 후|년차|추징|절감|대표이사 →|가족|상속인|연부연납|감자|신탁|캘린더|사후관리/;
function privEsc(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function privPrep(P) {
  if (P.__rx) return P;
  var m = (P.map || []).filter(function (x) { return x && x[0] && String(x[0]).length >= 2 && x[0] !== x[1]; }).sort(function (a, b) { return String(b[0]).length - String(a[0]).length; });
  P.__rx = m.map(function (x) { return [new RegExp(privEsc(x[0]) + (x[1] === '대표이사' ? '(?:\\s*대표(?!이사))?' : ''), 'g'), x[1]]; });
  P.__names = m.map(function (x) { return x[0]; });
  return P;
}
function privText(s, P) {
  if (s == null || typeof s !== 'string' || !s) return s;
  P = privPrep(P);
  P.__rx.forEach(function (r) { s = s.replace(r[0], r[1]); });
  var a = +P.age || 0;
  if (a > 0) {
    s = s.replace(new RegExp('대표이사\\s*[,·]\\s*(만\\s*)?' + a + '세', 'g'), '대표이사')
      .replace(new RegExp('(증여자\\s*(?:연령\\s*)?)(만\\s*)?' + a + '세', 'g'), '$160세 이상 (가정, 요건 충족 전제)')
      .replace(new RegExp('([,·]\\s*)(만\\s*)?' + a + '세', 'g'), '$1연령 요건 충족 (가정)')
      .replace(new RegExp('(^|[^\\d])(만\\s*)?' + a + '세', 'g'), '$160세 이상 (가정)');
  }
  s = s.replace(/(19|20)\d{2}년\s*도달/g, '60세 도달 시점').replace(/남편/g, '대표').replace(/아내/g, '배우자').replace(PRIV_REL, '');
  
  s = s.replace(/본 자료는\s*(크레탑|CRETOP|기업정보)\s*리포트 기반 산출값/g, '기업정보와 표준 가정 기반 산출값').replace(/크레탑\s*\(CRETOP\)\s*기업정보/g, '기업정보').replace(/크레탑|CRETOP/g, '기업정보')
    .replace(/\(입력값,\s*/g, '(가정, ').replace(/\(입력값\)/g, '(가정)').replace(/입력값/g, '가정값')
    .replace(/\(미입력\)/g, '(가정 0원)').replace(/미입력 — 배우자 명의 부동산\s*[·,]\s*예금이 있으면 넣어야 2차 세액이 정확해짐/g, '가정 0원 — 배우자 명의 개인재산 미반영')
    .replace(/미입력/g, '가정 0원').replace(/①?\s*사안 설정에서\s*/g, '');
  return s;
}
function privDeep(o, P) {
  if (typeof o === 'string') return privText(o, P);
  if (Array.isArray(o)) { for (var i = 0; i < o.length; i++) o[i] = privDeep(o[i], P); return o; }
  if (o && typeof o === 'object') { Object.keys(o).forEach(function (k) { o[k] = privDeep(o[k], P); }); return o; }
  return o;
}
function privHtml(h, P) { return String(h).split(/(<[^>]*>)/).map(function (seg, i) { return i % 2 ? seg : privText(seg, P); }).join(''); }
function privOn(ctx) { return !!(ctx && ctx.opt && ctx.opt.priv && ctx.opt.priv.on); }
function privPlain(h) { return String(h || '').replace(/<[^>]*>/g, ' ').replace(/상속세 및 증여세법/g, '').replace(/&[a-z]+;/g, ' '); }


var STRAT = {
  '5': { risk: 'cretop', en: 'SHARE TRANSFER REVIEW', split: ' 자녀 지분이전',
    sub: function (X) { return X.pct + ' 지분 이전 4안 — 증여특례, 일반증여, 특정법인, 양수도 미지급'; },
    secs: [['주식가치, 구조', /^(의사결정|①)/], ['이전 시 세액', /^②/], ['이전 뒤 비용', /^③/], ['상속세', /^[④⑤]/], ['총 세금, 근거', /^(⑥|핵심 근거)/]] },
  '1': { risk: 'cretop', en: 'FAMILY BUSINESS SUCCESSION REVIEW', split: ' ',
    sub: function () { return '비상장주식 평가, 상속세, 승계 경로, 실행 방안'; }, secs: [] },
  '3': { risk: 'input', en: 'CORPORATE CONVERSION REVIEW', split: ' 법인전환',
    sub: function () { return '개인 유지, 주식 직접증여, 특정법인 증여 3경로 — 전환비용부터 30년 총비용까지'; },
    secs: [['현황, 전환비용', /^(전체 구조도|의사결정|①|②)/], ['이월과세, 주식가치', /^[③④]/], ['이전 경로', /^⑤/], ['자금, 무상대여', /^[⑥⑦]/], ['총비용, 근거', /^(⑧|핵심 근거)/]] }
};


function E(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function num(s) { var m = /[\d,]+(\.\d+)?/.exec(String(s || '')); return m ? parseFloat(m[0].replace(/,/g, '')) : 0; }
function must(v, what) { if (v == null || v === '' || (Array.isArray(v) && !v.length)) throw new Error('2판 : 갈색 덱에서 못 찾음 — ' + what); return v; }
function em(s) { return E(s).replace(/\[/g, '<em>').replace(/\]/g, '</em>'); }

function emNum(s) {
  return E(s).replace(/([△+−\-]?\d[\d,.]*\s*(억원|억|만원|원|%p|%|위|배|주)(\s*\/\s*[\d,.]+\s*(억원|억|원|%))?)/g, function (m, a, u) { return (u === '주' && !/\d,\d/.test(a)) ? m : '<em>' + m + '</em>'; });
}
function icon(ic, s) { s = s || 20; return '<svg style="width:' + s + 'pt;height:' + s + 'pt"><use href="#' + ic + '"/></svg>'; }
function icb(ic, inv) { return '<div class="icb' + (inv ? ' inv' : '') + '">' + icon(ic) + '</div>'; }
function ch(ic, tt, right) { return '<div class="ch">' + icb(ic) + '<div class="tt">' + tt + '</div>' + (right || '') + '</div>'; }
function pill(t, kind, st) { return '<span class="pill ' + (kind || 'p-tint') + '" style="' + (st || '') + '">' + t + '</span>'; }
function card(x, y, w, h, inner, st) { return '<div class="card" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;padding:14pt 18pt;' + (st || '') + '">' + inner + '</div>'; }
function circ(t, o, st) { return '<div class="circ' + (o ? ' o' : '') + '" style="' + (st || '') + '">' + t + '</div>'; }
var HL = 'background:linear-gradient(135deg,#1747C0,#0A339A);color:#fff;box-shadow:0 2pt 6pt rgba(11,58,168,.24)';
function kpi(ic, lab, val, unit, note, hl, badge, vfs) {
  vfs = vfs || 28;
  var st = hl ? HL : 'background:#fff;box-shadow:var(--shadow)';
  var ib = hl ? '<div class="icb inv" style="background:#2A59CC">' + icon(ic) + '</div>' : icb(ic);
  return '<div style="position:relative;height:100%;border-radius:14pt;padding:13pt 15pt;' + st + '">' +
    '<div style="display:flex;align-items:center;gap:8pt">' + ib + '<div style="font-size:12pt;font-weight:600;color:' + (hl ? '#DCE5FF' : 'var(--t2)') + ';line-height:1.25">' + lab + '</div></div>' +
    '<div class="num kv fit" style="margin-top:8pt;font-size:' + vfs + 'pt;font-weight:800;letter-spacing:-1pt;line-height:1.05;color:' + (hl ? '#fff' : 'var(--ink)') + '">' + val +
    (unit ? '<span style="font-size:15pt;font-weight:700;margin-left:2pt">' + unit + '</span>' : '') + '</div>' +
    '<div style="margin-top:7pt;font-size:12pt;line-height:1.4;color:' + (hl ? '#DCE5FF' : 'var(--t3)') + '">' + note + '</div>' +
    (badge ? '<span class="pill" style="position:absolute;right:12pt;top:-9pt;background:#fff;color:var(--blue);box-shadow:var(--shadow)">' + badge + '</span>' : '') + '</div>';
}
function bar(frac, col, h, track, dashed) {
  frac = Math.max(0, Math.min(1, frac || 0)); h = h || 14;
  var inner = '<div style="width:' + (frac * 100).toFixed(2) + '%;height:100%;border-radius:' + (h / 2) + 'pt;' +
    (dashed ? 'background:#fff;border:1.2pt dashed ' + col : 'background:' + col) + '"></div>';
  return '<div style="flex:1;height:' + h + 'pt;border-radius:' + (h / 2) + 'pt;background:' + (track || 'var(--tint)') + '">' + inner + '</div>';
}
function keys(items) {
  return items.map(function (it, k) {
    return '<div style="display:flex;gap:12pt;align-items:center;padding:8pt 0;' + (k < items.length - 1 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' +
      circ(k + 1) + '<div><div style="font-size:14pt;font-weight:700">' + it[0] + '</div><div style="font-size:12pt;color:var(--t2);margin-top:2pt">' + it[1] + '</div></div></div>';
  }).join('');
}
function minibars(rows, vmax) {
  return rows.map(function (r) {
    var nm = r[0], vs = r[1], hl = r[2], col = r[3], ck = r[4];
    return '<div style="display:flex;align-items:center;gap:10pt;height:30pt">' +
      '<div style="width:96pt;font-size:13pt;font-weight:' + (hl ? 700 : 500) + ';color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + nm + '</div>' +
      bar(num(vs) / vmax, col, 16) + '<div class="num" style="width:62pt;text-align:right;font-size:13pt;font-weight:700;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + vs + '</div>' +
      (ck ? '<div class="chk" style="width:18pt;height:18pt">' + icon('i-check', 11) + '</div>' : '<div style="width:18pt"></div>') + '</div>';
  }).join('');
}
function stepStrip(steps) {
  var o = '<div style="position:absolute;left:0;top:0;width:864pt;height:32pt;display:flex;align-items:center;gap:6pt">';
  steps.forEach(function (s, k) {
    var st = s[1] ? 'background:var(--blue);color:#fff' : 'background:#fff;color:var(--blue);border:1pt dashed var(--blue3)';
    o += '<div style="flex:none;padding:5pt 11pt;border-radius:9pt;font-size:12pt;font-weight:600;' + st + '">' + s[0] + '</div>';
    if (k < steps.length - 1) o += '<div style="flex:none;color:var(--blue3);font-size:13pt;font-weight:700">→</div>';
  });
  return o + '</div>';
}
function routeCard(x, w, h, c) {
  var hl = c.hl, st = hl ? HLB : '';   
  var rk = c.ranks.map(function (r, i) { return pill(r, (hl && i === 0) ? 'p-blue' : 'p-out', 'margin-left:4pt'); }).join('');
  var rr = c.rows.map(function (r) {
    return '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:8pt;padding:' + (c.tagBelow ? 3.5 : 5) + 'pt 0;border-top:0.75pt dashed var(--rule)">' +
      '<span style="font-size:12pt;color:var(--t2);flex:none">' + r[0] + '</span><span class="num" style="font-size:12pt;font-weight:700;text-align:right">' + r[1] + '</span></div>';
  }).join('');
  return '<div class="card" style="left:' + x + 'pt;top:44pt;width:' + w + 'pt;height:' + h + 'pt;padding:13pt 15pt;' + st + '">' +
    (c.badge ? '<span class="pill p-blue" style="position:absolute;right:12pt;top:-10pt;box-shadow:var(--shadow)">' + c.badge + '</span>' : '') +
    '<div style="display:flex;align-items:center;gap:7pt">' + circ(c.letter, !hl) + (c.tagBelow ? '' : pill(c.tag, 'p-grey')) + '<span style="margin-left:auto;display:flex">' + rk + '</span></div>' +
    '<div style="margin-top:8pt;font-size:16pt;font-weight:700;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + c.name + '</div>' +
    '<div style="margin-top:' + (c.tagBelow ? 2 : 6) + 'pt;font-size:12pt;color:var(--t3)">' + (c.tagBelow ? pill(c.tag, 'p-grey') + ' ' : '') + (c.bigLab || '') + '</div>' +
    '<div class="num" style="font-size:' + (c.tagBelow ? 24 : 26) + 'pt;font-weight:800;letter-spacing:-.8pt;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + c.big + '</div>' +
    '<div style="font-size:12pt;color:var(--t3);margin-bottom:6pt">' + c.bigSub + '</div>' +
    '<div style="display:flex;margin-bottom:8pt">' + bar(c.frac, hl ? 'var(--blue)' : 'var(--blue3)', 8) + '</div>' + rr + '</div>';
}


function Reader(D) {
  var dk = D.deck;
  function find(re) { for (var i = 0; i < dk.length; i++) if (dk[i].type === 'content' && re.test(dk[i].title || '')) return dk[i]; return null; }
  function nodes(sl) { var o = []; (sl.blocks || []).forEach(function (b) { if (b.t === 'route') o = o.concat(b.nodes || []); }); return o; }
  function tbl(sl) { var t = nodes(sl).filter(function (x) { return x.sh === 'tbl'; })[0]; return t ? t.rows : null; }
  function rowOf(sl, first) { var r = (tbl(sl) || []).filter(function (r) { return String(r[0]).trim() === first; })[0]; return must(r, (sl && sl.title) + ' 표 「' + first + '」'); }
  function notes(sl) { var o = {}, order = []; (sl.blocks || []).forEach(function (b) { if (b.t !== 'note') return; String(b.text).split('\n').forEach(function (ln) { var k = ln.indexOf(' : '); if (k > 0) { o[ln.slice(0, k)] = ln.slice(k + 3); order.push(ln.slice(0, k)); } else if (ln.trim()) { o['_' + order.length] = ln; order.push('_' + order.length); } }); }); o.__order = order; return o; }
  function note(sl, key) { return must(notes(sl)[key], (sl && sl.title) + ' 메모 「' + key + '」'); }
  function nd(sl, n, re) { var h = nodes(sl).filter(function (x) { return (n == null || x.n === n) && (re == null || re.test(String(x.t || ''))); }); return must(h[0], (sl && sl.title) + ' 칸 ' + (n || re)); }
  return { find: find, nodes: nodes, tbl: tbl, row: rowOf, notes: notes, note: note, nd: nd };
}


function Ctx(D, opt) {
  var C = STRAT[opt.strat]; if (!C) throw new Error('2판 : 모르는 전략 ' + opt.strat);
  var x = { D: D, C: C, R: Reader(D), client: (D.meta && D.meta.name) || '', ymd: (D.meta && D.meta.ymd) || '', risk: RISK[C.risk], riskS: RISK_S[C.risk], pages: [], opt: opt };
  if (opt.priv && opt.priv.on) {   
    var P = opt.priv, by = /^(\d{4})/.exec(String((D.meta && D.meta.baseYear) || '')), yr = by ? by[1] + '년 결산 재무제표' : '최근 결산 재무제표';
    x.client = P.co || '';
    x.privYr = yr;
    x.risk = '본 자료의 개인 재산, 가족 구성, 급여는 표준 가정이며 실제와 다를 수 있습니다. 법인 수치는 ' + yr + ' 기준입니다. 본 자료는 세무 자문이나 투자 권유가 아닌 참고 자료이며, 실제 세액은 사실관계 확인과 법령 개정에 따라 달라질 수 있습니다.';
    x.riskS = yr + ', 표준 가정 기반 참고 자료';
  }
  return x;
}

function asmKey(ctx, k) { k = privPlain(k).replace(/[\d.,]+/g, '#').replace(/\s+/g, ''); ctx.fpSeen = ctx.fpSeen || {}; var n = ctx.fpSeen[k] = (ctx.fpSeen[k] || 0) + 1; return k + '@' + n; }
function asmNums(parts) { return (privPlain(parts.filter(function (x) { return x != null; }).join(' ')).match(/\d[\d,.]*/g) || []).join(' '); }
function asmHit(ctx, key, parts, fallback) {
  if (ctx.fpOut) { ctx.fpOut[asmKey(ctx, key)] = asmNums(parts); return false; }
  if (ctx.asmRef) { var k = asmKey(ctx, key), n = asmNums(parts), hit = ctx.asmRef[k] !== n;
    ctx.asmChg = '';   
    if (hit) { var cnt = {}; String(ctx.asmRef[k] || '').split(' ').forEach(function (t) { if (t) cnt[t] = (cnt[t] || 0) + 1; });
      ctx.asmChg = ctx.asmRef[k] == null ? '*' : n.split(' ').filter(function (t) { if (!t) return false; if (cnt[t]) { cnt[t]--; return false; } return true; }).join(' ') || '*'; } (ctx.asmLog = ctx.asmLog || []).push([privPlain(key).replace(/\s+/g, ' ').trim(), hit ? 1 : 0]); return hit; }
  return fallback();
}
function secOf(ctx, title) { var s = ctx.C.secs; for (var i = 0; i < s.length; i++) if (s[i][1].test(title || '')) return i; return 0; }
function slide(ctx, o) {   
  var secs = ctx.secs || ctx.C.secs, prog = secs.length > 6 ? '<span style="font-size:12pt;font-weight:600;color:var(--t3);margin-left:4pt">' + (o.sec + 1) + ' / ' + secs.length + '</span>' : secs.map(function (s, k) { return '<i class="' + (k === o.sec ? 'on' : '') + '"></i>'; }).join('');
  var pg = ctx.pages.length + 1;
  var asm = '';
  if (privOn(ctx)) {   
    o.eyebrow = privText(String(o.eyebrow || ''), ctx.opt.priv);
    if (!o.noAsm && asmHit(ctx, o.eyebrow + '|' + o.title, [o.title, o.body, o.foot, o.sub], function () { return PRIV_ASSUME.test(privPlain(o.eyebrow + ' ' + o.title + ' ' + o.body + ' ' + (o.foot || ''))); })) { asm = '<span class="pill p-risk asm" style="margin-left:10pt;padding:0 9pt;line-height:1.3;vertical-align:1pt">표준 가정 포함</span>'; ctx.asmPages = (ctx.asmPages || 0) + 1; }
  }
  var h = '<section class="slide"' + (o.split ? ' data-split="1"' : '') + (o.kind ? ' data-k="' + o.kind + '"' : '') + (asm ? ' data-asm="1"' : '') + (asm && o.split && ctx.asmRef ? ' data-asmn="' + E(ctx.asmChg || '*') + '"' : '') + '><div class="eb">' + E(o.eyebrow) + asm + '</div><div class="ttl">' + o.title + '</div>' +
    '<div class="tr"><span class="co">' + E(ctx.client) + '</span><span class="chap">' + E(o.chap || (secs[o.sec] || [''])[0]) + '</span>' + prog + '</div>';
  if (o.sub) h += '<div class="abs" style="left:48pt;top:84pt;width:864pt;font-size:13pt;color:var(--t2);white-space:nowrap;overflow:hidden">' + E(o.sub) + '</div>';
  h += '<div class="body">' + oneHL1(o.body) + '</div>';   
  h += '<div class="ft"><span>' + (o.foot || '') + '</span><span style="display:flex;align-items:center;gap:12pt;flex:none"><span>' + E(ctx.riskS) + '</span><span class="pg">' + (pg < 10 ? '0' : '') + pg + '</span></span></div></section>';
  ctx.pages.push(h);
}
function cover(ctx, lines, sub) {
  var art = '<svg class="patt" width="960pt" height="540pt" viewBox="0 0 960 540"><rect width="960" height="540" fill="url(#dots)" opacity=".55"/>' +
    '<circle cx="860" cy="110" r="190" fill="none" stroke="#fff" stroke-opacity=".10" stroke-width="36"/><circle cx="860" cy="110" r="96" fill="#fff" fill-opacity=".06"/>';
  [60, 82, 72, 108, 98, 136, 128, 168, 158, 204, 222, 256].forEach(function (h, i) { var x = 590 + i * 28, last = i >= 10;
    art += '<rect x="' + x + '" y="' + (400 - h) + '" width="18" height="' + h + '" rx="9" fill="' + (last ? '#fff' : '#5A80E0') + '" opacity="' + (last ? 1 : (0.35 + 0.05 * i).toFixed(2)) + '"/>'; });
  art += '<path d="M590 345 C680 330 740 290 790 262 S 885 185 917 128" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-opacity=".85"/>' +
    '<circle cx="917" cy="128" r="8" fill="#fff"/><rect x="580" y="406" width="356" height="3" rx="1.5" fill="#fff" opacity=".35"/></svg>';
  ctx.pages.push('<section class="slide blue">' + art +
    '<div class="abs" style="left:56pt;top:50pt;display:flex;align-items:center;gap:10pt"><span class="pill" style="background:#fff;color:var(--blue)">2026 Review</span>' +
    '<span style="font-size:12pt;font-weight:600;letter-spacing:2pt;color:#C3D2FF">' + E(ctx.C.en) + '</span></div>' +
    '<div class="abs" style="left:56pt;top:128pt;font-size:17pt;color:#DCE5FF">' + (privOn(ctx) ? E((ctx.client ? ctx.client + ' ' : '') + '대표이사') + '님을 위한' : E(ctx.client) + ' 고객님을 위한') + '</div>' +
    '<div class="abs" style="left:56pt;top:160pt;width:520pt;font-size:40pt;font-weight:800;letter-spacing:-1.4pt;line-height:1.16;color:#fff">' + lines.map(E).join('<br>') + '</div>' +
    '<div class="abs" style="left:56pt;top:280pt;width:16pt;height:4pt;border-radius:2pt;background:#fff"></div>' +
    '<div class="abs" style="left:56pt;top:294pt;width:500pt;font-size:16pt;color:#DCE5FF;line-height:1.5">' + E(sub) + '</div>' +
    '<div class="abs" style="left:56pt;top:360pt;font-size:13pt;color:#C3D2FF">' + E(ctx.ymd) + '</div>' +
    (privOn(ctx) && ctx.opt.priv.assume
      ? '<div class="abs" style="left:56pt;top:388pt;width:520pt;font-size:12pt;line-height:1.35;word-break:keep-all;color:#C3D2FF;border-top:0.75pt solid rgba(255,255,255,.28);padding-top:9pt">' +
        '<div style="display:flex;gap:10pt;align-items:flex-start;margin-bottom:6pt"><span class="pill" style="background:#fff;color:var(--blue);padding:0 9pt;flex:none">표준 가정</span><span style="color:#fff;font-weight:600">' + E(ctx.opt.priv.assume) + '</span></div>' + E(ctx.risk) + '</div></section>'
      : '<div class="abs" style="left:56pt;top:400pt;width:600pt;font-size:12pt;line-height:1.3;color:#C3D2FF;border-top:0.75pt solid rgba(255,255,255,.28);padding-top:9pt">' + E(ctx.risk) + '</div></section>'));
}
function closing(ctx, head, checks, steps) {
  var rows = checks.map(function (c) {
    return '<div style="display:flex;align-items:center;gap:12pt;background:rgba(255,255,255,.10);border:0.75pt solid rgba(255,255,255,.22);border-radius:12pt;padding:10pt 14pt;margin-bottom:9pt">' +
      '<div class="chk">' + icon('i-check', 13) + '</div><div style="width:82pt;font-size:12pt;font-weight:600;color:#C3D2FF">' + E(c[0]) + '</div>' +
      '<div style="flex:1;font-size:13pt;font-weight:600;color:#fff;line-height:1.35">' + E(c[1]) + '</div></div>';
  }).join('');
  var st = steps.map(function (s, k) {
    return '<div style="display:flex;gap:12pt;align-items:flex-start;padding:10pt 0;' + (k < steps.length - 1 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' + circ(k + 1) +
      '<div><div style="font-size:14pt;font-weight:700">' + E(s[0]) + '</div><div style="font-size:12pt;color:var(--t2);margin-top:3pt;line-height:1.4">' + E(s[1]) + '</div></div></div>';
  }).join('');
  var pg = ctx.pages.length + 1;
  ctx.pages.push('<section class="slide blue"><svg class="patt" width="960pt" height="540pt" viewBox="0 0 960 540"><rect width="960" height="540" fill="url(#dots)" opacity=".5"/>' +
    '<circle cx="80" cy="520" r="170" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="34"/></svg>' +
    '<div class="abs" style="left:56pt;top:48pt;display:flex;align-items:center;gap:10pt"><span class="pill" style="background:#fff;color:var(--blue)">Conclusion</span>' +
    '<span style="font-size:12pt;font-weight:600;letter-spacing:2pt;color:#C3D2FF">CONCLUSION &amp; NEXT STEPS</span>' + (privOn(ctx) && asmHit(ctx, 'CONCLUSION', [head.join(' '), checks.map(function (c) { return c.join(' '); }).join(' '), steps.map(function (s) { return s.join(' '); }).join(' ')], function () { return true; }) ? '<span class="pill p-risk asm" style="padding:0 9pt;line-height:1.3">표준 가정 포함</span>' : '') + '</div>' +
    '<div class="abs" style="left:56pt;top:92pt;width:500pt;font-size:28pt;font-weight:800;letter-spacing:-.8pt;line-height:1.25;color:#fff">' + head.map(E).join('<br>') + '</div>' +
    '<div class="abs" style="left:56pt;top:196pt;width:500pt">' + rows + '</div>' +
    '<div class="abs" style="left:590pt;top:92pt;width:322pt;background:#fff;color:var(--ink);border-radius:16pt;box-shadow:0 6pt 18pt rgba(0,0,0,.18);padding:16pt 20pt">' +
    '<div style="display:flex;align-items:center;gap:8pt">' + icon('i-flag', 18) + '<span style="font-size:12pt;font-weight:700;letter-spacing:2pt;color:var(--blue)">NEXT STEPS</span></div>' + st + '</div>' +
    '<div class="abs" style="left:56pt;top:446pt;width:856pt;font-size:12pt;line-height:1.3;color:#C3D2FF;border-top:0.75pt solid rgba(255,255,255,.28);padding-top:9pt">' + E(ctx.risk) + '</div>' +
    '<div class="abs pg" style="right:48pt;top:30pt;background:#fff;color:var(--blue)">' + (pg < 10 ? '0' : '') + pg + '</div></section>');
}


var TXC = { '8E753E': 'var(--blue)', '49342E': 'var(--ink)', '595959': 'var(--t2)', '9A9A9A': 'var(--t3)', '262626': 'var(--ink)', '3F3A33': 'var(--t2)',
  'C00000': 'var(--risk)', 'FFFFFF': '#fff', 'B09250': 'var(--blue2)', '5A3E33': 'var(--ink)', '7A5A48': 'var(--blue)', 'D9C3A5': '#BCCBF3', '8A8279': 'var(--t3)', '6B635A': 'var(--t2)' };
var FILLC = { '49342E': 'var(--blue)', '5A3E33': 'var(--blue-d)', '513528': 'var(--blue-d)', '7A5A48': 'var(--blue)', '9B7B63': 'var(--blue2)', 'B09250': 'var(--blue2)',
  '8E753E': 'var(--blue)', 'A8853E': 'var(--blue)', 'BBA088': 'var(--blue3)', 'C9A96B': 'var(--blue3)', 'C1A872': 'var(--blue3)', 'C3AA76': 'var(--blue3)', 'B3A285': 'var(--blue3)',
  'B5A48E': 'var(--blue3)', 'CFC4B2': 'var(--blue4)', 'D4BF8F': 'var(--blue4)', 'E2D3BA': 'var(--blue4)', 'D9C3A5': 'var(--blue4)', 'E8DFCD': 'var(--blue5)', 'E6D7B0': 'var(--blue5)',
  'DDD9C4': 'var(--blue5)', 'F0E8D8': 'var(--tint)', 'EFE7DA': 'var(--tint)', 'F5EFE2': 'var(--tint)', 'F3ECDC': 'var(--tint)', 'F7F4EE': '#fff', 'FFFFFF': '#fff', 'C00000': 'var(--risk)', 'FBEAEA': 'var(--risktint)' };
function tc(c) { c = String(c || '262626').replace('#', '').toUpperCase(); return TXC[c] || 'var(--ink)'; }
function fc(c) { c = String(c || '').replace('#', '').toUpperCase(); return FILLC[c] || 'var(--blue3)'; }
function dark(c) { c = String(c || '').replace('#', '').toUpperCase(); return /^(49342E|5A3E33|513528|7A5A48|8E753E|A8853E)$/.test(c); }

var KPI_SPLIT = false;
function kpiRow(t, x, y, w, h) {   
  var rows = t.rows.slice(1), hl = t.hl || [], n = rows.length, gap = 10, cw = (w - gap * (n - 1)) / n;
  return '<div class="nd" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;display:flex;gap:' + gap + 'pt">' + rows.map(function (r, i) {
    var vi = t.vi, ni = 3 - vi - 0, on = hl.indexOf(i + 1) >= 0, v = String(r[vi] || ''), m = /^(.*?)(원|억원|억|%)?$/.exec(v), unit = m && m[2] ? m[2] : '', val = m ? m[1] : v, nt0 = r[vi === 1 ? 2 : 1] || '';
    if (KPI_SPLIT && v.length > 12 && v.indexOf(' (') > 0) { var kk = v.indexOf(' ('); nt0 = v.slice(kk + 1) + (nt0 ? ', ' + nt0 : ''); val = v.slice(0, kk); unit = ''; }   
    return '<div style="flex:1;min-width:0">' + kpi(on ? 'i-check' : 'i-doc', E(r[0]), E(val), unit, E(nt0), on, null, 20) + '</div>';
  }).join('') + '</div>';
}
function cardTable(t, x, y, w, h) {   
  var rows = t.rows, head = rows[0], body = rows.slice(1), cw = t.colW || head.map(function () { return 1; }), tot = cw.reduce(function (a, b) { return a + b; }, 0);
  var al = t.al || [], hl = t.hl || [], inner = w - 28, rh = Math.max(18, Math.min(30, (h - 24 - 22) / body.length));
  var cells = function (r, kind) {
    return r.map(function (c, j) {
      var st = 'width:' + (cw[j] / tot * inner).toFixed(1) + 'pt;flex:none;padding:0 4pt;box-sizing:border-box;text-align:' + (al[j] || (j ? 'right' : 'left')) + ';white-space:normal;line-height:1.3;word-break:keep-all';
      return '<div class="' + (j ? 'num' : '') + '" style="' + st + '">' + E(c) + '</div>';
    }).join('');
  };
  var o = '<div class="card" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;padding:10pt 14pt">' +
    '<div style="display:flex;font-size:12pt;font-weight:600;color:var(--t3);height:22pt;align-items:center;border-bottom:1pt solid var(--blue4)">' + cells(head) + '</div>';
  body.forEach(function (r, i) {
    var on = hl.indexOf(i + 1) >= 0;
    o += '<div style="display:flex;align-items:center;min-height:' + rh.toFixed(1) + 'pt;padding:2pt 0;font-size:12pt;' + (on ? 'background:var(--tint);color:var(--blue);font-weight:700;border-radius:8pt' : 'color:var(--ink)') +
      (i < body.length - 1 && !on ? ';border-bottom:0.75pt dashed var(--rule)' : '') + '">' + cells(r) + '</div>';
  });
  return o + '</div>';
}
function routeLayer(nodes, links, s, ox, oy) {
  var o = '', P = function (v) { return (v * s).toFixed(1); };
  nodes.forEach(function (x) {
    if (x.sh === 'tbl') return;
    var L = ox + x.x * s, T = oy + x.y * s, W = x.w * s, H = (x.h || 0.26) * s;
    var pos = 'left:' + L.toFixed(1) + 'pt;top:' + T.toFixed(1) + 'pt;width:' + W.toFixed(1) + 'pt;height:' + H.toFixed(1) + 'pt;';
    if (x.st === 'text') {
      var fs = Math.max(12, +x.fs || 12), al = x.al === 'right' ? 'flex-end' : (x.al === 'left' ? 'flex-start' : 'center');
      o += '<div class="tx" style="' + pos + 'justify-content:' + al + ';text-align:' + (x.al || 'center') + ';font-size:' + fs + 'pt;font-weight:' + (x.bold ? 700 : (fs >= 13 ? 600 : 400)) + ';color:' + tc(x.tc) + '">' + E(x.t) + '</div>';
      return;
    }
    var hasT = (x.t != null && String(x.t) !== '') || x.n;
    if (!hasT && (x.h || 0) <= 0.035) { o += '<div class="nd" style="' + pos + 'height:0;border-top:1pt solid var(--blue4)"></div>'; return; }
    if (!hasT && (x.h || 0) <= 0.2) { o += '<div class="nd" style="' + pos + 'border-radius:' + (H / 2).toFixed(1) + 'pt;background:' + fc(x.fill) + '"></div>'; return; }
    var fill = String(x.fill || 'FFFFFF').toUpperCase(), isDark = dark(fill), ell = x.sh === 'ell';
    var bg, bd = '', col = 'var(--ink)', ncol = 'var(--t2)';
    if (isDark) { bg = 'linear-gradient(135deg,#1747C0,#0A339A)'; col = '#fff'; ncol = '#DCE5FF'; }
    else if (fill === 'F0E8D8' || fill === 'EFE7DA' || fill === 'F5EFE2') { bg = 'var(--tint)'; bd = 'border:1pt solid var(--blue3);'; col = 'var(--blue-d)'; ncol = 'var(--blue)'; }
    else if (fill === 'F7F4EE' && !hasT) { bg = '#fff'; }
    else if (fill === 'F7F4EE') { bg = 'var(--tint)'; col = 'var(--blue-d)'; }
    else { bg = '#fff'; bd = x.line ? 'border:1pt solid var(--blue4);' : ''; }
    var dash = x.sh === 'dash' || x.st === 'dash' || x.dash;
    if (dash) bd = 'border:1.2pt dashed var(--blue3);';
    var rad = ell ? (Math.min(W, H) / 2) : Math.min(12, H / 2);
    var sh = (bg === '#fff' && !ell) ? 'box-shadow:var(--shadow);' : '';
    var inner = '';
    if (x.n) inner += '<div style="position:absolute;left:' + (x.al === 'left' || x.pad ? 10 : 0) + 'pt;right:' + (x.al === 'left' || x.pad ? 10 : 0) + 'pt;top:' + P(x.ny || 0.05) + 'pt;font-size:12pt;font-weight:600;color:' + ncol + ';text-align:' + (x.al === 'left' ? 'left' : 'center') + ';white-space:nowrap">' + E(x.n) + '</div>';
    if (x.t != null && String(x.t) !== '') {
      var ty = x.n ? (x.ty || 0.3) * s : 0, th = x.n ? (x.th || (x.h - (x.ty || 0.3))) * s : H, fs2 = Math.max(12, +x.fs || 12);
      inner += '<div style="position:absolute;left:' + (x.al === 'left' ? 10 : 2) + 'pt;right:' + (x.al === 'left' ? 10 : 2) + 'pt;top:' + ty.toFixed(1) + 'pt;height:' + th.toFixed(1) + 'pt;display:flex;align-items:center;justify-content:' +
        (x.al === 'left' ? 'flex-start' : 'center') + ';text-align:' + (x.al === 'left' ? 'left' : 'center') + ';white-space:pre-wrap;line-height:1.3;font-size:' + fs2 + 'pt;font-weight:' + (ell ? 700 : 600) + ';color:' + (ell ? '#fff' : col) + '">' + E(x.t) + '</div>';
    }
    if (ell) bg = 'var(--blue)';
    o += '<div class="nd" style="' + pos + 'border-radius:' + rad.toFixed(1) + 'pt;background:' + bg + ';' + bd + sh + '">' + inner + '</div>';
  });
  if (links && links.length) {
    var sv = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376">';
    links.forEach(function (l) {
      var pts = (l.pts || []).map(function (p) { return [ox + p[0] * s, oy + p[1] * s]; }); if (pts.length < 2) return;
      var colr = l.lc ? (String(l.lc).toUpperCase() === 'B09250' ? '#3A62D0' : '#7C98E4') : (l.st === 'back' ? '#3A62D0' : '#0B3AA8');
      var dsh = (l.st === 'opt' || l.st === 'back') ? ' stroke-dasharray="4 3"' : '';
      if (CURVE_LINKS) { sv += curveLink1(pts, colr, !!dsh, l.arrow); return; }
      sv += '<polyline points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" fill="none" stroke="' + colr + '" stroke-width="1.5"' + dsh + '/>';
      if (l.arrow !== false) {
        var a = pts[pts.length - 2], b = pts[pts.length - 1], ang = Math.atan2(b[1] - a[1], b[0] - a[0]), z = 6;
        var p1 = [b[0] - z * Math.cos(ang - 0.45), b[1] - z * Math.sin(ang - 0.45)], p2 = [b[0] - z * Math.cos(ang + 0.45), b[1] - z * Math.sin(ang + 0.45)];
        sv += '<polygon points="' + [b, p1, p2].map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" fill="' + colr + '"/>';
      }
    });
    o = sv + '</svg>' + o;
  }
  return o;
}
function generic(ctx, sl) {
  var R = ctx.R, nt = R.notes(sl), order = nt.__order, rb = (sl.blocks || []).filter(function (b) { return b.t === 'route'; })[0];
  var tkey = ['시사점', '결론'].filter(function (k) { return nt[k] && nt[k].length <= 46; })[0];
  var fixHead = function (t) { return String(t).replace(/^본 자료 = /, '이 자료 = '); };
  Object.keys(nt).forEach(function (k) { if (k !== '__order') nt[k] = fixHead(nt[k]); });
  var title = tkey ? emNum(nt[tkey]) : emNum(sl.title);
  var strip = order.filter(function (k) { return k !== tkey; }).map(function (k) { return [k.charAt(0) === '_' ? '' : k, nt[k]]; });
  var stripH = strip.length ? 14 + 18 * strip.length : 0, avail = 376 - (stripH ? stripH + 8 : 0);
  var body = '';
  if (rb) {
    var nodes = (rb.nodes || []).filter(function (x, i) { return !(i === 0 && x.st === 'text' && x.y === 0 && String(x.t) === String(sl.sub || '')); });
    var top0 = nodes.length ? Math.min.apply(null, nodes.map(function (x) { return x.sh === 'tbl' ? (x.box ? x.box[0] : 0) : x.y; })) : 0;
    var hIn = (rb.h || 4.25) - top0, s = Math.min(86.4, avail / hIn), ox = (864 - 10 * s) / 2, oy = -top0 * s;
    body += routeLayer(nodes, rb.links, s, ox, oy);
    nodes.forEach(function (t) {
      if (t.sh !== 'tbl') return;
      var b = t.box || [top0, rb.h || 4.25], y = oy + b[0] * s + 4, h = (b[1] - b[0]) * s - 6, x = ox + (t.x || 0) * s, w = (t.w || 10) * s;
      var head = t.rows[0] || [];
      var vi = /결과|금액|세액/.test(head[2] || '') ? 2 : (/결과|금액|세액/.test(head[1] || '') ? 1 : 0);
      if (head.length === 3 && t.rows.length <= 6 && h >= 96 && vi) body += kpiRow(Object.assign({ vi: vi }, t), x, y, w, h);
      else body += cardTable(t, x, y, w, h);
    });
  } else {
    var tt = R.tbl(sl); if (tt) body += cardTable({ rows: tt, colW: null }, 0, 0, 864, avail);
  }
  if (strip.length) body += '<div class="strip" style="height:' + stripH + 'pt">' + strip.map(function (p) { return '<div>' + (p[0] ? '<b>' + E(p[0]) + '</b>' : '') + E(p[1]) + '</div>'; }).join('') + '</div>';
  slide(ctx, { eyebrow: sl.title, title: title, sec: secOf(ctx, sl.title), body: body, sub: sl.sub, foot: '' });
}

function evidence(ctx, sl) {
  var R = ctx.R, rows = R.tbl(sl), nt = R.notes(sl), head = rows[0], body = rows.slice(1), per = 5;
  for (var p = 0; p * per < body.length; p++) {
    var part = body.slice(p * per, (p + 1) * per), html = '';
    part.forEach(function (r, i) {
      html += '<div class="card" style="left:0;top:' + (i * 62) + 'pt;width:864pt;height:54pt;padding:8pt 16pt;display:flex;align-items:center;gap:14pt">' +
        '<span class="pill p-blue" style="flex:none;min-width:110pt;text-align:center">' + E(r[0]) + '</span>' +
        '<div style="flex:1;min-width:0"><div style="font-size:12pt;color:var(--t3)">' + E(head[1]) + '</div><div style="font-size:12pt;font-weight:600;line-height:1.3">' + E(r[1]) + '</div></div>' +
        '<div style="width:300pt;flex:none"><div style="font-size:12pt;color:var(--t3)">' + E(head[2]) + '</div><div style="font-size:12pt;color:var(--t2);line-height:1.3">' + E(r[2]) + '</div></div></div>';
    });
    var last = (p + 1) * per >= body.length;
    if (last) html += '<div class="strip" style="height:50pt">' + nt.__order.map(function (k) { return '<div><b>' + E(k) + '</b>' + E(nt[k]) + '</div>'; }).join('') + '</div>';
    slide(ctx, { eyebrow: sl.title + (body.length > per ? ' (' + (p + 1) + '/' + Math.ceil(body.length / per) + ')' : ''), title: emNum(nt['시사점'] || sl.title), sec: ctx.C.secs.length - 1, body: html, sub: sl.sub });
  }
}


function deck5(ctx) {
  var R = ctx.R, D = ctx.D;
  var p2 = must(R.find(/^의사결정 구조도/), '의사결정 구조도'), p17 = must(R.find(/^⑥ 총 세금/), '⑥ 총 세금'), p18 = must(R.find(/^핵심 근거/), '핵심 근거');
  var pA = R.find(/^②-a .*이전 시/);
  var K = ['a 증여특례', 'b 일반증여', '› b 대안 (자금출처 부재)', 'c 특정법인 증여', 'd 양수도 미지급', '그대로 두면'], RW = {};
  K.forEach(function (k) { RW[k] = R.row(p17, k); });
  var st1 = R.nd(p2, '① 주식가치평가'), ps = must(/([\d,]+원)/.exec(st1.t), '1주 평가액')[1], pv = must(/평가액\n([\d.,]+억)/.exec(st1.t), '평가액')[1];
  var meth = R.nd(p2, null, /^이전 방법/).t, pm = must(/\(([\d.]+%) ([\d,]+주)\)/.exec(meth), '이전 지분'), pct = pm[1], shs = pm[2];
  var box = R.nd(p2, null, /^총 세금 최소/).t;
  var mDiv = must(/초과배당 연 ([\d.]+억)/.exec(box), '초과배당')[1], mKeep = must(/그대로 두면 상속세 ([\d.]+) \/ ([\d.]+억)/.exec(box), '그대로 두면');
  var altAdd = must(/b 대안 = 자금출처 부재 시 (\+[\d.]+억)/.exec(box), 'b 대안')[1];
  var rank = R.note(p2, '순위'), save = R.note(p2, '절감'), pre = R.note(p2, '전제');
  var s20 = must(/([\d.]+억 ~ [\d.]+억) \(20년\)/.exec(save), '절감 20년')[1], s30 = must(/([\d.]+억 ~ [\d.]+억) \(30년\)/.exec(save), '절감 30년')[1];
  var c = RW['c 특정법인 증여'], vmax = num(RW['그대로 두면'][4]), bal = RW['› b 대안 (자금출처 부재)'];
  var title = String(D.deckTitle || ''), k = title.indexOf(ctx.C.split);
  cover(ctx, k > 0 ? [title.slice(0, k), title.slice(k + 1)] : [title], ctx.C.sub({ pct: pct }));
  
  var body = '<div class="abs" style="left:0;top:0;width:864pt;height:132pt;display:grid;grid-template-columns:repeat(4,1fr);gap:12pt">' +
    kpi('i-coin', '1주 평가액 (① 주식가치평가)', ps.replace('원', ''), '원', E(pct + ' (' + shs + ') 평가액 ' + pv)) +
    kpi('i-doc', '그대로 두면 — 30년 상속세', mKeep[2].replace('억', ''), '억', '30년 + 1일 기준<br>20년 + 1일 ' + mKeep[1] + '억') +
    kpi('i-chart', '초과배당 (c, d 병행)', '연 ' + mDiv.replace('억', ''), '억', E(pre.replace('c, d 초과배당 연 ' + mDiv + ', ', ''))) +
    kpi('i-gift', 'c 특정법인 — 30년 총 세금', c[4].replace('억', ''), '억', '20년 + 1일 ' + c[3] + '<br>절감 ' + c[5] + ' (30년)', true, '1위') + '</div>';
  body += card(0, 146, 486, 230, ch('i-shield', '핵심 판단') + '<div style="margin-top:6pt">' + keys([
    (function () { var m = /^(.*?1위), (.*)$/.exec(rank); return m ? [E('순위 — ' + m[1]), E(m[2])] : [E('순위'), E(rank)]; })(),
    [E('절감 — 그대로 대비 ' + s30 + ' (30년)'), E('20년 기준 ' + s20)],
    [E('b 대안 — 자금출처 부재 시 ' + altAdd), E('총 세금 ' + bal[3] + ' / ' + bal[4])]]) + '</div>');
  body += card(498, 146, 366, 230, ch('i-scale', '총 세금 (30년 + 1일)', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:10pt">' + minibars([
    ['그대로 두면', RW['그대로 두면'][4], false, 'var(--blue5)', false], ['a 증여특례', RW['a 증여특례'][4], false, 'var(--blue3)', false],
    ['b 일반증여', RW['b 일반증여'][4], false, 'var(--blue3)', false], ['c 특정법인', c[4], true, 'var(--blue)', true],
    ['d 양수도', RW['d 양수도 미지급'][4], false, 'var(--blue3)', false]], vmax) + '</div>');
  slide(ctx, { eyebrow: 'Executive Summary', title: emNum('총 세금 최소 = c 특정법인 증여, 그대로 대비 30년 ' + c[5] + ' 절감').replace('c 특정법인 증여', '<em>c 특정법인 증여</em>'), chap: '핵심 요약', sec: 0, body: body, foot: '<b>전제</b>  ' + E(pre) });
  
  var N2 = R.nodes(p2);
  function rc(letter, key, tagN, name, hl) {
    var r = RW[key], t0 = must(N2.filter(function (x) { return x.n === tagN; })[0], tagN), y = t0.y;
    var at = function (xx) { return must(N2.filter(function (x) { return Math.abs(x.y - y) < 0.01 && Math.abs(x.x - xx) < 0.01; })[0], tagN + ' 줄 x' + xx); };
    var third = at(4.51), rk = must(N2.filter(function (x) { return x.sh === 'ell' && Math.abs(x.y - y - 0.07) < 0.02; })[0], tagN + ' 순위').t;
    return { letter: letter, tag: t0.t, name: name, rank: rk + '위', two: r[3], three: r[4], sec: at(3.14).t, third: [third.n, third.t], f45: at(5.98).t, hl: hl };
  }
  var A = [rc('a', 'a 증여특례', 'a 증여특례', '증여특례'), rc('b', 'b 일반증여', 'b 일반증여', '일반증여'), rc('c', 'c 특정법인 증여', 'c 특정법인 증여', '특정법인 증여', true), rc('d', 'd 양수도 미지급', 'd 양수도 미지급', '양수도 미지급')];
  body = stepStrip([['① 주식가치 1주 ' + ps + ', ' + pct + ' ' + pv, true], ['② 이전 시 세액'], ['③ 이전 뒤 비용'], ['④ 20년 / ⑤ 30년 상속세'], ['⑥ 총 세금, 순위']]);
  A.forEach(function (a, i) {
    body += routeCard(i * 220, 204, 238, { letter: a.letter, tag: E(a.tag), name: a.name, ranks: [a.rank], bigLab: '⑥ 총 세금 (20년 / 30년)',
      big: a.three.replace('억', '') + '<span style="font-size:14pt;font-weight:700">억</span>', bigSub: '20년 + 1일 ' + a.two, frac: num(a.three) / vmax,
      rows: [['②-' + a.letter + ' 이전 시 세액', a.sec], [E('③ ' + a.third[0]), E(a.third[1])], ['④ / ⑤ 상속세', a.f45]], hl: a.hl, badge: a.hl ? '총 세금 최소' : null });
  });
  var bt = R.nd(p2, '가산금 + 매각세').t, b45 = N2.filter(function (x) { return x.n === '④ / ⑤'; })[2].t;
  body += card(0, 296, 486, 80, '<div style="display:flex;gap:12pt;align-items:center">' + icb('i-coin') + '<div><div style="font-size:14pt;font-weight:700">' +
    E('b 대안 — 자금출처 부재 (' + R.nd(p2, '②-b 대안').t + ', 가산금 + 매각세 ' + bt + ')') + '</div><div style="font-size:12pt;color:var(--t2);margin-top:3pt">' +
    E('④ / ⑤ 상속세 ' + b45 + ', ⑥ 총 세금 ' + bal[3] + ' / ' + bal[4]) + '</div></div></div>');
  body += card(498, 296, 366, 80, '<div style="display:flex;gap:12pt;align-items:center">' + icb('i-scale') + '<div><div style="font-size:14pt;font-weight:700">' +
    E('그대로 두면 상속세 ' + mKeep[1] + ' / ' + mKeep[2]) + '</div><div style="font-size:12pt;color:var(--t2);margin-top:3pt">' + E('c 특정법인 증여 = 초과배당 연 ' + mDiv + ' 병행') + '</div></div></div>');
  var p2slide = { eyebrow: p2.title, title: emNum('4안 중 c 특정법인 증여 총 세금 최소 — 20년 ' + c[3] + ', 30년 ' + c[4]).replace('c 특정법인 증여', '<em>c 특정법인 증여</em>'), sec: 0, body: body,
    foot: '<b>기준</b>  ' + E(p2.sub || '') };
  
  var rows17 = [['그대로 두면', RW['그대로 두면'], 'var(--blue5)', false, false], ['a 증여특례', RW['a 증여특례'], 'var(--blue3)', false, false], ['b 일반증여', RW['b 일반증여'], 'var(--blue3)', false, false],
    ['b 대안 (자금출처 부재)', bal, 'var(--blue3)', false, true], ['c 특정법인 증여', c, 'var(--blue)', true, false], ['d 양수도 미지급', RW['d 양수도 미지급'], 'var(--blue3)', false, false]];
  var bars = rows17.map(function (q) { var r = q[1], hl = q[3], sv = r[5];
    return '<div style="display:flex;align-items:center;gap:10pt;height:46pt;border-bottom:0.75pt dashed var(--rule)"><div style="width:132pt;font-size:13pt;font-weight:' + (hl ? 700 : 500) + ';color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + q[0] + '</div>' +
      bar(num(r[4]) / vmax, q[2], 16, 'var(--tint)', q[4]) + '<div class="num" style="width:64pt;text-align:right;font-size:14pt;font-weight:800;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + r[4] + '</div>' +
      '<div style="width:96pt;text-align:right">' + (sv && sv !== '—' ? pill('절감 ' + sv, hl ? 'p-blue' : 'p-tint') : pill('기준', 'p-grey')) + '</div></div>'; }).join('');
  var b17 = card(0, 0, 532, 376, ch('i-chart', '30년 + 1일 총 세금', pill('억원, 절감 = 그대로 대비', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:6pt">' + bars + '</div>');
  var ord = [['a', '증여특례', RW['a 증여특례']], ['b', '일반증여', RW['b 일반증여']], ['c', '특정법인 증여', c], ['d', '양수도 미지급', RW['d 양수도 미지급']]]
    .sort(function (p, q) { return num(p[2][6]) - num(q[2][6]); });
  var rk = ord.map(function (o, i) { var r = o[2], hl = i === 0;
    return '<div style="display:flex;gap:10pt;align-items:center;padding:7pt 0;' + (i < 3 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' + circ(String(r[6]).replace('위', ''), !hl) +
      '<div style="flex:1"><div style="display:flex;justify-content:space-between"><span style="font-size:14pt;font-weight:700;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + o[0] + ' ' + o[1] + '</span>' +
      '<span class="num" style="font-size:13pt;font-weight:700">' + r[3] + ' / ' + r[4] + '</span></div><div style="font-size:12pt;color:var(--t3);margin-top:1pt">② ' + r[1] + ' + ③ ' + E(r[2]) + '</div></div></div>'; }).join('');
  var sv17 = R.note(p17, '절감').split(', ');
  b17 += card(544, 0, 320, 376, ch('i-flag', '순위 — 20년 / 30년 + 1일') + '<div style="margin-top:4pt">' + rk + '</div>' +
    '<div style="margin-top:8pt;background:var(--tint);border-radius:10pt;padding:8pt 12pt;font-size:12pt;color:var(--t2);line-height:1.45">' +
    E('b 대안 : ' + bal[3] + ' / ' + bal[4] + ' (② ' + bal[1] + ' + ③ ' + bal[2] + ')') + '<br>' + E('그대로 두면 : ' + RW['그대로 두면'][3] + ' / ' + RW['그대로 두면'][4]) + '<br>' + E(sv17[sv17.length - 1]) + '</div>');
  var p17slide = { eyebrow: p17.title, title: emNum('총 세금 최소 = c 특정법인 증여 ' + c[4] + ' — 그대로 대비 ' + c[5] + ' 절감 (30년)'), sec: 4, body: b17, sub: p17.sub, foot: '<b>전제</b>  ' + E(R.note(p17, '전제')) };
  
  D.deck.forEach(function (sl) {
    if (sl.type !== 'content') return;
    if (sl === p2) return slide(ctx, p2slide);
    if (sl === p17) return slide(ctx, p17slide);
    if (sl === p18) return evidence(ctx, sl);
    generic(ctx, sl);
  });
  var imp18 = R.note(p18, '시사점'), todo18 = R.note(p18, '할 일').split(', ');
  var todoA = pA ? (R.notes(pA)['할 일'] || '') : '';
  closing(ctx, ['총 세금 최소 = c 특정법인 증여', '초과배당 연 ' + mDiv + ' 병행'],
    [['순위', rank], ['절감 (30년)', '그대로 대비 ' + s30], ['순위 좌우', imp18.replace('이 순위 좌우', '')]],
    [[todo18[0] || '정본 수령 후 재계산', '① 주식가치, ②-a 사업용자산비율, ②-d 취득가액'], [todo18[1] || '호별 판정 사전 질의', '③-c, d 초과배당 (§45의5①3의2호)'],
     ['승계 자녀 확정', todoA.split(', ')[1] || todoA]]);
}


function deck3(ctx) {
  var R = ctx.R, D = ctx.D;
  var p3 = must(R.find(/^의사결정 구조도/), '의사결정 구조도'), p5 = must(R.find(/^② 법인전환 비용/), '② 법인전환 비용'),
    p18 = must(R.find(/^⑧ 총비용/), '⑧ 총비용'), p19 = must(R.find(/^핵심 근거/), '핵심 근거');
  var T18 = R.tbl(p18), RW = {}; T18.slice(1).forEach(function (r) { RW[r[0]] = r; });
  var pick = function (re) { return must(T18.filter(function (r) { return re.test(r[0]); })[0], '⑧ 표 ' + re); };
  var ra = pick(/^a /), rb = pick(/^b /), rcc = pick(/^c /), rk = pick(/^그대로/);
  var mvs = (R.nd(p3, '① 부동산').t.match(/[\d.,]+억/g) || []); must(mvs[2], '① 부동산 시가·취득가·채무');
  var mv = mvs[0], acq = mvs[1], debt = mvs[2];
  var imp5 = R.note(p5, '시사점'), m5 = imp5.match(/[\d.]+억/g) || []; must(m5[2], '② 시사점 명목·회수·실질');
  var nom = m5[0], back = m5[1], real = m5[2];
  var fund = R.note(p3, '자금출처'), ref18 = R.note(p18, '참고'), comp18 = R.note(p18, '구성'), rank18 = R.note(p18, '순위');
  var save = must(/([\d.]+억) 절감/.exec(rank18), '절감')[1], rich = {}; (ref18.match(/[abc] [\d.]+억/g) || []).forEach(function (t) { rich[t[0]] = t.slice(2); });
  var vmax = num(rk[5]);
  var title = String(D.deckTitle || ''), k = title.indexOf(ctx.C.split);
  cover(ctx, k > 0 ? [title.slice(0, k), title.slice(k + 1)] : [title], ctx.C.sub({}));
  var body = '<div class="abs" style="left:0;top:0;width:864pt;height:132pt;display:grid;grid-template-columns:repeat(4,1fr);gap:12pt">' +
    kpi('i-building', '① 부동산 (시가)', mv.replace('억', ''), '억', E('취득가 ' + acq + ', 채무 ' + debt)) +
    kpi('i-doc', '그대로 두면 (30년 상속세)', rk[4].replace('억', ''), '억', E('20년 상속세 ' + rk[2])) +
    kpi('i-tool', '② 법인전환 비용 (명목)', nom.replace('억', ''), '억', E(back + ' 회수 → 실질 ' + real)) +
    kpi('i-gift', 'c 특정법인 증여 — 30년 총비용', rcc[5].replace('억', ''), '억', E('그대로 대비 ' + save + ' 절감'), true, '1위') + '</div>';
  var fp = fund.split(', ');
  body += card(0, 146, 486, 230, ch('i-shield', '핵심 판단') + '<div style="margin-top:6pt">' + keys([
    [E('순위 — ' + rank18.split(' (30년)')[0]), '자녀 자금출처 없음 기준 (30년 총비용)'], [E(fp[0]), E(fp.slice(1).join(', '))],
    [E('자녀 자금 충분하면 b ' + (rich.b || '')), E('c ' + (rich.c || '') + ', a ' + (rich.a || '') + ' (30년 총비용)')]]) + '</div>');
  body += card(498, 146, 366, 230, ch('i-scale', '30년 총비용', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:14pt">' + minibars([
    ['그대로 두면', rk[5], false, 'var(--blue5)', false], ['a 개인 유지', ra[5], false, 'var(--blue3)', false], ['b 직접증여', rb[5], false, 'var(--blue3)', false], ['c 특정법인', rcc[5], true, 'var(--blue)', true]], vmax) + '</div>');
  slide(ctx, { eyebrow: 'Executive Summary', title: emNum('30년 총비용 최소 = c 특정법인 증여 ' + rcc[5] + ', 그대로 대비 ' + save + ' 절감'), chap: '핵심 요약', sec: 0, body: body,
    foot: '<b>기준</b>  ' + E(ctx.ymd + ', 자녀 자금 = c 증여세만큼 (자금출처 없음), 금액 = 억원') });
  
  var N3 = R.nodes(p3), rowsY = N3.filter(function (x) { return x.sh === 'round' && /^[abc] /.test(x.n || ''); }).sort(function (p, q) { return p.y - q.y; }).map(function (x) { return x.y; });
  must(rowsY[2], '3경로 줄');
  var names = [['a', '개인 명의 유지', ra], ['b', '법인전환 + 주식 직접증여', rb], ['c', '법인전환 + 특정법인 증여', rcc]];
  body = stepStrip([['① 부동산 시가 ' + mv, true], ['② 전환비용'], ['③ 이월과세'], ['④ 5년 후 증여재산'], ['⑤ 세액'], ['상속세'], ['⑧ 30년 총비용']]);
  rowsY.slice(0, 3).forEach(function (ny, i) {
    var cs = N3.filter(function (x) { return Math.abs(x.y - ny) < 0.01 && x.x > 1.9; }).sort(function (p, q) { return p.x - q.x; });
    var sm = N3.filter(function (x) { return Math.abs(x.y - ny - 0.47) < 0.02 && x.st === 'text'; }).sort(function (p, q) { return p.x - q.x; }).map(function (x) { return x.t; });
    var rr = N3.filter(function (x) { return x.sh === 'ell' && Math.abs(x.y - ny - 0.23) < 0.02; }).sort(function (p, q) { return p.x - q.x; }).map(function (x) { return x.t; });
    must(cs[6], '3경로 칸'); must(sm[1], '자금출처 있음 숫자'); must(rr[1], '순위 두 개');
    var conv = cs[1], mov = cs[2], gift = cs[3], tax = cs[4], inh = cs[5], tot = cs[6], nm = names[i], hl = nm[0] === 'c';
    var cv = conv.n === '②' ? conv.t : conv.t + ' (' + conv.n + ')', mvv = mov.n === '③ 이연' ? mov.t + ' 이연' : mov.t + ' (' + mov.n + ')';
    body += routeCard(i * 292, 280, 270, { letter: nm[0], tag: E(String(cs[0].t).replace(/\n/g, ' ')), name: nm[1], ranks: ['없음 ' + rr[0] + '위', '있음 ' + rr[1] + '위'], bigLab: '',
      big: tot.t.replace('억', '') + '<span style="font-size:14pt;font-weight:700">억</span>', bigSub: E('⑧ 30년 총비용, 자금출처 ' + sm[1] + '억'), frac: num(tot.t) / vmax,
      rows: [['② 전환비용', E(cv)], ['③ 이월과세', E(mvv)], ['④ 5년 후 증여재산', E(String(gift.n).replace('④ ', '') + ' ' + gift.t)], [E('⑤ 세액 (' + tax.n + ')'), E(tax.t + ', ' + sm[0])],
        ['상속세 20 / 30년', E(String(inh.t).replace(/\n/g, ' '))]], hl: hl, badge: hl ? '30년 최소' : null, tagBelow: true });
  });
  var yes = R.nd(p3, '있음').t, no = R.nd(p3, '없음').t;
  body += card(0, 322, 570, 54, '<div style="display:flex;gap:12pt;align-items:center;margin-top:-4pt">' + icb('i-people') + '<div style="font-size:13pt;font-weight:700">' +
    E('자금출처 없음 = ' + no.replace(/\n/g, ' ') + ', 있음 = ' + yes.replace(/\n/g, ' ')) + '</div></div>');
  body += card(584, 322, 280, 54, '<div style="display:flex;gap:12pt;align-items:center;margin-top:-4pt">' + icb('i-scale') + '<div style="font-size:14pt;font-weight:700">' +
    E('그대로 두면 ' + rk[5]) + ' <span style="font-size:12pt;font-weight:400;color:var(--t2)">' + E('(20년 ' + rk[2] + ')') + '</span></div></div>');
  var p3slide = { eyebrow: p3.title, title: emNum('3경로 중 c 특정법인 증여 30년 총비용 최소 ' + rcc[5]).replace('c 특정법인 증여', '<em>c 특정법인 증여</em>'), sec: 0, body: body,
    foot: '<b>기준</b>  ' + E('① 부동산 시가 ' + mv + ', 취득가 ' + acq + ', 채무 ' + debt + ', 금액 = 억원') };
  
  var bars = [['그대로 두면', rk, false], ['a 개인 명의 유지', ra, false], ['b 법인전환 + 주식 직접증여', rb, false], ['c 법인전환 + 특정법인 증여', rcc, true]].map(function (q) {
    var r = q[1], hl = q[2], f1 = num(r[1]) / vmax, f2 = num(r[4]) / vmax, sv = r[6];
    return '<div style="height:62pt;border-bottom:0.75pt dashed var(--rule);padding-top:6pt"><div style="display:flex;justify-content:space-between;align-items:center">' +
      '<span style="font-size:13pt;font-weight:' + (hl ? 700 : 600) + ';color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + q[0] + '</span><span style="display:flex;gap:8pt;align-items:center">' +
      '<span class="num" style="font-size:15pt;font-weight:800;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + r[5] + '</span>' + (sv && sv !== '—' ? pill('절감 ' + sv, hl ? 'p-blue' : 'p-tint') : pill('기준', 'p-grey')) + '</span></div>' +
      '<div style="display:flex;height:14pt;margin-top:6pt;border-radius:7pt;background:var(--tint);overflow:hidden"><div style="width:' + (f1 * 100).toFixed(2) + '%;background:' + (hl ? 'var(--blue)' : 'var(--blue3)') + '"></div>' +
      '<div style="width:' + (f2 * 100).toFixed(2) + '%;background:var(--blue5)"></div></div>' +
      '<div style="font-size:12pt;color:var(--t3);margin-top:3pt">' + E('이전비용 ' + r[1] + ' + 30년 상속세 ' + r[4]) + '</div></div>'; }).join('');
  var b18 = card(0, 0, 532, 376, ch('i-chart', '30년 총비용 = 이전비용 + 상속세', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:2pt">' + bars + '</div>');
  var ord = [['a', '개인 명의 유지', ra], ['b', '주식 직접증여', rb], ['c', '특정법인 증여', rcc]].sort(function (p, q) { return num(p[2][5]) - num(q[2][5]); });
  var rkk = ord.map(function (o, i) { var r = o[2], hl = i === 0;
    return '<div style="display:flex;gap:10pt;align-items:center;padding:7pt 0;' + (i < 2 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' + circ(i + 1, !hl) +
      '<div style="flex:1"><div style="display:flex;justify-content:space-between"><span style="font-size:14pt;font-weight:700;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + o[0] + ' ' + o[1] + '</span>' +
      '<span class="num" style="font-size:13pt;font-weight:700">' + r[5] + '</span></div><div style="font-size:12pt;color:var(--t3);margin-top:1pt">' + E('20년 총비용 ' + r[3] + ', 상속세 ' + r[2]) + '</div></div></div>'; }).join('');
  b18 += card(544, 0, 320, 376, ch('i-flag', '순위 — 30년 총비용') + '<div style="margin-top:4pt">' + rkk + '</div>' +
    '<div style="margin-top:8pt;background:var(--tint);border-radius:10pt;padding:8pt 12pt;font-size:12pt;color:var(--t2);line-height:1.45">' +
    E('그대로 두면 : 20년 ' + rk[3] + ', 30년 ' + rk[5]) + '<br>' + E(ref18) + '<br>' + E(comp18) + '</div>');
  var p18slide = { eyebrow: p18.title, title: emNum('30년 총비용 c ' + rcc[5] + ' 1위 — 그대로 대비 ' + save + ' 절감'), sec: 4, body: b18, sub: p18.sub, foot: '<b>순위</b>  ' + E(rank18) };
  D.deck.forEach(function (sl) {
    if (sl.type !== 'content') return;
    if (sl === p3) return slide(ctx, p3slide);
    if (sl === p18) return slide(ctx, p18slide);
    if (sl === p19) return evidence(ctx, sl);
    generic(ctx, sl);
  });
  var imp19 = R.note(p19, '시사점'), todo19 = R.note(p19, '할 일').split(', ');
  closing(ctx, ['30년 총비용 최소 = c 특정법인 증여', '그대로 대비 ' + save + ' 절감'],
    [['순위 (30년)', rank18.split(' (30년)')[0]], ['자금 충분 시', 'b ' + (rich.b || '') + ', c ' + (rich.c || '') + ', a ' + (rich.a || '')], ['순위 좌우', imp19.replace('이 순위 좌우', '')]],
    [[todo19[0] || '정본 수령 후 재계산', '감정평가서, 취득가액 증빙, 대출 잔액, 임대차 계약서'], [todo19[1] || '이월과세 부채 사전답변', '조특법 §32 현물출자, 상증령 §54①④'], ['중과 제외 검토', R.note(p5, '할 일')]]);
}


var RD = {};
function T1(c) { var t = c && typeof c === 'object' ? (c.text == null ? '' : c.text) : (c == null ? '' : c); return typeof RD.rdTx === 'function' ? RD.rdTx(t) : String(t); }
function cellFill(c) { return c && typeof c === 'object' && c.fill ? String(c.fill).replace('#', '').toUpperCase() : ''; }
function table1(b) {
  var rows = b.rows || []; if (!rows.length) return '';
  var head = rows[0], body = rows.slice(1), n = head.length, cw = (b.colW && b.colW.length === n) ? b.colW : head.map(function () { return 1; }), tot = cw.reduce(function (a, x) { return a + x; }, 0);
  var headDark = head.every(function (c) { return /^(0A1C4E|49342E|513528|5A3E33)$/.test(cellFill(c)); });
  var cells = function (r, isHead) { return r.map(function (c, j) {
    var al = (c && c.align) || (j ? 'right' : 'left'); if (isHead) al = (al === 'left' || !j) ? 'left' : 'center';
    return '<div class="' + (j && !isHead ? 'num' : '') + '" style="width:' + (cw[j] / tot * 100).toFixed(2) + '%;flex:none;padding:3pt 6pt;box-sizing:border-box;text-align:' + al + ';white-space:pre-line;line-height:1.35;word-break:keep-all">' + E(T1(c)) + '</div>'; }).join(''); };
  var o = '<div class="blk" style="background:#fff;border-radius:14pt;box-shadow:var(--shadow);padding:8pt 14pt">';
  var rr = headDark ? body : rows;
  if (headDark) o += '<div class="rw hd" style="display:flex;font-size:12pt;font-weight:600;color:var(--t3);border-bottom:1pt solid var(--blue4)">' + cells(head, true) + '</div>';
  rr.forEach(function (r, i) {
    var f = r.map(cellFill).filter(Boolean)[0] || '', on = f && !/^(FFFFFF|F7F4EE)$/.test(f), b0 = r.some(function (c) { return c && c.bold; });
    o += '<div class="rw" style="display:flex;align-items:center;font-size:12pt;' + (on ? 'background:var(--tint);color:var(--blue-d);font-weight:700;border-radius:8pt' : (b0 ? 'font-weight:700;color:var(--ink)' : 'color:var(--ink)')) +
      (i < rr.length - 1 && !on ? ';border-bottom:0.75pt dashed var(--rule)' : '') + '">' + cells(r, false) + '</div>';
  });
  return o + '</div>';
}
function flow1(b) {
  var st = b.steps || [];
  return '<div class="blk" style="display:flex;gap:8pt;align-items:stretch">' + st.map(function (x, i) {
    var on = x.tone === 'on', no = x.tone === 'no';
    return (i ? '<div style="flex:none;align-self:center;color:var(--blue3);font-size:14pt;font-weight:700">→</div>' : '') +
      '<div style="flex:1;min-width:0;border-radius:12pt;padding:9pt 11pt;' + (on ? HL : (no ? 'background:var(--risktint);border:1pt solid var(--risk)' : 'background:#fff;border:1.2pt dashed var(--blue3)')) + '">' +
      '<div style="font-size:12pt;font-weight:700;color:' + (on ? '#DCE5FF' : (no ? 'var(--risk)' : 'var(--blue)')) + '">' + E(T1(x.n)) + '</div>' +
      '<div style="font-size:14pt;font-weight:700;margin-top:2pt;color:' + (on ? '#fff' : 'var(--ink)') + '">' + E(T1(x.t)) + '</div>' +
      '<div style="font-size:12pt;margin-top:4pt;line-height:1.35;color:' + (on ? '#DCE5FF' : 'var(--t2)') + '">' + E(T1(x.d)) + '</div></div>';
  }).join('') + '</div>';
}
function kvList(rows) { return (rows || []).map(function (r) { return '<div style="display:flex;justify-content:space-between;gap:10pt;padding:3pt 0;border-bottom:0.75pt dashed var(--rule);font-size:12pt"><span style="color:var(--t2)">' + E(T1(r[0])) + '</span><span class="num" style="font-weight:' + (r[2] ? 700 : 600) + ';text-align:right">' + E(T1(r[1])) + '</span></div>'; }).join(''); }
function tree1(b) {
  var k = (b.kids || [])[0] || {};
  return '<div class="blk" style="display:flex;gap:16pt;align-items:stretch">' +
    '<div style="width:250pt;flex:none;display:flex;flex-direction:column;gap:10pt">' +
    '<div style="border-radius:14pt;padding:14pt 16pt;' + HL + '"><div style="font-size:12pt;color:#DCE5FF">대표</div><div style="font-size:17pt;font-weight:800;margin-top:4pt;color:#fff">' + E(T1(b.root)) + '</div></div>' +
    '<div style="align-self:center;color:var(--blue);font-size:14pt;font-weight:700">▼ ' + E(T1(k.tg || '')) + '</div>' +
    '<div style="border-radius:14pt;padding:12pt 16pt;background:var(--tint);border:1pt solid var(--blue3)"><div style="font-size:15pt;font-weight:700;color:var(--blue-d)">' + E(T1(k.nm || '')) + '</div><div style="font-size:12pt;color:var(--t2);margin-top:4pt">' + E(T1(k.head || '')) + '</div></div></div>' +
    '<div style="flex:1;background:#fff;border-radius:14pt;box-shadow:var(--shadow);padding:10pt 16pt">' + kvList(k.rows) + '</div></div>';
}
function org1(b) {
  var lv = {}; (b.nodes || []).forEach(function (n) { (lv[n.lv] = lv[n.lv] || []).push(n); });
  var edge = function (id) { return (b.edges || []).filter(function (e) { return e.t === id; }).map(function (e) { return T1(e.lab); }).join(', '); };
  return '<div class="blk" style="display:flex;flex-direction:column;gap:6pt;align-items:center">' + Object.keys(lv).sort().map(function (k, i) {
    return (i ? '<div style="font-size:12pt;font-weight:700;color:var(--blue)">' + E(lv[k].map(function (n) { return edge(n.id); }).filter(Boolean)[0] || '▼') + '</div>' : '') +
      '<div style="display:flex;gap:14pt;justify-content:center;width:100%">' + lv[k].map(function (n) {
        var top = +k === 0;
        return '<div style="width:' + (lv[k].length > 1 ? 300 : 420) + 'pt;border-radius:14pt;padding:10pt 14pt;' + (top ? HL : 'background:#fff;box-shadow:var(--shadow)') + '">' +
          '<div style="font-size:14pt;font-weight:700;color:' + (top ? '#fff' : 'var(--blue-d)') + '">' + E(T1(n.nm)) + '</div>' + (n.ds ? '<div style="font-size:12pt;margin-top:3pt;color:' + (top ? '#DCE5FF' : 'var(--t2)') + '">' + E(T1(n.ds)) + '</div>' : '') +
          (n.rows ? '<div style="margin-top:4pt">' + kvList(n.rows) + '</div>' : '') + '</div>'; }).join('') + '</div>';
  }).join('') + '</div>';
}
function blocks1(bl) {
  return (bl || []).map(function (b) {
    if (!b) return '';
    if (b.t === 'caption') return b.pageCap ? '' : '<div class="blk" style="font-size:14pt;font-weight:700;color:var(--blue);display:flex;align-items:center;gap:8pt"><span style="width:4pt;height:14pt;border-radius:2pt;background:var(--blue);display:inline-block"></span>' + E(T1(b.text)) + '</div>';
    if (b.t === 'table' && b.rows && b.rows.length) return table1(b);
    if (b.t === 'note') return '<div class="blk" style="background:var(--tint);border-radius:12pt;padding:8pt 14pt;font-size:12pt;color:var(--t2);line-height:1.45;white-space:pre-line">' + E(T1(b.text)) + '</div>';
    if (b.t === 'flow') return flow1(b);
    if (b.t === 'tree') return tree1(b);
    if (b.t === 'org') return org1(b);
    return '';
  }).join('');
}

function dg1(u) {
  var ops = (u.sl.__dg || []).slice(), keep = [], sub = '', band = '';
  for (var i = 0; i < ops.length; i++) { var o = ops[i]; if (i < 2) continue; if (i === 2 && o.tx != null) { sub = o.tx; continue; }
    if (o.r && Math.abs(o.r[1] - 6.20) < 0.01 && Math.abs(o.r[3] - 0.44) < 0.01) { var nx = ops[i + 1]; if (nx && nx.tx != null) { band = nx.tx; i++; } continue; }
    keep.push(o); }
  var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  keep.forEach(function (o) { var b = o.r ? o.r : o.l ? [Math.min(o.l[0], o.l[2]), Math.min(o.l[1], o.l[3]), Math.abs(o.l[2] - o.l[0]), Math.abs(o.l[3] - o.l[1])] : [o.x, o.y, o.w || 0, o.h || 0.2];
    x0 = Math.min(x0, b[0]); y0 = Math.min(y0, b[1]); x1 = Math.max(x1, b[0] + b[2]); y1 = Math.max(y1, b[1] + b[3]); });
  var top = sub ? 26 : 0, sc = Math.min(864 / Math.max(0.1, x1 - x0), (376 - top - 4) / Math.max(0.1, y1 - y0)), ox = (864 - (x1 - x0) * sc) / 2 - x0 * sc, oy = top - y0 * sc;
  var P = function (v) { return v.toFixed(1); }, h = sub ? '<div class="abs" style="left:0;top:0;font-size:13pt;font-weight:700;color:var(--blue)">' + E(T1(sub)) + '</div>' : '', sv = '';
  
  var rects = keep.filter(function (o) { return o.r && o.r[3] * sc >= 3; }), dyOf = new Map(), icOf = new Map();
  rects.forEach(function (R) { var ts = keep.filter(function (t) { if (t.tx == null) return false; var own = rects.filter(function (q) { return t.x >= q.r[0] - 0.01 && t.y >= q.r[1] - 0.01 && t.x < q.r[0] + q.r[2] && t.y < q.r[1] + q.r[3]; }).sort(function (a, b) { return a.r[2] * a.r[3] - b.r[2] * b.r[3]; })[0]; return own === R; });
    if (!ts.length) return; var t0 = Math.min.apply(null, ts.map(function (t) { return t.y; })), t1 = Math.max.apply(null, ts.map(function (t) { return t.y + (t.h || 0.25); }));
    var dy = (R.r[1] + R.r[3] / 2) - (t0 + t1) / 2; if (dy > 0.04) ts.forEach(function (t) { dyOf.set(t, dy); });
    var txt = ts.map(function (t) { return T1(t.tx); }).join(' '), ic = dgIcon1(txt), wpt = R.r[2] * sc, hpt = R.r[3] * sc;
    var longest = Math.max.apply(null, ts.map(function (t) { return String(T1(t.tx)).length * Math.max(12, +t.fs || 12) * 0.95; }));
    if (ic && hpt >= 44 && wpt >= 150 && longest < wpt - 52 && String(R.fill || '').toUpperCase()) icOf.set(R, ic); });
  keep.forEach(function (o) {
    if (o.r) { var f = String(o.fill || '').toUpperCase(), L = ox + o.r[0] * sc, T = oy + o.r[1] * sc, Wd = o.r[2] * sc, Hd = o.r[3] * sc;
      if (Hd < 3 && f) { h += '<div class="nd" style="left:' + P(L) + 'pt;top:' + P(T) + 'pt;width:' + P(Wd) + 'pt;height:' + P(Math.max(1, Hd)) + 'pt;background:' + fc(f) + ';border-radius:1pt"></div>'; return; }
      var bg = !f ? 'transparent' : dark(f) ? 'linear-gradient(135deg,#1747C0,#0A339A)' : (/^(F7F4EE|FFFFFF)$/.test(f) ? '#fff' : fc(f));
      var bd = o.line ? 'border:' + (o.dash ? '1.2pt dashed var(--blue3)' : '1pt solid var(--blue4)') + ';' : '';
      h += '<div class="nd" style="left:' + P(L) + 'pt;top:' + P(T) + 'pt;width:' + P(Wd) + 'pt;height:' + P(Hd) + 'pt;border-radius:' + P(Math.min(12, Hd / 2)) + 'pt;background:' + bg + ';' + bd + (bg === '#fff' ? 'box-shadow:var(--shadow);' : '') + '"></div>';
      if (icOf.has(o)) { var dk = dark(f); h += '<div class="abs" style="left:' + P(L + Wd - 32) + 'pt;top:' + P(T + 8) + 'pt;width:24pt;height:24pt;border-radius:7pt;display:flex;align-items:center;justify-content:center;background:' + (dk ? '#2A59CC' : 'var(--tint)') + ';color:' + (dk ? '#fff' : 'var(--blue)') + '">' + icon(icOf.get(o), 15) + '</div>'; }
      return; }
    if (o.l) { var pts = [[ox + o.l[0] * sc, oy + o.l[1] * sc], [ox + o.l[2] * sc, oy + o.l[3] * sc]], col = '#0B3AA8';
      sv += '<polyline points="' + pts.map(function (q) { return P(q[0]) + ',' + P(q[1]); }).join(' ') + '" fill="none" stroke="' + col + '" stroke-width="2" stroke-linecap="round"/>';
      if (o.head) { var a = pts[0], b = pts[1], ang = Math.atan2(b[1] - a[1], b[0] - a[0]), z = 8;
        sv += '<polygon points="' + [b, [b[0] - z * Math.cos(ang - 0.45), b[1] - z * Math.sin(ang - 0.45)], [b[0] - z * Math.cos(ang + 0.45), b[1] - z * Math.sin(ang + 0.45)]].map(function (q) { return P(q[0]) + ',' + P(q[1]); }).join(' ') + '" fill="' + col + '"/>'; }
      return; }
    if (o.tx != null) { var c = String(o.col || '000000').toUpperCase(), onDark = c === 'FFFFFF';
      var tdy = dyOf.get(o) || 0;
      h += '<div class="tx" style="left:' + P(ox + o.x * sc) + 'pt;top:' + P(oy + (o.y + tdy) * sc) + 'pt;width:' + P((o.w || 1) * sc) + 'pt;height:' + P((o.h || 0.25) * sc) + 'pt;white-space:pre-wrap;align-items:' + (o.va === 'top' ? 'flex-start' : 'center') +
        ';justify-content:' + (o.al === 'right' ? 'flex-end' : o.al === 'center' ? 'center' : 'flex-start') + ';text-align:' + (o.al || 'left') + ';font-size:' + Math.max(12, +o.fs || 12) + 'pt;font-weight:' + (o.b ? 700 : 400) + ';color:' + (onDark ? '#fff' : tc(c)) + '">' + E(T1(o.tx)) + '</div>'; }
  });
  if (sv) h = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376">' + sv + '</svg>' + h;
  return { body: h, band: T1(band) };
}

var PRIV_SRC = {
  pipa2: '"개인정보"란 살아 있는 개인에 관한 정보로서 다음 각 목의 어느 하나에 해당하는 정보를 말한다.\n가. 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보\n나. 해당 정보만으로는 특정 개인을 알아볼 수 없더라도 다른 정보와 쉽게 결합하여 알아볼 수 있는 정보. 이 경우 쉽게 결합할 수 있는지 여부는 다른 정보의 입수 가능성 등 개인을 알아보는 데 소요되는 시간, 비용, 기술 등을 합리적으로 고려하여야 한다.\n다. 가목 또는 나목을 제1호의2에 따라 가명처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용ㆍ결합 없이는 특정 개인을 알아볼 수 없는 정보(이하 "가명정보"라 한다)',
  pipa20: '① 개인정보처리자가 정보주체 이외로부터 수집한 개인정보를 처리하는 때에는 정보주체의 요구가 있으면 즉시 다음 각 호의 모든 사항을 정보주체에게 알려야 한다.\n1. 개인정보의 수집 출처\n2. 개인정보의 처리 목적\n3. 제37조에 따른 개인정보 처리의 정지를 요구하거나 동의를 철회할 권리가 있다는 사실',
  cia15: '나. 기업 및 법인의 연혁ㆍ목적ㆍ영업실태ㆍ주식 또는 지분보유 현황 등 기업 및 법인의 개황(…), 대표자 및 임원에 관한 사항, 판매명세ㆍ수주실적 또는 경영상의 주요 계약 등 사업의 내용, 재무제표(연결재무제표를 작성하는 기업의 경우에는 연결재무제표를 포함한다) 등 재무에 관한 사항과 감사인(「주식회사 등의 외부감사에 관한 법률」 제2조제7호에 따른 감사인을 말한다)의 감사의견 및 납세실적',
  cia2: '2. "개인신용정보"란 기업 및 법인에 관한 정보를 제외한 살아 있는 개인에 관한 신용정보로서 다음 각 목의 어느 하나에 해당하는 정보를 말한다.\n가. 해당 정보의 성명, 주민등록번호 및 영상 등을 통하여 특정 개인을 알아볼 수 있는 정보\n나. 해당 정보만으로는 특정 개인을 알아볼 수 없더라도 다른 정보와 쉽게 결합하여 특정 개인을 알아볼 수 있는 정보',
  sc: '정보주체가 직접 또는 제3자를 통하여 이미 공개한 개인정보는 그 공개 당시 정보주체가 자신의 개인정보에 대한 수집이나 제3자 제공 등의 처리에 대하여 일정한 범위 내에서 동의를 하였다고 할 것이다. … 다른 한편 개인정보 보호법 제20조는 공개된 개인정보 등을 수집·처리하는 때에는 정보주체의 요구가 있으면 즉시 개인정보의 수집 출처, 개인정보의 처리 목적, 제37조에 따른 개인정보 처리의 정지를 요구할 권리가 있다는 사실을 정보주체에게 알리도록 규정하고 있으므로, 공개된 개인정보에 대한 정보주체의 개인정보자기결정권은 이러한 사후통제에 의하여 보호받게 된다. 따라서 이미 공개된 개인정보를 정보주체의 동의가 있었다고 객관적으로 인정되는 범위 내에서 수집·이용·제공 등 처리를 할 때는 정보주체의 별도의 동의는 불필요하다고 보아야 할 것이고, 그러한 별도의 동의를 받지 아니하였다고 하여 개인정보 보호법 제15조나 제17조를 위반한 것으로 볼 수 없다.'
};
function privBasis1(ctx) {
  var Q = function (t) { return '<div style="margin-top:7pt;padding:6pt 0 6pt 10pt;border-left:2.5pt solid var(--blue4);font-size:12pt;line-height:1.42;color:var(--t2)">' + E(t) + '</div>'; };
  var AP = function (t) { return '<div style="position:absolute;left:18pt;right:18pt;bottom:12pt;display:flex;gap:8pt;align-items:flex-start"><span class="pill p-tint" style="padding:0 8pt;flex:none">적용</span><span style="font-size:12pt;font-weight:600;color:var(--ink);line-height:1.35">' + E(t) + '</span></div>'; };
  var LI = function (a) { return a.map(function (t) { return '<div style="display:flex;gap:8pt;align-items:baseline;font-size:12.5pt;line-height:1.4;margin-top:4pt"><span style="flex:none;width:6pt;height:6pt;border-radius:3pt;background:var(--blue);display:inline-block;transform:translateY(-2pt)"></span><span>' + E(t) + '</span></div>'; }).join(''); };
  var b = '';
  b += card(0, 0, 424, 92, ch('i-building', '사용한 정보') + LI(['법인 정보 — 공개 재무정보(재무제표), 주주 지분율, 업종, 설립연도', '표준 가정값 — 모든 고객 동일 예시값 (개인 재산, 가족 구성, 급여)']), 'padding:11pt 16pt');
  b += card(440, 0, 424, 92, ch('i-shield', '사용하지 않은 정보') + '<div style="font-size:12.5pt;line-height:1.45;margin-top:6pt;color:var(--t2)">실명, 가족관계, 나이, 생년월일, 주소, 연락처, 주민등록번호 등 개인 식별정보 — 2판 전 쪽에서 제외, 역할 라벨(대표이사, 배우자(가정), 자녀(가정))로 표시</div>', 'padding:11pt 16pt');
  var cw = 280, gap = 12, y = 104, h = 196;
  b += card(0, y, cw, h, '<div style="font-size:13pt;font-weight:700">개인정보 보호법 §2 1호</div>' +
    Q('"개인정보"란 살아 있는 개인에 관한 정보로서 … 가. 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보') + AP('표준 가정값 = 특정 개인에 관한 정보 아님'), 'padding:12pt 18pt');
  b += card(cw + gap, y, cw, h, '<div style="font-size:13pt;font-weight:700">대법원 2016.8.17. 선고 2014다235080 판결</div>' +
    Q('이미 공개된 개인정보를 정보주체의 동의가 있었다고 객관적으로 인정되는 범위 내에서 수집·이용·제공 등 처리를 할 때는 정보주체의 별도의 동의는 불필요하다고 보아야 할 것') + AP('공개 범위 안 처리, 요구 시 출처 고지(§20)'), 'padding:12pt 18pt');
  b += card(2 * (cw + gap), y, cw, h, '<div style="font-size:13pt;font-weight:700">신용정보법 §2 1호의5 나목, 2호</div>' +
    Q('기업 및 법인의 … 주식 또는 지분보유 현황 … 대표자 및 임원에 관한 사항, … 재무제표(…) 등 재무에 관한 사항') +
    Q('"개인신용정보"란 기업 및 법인에 관한 정보를 제외한 살아 있는 개인에 관한 신용정보') + AP('법인 재무, 지분율 = 기업 및 법인 신용정보'), 'padding:12pt 18pt');
  b += card(0, 312, 864, 62, '<div style="display:flex;align-items:center;gap:14pt;height:100%">' + pill('고지', 'p-risk', 'flex:none') +
    '<div style="flex:1;display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:14pt;font-size:12.5pt;line-height:1.38">' +
    '<div>① 개인 재산, 가족 구성, 급여 = 표준 가정, 실제와 다를 수 있음</div><div>② 정밀 분석 = 정보주체 동의 후 제공 자료로 별도 진행</div><div>③ 자료 출처 문의 시 즉시 안내 (개인정보 보호법 §20)</div></div></div>', 'padding:8pt 18pt');
  slide(ctx, { eyebrow: '이 자료의 개인정보 처리 기준', title: '법인 정보, 표준 가정값만 사용 / 실명, 가족관계, 나이, 주소 등 개인 식별정보 미사용', sec: 0, chap: '처리 기준', body: b, foot: '', kind: 'priv', noAsm: true });
}
function privAppendix1(ctx) {
  var BK = function (h, src, txt) { return '<div class="blk" style="background:#fff;border-radius:14pt;box-shadow:var(--shadow);padding:11pt 18pt">' +
    '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:12pt"><span style="font-size:13.5pt;font-weight:700;color:var(--blue)">' + E(h) + '</span><span style="font-size:12pt;color:var(--t3);white-space:nowrap">' + E(src) + '</span></div>' +
    String(txt).split('\n').map(function (l) { return '<div style="font-size:12pt;line-height:1.45;color:var(--ink);margin-top:3pt">' + E(l) + '</div>'; }).join('') + '</div>'; };
  var body = '<div class="flow1" style="position:absolute;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;gap:10pt">' +
    BK('개인정보 보호법 제2조 제1호', '시행 2026.9.11. 국가법령정보센터', PRIV_SRC.pipa2) +
    BK('개인정보 보호법 제20조 제1항', '시행 2026.9.11. 국가법령정보센터', PRIV_SRC.pipa20) +
    BK('신용정보의 이용 및 보호에 관한 법률 제2조 제1호의5 나목', '시행 2026.9.11. 국가법령정보센터, 한자 병기 줄임', PRIV_SRC.cia15) +
    BK('신용정보의 이용 및 보호에 관한 법률 제2조 제2호', '시행 2026.9.11. 국가법령정보센터', PRIV_SRC.cia2) +
    BK('대법원 2016.8.17. 선고 2014다235080 판결 (이유 1. 나.)', '판결문 원문, 국가법령정보센터', PRIV_SRC.sc) + '</div>';
  slide(ctx, { eyebrow: '부록 — 개인정보 처리 기준 근거 원문', title: '개인정보 보호법, 신용정보법, 대법원 2014다235080 원문', sec: Math.max(0, (ctx.secs || []).length - 1), chap: '부록', body: body, foot: '', kind: 'privapx', split: true, noAsm: true });
}
function chapter1(ctx, no, title, items, idx, n) {
  ctx.pages.push('<section class="slide"><div class="abs blue" style="left:0;top:0;width:420pt;height:540pt;border-radius:0 30pt 30pt 0;overflow:hidden">' +
    '<svg class="patt" width="420pt" height="540pt" viewBox="0 0 420 540"><rect width="420" height="540" fill="url(#dots)"/><circle cx="380" cy="80" r="120" fill="none" stroke="#fff" stroke-opacity=".10" stroke-width="30"/></svg>' +
    '<div class="abs" style="left:48pt;top:58pt;width:64pt;height:64pt;border-radius:18pt;background:#1E4CC0;display:flex;align-items:center;justify-content:center"><svg style="width:40pt;height:40pt"><use href="#w-chart"/></svg></div>' +
    '<div class="abs" style="left:40pt;top:150pt;font-size:200pt;font-weight:800;line-height:1;color:#2F5CCB;letter-spacing:-8pt">' + E(no) + '</div></div>' +
    '<div class="abs" style="left:476pt;top:110pt;width:430pt"><span class="pill p-blue">Chapter ' + E(no) + '</span>' +
    '<div style="margin-top:14pt;font-size:34pt;font-weight:800;letter-spacing:-1pt;color:var(--ink);line-height:1.2">' + E(title) + '</div>' +
    '<div style="margin-top:22pt">' + items.slice(0, 5).map(function (t, i) { return '<div style="display:flex;align-items:center;gap:12pt;background:#fff;border-radius:14pt;box-shadow:var(--shadow);padding:10pt 16pt;margin-bottom:9pt">' +
      circ(i + 1) + '<div style="flex:1;font-size:14pt;font-weight:600">' + E(t) + '</div></div>'; }).join('') + '</div></div>' +
    '<div class="abs" style="left:476pt;bottom:48pt;font-size:12pt;color:var(--t3);font-weight:600">' + idx + ' / ' + n + '</div></section>');
}

function amt1(s) {   
  s = String(s == null ? '' : s).replace(/\s+/g, '');
  var m = /([△−\-]?)([\d,]+(?:\.\d+)?)(억원|억|만원|만|원|%)?/.exec(s); if (!m) return 0;
  var v = parseFloat(m[2].replace(/,/g, '')); if (m[1]) v = -v;
  if (/^억/.test(m[3] || '')) v *= 1e8; else if (/^만/.test(m[3] || '')) v *= 1e4;
  return v;
}
function sv1(s) {   
  s = String(s == null ? '' : s).trim();
  var m = /^([△+−\-]?\d[\d,]*(?:\.\d+)?)\s*(억원|만원|억|만|원|%p|%|배|년|주|명|회)?(.*)$/.exec(s);
  return m ? { v: m[1], u: m[2] || '', r: (m[3] || '').trim() } : { v: s, u: '', r: '' };
}
function K1(ic, lab, valText, note, hl, badge, vfs) {
  var p = sv1(valText);
  return kpi(ic, E(lab).replace(/\n/g, '<br>'), E(p.v), E(p.u), (p.r ? E(p.r) + (note ? '<br>' : '') : '') + (note || ''), hl, badge, vfs || 26);
}
function TB1(u, k) { return (u.blocks || []).filter(function (b) { return b && b.t === 'table' && b.rows && b.rows.length; })[k || 0] || null; }
function R1(u, k) { var t = TB1(u, k); return t ? t.rows.map(function (r) { return r.map(T1); }) : null; }
function HI1(u, k) {   
  var t = TB1(u, k); if (!t) return [];
  return t.rows.slice(1).map(function (r, i) { return r.some(function (c) { var f = cellFill(c); return f && !/^(FFFFFF|F7F4EE|0A1C4E|49342E|513528)$/.test(f); }) ? i : -1; }).filter(function (i) { return i >= 0; });
}
function FL1(u, k) { var f = (u.blocks || []).filter(function (b) { return b && b.t === 'flow'; })[k || 0]; return f ? (f.steps || []).map(function (s) { return { n: T1(s.n), t: T1(s.t), d: T1(s.d), tone: s.tone || '' }; }) : null; }
function NT1(u) { return (u.blocks || []).filter(function (b) { return b && b.t === 'note'; }).map(function (b) { return T1(b.text); }); }
function CP1(u) { return (u.blocks || []).filter(function (b) { return b && b.t === 'caption' && !b.pageCap; }).map(function (b) { return T1(b.text); }); }
function rowRe1(rows, re, what) { for (var i = 1; i < rows.length; i++) if (re.test(rows[i][0])) return rows[i]; throw new Error('표 줄 없음 ' + (what || re)); }
function lines1(s) { return String(s || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean); }
function one1(s) { return String(s || '').replace(/\s*\n\s*/g, ' ').trim(); }


function C1(x, y, w, h, inner, st, cls) { return '<div class="card' + (cls ? ' ' + cls : '') + '" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;padding:12pt 16pt;' + (st || '') + '">' + inner + '</div>'; }

var HLB = 'border:1.5pt solid var(--risk);';
function oneHL1(h) { var k = 0; return String(h).replace(/border:1\.[25]pt solid var\(--risk\);?/g, function (m) { return k++ ? '' : m; }); }
function hbars1(rows, o) {   
  o = o || {}; var lw = o.lw || 110, vw = o.vw || 84, bh = o.bh || 14;
  return rows.map(function (r, i) { var hl = r[3];
    return '<div style="display:flex;align-items:center;gap:10pt;padding:' + (o.py == null ? 4 : o.py) + 'pt 0;' + (i < rows.length - 1 && !o.noRule ? 'border-bottom:0.75pt dashed var(--rule)' : '') + '">' +
      '<div style="width:' + lw + 'pt;flex:none;line-height:1.25"><div style="font-size:13pt;font-weight:' + (hl ? 700 : 500) + ';color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div>' +
      (r[4] ? '<div style="font-size:12pt;color:var(--t3)">' + E(r[4]) + '</div>' : '') + '</div>' +
      bar(r[2], r[5] || (hl ? 'var(--blue)' : 'var(--blue3)'), bh) +
      '<div class="num" style="width:' + vw + 'pt;flex:none;text-align:right;font-size:' + (o.vfs || 14) + 'pt;font-weight:800;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</div></div>';
  }).join('');
}
function vcols1(cols, o) {   
  o = o || {}; var H = o.h || 150;
  return '<div style="display:flex;gap:' + (o.gap || 12) + 'pt;align-items:flex-end;height:100%">' + cols.map(function (c) {
    var tot = c.segs.reduce(function (a, s) { return a + Math.max(0, s.f); }, 0), segs = '';
    c.segs.slice().reverse().forEach(function (s, k) { var hh = Math.max(s.f > 0 ? 3 : 0, s.f * H);
      segs += '<div style="height:' + hh.toFixed(1) + 'pt;background:' + s.col + ';' + (k === 0 ? 'border-radius:7pt 7pt 0 0;' : '') + (k === c.segs.length - 1 ? 'border-bottom-left-radius:2pt;border-bottom-right-radius:2pt;' : '') + 'display:flex;align-items:center;justify-content:center">' +
        (s.t && hh >= 18 ? '<span class="num" style="font-size:12pt;font-weight:700;text-align:center;line-height:1.2;color:' + (s.ink || '#fff') + '">' + E(s.t).replace(/\n/g, '<br>') + '</span>' : '') + '</div>'; });
    return '<div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:stretch">' +
      '<div class="num" style="text-align:center;font-size:' + (c.hl ? 15 : 13) + 'pt;font-weight:800;color:' + (c.hl ? 'var(--blue)' : 'var(--ink)') + ';margin-bottom:4pt;white-space:nowrap">' + E(c.top || '') + '</div>' +
      '<div style="margin:0 ' + (o.inset == null ? 14 : o.inset) + 'pt;' + (o.frame ? 'border:1.5pt solid ' + (c.red ? 'var(--risk)' : '#fff') + ';border-bottom:none;padding:3pt 3pt 0;border-radius:10pt 10pt 0 0' : '') + '">' + segs + '</div>' +
      '<div style="border-top:1pt solid var(--blue4);margin-top:0;padding-top:5pt;text-align:center">' +
      '<div style="font-size:13pt;font-weight:700;color:' + (c.hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(c.lab) + '</div>' +
      (c.under || []).map(function (t) { return '<div class="num" style="font-size:12pt;color:var(--t2);line-height:1.35;white-space:nowrap">' + E(t) + '</div>'; }).join('') + '</div></div>';
  }).join('') + '</div>';
}
function eq1(parts, o) {   
  o = o || {};
  return '<div style="display:flex;align-items:center;gap:' + (o.gap || 8) + 'pt;flex-wrap:nowrap">' + parts.map(function (p) {
    if (typeof p === 'string') return '<div style="flex:none;font-size:' + (o.ofs || 16) + 'pt;font-weight:800;color:var(--blue3)">' + E(p) + '</div>';
    return '<div style="flex:' + (p.grow || 'none') + ';min-width:0;border-radius:11pt;padding:6pt 11pt;' + (p.hl ? HL : 'background:#fff;border:1pt solid var(--blue4)') + '">' +
      '<div style="font-size:12pt;font-weight:600;white-space:nowrap;color:' + (p.hl ? '#DCE5FF' : 'var(--t3)') + '">' + E(p.l) + '</div>' +
      '<div class="num" style="font-size:' + (p.fs || 16) + 'pt;font-weight:800;white-space:nowrap;color:' + (p.hl ? '#fff' : 'var(--ink)') + '">' + E(p.v) + '</div></div>';
  }).join('') + '</div>';
}
function chipF(label, t) { return '<span style="display:inline-flex;align-items:center;gap:6pt;font-size:12pt;color:var(--t2);line-height:1.35"><span class="pill p-grey" style="padding:1pt 8pt">' + E(label || '산식') + '</span>' + E(t) + '</span>'; }
function noteBox(text, h, o) {   
  o = o || {};
  return '<div class="abs" style="left:0;right:0;bottom:0;height:' + h + 'pt;background:' + (o.risk ? 'var(--risktint)' : '#fff') + ';border-radius:12pt;box-shadow:var(--shadow);padding:7pt 14pt;font-size:12pt;color:' + (o.risk ? 'var(--risk)' : 'var(--t2)') + ';line-height:1.42;overflow:hidden">' +
    (o.lab ? '<b style="color:' + (o.risk ? 'var(--risk)' : 'var(--blue)') + ';font-weight:700;margin-right:6pt">' + E(o.lab) + '</b>' : '') + E(text).replace(/\n/g, '<br>') + '</div>';
}
function kv1(rows, o) {   
  o = o || {};
  return rows.map(function (r, i) { var hl = r[2];
    return '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10pt;padding:' + (o.py == null ? 3.5 : o.py) + 'pt 0;' + (i ? 'border-top:0.75pt dashed var(--rule)' : '') + '">' +
      '<span style="font-size:12pt;color:' + (hl ? 'var(--blue)' : 'var(--t2)') + ';font-weight:' + (hl ? 700 : 400) + ';flex:none;max-width:' + (o.lw || 60) + '%">' + E(r[0]) + '</span>' +
      '<span class="num" style="font-size:12pt;font-weight:' + (hl ? 800 : 700) + ';text-align:right;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</span></div>'; }).join('');
}
function stepRow1(st, o) {   
  o = o || {};
  return '<div style="display:flex;gap:8pt;align-items:stretch;height:100%">' + st.map(function (x, i) {
    var on = x.tone === 'on', no = x.tone === 'no';
    return (i ? '<div style="flex:none;align-self:center;color:var(--blue3);font-size:15pt;font-weight:800">→</div>' : '') +
      '<div style="flex:1;min-width:0;border-radius:13pt;padding:10pt 12pt;background:#fff;box-shadow:var(--shadow);' + (no ? HLB : '') + '">' +
      '<div style="display:flex;align-items:center;gap:7pt">' + circ(i + 1, !no, no ? 'background:var(--risk)' : '') + '<span style="font-size:12pt;font-weight:700;color:' + (no ? 'var(--risk)' : 'var(--blue)') + '">' + E(x.n) + '</span></div>' +
      '<div style="font-size:' + (o.tfs || 15) + 'pt;font-weight:700;margin-top:6pt;color:var(--ink);line-height:1.25">' + E(x.t) + '</div>' +
      '<div style="font-size:12pt;margin-top:4pt;line-height:1.4;color:var(--t2)">' + E(x.d) + '</div></div>';
  }).join('') + '</div>';
}
function head1(ic, t, right) { return ch(ic, E(t), right || ''); }
function pillsRow(items) { return '<div style="display:flex;gap:8pt;flex-wrap:wrap">' + items.map(function (p) { return pill(E(p[0]), p[1] || 'p-tint'); }).join('') + '</div>'; }


var D1P = [];
function P1(re, fn) { D1P.push([re, fn]); }

P1(/^핵심 요약/, function (u, X) {
  var rows = R1(u, 0).slice(1), sec = {}, out = [];
  rows.forEach(function (r) { sec[one1(r[1]).replace(/\s+/g, '')] = lines1(r[2]); });
  var L = function (k) { var a = sec[k] || []; return a.join('\n'); };
  var mH = /지분 평가총액 ([\d.,]+억원) — 1주당 ([\d,]+원)/.exec(L('현황')), mI = /상속세 ([\d.,]+억원) \(실효세율 ([\d.]+%)\)/.exec(L('상속세')),
    mY = /10년 후 ([\d.,]+억원), 20년 후 ([\d.,]+억원)/.exec(L('상속세')), mG = /가업상속공제 적용 시 ([\d.,]+억?원) — 절감 ([\d.,]+억원)/.exec(L('상속세')),
    mS = /즉시 실행 시 증여세 ([\d.,]+억원), 차기 ([\d.,]+억원)/.exec(L('증여특례'));
  if (mH && mI && mY && mG && mS) {
    var b = '<div class="abs" style="left:0;top:0;width:864pt;height:124pt;display:grid;grid-template-columns:repeat(4,1fr);gap:12pt">' +
      K1('i-coin', '지분 평가총액', mH[1], E('1주당 ' + mH[2])) + K1('i-doc', '현행 유지 시 상속세', mI[1], E('실효세율 ' + mI[2])) +
      K1('i-gift', '증여특례 즉시 실행 증여세', mS[1], E('차기 ' + mS[2])) + K1('i-shield', '가업상속공제 적용 시 상속세', mG[1], E('절감 ' + mG[2]), true, '요건 충족 시') + '</div>';
    var vmax = Math.max(amt1(mY[2]), amt1(mI[1]), 1);
    b += C1(0, 138, 470, 238, head1('i-shield', '핵심 판단') + '<div style="margin-top:4pt">' + keys(String(X.cc || '').split(' / ').concat([(sec['현황'] || [])[3] || '']).filter(Boolean).slice(0, 3).map(function (t) {
      var k = t.indexOf(' → '); return k > 0 && k < 40 ? [E(t.slice(0, k)), E('→ ' + t.slice(k + 3))] : [E(t), '']; })) + '</div>');
    b += C1(482, 138, 382, 238, head1('i-chart', '상속세 — 시점별, 공제별', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:8pt">' + hbars1([
      ['현재', mI[1], amt1(mI[1]) / vmax, false], ['10년 후', mY[1], amt1(mY[1]) / vmax, false], ['20년 후', mY[2], amt1(mY[2]) / vmax, false],
      ['증여특례 즉시', mS[1], amt1(mS[1]) / vmax, false, '', 'var(--blue2)'], ['가업상속공제', mG[1], 0, true]], { lw: 92, vw: 70, py: 5 }) + '</div>');
    out.push({ eyebrow: 'Executive Summary', title: emNum(X.cc || u.title), body: b, foot: '<b>기준</b>  ' + E(((sec['현황'] || [])[2] || '').replace(/^재무제표, 손익계산서: /, '')) });
  }
  
  for (var p = 0; p < rows.length; p += 4) {
    var b2 = '';
    rows.slice(p, p + 4).forEach(function (r, i) {
      var x = (i % 2) * 438, y = Math.floor(i / 2) * 194, ls = lines1(r[2]);
      b2 += C1(x, y, 426, 182, '<div style="display:flex;align-items:center;gap:9pt">' + circ(r[0]) + '<div style="font-size:15pt;font-weight:700">' + E(one1(r[1])) + '</div></div>' +
        '<div style="margin-top:7pt">' + ls.map(function (t, k) { return '<div style="display:flex;gap:7pt;font-size:12pt;line-height:1.36;margin-top:' + (k ? 3 : 0) + 'pt;color:' + (k ? 'var(--t2)' : 'var(--ink)') + ';font-weight:' + (k ? 400 : 600) + '">' +
          '<span style="flex:none;width:5pt;height:5pt;border-radius:3pt;margin-top:6pt;background:' + (k ? 'var(--blue3)' : 'var(--blue)') + '"></span><span>' + E(t) + '</span></div>'; }).join('') + '</div>');
    });
    out.push({ eyebrow: 'Executive Summary' + (rows.length > 4 ? ' (' + (p / 4 + 1) + '/' + Math.ceil(rows.length / 4) + ')' : ''), title: emNum(X.cc || u.title), body: b2, foot: '' });
  }
  return out;
});

P1(/^현황 — 지배구조/, function (u, X) {   
  var tr = (u.blocks || []).filter(function (b) { return b && b.t === 'tree'; })[0], k = tr.kids[0], rows = (k.rows || []).map(function (r) { return [T1(r[0]), T1(r[1])]; });
  var g = function (re) { var r = rows.filter(function (x) { return re.test(x[0]); })[0]; if (!r) throw new Error('지배구조 ' + re); return r[1]; };
  var root = T1(tr.root), nm = root.split(/\s*[,·]\s+/)[0], rest = root.slice(nm.length).replace(/^\s*[,·]\s*/, ''), corp = T1(k.nm);
  var lab = function (ic, t) { return '<div style="display:flex;align-items:center;gap:8pt;font-size:14pt;font-weight:800;color:var(--blue)">' + icb(ic) + E(t) + '</div>'; };
  var b = C1(0, 0, 262, 376, lab('i-people', '지배구조') +
    '<div style="margin-top:14pt;border-radius:14pt;padding:12pt 15pt;' + HL + '"><div style="font-size:12pt;color:#DCE5FF">대표</div><div style="font-size:22pt;font-weight:800;color:#fff;margin-top:2pt">' + E(nm) + '</div><div style="font-size:13pt;color:#DCE5FF;margin-top:2pt">' + E(rest) + '</div></div>' +
    '<div style="display:flex;flex-direction:column;align-items:center;margin:8pt 0"><div style="width:2pt;height:16pt;background:var(--blue)"></div>' + pill(E('지분 ' + T1(k.tg || '')), 'p-blue') + '<div style="color:var(--blue);font-size:13pt;line-height:1;margin-top:2pt">▼</div></div>' +
    '<div style="border-radius:14pt;padding:12pt 15pt;background:#fff;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;gap:8pt">' + icon('i-building', 18) + '<span style="font-size:16pt;font-weight:800;color:var(--blue-d)">' + E(corp) + '</span></div>' +
    '<div style="font-size:12pt;color:var(--t2);margin-top:5pt;line-height:1.4">' + E(T1(k.head || '')) + '</div></div>', 'background:var(--tint);box-shadow:none;padding:14pt 14pt');
  b += '<div class="abs" style="left:276pt;top:0;width:1.5pt;height:376pt;background:var(--blue4)"></div>';
  var R = 292, RW = 864 - R;
  b += '<div class="abs" style="left:' + R + 'pt;top:0;width:' + RW + 'pt;height:24pt">' + lab('i-building', '법인 평가 내용 — ' + corp) + '</div>';
  b += '<div class="abs" style="left:' + R + 'pt;top:32pt;width:' + RW + 'pt;height:140pt;display:grid;grid-template-columns:repeat(4,1fr);gap:10pt">' +
    K1('i-coin', '1주 평가액', g(/^1주 평가액/), E('평가방식 ' + g(/^평가방식/)), true) + K1('i-chart', '사업용자산비율', g(/^사업용자산비율/), E('사업무관자산 ' + g(/^사업무관자산/))) +
    K1('i-doc', '1주당\n순손익가치', g(/^순손익가치/), '가중평균 3 : 2 중 3') + K1('i-building', '1주당\n순자산가치', g(/^순자산가치/), '가중평균 3 : 2 중 2') + '</div>';
  var yrs = g(/최근 3년/).split(/\s*[,·]\s*/), ymx = Math.max.apply(null, yrs.map(amt1).concat([1])), hw = (RW - 12) / 2;
  b += C1(R, 184, hw, 192, head1('i-chart', '최근 3년 순손익') + '<div style="margin-top:10pt">' + hbars1(yrs.map(function (v, i) { return [['직전 1년', '직전 2년', '직전 3년'][i] || '', v, amt1(v) / ymx, false]; }), { lw: 58, vw: 70, py: 9, bh: 12, vfs: 14 }) + '</div>');
  var kv = [['매출', g(/^매출/)], ['순자산가액', g(/^순자산가액/)], ['이익잉여금', g(/^이익잉여금/)], ['가업승계 경영기간', g(/경영기간/)]];
  b += C1(R + hw + 12, 184, hw, 192, head1('i-doc', '규모, 가업승계 기준') + '<div style="margin-top:10pt">' + kv1(kv, { py: 8, lw: 62 }) + '</div>');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^자산가치평가 — [^—]+$/, function (u, X) {   
  var T = R1(u, 0), T2 = R1(u, 1), nt = NT1(u);
  var iy = T.findIndex(function (r) { return /^사업연도/.test(r[0]); }), ia = T.findIndex(function (r) { return /자산 총계/.test(r[0]); });
  if (iy < 0 || ia < 0) throw new Error('자산가치평가 표 모양');
  var info = T[1], yrs = T.slice(iy + 1, ia), na = T[ia + 1], wavg = yrs.filter(function (r) { return r[3]; })[0];
  var ps = rowRe1(T2, /1주당/), tot = rowRe1(T2, /총금액/);
  var b = '<div class="abs" style="left:0;top:0;width:864pt;height:136pt;display:grid;grid-template-columns:repeat(4,1fr);gap:12pt">' +
    K1('i-doc', '1주당 순손익가치', wavg[4], E('가중평균 순손익액 ' + wavg[3] + '원 ÷ 10%')) + K1('i-building', '1주당 순자산가치', na[4], E('순자산가액 ' + na[3] + '원 ÷ 발행주식')) +
    K1('i-check', '1주당 평가액', ps[2], E('액면가액 ' + ps[1] + '원, 할증평가 ' + ps[3]), true) + K1('i-coin', '총 평가금액', tot[2], E('액면 총액 ' + tot[1] + '원, 할증평가 ' + tot[3]), false, null, 22) + '</div>';
  var ymx = Math.max.apply(null, yrs.map(function (r) { return amt1(r[1]); }).concat([1]));
  b += C1(0, 148, 424, 172, head1('i-chart', '3개 사업연도 순손익 (가중 3 : 2 : 1)', pill('원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:2pt">' +
    hbars1(yrs.map(function (r, i) { return [r[0], r[1], amt1(r[1]) / ymx, i === 0, '1주당 ' + r[2] + '원', null]; }), { lw: 96, vw: 118, py: 1.5, bh: 11, vfs: 13 }) + '</div>');
  b += C1(436, 148, 428, 172, head1('i-building', '순자산가액 (상증법 §63)', pill('원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:4pt">' +
    kv1([['① 자산 총계', na[0]], ['(−) ② 부채 총계', na[1]], ['(+) ③ 영업권', na[2]], ['= 순자산가액', na[3], true]], { py: 4.5 }) + '</div>');
  if (nt[0]) b += noteBox(nt[0], 48, { lab: '산식' });
  var foot = '<b>기준</b>  ' + E(T[0][1] + ' ' + info[1] + ', ' + info[2] + ' 결산, ' + info[3] + ', 부동산등 비율 ' + info[4]);
  return [{ title: emNum(X.cc || u.title), body: b, foot: foot }];
});

P1(/주주 현황$/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), tot = body.filter(function (r) { return /^합\s*계/.test(r[0]); })[0], sh = body.filter(function (r) { return r !== tot; });
  if (!tot || sh.length > 8) throw new Error('주주 수');
  var cols = ['var(--blue)', 'var(--blue2)', 'var(--blue3)', 'var(--blue4)', '#9FB3EC', '#C8D4F6'];
  var seg = sh.map(function (r, i) { return '<div style="width:' + Math.max(0.5, num(r[2])).toFixed(2) + '%;height:100%;background:' + cols[i] + '"></div>'; }).join('');
  var b = C1(0, 0, 864, 104, head1('i-people', '지분 구성', pill(E('발행주식 ' + tot[1]), 'p-tint', 'margin-left:auto')) +
    '<div style="display:flex;height:18pt;border-radius:9pt;overflow:hidden;margin-top:10pt;background:var(--tint)">' + seg + '</div>' +
    '<div style="display:flex;gap:16pt;margin-top:7pt;flex-wrap:wrap">' + sh.map(function (r, i) { return '<span style="display:inline-flex;align-items:center;gap:6pt;font-size:12pt;color:var(--t2)"><span style="width:10pt;height:10pt;border-radius:3pt;background:' + cols[i] + '"></span>' + E(r[0] + ' ' + r[2]) + '</span>'; }).join('') + '</div>');
  var n = sh.length, gw = (864 - 12 * (n - 1)) / n;
  if (n > 4) { var mxv = Math.max.apply(null, sh.map(function (r) { return amt1(r[4]); }).concat([1]));
    b += C1(0, 116, 864, 186, '<div class="tblc" style="display:flex;font-size:12pt;color:var(--t3);gap:10pt;padding-bottom:3pt"><span style="width:140pt">' + E(hd[0]) + '</span><span style="flex:1">' + E(one1(hd[4])) + '</span><span style="width:100pt;text-align:right">' + E(hd[1]) + '</span><span style="width:100pt;text-align:right">' + E(hd[3]) + '</span><span style="width:70pt;text-align:right">' + E(one1(hd[5])) + '</span></div>' +
      sh.map(function (r, i) { return '<div style="display:flex;align-items:center;gap:10pt;height:' + (138 / n).toFixed(1) + 'pt;border-top:0.75pt dashed var(--rule)"><span style="width:140pt;font-size:13pt;font-weight:' + (i ? 500 : 800) + ';color:' + (i ? 'var(--ink)' : 'var(--blue)') + '">' + E(r[0] + '  ' + r[2]) + '</span>' +
        '<div style="flex:1;display:flex;align-items:center;gap:8pt">' + bar(amt1(r[4]) / mxv, i ? 'var(--blue3)' : 'var(--blue)', 10) + '<span class="num" style="width:96pt;text-align:right;font-size:13pt;font-weight:800">' + E(r[4]) + '</span></div>' +
        '<span class="num" style="width:100pt;text-align:right;font-size:12pt">' + E(r[1]) + '</span><span class="num" style="width:100pt;text-align:right;font-size:12pt">' + E(r[3]) + '</span><span style="width:70pt;text-align:right;font-size:12pt;color:var(--t3)">' + E(r[5]) + '</span></div>'; }).join(''));
    sh = []; }
  sh.forEach(function (r, i) {
    b += C1(i * (gw + 12), 116, gw, 186, '<div style="display:flex;align-items:center;gap:8pt">' + circ(i + 1, i > 0) + '<span style="font-size:16pt;font-weight:700;color:' + (i ? 'var(--ink)' : 'var(--blue)') + '">' + E(r[0]) + '</span>' + pill(E(r[2]), i ? 'p-tint' : 'p-blue', 'margin-left:auto') + '</div>' +
      '<div class="num" style="margin-top:10pt;font-size:24pt;font-weight:800;letter-spacing:-.6pt">' + E(sv1(r[4]).v) + '<span style="font-size:13pt;font-weight:700;margin-left:2pt">원</span></div><div style="font-size:12pt;color:var(--t3)">' + E(one1(hd[4])) + '</div>' +
      '<div style="margin-top:8pt">' + kv1([[hd[1], r[1]], [hd[3], r[3]], [one1(hd[5]), r[5]]], { py: 3 }) + '</div>', i ? '' : HLB);
  });
  b += C1(0, 314, 864, 62, '<div style="display:flex;align-items:center;gap:14pt;height:100%">' + icb('i-coin') + '<span style="font-size:14pt;font-weight:700">' + E(tot[0].replace(/\s+/g, '')) + '</span>' +
    eq1([{ l: hd[1], v: tot[1], fs: 14 }, { l: hd[2], v: tot[2], fs: 14 }, { l: hd[3], v: tot[3], fs: 14 }, { l: one1(hd[4]), v: tot[4], fs: 14, hl: true }, { l: one1(hd[5]), v: tot[5], fs: 14 }], { gap: 10 }) + '</div>', 'padding:6pt 16pt');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^가치평가 — /, function (u, X) {
  var T = R1(u, 0), hd = T[0], cap = CP1(u)[0] || '', nt = NT1(u)[0] || '';
  var ps = rowRe1(T, /^1주당 평가액/), tv = rowRe1(T, /^평가 총액/), dv = rowRe1(T, /증감/), pl = rowRe1(T, /순손익가치/), pa = rowRe1(T, /순자산가치/), na = rowRe1(T, /^순자산가액/);
  var mx = Math.max(amt1(ps[1]), amt1(ps[2]), amt1(ps[3]), 1);
  var cols = [1, 2, 3].map(function (j) { var h = lines1(hd[j]); return { lab: h[0], top: ps[j], hl: j === 3, segs: [{ f: amt1(ps[j]) / mx * 0.95, col: j === 3 ? 'var(--blue)' : 'var(--blue3)' }], under: [h[1] || '', '평가 총액 ' + tv[j], '직전 대비 ' + dv[j]] }; });
  var b = C1(0, 0, 520, 300, head1('i-chart', '1주당 평가액 (손익 반영 연도별)', pill('원', 'p-tint', 'margin-left:auto')) + '<div style="position:absolute;left:16pt;right:16pt;top:52pt;bottom:12pt">' + vcols1(cols, { h: 120, inset: 30 }) + '</div>');
  var mx2 = Math.max.apply(null, [1, 2, 3].map(function (j) { return Math.max(amt1(pl[j]), amt1(pa[j])); }));
  var grp = function (r, col) { return hbars1([1, 2, 3].map(function (j) { return [lines1(hd[j])[0].replace(/ 손익 반영/, ''), r[j], amt1(r[j]) / mx2, j === 3, '', col]; }), { lw: 56, vw: 74, py: 1.5, bh: 9, vfs: 12, noRule: true }); };
  b += C1(532, 0, 332, 300, head1('i-doc', '구성 요소') + '<div style="margin-top:6pt;font-size:12pt;font-weight:700;color:var(--blue)">' + E(pl[0]) + '</div>' + grp(pl, 'var(--blue2)') +
    '<div style="margin-top:6pt;font-size:12pt;font-weight:700;color:var(--blue)">' + E(pa[0]) + '</div>' + grp(pa, 'var(--blue3)') +
    '<div style="margin-top:6pt">' + kv1([[na[0], na[1] + ' → ' + na[2] + ' → ' + na[3]]], { lw: 30 }) + '</div>');
  b += noteBox(nt, 64, { lab: '전제' });
  return [{ title: emNum(X.cc || u.title), body: b, foot: '<b>기준</b>  ' + E(cap.replace(/^손익 반영 연도별 주식가치 — /, '')) }];
});


function fall1(rows, o) {
  o = o || {}; var cum = 0, mx = 1;
  rows.forEach(function (r) { var v = Math.abs(amt1(r.val));
    if (r.kind === 'add') { r.a = cum; r.b = cum + v; cum = r.b; } else if (r.kind === 'minus') { r.b = cum; r.a = Math.max(0, cum - v); cum = r.a; } else { r.a = 0; r.b = v; cum = v; }
    mx = Math.max(mx, r.b); });
  var lw = o.lw || 150, vw = o.vw || 80, rh = o.rh || 26;
  return rows.map(function (r, i) {
    var L = r.a / mx * 100, W = /\d/.test(r.val) ? Math.max(0.6, (r.b - r.a) / mx * 100) : 0, tot = r.kind === 'tot', mi = r.kind === 'minus';
    var col = tot ? 'var(--blue)' : (mi ? '#F09A90' : (r.c || 'var(--blue3)'));
    var ann = r.sub ? (L > 42 ? '<div style="position:absolute;right:' + (100 - L + 1.2).toFixed(2) + '%;top:0;height:100%;display:flex;align-items:center;font-size:12pt;color:var(--t3);white-space:nowrap">' + E(r.sub) + '</div>'
      : '<div style="position:absolute;left:' + (L + W + 1.2).toFixed(2) + '%;top:0;height:100%;display:flex;align-items:center;font-size:12pt;color:var(--t3);white-space:nowrap">' + E(r.sub) + '</div>') : '';
    var guide = i ? '<div style="position:absolute;left:' + (mi ? (r.b / mx * 100) : L).toFixed(2) + '%;top:-' + (rh / 2).toFixed(0) + 'pt;height:' + (rh / 2 + 4).toFixed(0) + 'pt;border-left:1pt dashed var(--blue4)"></div>' : '';
    return '<div style="display:flex;align-items:center;gap:10pt;height:' + rh + 'pt;' + (tot ? 'background:var(--tint);border-radius:8pt;' : '') + 'padding:0 6pt">' +
      '<div style="width:' + lw + 'pt;flex:none;font-size:13pt;font-weight:' + (tot ? 800 : 500) + ';color:' + (tot ? 'var(--blue)' : (mi ? 'var(--t2)' : 'var(--ink)')) + ';white-space:nowrap">' + E(r.lab) + '</div>' +
      '<div style="flex:1;position:relative;height:100%">' + guide + '<div style="position:absolute;left:' + L.toFixed(2) + '%;width:' + W.toFixed(2) + '%;top:' + ((rh - 13) / 2).toFixed(1) + 'pt;height:13pt;border-radius:4pt;background:' + col + '"></div>' + ann + '</div>' +
      '<div class="num" style="width:' + vw + 'pt;flex:none;text-align:right;font-size:14pt;font-weight:800;color:' + (tot ? 'var(--blue)' : (mi ? 'var(--t2)' : 'var(--ink)')) + '">' + (mi && /\d/.test(r.val) ? '− ' : '') + E(r.val) + '</div></div>';
  }).join('');
}
P1(/^상속세$/, function (u, X) {
  var A = R1(u, 0), T = A.slice(1).filter(function (r) { return !/실효세율/.test(r[0]); }), seenTs = false, rows = [];
  T.forEach(function (r) { var nm = r[0], sub = (nm.match(/ — (.*)$/) || [])[1] || '', m;
    if ((m = /^상속재산 — (.*)$/.exec(nm))) { rows.push({ lab: '+ ' + m[1], val: r[1], kind: 'add' }); return; }
    if (/^\(−\)/.test(nm)) { rows.push({ lab: nm.replace(/ — .*$/, ''), sub: sub, val: r[1], kind: 'minus' }); return; }
    rows.push({ lab: nm.replace(/\s*\(.*\)$/, '').replace(/ — .*$/, ''), sub: '', val: r[1], kind: 'tot' }); });
  var tax = rowRe1(A, /^상속세$/), eff = rowRe1(A, /실효세율/), ts = rowRe1(A, /^과세표준/), calc = rowRe1(A, /^산출세액/), cr = rowRe1(A, /신고세액공제/), est = A.filter(function (r) { return /^상속재산가액/.test(r[0]); })[0];
  var rh = Math.min(28, Math.floor((376 - 64) / rows.length));
  var b = C1(0, 0, 600, 376, head1('i-chart', '상속재산 → 공제 → 과세표준 → 상속세 (누적 막대)', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:6pt">' + fall1(rows, { lw: 150, vw: 82, rh: rh }) + '</div>');
  b += '<div class="abs" style="left:612pt;top:0;width:252pt;height:180pt">' + K1('i-doc', '상속세 (신고세액공제 후)', tax[1], E('실효세율 ' + eff[1]), true, '현행 유지', 34) + '</div>';
  b += '<div class="abs" style="left:612pt;top:192pt;width:252pt;height:184pt">' + K1('i-scale', '과세표준', ts[1], E('산출세액 ' + calc[1] + ', ' + cr[0].replace(/^\(−\)\s*/, '') + ' ' + cr[1])) + '</div>';
  return [{ title: emNum(X.cc || u.title), body: b, foot: est ? '<b>읽는 법</b>  ' + E(est[0].replace(/^상속재산가액\s*/, '상속재산가액 = ').replace(/[()]/g, '').replace(/퇴직금 세후 퇴직소득 \+ 퇴직금 한도 초과분 세후 근로소득/, '퇴직금 세후')) + ' 막대를 이어 붙이고, 공제는 끝에서부터 줄임' : '' }];
});


function trend1(T, o) {
  var hd = T[0], body = T.slice(1), n = hd.length - 1, chips = [], unders = [];
  for (var j = 0; j < n; j++) unders.push([]);
  body.forEach(function (r) {
    if (o.skip && o.skip.test(r[0])) return;
    var vals = r.slice(1), same = vals.every(function (v) { return v === vals[0]; });
    if (same) { chips.push([r[0], vals[0]]); return; }
    vals.forEach(function (v, j) { unders[j].push(o.short(r[0]) + ' ' + v); });
  });
  return { hd: hd, n: n, chips: chips, unders: unders };
}
P1(/^상속세 — 물가/, function (u, X) {
  var T = R1(u, 0), tot = rowRe1(T, /^상속재산가액/), tax = rowRe1(T, /^상속세/), mx = Math.max.apply(null, tot.slice(1).map(amt1).concat([1]));
  var tr = trend1(T, { skip: /^(상속재산가액|상속세)$/, short: function (k) { return k.replace(/^\(−\)\s*/, '− ').replace(/비상장주식 지분가치/, '지분가치').replace(/ \(.*\)$/, ''); } });
  var cols = []; for (var j = 1; j <= tr.n; j++) cols.push({ lab: one1(T[0][j]), top: tax[j], hl: j === tr.n,
    segs: [{ f: amt1(tax[j]) / mx * 0.92, col: 'var(--blue)', t: '' }, { f: Math.max(0, amt1(tot[j]) - amt1(tax[j])) / mx * 0.92, col: 'var(--blue5)', t: tot[j], ink: 'var(--blue-d)' }], under: tr.unders[j - 1] });
  var b = C1(0, 0, 864, 300, head1('i-chart', '상속재산가액 (막대) 과 상속세 (진한 칸, 위 숫자)', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="position:absolute;left:16pt;right:16pt;top:50pt;bottom:10pt">' + vcols1(cols, { h: 150, inset: 34 }) + '</div>');
  b += C1(0, 312, 864, 64, '<div style="display:flex;align-items:center;gap:10pt;height:100%;flex-wrap:wrap">' + icb('i-tool') + '<span style="font-size:13pt;font-weight:700;margin-right:4pt">매 시점 같음</span>' +
    tr.chips.map(function (c) { return pill(E(c[0].replace(/^\(−\)\s*/, '− ') + '  ' + c[1]), 'p-tint'); }).join('') + '</div>', 'padding:6pt 16pt');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^상속세 — 마무리/, function (u, X) {   
  var T = R1(u, 0).slice(1), hi = HI1(u, 0), b = '';
  var ded = T.filter(function (r) { return /공제/.test(r[0]); })[0], money = T.filter(function (r) { return r !== ded; });
  var n = T.length, gw = (864 - 12 * (n - 1)) / n, mx = Math.max.apply(null, money.map(function (r) { return amt1(r[1]); }).concat([1])), x = 0;
  money.forEach(function (r, i) { b += '<div class="abs" style="left:' + x + 'pt;top:0;width:' + gw + 'pt;height:170pt">' + K1(['i-doc', 'i-chart'][i % 2], r[0], r[1], E(r[2]), hi.indexOf(T.indexOf(r)) >= 0 && i === 0, null, 30) + '</div>'; x += gw + 12; });
  if (ded) {
    var parts = String(ded[2]).split(/\s*[·,]\s*/).filter(Boolean).map(function (t) { return { t: t, v: amt1(t.replace(/^\D+/, '')) }; }), sum = parts.reduce(function (a, p) { return a + p.v; }, 0) || 1, cs = ['var(--blue)', 'var(--blue2)', 'var(--blue3)', 'var(--blue4)'];
    b += C1(x, 0, 864 - x, 170, head1('i-scale', '상속공제 합계 (현재)') +
      '<div class="num" style="margin-top:6pt;font-size:28pt;font-weight:800;letter-spacing:-1pt">' + E(sv1(ded[1]).v) + '<span style="font-size:15pt;font-weight:700;margin-left:2pt">' + E(sv1(ded[1]).u) + '</span></div>' +
      '<div style="display:flex;height:12pt;border-radius:6pt;overflow:hidden;margin-top:6pt;background:var(--tint)">' + parts.map(function (p, i) { return '<div style="width:' + (p.v / sum * 100).toFixed(2) + '%;background:' + cs[i % 4] + '"></div>'; }).join('') + '</div>' +
      '<div style="display:flex;gap:12pt;margin-top:6pt;flex-wrap:wrap">' + parts.map(function (p, i) { return '<span style="display:inline-flex;align-items:center;gap:5pt;font-size:12pt;color:var(--t2)"><span style="width:9pt;height:9pt;border-radius:3pt;background:' + cs[i % 4] + '"></span>' + E(p.t) + '</span>'; }).join('') + '</div>' +
      '<div style="margin-top:4pt;font-size:12pt;color:var(--t3)">상속재산가액에서 빼는 금액 → 과세표준</div>');
  }
  b += C1(0, 184, 864, 192, head1('i-scale', '상속세 — 현재 대비 20년 후', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:14pt">' +
    hbars1(money.map(function (r, i) { return [r[0], r[1], amt1(r[1]) / mx, i === money.length - 1, '']; }), { lw: 150, vw: 100, py: 12, bh: 22, vfs: 18 }) + '</div>');
  return [{ title: emNum(X.cc || u.title), body: b }];
});


P1(/^급여 — 연봉별/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), hi = HI1(u, 0), T2 = R1(u, 1);
  var sel = hi.length ? hi[0] : 0, mx = Math.max.apply(null, body.map(function (r) { return amt1(r[0]); }).concat([1]));
  var rowsH = body.map(function (r, i) { var on = i === sel, tot = amt1(r[0]) || 1, f = amt1(r[0]) / mx;
    var a = amt1(r[6]) / tot * f, t = amt1(r[3]) / tot * f, h = amt1(r[4]) / tot * f;
    return '<div style="display:flex;align-items:center;gap:10pt;height:38pt;' + (on ? 'background:var(--tint);border-radius:8pt;' : '') + 'padding:0 6pt">' +
      '<div class="num" style="width:74pt;flex:none;font-size:13pt;font-weight:' + (on ? 800 : 600) + ';color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0].replace(/\s*◀/, '')) + '</div>' +
      '<div style="flex:1;display:flex;height:13pt;border-radius:7pt;overflow:hidden;background:var(--tint)"><div style="width:' + (a * 100).toFixed(1) + '%;background:' + (on ? 'var(--blue)' : 'var(--blue3)') + '"></div>' +
      '<div style="width:' + (t * 100).toFixed(1) + '%;background:#E6837A"></div><div style="width:' + (h * 100).toFixed(1) + '%;background:#F3B9B3"></div></div>' +
      '<div class="num" style="width:226pt;flex:none;font-size:12pt;color:var(--t2);white-space:nowrap;line-height:1.25">세후 <b style="color:var(--ink)">' + E(r[6]) + '</b>, 소득세 ' + E(r[3]) + ', 건보 ' + E(r[4]) + '<br><span style="color:var(--t3)">공제 ' + E(r[1]) + ', 과표 ' + E(r[2]) + ', 회사 ' + E(r[5]) + ', 본인 ' + E(r[7]) + '</span></div>' +
      '<div class="num" style="width:50pt;flex:none;text-align:right;font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[8]) + '</div></div>';
  }).join('');
  var b = C1(0, 0, 572, 376, head1('i-chart', '연봉별 세후 실수령, 근로소득세, 건보료 (본인)', pill('오른쪽 = 실효부담률', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:8pt">' + rowsH + '</div>' +
    '<div style="display:flex;gap:14pt;margin-top:8pt;font-size:12pt;color:var(--t3)"><span>■ 세후 실수령</span><span style="color:#D2463A">■ 근로소득세</span><span style="color:#E8958C">■ 건보료 본인</span></div><!--DET-->');
  var s = body[sel];
  b += C1(584, 0, 280, 214, head1('i-person', '기준 연봉 ' + s[0].replace(/\s*◀/, '')) + '<div class="num" style="margin-top:8pt;font-size:30pt;font-weight:800;color:var(--blue)">' + E(s[8]) + '</div><div style="font-size:12pt;color:var(--t3)">' + E(hd[8]) + '</div>' +
    '<div style="margin-top:6pt">' + kv1([[hd[1], s[1]], [hd[2], s[2]], [hd[5], s[5]], [hd[7], s[7]]], { py: 2.5 }) + '</div>', HLB);
  var oth = body.map(function (r, i) { return r[0].replace(/\s*◀/, '') + ' : 공제 ' + r[1] + ', 과표 ' + r[2] + ', 회사 건보 ' + r[5] + ', 본인 ' + r[7]; });
  b += C1(584, 226, 280, 150, head1('i-doc', '전제, 효과') + '<div style="margin-top:4pt">' + T2.slice(1).map(function (r) { return '<div style="font-size:12pt;line-height:1.35;margin-top:4pt"><b style="color:var(--blue)">' + E(r[0]) + '</b> ' + E(r[1]) + ' <span style="color:var(--t3)">(' + E(r[2]) + ')</span></div>'; }).join('') + '</div>');
  b = b.replace('<!--DET-->', '');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^임원 퇴직급여 — 계산 구조/, function (u, X) {
  var T = R1(u, 0).slice(1), hi = HI1(u, 0), steps = T.filter(function (r) { return /^[①-⑧]/.test(r[0]); }), rest = T.filter(function (r) { return !/^[①-⑧]/.test(r[0]); });
  var st = steps.map(function (r, i) { var on = hi.indexOf(T.indexOf(r)) >= 0, minus = /공제/.test(r[0]);
    return '<div style="display:flex;align-items:center;gap:10pt;padding:' + (steps.length > 7 ? 2 : 4.5) + 'pt 0;' + (i < steps.length - 1 ? 'border-bottom:0.75pt dashed var(--rule)' : '') + '">' +
      '<div style="width:24pt;height:24pt;border-radius:12pt;flex:none;display:flex;align-items:center;justify-content:center;font-size:13pt;font-weight:800;' + (on ? 'background:var(--blue);color:#fff' : 'background:var(--tint);color:var(--blue)') + '">' + E(r[0].charAt(0)) + '</div>' +
      '<div style="flex:1;min-width:0"><div style="font-size:13pt;font-weight:700">' + E(r[0].slice(1).trim()) + '</div><div style="font-size:12pt;color:var(--t3);line-height:1.3">' + E(r[1]) + '</div></div>' +
      '<div class="num" style="flex:none;font-size:' + (on ? 17 : 14) + 'pt;font-weight:800;color:' + (on ? 'var(--blue)' : (minus ? 'var(--t2)' : 'var(--ink)')) + '">' + (minus ? '− ' : '') + E(r[2]) + '</div></div>'; }).join('');
  var b = C1(0, 0, 540, 376, head1('i-tool', '퇴직급여 → 퇴직소득세 → 세후 수령') + '<div style="margin-top:4pt">' + st + '</div>');
  var mxr = rest.filter(function (r) { return /최대 배수/.test(r[0]); })[0], oth = rest.filter(function (r) { return r !== mxr; });
  var y = 0;
  if (mxr) { b += C1(552, 0, 312, 150, head1('i-check', mxr[0]) + '<div style="margin-top:8pt;font-size:13pt;line-height:1.45;color:var(--ink)">' + E(mxr[1]) + '</div><div style="margin-top:4pt">' + pill(E(mxr[2]), 'p-tint') + '</div>', HLB); y = 162; }
  b += C1(552, y, 312, 376 - y, head1('i-doc', '법인 효과, 한도, 요건') + oth.map(function (r) { return '<div style="margin-top:7pt;font-size:12pt;line-height:1.38"><b style="color:var(--blue)">' + E(r[0]) + '</b> ' + E(r[1]) + '<div style="color:var(--t3)">' + E(r[2]) + '</div></div>'; }).join(''));
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^임원 퇴직급여 — 연봉별/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), hi = HI1(u, 0), mx = Math.max.apply(null, body.map(function (r) { return Math.max(amt1(r[1]), amt1(r[3])); }).concat([1]));
  var rows = body.map(function (r, i) { var on = hi.indexOf(i) >= 0;
    var br = function (v, s, col) { return '<div style="display:flex;align-items:center;gap:8pt;height:16pt"><div style="flex:1;height:11pt;border-radius:6pt;background:var(--tint)"><div style="width:' + (amt1(v) / mx * 100).toFixed(1) + '%;height:100%;border-radius:6pt;background:' + col + '"></div></div>' +
      '<div class="num" style="width:200pt;flex:none;font-size:12pt;white-space:nowrap"><b>' + E(v) + '</b> <span style="color:var(--t3)">' + E(s) + '</span></div></div>'; };
    return '<div style="display:flex;align-items:center;gap:12pt;padding:5pt 8pt;' + (on ? 'background:var(--tint);border-radius:10pt;' : 'border-bottom:0.75pt dashed var(--rule);') + '">' +
      '<div class="num" style="width:84pt;flex:none;font-size:14pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0].replace(/\s*◀/, '')) + '</div><div style="flex:1">' +
      br(r[1], '세후 ' + r[2], on ? 'var(--blue)' : 'var(--blue3)') + br(r[3], '세 ' + r[4] + ', 세후 ' + r[5], '#9FB3EC') + '</div></div>'; }).join('');
  
  var base = body.filter(function (r, i) { return /◀/.test(r[0]) || hi.indexOf(i) >= 0; })[0], bs = base ? base[0].replace(/\s*◀/, '').trim() : '', mxm = /최대\s*([\d.]+배)/.exec(hd[3]);
  var prem = mxm && bs ? '「최대 ' + mxm[1] + '」 = 퇴직 전 3년 연평균급여 ' + bs + ' (입력값, ◀ 줄) 기준 한도 배수 — 연봉이 다르면 배수도 달라짐 (아래 막대 = 그 연봉의 한도 최대 퇴직급여)' : '';
  var b = C1(0, 0, 864, prem ? 318 : 376, head1('i-chart', '연평균급여별 퇴직급여 — 위 = ' + hd[1] + ', 아래 = 한도 최대') + '<div style="margin-top:' + (prem ? 4 : 10) + 'pt">' + rows + '</div>');
  if (prem) b += noteBox(prem, 46, { lab: '전제' });
  return [{ title: emNum(X.cc || (mxm && bs ? '연봉별 퇴직급여 — 2배 지급 vs 한도 최대 (' + mxm[1] + ' = 연평균급여 ' + bs + ' 기준)' : '연봉별 퇴직급여 — ' + hd[1] + ' vs ' + hd[3])), body: b }];
});

P1(/^급여, 퇴직급여 — 마무리|^급여·퇴직급여 — 마무리/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), con = body.filter(function (r) { return /^결론/.test(r[0]); })[0], ps = body.filter(function (r) { return r !== con; });
  var gw = (864 - 24) / 3, b = '';
  ps.slice(0, 3).forEach(function (r, i) { var on = /퇴직/.test(r[0]);
    b += C1(i * (gw + 12), 0, gw, 300, '<div style="display:flex;align-items:center;gap:8pt">' + circ(i + 1, !on) + '<span style="font-size:17pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</span>' + (on ? pill('세부담 최저', 'p-blue', 'margin-left:auto') : '') + '</div>' +
      '<div style="margin-top:8pt;font-size:13pt;font-weight:700;line-height:1.35">' + E(r[1]) + '</div>' +
      [[hd[2], r[2]], [hd[3], r[3]], [hd[5], r[5]], [hd[4], r[4]]].map(function (q) { return '<div style="margin-top:6pt;padding-top:5pt;border-top:0.75pt dashed var(--rule);font-size:12pt;line-height:1.35"><span style="color:var(--t3)">' + E(q[0]) + '</span><div style="color:var(--ink)">' + E(one1(q[1])) + '</div></div>'; }).join(''), on ? HLB : '');
  });
  if (con) b += C1(0, 312, 864, 64, '<div style="display:flex;align-items:center;gap:12pt;height:100%">' + icb('i-flag') + '<span style="font-size:15pt;font-weight:800;color:var(--blue)">' + E(con[1]) + '</span><span style="font-size:12pt;color:var(--t2)">' + E(con[2] + ', ' + con[3]) + '</span></div>', 'padding:6pt 16pt');
  return [{ title: emNum(X.cc || (con ? con[1] : u.title)), body: b }];
});

P1(/개정 리스크$/, function (u, X) {   
  var all = (X.units || []).filter(function (v) { return v.type === 'content' && /개정 리스크$/.test(T1(v.title)); });
  if (all.length > 1 && all[0] !== u) return [{ skip: true }];
  var T = R1(u, 0), hd = T[0], body = [], out = [], per = 4, CH = 182;
  (all.length > 1 ? all : [u]).forEach(function (v) { body = body.concat(R1(v, 0).slice(1)); });
  var bx = function (lab, txt, on) { return '<div style="flex:1;min-width:0;height:104pt;box-sizing:border-box;border-radius:11pt;padding:7pt 10pt;' + (on ? 'background:var(--tint);border:1pt solid var(--blue3)' : 'background:#F3F4F8;border:1pt solid var(--rule)') + '">' +
    '<div style="font-size:12pt;font-weight:800;white-space:nowrap;color:' + (on ? 'var(--blue)' : 'var(--t2)') + '">' + E(lab) + '</div><div style="margin-top:3pt;font-size:12pt;line-height:1.3;color:' + (on ? 'var(--blue-d)' : 'var(--ink)') + ';font-weight:' + (on ? 600 : 400) + '">' + E(txt) + '</div></div>'; };
  for (var p = 0; p < body.length; p += per) {
    var b = '';
    body.slice(p, p + per).forEach(function (r, i) { var x = (i % 2) * 438, y = Math.floor(i / 2) * (CH + 12);
      b += C1(x, y, 426, CH, '<div style="font-size:14pt;font-weight:800;line-height:1.2">' + E(r[0]) + '</div>' +
        '<div style="display:flex;gap:6pt;margin-top:5pt;align-items:center">' + bx('기존 — ' + hd[1], r[1], false) + '<div style="flex:none;color:var(--blue3);font-size:14pt;font-weight:800">→</div>' + bx('이후 — ' + hd[2], r[2], true) + '</div>' +
        '<div style="margin-top:6pt;border-radius:9pt;background:var(--risktint);padding:4pt 10pt;font-size:12pt;line-height:1.3;color:var(--risk)"><b style="margin-right:6pt">시사점</b>' + E(r[3]) + '</div>', 'padding:10pt 14pt');
    });
    out.push({ eyebrow: X.tt.replace(/\s*\(\d\/\d\)\s*$/, '') + (body.length > per ? ' (' + (p / per + 1) + '/' + Math.ceil(body.length / per) + ')' : ''), title: emNum('2027.7.1. 개정안 — 현행 대비 강화 ' + body.length + '개 항목'), body: b, foot: '<b>읽는 법</b>  회색 = 기존 (' + E(hd[1]) + '), 파랑 = 이후 (' + E(hd[2]) + '), 빨강 = 시사점' });
  }
  return out;
});
P1(/개정 리스크 \(구\)$/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), out = [], per = 6;
  for (var p = 0; p < body.length; p += per) {
    var b = '';
    body.slice(p, p + per).forEach(function (r, i) { var x = (i % 2) * 438, y = Math.floor(i / 2) * 126;
      b += C1(x, y, 426, 118, '<div style="display:flex;align-items:center;gap:8pt"><span style="font-size:14pt;font-weight:800">' + E(r[0]) + '</span></div>' +
        '<div style="display:flex;gap:8pt;margin-top:6pt;align-items:flex-start"><div style="width:118pt;flex:none;background:#EDEFF4;border-radius:9pt;padding:5pt 8pt;font-size:12pt;color:var(--t2);line-height:1.3">' + E(r[1]) + '</div>' +
        '<div style="flex:none;color:var(--blue3);font-size:14pt;font-weight:800;margin-top:4pt">→</div><div style="flex:1;font-size:12pt;color:var(--blue-d);font-weight:600;line-height:1.3">' + E(r[2]) + '</div></div>' +
        '<div style="margin-top:5pt;font-size:12pt;font-weight:700;color:var(--risk);line-height:1.3">판정 : ' + E(r[3]) + '</div>');
    });
    out.push({ eyebrow: X.tt + (body.length > per ? ' (' + (p / per + 1) + '/' + Math.ceil(body.length / per) + ')' : ''), title: emNum(X.cc || '2027.7.1. 개정안 — 현행 대비 강화 ' + body.length + '개 항목'), body: b, foot: '<b>읽는 법</b>  회색 = ' + E(hd[1]) + ', 파랑 = ' + E(hd[2]) + ', 오른쪽 위 = ' + E(hd[3]) });
  }
  return out;
});

P1(/사업용자산비율 검토$/, function (u, X) {
  var T = R1(u, 0), body = T.slice(1), tot = body[body.length - 1], items = body.slice(0, -1), mx = Math.max.apply(null, items.map(function (r) { return amt1(r[1]); }).concat([1]));
  var b = '<div class="abs" style="left:0;top:0;width:280pt;height:180pt">' + K1('i-scale', tot[0], tot[1], E(tot[2]), true) + '</div>';
  var cols = ['var(--blue)', 'var(--blue2)', 'var(--blue3)', '#9FB3EC', 'var(--blue4)', 'var(--blue5)'], ta = amt1(tot[1]) || 1;
  b += C1(0, 192, 280, 184, head1('i-chart', '구성') + '<div style="display:flex;height:18pt;border-radius:9pt;overflow:hidden;margin-top:12pt;background:var(--tint)">' +
    items.map(function (r, i) { return '<div style="width:' + (amt1(r[1]) / ta * 100).toFixed(2) + '%;background:' + cols[i % 6] + '"></div>'; }).join('') + '</div>' +
    '<div style="margin-top:10pt">' + items.map(function (r, i) { return '<div style="display:flex;align-items:center;gap:6pt;font-size:12pt;color:var(--t2);margin-top:3pt"><span style="width:9pt;height:9pt;border-radius:3pt;background:' + cols[i % 6] + '"></span>' + E(r[0]) + '</div>'; }).join('') + '</div>');
  b += C1(292, 0, 572, 376, head1('i-doc', '사업무관자산 항목별 (상증령 §15⑤)', pill('금액', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:6pt">' +
    hbars1(items.map(function (r) { return [r[0], r[1], amt1(r[1]) / mx, amt1(r[1]) === mx, r[2]]; }), { lw: 236, vw: 70, py: 6, bh: 11 }) + '</div>');
  return [{ title: emNum(X.cc || ('사업무관자산 ' + tot[1] + ' ' + tot[2])), body: b }];
});

P1(/가업상속공제 반영 가정 20년 추이/, function (u, X) {
  var T = R1(u, 0), pay = rowRe1(T, /납부할 상속세/), sav = rowRe1(T, /미반영 대비 절감/), mx = Math.max.apply(null, pay.slice(1).map(function (v, k) { return amt1(v) + amt1(sav[k + 1]); }).concat([1]));   
  var tr = trend1(T, { skip: /^(납부할 상속세|미반영 대비 절감)/, short: function (k) { var m = /^(.*?)\s*\((.*)\)$/.exec(k); if (m && /\d/.test(m[2])) { var t = m[1].replace(/기간$/, '').replace(/^경영$/, '경영기간') + ' = ' + m[2]; X.__fn = X.__fn || []; if (X.__fn.indexOf(t) < 0) X.__fn.push(t); } return k.replace(/\s*\(.*\)$/, '').replace(/기간$/, '').replace(/^사업용자산상당액/, '사업용자산').replace(/^적용 공제액/, '공제액'); } });
  var cols = []; for (var j = 1; j <= tr.n; j++) { var h = lines1(T[0][j]); cols.push({ lab: h[0], top: '납부 ' + pay[j], hl: j === tr.n, segs: [{ f: amt1(pay[j]) / mx * 0.9, col: 'var(--blue)' }, { f: amt1(sav[j]) / mx * 0.9, col: 'var(--blue5)', t: '절감 ' + sav[j], ink: 'var(--blue-d)' }], under: [h[1] || ''].concat(tr.unders[j - 1]) }); }
  var b = C1(0, 0, 864, tr.chips.length ? 312 : 376, head1('i-chart', '납부할 상속세 (진한 칸) 와 미반영 대비 절감 (연한 칸)', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="position:absolute;left:16pt;right:16pt;top:58pt;bottom:8pt">' + vcols1(cols, { h: 104, inset: 30 }) + '</div>');
  if (tr.chips.length) b += C1(0, 324, 864, 52, '<div style="display:flex;align-items:center;gap:10pt;height:100%">' + icb('i-tool') + tr.chips.map(function (c) { return pill(E(c[0] + '  ' + c[1]), 'p-tint'); }).join('') + '</div>', 'padding:4pt 16pt');
  return [{ title: emNum(X.cc || u.title), body: b, foot: X.__fn ? '<b>기준</b>  ' + E(X.__fn.join(', ')) : '' }];
});

P1(/증여세특례 — 요건 점검/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), n = body.length, gw = (864 - 12 * (n - 1)) / n, b = '';
  body.forEach(function (r, i) { var ok = /충족|적용|양호/.test(r[3]), warn = /추징|미충족|위반/.test(r[3]) && !ok;
    b += C1(i * (gw + 12), 0, gw, 250, '<div style="display:flex;align-items:center;gap:8pt">' + (warn ? '<div class="chk" style="background:var(--risk)">' + icon('i-alert', 13) + '</div>' : '<div class="chk">' + icon('i-check', 13) + '</div>') +
      '<span style="font-size:14pt;font-weight:800">' + E(r[0]) + '</span></div>' +
      '<div class="num" style="margin-top:14pt;font-size:' + (r[2].length > 6 ? 20 : 28) + 'pt;font-weight:800;color:' + (warn ? 'var(--risk)' : 'var(--blue)') + '">' + E(r[2]) + '</div><div style="font-size:12pt;color:var(--t3)">' + E(hd[2]) + '</div>' +
      '<div style="margin-top:10pt;padding-top:8pt;border-top:0.75pt dashed var(--rule);font-size:12pt;line-height:1.38;color:var(--t2)"><span style="color:var(--t3)">' + E(hd[1]) + '</span><br>' + E(r[1]) + '</div>' +
      '<div style="position:absolute;left:16pt;right:16pt;bottom:12pt;font-size:12pt;font-weight:700;line-height:1.3;color:' + (warn ? 'var(--risk)' : 'var(--blue)') + '">' + E(r[3]) + '</div>', ok ? '' : '');
  });
  var okN = body.filter(function (r) { return /충족|적용|양호/.test(r[3]); }).length;
  b += C1(0, 262, 864, 114, head1('i-shield', '판정') + '<div style="display:flex;align-items:center;gap:14pt;margin-top:10pt">' + bar(okN / n, 'var(--blue)', 16) +
    '<span class="num" style="font-size:22pt;font-weight:800;color:var(--blue)">' + okN + ' / ' + n + '</span><span style="font-size:13pt;color:var(--t2)">요건 확인 (사후관리는 실행 뒤 유지)</span></div>');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/증여세특례 — 실행 시점 비교/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), hi = HI1(u, 0), sum = rowRe1(T, /특례 플랜 증여세 합계/), gen = rowRe1(T, /일반 증여 시/);
  var nC = hd.length - 2, best = 1; for (var j = 1; j <= nC; j++) if (amt1(sum[j]) < amt1(sum[best])) best = j;
  var gw = 196, b = '';
  for (j = 1; j <= nC; j++) { var on = j === best, m = /^(.)\s*(.*?)\s*\((.*)\)$/.exec(hd[j]) || [0, j, hd[j], ''];
    b += C1((j - 1) * (gw + 12), 0, gw, 376, '<div style="display:flex;align-items:center;gap:7pt">' + circ(m[1], !on) + pill(E(m[3]), 'p-grey') + (on ? pill('최소', 'p-blue', 'margin-left:auto') : '') + '</div>' +
      '<div style="margin-top:6pt;font-size:15pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(m[2]) + '</div><div style="font-size:12pt;color:var(--t3);margin-top:4pt">' + E(sum[0]) + '</div>' +
      '<div class="num" style="font-size:26pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(sum[j]) + '</div><div style="display:flex;margin:4pt 0 6pt">' + bar(amt1(sum[j]) / amt1(gen[j] || sum[j]), on ? 'var(--blue)' : 'var(--blue3)', 8) + '</div>' +
      kv1(body.filter(function (r) { return r !== sum; }).map(function (r) { return [r[0].replace(/ \(.*\)$/, ''), r[j], /절감/.test(r[0])]; }), { py: 3, lw: 58 }), on ? HLB : ''); }
  var dj = nC + 1;
  b += C1(nC * (gw + 12), 0, 864 - nC * (gw + 12), 376, head1('i-scale', hd[dj]) + '<div style="margin-top:8pt">' + body.map(function (r) { var neg = /^-/.test(r[dj]);
    return '<div style="display:flex;justify-content:space-between;gap:6pt;padding:3.5pt 0;border-bottom:0.75pt dashed var(--rule);font-size:12pt"><span style="color:var(--t2)">' + E(r[0].replace(/ \(.*\)$/, '')) + '</span><span class="num" style="font-weight:800;color:' + (neg ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[dj]) + '</span></div>'; }).join('') + '</div>', 'background:var(--tint);box-shadow:none');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/이전 지분율별 세부담/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), hi = HI1(u, 0), mx = Math.max.apply(null, body.map(function (r) { return amt1(r[4]); }).concat([1]));
  var rows = body.map(function (r, i) { var on = hi.indexOf(i) >= 0;
    return '<div style="display:flex;align-items:center;gap:12pt;padding:4pt 8pt;' + (on ? 'background:var(--tint);border-radius:10pt' : 'border-bottom:0.75pt dashed var(--rule)') + '">' +
      '<div style="width:132pt;flex:none"><div class="num" style="font-size:15pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div><div class="num" style="font-size:12pt;color:var(--t3)">실제 ' + E(r[1]) + ', ' + E(r[2]) + '</div></div>' +
      '<div style="flex:1;position:relative;height:22pt"><div style="position:absolute;left:0;top:2pt;height:18pt;width:' + (amt1(r[4]) / mx * 100).toFixed(1) + '%;border-radius:9pt;background:var(--blue5)"></div>' +
      '<div style="position:absolute;left:0;top:6pt;height:10pt;width:' + Math.max(0.6, amt1(r[3]) / mx * 100).toFixed(1) + '%;border-radius:5pt;background:' + (on ? 'var(--blue)' : 'var(--blue2)') + '"></div></div>' +
      '<div class="num" style="width:290pt;flex:none;font-size:12pt;white-space:nowrap">특례 <b style="color:var(--blue)">' + E(r[3]) + '</b> / 일반 ' + E(r[4]) + ' / 절감 <b>' + E(r[5]) + '</b> / ' + E(r[6]) + '</div></div>'; }).join('');
  var b = C1(0, 0, 864, 376, head1('i-chart', '이전 지분율별 — 진한 막대 = ' + hd[3] + ', 연한 막대 = ' + hd[4], pill('실효세율 = 맨 오른쪽', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:10pt">' + rows + '</div>');
  return [{ title: emNum(X.cc || ('지분 100% 이전 시 특례 ' + body[body.length - 1][3] + ', 일반증여 대비 ' + body[body.length - 1][5] + ' 절감')), body: b }];
});

P1(/^가업승계 — 마무리/, function (u, X) {
  var T = R1(u, 0).slice(1), hi = HI1(u, 0), cap = CP1(u)[0] || '';
  var money = T.filter(function (r) { return /원$/.test(r[1]); }), rule = T.filter(function (r) { return !/원$/.test(r[1]); });
  var n = Math.min(4, money.length), gw = (864 - 12 * (n - 1)) / n, b = '', mn = 0;
  money.forEach(function (r, i) { if (amt1(r[1]) < amt1(money[mn][1])) mn = i; });
  money.slice(0, 4).forEach(function (r, i) { b += '<div class="abs" style="left:' + (i * (gw + 12)) + 'pt;top:0;width:' + gw + 'pt;height:150pt">' + K1(['i-doc', 'i-gift', 'i-cal', 'i-shield'][i], r[0], r[1], E(r[2]), i === mn, i === mn ? '최소' : null, 28) + '</div>'; });
  var vmax = Math.max.apply(null, money.map(function (r) { return amt1(r[1]); }).concat([1]));
  b += C1(0, 162, 380, 214, head1('i-chart', '방법별 세액', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:6pt">' + hbars1(money.map(function (r, i) { return [r[0].replace(/ — /, ' '), r[1], amt1(r[1]) / vmax, i === mn]; }), { lw: 130, vw: 70, py: 4, bh: 11, vfs: 13 }) + '</div>');
  b += C1(392, 162, 472, 214, head1('i-alert', '2027.7.1. 개정 — 현행 → 개정안', pill('국회 심의 중', 'p-risk', 'margin-left:auto')) + '<div style="margin-top:4pt">' + rule.map(function (r) {
    return '<div style="display:flex;align-items:center;gap:10pt;padding:4.5pt 0;border-bottom:0.75pt dashed var(--rule)"><span style="width:118pt;flex:none;font-size:12pt;font-weight:700">' + E(r[0]) + '</span><span class="num" style="width:120pt;flex:none;font-size:13pt;font-weight:800;color:var(--blue)">' + E(r[1]) + '</span><span style="font-size:12pt;color:var(--t2)">' + E(r[2]) + '</span></div>'; }).join('') + '</div>');
  return [{ title: emNum(X.cc || ('증여특례 올해 ' + (money[1] || [0, ''])[1] + ', 가업상속공제 적용 시 ' + (money[3] || [0, ''])[1])), body: b, foot: '<b>개정</b>  ' + E(cap) }];
});



function scenCols1(T, o) {
  o = o || {}; var hd = T[0].map(one1), body = T.slice(1), n = hd.length - 1, x0 = o.x || 0, y0 = o.y || 0, W = o.w || 864, H = o.h || 376, gap = 12, gw = (W - gap * (n - 1)) / n;
  var big = o.big ? rowRe1(T, o.big) : null, hl = o.hl == null ? -1 : o.hl, vmax = big ? Math.max.apply(null, big.slice(1).map(amt1).concat([1])) : 1, out = '';
  for (var j = 1; j <= n; j++) { var on = j === hl;
    out += C1(x0 + (j - 1) * (gw + gap), y0, gw, H, '<div style="display:flex;align-items:center;gap:7pt">' + circ(String.fromCharCode(96 + j), !on) + '<span style="font-size:' + (hd[j].length > 14 ? 13 : 15) + 'pt;font-weight:800;line-height:1.2;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(hd[j]) + '</span>' + (on && o.badge ? pill(E(o.badge), 'p-blue', 'margin-left:auto') : '') + '</div>' +
      (big ? '<div style="font-size:12pt;color:var(--t3);margin-top:8pt">' + E(big[0].replace(/ \(.*\)$/, '')) + '</div><div class="num" style="font-size:' + (o.bfs || 26) + 'pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(big[j]) + '</div>' +
        (o.bar === false ? '' : '<div style="display:flex;margin:4pt 0 6pt">' + bar(amt1(big[j]) / vmax, on ? 'var(--blue)' : 'var(--blue3)', 8) + '</div>') : '<div style="height:8pt"></div>') +
      kv1(body.filter(function (r) { return r !== big; }).map(function (r) { return [r[0].replace(/^　/, '').replace(/ \((소득세법|상증법)[^)]*\)$/, ''), r[j], o.em && o.em.test(r[0])]; }), { py: o.py || 3.5, lw: o.lw || 62 }), on ? HLB : '');
  }
  return out;
}
function vsText1(T, hl, h, badge) {   
  var hd = T[0].map(one1), body = T.slice(1), n = body.length, rh = (h - 52) / n, lw = 150, cw = (864 - lw - 24) / 2, o = '';
  [1, 2].forEach(function (j) { var on = j === hl, x = lw + 12 + (j - 1) * (cw + 12);
    o += C1(x, 0, cw, h, '<div style="display:flex;align-items:center;gap:8pt;height:26pt">' + circ(String.fromCharCode(96 + j), !on) + '<span style="font-size:15pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(hd[j]) + '</span>' + (on && badge ? pill(E(badge), 'p-blue', 'margin-left:auto') : '') + '</div>' +
      body.map(function (r, i) { return '<div style="height:' + rh.toFixed(1) + 'pt;display:flex;align-items:center;font-size:12pt;line-height:1.35;color:' + (on ? 'var(--blue-d)' : 'var(--ink)') + ';font-weight:' + (on ? 600 : 400) + ';border-top:0.75pt dashed var(--rule)">' + E(r[j]) + '</div>'; }).join(''), on ? HLB : ''); });
  o += '<div class="abs" style="left:0;top:0;width:' + lw + 'pt;height:' + h + 'pt;padding-top:38pt">' + body.map(function (r) { return '<div style="height:' + rh.toFixed(1) + 'pt;display:flex;align-items:center;font-size:13pt;font-weight:700;color:var(--t2)">' + E(r[0]) + '</div>'; }).join('') + '</div>';
  return o;
}
function flowTop1(st, h) { return '<div class="abs" style="left:0;top:0;width:864pt;height:' + h + 'pt">' + stepRow1(st, { tfs: 14 }) + '</div>'; }
function rowCards1(rows, y, h, o) {   
  o = o || {}; var n = rows.length, gw = (864 - 12 * (n - 1)) / n;
  return rows.map(function (r, i) { var on = o.hi && o.hi.indexOf(i) >= 0, risk = o.risk && o.risk.test(r[1] || '');
    return C1(i * (gw + 12), y, gw, h, '<div style="font-size:14pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div>' +
      (r[1] != null ? '<div style="margin-top:6pt">' + pill(E(r[1]), risk ? 'p-risk' : (on ? 'p-blue' : 'p-tint'), 'white-space:normal') + '</div>' : '') +
      (r[2] != null ? '<div style="margin-top:7pt;font-size:12pt;color:var(--t2);line-height:1.38">' + E(r[2]) + '</div>' : ''), on ? HLB : ''); }).join('');
}

P1(/^특정법인 — 증여세 과세제외 이전한도/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), hi = HI1(u, 0), gw = (864 - 24) / 3, b = '';
  var sel = body.findIndex(function (r) { return /법인세만 부담/.test(r[0]); }); if (sel < 0) sel = 1;
  var vmax = Math.max.apply(null, body.map(function (r) { return amt1(r[1]); }).concat([1]));
  body.forEach(function (r, i) { var on = i === sel, m = /^(.)\s*(.*?)(?: — (.*))?$/.exec(r[0]) || [0, i + 1, r[0], ''];
    b += C1(i * (gw + 12), 0, gw, 376, '<div style="display:flex;align-items:center;gap:7pt">' + circ(m[1], !on) + '<span style="font-size:14pt;font-weight:800;line-height:1.2;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(m[2]) + '</span></div>' +
      (m[3] ? '<div style="margin-top:6pt">' + pill(E(m[3]), on ? 'p-blue' : 'p-tint') + '</div>' : (/초과/.test(m[2]) ? '<div style="margin-top:6pt">' + pill('자녀 증여세 발생', 'p-risk') + '</div>' : '')) +
      '<div style="font-size:12pt;color:var(--t3);margin-top:10pt">' + E(hd[1]) + '</div><div class="num" style="font-size:30pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</div>' +
      '<div style="display:flex;margin:4pt 0 10pt">' + bar(amt1(r[1]) / vmax, on ? 'var(--blue)' : 'var(--blue3)', 8) + '</div>' +
      kv1([[hd[2], r[2]], [hd[3], r[3]], [hd[4], r[4]], [hd[5], r[5], true], [hd[6], r[6], true]], { py: 5, lw: 50 }), on ? HLB : '');
  });
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^법인 증여 — 재산 무상제공/, function (u, X) {
  var T = R1(u, 0), T2 = R1(u, 1), hi2 = HI1(u, 1);
  var g = function (re) { return rowRe1(T, re); }, r1 = g(/^①/), r2 = g(/^②/), r3 = g(/^③/), r4 = g(/^④/), r5 = g(/^⑤/), r8 = g(/^⑧/);
  var lab = function (r) { return r[0].replace(/^.\s*/, '').replace(/ — .*$/, ''); };
  var b = C1(0, 0, 864, 150, head1('i-scale', '§45의5② 한도 = 직접증여세 (a) − 법인세 상당액 (b)', pill(E(T[0][2] + ' ' + r1[2] + ', ' + T[0][3] + ' ' + r1[3]), 'p-tint', 'margin-left:auto')) +
    '<div style="margin-top:12pt">' + eq1([{ l: '① ' + lab(r1), v: r1[1], fs: 18 }, '→', { l: '② ' + lab(r2), v: r2[1], fs: 18 }, '−', { l: '③ ' + lab(r3), v: r3[1], fs: 18 }, '=', { l: '④ 한도 (a−b)', v: r4[1], fs: 15, grow: 1 }, '→', { l: '⑧ 납부 증여세', v: r8[1], fs: 18, hl: true }], { gap: 8 }) + '</div>');
  b += C1(0, 162, 300, 214, head1('i-people', '자녀별 (' + T[0][2] + ', ' + T[0][3] + ')') + '<div style="margin-top:6pt">' + kv1([[r2[0].replace(/^② /, ''), r2[2] + ' / ' + r2[3]], [r3[0].replace(/^③ /, ''), r3[2] + ' / ' + r3[3]], [r5[0].replace(/^⑤ /, '') + ' ' + r5[1], r5[2] + ' / ' + r5[3]], ['④ 한도', r4[2]], ['⑧ 납부 증여세', r8[2] + ' / ' + r8[3], true]], { py: 4, lw: 55 }) + '</div>');
  var rs = T2.slice(1); var gw = (864 - 312 - 24) / rs.length;
  rs.forEach(function (r, i) { var on = hi2.indexOf(i) >= 0;
    b += C1(312 + i * (gw + 12), 162, gw, 214, '<div style="font-size:12pt;color:var(--t3)">' + E(T2[0][0]) + '</div><div style="font-size:14pt;font-weight:800;line-height:1.25;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div>' +
      '<div class="num" style="margin-top:8pt;font-size:26pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</div><div style="margin-top:6pt;font-size:12pt;color:var(--t2);line-height:1.38">' + E(r[2]) + '</div>', on ? HLB : ''); });
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^1안 가수금 무상대여 — 이자/, function (u, X) {
  var T = R1(u, 0), T2 = R1(u, 1), g = function (re) { return rowRe1(T, re); };
  var bal = g(/잔액/), r1 = g(/적정이자율/), r0 = g(/실제 지급/), y = g(/연간 이익/), cap = g(/원금 상한/), nat = g(/원금의 성격/);
  var b = '<div class="abs" style="left:0;top:0;width:864pt;height:126pt;display:grid;grid-template-columns:repeat(4,1fr);gap:12pt">' +
    K1('i-coin', bal[0], bal[1], E(bal[2])) + K1('i-scale', r1[0], r1[1], E(r1[2])) + K1('i-doc', r0[0], r0[1], E(r0[2])) + K1('i-gift', y[0], y[1], E(y[2]), true, '이전 이익') + '</div>';
  b += C1(0, 138, 864, 100, head1('i-tool', cap[0] + ' (1억원 기준금액 역산)') + '<div style="display:flex;align-items:center;gap:16pt;margin-top:8pt">' +
    eq1([{ l: '산식', v: cap[2], fs: 15 }, '=', { l: cap[0], v: cap[1], fs: 18, hl: true }]) + '<div style="font-size:12pt;color:var(--t2);line-height:1.4"><b style="color:var(--blue)">' + E(nat[0]) + '</b> ' + E(nat[1]) + '<br>' + E(nat[2]) + '</div></div>');
  var rs = T2.slice(1), gw = (864 - 12 * (rs.length - 1)) / rs.length;
  rs.forEach(function (r, i) { b += C1(i * (gw + 12), 250, gw, 126, '<div style="display:flex;align-items:center;gap:8pt">' + circ(i + 1, i > 0) + '<span style="font-size:14pt;font-weight:800">' + E(r[0]) + '</span></div>' +
    '<div style="margin-top:7pt;font-size:12pt;color:var(--t2);line-height:1.4"><span style="color:var(--t3)">' + E(T2[0][1]) + '</span> ' + E(r[1]) + '</div><div style="margin-top:5pt">' + pill(E(r[2]), i ? 'p-tint' : 'p-blue') + '</div>'); });
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^2안 지분 양도 — 가치고정/, function (u, X) {
  var st = FL1(u, 0), T = R1(u, 0), T2 = R1(u, 1), cap = CP1(u), hi2 = HI1(u, 1), out = [];
  var b = flowTop1(st, 168);
  var rows = T.slice(1), gw = (864 - 12 * 2) / 3;
  rows.forEach(function (r, i) { var x = (i % 3) * (gw + 12), y = 180 + Math.floor(i / 3) * 100, on = /되파는|미지급/.test(r[0]);
    b += C1(x, y, gw, 90, '<div style="font-size:12pt;color:var(--t3)">' + E(r[0]) + '</div><div class="num" style="font-size:' + (r[1].length > 16 ? 14 : 18) + 'pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</div>' +
      '<div style="font-size:12pt;color:var(--t2);line-height:1.3;margin-top:2pt">' + E(r[2]) + '</div>', 'padding:9pt 14pt;' + (on ? HLB : '')); });
  out.push({ eyebrow: X.tt + ' — ' + (cap[0] || '대금 조달'), title: emNum(X.cc || '부모 → 자녀법인 지분 양도, 세액만큼 자기주식 매각 후 소각'), body: b });
  var hd = T2[0], sh = T2.slice(1).filter(function (r) { return !/합계|발행주식/.test(r[0]); }), tot = rowRe1(T2, /합계/), iss = rowRe1(T2, /발행주식/), cols = ['var(--blue-d)', 'var(--blue)', 'var(--blue4)'];
  var b2 = C1(0, 0, 864, 300, head1('i-people', cap[1] || '지분 변동') + '<div style="margin-top:10pt">' + [1, 2, 3].map(function (j) {
    return '<div style="display:flex;align-items:center;gap:12pt;margin-top:' + (j > 1 ? 24 : 6) + 'pt"><div style="width:80pt;flex:none;font-size:14pt;font-weight:800">' + E(hd[j]) + '</div>' +
      '<div style="flex:1;display:flex;height:34pt;border-radius:10pt;overflow:hidden;background:var(--tint)">' + sh.map(function (r, i) { var v = num(r[j]);
        return '<div style="width:' + v.toFixed(2) + '%;background:' + cols[i % 3] + ';display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden">' + (v >= 6 ? '<span class="num" style="font-size:12pt;font-weight:700;color:' + (i === 2 ? 'var(--blue-d)' : '#fff') + '">' + E(r[j]) + '</span>' : '') + '</div>'; }).join('') + '</div>' +
      '<div class="num" style="width:150pt;flex:none;font-size:12pt;color:var(--t2)">' + E(sh.filter(function (r) { return num(r[j]) < 6; }).map(function (r) { return r[0] + ' ' + r[j]; }).join(', ')) + '<br>' + E(iss[0] + ' ' + iss[j]) + '</div></div>'; }).join('') + '</div>' +
    '<div style="display:flex;gap:16pt;margin-top:26pt">' + sh.map(function (r, i) { return '<span style="display:inline-flex;align-items:center;gap:6pt;font-size:12pt;color:var(--t2)"><span style="width:10pt;height:10pt;border-radius:3pt;background:' + cols[i % 3] + '"></span>' + E(r[0]) + '</span>'; }).join('') + '<span style="font-size:12pt;color:var(--t3)">' + E(tot[0] + ' ' + tot[1]) + '</span></div>');
  var kid = sh.filter(function (r) { return /자녀법인/.test(r[0]); })[0] || sh[1], ceo = sh[0];
  b2 += C1(0, 312, 864, 64, '<div style="display:flex;align-items:center;gap:12pt;height:100%">' + icb('i-flag') + eq1([{ l: ceo[0] + ' ' + hd[1], v: ceo[1], fs: 14 }, '→', { l: hd[3], v: ceo[3], fs: 14 }, ' ', { l: kid[0] + ' ' + hd[1], v: kid[1], fs: 14 }, '→', { l: hd[3], v: kid[3], fs: 14, hl: true }]) + '</div>', 'padding:6pt 16pt');
  out.push({ eyebrow: X.tt + ' — ' + (cap[1] || '지분 변동'), title: emNum('지분 : ' + ceo[0] + ' ' + ceo[1] + ' → 소각 후 ' + ceo[3] + ', ' + kid[0] + ' ' + kid[1] + ' → 소각 후 ' + kid[3]), body: b2 });
  return out;
});

P1(/^법인 초과배당 — 자녀법인 외/, function (u, X) {
  var T = R1(u, 0), hd = T[0], hl = hd.findIndex(function (h) { return /현재/.test(h); }), cap = CP1(u)[0] || '';
  T = T.map(function (r, i) { return i ? r : r.map(function (h) { return h.replace(/\s*←\s*현재/, ''); }); });
  var nt = NT1(u)[0] || '';   
  return [{ title: emNum(X.cc || u.title), body: scenCols1(T, { big: /초과배당분/, hl: hl, badge: '현재', em: /증여의제|기준금액/, py: 3.5, h: nt ? 286 : 376 }) + (nt ? noteBox(nt, 80, { lab: '전제, 근거' }) : ''), foot: '<b>비교</b>  ' + E(cap) }];
});

P1(/^특정법인 — 마무리/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), hi = HI1(u, 0);
  var div = body.filter(function (r) { return /초과배당/.test(r[0]); }), oth = body.filter(function (r) { return !/초과배당/.test(r[0]); }), b = '';
  oth.forEach(function (r, i) { b += C1(i * 216, 0, 204, 376, '<div style="display:flex;align-items:center;gap:7pt">' + circ(r[0].charAt(0)) + '<span style="font-size:14pt;font-weight:800;line-height:1.2">' + E(r[0].slice(1).trim()) + '</span></div>' +
    '<div style="font-size:12pt;color:var(--t3);margin-top:10pt">' + E(hd[1]) + '</div><div class="num" style="font-size:24pt;font-weight:800;color:var(--blue)">' + E(r[1]) + '</div>' +
    '<div style="margin-top:6pt">' + kv1([[hd[2], r[2]], [hd[3], r[3], true]], { py: 4, lw: 40 }) + '</div><div style="margin-top:8pt;font-size:12pt;color:var(--t2);line-height:1.4">' + E(r[4]) + '</div>'); });
  var x = oth.length * 216;
  b += C1(x, 0, 864 - x, 376, '<div style="display:flex;align-items:center;gap:7pt">' + circ('④') + '<span style="font-size:14pt;font-weight:800">초과배당 — 자녀법인 지분별</span></div>' + div.map(function (r) { var on = hi.indexOf(body.indexOf(r)) >= 0;
    return '<div style="margin-top:8pt;padding:8pt 11pt;border-radius:11pt;' + (on ? 'background:var(--tint);' + HLB : 'border:1pt solid var(--rule)') + '"><div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0].replace(/^④ 초과배당 — /, '')) + '</span><span class="num" style="font-size:16pt;font-weight:800">' + E(r[1]) + '</span></div>' +
      '<div class="num" style="font-size:12pt;color:var(--t2);margin-top:2pt">' + E(hd[2] + ' ' + r[2] + ', ' + hd[3] + ' ' + r[3]) + '</div><div style="font-size:12pt;color:var(--t3);line-height:1.3">' + E(r[4]) + '</div></div>'; }).join(''));
  return [{ title: emNum(X.cc || u.title), body: b }];
});


var JG_CASE = {
  courts: [['처분', '2021. 7. 8.', '증여세 등 128.55억원 고지'], ['조세심판원', '2023. 6. 12.', '심판청구 기각'], ['1심', '사건번호 확인 필요', '원고 승소 (처분 취소)'],
    ['원심 부산고등법원', '2025. 8. 29. 선고 2024누22778', '피고 항소 기각'], ['대법원', '2026. 4. 9. 선고 2025두35238', '상고 기각 — 처분 전부 취소 확정']],
  rules: [['① 과세대상', '인정', '신설법인 설립부터 합병까지 일련의 거래 = 사업 양수도와 경제적 실질 유사 (상증법 §4①6호, 4호, §42의2①)'],
    ['② 증여재산가액', '위법', '지분율 변동 × 합병 후 1주 가치 (상증령 §32의2①1호) 불가, 경영으로 거둔 순이익, 순자산까지 포함 → 같은 항 2호도 아님'],
    ['③ 결론', '처분 전부 취소', '제출 자료만으로 사업 양수도로 얻은 이익 산정 불가 (대법원 상고 기각, 원심 판단 정당)']]
};
P1(/^일감몰아주기 — 판례 검토/, function (u, X) {
  var T = R1(u, 0), rows = T.slice(1), todo = (rows.filter(function (r) { return /대응 과제/.test(r[0]); })[0] || [])[1] || '';
  var b = '', sv = '', LW = 520;
  
  var n = JG_CASE.courts.length, cw = (864 - 18 * (n - 1)) / n;
  JG_CASE.courts.forEach(function (c, i) { var last = i === n - 1, x = i * (cw + 18);
    b += '<div class="abs" style="left:' + x.toFixed(1) + 'pt;top:0;width:' + cw.toFixed(1) + 'pt;height:64pt;box-sizing:border-box;border-radius:11pt;padding:5pt 8pt;' + (last ? HL : 'background:#fff;box-shadow:var(--shadow)') + '">' +
      '<div style="font-size:12pt;font-weight:800;color:' + (last ? '#fff' : 'var(--blue)') + '">' + E(c[0]) + '</div><div class="num" style="font-size:12pt;line-height:1.2;color:' + (last ? '#DCE5FF' : (/확인 필요/.test(c[1]) ? 'var(--risk)' : 'var(--t2)')) + '">' + E(c[1]) + '</div>' +
      '<div style="font-size:12pt;line-height:1.2;font-weight:600;color:' + (last ? '#fff' : 'var(--ink)') + '">' + E(c[2]) + '</div></div>';
    if (i) sv += '<polyline points="' + (x - 15).toFixed(1) + ',32 ' + (x - 4).toFixed(1) + ',32" stroke="#7C98E4" stroke-width="2" fill="none"/><polygon points="' + (x - 2).toFixed(1) + ',32 ' + (x - 8).toFixed(1) + ',28 ' + (x - 8).toFixed(1) + ',36" fill="#7C98E4"/>'; });
  
  var bx = function (x, y, w, h, t1, t2, st) { return '<div class="abs" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;box-sizing:border-box;border-radius:12pt;padding:6pt 11pt;display:flex;flex-direction:column;justify-content:center;' + (st || 'background:#fff;box-shadow:var(--shadow)') + '">' +
    '<div style="font-size:13pt;font-weight:800;line-height:1.2;color:' + (st && /0A339A/.test(st) ? '#fff' : 'var(--blue-d)') + '">' + E(t1) + '</div>' + (t2 ? '<div style="font-size:12pt;line-height:1.25;margin-top:2pt;color:' + (st && /0A339A/.test(st) ? '#DCE5FF' : 'var(--t2)') + '">' + E(t2) + '</div>' : '') + '</div>'; };
  var Y0 = 78;
  b += bx(0, Y0, 176, 54, '부 (구법인 대표)', '2006 구법인 설립, 운영');
  b += bx(LW - 176, Y0, 176, 54, '자녀 2명, 배우자', '신설법인 주식 전부 증여받음');
  b += bx(0, Y0 + 92, 176, 70, '구법인 (GGG산업)', '메탈 스페이서 제조, 대형 거래처 보유');
  b += bx(LW - 176, Y0 + 92, 176, 70, '신설법인 (GGG)', '2016. 8. 22. 설립, 자본금 5,000만원', HL);
  b += bx(LW - 262, Y0 + 196, 262, 58, '합병 후 신설법인 1주 가치', '10,000원 → 4,741,443원 (474배 이상)', 'background:var(--risktint);border:1pt solid var(--risk)');
  b += '<div class="abs" style="left:0;top:' + (Y0 + 174) + 'pt;width:176pt;text-align:center">' + pill('합병으로 소멸', 'p-grey') + '</div>';
  var A = function (d, lab, lx, ly, lw, col) { col = col || '#0B3AA8'; sv += bez1(String(d).match(/-?[\d.]+/g).map(Number), col, 2);
    if (lab) b += '<div class="abs" style="left:' + lx + 'pt;top:' + ly + 'pt;width:' + lw + 'pt;text-align:center;font-size:12pt;font-weight:700;line-height:1.25;color:var(--blue)">' + lab + '</div>'; };
  A('M178,' + (Y0 + 20) + ' C 250,' + (Y0 + 8) + ' 300,' + (Y0 + 8) + ' ' + (LW - 180) + ',' + (Y0 + 20), E('주식 증여 (2016)'), 196, Y0 - 12, 176);
  A('M88,' + (Y0 + 56) + ' L88,' + (Y0 + 89), '', 0, 0, 0);
  b += '<div class="abs" style="left:94pt;top:' + (Y0 + 62) + 'pt;font-size:12pt;font-weight:700;color:var(--blue)">지배, 운영</div>';
  A('M' + (LW - 88) + ',' + (Y0 + 56) + ' L' + (LW - 88) + ',' + (Y0 + 89), '', 0, 0, 0);
  b += '<div class="abs" style="left:' + (LW - 168) + 'pt;top:' + (Y0 + 62) + 'pt;width:74pt;text-align:right;font-size:12pt;font-weight:700;color:var(--blue)">주주 100%</div>';
  A('M178,' + (Y0 + 110) + ' C 250,' + (Y0 + 102) + ' 290,' + (Y0 + 102) + ' ' + (LW - 180) + ',' + (Y0 + 110), '', 0, 0, 0, '#D2463A');
  A('M178,' + (Y0 + 146) + ' C 250,' + (Y0 + 160) + ' 290,' + (Y0 + 160) + ' ' + (LW - 180) + ',' + (Y0 + 146), '', 0, 0, 0);
  b += '<div class="abs" style="left:179pt;top:' + (Y0 + 34) + 'pt;width:162pt;text-align:center;font-size:12pt;line-height:1.25;color:var(--risk)"><b>약 4년간 순차 이전</b><br>공장, CNC선반 임차, 매수<br>핵심 인력 전출<br>거래처 대가 없이 이전</div>';
  b += '<div class="abs" style="left:179pt;top:' + (Y0 + 164) + 'pt;width:162pt;text-align:center;font-size:12pt;font-weight:700;line-height:1.25;color:var(--blue)">2020. 6. 2. 흡수합병<br><span style="font-weight:400;color:var(--t2)">신설법인이 구법인을 흡수</span></div>';
  A('M' + (LW - 131) + ',' + (Y0 + 164) + ' L' + (LW - 131) + ',' + (Y0 + 192), '', 0, 0, 0);
  
  var RX = LW + 16, RW = 864 - RX, rh = (242 - 16) / 3;
  JG_CASE.rules.forEach(function (r, i) { var bad = i === 1;
    b += '<div class="card" style="left:' + RX + 'pt;top:' + (Y0 + i * (rh + 8)).toFixed(1) + 'pt;width:' + RW + 'pt;height:' + rh.toFixed(1) + 'pt;padding:6pt 12pt;' + (bad ? HLB : '') + '">' +
      '<div style="display:flex;align-items:center;gap:8pt"><span style="font-size:13pt;font-weight:800;color:var(--ink)">' + E(r[0]) + '</span>' + pill(E(r[1]), bad ? 'p-risk' : (i ? 'p-blue' : 'p-tint')) + '</div>' +
      '<div style="margin-top:3pt;font-size:12pt;line-height:1.28;color:var(--t2)">' + E(r[2]) + '</div></div>'; });
  sv = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376"><defs><marker id="jgA" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#0B3AA8"/></marker><marker id="jgR" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#D2463A"/></marker></defs>' + sv + '</svg>';
  b = sv + b;
  if (todo) b += noteBox(todo, 40, { lab: '대응 과제' });
  return [{ title: emNum('사업 양수도 실질은 인정, 경영성과분까지 증여로 본 계산은 위법 → 처분 취소 (대법원 2025두35238)'), body: b, foot: '<b>근거</b>  대법원 2026. 4. 9. 선고 2025두35238, 부산고등법원 2025. 8. 29. 선고 2024누22778 판결 원문' }];
});
P1(/^일감몰아주기 — 판례 검토 \(구\)/, function (u, X) {
  var st = FL1(u, 0), T = R1(u, 0), rows = T.slice(1), hi = HI1(u, 0), b = flowTop1(st, 150);
  rows.forEach(function (r, i) { var on = hi.indexOf(i) >= 0, x = (i % 2) * 438, y = 162 + Math.floor(i / 2) * 110;
    b += C1(x, y, 426, 102, '<div style="font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div><div style="margin-top:4pt;font-size:12pt;color:var(--t2);line-height:1.38">' + E(r[1]) + '</div>', 'padding:9pt 14pt;' + (on ? HLB : '')); });
  return [{ title: emNum(X.cc || u.title), body: b }];
});

P1(/^일감몰아주기 — 전이율별/, function (u, X) {
  var T = R1(u, 0), hd = T[0], a = T[1], c = T[2], d = T[3], mx = 0;
  for (var j = 1; j < hd.length; j++) mx = Math.max(mx, amt1(a[j]) + amt1(c[j]));
  var cols = []; for (j = 1; j < hd.length; j++) cols.push({ lab: hd[j], top: d[j], hl: j === hd.length - 1, segs: [{ f: amt1(c[j]) / mx * 0.95, col: 'var(--blue)' }, { f: amt1(a[j]) / mx * 0.95, col: 'var(--blue5)' }], under: [a[j], c[j]] });
  var b = C1(0, 0, 864, 376, head1('i-chart', '전이율별 — 위 숫자 = ' + d[0].replace(/ \(.*\)$/, '') + ', 막대 = 기존법인 (연한 칸) + 신설법인 (진한 칸)', pill('20년 후', 'p-tint', 'margin-left:auto')) +
    '<div style="position:absolute;left:16pt;right:16pt;top:52pt;bottom:12pt">' + vcols1(cols, { h: 200, inset: 8, gap: 6 }) + '</div>' +
    '<div class="abs" style="right:18pt;top:42pt;font-size:12pt;color:var(--t3)">아래 숫자 = 기존법인 / 신설법인 주식가치</div>');
  return [{ title: emNum(X.cc || u.title), body: b }];
});

function textGrid1(rows, o) {   
  o = o || {}; var n = rows.length, cols = o.cols || 2, rr = Math.ceil(n / cols), H = o.h || 376, gh = (H - 10 * (rr - 1)) / rr, gw = (864 - 12 * (cols - 1)) / cols;
  return rows.map(function (r, i) { var on = o.hi && o.hi.indexOf(i) >= 0;
    return C1((i % cols) * (gw + 12), Math.floor(i / cols) * (gh + 10), gw, gh, (o.circ ? '<div style="display:flex;align-items:center;gap:8pt">' + circ(r[0], !on) + '<span style="font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[1]) + '</span></div><div style="margin-top:4pt;font-size:12pt;color:var(--t2);line-height:1.35">' + E(r[2]) + '</div>' :
      (o.pillHead ? pill(E(r[0]), on ? 'p-blue' : 'p-tint') : '<div style="font-size:14pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</div>') + '<div style="margin-top:5pt;font-size:12pt;color:var(--t2);line-height:1.38">' + E(r[1]) + '</div>'), 'padding:9pt 14pt;' + (on ? HLB : '')); }).join('');
}
P1(/^일감몰아주기 — 근거 법령/, function (u, X) {   
  var T = R1(u, 0), nt = NT1(u)[0] || '', row = function (re) { var r = T.filter(function (x) { return re.test(x[0]); })[0]; if (!r) throw new Error('근거 법령 줄 ' + re); return r; };
  var r10 = row(/34의3/), r1 = row(/18의2①1호/), r2 = row(/18의2①2호/), r3 = row(/18의2②1호/), r45 = row(/45의3/);
  var m10 = /1호 (.+?)[,·] 2호 (.+?)[,·] 3호 (.+?)[,·] (둘 이상.+)$/.exec(r10[1]); if (!m10) throw new Error('§34의3⑩ 글자 모양');
  var m1 = /50% 이상 (\d+%)[,·] 20% 이상 50% 미만 (\d+%)[,·] 20% 미만 (\d+%)/.exec(r1[1]); if (!m1) throw new Error('§18의2①1호 글자 모양');
  var LW = 520, b = '';
  var inner = '<div style="font-size:12pt;color:var(--t2);margin-top:2pt">' + E(r45[0] + ', ' + r10[0]) + '</div>';
  
  inner += '<div style="position:relative;margin-top:12pt;height:96pt">' +
    '<div class="abs" style="left:0;top:0;width:100%;font-size:12pt;font-weight:700;color:var(--ink)">수혜법인 매출액</div>' +
    '<div class="abs" style="left:0;top:18pt;width:62%;height:30pt;border-radius:8pt 0 0 8pt;background:var(--blue);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12pt;font-weight:700">특수관계법인 거래 매출</div>' +
    '<div class="abs" style="left:62%;top:18pt;width:38%;height:30pt;border-radius:0 8pt 8pt 0;background:var(--blue5);display:flex;align-items:center;justify-content:center;color:var(--blue-d);font-size:12pt;font-weight:700">그 밖의 매출</div>' +
    '<div class="abs" style="left:0;top:54pt;width:30%;height:34pt;border-radius:8pt;background:repeating-linear-gradient(135deg,#EDEFF4 0 6pt,#fff 6pt 12pt);border:1.2pt dashed var(--t3);display:flex;align-items:center;justify-content:center;font-size:12pt;font-weight:800;color:var(--t2)">과세제외매출액 = 뺌</div>' +
    '<div class="abs" style="left:31%;top:54pt;width:31%;height:34pt;border-radius:8pt;background:var(--tint);border:1.2pt solid var(--blue);display:flex;align-items:center;justify-content:center;text-align:center;font-size:12pt;line-height:1.15;font-weight:800;color:var(--blue)">남는 것 → 거래비율 판정</div></div>';
  var rr = [['1호', m10[1], '전액 뺌'], ['2호', m10[2], '전액 뺌'], ['3호', m10[3], '일부 뺌']];
  inner += '<div style="margin-top:6pt">' + rr.map(function (q, i) { return '<div style="display:flex;align-items:center;gap:8pt;padding:4pt 0;' + (i < 2 ? 'border-bottom:0.75pt dashed var(--rule)' : '') + '">' + pill(q[0], 'p-blue', 'flex:none') +
    '<div style="flex:1;font-size:12pt;line-height:1.3;color:var(--ink)">' + E(q[1]) + '</div>' + pill(q[2], q[2] === '일부 뺌' ? 'p-tint' : 'p-grey', 'flex:none') + '</div>'; }).join('') + '</div>' +
    '<div style="margin-top:3pt;font-size:12pt;color:var(--t3)">' + E(m10[4]) + '</div>';
  b += C1(0, 0, LW, 296, head1('i-scale', '매출에서 빼는 것, 남는 것 — 일감몰아주기 증여의제') + inner);
  
  var pc = [['50% 이상', m1[1], true], ['20~50%', m1[2], false], ['20% 미만', m1[3], false]];
  var cols = pc.map(function (q) { var f = num(q[1]) / 100; return { lab: '지분 ' + q[0], top: q[1], hl: q[2], segs: [{ f: f * 0.92, col: q[2] ? 'var(--risk)' : 'var(--blue3)', t: q[2] ? '본건\n자녀법인\n50%' : '' }] }; });
  var rb = head1('i-chart', '배당 단계 — 수입배당금 익금불산입률') + '<div style="font-size:12pt;color:var(--t2);margin-top:2pt">' + E(r1[0]) + '</div>' +
    '<div style="position:relative;height:150pt;margin-top:14pt">' + vcols1(cols, { h: 100, inset: 12, gap: 8 }) + '</div>' +
    '<div style="margin-top:6pt;font-size:12pt;line-height:1.35;color:var(--risk)"><b>빼는 경우</b> ' + E(r2[0].replace(/^법인세법 /, '') + ' ' + r2[1]) + '<br>' + E(r3[0].replace(/^법인세법 /, '') + ' ' + r3[1]) + '</div>';
  b += C1(LW + 12, 0, 864 - LW - 12, 296, rb);
  b += noteBox(nt, 70, { lab: '본건 적용' });
  return [{ title: emNum(X.cc || u.title), body: b }];
});
P1(/^일감몰아주기 — 근거 법령 \(구\)/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: '<div class="abs" style="left:0;top:0;width:864pt;height:290pt">' + textGrid1(T.slice(1), { cols: 2, h: 290, hi: HI1(u, 0), pillHead: true }) + '</div>' + noteBox(nt, 74, { lab: '본건 적용' }) }];
});
P1(/^일감몰아주기 — 업종별/, function (u, X) {   
  var tb = TB1(u, 0), raw = tb.rows.slice(1), hi = HI1(u, 0), nt = NT1(u)[0] || '';
  var m = /① (.+?) ② (.+?) ③ (.+?) ④ (.+)$/.exec(nt.replace(/^고르는 기준 — /, ''));
  var rowsH = '';
  raw.forEach(function (r, i) { var on = hi.indexOf(i) >= 0, chips = String(r[1] && r[1].text != null ? r[1].text : r[1]).split(/\s+·\s+/).map(function (c) { return T1(c); });
    rowsH += '<div style="display:flex;align-items:center;gap:10pt;height:30pt;padding:0 8pt;' + (on ? 'background:var(--tint);border-radius:8pt;' + HLB : (i < raw.length - 1 ? 'border-bottom:0.75pt dashed var(--rule)' : '')) + '">' +
      '<div style="width:130pt;flex:none;font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(T1(r[0])) + '</div>' +
      '<div style="flex:1;display:flex;gap:6pt;flex-wrap:nowrap;overflow:hidden">' + chips.map(function (c) { return pill(E(c), on ? 'p-blue' : 'p-tint', 'white-space:nowrap'); }).join('') + '</div></div>'; });
  var b = C1(0, 0, 864, 262, '<div style="display:flex;gap:10pt;padding:0 8pt 4pt;border-bottom:1pt solid var(--blue4);font-size:12pt;font-weight:700;color:var(--t3)"><div style="width:130pt">' + E(T1(tb.rows[0][0])) + '</div><div>' + E(T1(tb.rows[0][1])) + '</div></div>' + rowsH, 'padding:9pt 12pt');
  if (m) { var gw = (864 - 36) / 4;
    [m[1], m[2], m[3], m[4]].forEach(function (t, i) { var k = t.indexOf('('), hd = k > 0 ? t.slice(0, k).trim() : t, rest = k > 0 ? t.slice(k).replace(/^\(|\)\.?$/g, '') : '';
      b += C1(i * (gw + 12), 272, gw, 104, '<div style="display:flex;align-items:center;gap:7pt">' + circ(i + 1) + '<span style="font-size:12pt;font-weight:800;line-height:1.25;color:var(--ink)">' + E(hd) + '</span></div>' +
        (rest ? '<div style="margin-top:4pt;font-size:12pt;line-height:1.3;color:var(--t2)">' + E(rest) + '</div>' : ''), 'padding:8pt 12pt'); });
  } else b += noteBox(nt, 104, { lab: '고르는 기준' });
  return [{ title: emNum(X.cc || u.title), body: b, foot: '<b>고르는 기준</b>  아래 4가지를 모두 갖춘 업무' }];
});
P1(/^일감몰아주기 — 업종별 \(구\)/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: '<div class="abs" style="left:0;top:0;width:864pt;height:282pt">' + textGrid1(T.slice(1), { cols: 4, h: 282, hi: HI1(u, 0) }) + '</div>' + noteBox(nt, 82, { lab: '고르는 기준' }) }];
});
P1(/^일감몰아주기, 자녀 법인주주|^일감몰아주기 · 자녀 법인주주/, function (u, X) {
  var st = FL1(u, 0), T = R1(u, 0), hd = T[0], b = flowTop1(st, 160), rows = T.slice(1);
  b += C1(0, 172, 864, 204, head1('i-chart', hd[0] + '별 ' + hd[1]) + '<div style="margin-top:8pt">' + hbars1(rows.map(function (r) { var on = /해당/.test(r[2]); return [r[0], r[1], num(r[1]) / 100, on, r[2] === '—' ? '' : r[2]]; }), { lw: 230, vw: 70, py: 7, bh: 16, vfs: 16 }) + '</div>');
  return [{ title: emNum(X.cc || '자녀별 법인주주가 수혜법인 50%씩 → 배당 익금불산입 100%'), body: b }];
});
P1(/^일감몰아주기 — 성장 후/, function (u, X) {
  var st = FL1(u, 0), T = R1(u, 0), nt = NT1(u)[0] || '', b = flowTop1(st, 140);
  b += '<div class="abs" style="left:0;top:152pt;width:864pt;height:150pt">' + rowCards1(T.slice(1).map(function (r) { return [r[0], r[1], r[2]]; }), 0, 150, { hi: HI1(u, 0), risk: /^과세/ }) + '</div>';
  b += noteBox(nt, 62, { lab: '유의' });
  return [{ title: emNum(X.cc || u.title), body: b }];
});
P1(/^일감몰아주기 — 개인주주 vs 법인주주/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: vsText1(T, 2, 290, '권장 구조') + noteBox(nt, 74, { lab: '실행 전 확인' }) }];
});

P1(/^배우자증여 후 이익소각$/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: scenCols1(T, { big: /세후 이전 가액/, hl: 1, badge: '증여세 0원', h: 296, py: 4, lw: 66, em: /^증여세$/ }) + noteBox(nt, 68, { lab: '유의' }) }];
});
P1(/즉시 소각 vs 1년 후 소각/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), nt = NT1(u)[0] || '', n = hd.length - 1, gw = (864 - 12 * (n - 1)) / n, b = '';
  var i2 = body.findIndex(function (r) { return /^②/.test(r[0]); }), A = body.slice(0, i2), B = body.slice(i2).filter(function (r) { return !/^(② − ①|\[참고\])/.test(r[0]); }), D = body.filter(function (r) { return /^(② − ①|\[참고\])/.test(r[0]); });
  var tA = A.filter(function (r) { return /총 세금/.test(r[0]); })[0], tB = B.filter(function (r) { return /총 세금/.test(r[0]); })[0];
  for (var j = 1; j <= n; j++) {
    var blk = function (rows, tot, lab, on) { return '<div style="margin-top:8pt;padding:8pt 11pt;border-radius:11pt;' + (on ? 'background:var(--tint)' : 'border:1pt solid var(--rule)') + '"><div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:13pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(lab) + '</span><span class="num" style="font-size:18pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(tot[j]) + '</span></div>' +
      kv1(rows.filter(function (r) { return r !== tot; }).map(function (r) { return [r[0].replace(/^[①②]\s*(즉시 소각|1년 후 소각) — /, '').replace(/^　/, '').replace(/ \(소득세법.*\)$/, ''), r[j]]; }), { py: 2.5, lw: 66 }) + '</div>'; };
    b += C1((j - 1) * (gw + 12), 0, gw, 300, '<div style="display:flex;align-items:center;gap:8pt">' + circ(j, j > 1) + '<span style="font-size:16pt;font-weight:800">' + E(hd[j]) + ' 증여</span></div>' +
      blk(A, tA, '① 즉시 소각 총 세금', true) + blk(B, tB, '② 1년 후 소각 총 세금', false) +
      D.map(function (r) { return '<div style="display:flex;justify-content:space-between;margin-top:5pt;font-size:12pt"><span style="color:var(--t3)">' + E(r[0]) + '</span><span class="num" style="font-weight:700">' + E(r[j]) + '</span></div>'; }).join(''));
  }
  return [{ title: emNum(X.cc || u.title), body: b + noteBox(nt, 64, { lab: '유의' }) }];
});
P1(/^배우자증여 후 이익소각 — 실행 시 유의/, function (u, X) {
  var st = FL1(u, 0), nt = NT1(u), b = flowTop1(st, 170);
  b += C1(0, 182, 864, 120, '<div style="font-size:12pt;line-height:1.45;color:var(--risk)">' + E(nt[0] || '') + '</div>', 'background:var(--risktint);box-shadow:none;padding:10pt 16pt');
  if (nt[1]) b += noteBox(nt[1], 62, { lab: '상법' });
  return [{ title: emNum(X.cc || u.title), body: b }];
});
P1(/주권 발행 예시$/, function (u, X) {
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), nt = NT1(u)[0] || '', b = '';
  var tax = rowRe1(T, /배당소득세/);
  [1, 2].forEach(function (j) { var on = j === 2;
    b += C1((j - 1) * 300, 0, 288, 300, '<div style="display:flex;align-items:center;gap:8pt">' + circ(j, !on) + '<span style="font-size:15pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(hd[j]) + '</span></div>' +
      '<div style="font-size:12pt;color:var(--t3);margin-top:8pt">' + E(tax[0]) + '</div><div class="num" style="font-size:28pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--risk)') + '">' + E(tax[j]) + '</div>' +
      '<div style="margin-top:6pt">' + kv1(body.filter(function (r) { return r !== tax; }).map(function (r) { return [r[0], r[j]]; }), { py: 4, lw: 46 }) + '</div>', on ? HLB : ''); });
  b += C1(600, 0, 264, 300, head1('i-scale', hd[3]) + '<div class="num" style="margin-top:14pt;font-size:28pt;font-weight:800;color:var(--blue)">' + E(tax[3]) + '</div>' +
    '<div style="margin-top:10pt">' + kv1(body.filter(function (r) { return r !== tax && r[3] !== '—'; }).map(function (r) { return [r[0], r[3]]; }), { py: 4, lw: 55 }) + '</div>', 'background:var(--tint);box-shadow:none');
  return [{ title: emNum(X.cc || ('주권 발행 시 ' + tax[0] + ' ' + tax[2] + ' vs 미발행 ' + tax[1])), body: b + noteBox(nt, 64, { lab: '예시' }) }];
});
P1(/주권 발행으로 취득가액 구분/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: vsText1(T, 2, 296, '권장') + noteBox(nt, 68, { lab: '유의' }) }];
});

P1(/^마무리 — 납세재원 마련/, function (u, X) { return fundPages1(u, X); });
P1(/^마무리 — 납세재원 \(구\)/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), hi = HI1(u, 0), out = [], per = body.length > 9 ? Math.ceil(body.length / 2) : 9, ch = body.length > 6 ? 118 : 180;
  for (var p = 0; p < body.length; p += per) {
    var b = '', part = body.slice(p, p + per);
    part.forEach(function (r, i) { var on = hi.indexOf(p + i) >= 0, x = (i % 3) * 292, y = Math.floor(i / 3) * (ch + 11);
      b += C1(x, y, 280, ch, '<div style="display:flex;align-items:center;gap:8pt">' + circ(p + i + 1, !on) + '<span style="font-size:14pt;font-weight:800;line-height:1.2;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[0]) + '</span></div>' +
        '<div class="num" style="margin-top:' + (ch < 150 ? 3 : 8) + 'pt;font-size:' + (r[2].length > 18 ? 13 : (ch < 150 ? 15 : 18)) + 'pt;font-weight:800;line-height:1.25;color:var(--blue)">' + E(r[2]) + '</div>' +
        '<div style="margin-top:' + (ch < 150 ? 2 : 6) + 'pt;font-size:12pt;color:var(--t2);line-height:1.3">' + E(r[1]) + '</div>', 'padding:' + (ch < 150 ? 7 : 10) + 'pt 14pt;' + (on ? HLB : '')); });
    out.push({ eyebrow: X.tt + (body.length > per ? ' (' + (p / per + 1) + '/' + Math.ceil(body.length / per) + ')' : ''), title: emNum(X.cc || u.title), body: b });
  }
  return out;
});
P1(/^마무리 — 상속주식 감자 플랜/, function (u, X) { return gamjaPage1(u, X); });
P1(/^마무리 — 상속주식 감자 플랜 \(구\)/, function (u, X) {
  var st = FL1(u, 0);
  var b = C1(0, 0, 864, 376, head1('i-shield', '유고 시 대비 — 보험금 → 감자대가 → 상속세 재원') + '<div style="margin-top:8pt">' + st.map(function (s, i) { var on = s.tone === 'on', no = s.tone === 'no';
    return '<div style="display:flex;gap:12pt;align-items:center;padding:7pt 0;' + (i < st.length - 1 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' + circ(i + 1, !on && !no) +
      '<div style="width:130pt;flex:none"><div style="font-size:12pt;font-weight:700;color:' + (no ? 'var(--risk)' : 'var(--blue)') + '">' + E(s.n) + '</div><div style="font-size:15pt;font-weight:800">' + E(s.t) + '</div></div>' +
      '<div style="flex:1;font-size:12pt;color:var(--t2);line-height:1.4">' + E(s.d) + '</div></div>'; }).join('') + '</div>');
  return [{ title: emNum(X.cc || u.title), body: b }];
});
P1(/^마무리 — 추가 제공 요청 자료/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: '<div class="abs" style="left:0;top:0;width:864pt;height:330pt">' + textGrid1(T.slice(1), { cols: 3, h: 330, circ: true }) + '</div>' + noteBox(nt, 36, { lab: '안내' }) }];
});


P1(/^배우자 2차 상속 — 1차/, function (u, X) {   
  var T = R1(u, 0), hd = T[0].map(one1), body = T.slice(1), nt = NT1(u)[0] || '';
  var gap = null; (X.units || []).forEach(function (v) { if (v.type !== 'content' || !/배우자 2차 상속/.test(v.title)) return; NT1(v).concat((R1(v, 0) || []).map(function (r) { return r.join(' '); })).forEach(function (t) { var m = /경과 (\d+)년/.exec(t); if (m && gap == null) gap = +m[1]; }); });
  var fin = rowRe1(T, /^최종 상속세/), W = 634, lw = 150, cw = (W - lw - 24) / 2, cx1 = lw + 12 + cw / 2, cx2 = lw + 24 + cw * 1.5;
  
  var ax = '<div class="abs" style="left:0;top:0;width:' + W + 'pt;height:92pt">';
  ax += '<div class="abs" style="left:' + (cx1).toFixed(1) + 'pt;top:44pt;width:' + (cx2 - cx1).toFixed(1) + 'pt;height:3pt;background:var(--blue4);border-radius:2pt"></div>';
  if (gap) { var w10 = Math.min(1, 10 / gap) * (cx2 - cx1);
    ax += '<div class="abs" style="left:' + cx1.toFixed(1) + 'pt;top:38pt;width:' + w10.toFixed(1) + 'pt;height:15pt;background:var(--blue5);border-radius:4pt"></div>' +
      '<div class="abs" style="left:' + cx1.toFixed(1) + 'pt;top:56pt;width:' + w10.toFixed(1) + 'pt;font-size:12pt;color:var(--blue-d);text-align:center;white-space:nowrap">§30 단기 재상속 세액공제 구간 (10년)</div>'; }
  var mk = function (cx, t1, t2, dark) { return '<div class="abs" style="left:' + (cx - 9).toFixed(1) + 'pt;top:36pt;width:18pt;height:18pt;border-radius:9pt;background:' + (dark ? 'var(--blue)' : '#fff') + ';border:3pt solid var(--blue)"></div>' +
    '<div class="abs" style="left:' + (cx - 110).toFixed(1) + 'pt;top:0;width:220pt;text-align:center"><div style="font-size:14pt;font-weight:800;color:var(--ink)">' + E(t1) + '</div><div style="font-size:12pt;color:var(--t2)">' + E(t2) + '</div></div>'; };
  ax += mk(cx1, hd[1].replace(/ — /, ' : '), '상속개시 = 0년 (현재 평가액)', true) + mk(cx2, hd[2].replace(/ — /, ' : '), gap ? '1차 후 ' + gap + '년 가정' : '시점 미정', false);
  if (gap) ax += '<div class="abs" style="left:' + (cx1 + (cx2 - cx1) / 2 - 40).toFixed(1) + 'pt;top:72pt;width:80pt;text-align:center;font-size:12pt;font-weight:700;color:var(--blue)">' + gap + '년 →</div>';
  ax += '<div class="abs" style="left:0;top:38pt;width:' + (lw - 6) + 'pt;font-size:13pt;font-weight:800;color:var(--blue)">시간축</div></div>';
  
  var y0 = 100, H = 376 - y0, rh = (H - 34) / body.length, o = '';
  [1, 2].forEach(function (j) { var x = lw + 12 + (j - 1) * (cw + 12);
    o += C1(x, y0, cw, H, '<div style="font-size:14pt;font-weight:800;height:24pt;display:flex;align-items:center;gap:7pt">' + circ(j, j > 1) + E(hd[j]) + '</div>' +
      body.map(function (r) { var on = r === fin; return '<div class="num" style="height:' + rh.toFixed(1) + 'pt;display:flex;align-items:center;justify-content:flex-end;font-size:' + (on ? 15 : 12) + 'pt;font-weight:' + (on ? 800 : 600) + ';color:' + (on ? 'var(--blue)' : 'var(--ink)') + ';border-top:0.75pt dashed var(--rule)">' + E(r[j]) + '</div>'; }).join(''), 'padding:6pt 14pt'); });
  o += '<div class="abs" style="left:0;top:' + (y0 + 30) + 'pt;width:' + lw + 'pt">' + body.map(function (r) { var on = r === fin; return '<div style="height:' + rh.toFixed(1) + 'pt;display:flex;align-items:center;font-size:12pt;font-weight:' + (on ? 800 : 600) + ';color:' + (on ? 'var(--blue)' : 'var(--t2)') + '">' + E(r[0]) + '</div>'; }).join('') + '</div>';
  o += C1(W + 12, 0, 864 - W - 12, 376, head1('i-doc', '합산, 대납') + '<div style="margin-top:8pt;font-size:12pt;line-height:1.5;color:var(--t2)">' + E(nt).replace(/\s*,\s*(?=배우자|1차|2차)/g, '<br>') + '</div>');
  return [{ title: emNum(X.cc || u.title), body: ax + o }];
});

P1(/^배우자 2차 상속 — 배우자 상속분 배분/, function (u, X) {
  var T = R1(u, 0), hd = T[0], nt = NT1(u)[0] || '', t1 = rowRe1(T, /^1차 상속세/), t2 = rowRe1(T, /^2차 상속세/), sum = rowRe1(T, /합계/);
  var mx = Math.max.apply(null, sum.slice(1).map(amt1).concat([1])), best = hd.findIndex(function (h) { return /★/.test(h); });
  var oth = T.slice(1).filter(function (r) { return r !== t1 && r !== t2 && r !== sum; });
  var cols = []; for (var j = 1; j < hd.length; j++) cols.push({ lab: hd[j], top: sum[j], hl: j === best, segs: [{ f: amt1(t1[j]) / mx * 0.92, col: j === best ? 'var(--blue)' : 'var(--blue2)', t: '1차 ' + t1[j] }, { f: amt1(t2[j]) / mx * 0.92, col: 'var(--blue5)', t: '2차 ' + t2[j], ink: 'var(--blue-d)' }],
    under: oth.map(function (r) { return r[0].replace(/^배우자 /, '') + ' ' + r[j]; }) });
  var b = C1(0, 0, 864, 300, head1('i-chart', '배우자 상속분별 1차 + 2차 상속세 (위 숫자 = 합계, ★ = 최소)', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="position:absolute;left:16pt;right:16pt;top:48pt;bottom:8pt">' + vcols1(cols, { h: 150, inset: 26 }) + '</div>');
  return [{ title: emNum(X.cc || u.title), body: b + noteBox(nt, 64, { lab: '최적' }) }];
});
P1(/^배우자 2차 상속 — 설계 포인트/, function (u, X) {
  var T = R1(u, 0), nt = NT1(u)[0] || '';
  return [{ title: emNum(X.cc || u.title), body: '<div class="abs" style="left:0;top:0;width:864pt;height:300pt">' + textGrid1(T.slice(1), { cols: 2, h: 300, pillHead: true }) + '</div>' + noteBox(nt, 64, { lab: '미반영' }) }];
});


function aftcAxis1(u, X, u20) {   
  var T = R1(u, 0), body = T.slice(1), last = body[body.length - 1];
  var T20 = u20 ? R1(u20, 0) : null, b20 = T20 ? T20.slice(1) : [], r20 = b20.length ? b20[b20.length - 1] : null;
  var hdI = T20 ? T20[0][3] : T[0][3], rate = (/연 ([\d.]+%)/.exec(hdI) || [0, ''])[1];
  var ten = '', yrs = '', mg = '';
  (X.units || []).forEach(function (v) { if (v.type !== 'content') return; var R = R1(v, 0); if (!R) return;
    R.forEach(function (r) { if (!ten && /^사후관리기간/.test(r[0])) ten = r[1]; if (!yrs && /^경영기간/.test(r[0])) yrs = r[1]; if (!mg && /^사후관리$/.test(r[0]) && r[2]) mg = r[2]; }); });
  var X0 = 210, XW = 864 - X0 - 40, px = function (y) { return X0 + XW * y / 20; };
  var b = '<div class="abs" style="left:0;top:0;width:864pt;height:250pt">';
  for (var y = 0; y <= 20; y++) { var maj = y % 5 === 0;
    b += '<div class="abs" style="left:' + px(y).toFixed(1) + 'pt;top:' + (maj ? 22 : 30) + 'pt;width:' + (maj ? 1.2 : 0.75) + 'pt;height:' + (maj ? 214 : 8) + 'pt;background:' + (maj ? 'var(--blue4)' : 'var(--blue3)') + '"></div>';
    if (maj) b += '<div class="abs" style="left:' + (px(y) - 30).toFixed(1) + 'pt;top:0;width:60pt;text-align:center;font-size:12pt;font-weight:700;color:var(--t2)">' + (y ? y + '년' : '상속개시') + '</div>'; }
  var lane = function (top, lab, sub, yEnd, txt, solid, risk) {
    return '<div class="abs" style="left:0;top:' + top + 'pt;width:' + (X0 - 12) + 'pt"><div style="font-size:13pt;font-weight:800;color:' + (risk ? 'var(--risk)' : 'var(--ink)') + '">' + E(lab) + '</div><div style="font-size:12pt;color:var(--t3);line-height:1.3">' + E(sub) + '</div></div>' +
      '<div class="abs" style="left:' + px(0).toFixed(1) + 'pt;top:' + (top + 4) + 'pt;width:' + (px(yEnd) - px(0)).toFixed(1) + 'pt;height:24pt;border-radius:7pt;display:flex;align-items:center;padding:0 10pt;box-sizing:border-box;font-size:12pt;font-weight:700;white-space:nowrap;' +
      (solid ? 'background:var(--blue);color:#fff' : 'background:var(--blue5);color:var(--blue-d);border:1.2pt dashed var(--blue3)') + '">' + E(txt) + '</div>';
  };
  b += lane(46, '현행', '2023.1.1. 이후 상속개시분', 5, '5년 (상증법 §18의2⑤)', true);
  b += lane(104, '개정안 — 경영 30년 이상', yrs ? '본건 경영 ' + yrs : '', 10, ten ? ten + ' (2027.7.1. 개정안)' : '10년 (2027.7.1. 개정안)', false);
  b += lane(162, '개정안 — 경영 20년', '30년 미달 부족분 가산', 20, '최장 20년 = 기준 10년 + 부족분 10년', false);
  b += '<div class="abs" style="left:' + (px(20) - 9).toFixed(1) + 'pt;top:204pt;width:18pt;height:18pt;border-radius:9pt;background:var(--risk);border:3pt solid #fff;box-shadow:var(--shadow)"></div>' +
    '<div class="abs" style="left:' + (px(20) - 360).toFixed(1) + 'pt;top:204pt;width:346pt;text-align:right;font-size:12pt;font-weight:700;color:var(--risk);line-height:1.3">' +
    (r20 ? E('20년차 위반 시 총 부담 ' + r20[4] + ' (본세 ' + r20[2] + ' + 이자 ' + r20[3] + ')') : '20년차 추징 사유 발생 → 공제받은 금액 과세가액 산입 + 이자상당액') +
    '<br>(신고기한 다음날부터 사유 발생일까지 기간만큼 누적)</div></div>';
  b += C1(0, 244, 520, 124, head1('i-tool', '이자상당액 산식 (상증령 §15⑯)') + '<div style="margin-top:6pt">' +
    eq1([{ l: '추징 상속세', v: '결정 세액', fs: 14 }, '×', { l: '기간', v: '신고기한 다음날 ~ 사유 발생일', fs: 14 }, '×', { l: '이자율', v: (rate ? '연 ' + rate : '연 이율') + ' ÷ 365', fs: 14 }], { gap: 6 }) + '</div>' +
    '<div style="margin-top:6pt;font-size:12pt;color:var(--t3)">이자율 = 국기령 §43의3② 국세환급가산금 이자율 (부과 당시)</div>');
  b += C1(532, 244, 332, 124, head1('i-alert', '이자율 — 부과 당시 1개') + '<div style="margin-top:4pt;display:flex;align-items:baseline;gap:8pt"><span class="num" style="font-size:24pt;font-weight:800;color:var(--blue)">' + E(rate ? '연 ' + rate : '확인 필요') + '</span><span style="font-size:12pt;color:var(--t2)">국기칙 §19의3</span></div>' +
    '<div style="margin-top:4pt;font-size:12pt;line-height:1.35;color:var(--t2)">연 1천분의 31, 기간 중 이율 변동은 나누지 않음 (상증령 §15⑯3호)</div>');
  return { title: emNum('사후관리 시간축 — 현행 5년, 개정안 ' + (ten || '10년') + ', 최장 20년'), body: b, eyebrow: X.tt.replace(/ — .*$/, '') + ' — 시간축 (20년)', foot: '<b>개정안</b>  2027.7.1. 개정 리스크 기준 (국회 심의 중), 확정 시 다시 산정' };
}

function aftcU1(X, re) { var f = null; (X.units || []).forEach(function (v) { if (!f && v.type === 'content' && re.test(T1(v.title))) f = v; }); return f; }
P1(/가업승계 사후관리 — 위반 시점별/, function (u, X) {
  var u5 = aftcU1(X, /가업승계 사후관리 — 위반하면/), p1 = aftcAxis1(u5 || u, X, u);
  var T = R1(u, 0), hd = T[0], body = T.slice(1), nt = NT1(u), mx = Math.max.apply(null, body.map(function (r) { return amt1(r[4]); }).concat([1]));
  var rows = body.map(function (r, i) { var on = i === body.length - 1, a = amt1(r[2]) / mx * 100, c = amt1(r[3]) / mx * 100;
    return '<div style="display:flex;align-items:center;gap:10pt;height:40pt;border-bottom:0.75pt dashed var(--rule)"><div style="width:92pt;flex:none;font-size:13pt;font-weight:' + (on ? 800 : 600) + ';color:' + (on ? 'var(--risk)' : 'var(--ink)') + '">' + E(r[0]) + '</div>' +
      '<div style="width:170pt;flex:none;font-size:12pt;line-height:1.25;color:var(--t2)">' + E(r[1]) + '</div>' +
      '<div style="flex:1;display:flex;height:14pt;border-radius:4pt;overflow:hidden;background:var(--tint)"><div style="width:' + a.toFixed(2) + '%;background:var(--blue3)"></div><div style="width:' + c.toFixed(2) + '%;background:#F09A90"></div></div>' +
      '<div class="num" style="width:200pt;flex:none;font-size:12pt;white-space:nowrap;color:var(--t2)">본세 ' + E(r[2]) + ' + 이자 <b style="color:var(--risk)">' + E(r[3]) + '</b></div>' +
      '<div class="num" style="width:76pt;flex:none;text-align:right;font-size:14pt;font-weight:800;color:' + (on ? 'var(--risk)' : 'var(--ink)') + '">' + E(r[4]) + '</div></div>'; }).join('');
  var b = C1(0, 0, 864, 212, head1('i-chart', '20년 — 위반 시점별 ' + hd[4] + ' (연한 칸 = ' + hd[2] + ', 빨간 칸 = ' + hd[3] + ')', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:2pt">' + rows + '</div>', 'padding:10pt 16pt');
  b += C1(0, 222, 864, 154, '<div style="font-size:12pt;line-height:1.4;color:var(--t2)">' + nt.map(function (t) { return E(t); }).join('<div style="height:3pt"></div>') + '</div>', 'padding:9pt 16pt');
  var last = body[body.length - 1];
  return [{ eyebrow: p1.eyebrow, title: p1.title, body: p1.body, foot: p1.foot },
    { title: emNum(last[0].replace(/에 위반$/, ' 위반 시') + ' ' + hd[2] + ' ' + last[2] + ' + 이자상당액 ' + last[3] + ' = ' + last[4]), body: b, foot: '<b>개정안</b>  국회 심의 중 [확인 필요 — 개정안 원문 정본]' }];
});
P1(/^가업승계 사후관리 — 위반하면/, function (u, X) {
  var T = R1(u, 0), hd = T[0], body = T.slice(1), nt = NT1(u), mx = Math.max.apply(null, body.map(function (r) { return amt1(r[4]); }).concat([1]));
  var has20 = !!aftcU1(X, /가업승계 사후관리 — 위반 시점별/), p1 = has20 ? null : aftcAxis1(u, X);
  var rows = body.map(function (r, i) { var on = i === body.length - 1, a = amt1(r[2]) / mx * 100, c = amt1(r[3]) / mx * 100;
    return '<div style="display:flex;align-items:center;gap:10pt;height:30pt;border-bottom:0.75pt dashed var(--rule)"><div style="width:96pt;flex:none;font-size:13pt;font-weight:' + (on ? 800 : 600) + ';color:' + (on ? 'var(--risk)' : 'var(--ink)') + '">' + E(r[0]) + '</div>' +
      '<div style="flex:1;display:flex;height:14pt;border-radius:4pt;overflow:hidden;background:var(--tint)"><div style="width:' + a.toFixed(2) + '%;background:var(--blue3)"></div><div style="width:' + c.toFixed(2) + '%;background:#F09A90"></div></div>' +
      '<div class="num" style="width:236pt;flex:none;font-size:12pt;white-space:nowrap;color:var(--t2)">' + E(hd[1]) + ' ' + E(r[1]) + ', 본세 ' + E(r[2]) + ' + 이자 <b style="color:var(--risk)">' + E(r[3]) + '</b></div>' +
      '<div class="num" style="width:76pt;flex:none;text-align:right;font-size:14pt;font-weight:800;color:' + (on ? 'var(--risk)' : 'var(--ink)') + '">' + E(r[4]) + '</div></div>'; }).join('');
  var b = C1(0, 0, 864, 204, head1('i-chart', '현행 5년 — 위반 시점별 ' + hd[4] + ' (연한 칸 = ' + hd[2] + ', 빨간 칸 = ' + hd[3] + ')', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:4pt">' + rows + '</div>');
  b += C1(0, 216, 864, 160, '<div style="font-size:12pt;line-height:1.5;color:var(--t2)">' + nt.map(function (t) { return E(t); }).join('<div style="height:5pt"></div>') + '</div>', 'padding:10pt 16pt');
  var last = body[body.length - 1];
  var pb = { title: emNum(last[0].replace(/에 위반$/, ' 위반 시') + ' ' + hd[2] + ' ' + last[2] + ' + ' + hd[3] + ' ' + last[3] + ' = ' + last[4]), body: b };
  return p1 ? [{ eyebrow: p1.eyebrow, title: p1.title, body: p1.body, foot: p1.foot }, pb] : [pb];
});

P1(/^가업승계 사후관리 — 5년간 지켜야/, function (u, X) {   
  var T = R1(u, 0), hd = T[0], body = T.slice(1), nt = NT1(u), n = body.length, gw = (864 - 12 * (n - 1)) / n, b = '';
  body.forEach(function (r, i) { var m = /^(.)\s*(.*)$/.exec(r[0]) || [0, i + 1, r[0]];
    b += C1(i * (gw + 12), 0, gw, 232, '<div style="display:flex;align-items:center;gap:8pt">' + circ(m[1], true) + '<span style="font-size:15pt;font-weight:800;color:var(--blue)">' + E(m[2]) + '</span></div>' +
      '<div style="margin-top:8pt;font-size:12pt;color:var(--t3)">' + E(hd[1]) + '</div><div style="font-size:12pt;line-height:1.4;color:var(--ink);font-weight:600">' + E(r[1]) + '</div>' +
      '<div style="margin-top:8pt;padding-top:6pt;border-top:0.75pt dashed var(--rule);font-size:12pt;color:var(--risk)">' + E(hd[2]) + '</div><div style="font-size:12pt;line-height:1.4;color:var(--t2)">' + E(r[2]) + '</div>'); });
  b += C1(0, 244, 864, 132, nt.map(function (t) { return '<div style="font-size:12pt;line-height:1.45;color:var(--t2)">' + E(t) + '</div>'; }).join('<div style="height:5pt"></div>'), 'padding:9pt 16pt');
  return [{ title: emNum('사후관리 5년 — ' + body.map(function (r) { return r[0].replace(/^.\s*/, ''); }).join(', ')), body: b }];
});


function jukwon1(units) {
  var nx = (units || []).filter(function (v) { return v.type === 'content' && /주권 발행으로 취득가액 구분/.test(v.title); })[0], seq = '';
  if (nx) { var R = R1(nx, 0) || []; R.forEach(function (r) { if (/실무 순서/.test(r[0])) seq = r[2] || ''; }); }
  var st = [
    { n: 'STEP 1', t: '정관, 주주명부 확인', d: '주권 불소지 신고 여부 (상법 §358의2), 양도 승인 규정 (§335①)' },
    { n: 'STEP 2', t: '주권 발행', d: '번호, 상호, 성립연월일 등 기재 + 대표이사 기명날인 또는 서명 (§356)' },
    { n: 'STEP 3', t: '주권 교부 = 증여', d: '주식 양도는 주권 교부로 (§336①) — 증여분 주권 번호 특정' },
    { n: 'STEP 4', t: '명의개서', d: '주주명부에 취득자 기재해야 회사에 대항 (§337①)' },
    { n: 'STEP 5', t: '1년 대기 → 그 주권만 소각', d: '증여분 취득가액 그대로 → 의제배당 최소' }];
  var b = flowTop1(st, 140);
  var NW = 210, gapx = (864 - NW * 3) / 2, nodes = [['i-building', '회사', '주권 발행 의무 — 성립 후 지체없이 (§355①)'], ['i-person', '대표 (증여자)', '기존 주식 + 발행된 주권 보유'], ['i-people', '배우자 (수증자)', '받은 주권 번호로 증여분 특정']];
  var y = 156, h = 88, sv = '';
  nodes.forEach(function (n, i) { var x = i * (NW + gapx);
    b += C1(x, y, NW, h, '<div style="display:flex;align-items:center;gap:8pt">' + icb(n[0], i === 0) + '<span style="font-size:15pt;font-weight:800;color:' + (i === 0 ? '#fff' : 'var(--blue-d)') + '">' + E(n[1]) + '</span></div>' +
      '<div style="margin-top:6pt;font-size:12pt;line-height:1.35;color:' + (i === 0 ? '#DCE5FF' : 'var(--t2)') + '">' + E(n[2]) + '</div>', i === 0 ? HL : ''); });
  var arr = function (x1, x2, yy, lab) { sv += '<polyline points="' + x1 + ',' + yy + ' ' + (x2 - 2) + ',' + yy + '" fill="none" stroke="#0B3AA8" stroke-width="2"/><polygon points="' + x2 + ',' + yy + ' ' + (x2 - 9) + ',' + (yy - 5) + ' ' + (x2 - 9) + ',' + (yy + 5) + '" fill="#0B3AA8"/>';
    b += '<div class="abs" style="left:' + x1 + 'pt;top:' + (yy - 22) + 'pt;width:' + (x2 - x1) + 'pt;text-align:center;font-size:12pt;font-weight:700;color:var(--blue)">' + E(lab) + '</div>'; };
  arr(NW + 6, NW + gapx - 6, y + 46, '① 주권 발행');
  arr(2 * NW + gapx + 6, 2 * (NW + gapx) - 6, y + 46, '② 주권 교부 (증여)');
  sv += '<polyline points="' + (2 * (NW + gapx) + NW / 2) + ',' + (y + h + 2) + ' ' + (2 * (NW + gapx) + NW / 2) + ',' + (y + h + 14) + ' ' + (NW / 2) + ',' + (y + h + 14) + ' ' + (NW / 2) + ',' + (y + h + 4) + '" fill="none" stroke="#7C98E4" stroke-width="1.5" stroke-dasharray="4 3"/>';
  b += '<div class="abs" style="left:' + (NW + 20) + 'pt;top:' + (y + h + 16) + 'pt;width:' + (864 - 2 * NW - 40) + 'pt;text-align:center;font-size:12pt;font-weight:700;color:var(--blue2)">③ 명의개서 → 1년 뒤 그 주권만 회사가 취득해 소각</div>';
  b = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376">' + sv + '</svg>' + b;
  b += noteBox('주권 발행 전에 한 주식 양도는 회사에 효력 없음 — 다만 회사 성립 후 또는 신주 납입기일 후 6월이 지나면 예외 (상법 §335③)\n발행 절차, 비용은 정관 확인 후 확정' + (seq ? '\n실무 순서 : ' + seq : ''), 70, { lab: '유의' });
  return { eyebrow: '배우자증여 후 이익소각 — 주권 발행 구조도', title: emNum('주권 미발행 → 주권 발행 → 주권 교부로 증여 → 그 주권만 소각'), body: b, foot: '<b>근거</b>  상법 §335, §336, §337, §355, §356, §358의2' };
}


function dgParse1(u) {
  var ops = (u.sl.__dg || []).slice(), boxes = [], txs = [], sub = '', band = '', lines = [];
  for (var i = 0; i < ops.length; i++) { var o = ops[i]; if (i < 2) continue; if (i === 2 && o.tx != null) { sub = o.tx; continue; }
    if (o.r && Math.abs(o.r[1] - 6.20) < 0.01 && Math.abs(o.r[3] - 0.44) < 0.01) { var nx = ops[i + 1]; if (nx && nx.tx != null) { band = nx.tx; i++; } continue; }
    if (o.r && o.r[3] > 0.3) boxes.push({ r: o.r, fill: String(o.fill || '').toUpperCase(), line: o.line, dash: o.dash, t: [] }); else if (o.tx != null) txs.push(o); else if (o.l) lines.push(o); }
  var free = [];
  txs.forEach(function (t) { var in1 = boxes.filter(function (b) { return t.x >= b.r[0] - 0.01 && t.y >= b.r[1] - 0.01 && t.x < b.r[0] + b.r[2] && t.y < b.r[1] + b.r[3]; }).sort(function (a, b) { return a.r[2] * a.r[3] - b.r[2] * b.r[3]; })[0];
    if (in1) in1.t.push(t); else free.push(t); });
  boxes.forEach(function (b) { b.t.sort(function (a, c) { return a.y - c.y; }); });
  return { boxes: boxes, free: free, sub: T1(sub), band: T1(band), lines: lines };
}

function dgOut1(u) {
  var P = dgParse1(u), src = P.boxes.filter(function (b) { return b.fill === 'FFFFFF'; })[0], dst = P.boxes.filter(function (b) { return dark(b.fill); })[0];
  var mids = P.boxes.filter(function (b) { return b !== src && b !== dst; }).sort(function (a, b) { return a.r[1] - b.r[1]; });
  if (!src || !dst || mids.length < 2 || mids.length > 4) throw new Error('사외유출 구조도 모양');
  var tx = function (b, k) { return b.t[k] ? T1(b.t[k].tx) : ''; };
  var b = '', sv = '', top = 40, CW = 420, cx = 432, n = mids.length, gw = (864 - 14 * (n - 1)) / n;
  b += '<div class="abs" style="left:0;top:0;width:864pt;font-size:13pt;font-weight:700;color:var(--blue)">' + E(P.sub) + '</div>';
  b += C1(cx - CW / 2, top, CW, 62, '<div style="display:flex;align-items:center;gap:10pt">' + icb('i-building') + '<div><div style="font-size:16pt;font-weight:800;color:var(--blue-d)">' + E(tx(src, 0)) + '</div><div style="font-size:12pt;color:var(--t2);margin-top:1pt">' + E(src.t.slice(1).map(function (t) { return T1(t.tx); }).join(' ')) + '</div></div></div>', 'padding:9pt 16pt');
  b += '<div class="abs" style="left:0;top:' + (top + 18) + 'pt;width:' + (cx - CW / 2 - 16) + 'pt;text-align:right">' + pill('법인 (지급)', 'p-tint') + '</div>';
  var my = top + 104, mh = 112, dy = my + mh + 34;
  mids.forEach(function (m, i) { var x = i * (gw + 14), mxc = x + gw / 2;
    b += C1(x, my, gw, mh, '<div style="display:flex;align-items:center;gap:8pt">' + circ(i + 1, true) + '<span style="font-size:14pt;font-weight:800;color:var(--blue)">' + E(tx(m, 0)) + '</span></div>' +
      '<div style="margin-top:6pt;font-size:17pt;font-weight:800;color:var(--ink)">' + E(tx(m, 1)) + '</div><div style="margin-top:4pt;font-size:12pt;line-height:1.35;color:var(--t2)">' + E(m.t.slice(2).map(function (t) { return T1(t.tx); }).join(' ')) + '</div>');
    sv += '<polyline points="' + cx + ',' + (top + 62) + ' ' + cx + ',' + (top + 82) + ' ' + mxc + ',' + (top + 82) + ' ' + mxc + ',' + (my - 3) + '" fill="none" stroke="#0B3AA8" stroke-width="2"/><polygon points="' + mxc + ',' + my + ' ' + (mxc - 5) + ',' + (my - 9) + ' ' + (mxc + 5) + ',' + (my - 9) + '" fill="#0B3AA8"/>';
    sv += '<polyline points="' + mxc + ',' + (my + mh) + ' ' + mxc + ',' + (my + mh + 16) + ' ' + cx + ',' + (my + mh + 16) + ' ' + cx + ',' + (dy - 3) + '" fill="none" stroke="#0B3AA8" stroke-width="2"/>'; });
  sv += '<polygon points="' + cx + ',' + dy + ' ' + (cx - 5) + ',' + (dy - 9) + ' ' + (cx + 5) + ',' + (dy - 9) + '" fill="#0B3AA8"/>';
  b += C1(cx - CW / 2, dy, CW, 56, '<div style="display:flex;align-items:center;gap:10pt">' + '<div class="icb inv" style="background:#2A59CC">' + icon('i-person') + '</div><div><div style="font-size:12pt;color:#DCE5FF">' + E(tx(dst, 0)) + '</div><div style="font-size:17pt;font-weight:800;color:#fff">' + E(dst.t.slice(1).map(function (t) { return T1(t.tx); }).join(' ')) + '</div></div></div>', HL + ';padding:8pt 16pt');
  b += '<div class="abs" style="left:0;top:' + (dy + 16) + 'pt;width:' + (cx - CW / 2 - 16) + 'pt;text-align:right">' + pill('개인, 가족 (수령)', 'p-blue') + '</div>';
  sv = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376">' + sv + '</svg>';
  return { body: sv + b, band: P.band };
}


function jgFlow1(u) {
  var ob = (u.blocks || []).filter(function (x) { return x && x.t === 'org'; })[0]; if (!ob) throw new Error('배당 흐름 org 블록 없음');
  var lv = {}; (ob.nodes || []).forEach(function (n) { (lv[n.lv] = lv[n.lv] || []).push(n); }); var ks = Object.keys(lv).sort();
  if (ks.length !== 3 || lv[ks[0]].length !== 1 || lv[ks[1]].length !== 1 || lv[ks[2]].length < 2 || lv[ks[2]].length > 3) throw new Error('배당 흐름 모양');
  var edge = function (id) { return (ob.edges || []).filter(function (e) { return e.t === id; }).map(function (e) { return T1(e.lab); }).filter(Boolean)[0] || ''; };
  var cl = function (t) { return String(t || '').replace(/\s*[▼▽↓]\s*/g, ' ').replace(/\s+/g, ' ').trim(); };
  var n0 = lv[ks[0]][0], n1 = lv[ks[1]][0], n2 = lv[ks[2]], lab1 = cl(edge(n1.id)), lab2 = cl(edge(n2[0].id));
  var html = '', sv = '', col = '#0B3AA8';
  var hOf = function (n) { return 40 + (n.ds ? 18 : 0) + 23 * ((n.rows || []).length); };
  var box = function (n, x, y, w, h, dk) { var t0 = T1(n.nm);
    html += '<div class="card" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;padding:8pt 14pt;' + (dk ? HL : '') + '">' +
      '<div style="display:flex;align-items:center;gap:8pt">' + (dk ? '<div class="icb inv" style="background:#2A59CC">' + icon(dgIcon1(t0) || 'i-building') + '</div>' : icb(dgIcon1(t0) || 'i-building')) + '<span style="font-size:15pt;font-weight:800;color:' + (dk ? '#fff' : 'var(--blue-d)') + '">' + E(t0) + '</span></div>' +
      (n.ds ? '<div style="margin-top:3pt;font-size:12pt;color:' + (dk ? '#DCE5FF' : 'var(--t2)') + '">' + E(T1(n.ds)) + '</div>' : '') +
      ((n.rows || []).length ? '<div style="margin-top:3pt">' + kv1(n.rows.map(function (r) { return [T1(r[0]), T1(r[1])]; }), { py: 3, lw: 55 }) + '</div>' : '') + '</div>'; };
  var TW = 400, tx = (864 - TW) / 2, cx = 432, k2 = n2.length, BW = k2 === 2 ? 330 : 270, gap = (864 - BW * k2) / (k2 + 1);
  var h0 = hOf(n0), h1 = hOf(n1), h2 = Math.max.apply(null, n2.map(hOf)), y0 = 0, y2 = 376 - h2, y1 = y0 + h0 + 44;
  box(n0, tx, y0, TW, h0, true); box(n1, tx, y1, TW, h1, false);
  sv += bez1([cx, y0 + h0 + 3, cx, y1 - 3], col, 2.4);
  if (lab1) html += '<div class="abs" style="left:' + (cx + 34) + 'pt;top:' + ((y0 + h0 + y1) / 2 - 9) + 'pt;font-size:12pt;font-weight:700;color:var(--blue)">' + E(lab1) + '</div>';
  n2.forEach(function (n, i) { var x = gap + i * (BW + gap), bc = x + BW / 2, ys = y1 + h1 + 3, ye = y2 - 3, my = (ys + ye) / 2;
    box(n, x, y2, BW, h2, false);
    sv += bez1([cx, ys, cx, ys + (ye - ys) * 0.62, bc, ys + (ye - ys) * 0.38, bc, ye], col, 2.4); });
  if (lab2) html += '<div class="abs" style="left:' + (cx - 100) + 'pt;top:' + ((y1 + h1 + y2) / 2 - 10) + 'pt;width:200pt;text-align:center"><span class="pill p-tint" style="background:#fff;box-shadow:var(--shadow)">' + E(lab2) + '</span></div>';
  sv = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376">' + sv + '</svg>';
  return { body: sv + html, band: '' };
}

function bez1(d, col, w, dash) {
  var p = [];
  if (d.length === 4) p = [[d[0], d[1]], [d[2], d[3]]];
  else for (var i = 0; i <= 28; i++) { var t = i / 28, v = 1 - t; p.push([v * v * v * d[0] + 3 * v * v * t * d[2] + 3 * v * t * t * d[4] + t * t * t * d[6], v * v * v * d[1] + 3 * v * v * t * d[3] + 3 * v * t * t * d[5] + t * t * t * d[7]]); }
  var a = p[p.length - 2], tip = p[p.length - 1], ang = Math.atan2(tip[1] - a[1], tip[0] - a[0]), z = 9;
  p[p.length - 1] = [tip[0] - z * 0.7 * Math.cos(ang), tip[1] - z * 0.7 * Math.sin(ang)];
  var f = function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); };
  return '<polyline points="' + p.map(f).join(' ') + '" fill="none" stroke="' + col + '" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round"' + (dash ? ' stroke-dasharray="4 3"' : '') + '/>' +
    '<polygon points="' + [tip, [tip[0] - z * Math.cos(ang - 0.42), tip[1] - z * Math.sin(ang - 0.42)], [tip[0] - z * Math.cos(ang + 0.42), tip[1] - z * Math.sin(ang + 0.42)]].map(f).join(' ') + '" fill="' + col + '"/>';
}
function dgIcon1(txt) { return /법인|회사|기업|\(주\)|㈜/.test(txt) ? 'i-building' : /자녀|가족|주주/.test(txt) ? 'i-people' : /대표|증여자|피상속인|수령자|배우자|상속인|수증자|양도자/.test(txt) ? 'i-person' : /세|공제/.test(txt) ? 'i-scale' : /이익|원|배당|대금|보험/.test(txt) ? 'i-coin' : ''; }


var S2NAME = { '1': '현행 유지 (미실행)', '2': '법인증여', '3': '법인증여 + 양도 후 미지급' };
var S2ITEMS = ['3안 의사결정 구조', '2안 법인증여 — 증여세 0 한도', '3안 법인증여 + 주식양도 — 대금 미지급', '20년 후 상속세 (1차 + 2차)', '20년 총 세금, 순위'];
function s2Pages1(ctx, D2, ci) { KPI_SPLIT = true; try { return s2Pages1_(ctx, D2, ci); } finally { KPI_SPLIT = false; } }

function s2To20(D2) {
  var V = D2.__V || {}, S2 = (V.S2 && V.S2.k) || {}, KN = { '1': 0, '2': 1, '3': 2 }, ek = function (w) { return (Math.round(w / 1e6) / 100).toFixed(2) + '억'; };
  var j = JSON.stringify(D2, function (k, v) { return k === '__V' ? undefined : v; });
  j = j.replace(/20년, 30년 모두 /g, '20년 ').replace(/20년, 30년 최소/g, '20년 최소').replace(/20, 30년 후/g, '20년 후').replace(/20년, 30년 뒤/g, '20년 뒤').replace(/30년 뒤 총비용/g, '20년 뒤 총 세금')
    .replace(/총비용/g, '총 세금').replace(/30년 총 세금/g, '20년 총 세금');
  var D = JSON.parse(j); D.__V = V;
  var p9 = D.deck.filter(function (sl) { return /^⑤ 총 세금/.test(sl.title || ''); })[0], T9 = null;
  (p9 && p9.blocks || []).forEach(function (b) { (b.nodes || []).forEach(function (n) { if (n.sh === 'tbl') T9 = n.rows; }); });
  var R9 = {}; (T9 || []).slice(1).forEach(function (r) { R9[String(r[0]).charAt(0)] = r; });
  var ord = Object.keys(R9).sort(function (a, b) { return num(R9[a][3]) - num(R9[b][3]); }), RK = {}; ord.forEach(function (k, i) { RK[k] = i + 1; });
  D.s20 = { R: R9, rank: RK, save: {} };
  Object.keys(R9).forEach(function (k) { var x = S2[KN[k]] && S2[KN[k]][20]; D.s20.save[k] = (x && x.saveNF > 0) ? ek(x.saveNF) : '—'; });
  
  D.deck.forEach(function (sl) { (sl.blocks || []).forEach(function (b) { (b.nodes || []).forEach(function (n) {
    var m = /^(\d)쪽 구조도 (\d)안 줄(.*?)④ 1차 \+ 2차 ([\d.,]+) \/ [\d.,]+억\s+→\s+⑤ [\d.,]+억 \(\d위\)$/.exec(String(n.t || ''));
    if (m && R9[m[2]]) n.t = m[1] + '쪽 구조도 ' + m[2] + '안 줄' + m[3] + '④ 20년 1차 + 2차 ' + m[4] + '억  →  20년 총 세금 ' + R9[m[2]][3] + ' (' + RK[m[2]] + '위)'; }); }); });
  return D;
}

var CURVE_LINKS = false;
function curveLink1(pts, colr, dsh, arrow) {   
  var P = [pts[0]];
  for (var i = 1; i < pts.length - 1; i++) {
    var a = pts[i - 1], c = pts[i], n = pts[i + 1], la = Math.hypot(c[0] - a[0], c[1] - a[1]), ln = Math.hypot(n[0] - c[0], n[1] - c[1]), r = Math.min(22, la / 2, ln / 2);
    if (r < 1) { P.push(c); continue; }
    var s0 = [c[0] - (c[0] - a[0]) / la * r, c[1] - (c[1] - a[1]) / la * r], e0 = [c[0] + (n[0] - c[0]) / ln * r, c[1] + (n[1] - c[1]) / ln * r];
    for (var k = 0; k <= 8; k++) { var t = k / 8, v = 1 - t; P.push([v * v * s0[0] + 2 * v * t * c[0] + t * t * e0[0], v * v * s0[1] + 2 * v * t * c[1] + t * t * e0[1]]); }
  }
  P.push(pts[pts.length - 1]);
  var f = function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }, o = '<polyline points="' + P.map(f).join(' ') + '" fill="none" stroke="' + colr + '" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"' + (dsh ? ' stroke-dasharray="4 3"' : '') + '/>';
  if (arrow !== false) { var A = P[P.length - 2], B = P[P.length - 1], ang = Math.atan2(B[1] - A[1], B[0] - A[0]), z = 7;
    o += '<polygon points="' + [B, [B[0] - z * Math.cos(ang - 0.45), B[1] - z * Math.sin(ang - 0.45)], [B[0] - z * Math.cos(ang + 0.45), B[1] - z * Math.sin(ang + 0.45)]].map(f).join(' ') + '" fill="' + colr + '"/>'; }
  return o;
}
function s2Pages1_(ctx, D2, ci) {
  D2 = s2To20(D2); CURVE_LINKS = true; try { return s2Pages1__(ctx, D2, ci); } finally { CURVE_LINKS = false; }
}
function s2Pages1__(ctx, D2, ci) {
  var V0 = D2.__V; if (privOn(ctx)) { D2 = privDeep(JSON.parse(JSON.stringify(D2, function (k, v) { return k === '__V' ? undefined : v; })), ctx.opt.priv); D2.__V = V0; }
  var sub = Object.create(ctx); sub.R = Reader(D2); sub.C = { secs: (ctx.secs || []).slice(0, ci + 1).map(function (x, i) { return [x[0], i === ci ? /[\s\S]?/ : /^￿$/]; }) };
  var R = sub.R, p2 = must(R.find(/^의사결정 구조도/), '2번 의사결정 구조도'), p9 = must(R.find(/^⑤ 총 세금/), '2번 ⑤ 총 세금'), p8 = R.find(/^④ 상속세/);
  var T9 = must(R.tbl(p9), '⑤ 표'), hd9 = T9[0], RW = {};
  T9.slice(1).forEach(function (r) { var k = String(r[0]).charAt(0); RW[k] = r; });
  ['1', '2', '3'].forEach(function (k) { must(RW[k], '⑤ 표 ' + k + '안'); });
  var N2 = R.nodes(p2), at = function (row, x) { return N2.filter(function (n) { return Math.abs(n.y - row) < 0.02 && Math.abs(n.x - x) < 0.02; })[0] || {}; };
  var rowY = {}; N2.forEach(function (n) { var m = /^([123]) /.exec(String(n.n || '')); if (m && Math.abs(n.x - 2.2) < 0.02) rowY[m[1]] = n.y; });
  var st1 = must(N2.filter(function (n) { return n.n === '① 지분'; })[0], '① 지분').t.replace(/\n+/g, ' ').replace(/\s+/g, ' ');
  var rank = R.note(p2, '순위'), vmax = Math.max(num(RW['1'][3]), num(RW['2'][3]), num(RW['3'][3]), 1), SV = (D2.s20 || {}).save || {}, RK = (D2.s20 || {}).rank || {};
  var best = ['1', '2', '3'].sort(function (a, b) { return num(RW[a][3]) - num(RW[b][3]); })[0];
  
  var body = stepStrip([['① ' + st1, true], ['② 이전 수단'], ['③ 실행 세금'], ['④ 20년 상속세 1차 + 2차'], ['⑤ 20년 총 세금, 순위']]);
  ['1', '2', '3'].forEach(function (k, i) { var y = rowY[k], r = RW[k], hl = k === best;
    var tag = at(y, 2.2), mv = at(y, 3.92), ex = at(y, 5.55), ih = at(y, 6.67);
    var sv0 = SV[k] && SV[k] !== '—' ? SV[k] : '';
    body += routeCard(i * 292, 280, 300, { letter: k, tag: E(String(tag.t || '').replace(/\n/g, ' ')), name: E(S2NAME[k]), ranks: k === '1' ? ['기준'] : [(RK[k] || '') + '위'], bigLab: '',
      big: String(r[3]).replace('억', '') + '<span style="font-size:14pt;font-weight:700">억</span>', bigSub: E('⑤ 20년 총 세금' + (sv0 ? ', 절감 ' + sv0 : ', 기준')), frac: num(r[3]) / vmax,
      rows: [['② 이전 수단', E(String((mv.n && mv.n !== '—' ? mv.n + ' ' : '') + (mv.t || '—')).replace(/\n/g, ' '))], ['③ 실행 세금', E(ex.t || r[1])], ['④ 20년 상속세 1차 + 2차', E(r[2])]], hl: hl, badge: hl ? '20년 최소' : null, tagBelow: true });
  });
  slide(sub, { eyebrow: '사전증여, 양수도 — 3안 의사결정 구조', title: emNum('3안 중 ' + k3(best) + ' 20년 총 세금 최소 ' + RW[best][3]), sec: ci, body: body, foot: '<b>순위</b>  ' + E(rank) });
  function k3(k) { return k + ' ' + S2NAME[k]; }
  
  D2.deck.forEach(function (sl) {
    if (sl.type !== 'content' || sl === p2) return;
    if (/^(전체 구조도|① 재산 현황)/.test(sl.title)) return;
    if (sl === p9) return s2Total1(sub, p9, RW, hd9, vmax, best, ci, D2);
    if (sl === p8) return s2Inh20(sub, p8, RW, best, ci);
    if (/^핵심 근거/.test(sl.title)) return evidence(sub, sl);
    generic(sub, sl);
  });
}
function s2Inh20(sub, p8, RW, best, ci) {   
  var R = sub.R, T = R.tbl(p8) || [], rows = T.filter(function (r, i) { return i && !/30년/.test(r[0]); }), hd = T[0] || [];
  var sumR = rows.filter(function (r) { return /합계 20년/.test(r[0]); })[0] || rows[rows.length - 1], mx = Math.max(num(sumR[1]), num(sumR[2]), num(sumR[3]), 1);
  var tb = '<div style="display:flex;padding:0 4pt 4pt;border-bottom:1pt solid var(--blue4);font-size:12pt;font-weight:700;color:var(--t3)">' + hd.map(function (h, j) { return '<div style="' + (j ? 'width:80pt;text-align:right' : 'flex:1') + '">' + E(h) + '</div>'; }).join('') + '</div>' +
    rows.map(function (r) { var on = r === sumR; return '<div style="display:flex;align-items:center;height:34pt;padding:0 4pt;' + (on ? 'background:var(--tint);border-radius:8pt;font-weight:800;color:var(--blue-d)' : 'border-bottom:0.75pt dashed var(--rule)') + '">' + r.map(function (c, j) { return '<div class="' + (j ? 'num' : '') + '" style="font-size:12pt;' + (j ? 'width:80pt;text-align:right' : 'flex:1') + '">' + E(c) + '</div>'; }).join('') + '</div>'; }).join('');
  var b = C1(0, 0, 520, 300, head1('i-doc', '20년 후 상속세 (억원)') + '<div style="margin-top:8pt">' + tb + '</div>');
  b += C1(532, 0, 332, 300, head1('i-chart', '1차 + 2차 상속세 20년') + '<div style="margin-top:12pt">' + hbars1(['1', '2', '3'].map(function (k, i) { return [k + ' ' + S2NAME[k], sumR[i + 1], num(sumR[i + 1]) / mx, k === best, '', k === best ? 'var(--blue)' : 'var(--blue3)']; }), { lw: 130, vw: 56, py: 10, bh: 14 }) + '</div>');
  var nt = R.notes(p8); b += noteBox(nt.__order.filter(function (k) { return k.charAt(0) !== '_' && k !== '시사점'; }).map(function (k) { return k + ' : ' + nt[k]; }).join('\n'), 64);
  slide(sub, { eyebrow: '④ 상속세 — 20년 후', title: emNum(nt['시사점'] || ('20년 후 상속세 최소 = ' + best + ' ' + S2NAME[best])), sec: ci, body: b, sub: p8.sub, foot: '' });
}
function s2Total1(sub, p9, RW, hd9, vmax, best, ci, D2) {
  var SV = (D2 && D2.s20 && D2.s20.save) || {}; vmax = Math.max(num(RW['1'][3]), num(RW['2'][3]), num(RW['3'][3]), 1);
  best = ['1', '2', '3'].sort(function (a, c) { return num(RW[a][3]) - num(RW[c][3]); })[0];
  var R = sub.R, rows = [['1', false], ['2', false], ['3', false]].map(function (q) { return [q[0], RW[q[0]], q[0] === best]; });
  var bars = rows.map(function (q) { var r = q[1], hl = q[2], f1 = num(r[1]) / vmax, f2 = num(r[2]) / vmax, sv = SV[q[0]];
    return '<div style="height:84pt;border-bottom:0.75pt dashed var(--rule);padding-top:8pt"><div style="display:flex;justify-content:space-between;align-items:center">' +
      '<span style="font-size:14pt;font-weight:' + (hl ? 800 : 600) + ';color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(q[0] + ' ' + S2NAME[q[0]]) + '</span><span style="display:flex;gap:8pt;align-items:center">' +
      '<span class="num" style="font-size:16pt;font-weight:800;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(r[3]) + '</span>' + (sv && sv !== '—' ? pill('절감 ' + E(sv), hl ? 'p-blue' : 'p-tint') : pill('기준', 'p-grey')) + '</span></div>' +
      '<div style="display:flex;height:16pt;margin-top:8pt;border-radius:8pt;background:var(--tint);overflow:hidden"><div style="width:' + (f1 * 100).toFixed(2) + '%;background:var(--risk);border-radius:8pt 0 0 8pt"></div>' +
      '<div style="width:' + (f2 * 100).toFixed(2) + '%;background:' + (hl ? 'var(--blue)' : 'var(--blue3)') + ';border-radius:' + (f1 > 0 ? '0 8pt 8pt 0' : '8pt') + '"></div></div>' +
      '<div style="font-size:12pt;color:var(--t3);margin-top:4pt">' + E(hd9[1] + ' ' + r[1] + ' + ' + hd9[2] + ' ' + r[2] + ' = ' + hd9[3] + ' ' + r[3]) + '</div></div>'; }).join('');
  var b = C1(0, 0, 548, 376, head1('i-chart', '20년 총 세금 = 이전비용 (빨강) + 20년 상속세 1차 + 2차', pill('억원', 'p-tint', 'margin-left:auto')) + '<div style="margin-top:6pt">' + bars + '</div>');
  var ord = ['1', '2', '3'].sort(function (a, c) { return num(RW[a][3]) - num(RW[c][3]); });
  var rk = ord.map(function (k, i) { var r = RW[k], hl = i === 0;
    return '<div style="display:flex;gap:10pt;align-items:center;padding:8pt 0;' + (i < 2 ? 'border-bottom:0.75pt dashed var(--blue4)' : '') + '">' + circ(i + 1, !hl) +
      '<div style="flex:1"><div style="display:flex;justify-content:space-between;gap:6pt"><span style="font-size:13pt;font-weight:700;color:' + (hl ? 'var(--blue)' : 'var(--ink)') + '">' + E(k + ' ' + S2NAME[k]) + '</span>' +
      '<span class="num" style="font-size:13pt;font-weight:800">' + E(r[3]) + '</span></div><div style="font-size:12pt;color:var(--t3);margin-top:1pt">' + E('이전비용 ' + r[1] + ' + 상속세 ' + r[2]) + '</div></div></div>'; }).join('');
  var nt = R.notes(p9);
  var sv2 = ['2', '3'].map(function (k) { return SV[k]; }).filter(function (x) { return x && x !== '—'; });
  b += C1(560, 0, 304, 376, head1('i-flag', '순위 — 20년 총 세금') + '<div style="margin-top:4pt">' + rk + '</div>' +
    '<div style="margin-top:8pt;background:var(--tint);border-radius:10pt;padding:8pt 12pt;font-size:12pt;color:var(--t2);line-height:1.45">' +
    '<b>순위</b> ' + E(ord.map(function (k, i) { return k + '안 ' + (i + 1) + '위'; }).join(', ') + (sv2.length ? ', 현행 대비 ' + sv2.join(' ~ ') + ' 절감 (20년)' : '')) + '<br>' +
    nt.__order.filter(function (k) { return k.charAt(0) !== '_' && k !== '순위'; }).map(function (k) { return '<b>' + E(k) + '</b> ' + E(nt[k]); }).join('<br>') + '</div>');
  slide(sub, { eyebrow: p9.title, title: emNum('20년 총 세금 ' + best + ' ' + S2NAME[best] + ' ' + RW[best][3] + ' 1위 — 현행 대비 ' + (SV[best] || '') + ' 절감'), sec: ci, body: b, sub: p9.sub, foot: '' });
}


function fundPages1(u, X) {
  var T = R1(u, 0), g = function (re) { var r = T.filter(function (x) { return re.test(x[0]); })[0]; if (!r) throw new Error('납세재원 표 ' + re); return r; };
  var yy = g(/^연부연납$/), ga = g(/가산금/), real = g(/^실질 상속세/), mul = g(/^물납/), ret = g(/^임원 퇴직급여/), div = g(/^배당/), ins = g(/종신보험/);
  var mT = /총 ([\d.,]+억원) ÷ (\d+회) = 회당 ([\d.,]+억원)/.exec(yy[2]); if (!mT) throw new Error('연부연납 수치 모양');
  var mI = /목표 ([\d.,]+억원) \(상속세의 (\d+%)\)/.exec(ins[2]); if (!mI) throw new Error('종신보험 수치 모양');
  var out = [];
  
  var b = '<div class="abs" style="left:0;top:0;width:864pt;height:100pt;display:grid;grid-template-columns:repeat(3,1fr);gap:22pt">' +
    K1('i-doc', '납부할 상속세 (20년 후 추정)', mT[1], E('연부연납 ' + mT[2] + ', 회당 ' + mT[3]), false, null, 22) +
    K1('i-coin', '연부연납 가산금 포함 실제 현금 유출', real[2], E('가산금 ' + ga[2] + ' (연 3.1%)'), false, null, 22) +
    K1('i-shield', '종신보험 목표 보험금', mI[1], E('상속세의 ' + mI[2] + ', 유고 시 즉시 현금'), true, null, 22) + '</div>';
  var M = [
    ['현금 마련', '이익잉여금 ' + (/([\d.,]+억원)/.exec(div[2]) || ['', div[2]])[1], '법인 이익을 개인 현금으로 옮기는 순간 배당소득세 등 먼저 부담 (종합소득 최고 49.5%, 지방소득세 포함), 인출한 현금도 상속재산에 다시 포함'],
    ['연부연납', '회당 ' + mT[3] + ' × ' + mT[2], '10년간 매년 회당 ' + mT[3] + ' 현금 필요, 가산금 ' + ga[2] + ' 추가, 담보 제공 필수 (상증법 §71①)'],
    ['물납', mul[2], '부동산, 유가증권이 상속재산의 2분의 1 초과 등 요건 (상증법 §73①), 비상장주식은 다른 상속재산으로 부족할 때만 (상증령 §74①2호나목), 관리, 처분 부적당 시 불허'],
    ['퇴직금', String(ret[2]).replace(/^근속 \d+년 × /, ''), '유고 시 퇴직금 = 상속재산 (상증법 §10, 퇴직소득 세후 + 한도 초과분 근로소득 세후) — 상속세도 함께 늘림']];
  var gw = (864 - 54) / 4;
  M.forEach(function (m, i) {
    b += C1(i * (gw + 18), 124, gw, 160, '<div style="display:flex;align-items:center;gap:7pt">' + circ(i + 1, true) + '<span style="font-size:14pt;font-weight:800">' + E(m[0]) + '</span></div>' +
      '<div class="num" style="margin-top:5pt;font-size:13pt;font-weight:800;line-height:1.25;color:var(--blue)">' + E(m[1]) + '</div>' +
      '<div style="margin-top:6pt;padding-top:5pt;border-top:0.75pt dashed var(--rule);font-size:12pt;font-weight:700;color:var(--risk)">어려운 점</div><div style="font-size:12pt;line-height:1.3;color:var(--t2)">' + E(m[2]) + '</div>', 'padding:9pt 12pt'); });
  b += C1(0, 304, 864, 72, '<div style="display:flex;align-items:center;gap:14pt;height:100%">' + circ(5) + '<div style="flex:none;font-size:16pt;font-weight:800;color:var(--blue)">종신보험 = 낮은 비용, 높은 효율</div>' +
    '<div style="flex:1;font-size:12pt;line-height:1.35;color:var(--t2)">보험료 납입분보다 큰 보험금을 유고 시점에 바로 현금으로 확보, 재원이 생기는 때와 상속세를 낼 때가 일치 → 목표 ' + E(mI[1]) + ' (상속세의 ' + E(mI[2]) + '), 급매 없이 유동화 시간 확보<br><span style="color:var(--risk)">보험료, 보험금 배율은 상품, 가입 나이별 정본 필요 [확인 필요]</span></div></div>', HLB + 'padding:8pt 16pt');
  out.push({ eyebrow: '마무리 — 상속세 납부재원 마련 방안 비교', title: emNum('현금, 연부연납, 물납, 퇴직금은 각각 한계 → 종신보험 ' + mI[1] + '이 가장 낮은 비용, 높은 효율'), body: b, foot: '<b>근거</b>  상증법 §10, §71, §73, 상증령 §74, 소득세법 §55' });
  
  var C = [
    ['대표가 직접 납부', '계약자, 수익자 구조와 무관하게 대표가 보험료를 내면', '보험금 = 상속재산', '피상속인이 보험계약자이거나 실질적으로 보험료를 낸 보험금은 상속재산으로 봄 (상증법 §8①②) → 보험금 ' + mI[1] + '에도 상속세', 'risk'],
    ['자녀가 납부', '자녀가 계약자, 수익자', '자금출처 부족', '자녀 본인 소득이 없으면 보험료 재원이 부모 지원 → 증여받은 재산으로 낸 보험료의 보험금 상당액 − 보험료 = 증여재산 (상증법 §34①2호)', 'risk'],
    ['법인이 납부', '계약자, 수익자 = 법인', '법인이 납부해야 함', '보험금은 법인에 유입 (법인 익금, 서면인터넷방문상담2팀-2741, 2004. 12. 27.) → 상속주식 감자 플랜으로 상속인에게 현금 이전', 'blue']];
  var b2 = '';
  C.forEach(function (c, i) { var on = c[4] === 'blue';
    b2 += C1(i * 292, 0, 280, 222, '<div style="display:flex;align-items:center;gap:8pt">' + circ(i + 1, !on) + '<span style="font-size:15pt;font-weight:800;color:' + (on ? 'var(--blue)' : 'var(--ink)') + '">' + E(c[0]) + '</span></div>' +
      '<div style="margin-top:4pt;font-size:12pt;color:var(--t3)">' + E(c[1]) + '</div>' +
      '<div style="margin-top:8pt">' + pill(E(c[2]), on ? 'p-blue' : 'p-risk') + '</div>' +
      '<div style="margin-top:7pt;font-size:12pt;line-height:1.38;color:var(--t2)">' + E(c[3]) + '</div>', on ? HLB : ''); });
  b2 += C1(0, 234, 864, 84, head1('i-check', '결론 — 법인 납부 + 상속주식 감자 플랜') + '<div style="margin-top:5pt;font-size:12pt;line-height:1.4;color:var(--ink)">' +
    '상속받은 주식의 취득가액 = 상속개시일 평가액 (서면인터넷방문상담1팀-1239, 2006. 9. 11.) → 감자대가가 취득가액 이내면 의제배당 없음 (소득세법 §17②1호) → 법인에서 보험금을 꺼낼 때 세금 없음, 개인 가입과 같은 효과 + 개인 보험료 부담 없음</div>', 'padding:8pt 16pt');
  b2 += noteBox('법인 유입 보험금이 상속 주식 평가액(순자산가액)에 반영되는지, 보험차익 법인세, 사망 시 수익자를 상속인으로 두면 상속재산 (조심 2019중1257, 2019. 6. 13.), 예규가 2004, 2006년 것 — 이후 개정 여부', 46, { risk: true, lab: '확인 필요' });
  out.push({ eyebrow: '마무리 — 보험료 납부자 3가지 가정', title: emNum('대표 납부 = 상속세, 자녀 납부 = 자금출처 → 법인이 납부하고 상속주식 감자로 현금화'), body: b2, foot: '<b>근거</b>  상증법 §8, §34, 소득세법 §17②1호, 예규 원문' });
  return out;
}
function gamjaPage1(u, X) {   
  var st = FL1(u, 0), d = function (k) { return (st[k] || {}).d || ''; };
  var insA = must(/([\d.,]+억원)/.exec(d(1)), '보험금')[1], shs = must(/([\d,]+주) 소각/.exec(d(2)), '소각 주식')[1], tot = (/× ([\d,]+주)/.exec(d(0)) || ['', ''])[1],
    ps = (/1주 ([\d,.]+만원)\(([^)]*)\)/.exec(d(0)) || ['', '', '']), rep = must(/약 ([\d.]+회분)/.exec(d(4)), '회분')[1], nIns = (/(\d+회)/.exec(d(4)) || ['', ''])[1], big = (/= ([\d.,]+억원)/.exec(d(0)) || ['', ''])[1];
  var html = '', sv = '';
  var bx = function (x, y, w, h, t1, t2, st2) { html += '<div class="card" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;height:' + h + 'pt;padding:7pt 12pt;display:flex;flex-direction:column;justify-content:center;' + (st2 || '') + '">' +
    '<div style="display:flex;align-items:center;gap:8pt">' + (st2 === HL ? '<div class="icb inv" style="background:#2A59CC">' + icon(dgIcon1(t1) || 'i-building') + '</div>' : icb(dgIcon1(t1) || 'i-person')) + '<span style="font-size:15pt;font-weight:800;color:' + (st2 === HL ? '#fff' : 'var(--blue-d)') + '">' + E(t1) + '</span></div>' +
    (t2 ? '<div style="margin-top:4pt;font-size:12pt;line-height:1.3;color:' + (st2 === HL ? '#DCE5FF' : 'var(--t2)') + '">' + E(t2) + '</div>' : '') + '</div>'; };
  var arr = function (dd, col) { sv += bez1(String(dd).match(/-?[\d.]+/g).map(Number), col || '#0B3AA8', 2.4); };
  var lab = function (x, y, w, t, col, al) { html += '<div class="abs" style="left:' + x + 'pt;top:' + y + 'pt;width:' + w + 'pt;text-align:' + (al || 'center') + ';font-size:12pt;font-weight:700;line-height:1.28;color:' + (col || 'var(--blue)') + '">' + t + '</div>'; };
  bx(0, 0, 250, 58, '대표 (유고)', '보유 주식 ' + (tot || '') + ' 상속');
  bx(0, 128, 250, 84, '상속인', '취득가액 = 상속개시일 평가액' + (ps[1] ? ' (1주 ' + ps[1] + ', ' + ps[2] + ')' : ''));
  bx(0, 290, 250, 58, '세무서', '상속세 연부연납 ' + nIns);
  bx(430, 120, 230, 100, '법인 (보험 계약자, 수익자)', '자기주식 취득 후 소각 (상법 §341 배당가능이익 한도)', HL);
  bx(724, 128, 140, 84, '보험사', '대표 피보험');
  arr('M125,60 L125,124'); lab(132, 74, 200, E('① 주식 상속' + (big ? ' ' + big : '')), null, 'left');
  arr('M722,170 L666,170');
  lab(664, 224, 200, E('② 보험금 ' + insA), null, 'right');
  arr('M252,150 C 312,126 372,126 426,150'); lab(252, 98, 176, E('③ ' + shs + ' 양도, 소각'));
  arr('M428,192 C 372,218 312,218 254,192', '#D2463A'); lab(252, 214, 176, E('④ 감자대가 ' + insA) + '<br><span style="font-weight:400;color:var(--t2)">의제배당 최소 (소득세법 §17②1호)</span>', 'var(--risk)');
  arr('M125,214 L125,286'); lab(132, 256, 240, E('⑤ 상속세 납부 — ' + nIns + ' 중 약 ' + rep), null, 'left');
  html += C1(430, 252, 434, 96, '<div style="font-size:13pt;font-weight:800;color:var(--blue)">왜 세금이 없나</div><div style="margin-top:4pt;font-size:12pt;line-height:1.38;color:var(--t2)">의제배당 = 감자대가 − 취득가액 (소득세법 §17②1호), 상속 주식 취득가액 = 상속개시일 평가액 (서면인터넷방문상담1팀-1239, 2006. 9. 11.) → 평가액 이내 감자면 의제배당 0원</div>', 'padding:8pt 14pt');
  sv = '<svg class="vec" style="position:absolute;left:0;top:0;width:864pt;height:376pt;overflow:visible" viewBox="0 0 864 376"><defs><marker id="gjA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0B3AA8"/></marker><marker id="gjR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#D2463A"/></marker></defs>' + sv + '</svg>';
  return [{ eyebrow: '마무리 — 상속감자 플랜 (유고 시 대비)', title: emNum('유고 시 보험금 ' + insA + ' → 법인이 상속 주식 감자 → 상속인 현금 → 상속세 ' + nIns + ' 중 약 ' + rep), body: sv + html, foot: '<b>확인 필요</b>  배당가능이익 한도, 주주총회 결의, 감자대가가 취득가액을 넘으면 초과분 의제배당' }];
}
function deck1(ctx) {
  var D = ctx.D, W = window, meta = D.meta || {}, R0 = ctx.opt.rd || {};
  ['d2DgDeck', 'rdUnits', 'd2RdPages', 'RdK', 'rdTx'].forEach(function (k) { RD[k] = R0[k] || (typeof W[k] === 'function' ? W[k] : null); });
  if (!RD.d2DgDeck || !RD.rdUnits) throw new Error('2판 1번 : 크레탑 툴 안에서만 돎');
  W = { d2DgDeck: RD.d2DgDeck, rdUnits: RD.rdUnits, d2RdPages: RD.d2RdPages, RdK: RD.RdK, jspdf: window.jspdf, jsPDF: window.jsPDF, __FSPDF: window.__FSPDF, DECK_TITLE: window.DECK_TITLE };
  var deck = W.d2DgDeck(D.deck, meta), units = W.rdUnits(deck);
  
  var concl = {};
  try {
    var J = (W.jspdf && W.jspdf.jsPDF) || W.jsPDF, doc = new J({ orientation: 'landscape', unit: 'pt', format: [842, 595] });
    doc.addFileToVFS('FS-M.ttf', W.__FSPDF.M); doc.addFont('FS-M.ttf', 'FS', 'normal'); doc.addFileToVFS('FS-B.ttf', W.__FSPDF.B); doc.addFont('FS-B.ttf', 'FS', 'bold');
    var setF = function (b, sz, col) { doc.setFont('FS', b ? 'bold' : 'normal'); doc.setFontSize(Math.max(12, sz)); doc.setTextColor('#' + (col || '000000')); };
    var PG = W.d2RdPages(new W.RdK(doc, 72, setF), { deck: D.deck, meta: meta }, W.d2DgDeck(D.deck, meta));
    PG.fin.forEach(function (p) { if (p.type !== 'content' || !p.concl || concl[p.title]) return; concl[p.title] = p.concl.runs.slice(1).map(function (r) { return r.t; }).join('').replace(/\s+/g, ' ').trim(); });
  } catch (e) { try { console.warn('2판 결론 띠', e); } catch (x) {} }
  if (privOn(ctx)) { units = privDeep(JSON.parse(JSON.stringify(units)), ctx.opt.priv); privDeep(concl, ctx.opt.priv);   
    var cc0 = {}; Object.keys(concl).forEach(function (k) { cc0[privText(k, ctx.opt.priv)] = concl[k]; }); concl = cc0; }
  var chaps = []; units.forEach(function (u) { if (u.type === 'divider') chaps.push({ no: u.sl.no, title: T1(u.sl.title), items: [] }); else if (u.type === 'content' && chaps.length) chaps[chaps.length - 1].items.push(T1(u.title)); });
  
  var s2ci = -1; chaps.forEach(function (c, i) { if (/사전증여/.test(c.title) && D.s2D) { s2ci = i; c.title = '사전증여, 양수도 — 3안 비교'; c.items = S2ITEMS.slice(); }
    if (/^마무리/.test(c.title)) c.items = c.items.map(function (t) { return /납세재원 마련/.test(t) ? '납부재원 마련 방안, 보험료 납부자' : /감자 플랜/.test(t) ? '상속감자 플랜' : t; }); });
  var s2done = false;
  ctx.secs = chaps.map(function (c) { return [c.title]; });
  var title = String(D.deckTitle || W.DECK_TITLE || '가업승계 전략 검토'), co = '';
  units.forEach(function (u) { if (!co && u.type === 'content' && /^자산가치평가 — /.test(u.title)) co = u.title.replace(/^자산가치평가 — /, '').replace(/ — .*$/, ''); });
  if (privOn(ctx)) { if (co) ctx.client = co; if (!ctx.opt.name) ctx.opt.name = (co || '보고서') + '_가업승계_개인정보보호판'; }
  cover(ctx, co ? [co, title] : [title], ctx.C.sub({}));
  if (privOn(ctx)) privBasis1(ctx);   
  var ci = -1, first = null;
  units.forEach(function (u) {
    if (u.type === 'divider') { ci++; var c = chaps[ci]; if (c.items.length) chapter1(ctx, c.no || ('0' + (ci + 1)).slice(-2), c.title, c.items, ci + 1, chaps.length); return; }
    if (u.type !== 'content') return;
    if (ci === s2ci) { if (!s2done) { s2done = true; try { s2Pages1(ctx, D.s2D, ci); } catch (e) { (window.__IR1LOG = window.__IR1LOG || []).push('12챕터 2번 덱 : ' + (e && e.message || e)); s2done = false; s2ci = -2; } } if (s2ci !== -2) return; }
    var tt = T1(u.title), cc = concl[u.title];
    if (!first && cc) first = cc;
    if (/주권 발행 예시$/.test(tt)) { try { var jk = jukwon1(units); slide(ctx, { eyebrow: jk.eyebrow, title: jk.title, sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, body: jk.body, foot: jk.foot, kind: 'd' }); } catch (e) { (window.__IR1LOG = window.__IR1LOG || []).push('주권 구조도 : ' + (e && e.message || e)); } }
    if (!u.dg && /배당 흐름/.test(tt)) { try { var jf = jgFlow1(u); slide(ctx, { eyebrow: tt, title: emNum(cc || jf.band || '기존법인 → 수혜법인 → 자녀 법인, 배당 익금불산입'), sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, body: jf.body, foot: '', kind: 'd' }); return; } catch (e) { (window.__IR1LOG = window.__IR1LOG || []).push(tt + ' : ' + (e && e.message || e)); } }
    if (u.dg && /사외유출 구조도/.test(tt)) { try { var go = dgOut1(u); slide(ctx, { eyebrow: tt, title: emNum(cc || go.band || tt), sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, body: go.body, foot: '', kind: 'd' }); return; } catch (e) { (window.__IR1LOG = window.__IR1LOG || []).push(tt + ' : ' + (e && e.message || e)); } }
    if (u.dg) { var g = dg1(u), base = String(u.title).replace(/\s*—?\s*(거래 )?구조도.*$/, ''), orph = Object.keys(concl).filter(function (k) { return k.indexOf(base) === 0 && !units.some(function (v) { return v.title === k; }); });
      var ft = orph.length === 1 && concl[orph[0]] && concl[orph[0]] !== (cc || g.band) ? '<b>결론</b>  ' + E(T1(concl[orph[0]])) : '';
      slide(ctx, { eyebrow: tt, title: emNum(cc || g.band || tt), sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, body: g.body, foot: ft }); return; }
    var fn = null; for (var q = 0; q < D1P.length; q++) if (D1P[q][0].test(tt) || D1P[q][0].test(u.title)) { fn = D1P[q][1]; break; }
    if (fn) { try { var pgs = fn(u, { cc: cc, tt: tt, ctx: ctx, units: units }) || [];
        if (pgs.length) { pgs.forEach(function (pg) { if (pg.skip) return; slide(ctx, { eyebrow: pg.eyebrow || tt, title: pg.title || emNum(cc || tt), sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, body: oneHL1(pg.body), foot: pg.foot || '', kind: pg.kind || 'd' }); }); return; }
      } catch (e) { (window.__IR1LOG = window.__IR1LOG || []).push(tt + ' : ' + (e && e.message || e)); try { console.warn('2판 1번 설계 실패', tt, e); } catch (x) {} } }
    slide(ctx, { eyebrow: tt, title: emNum(cc || tt), sec: Math.max(0, ci), chap: (chaps[ci] || {}).title, split: true, kind: 'old',
      body: '<div class="flow1" style="position:absolute;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;gap:10pt">' + blocks1(u.blocks) + '</div>', foot: '' });
  });
  var ex = units.filter(function (u) { return u.type === 'content' && /^핵심 요약/.test(u.title); })[0], chk = [];
  if (ex) { var tb = (ex.blocks || []).filter(function (b) { return b.t === 'table'; })[0]; if (tb) tb.rows.slice(1, 4).forEach(function (r) { chk.push([T1(r[1]).replace(/\s+/g, ' '), T1(r[2]).split('\n')[0]]); }); }
  var rq = units.filter(function (u) { return u.type === 'content' && /추가 제공 요청 자료/.test(u.title); })[0], steps = [];
  if (rq) { var t2 = (rq.blocks || []).filter(function (b) { return b.t === 'table'; })[0]; if (t2) t2.rows.slice(1, 4).forEach(function (r) { steps.push([T1(r[1] || r[0]), T1(r[2] || '')]); }); }
  if (privOn(ctx)) privAppendix1(ctx);   
  closing(ctx, ['가업승계 전략 검토', '요약과 다음 단계'], chk, steps.length ? steps : [['정본 수령 후 재계산', '']]);
}

function paginate1() {
  function over(sl) { var b = sl.querySelector('.body'), f = sl.querySelector('.flow1'); if (!f || !f.lastElementChild) return false;
    return f.lastElementChild.getBoundingClientRect().bottom > b.getBoundingClientRect().bottom + 1; }
  var q = [].slice.call(document.querySelectorAll('.slide[data-split]')), orig = q.slice();
  while (q.length) {
    var cur = q.shift(), guard = 0;
    while (over(cur) && guard++ < 300) {
      var nx = cur.__next;
      if (!nx) { nx = cur.cloneNode(true); nx.querySelector('.flow1').innerHTML = ''; var eb = nx.querySelector('.eb'); if (eb) { var t0 = eb.firstChild; if (t0 && t0.nodeType === 3) { if (!/\(계속\)$/.test(t0.textContent)) t0.textContent += ' (계속)'; } else if (!/\(계속\)$/.test(eb.textContent)) eb.textContent += ' (계속)'; }
        cur.parentNode.insertBefore(nx, cur.nextSibling); cur.__next = nx; q.unshift(nx); }
      var f = cur.querySelector('.flow1'), nf = nx.querySelector('.flow1'), blks = f.children;
      if (blks.length > 1) { nf.insertBefore(blks[blks.length - 1], nf.firstChild); continue; }
      var one = blks[0], rws = [].filter.call(one.children, function (x) { return x.classList.contains('rw') && !x.classList.contains('hd'); });
      if (rws.length < 2) break;
      var head = [].filter.call(one.children, function (x) { return x.classList.contains('hd'); })[0];
      var part = nf.firstElementChild && nf.firstElementChild.__part ? nf.firstElementChild : null;
      if (!part) { part = one.cloneNode(false); part.__part = 1; if (head) part.appendChild(head.cloneNode(true)); nf.insertBefore(part, nf.firstChild); }
      var ref = head ? (part.children[1] || null) : part.firstChild;
      part.insertBefore(rws[rws.length - 1], ref);
    }
  }
  
  orig.forEach(function (s0) {
    var chg = s0.getAttribute('data-asmn'); if (!chg || chg === '*' || !s0.__next) return;
    var set = {}; chg.split(' ').forEach(function (t) { if (t) set[t] = 1; });
    for (var s = s0; s; s = s.__next) {
      var toks = (s.textContent.replace(/\(계속\)/g, '').match(/\d[\d,.]*/g) || []);
      if (!toks.some(function (t) { return set[t]; })) { var pl = s.querySelector('.eb .asm'); if (pl) pl.parentNode.removeChild(pl); s.removeAttribute('data-asm'); }
    }
  });
  [].forEach.call(document.querySelectorAll('.slide'), function (s, i) { var p = s.querySelector('.pg'); if (p && !p.classList.contains('abs')) p.textContent = (i < 9 ? '0' : '') + (i + 1); else if (p) p.textContent = (i < 9 ? '0' : '') + (i + 1); });
}
var PAGINATE = '<script>window.__PAG=' + paginate1.toString() + ';<\/script>';


function fontFace() {
  var F = window.__FSPDF; if (!F) return '';
  return '@font-face{font-family:FS;font-weight:100 550;src:url(data:font/ttf;base64,' + F.M + ')}@font-face{font-family:FS;font-weight:551 900;src:url(data:font/ttf;base64,' + F.B + ')}';
}
var FIT = '<script>(document.fonts?document.fonts.ready:Promise.resolve()).then(function(){if(window.__PAG)window.__PAG();document.querySelectorAll(".ttl").forEach(function(t){var tr=t.parentNode.querySelector(".tr");' +
  'var lim=(tr?tr.getBoundingClientRect().left:t.parentNode.getBoundingClientRect().right-64)-t.getBoundingClientRect().left-16;' +
  't.style.width="auto";var f=24;while(t.scrollWidth>lim&&f>18){f-=0.5;t.style.fontSize=f+"pt";}t.style.width=lim+"px";});' +
  'document.querySelectorAll(".fit").forEach(function(e){var p=e.parentNode,lim=p.clientWidth-30,f=parseFloat(getComputedStyle(e).fontSize)*0.75;while(e.scrollWidth>lim&&f>14){f-=0.5;e.style.fontSize=f+"pt";}});' +
  'window.__IR2READY=1;});<\/script>';
function html(D, opt) {
  opt = prep(D, opt);
  var ctx = Ctx(D, opt), asmMode = 'keyword', asmErr = '';
  if (privOn(ctx) && opt.priv.alt) {   
    try {
      var ao = {}, k; for (k in opt) ao[k] = opt[k]; ao.priv = {}; for (k in opt.priv) if (k !== 'alt') ao.priv[k] = opt.priv[k];
      var AD = JSON.parse(JSON.stringify(opt.priv.alt)); AD.deckTitle = opt.deckTitle;
      var actx = Ctx(AD, ao); actx.fpOut = {};
      if (opt.strat === '5') deck5(actx); else if (opt.strat === '1') deck1(actx); else deck3(actx);
      ctx.asmRef = actx.fpOut; asmMode = 'alt';
    } catch (e) { asmErr = String(e && e.message || e); try { console.warn('2판 가정 표시 — 대조 덱 실패, 낱말 판정으로', e); } catch (x) {} }
  }
  if (opt.strat === '5') deck5(ctx); else if (opt.strat === '1') deck1(ctx); else deck3(ctx);
  if (privOn(ctx)) {   
    ctx.pages = ctx.pages.map(function (h) { return privHtml(h, opt.priv); });
    var all = privPlain(ctx.pages.join(' ')), left = (opt.priv.__names || []).filter(function (n) { return all.indexOf(n) >= 0; });
    window.__IR2PRIV = { on: true, left: left, asmPages: ctx.asmPages || 0, pages: ctx.pages.length, asmMode: asmMode, asmErr: asmErr, asmLog: ctx.asmLog || [] };
  } else window.__IR2PRIV = { on: false };
  var fonts = opt.localFonts ? '' : fontFace();
  var css = opt.localFonts ? CSS : CSS.replace(/@font-face\{[^}]*\}/g, '');
  return window.__IR2HTML = '<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>블루 IR 2판</title><style>' + fonts + '</style>' + css + '<style>' + EXTRA + '</style></head><body>' + ICONS + ctx.pages.join('') + (opt.strat === '1' ? PAGINATE : '') + FIT + '</body></html>';
}


function rgba(c) { var m = String(c || '').match(/rgba?\(([^)]+)\)/); if (!m) return null; var p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; }
function hex(o) { return [o.r, o.g, o.b].map(function (v) { var h = Math.round(v).toString(16).toUpperCase(); return h.length < 2 ? '0' + h : h; }).join(''); }
function gradMid(bg) { var cs = String(bg).match(/rgba?\([^)]+\)/g); if (!cs || !cs.length) return null; var a = rgba(cs[0]), b = rgba(cs[cs.length - 1]); return { r: (a.r + b.r) / 2, g: (a.g + b.g) / 2, b: (a.b + b.b) / 2, a: 1 }; }
function svgPng(svg, w, h, doc) {
  return new Promise(function (ok) {
    var c = svg.cloneNode(true), defs = doc.querySelector('svg defs');
    c.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); c.setAttribute('width', w); c.setAttribute('height', h);
    if (!c.getAttribute('viewBox')) { var vb = svg.viewBox && svg.viewBox.baseVal; if (vb && vb.width) c.setAttribute('viewBox', vb.x + ' ' + vb.y + ' ' + vb.width + ' ' + vb.height); }
    if (defs) c.insertBefore(defs.cloneNode(true), c.firstChild);
    var src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(c));
    var im = new Image(); im.onload = function () { var cv = document.createElement('canvas'), k = 3; cv.width = Math.max(1, Math.round(w * k)); cv.height = Math.max(1, Math.round(h * k));
      var g = cv.getContext('2d'); g.scale(k, k); g.drawImage(im, 0, 0, w, h); try { ok(cv.toDataURL('image/png')); } catch (e) { ok(null); } };
    im.onerror = function () { ok(null); }; im.src = src;
  });
}
function measure(win) {   
  var doc = win.document, out = [], jobs = [], GID = 0;
  
  var BASE = {};
  function base(fw, ff) { var k = (fw > 550 ? 'B' : 'M'); if (BASE[k] != null) return BASE[k];
    var sp = doc.createElement('span'); sp.style.cssText = 'position:absolute;left:0;top:0;font-family:' + ff + ';font-size:100px;font-weight:' + fw + ';line-height:normal;white-space:nowrap';
    sp.textContent = '가Ag'; var mk = doc.createElement('span'); mk.style.cssText = 'display:inline-block;width:1px;height:0;vertical-align:baseline'; sp.appendChild(mk); doc.body.appendChild(sp);
    var rg = doc.createRange(); rg.selectNodeContents(sp.firstChild); var rr = rg.getClientRects()[0], mr = mk.getBoundingClientRect();
    BASE[k] = (mr.bottom - rr.top) / 100; sp.remove(); return BASE[k]; }
  Array.prototype.forEach.call(doc.querySelectorAll('.slide'), function (sl) {
    var sr = sl.getBoundingClientRect(), scs = win.getComputedStyle(sl), items = [];
    var bg = rgba(scs.backgroundColor); if (scs.backgroundImage && scs.backgroundImage !== 'none') { var gm = gradMid(scs.backgroundImage); if (gm) bg = gm; }
    var X = function (v) { return v - sr.left; }, Y = function (v) { return v - sr.top; };
    var all = [sl].concat(Array.prototype.slice.call(sl.querySelectorAll('*')));
    all.forEach(function (el) {
      var tag = el.tagName.toLowerCase(), inSvg = el !== sl && el.closest('svg');
      if (inSvg && tag !== 'svg') return; if (tag === 'svg' && el.parentNode.closest && el.parentNode.closest('svg')) return;
      var cs = win.getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') return;
      var r = el.getBoundingClientRect(); if (r.width < 0.5 || r.height < 0.5) return;
      var op = 1; for (var q = el; q && q !== doc.body; q = q.parentElement) op *= parseFloat(win.getComputedStyle(q).opacity || 1);
      if (tag === 'svg') {
        if (el.classList.contains('vec')) {   
          var vb = el.viewBox.baseVal, kx = r.width / vb.width, ky = r.height / vb.height;
          Array.prototype.forEach.call(el.querySelectorAll('polyline,polygon'), function (p) {
            var pts = p.getAttribute('points').trim().split(/\s+/).map(function (s) { var a = s.split(','); return [X(r.left) + (+a[0] - vb.x) * kx, Y(r.top) + (+a[1] - vb.y) * ky]; });
            var col = p.getAttribute(p.tagName === 'polygon' ? 'fill' : 'stroke') || '#0B3AA8';
            items.push({ k: p.tagName === 'polygon' ? 'poly' : 'pline', pts: pts, c: col.replace('#', '').toUpperCase(), w: (+p.getAttribute('stroke-width') || 1) * kx, dash: !!p.getAttribute('stroke-dasharray'), op: op });
          });
          return;
        }
        var it = { k: 'img', x: X(r.left), y: Y(r.top), w: r.width, h: r.height, png: null }; items.push(it);
        jobs.push(svgPng(el, r.width, r.height, doc).then(function (p) { it.png = p; })); return;
      }
      if (el !== sl) {
        var f = rgba(cs.backgroundColor); if (cs.backgroundImage && cs.backgroundImage.indexOf('gradient') >= 0) { var g2 = gradMid(cs.backgroundImage); if (g2) f = g2; }
        var bw = parseFloat(cs.borderTopWidth) || 0, bc = rgba(cs.borderTopColor);
        var sameB = bw > 0 && cs.borderTopStyle !== 'none' && ['Right', 'Bottom', 'Left'].every(function (k) { return Math.abs((parseFloat(cs['border' + k + 'Width']) || 0) - bw) < 0.1 && cs['border' + k + 'Style'] === cs.borderTopStyle; });
        var rad = [cs.borderTopLeftRadius, cs.borderTopRightRadius, cs.borderBottomRightRadius, cs.borderBottomLeftRadius].map(function (v) { return parseFloat(v) || 0; });
        var hasF = f && f.a * op > 0.01, hasB = sameB && bc && bc.a > 0.01;
        if (hasF || hasB) {
          var sh = null; if (cs.boxShadow && cs.boxShadow !== 'none') { var sc = rgba(cs.boxShadow), nn = (cs.boxShadow.replace(/rgba?\([^)]+\)/, '').match(/-?[\d.]+px/g) || []).map(parseFloat); if (sc && nn.length >= 3) sh = { c: hex(sc), a: sc.a, dy: nn[1], blur: nn[2] }; }
          items.push({ k: 'box', x: X(r.left), y: Y(r.top), w: r.width, h: r.height, rad: rad, fill: hasF ? { c: hex(f), a: f.a * op } : null,
            line: hasB ? { c: hex(bc), a: bc.a * op, w: bw, dash: cs.borderTopStyle === 'dashed' } : null, sh: sh });
        }
        ['Top', 'Bottom', 'Left'].forEach(function (k) { if (sameB) return; var w = parseFloat(cs['border' + k + 'Width']) || 0, c = rgba(cs['border' + k + 'Color']);
          if (w < 0.3 || !c || c.a < 0.01 || cs['border' + k + 'Style'] === 'none') return;
          var L = { c: hex(c), a: c.a * op, w: w, dash: cs['border' + k + 'Style'] === 'dashed' };
          if (k === 'Top') items.push({ k: 'line', x1: X(r.left), y1: Y(r.top + w / 2), x2: X(r.right), y2: Y(r.top + w / 2), L: L });
          if (k === 'Bottom') items.push({ k: 'line', x1: X(r.left), y1: Y(r.bottom - w / 2), x2: X(r.right), y2: Y(r.bottom - w / 2), L: L });
          if (k === 'Left') items.push({ k: 'line', x1: X(r.left + w / 2), y1: Y(r.top), x2: X(r.left + w / 2), y2: Y(r.bottom), L: L }); });
      }
    });
    var tw = doc.createTreeWalker(sl, NodeFilter.SHOW_TEXT), c0;
    while ((c0 = tw.nextNode())) {
      (function (c0) {
        if (!c0.textContent.trim()) return; var el = c0.parentElement; if (el.closest('svg')) return;
        var cs = win.getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') return;
        var op = 1; for (var q = el; q && q !== doc.body; q = q.parentElement) op *= parseFloat(win.getComputedStyle(q).opacity || 1);
        var txt = c0.textContent, rg = doc.createRange(), cur = null, runs = [];
        for (var j = 0; j < txt.length; j++) { rg.setStart(c0, j); rg.setEnd(c0, j + 1); var rs = rg.getClientRects(); if (!rs.length) continue; var b = rs[0];
          if (cur && Math.abs(b.top - cur.t) < 3 && b.left >= cur.l - 1) { cur.s += txt.slice(cur.e, j + 1); cur.e = j + 1; if (!/\s/.test(txt[j])) cur.r = Math.max(cur.r, b.right); cur.b = Math.max(cur.b, b.bottom); }
          else { if (/\s/.test(txt[j])) continue; if (cur) runs.push(cur); cur = { s: txt[j], e: j + 1, l: b.left, t: b.top, r: b.right, b: b.bottom }; } }
        if (cur) runs.push(cur);
        var col = rgba(cs.color) || { r: 0, g: 0, b: 0, a: 1 }, fsz = parseFloat(cs.fontSize), fw = parseInt(cs.fontWeight, 10) || 400, bl = base(fw, cs.fontFamily), ls = cs.letterSpacing === 'normal' ? 0 : (parseFloat(cs.letterSpacing) || 0);
        var gid = ++GID;
        runs.forEach(function (u) { var s2 = u.s.replace(/\s+$/, '').replace(/\s+/g, ' '); if (!s2.trim()) return;
          items.push({ k: 'text', gid: gid, s: s2, x: X(u.l), y: Y(u.t), w: u.r - u.l, h: u.b - u.t, base: Y(u.t) + bl * fsz, fs: fsz, bold: fw > 550, c: hex(col), a: col.a * op, ls: ls }); });
      })(c0);
    }
    out.push({ bg: bg ? hex(bg) : 'FFFFFF', items: items, w: sr.width, h: sr.height });
  });
  return Promise.all(jobs).then(function () { return out; });
}


function toPdf(model, J, name) {
  var PT = 0.75, W = 960, H = 540;
  var doc = new J({ orientation: 'landscape', unit: 'pt', format: [W, H], compress: true });
  doc.addFileToVFS('FS-M.ttf', window.__FSPDF.M); doc.addFont('FS-M.ttf', 'FS', 'normal');
  doc.addFileToVFS('FS-B.ttf', window.__FSPDF.B); doc.addFont('FS-B.ttf', 'FS', 'bold');
  var GS = {}; function op(a) { a = Math.max(0, Math.min(1, Math.round(a * 100) / 100)); if (!GS[a]) GS[a] = new doc.GState({ opacity: a, 'stroke-opacity': a }); doc.setGState(GS[a]); }
  function rr(x, y, w, h, rad, style) {
    var r = Math.min(Math.max.apply(null, rad), w / 2, h / 2);
    if (r < 0.3) { doc.rect(x, y, w, h, style); return; }
    if (rad.every(function (v) { return Math.abs(v - rad[0]) < 0.3; })) { doc.roundedRect(x, y, w, h, r, r, style); return; }
    
    var k = 0.5523, c = rad.map(function (v) { return Math.min(v, w / 2, h / 2); });
    doc.lines([[w - c[0] - c[1], 0], [c[1] * k, 0, c[1], c[1] * (1 - k), c[1], c[1]], [0, h - c[1] - c[2]], [0, c[2] * k, -c[2] * (1 - k), c[2], -c[2], c[2]],
      [-(w - c[2] - c[3]), 0], [-c[3] * k, 0, -c[3], -c[3] * (1 - k), -c[3], -c[3]], [0, -(h - c[3] - c[0])], [0, -c[0] * k, c[0] * (1 - k), -c[0], c[0], -c[0]]], x + c[0], y, [1, 1], style, true);
  }
  model.forEach(function (pg, pi) {
    if (pi) doc.addPage([W, H], 'landscape');
    op(1); doc.setFillColor('#' + pg.bg); doc.rect(0, 0, W, H, 'F');
    pg.items.forEach(function (it) {
      if (it.k === 'img') { if (it.png) { op(1); doc.addImage(it.png, 'PNG', it.x * PT, it.y * PT, it.w * PT, it.h * PT, undefined, 'FAST'); } return; }
      if (it.k === 'box') {
        var x = it.x * PT, y = it.y * PT, w = it.w * PT, h = it.h * PT, rad = it.rad.map(function (v) { return v * PT; });
        if (it.sh && it.fill) { var steps = 4; for (var s = steps; s >= 1; s--) { op(Math.min(0.9, it.sh.a * 0.55)); doc.setFillColor('#' + it.sh.c); var g = it.sh.blur * PT * s / steps * 0.6;
          rr(x - g / 2, y + it.sh.dy * PT + g / 4, w + g, h + g / 2, rad.map(function (v) { return v + g / 2; }), 'F'); } }
        if (it.fill) { op(it.fill.a); doc.setFillColor('#' + it.fill.c); }
        if (it.line) { doc.setDrawColor('#' + it.line.c); doc.setLineWidth(it.line.w * PT); doc.setLineDashPattern(it.line.dash ? [3, 2] : [], 0); }
        if (it.fill && it.line) { op(it.fill.a); rr(x, y, w, h, rad, 'F'); op(it.line.a); var bwh = it.line.w * PT / 2; rr(x + bwh, y + bwh, w - 2 * bwh, h - 2 * bwh, rad.map(function (v) { return Math.max(0, v - bwh); }), 'S'); }
        else if (it.fill) rr(x, y, w, h, rad, 'F');
        else if (it.line) { op(it.line.a); var bh = it.line.w * PT / 2; rr(x + bh, y + bh, w - 2 * bh, h - 2 * bh, rad.map(function (v) { return Math.max(0, v - bh); }), 'S'); }
        doc.setLineDashPattern([], 0); return;
      }
      if (it.k === 'line') { op(it.L.a); doc.setDrawColor('#' + it.L.c); doc.setLineWidth(it.L.w * PT); doc.setLineDashPattern(it.L.dash ? [2, 1.6] : [], 0);
        doc.line(it.x1 * PT, it.y1 * PT, it.x2 * PT, it.y2 * PT); doc.setLineDashPattern([], 0); return; }
      if (it.k === 'pline') { op(it.op); doc.setDrawColor('#' + it.c); doc.setLineWidth(it.w * PT); doc.setLineDashPattern(it.dash ? [3, 2.2] : [], 0);
        for (var i = 1; i < it.pts.length; i++) doc.line(it.pts[i - 1][0] * PT, it.pts[i - 1][1] * PT, it.pts[i][0] * PT, it.pts[i][1] * PT);
        doc.setLineDashPattern([], 0); return; }
      if (it.k === 'poly') { op(it.op); doc.setFillColor('#' + it.c); var p0 = it.pts[0], rel = []; for (var m = 1; m < it.pts.length; m++) rel.push([(it.pts[m][0] - it.pts[m - 1][0]) * PT, (it.pts[m][1] - it.pts[m - 1][1]) * PT]);
        doc.lines(rel, p0[0] * PT, p0[1] * PT, [1, 1], 'F', true); return; }
      if (it.k === 'text') {
        if (it.done) return;
        
        var grp = [it]; for (var gi = pg.items.indexOf(it) + 1; gi < pg.items.length; gi++) { var nx = pg.items[gi]; if (nx.k !== 'text' || nx.gid !== it.gid) break; if (Math.abs(nx.x - it.x) > 1) break; grp.push(nx); }
        if (grp.length > 1) { grp.forEach(function (g) { g.done = true; }); op(it.a); doc.setFont('FS', it.bold ? 'bold' : 'normal'); doc.setFontSize(it.fs * PT); doc.setTextColor('#' + it.c);
          var lh = (grp[1].base - grp[0].base) / it.fs; doc.text(grp.map(function (g) { return g.s; }), it.x * PT, it.base * PT, { baseline: 'alphabetic', lineHeightFactor: lh }); return; }
        op(it.a); doc.setFont('FS', it.bold ? 'bold' : 'normal'); var fs = it.fs * PT; doc.setFontSize(fs); doc.setTextColor('#' + it.c);
        var nat = doc.getTextWidth(it.s), want = it.w * PT, n = Math.max(1, it.s.length - 1), cs = (want - nat) / n;
        if (Math.abs(cs) > fs * 0.12) cs = 0;
        doc.text(it.s, it.x * PT, it.base * PT, { charSpace: cs, baseline: 'alphabetic' });
      }
    });
  });
  op(1);
  doc.setProperties({ title: name || '', author: '', creator: '', subject: '', keywords: '' });
  return doc;
}

function toPptx(model, Lib, name) {
  var IN = function (px) { return Math.round(px / 96 * 10000) / 10000; };
  var p = new Lib(); p.layout = 'LAYOUT_WIDE'; p.title = name || ''; p.author = ''; p.company = ''; p.subject = '';
  var FB = 'Freesentation 7 Bold', FR = 'Freesentation 4 Regular';
  model.forEach(function (pg) {
    var s = p.addSlide(); s.background = { color: pg.bg };
    pg.items.forEach(function (it) {
      if (it.k === 'img') { if (it.png) s.addImage({ data: it.png, x: IN(it.x), y: IN(it.y), w: IN(it.w), h: IN(it.h) }); return; }
      if (it.k === 'box') {
        var r = Math.max.apply(null, it.rad), rmin = Math.min(it.w, it.h) / 2, round = r > 0.5, ell = round && Math.abs(it.w - it.h) < 1 && r >= rmin - 0.5;
        var o = { x: IN(it.x), y: IN(it.y), w: IN(it.w), h: IN(it.h) };
        o.fill = it.fill ? { color: it.fill.c, transparency: Math.round((1 - it.fill.a) * 100) } : { type: 'none' };
        o.line = it.line ? { color: it.line.c, width: Math.round(it.line.w * 0.75 * 100) / 100, transparency: Math.round((1 - it.line.a) * 100), dashType: it.line.dash ? 'dash' : 'solid' } : { color: 'FFFFFF', transparency: 100 };
        if (it.sh) o.shadow = { type: 'outer', angle: 90, blur: Math.round(it.sh.blur * 0.75), offset: Math.round(Math.abs(it.sh.dy) * 0.75 * 10) / 10, color: it.sh.c, opacity: Math.min(1, it.sh.a * 1.6) };
        if (ell) s.addShape('ellipse', o);
        else if (round) { o.rectRadius = IN(Math.min(r, rmin)); s.addShape('roundRect', o);
          if (it.fill && !it.line && it.rad.some(function (v) { return v < 0.5; })) { var rp = Math.min(r, rmin), F = { color: it.fill.c, transparency: o.fill.transparency }, L = { color: 'FFFFFF', transparency: 100 };
            [[0, it.x, it.y], [1, it.x + it.w - rp, it.y], [2, it.x + it.w - rp, it.y + it.h - rp], [3, it.x, it.y + it.h - rp]].forEach(function (q) { if (it.rad[q[0]] < 0.5) s.addShape('rect', { x: IN(q[1]), y: IN(q[2]), w: IN(rp), h: IN(rp), fill: F, line: L }); }); } }
        else s.addShape('rect', o);
        return;
      }
      if (it.k === 'line') { s.addShape('line', { x: IN(Math.min(it.x1, it.x2)), y: IN(Math.min(it.y1, it.y2)), w: IN(Math.abs(it.x2 - it.x1)), h: IN(Math.abs(it.y2 - it.y1)),
        line: { color: it.L.c, width: Math.round(it.L.w * 0.75 * 100) / 100, transparency: Math.round((1 - it.L.a) * 100), dashType: it.L.dash ? 'dash' : 'solid' } }); return; }
      if (it.k === 'pline') { for (var i = 1; i < it.pts.length; i++) { var a = it.pts[i - 1], b = it.pts[i];
        s.addShape('line', { x: IN(Math.min(a[0], b[0])), y: IN(Math.min(a[1], b[1])), w: IN(Math.abs(b[0] - a[0])), h: IN(Math.abs(b[1] - a[1])), flipV: (b[0] - a[0]) * (b[1] - a[1]) < 0,
          line: { color: it.c, width: Math.round(it.w * 0.75 * 100) / 100, dashType: it.dash ? 'dash' : 'solid' } }); } return; }
      if (it.k === 'poly') { var xs = it.pts.map(function (q) { return q[0]; }), ys = it.pts.map(function (q) { return q[1]; }), x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
        var w0 = Math.max(0.5, Math.max.apply(null, xs) - x0), h0 = Math.max(0.5, Math.max.apply(null, ys) - y0);
        s.addShape('custGeom', { x: IN(x0), y: IN(y0), w: IN(w0), h: IN(h0), fill: { color: it.c }, line: { color: it.c, width: 0.1 },
          points: it.pts.map(function (q, i) { return i ? { x: IN(q[0] - x0), y: IN(q[1] - y0) } : { x: IN(q[0] - x0), y: IN(q[1] - y0), moveTo: true }; }).concat([{ close: true }]) }); return; }
      if (it.k === 'text') { var fs = it.fs * 0.75, need = it.fs * 1.25, hh = it.h, y = it.y; if (hh < need) { y -= (need - hh) / 2; hh = need; }
        s.addText(it.s, { x: IN(it.x), y: IN(y), w: IN(it.w * 1.04 + Math.max(6, fs * 0.8)), h: IN(hh), fontFace: it.bold ? FB : FR, fontSize: Math.round(fs * 2) / 2, color: it.c,
          transparency: Math.round((1 - it.a) * 100), margin: 0, valign: 'middle', align: 'left', wrap: false, fit: 'none', charSpacing: it.ls ? Math.round(it.ls * 0.75 * 100) / 100 : undefined }); }
    });
  });
  return p;
}


function render(D, opt) {
  var h = html(D, opt);
  return new Promise(function (ok, ng) {
    var f = document.createElement('iframe'); f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1;
    f.style.cssText = 'position:fixed;left:-30000px;top:0;width:1280px;height:720px;border:0;opacity:0;pointer-events:none';
    var tm = setTimeout(function () { ng(new Error('2판 쪽 그리기 시간 초과')); }, 120000);
    f.onload = function () {
      var w = f.contentWindow;
      (w.document.fonts ? w.document.fonts.ready : Promise.resolve()).then(function () {
        (function wait(n) { if (w.__IR2READY || n > 100) { clearTimeout(tm); ok(f); } else setTimeout(function () { wait(n + 1); }, 50); })(0); });
    };
    f.srcdoc = h; document.body.appendChild(f);
  });
}
function check(win) {   
  var doc = win.document, out = [];
  Array.prototype.forEach.call(doc.querySelectorAll('.slide'), function (sl, si) {
    var sr = sl.getBoundingClientRect(), runs = [], w = doc.createTreeWalker(sl, NodeFilter.SHOW_TEXT), nd;
    while ((nd = w.nextNode())) { if (!nd.textContent.trim()) continue; var pe = nd.parentElement; if (pe.closest('svg')) continue;
      var rg = doc.createRange(); rg.selectNodeContents(nd); Array.prototype.forEach.call(rg.getClientRects(), function (b) { if (b.width < 1) return;
        runs.push({ t: nd.textContent.trim().slice(0, 30), l: b.left, t0: b.top, r: b.right, b: b.bottom });
        if (b.right > sr.right + 0.5 || b.bottom > sr.bottom + 0.5 || b.left < sr.left - 0.5) out.push({ p: si + 1, k: '쪽밖', t: nd.textContent.trim().slice(0, 30) });
        var c = pe.closest('.card,.nd,.strip'); if (c) { var cr = c.getBoundingClientRect(); if (b.right > cr.right + 1 || b.bottom > cr.bottom + 1 || b.left < cr.left - 1) out.push({ p: si + 1, k: '칸밖', t: nd.textContent.trim().slice(0, 30) }); }
        var bd = sl.querySelector('.body'); if (bd && bd.contains(pe)) { var br = bd.getBoundingClientRect(); if (b.bottom > br.bottom + 2) out.push({ p: si + 1, k: '본문아래', t: nd.textContent.trim().slice(0, 30) }); }
        var fs = parseFloat(win.getComputedStyle(pe).fontSize) * 0.75; if (fs < 11.99) out.push({ p: si + 1, k: '12pt미만', t: nd.textContent.trim().slice(0, 20) }); }); }
    for (var i = 0; i < runs.length; i++) for (var j = i + 1; j < runs.length; j++) { var a = runs[i], b = runs[j];
      if (Math.min(a.r, b.r) - Math.max(a.l, b.l) > 2 && Math.min(a.b, b.b) - Math.max(a.t0, b.t0) > 3) out.push({ p: si + 1, k: '글자겹침', t: a.t + ' ↔ ' + b.t }); }
  });
  return out;
}
function prep(D, opt) { opt = opt || {}; if (opt.deckTitle == null) { try { opt.deckTitle = window.Deck2 && Deck2.deckTitle ? Deck2.deckTitle() : ''; } catch (e) { opt.deckTitle = ''; } } D.deckTitle = opt.deckTitle; return opt; }
function fileName(D, opt) { return opt.name || (((D.meta && D.meta.name) || '브리핑') + '_블루IR'); }
function pdf(D, opt) {
  opt = prep(D, opt); var J = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF; if (!J) return Promise.reject(new Error('jsPDF 없음'));
  var f; return render(D, opt).then(function (fr) { f = fr; window.__IR2CHECK = check(f.contentWindow); return measure(f.contentWindow); })
    .then(function (m) { var doc = toPdf(m, J, fileName(D, opt)); try { f.remove(); } catch (e) {} if (opt.returnDoc) return doc; return doc.save(fileName(D, opt) + '.pdf'); });
}
function pptx(D, opt, Lib) {
  opt = prep(D, opt);
  var getLib = Lib ? Promise.resolve(Lib) : (window.Deck2 && Deck2.pptxLib ? Deck2.pptxLib() : typeof window.ensurePptx === 'function' ? window.ensurePptx() : (window.PptxGenJS ? Promise.resolve(window.PptxGenJS) : Promise.reject(new Error('PptxGenJS 없음'))));
  var f; return getLib.then(function (L) { Lib = L; return render(D, opt); }).then(function (fr) { f = fr; return measure(f.contentWindow); })
    .then(function (m) { var p = toPptx(m, Lib, fileName(D, opt)); try { f.remove(); } catch (e) {} if (opt.returnDoc) return p; return p.writeFile({ fileName: fileName(D, opt) + '.pptx' }); });
}
window.BlueIR2 = { html: html, pdf: pdf, pptx: pptx, render: render, measure: measure, check: check, toPdf: toPdf, toPptx: toPptx, STRAT: STRAT, RISK: RISK };
})();
