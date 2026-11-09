// ---------- Translations ----------
// English text lives in index.html; this holds the Vietnamese version.
// To edit a translation, change the text next to its key.
const VI = {
    'header.subtitle': 'Định hướng Data Analyst | SQL · Power BI · Python',
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.skills': 'Kỹ năng',
    'nav.contact': 'Liên hệ',

    'about.title': 'Giới thiệu',
    'about.p1': 'Tôi là sinh viên mới tốt nghiệp, định hướng trở thành Data Analyst. Tôi thích biến những dữ liệu thực tế còn lộn xộn thành câu chuyện rõ ràng và những insight có thể hành động được.',
    'about.p2': 'Qua các dự án thực hành, tôi đã làm trọn quy trình phân tích: làm sạch và mô hình hóa dữ liệu bằng SQL và Python, xây dựng dashboard Power BI xoay quanh các câu hỏi kinh doanh, và xác định những KPI thực sự quan trọng. Các dự án của tôi trải dài từ phân tích thương mại điện tử, fintech cho đến một pipeline dữ liệu FMCG end-to-end.',
    'about.p3': 'Tôi rất thích khoảnh khắc "à há!" khi dữ liệu hé lộ điều gì đó mới mẻ và hữu ích, và tôi đang tìm kiếm vị trí Data Analyst đầu tiên để tiếp tục học hỏi và tạo ra giá trị thực tế.',

    'projects.title': 'Dự án của tôi',
    'p.vietdist': 'Pipeline dữ liệu bán hàng FMCG end-to-end: Python nạp 10 file Excel/CSV rời rạc vào PostgreSQL theo kiến trúc Medallion (Bronze → Silver → Gold), xử lý chỉ tiêu nhiều phiên bản và lịch sử SCD Type 2, rồi phục vụ dashboard Power BI 7 trang cho phòng Kinh doanh và Phân phối.',
    'p.superstore': 'Phân tích 51 nghìn dòng đơn hàng ở 147 quốc gia để đề xuất thị trường và sản phẩm nên ưu tiên. EU đóng góp tăng trưởng nhiều nhất với biên lợi nhuận 12,4%, trong khi EMEA tăng nhanh nhưng biên chỉ 7,5%. Dashboard Power BI 4 trang trên mô hình star schema.',
    'p.momo': 'Làm sao để dịch vụ nạp tiền điện thoại của MoMo tăng trưởng mà vẫn có lãi khi đối thủ cashback ngày càng sâu? Làm sạch 13,5 nghìn giao dịch và dựng dashboard Power BI quanh hai chỉ số North Star (lợi nhuận và doanh thu hằng tháng), chia theo nhà mạng và nhóm người dùng.',
    'p.fbads': 'Dùng Claude Code biến các file báo cáo Facebook Ads hằng ngày của một shop hoa thành dashboard HTML tương tác, cho biết mỗi ngày nên dồn hay cắt ngân sách ở đâu, xoay quanh chỉ số chi phí mỗi tin nhắn trên 17 chiến dịch và 103 nhóm quảng cáo.',
    'p.churn': 'EDA cùng machine learning có giám sát và không giám sát trên 5.630 khách hàng. Mô hình Random Forest sau tinh chỉnh đạt balanced accuracy 0,925 trên tập test, và KMeans chia khách hàng rời bỏ thành 4 nhóm kèm đề xuất giữ chân phù hợp.',
    'p.bigquery': '10 truy vấn SQL trên bộ dữ liệu mẫu Google Analytics 360: lưu lượng truy cập, tỷ lệ thoát và tỷ lệ chuyển đổi theo nguồn, doanh thu theo thiết bị, bán chéo và phễu từ xem đến mua sản phẩm.',
    'p.ewallet': 'Đánh giá chất lượng dữ liệu và trả lời các câu hỏi kinh doanh trên khoảng 1,3 triệu giao dịch ví điện tử bằng pandas: sản phẩm có doanh số cao nhất, kiểm tra team sở hữu, nguồn hoàn tiền và phân loại giao dịch.',
    'btn.github': 'Xem trên GitHub',
    'btn.live': 'Xem Dashboard',

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

function setLanguage(lang) {
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
    document.title = TITLES[lang];
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Start in the language the visitor picked last time (default: English).
let savedLang = 'en';
try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) { /* ignore */ }
if (savedLang === 'vi') setLanguage('vi');

// ---------- Smooth scrolling for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
