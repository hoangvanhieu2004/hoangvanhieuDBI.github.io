// ---------- Translations ----------
// English text lives in index.html; this holds the Vietnamese version.
// To edit a translation, change the text next to its key.
const VI = {
    'header.subtitle': 'Data Analyst | SQL · Power BI · Python',
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.skills': 'Kỹ năng',
    'nav.contact': 'Liên hệ',

    'about.title': 'Giới thiệu',
    'about.p1': 'Tôi là Data Analyst mới tốt nghiệp. Tôi thích biến những dữ liệu thực tế còn lộn xộn thành câu chuyện rõ ràng và những insight có thể hành động được.',
    'about.p2': 'Qua các dự án thực hành, tôi đã làm trọn quy trình phân tích: làm sạch và mô hình hóa dữ liệu bằng SQL và Python, xây dựng dashboard Power BI xoay quanh các câu hỏi kinh doanh, và xác định những KPI thực sự quan trọng. Các dự án của tôi trải dài từ phân tích thương mại điện tử, fintech cho đến một pipeline dữ liệu FMCG end-to-end.',
    'about.p3': 'Tôi thích tìm ra những điều mới mẻ, hữu ích từ dữ liệu, và đang tìm kiếm vị trí Data Analyst đầu tiên để tiếp tục học hỏi và tạo ra giá trị thực tế.',

    'projects.title': 'Dự án của tôi',
    'p.vietdist': 'Pipeline dữ liệu bán hàng FMCG end-to-end: Python nạp 10 file Excel/CSV từ Google Drive vào PostgreSQL theo kiến trúc Medallion (Bronze → Silver → Gold), có chỉ tiêu nhiều phiên bản, lịch sử SCD Type 2 và data quality test bằng SQL, rồi phục vụ semantic model Power BI dùng chung với 6 trang báo cáo và Row-Level Security.',
    'p.superstore': 'Phân tích 51 nghìn dòng đơn hàng ở 147 quốc gia để đề xuất thị trường và sản phẩm nên ưu tiên. EU đóng góp tăng trưởng nhiều nhất với biên lợi nhuận 12,4%, trong khi EMEA tăng nhanh nhưng biên chỉ 7,5%. Dashboard Power BI 4 trang trên mô hình star schema.',
    'p.momo': 'Làm sao để dịch vụ nạp tiền điện thoại của MoMo tăng trưởng mà vẫn có lãi khi đối thủ cashback ngày càng sâu? Làm sạch 13,5 nghìn giao dịch và dựng dashboard Power BI quanh hai chỉ số North Star (lợi nhuận và doanh thu hằng tháng), chia theo nhà mạng và nhóm người dùng.',
    'p.fbads': 'Dùng Claude Code biến các file báo cáo Facebook Ads hằng ngày của một shop hoa thành dashboard HTML tương tác, cho biết mỗi ngày nên dồn hay cắt ngân sách ở đâu, xoay quanh chỉ số chi phí mỗi tin nhắn trên 17 chiến dịch và 103 nhóm quảng cáo.',
    'p.churn': 'EDA cùng machine learning có giám sát và không giám sát trên 5.630 khách hàng. Mô hình Random Forest sau tinh chỉnh đạt balanced accuracy 0,925 trên tập test, và KMeans chia khách hàng rời bỏ thành 4 nhóm kèm đề xuất giữ chân phù hợp.',
    'p.bigquery': '10 truy vấn SQL trên bộ dữ liệu mẫu Google Analytics 360: lưu lượng truy cập, tỷ lệ thoát và tỷ lệ chuyển đổi theo nguồn, doanh thu theo thiết bị, bán chéo và phễu từ xem đến mua sản phẩm.',
    'p.ewallet': 'Đánh giá chất lượng dữ liệu và trả lời các câu hỏi kinh doanh trên khoảng 1,3 triệu giao dịch ví điện tử bằng pandas: sản phẩm có doanh số cao nhất, kiểm tra team sở hữu, nguồn hoàn tiền và phân loại giao dịch.',
    'btn.github': 'Xem trên GitHub',
    'btn.live': 'Xem Dashboard',
    'btn.view': 'Xem Dashboard',

    'skills.title': 'Kỹ năng chuyên môn',
    'skills.c1': 'Phân tích & Trực quan hóa',
    'skills.c2': 'Lập trình & Pipeline',
    'skills.c3': 'Phân tích kinh doanh',
    'skills.dashboard': 'Thiết kế Dashboard',
    'skills.etl': 'ETL / Pipeline dữ liệu',
    'skills.model': 'Mô hình hóa dữ liệu (Star Schema)',
    'skills.kpi': 'Xây dựng KPI',
    'skills.eda': 'Phân tích thống kê / EDA',
    'skills.ai': 'Phân tích dữ liệu với AI (Claude Code)',

    'contact.title': 'Gửi tin nhắn cho tôi',
    'contact.intro': 'Bạn muốn hợp tác hoặc có câu hỏi về các dự án của tôi? Rất mong nhận được tin nhắn từ bạn!',
    'contact.name': 'Họ tên',
    'contact.namePh': 'Họ tên của bạn',
    'contact.emailPh': 'Email của bạn',
    'contact.subject': 'Tiêu đề',
    'contact.subjectPh': 'Tiêu đề',
    'contact.message': 'Nội dung',
    'contact.messagePh': 'Nội dung tin nhắn',
    'contact.send': 'Gửi tin nhắn',

    'footer.rights': 'Bảo lưu mọi quyền.'
};

