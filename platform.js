/* ==========================================================================
   🌸 SAFAE PREMIUM PLATFORM - CORE JAVASCRIPT (ZNOVA ARCHITECTURE V3)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // تعريف عناصر الحاويات الكبرى لـ الـ 3 واجهات
    const loginPage = document.getElementById("loginPage");
    const dashboardPage = document.getElementById("dashboardPage");
    const mainDashboard = document.getElementById("mainDashboard");
    
    // العناصر المساعدة
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('passwordField');
    const loginForm = document.getElementById('loginForm');
    const loadingOverlay = document.getElementById("loadingOverlay");
    const progressBar = document.getElementById("progressBar");
    const mountainBg = document.querySelector('.main-mountain-bg');
    const statusText = document.getElementById("loadingStatusText");

    // 🔒 [نظام التذكر الذكي] التحقق الفوري: هل سجلت صفاء دخولها مسبقاً؟
    if (localStorage.getItem("safae_authenticated") === "true") {
        // تخطي كلي وفوري لصفحة الباسورد وكارت التهنئة والدخول للأقسام مباشرة
        if (loginPage) loginPage.classList.remove("active");
        if (dashboardPage) dashboardPage.classList.remove("active");
        if (mountainBg) mountainBg.classList.add('blurred');
        
        // تشغيل واجهة الأقسام الرئيسية فوراً وبدون أي انتظار
        if (mainDashboard) {
            mainDashboard.style.setProperty('display', 'flex', 'important');
            setTimeout(() => { mainDashboard.classList.add('active'); }, 50);
        }
        return; // إنهاء التنفيذ لأن الجلسة محفوظة مسبقاً
    } else {
        // إذا كانت أول مرة: تفعيل واجهة اللوجين الأصلية لتكتب الباسورد
        if (loginPage) loginPage.classList.add("active");
    }

    // تفعيل إظهار وإخفاء كلمة المرور (العين)
    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // الانتقال الصارم المطوّر والمحمي (تم إبطاء العداد لتقرأ صفاء الرسائل براحتها)
    function triggerFirstTransition() {
        const userPassword = passwordField.value;
        const correctPassword = "2143"; // كلمة المرور الخاصة بك
        
        if (userPassword === correctPassword) {
            // 🌟 السحر البرمجي: حفظ جلسة الدخول في المتصفح للأبد
            localStorage.setItem("safae_authenticated", "true");

            // تفعيل واجهة التحميل (Loading Overlay)
            if (loadingOverlay) loadingOverlay.classList.add('active');
            
            let width = 0;
            const timer = setInterval(() => {
                width += 1; // 👈 تم تغييرها من 2 إلى 1 لإبطاء العداد وجعله ناعماً جداً
                
                // تغيير النصوص التفاعلية باللغة العربية داخل شريط التحميل (تظهر الآن بتوقيت مثالي)
                if (width === 30 && statusText) {
                    statusText.innerHTML = "✨ تفعيل الحفظ التلقائي دائم المدى...";
                }
                if (width === 65 && statusText) {
                    statusText.innerHTML = "🔒 لن تحتاجي لإدخال كلمة المرور مجدداً ❤️";
                }

                if (width >= 100) {
                    clearInterval(timer);
                    if (loadingOverlay) loadingOverlay.classList.remove('active');
                    if (mountainBg) mountainBg.classList.add('blurred');
                    
                    // إخفاء صفحة اللوجين تماماً وإظهار كارت التهنئة (Explore Now) لأول مرة
                    if (loginPage) loginPage.classList.remove("active");
                    setTimeout(() => {
                        if (dashboardPage) {
                            dashboardPage.style.setProperty('display', 'flex', 'important');
                            setTimeout(() => { dashboardPage.classList.add("active"); }, 50);
                        }
                    }, 200);
                }
                if (progressBar) progressBar.style.width = width + '%';
            }, 50); // 👈 تم تعديل الوقت إلى 50ms ليعطي انسيابية سينمائية مريحة للعين
        } else {
            alert("كلمة المرور خاطئة، حاولي مجدداً! ❌");
            passwordField.value = "";
        }
    }
    // ربط الحدث بالفورم بنجاح عند الضغط على زر EXPLORE
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => { 
            e.preventDefault(); 
            triggerFirstTransition(); 
        });
    }
});

/* ==========================================================================
   ⚙️ الدوال العامة للمنصة (الانتقالات، الأقسام، الألعاب، الـ VIP PASS)
   ========================================================================== */

