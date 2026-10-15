// Google Apps Script: يسجّل نتائج لعبة "القائد الأخير" في Google Sheet
const ADMIN_KEY = 'CHANGE-ME-123';   // غيّرها لكلمة سر خاصة بك (حروف إنجليزية وأرقام)
const SHEET = 'Results';
const HEAD = ['at','name','character','score','ending','independence','budget','energy','volunteer_trust','community_trust','readiness','reputation','mission_points'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET);
  if (!s) { s = ss.insertSheet(SHEET); s.appendRow(HEAD); }
  return s;
}
function clean_(v) {
  v = String(v == null ? '' : v).slice(0, 60);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents), r = d.res || [];
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    sheet_().appendRow([clean_(d.at), clean_(d.name), clean_(d.ch), Number(d.score) || 0, clean_(d.end), Number(d.ind) || 0,
      Number(r[0]) || 0, Number(r[1]) || 0, Number(r[2]) || 0, Number(r[3]) || 0, Number(r[4]) || 0, Number(r[5]) || 0,
      (d.pts || []).join('-')]);
    lock.releaseLock();
    return out_({ ok: true });
  } catch (err) { return out_({ ok: false }); }
}
function doGet(e) {
  if (!e || !e.parameter || e.parameter.key !== ADMIN_KEY) return out_({ ok: false, error: 'key' });
  const v = sheet_().getDataRange().getValues().slice(1);
  return out_({ ok: true, rows: v.map(x => ({ at: x[0], name: x[1], ch: x[2], score: x[3], end: x[4], ind: x[5],
    res: [x[6], x[7], x[8], x[9], x[10], x[11]] })) });
}