const TITLES = {
    en: 'Hoàng Văn Hiếu | Data Analyst Portfolio',
    vi: 'Hoàng Văn Hiếu | Portfolio Data Analyst'
};

// Remember the original English text so we can switch back.
const EN = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
    EN[el.dataset.i18n] = el.textContent;
});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    EN[el.dataset.i18nPlaceholder] = el.placeholder;
});

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const dict = lang === 'vi' ? VI : EN;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const text = dict[el.dataset.i18n];
        if (text !== undefined) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const text = dict[el.dataset.i18nPlaceholder];
        if (text !== undefined) el.placeholder = text;
    });
    document.documentElement.lang = lang;
    const cv = document.getElementById('cv-link');
    if (cv) {
        cv.href = lang === 'vi' ? 'assets/CV_VI.pdf?v=2' : 'assets/CV.pdf?v=2';
        cv.title = lang === 'vi' ? 'Tải CV (tiếng Việt)' : 'Download CV (English)';
    }
    document.title = TITLES[lang];
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
    if (typeof refreshViewer === 'function') refreshViewer();
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ---------- Smooth scrolling for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#') || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ---------- Dashboard viewer (page-by-page screenshots) ----------
const GALLERIES = {
    vietdist: {
        title: 'VietDist Sales Performance & Distribution Analytics',
        pages: [
            ['Sales Overview', 'Tổng quan kinh doanh'],
            ['Sales Targets', 'Chỉ tiêu'],
            ['Customers & Products', 'Khách hàng & Sản phẩm'],
            ['Sales Reps', 'Nhân viên'],
            ['Distribution Overview', 'Tổng quan phân phối'],
            ['Distributor Performance', 'Hiệu suất phân phối']
        ]
    },
    superstore: {
        title: 'Superstore Market Expansion',
        pages: [
            ['Overview', 'Tổng quan'],
            ['Markets', 'Thị trường'],
            ['Products', 'Sản phẩm'],
            ['Recommendations & Insights', 'Đề xuất & Insight']
        ]
    },
    momo: {
        title: 'MoMo Topup Performance 2020',
        pages: [
            ['Overview', 'Tổng quan'],
            ['Carriers', 'Nhà mạng'],
            ['User Groups', 'Nhóm người dùng'],
            ['Recommendations & Insights', 'Đề xuất & Insight']
        ]
    }
};

const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerLink = document.getElementById('viewer-link');
const viewerTitle = document.getElementById('viewer-title');
const viewerCaption = document.getElementById('viewer-caption');
const viewerDots = document.getElementById('viewer-dots');
let gKey = null, gIndex = 0, lastFocus = null;

function refreshViewer() {
    if (!gKey) return;
    const g = GALLERIES[gKey];
    const n = g.pages.length;
    const name = g.pages[gIndex][currentLang === 'vi' ? 1 : 0];
    const src = `assets/images/dashboards/${gKey}/page-${gIndex + 1}.jpg`;
    viewerTitle.textContent = g.title;
    viewerCaption.textContent = (currentLang === 'vi' ? 'Trang ' : 'Page ') + `${gIndex + 1}/${n}: ${name}`;
    viewerImg.src = src;
    viewerImg.alt = `${g.title} - ${name}`;
    viewerLink.href = src;
    viewerLink.title = currentLang === 'vi' ? 'Mở ảnh kích thước đầy đủ' : 'Open full-size image';
    viewerDots.innerHTML = '';
    g.pages.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = i === gIndex ? 'active' : '';
        dot.setAttribute('aria-label', `${i + 1}`);
        dot.addEventListener('click', () => { gIndex = i; refreshViewer(); });
        viewerDots.appendChild(dot);
    });
    // Preload the next page for snappy navigation.
    new Image().src = `assets/images/dashboards/${gKey}/page-${(gIndex + 1) % n + 1}.jpg`;
}

function openViewer(key) {
    gKey = key; gIndex = 0; lastFocus = document.activeElement;
    refreshViewer();
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
    viewer.querySelector('.viewer-close').focus();
}

function closeViewer() {
    viewer.hidden = true;
    gKey = null;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
}

function step(delta) {
    const n = GALLERIES[gKey].pages.length;
    gIndex = (gIndex + delta + n) % n;
    refreshViewer();
}

document.querySelectorAll('[data-gallery]').forEach(btn => {
    btn.addEventListener('click', () => openViewer(btn.dataset.gallery));
});
viewer.querySelector('.viewer-close').addEventListener('click', closeViewer);
viewer.querySelector('.viewer-prev').addEventListener('click', () => step(-1));
viewer.querySelector('.viewer-next').addEventListener('click', () => step(1));
viewer.addEventListener('click', e => { if (e.target === viewer) closeViewer(); });
document.addEventListener('keydown', e => {
    if (viewer.hidden) return;
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
});
// Swipe on phones
let touchX = null;
viewerImg.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
viewerImg.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchX = null;
});

// ---------- Restore saved language ----------
// Must run LAST: setLanguage() calls refreshViewer(), which reads gKey and the
// viewer elements declared above. Running it earlier throws
// "Cannot access 'gKey' before initialization" and stops the whole script,
// so the "View Dashboard" buttons never get their click handlers.
let savedLang = 'en';
try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) { /* ignore */ }
if (savedLang === 'vi') setLanguage('vi');