// الانتقال من كارت التهنئة إلى داشبورد الأقسام الكبرى
function goToMainDashboard() {
    const dashboardPage = document.getElementById("dashboardPage");
    const mainDashboard = document.getElementById("mainDashboard");
    
    if (dashboardPage) dashboardPage.style.setProperty('display', 'none', 'important');
    if (mainDashboard) {
        mainDashboard.style.setProperty('display', 'flex', 'important');
        setTimeout(() => { mainDashboard.classList.add('active'); }, 50);
    }
}

// 🍿 فتح صفحة نيتفليكس بأنيميشن سينمائية ناعمة
function openNetflixZone() {
    const page = document.getElementById('netflixZonePage');
    if (!page) return;
    page.style.display = 'flex'; 
    setTimeout(() => { page.classList.add('active'); }, 10);
}

// 🔙 إغلاق صفحة نيتفليكس والعودة للـ Dashboard بسلاسة
function closeNetflixWithTransition() {
    const page = document.getElementById('netflixZonePage');
    if (!page) return;
    page.classList.remove('active');
    setTimeout(() => { page.style.display = 'none'; }, 600);
}

// 👑 فتح كارت الـ VIP بأنيميشن Fade ناعمة جداً

function openVipWithTransition() {

    const vipOverlay = document.getElementById('netflixVipCard');

    if (!vipOverlay) return;

    vipOverlay.style.display = 'flex';

    setTimeout(() => { vipOverlay.classList.add('active'); }, 10);

}



// ✖️ إغلاق كارت الـ VIP بسلاسة

function closeVipWithTransition() {

    const vipOverlay = document.getElementById('netflixVipCard');

    if (!vipOverlay) return;

    vipOverlay.classList.remove('active');

    setTimeout(() => { vipOverlay.style.display = 'none'; }, 500);

} 



// فتح منطقة الألعاب الكبرى (الـ Fullscreen)
function openGamesZone() {
    const zone = document.getElementById('gamesZonePage');
    if (!zone) return;
    zone.style.display = 'flex'; 
    setTimeout(() => { zone.classList.add('active'); }, 10);
}

// إغلاق منطقة الألعاب
function closeGamesZone() {
    const zone = document.getElementById('gamesZonePage');
    if (!zone) return;
    zone.classList.remove('active');
    setTimeout(() => { zone.style.display = 'none'; }, 600); 
}

// 🚀 فتح لعبة الشطرنج بأمان
function openChessGame() {
    if (document.getElementById('gamesMenuContainer')) document.getElementById('gamesMenuContainer').style.display = 'none';
    if (document.getElementById('gamesZoneHeader')) document.getElementById('gamesZoneHeader').style.display = 'none';
    if (document.getElementById('mainGamesBackBtn')) document.getElementById('mainGamesBackBtn').style.display = 'none';
    if (document.getElementById('sudokuGameWrapper')) document.getElementById('sudokuGameWrapper').style.display = 'none';

    const chessWrap = document.getElementById('chessGameWrapper');
    if (chessWrap) chessWrap.style.setProperty('display', 'flex', 'important');

    const mainFrame = document.querySelector('.games-main-frame');
    if (mainFrame) {
        mainFrame.scrollTop = 0;
        mainFrame.style.setProperty('overflow-y', 'auto', 'important');
    }
}

