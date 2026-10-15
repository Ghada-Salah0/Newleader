# القائد الأخير – نسخة GitHub Pages

## الملفات
| الملف | الوظيفة | يترفع على |
|---|---|---|
| `index.html` | اللعبة (للمتدربين) | GitHub |
| `admin.html` | لوحة النتائج (للمنظّم) | GitHub |
| `config.js` | فيه رابط تسجيل النتائج (تعدّله مرة واحدة) | GitHub |
| `Code.gs` | الكود اللي بيحفظ النتائج في Google Sheet | Google Apps Script (مش GitHub) |

## الخطوات

### 1) جهّز مكان حفظ النتائج (Google Sheet)
1. افتح Google Sheets وأنشئ ملف جديد، سمّه مثلًا "نتائج القائد الأخير".
2. من القائمة: **الإضافات (Extensions) › Apps Script**.
3. امسح أي كود موجود والصق محتوى `Code.gs`.
4. غيّر `ADMIN_KEY` في أول سطر لكلمة سر خاصة بك (حروف إنجليزية وأرقام)، واحفظ.
5. اضغط **نشر (Deploy) › نشر جديد (New deployment)**، النوع **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. اضغط Deploy ووافق على الصلاحيات، وانسخ **Web app URL** (بينتهي بـ `/exec`).

### 2) حط الرابط في `config.js`
افتح `config.js` وبدّل `PASTE_YOUR_WEB_APP_URL_HERE` بالرابط اللي نسخته (بين علامتي الاقتباس).

### 3) ارفع الملفات على GitHub
في الريبو (الصفحة الرئيسية، مش جوه فولدر): **Add file › Upload files** وارفع
`index.html` و `admin.html` و `config.js`، وبعدها **Commit changes**.
احذف الملف القديم `leadership – نسخة المتدربين.html`.

### 4) فعّل GitHub Pages (لو مش شغّال)
**Settings › Pages › Build and deployment**: Source = Deploy from a branch، Branch = `main`، Folder = `/ (root)`.

### 5) الروابط
- المتدربين: `https://USERNAME.github.io/REPO/`
- المنظّم: `https://USERNAME.github.io/REPO/admin.html` (بتطلب كلمة السر `ADMIN_KEY`)

### 6) جرّب
العب اللعبة لحد النهاية، وتأكد إن صف جديد ظهر في الشيت (ورقة `Results`)، وإن `admin.html` بيعرضه.

## ملاحظات
- لو غيّرت `Code.gs` بعد النشر، لازم **Deploy › Manage deployments › Edit › New version**.
- كل مرة المتدرب يخلص اللعبة بتتسجّل نتيجة جديدة (لو لعب مرتين هتلاقي صفين بنفس الاسم).
- كلمة سر المنظّم موجودة في `Code.gs` فقط ومش في ملفات GitHub، ولوحة النتائج مش بتعرض أي بيانات من غيرها.
- أي حد معاه رابط التسجيل ممكن يبعت نتيجة، فمتنشرش رابط `/exec` للمتدربين، وهو موجود في `config.js` ضمن ملفات الموقع العامة.
