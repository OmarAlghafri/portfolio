# دليل المطور والذكاء الاصطناعي (AI & Developer Guide)
## مشروع المحفظة الشخصية (Portfolio Project)

هذا الملف مخصص لتوجيه المطورين أو أنظمة الذكاء الاصطناعي التي ستتعامل مع هذا المشروع مستقبلاً لضمان الحفاظ على استمرارية الميزات التقنية المتقدمة التي تم بناؤها.

---

## 1. التكوين التقني (Tech Stack)
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Internationalization (i18n):** `next-intl` (يدعم العربية والإنجليزية)
- **Components:** React (Functional Components)

---

## 2. ميزة "الهاتف التفاعلي التوسعي" (Interactive Phone Mockup)
هذه هي الميزة الأبرز في المشروع، وتوجد برمجتها الأساسية في ملف:
`components/FlutterProjectsSection.tsx`

### آلية العمل (Mechanism):
- يتم استخدام `layoutId` من مكتبة Framer Motion لإحداث انتقال سلس (Shared Element Transition) بين الهاتف الصغير في القائمة والهاتف الكبير الذي يظهر في منتصف الشاشة.
- عند التوسع، يتم تحميل `IFrame` يشير إلى مشروع Flutter Web حقيقي.

---

## 3. استضافة وإعداد تطبيقات Flutter (Embedded Flutter Apps)
التطبيقات موجودة كنسخ ويب (Web Builds) داخل المجلد المخصص للملفات العامة:
`public/apps/`

### القواعد الصارمة لتشغيل التطبيقات (Technical Constraints):
إذا أردت إضافة تطبيق جديد أو تحديث الحالي، يجب الالتزام بالتالي في ملف `index.html` الخاص بتطبيق Flutter:
1. **قاعدة المسار (Base Href):** يجب أن يكون `<base href="/apps/[folder_name]/">` لضمان تحميل الملفات بشكل صحيح.
2. **إصلاح السكرول (Scroll Fix):** يجب إضافة تنسيق CSS داخل `index.html` للتطبيق المستضاف:
   ```css
   body, html { overflow: auto !important; -webkit-overflow-scrolling: touch; }
   ```

---

## 4. خدعة المحاكاة التقنية (The Scale & DPI Trick)
تطبيقات Flutter Web تميل لإظهار الأزرار والخطوط بحجم ضخم ("Zommed-in") عند عرضها في `iframe` صغير. لحل هذه المشكلة، قمنا بابتكار التقنية التالية في `FlutterProjectsSection.tsx`:

- **المقياس المنطقي (Logical Scale):**
  - الإطار (`iframe`) مضبوط على عرض وارتفاع **125%**.
  - يتم تصغيره برمجياً عبر `transform: scale(0.8)`.
  - **النتيجة:** هذا يوهم تطبيق فلاتر بأنه يعمل على شاشة ذات دقة عالية (High DPI)، مما يجعل العناصر تظهر بحجم أصغر، أنيق، ومتناسق مع أبعاد الهاتف الحقيقية.

---

## 5. إدارة المحتوى والترجمة (Content & i18n)
- **الملفات:** `messages/en.json` و `messages/ar.json`.
- **ملاحظة للذكاء الاصطناعي:** عند إضافة مشروع جديد، يجب إضافة مفاتيحه في الملفين معاً لضمان عدم تعطل الواجهة عند تبديل اللغة.

---

## 6. نصائح للصيانة المستقبلية (Future Maintenance)
- **إضافة تطبيق جديد:**
  1. ضع نسخة الويب في `public/apps/new_app`.
  2. عدل `base href` في الـ `index.html` الخاص به.
  3. أضف مفتاح المشروع في مصفوفة `projects` داخل `FlutterProjectsSection.tsx`.
  4. أضف بيانات الأيقونة والألوان في `PROJECT_META`.

---
**تم إعداد هذا الدليل لضمان بقاء التجربة التفاعلية للمستخدم بأعلى جودة.**