// 🔙 الرجوع من الشطرنج لقائمة الألعاب
function goBackFromChess() {
    const chessWrap = document.getElementById('chessGameWrapper');
    if (chessWrap) chessWrap.style.setProperty('display', 'none', 'important');

    if (document.getElementById('gamesMenuContainer')) document.getElementById('gamesMenuContainer').style.display = 'grid';
    if (document.getElementById('gamesZoneHeader')) document.getElementById('gamesZoneHeader').style.display = 'block';
    if (document.getElementById('mainGamesBackBtn')) document.getElementById('mainGamesBackBtn').style.display = 'flex';

    const mainFrame = document.querySelector('.games-main-frame');
    if (mainFrame) mainFrame.scrollTop = 0;
}

// 🔢 فتح لعبة السودوكو بأمان
function openSudokuGame() {
    if (document.getElementById('gamesMenuContainer')) document.getElementById('gamesMenuContainer').style.display = 'none';
    if (document.getElementById('gamesZoneHeader')) document.getElementById('gamesZoneHeader').style.display = 'none';
    if (document.getElementById('mainGamesBackBtn')) document.getElementById('mainGamesBackBtn').style.display = 'none';
    if (document.getElementById('chessGameWrapper')) document.getElementById('chessGameWrapper').style.display = 'none';

    if (document.getElementById('sudokuGameWrapper')) document.getElementById('sudokuGameWrapper').style.display = 'block';
    if (document.getElementById('splashScreen')) document.getElementById('splashScreen').classList.add('active');
    if (document.getElementById('gameScreen')) document.getElementById('gameScreen').classList.remove('active');

    const mainFrame = document.querySelector('.games-main-frame');
    if (mainFrame) mainFrame.scrollTop = 0;
}

// 🔙 الرجوع من السودوكو لقائمة الألعاب
function goBackFromSudoku() {
    if (document.getElementById('sudokuGameWrapper')) document.getElementById('sudokuGameWrapper').style.display = 'none';

    if (document.getElementById('gamesMenuContainer')) document.getElementById('gamesMenuContainer').style.display = 'grid';
    if (document.getElementById('gamesZoneHeader')) document.getElementById('gamesZoneHeader').style.display = 'block';
    if (document.getElementById('mainGamesBackBtn')) document.getElementById('mainGamesBackBtn').style.display = 'flex';

    const mainFrame = document.querySelector('.games-main-frame');
    if (mainFrame) mainFrame.scrollTop = 0;
}

// دالة احتياطية لمنع أي تعارض بالفورم الرئيسي
function handleLogin(event) {
    if(event) event.preventDefault();
}

// ==========================================================================
// 📋 دالة نسخ النصوص الاحترافية (ZNOVA Premium Copy Function)
// ==========================================================================
function copyText(inputId, buttonElement) {
    // 1. تحديد حقل الإدخال المناسب بناءً على الـ ID (Email أو Password)
    const inputField = document.getElementById(inputId);
    
    if (!inputField) return;

    // 2. استخدام الـ API الحديث للنسخ (Navigator Clipboard)
    navigator.clipboard.writeText(inputField.value)
        .then(() => {
            // 3. تغيير شكل الأيقونة ديريكتومون لعلامة الصح (Check) كدليل على النجاح
            const icon = buttonElement.querySelector('i');
            const originalClass = icon.className; // حفظ الأيقونة القديمة (fa-copy)
            
            icon.className = 'fas fa-check'; // تحويلها لـ Check
            buttonElement.style.background = '#d4af37'; // إضاءة الزر بالذهبي الفاخر
            buttonElement.style.color = '#141414';
            
            // 4. إرجاع الأيقونة لحالتها الطبيعية بعد ثانية ونصف (1.5s) تلقائياً
            setTimeout(() => {
                icon.className = originalClass;
                buttonElement.style.background = ''; // إرجاع الستايل الأصلي من الـ CSS
                buttonElement.style.color = '';
            }, 1500);
        })
        .catch(err => {
            console.error('خطأ أثناء النسخ: ', err);
            
            // حل احتياطي (Fallback) في حالة المتصفحات القديمة جداً
            inputField.select();
            document.execCommand('copy');
        });
}