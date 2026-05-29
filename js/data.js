/* ============================================================
   DATA.JS — Dữ liệu sự kiện cho Lịch Vũ Trụ
   Tất cả sự kiện được tổ chức theo 3 giai đoạn
   ============================================================ */

const TIMELINE_DATA = {

    // ========================================
    // PHASE 1: Tháng 1–8 (Horizontal Scroll lúc trước -> chuyển dọc)
    // ========================================
    phase1: [
        {
            month: 1, day: 1,
            title: "Vụ Nổ Lớn (Big Bang)",
            realYear: "13.8 tỷ năm trước",
            description: "Vũ trụ ra đời, dựa trên phóng xạ nền vũ trụ.",
            icon: "💥",
            color: "#ff6b35",
            image: "assets/images/big_bang.png"
        },
        {
            month: 1, day: 14,
            title: "Tia chớp gamma",
            realYear: "13.1 tỷ năm trước",
            description: "Tia chớp gamma sớm nhất được biết tới trong vũ trụ.",
            icon: "⚡",
            color: "#fbbf24",
            image: "assets/images/gamma_ray_burst.png"
        },
        {
            month: 1, day: 22,
            title: "Thiên hà đầu tiên",
            realYear: "12.85 tỷ năm trước",
            description: "Thiên hà đầu tiên hình thành.",
            icon: "🌌",
            color: "#60a5fa",
            image: "assets/images/first_galaxies.png"
        },
        {
            month: 3, day: 16,
            title: "Dải Ngân Hà hình thành",
            realYear: "11 tỷ năm trước",
            description: "Thiên hà quê nhà của chúng ta — Dải Ngân Hà — bắt đầu thành hình.",
            icon: "🌀",
            color: "#a78bfa",
            image: "assets/images/milky_way.png"
        },
        {
            month: 5, day: 12,
            title: "Đĩa Ngân Hà hình thành",
            realYear: "8.8 tỷ năm trước",
            description: "Đĩa của Dải Ngân Hà hình thành.",
            icon: "💫",
            color: "#818cf8",
            image: "assets/images/milky_way_disk.png"
        }
    ],

    // ========================================
    // PHASE 2: Tháng 9–12 (Vertical Z-shape)
    // ========================================
    phase2: [
        {
            month: 9, day: 2,
            title: "Hệ Mặt Trời hình thành",
            realYear: "4.57 tỷ năm trước",
            description: "Một đám mây bụi và khí sụp đổ, sinh ra Mặt Trời và các hành tinh.",
            icon: "☀️",
            side: "left",
            image: "assets/images/solar_system.png"
        },
        {
            month: 9, day: 6,
            title: "Viên đá cổ nhất",
            realYear: "4.4 tỷ năm trước",
            description: "Viên đá cổ nhất được tìm thấy trên Trái Đất.",
            icon: "🪨",
            side: "right",
            image: "assets/images/oldest_rock.png"
        },
        {
            month: 9, day: 14,
            title: "Tàn dư của sự sống",
            realYear: "4.1 tỷ năm trước",
            description: "Tàn dư của sự sống được tìm thấy trong hòn đá cổ tại Tây Úc.",
            icon: "🦠",
            side: "left",
            color: "#60a5fa"
        },
        {
            month: 9, day: 21,
            title: "Sự sống đầu tiên",
            realYear: "3.8 tỷ năm trước",
            description: "Dạng sống đầu tiên (Sinh vật nhân sơ).",
            icon: "🧬",
            side: "right",
            color: "#10b981",
            image: "assets/images/first_life.png"
        },
        {
            month: 9, day: 30,
            title: "Quang hợp",
            realYear: "3.4 tỷ năm trước",
            description: "Sinh vật học cách biến ánh sáng thành năng lượng.",
            icon: "🌿",
            side: "left",
            color: "#34d399",
            image: "assets/images/photosynthesis.png"
        },
        {
            month: 10, day: 29,
            title: "Oxy trong khí quyển",
            realYear: "2.4 tỷ năm trước",
            description: "Oxy bắt đầu xuất hiện trong bầu khí quyển Trái Đất.",
            icon: "💨",
            side: "right",
            color: "#60a5fa",
            image: "assets/images/atmosphere_oxygen.png"
        },
        {
            month: 11, day: 9,
            title: "Tế bào phức tạp",
            realYear: "2 tỷ năm trước",
            description: "Các tế bào phức tạp (Sinh vật nhân thực) xuất hiện.",
            icon: "🦠",
            side: "left",
            color: "#a78bfa",
            image: "assets/images/complex_cell.png"
        },
        {
            month: 12, day: 5,
            title: "Sinh vật đa bào",
            realYear: "800 triệu năm trước",
            description: "Dạng sống đa bào đầu tiên.",
            icon: "🐚",
            side: "right",
            color: "#ec4899"
        },
        {
            month: 12, day: 7,
            title: "Động vật đơn giản",
            realYear: "670 triệu năm trước",
            description: "Sự xuất hiện của các động vật đơn giản.",
            icon: "🪱",
            side: "left"
        },
        {
            month: 12, day: 14,
            title: "Động vật Chân khớp",
            realYear: "550 triệu năm trước",
            description: "Tổ tiên của các loài côn trùng, nhện.",
            icon: "🕷️",
            side: "right",
            image: "assets/images/trilobites.png"
        },
        {
            month: 12, day: 17,
            title: "Cá và cá lưỡng cư",
            realYear: "500 triệu năm trước",
            description: "Cá và các loài cá lưỡng cư đầu tiên xuất hiện.",
            icon: "🐟",
            side: "left"
        },
        {
            month: 12, day: 20,
            title: "Thực vật trên cạn",
            realYear: "450 triệu năm trước",
            description: "Thực vật bắt đầu chinh phục đất liền.",
            icon: "🌱",
            side: "right",
            color: "#10b981"
        },
        {
            month: 12, day: 21,
            title: "Côn trùng và hạt",
            realYear: "400 triệu năm trước",
            description: "Sự xuất hiện của côn trùng và các loại hạt.",
            icon: "🪲",
            side: "left"
        },
        {
            month: 12, day: 22,
            title: "Động vật lưỡng cư",
            realYear: "360 triệu năm trước",
            description: "Động vật lưỡng cư bắt đầu bò lên bờ.",
            icon: "🐸",
            side: "right",
            color: "#f59e0b"
        },
        {
            month: 12, day: 23,
            title: "Động vật bò sát",
            realYear: "300 triệu năm trước",
            description: "Sự xuất hiện của động vật bò sát.",
            icon: "🦎",
            side: "left"
        },
        {
            month: 12, day: 24,
            title: "Tuyệt chủng kỷ Permi-Trias",
            realYear: "250 triệu năm trước",
            description: "90% các loài tuyệt chủng.",
            icon: "🌋",
            side: "right",
            color: "#ef4444",
            image: "assets/images/permian_extinction.png"
        },
        {
            month: 12, day: 25,
            title: "Khủng long xuất hiện",
            realYear: "230 triệu năm trước",
            description: "Khủng long bắt đầu thống trị Trái Đất.",
            icon: "🦕",
            side: "left",
            image: "assets/images/dinosaurs.png"
        },
        {
            month: 12, day: 26,
            title: "Động vật có vú",
            realYear: "200 triệu năm trước",
            description: "Sự xuất hiện của những động vật có vú đầu tiên.",
            icon: "🐁",
            side: "right",
            image: "assets/images/first_mammals.png"
        },
        {
            month: 12, day: 27,
            title: "Chim",
            realYear: "150 triệu năm trước",
            description: "Các loài chim đầu tiên xuất hiện.",
            icon: "🦅",
            side: "left"
        },
        {
            month: 12, day: 28,
            title: "Hoa",
            realYear: "130 triệu năm trước",
            description: "Thực vật có hoa bắt đầu tô điểm cho Trái Đất.",
            icon: "🌸",
            side: "right",
            color: "#ec4899"
        },
        {
            month: 12, day: 30,
            title: "Khủng long tuyệt chủng",
            realYear: "65 triệu năm trước",
            description: "Sự kiện tuyệt chủng kỷ Creta-Paleogen, các loài khủng long khác chim tuyệt chủng. Sự xuất hiện của Bộ Linh trưởng.",
            icon: "☄️",
            side: "left",
            image: "assets/images/dinosaur_extinction.png"
        }
    ],

    // ========================================
    // PHASE 3: Ngày 31 Tháng 12 (Clock Zoom)
    // ========================================
    phase3: [
        {
            time: "06:05:00",
            seconds: 21900,
            title: "Liên họ Người",
            realYear: "15 triệu năm trước",
            description: "Tổ tiên chung phân nhánh tạo ra liên họ Người.",
            icon: "🦧",
            color: "#f59e0b"
        },
        {
            time: "14:24:00",
            seconds: 51840,
            title: "Họ Người",
            realYear: "12.3 triệu năm trước",
            description: "Sự xuất hiện của họ Người (Hominidae).",
            icon: "🚶",
            color: "#ff6b35"
        },
        {
            time: "22:24:00",
            seconds: 80640,
            title: "Người nguyên thủy & công cụ đá",
            realYear: "2.5 triệu năm trước",
            description: "Người nguyên thủy bắt đầu sử dụng công cụ bằng đá.",
            icon: "🪨",
            color: "#60a5fa"
        },
        {
            time: "23:44:00",
            seconds: 85440,
            title: "Thuần hóa lửa",
            realYear: "400,000 năm trước",
            description: "Con người khám phá ra và biết cách kiểm soát lửa.",
            icon: "🔥",
            color: "#ef4444",
            image: "assets/images/control_of_fire.png"
        },
        {
            time: "23:52:00",
            seconds: 85920,
            title: "Người hiện đại",
            realYear: "200,000 năm trước",
            description: "Người hiện đại về giải phẫu học xuất hiện.",
            icon: "🧠",
            color: "#a78bfa",
            image: "assets/images/modern_humans.png"
        },
        {
            time: "23:55:00",
            seconds: 86100,
            title: "Kỷ Băng Hà",
            realYear: "110,000 năm trước",
            description: "Bắt đầu thời kỳ băng hà gần đây nhất.",
            icon: "❄️",
            color: "#93c5fd",
            image: "assets/images/ice_age.png"
        },
        {
            time: "23:58:00",
            seconds: 86280,
            title: "Tranh vẽ hang đá",
            realYear: "35,000 năm trước",
            description: "Các bức tranh và chạm trổ trên đá bắt đầu xuất hiện.",
            icon: "🎨",
            color: "#ec4899",
            image: "assets/images/cave_paintings.png"
        },
        {
            time: "23:59:32",
            seconds: 86372,
            title: "Nông nghiệp",
            realYear: "12,000 năm trước",
            description: "Nông nghiệp ra đời, thay đổi hoàn toàn cách sống của con người.",
            icon: "🌾",
            color: "#10b981",
            image: "assets/images/agriculture.png"
        },
        {
            time: "23:59:33",
            seconds: 86373,
            title: "Kết thúc Kỷ Băng Hà",
            realYear: "12,000 năm trước",
            description: "Kết thúc Kỷ Băng hà.",
            icon: "🌊",
            color: "#3b82f6"
        },
        {
            time: "23:59:46",
            seconds: 86386,
            title: "Thời đại đồ đồng đá",
            realYear: "6,000 năm trước",
            description: "Con người bước vào Thời đại đồ đồng đá.",
            icon: "⚒️",
            color: "#8b5cf6"
        },
        {
            time: "23:59:47",
            seconds: 86387,
            title: "Chữ viết tiền ký tự",
            realYear: "5,500 năm trước",
            description: "Thời đại đồ đồng sớm, chữ viết tiền ký tự xuất hiện.",
            icon: "✍️",
            color: "#f59e0b"
        },
        {
            time: "23:59:48",
            seconds: 86388,
            title: "Vương triều đầu tiên",
            realYear: "5,000 năm trước",
            description: "Vương triều thứ Nhất của Ai Cập, Tiền Triều đại tại Sumer.",
            icon: "🔺",
            color: "#eab308",
            image: "assets/images/ancient_civilization.png"
        },
        {
            time: "23:59:49",
            seconds: 86389,
            title: "Bảng chữ cái & Bánh xe",
            realYear: "4,500 năm trước",
            description: "Sự xuất hiện của bảng chữ cái, bánh xe, và Đế quốc Akkad.",
            icon: "🛞",
            color: "#f97316"
        },
        {
            time: "23:59:51",
            seconds: 86391,
            title: "Bộ luật Hammurabi",
            realYear: "4,000 năm trước",
            description: "Bộ luật Hammurabi, Trung Vương quốc Ai Cập.",
            icon: "📜",
            color: "#d946ef"
        },
        {
            time: "23:59:53",
            seconds: 86393,
            title: "Thời đại đồ sắt",
            realYear: "3,000 năm trước",
            description: "Thời đại đồ sắt bắt đầu, giai đoạn Cổ đại Hy-La.",
            icon: "⚔️",
            color: "#64748b"
        },
        {
            time: "23:59:54",
            seconds: 86394,
            title: "Triết học & Toán học",
            realYear: "2,500 năm trước",
            description: "Tất-đạt-đa, Khổng Tử, Đế chế Ashoka, hình học Euclid, vật lý Archimedes.",
            icon: "☸️",
            color: "#14b8a6"
        },
        {
            time: "23:59:55",
            seconds: 86395,
            title: "Đế quốc La Mã",
            realYear: "2,000 năm trước",
            description: "Đế quốc La Mã, Chúa Giê-su, phát minh ra số 0.",
            icon: "🏛️",
            color: "#ef4444"
        },
        {
            time: "23:59:56",
            seconds: 86396,
            title: "Văn minh Maya & Nhà Tống",
            realYear: "1,500 năm trước",
            description: "Muhammad, nền Văn minh Maya, Nhà Tống.",
            icon: "🕌",
            color: "#0ea5e9"
        },
        {
            time: "23:59:58",
            seconds: 86398,
            title: "Thập tự chinh & Phục hưng",
            realYear: "1,000 năm trước",
            description: "Đế quốc Mông Cổ, Thập tự chinh, Columbus khám phá châu Mỹ, Phục Hưng.",
            icon: "⛵",
            color: "#a855f7"
        },
        {
            time: "23:59:59",
            seconds: 86399,
            title: "LỊCH SỬ HIỆN ĐẠI",
            realYear: "437.5 năm gần nhất",
            description: "Tất cả lịch sử hiện đại gói gọn trong giây cuối cùng trước hiện tại.",
            icon: "🚀",
            color: "#fbbf24",
            isLastSecond: true,
            subEvents: [
                { label: "Phục Hưng", year: "thế kỷ 15" },
                { label: "Cách mạng Khoa học", year: "thế kỷ 16-17" },
                { label: "Cách mạng Công nghiệp", year: "thế kỷ 18" },
                { label: "Thế chiến I & II", year: "1914–1945" },
                { label: "Con người lên Mặt Trăng", year: "1969" },
                { label: "World Wide Web", year: "1991" },
                { label: "Bạn đang đọc dòng này", year: "ngay lúc này" }
            ]
        }
    ]
};

// Month names in Vietnamese for display
const MONTH_NAMES = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
    "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
    "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

// ============================================================
// DYNAMIC PROCEDURAL SVG COSMIC & CIVILIZATION ILLUSTRATION GENERATOR
// Sinh ảnh Vector cao cấp tự động cho các sự kiện dựa trên từ khóa tiêu đề
// ============================================================

function generateHistoricalSVG(event) {
    const primaryColor = event.color || '#f59e0b';
    const title = event.title;
    let svgContent = '';

    // Lựa chọn bản vẽ dựa trên từ khóa tiêu đề (Tiếng Việt)
    if (title.includes("lửa") || title.includes("Lửa")) {
        // Ngọn lửa trại ấm áp của loài người sơ khai
        svgContent = `
        <circle cx="200" cy="110" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.3"/>
        <rect x="150" y="145" width="100" height="12" rx="4" fill="#3b2314" transform="rotate(-15, 200, 150)"/>
        <rect x="150" y="145" width="100" height="12" rx="4" fill="#2d1a0e" transform="rotate(15, 200, 150)"/>
        <path d="M170,150 Q160,110 185,90 Q200,70 200,50 Q205,80 220,100 Q235,120 230,150 Z" fill="url(#fire_${event.month || 12}_${event.day || 31})"/>
        <path d="M185,150 Q175,120 195,100 Q205,80 205,65 Q210,90 220,110 Q225,125 215,150 Z" fill="#f59e0b" opacity="0.8"/>
        <path d="M195,150 Q190,130 200,120 Q205,110 205,100 Q208,115 212,125 Q215,135 205,150 Z" fill="#fffbde" opacity="0.9"/>
        <circle cx="175" cy="80" r="2" fill="#ff6b35" opacity="0.8"/>
        <circle cx="220" cy="70" r="1.5" fill="#f59e0b" opacity="0.7"/>
        <circle cx="195" cy="40" r="2.5" fill="#ef4444" opacity="0.9"/>
        <circle cx="210" cy="30" r="1" fill="#f59e0b" opacity="0.6"/>
        `;
    } else if (title.includes("Băng Hà") || title.includes("băng hà")) {
        // Cảnh núi băng và dải cực quang lấp lánh kì vĩ
        svgContent = `
        <circle cx="200" cy="180" r="130" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <path d="M50,70 Q120,40 200,80 T350,50" fill="none" stroke="rgba(16, 185, 129, 0.4)" stroke-width="8" filter="blur(8px)"/>
        <path d="M50,75 Q120,45 200,85 T350,55" fill="none" stroke="rgba(6, 182, 212, 0.3)" stroke-width="4" filter="blur(4px)"/>
        <polygon points="40,200 130,90 200,200" fill="url(#ice_${event.month || 12}_${event.day || 31})"/>
        <polygon points="120,200 220,70 300,200" fill="url(#ice_light_${event.month || 12}_${event.day || 31})"/>
        <polygon points="220,200 310,100 370,200" fill="url(#ice_${event.month || 12}_${event.day || 31})" opacity="0.8"/>
        <circle cx="100" cy="50" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="280" cy="40" r="1.5" fill="#fff" opacity="0.8"/>
        `;
    } else if (title.includes("Nông nghiệp") || title.includes("nông nghiệp")) {
        // Các bông lúa vàng óng uốn cong trước gió buổi hoàng hôn
        svgContent = `
        <circle cx="200" cy="160" r="110" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.3"/>
        <path d="M0,170 Q200,140 400,170 L400,200 L0,200 Z" fill="#0d1f10"/>
        <g stroke="#f59e0b" stroke-width="1.5" fill="none" opacity="0.8">
            <path d="M160,180 Q165,130 155,90"/>
            <path d="M200,180 Q202,120 195,80"/>
            <path d="M240,180 Q245,140 235,100"/>
        </g>
        <g fill="#f59e0b" opacity="0.9">
            <ellipse cx="152" cy="92" rx="4" ry="2" transform="rotate(-30, 152, 92)"/>
            <ellipse cx="158" cy="98" rx="4" ry="2" transform="rotate(30, 158, 98)"/>
            <ellipse cx="150" cy="104" rx="4" ry="2" transform="rotate(-30, 150, 104)"/>
            <ellipse cx="160" cy="110" rx="4" ry="2" transform="rotate(30, 160, 110)"/>
            <ellipse cx="192" cy="82" rx="4" ry="2" transform="rotate(-30, 192, 82)"/>
            <ellipse cx="198" cy="88" rx="4" ry="2" transform="rotate(30, 198, 88)"/>
            <ellipse cx="190" cy="94" rx="4" ry="2" transform="rotate(-30, 190, 94)"/>
            <ellipse cx="200" cy="100" rx="4" ry="2" transform="rotate(30, 200, 100)"/>
            <ellipse cx="232" cy="102" rx="4" ry="2" transform="rotate(-30, 232, 102)"/>
            <ellipse cx="238" cy="108" rx="4" ry="2" transform="rotate(30, 238, 108)"/>
            <ellipse cx="230" cy="114" rx="4" ry="2" transform="rotate(-30, 230, 114)"/>
            <ellipse cx="240" cy="120" rx="4" ry="2" transform="rotate(30, 240, 120)"/>
        </g>
        `;
    } else if (title.includes("hang đá")) {
        // Hình vẽ nguyên thủy (bàn tay và chú bò rừng) trên vách đá màu nâu đất sét
        svgContent = `
        <rect x="20" y="20" width="360" height="160" rx="10" fill="#291a10" stroke="#3b2314" stroke-width="2"/>
        <path d="M150,130 Q145,100 150,90 Q155,90 157,100 T160,90 Q165,90 167,105 T170,90 Q175,90 177,105 T180,95 Q185,95 183,110 T188,112 Q193,115 190,125 T175,145 Z" fill="none" stroke="#f97316" stroke-width="3" stroke-dasharray="2,2" opacity="0.6"/>
        <path d="M220,110 L250,110 L260,95 M250,110 L250,130 M225,110 L225,130 M220,110 L210,105 L215,95 M210,105 L220,110" fill="none" stroke="#854d0e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
        `;
    } else if (title.includes("đồ đồng") || title.includes("đồ sắt") || title.includes("công cụ đá") || title.includes("đồng đá")) {
        // Cái đe và cây búa của thợ rèn tỏa sáng với các hạt tia lửa đồng/sắt
        svgContent = `
        <circle cx="200" cy="100" r="70" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <g transform="translate(140, 60)" fill="none" stroke="${primaryColor}" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20,70 L100,70 L90,50 L30,50 Z" fill="#2d3748" stroke-width="2"/>
            <path d="M10,50 L110,50 L100,25 L75,25 Q40,25 20,40 Z" fill="#4a5568" stroke-width="2"/>
            <path d="M35,20 L85,60" stroke="#f59e0b" stroke-width="4"/>
            <rect x="25" y="10" width="20" height="12" rx="2" fill="#718096" stroke="#fff" stroke-width="1.5" transform="rotate(-40, 35, 16)"/>
        </g>
        `;
    } else if (title.includes("chữ") || title.includes("Bộ luật") || title.includes("Bản") || title.includes("Bảng chữ")) {
        // Phiến đá cổ khắc đầy chữ hình nêm tiền cổ đại
        svgContent = `
        <circle cx="200" cy="100" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <rect x="140" y="35" width="120" height="130" rx="8" fill="#1e293b" stroke="${primaryColor}" stroke-width="2" opacity="0.9"/>
        <g stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-linecap="round">
            <line x1="160" y1="55" x2="240" y2="55"/>
            <line x1="160" y1="70" x2="220" y2="70"/>
            <line x1="160" y1="85" x2="235" y2="85"/>
            <line x1="160" y1="100" x2="210" y2="100"/>
            <line x1="160" y1="115" x2="240" y2="115"/>
            <line x1="160" y1="130" x2="230" y2="130"/>
            <line x1="160" y1="145" x2="190" y2="145"/>
        </g>
        <circle cx="225" cy="135" r="10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
        <polygon points="225,130 228,137 222,137" fill="#ef4444"/>
        `;
    } else if (title.includes("Bánh xe") || title.includes("bánh xe")) {
        // Bánh xe gỗ nan hoa đầu tiên của nhân loại rực rỡ sắc vàng
        svgContent = `
        <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <circle cx="200" cy="100" r="50" fill="none" stroke="${primaryColor}" stroke-width="8" opacity="0.8"/>
        <circle cx="200" cy="100" r="54" fill="none" stroke="#fff" stroke-width="1" opacity="0.2"/>
        <circle cx="200" cy="100" r="14" fill="#1e293b" stroke="${primaryColor}" stroke-width="3"/>
        <circle cx="200" cy="100" r="5" fill="${primaryColor}"/>
        <g stroke="${primaryColor}" stroke-width="3" opacity="0.8">
            <line x1="200" y1="50" x2="200" y2="150"/>
            <line x1="150" y1="100" x2="250" y2="100"/>
            <line x1="165" y1="65" x2="235" y2="135"/>
            <line x1="165" y1="135" x2="235" y2="65"/>
        </g>
        `;
    } else if (title.includes("La Mã") || title.includes("Hy-La")) {
        // Ngôi đền Panthenon với cột Doric cổ kính
        svgContent = `
        <circle cx="200" cy="100" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <polygon points="120,55 280,55 200,30" fill="#2d3748" stroke="${primaryColor}" stroke-width="2"/>
        <polygon points="135,50 265,50 200,36" fill="none" stroke="#fff" stroke-width="1" opacity="0.3"/>
        <rect x="130" y="55" width="140" height="10" fill="#1e293b" stroke="${primaryColor}" stroke-width="2"/>
        <rect x="120" y="135" width="160" height="12" fill="#2d3748" stroke="${primaryColor}" stroke-width="2"/>
        <rect x="110" y="147" width="180" height="12" fill="#1e293b" stroke="${primaryColor}" stroke-width="2"/>
        <g fill="#2d3748" stroke="${primaryColor}" stroke-width="2">
            <rect x="145" y="65" width="12" height="70"/>
            <rect x="180" y="65" width="12" height="70"/>
            <rect x="215" y="65" width="12" height="70"/>
            <rect x="243" y="65" width="12" height="70"/>
        </g>
        `;
    } else if (title.includes("Maya") || title.includes("Tống") || title.includes("Ấn Độ")) {
        // Mái chùa Á Đông cong vút hoặc Kim tự tháp Maya bậc thang
        svgContent = `
        <circle cx="200" cy="100" r="85" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.2"/>
        <g fill="#1e293b" stroke="${primaryColor}" stroke-width="2" stroke-linejoin="round">
            <line x1="200" y1="25" x2="200" y2="40" stroke-width="3"/>
            <path d="M180,60 L220,60 L200,40 Z"/>
            <path d="M165,95 L235,95 L225,60 L175,60 Z"/>
            <path d="M145,135 L255,135 L240,95 L160,95 Z"/>
            <rect x="130" y="135" width="140" height="15" fill="#2d3748"/>
        </g>
        `;
    } else if (title.includes("Phục hưng") || title.includes("Thập tự") || title.includes("Phục Hưng")) {
        // Con thuyền viễn dương Santa Maria vượt đại dương xanh
        svgContent = `
        <circle cx="200" cy="90" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <path d="M100,140 Q150,130 200,140 T300,140 L300,165 L100,165 Z" fill="#0b192c" opacity="0.9"/>
        <path d="M80,148 Q140,140 200,148 T320,148 L320,165 L80,165 Z" fill="${primaryColor}" opacity="0.2"/>
        <path d="M140,110 L250,110 Q265,110 250,135 L170,135 Q135,130 140,110 Z" fill="#5c3a21" stroke="${primaryColor}" stroke-width="2"/>
        <line x1="195" y1="50" x2="195" y2="110" stroke="${primaryColor}" stroke-width="3"/>
        <line x1="225" y1="60" x2="225" y2="110" stroke="${primaryColor}" stroke-width="2"/>
        <path d="M195,50 Q165,70 195,95 Z" fill="#fff" opacity="0.85" stroke="${primaryColor}" stroke-width="1.5"/>
        <path d="M225,60 Q205,75 225,95 Z" fill="#fff" opacity="0.7" stroke="${primaryColor}" stroke-width="1.5"/>
        <polygon points="195,50 180,55 195,60" fill="#ef4444"/>
        `;
    } else if (title.includes("HIỆN ĐẠI") || title.includes("hiện đại") || title.includes("Vũ trụ") || title.includes("WWW")) {
        // Tên lửa đẩy bay vút lên bầu khí quyển xanh thẳm
        svgContent = `
        <circle cx="200" cy="80" r="90" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <polygon points="190,130 210,130 200,165" fill="url(#fire_${event.month || 12}_${event.day || 31})" opacity="0.9"/>
        <polygon points="194,130 206,130 200,155" fill="#f59e0b" opacity="0.9"/>
        <path d="M190,130 L190,85 Q190,55 200,45 Q210,55 210,85 L210,130 Z" fill="#f1f5f9" stroke="${primaryColor}" stroke-width="2"/>
        <path d="M190,110 L175,130 L190,130 Z" fill="#e2e8f0" stroke="${primaryColor}" stroke-width="2"/>
        <path d="M210,110 L225,130 L210,130 Z" fill="#e2e8f0" stroke="${primaryColor}" stroke-width="2"/>
        <circle cx="200" cy="75" r="6" fill="#0ea5e9" stroke="${primaryColor}" stroke-width="1.5"/>
        <path d="M200,42 L200,5" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="2,2"/>
        `;
    } else if (title.includes("Người") || title.includes("nhân") || title.includes("nguyên thủy")) {
        // Đầu người phát sáng các liên kết thần kinh, tượng trưng cho trí khôn
        svgContent = `
        <circle cx="200" cy="100" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <path d="M160,150 Q160,110 170,80 Q180,50 210,50 Q235,50 240,75 Q245,100 230,110 Q225,115 228,125 L230,140 Q220,150 200,150 Z" fill="#0f172a" stroke="${primaryColor}" stroke-width="2" opacity="0.8"/>
        <circle cx="205" cy="80" r="4" fill="#fff" opacity="0.9" filter="drop-shadow(0 0 4px ${primaryColor})"/>
        <circle cx="195" cy="90" r="3" fill="${primaryColor}" opacity="0.8"/>
        <circle cx="215" cy="95" r="2.5" fill="${primaryColor}" opacity="0.7"/>
        <circle cx="200" cy="70" r="3.5" fill="${primaryColor}" opacity="0.8"/>
        <line x1="205" y1="80" x2="195" y2="90" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        <line x1="205" y1="80" x2="215" y2="95" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        <line x1="205" y1="80" x2="200" y2="70" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        `;
    } else if (title.includes("học") || title.includes("Toán") || title.includes("Toán học") || title.includes("Triết học")) {
        // Vòng tròn hình học thiêng liêng và xoắn ốc tỉ lệ vàng Fibonacci
        svgContent = `
        <circle cx="200" cy="100" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.2"/>
        <circle cx="180" cy="100" r="45" fill="none" stroke="${primaryColor}" stroke-width="1" opacity="0.3"/>
        <circle cx="220" cy="100" r="45" fill="none" stroke="${primaryColor}" stroke-width="1" opacity="0.3"/>
        <circle cx="200" cy="100" r="45" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.4"/>
        <path d="M200,100 A5,5 0 0,1 200,105 A10,10 0 0,1 190,100 A20,20 0 0,1 200,80 A40,40 0 0,1 240,100 A80,80 0 0,1 200,180" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.85"/>
        `;
    } else if (title.includes("Oxy") || title.includes("khí quyển") || title.includes("Mặt Trời")) {
        // Trái Đất hoặc bầu khí quyển bao quanh quả cầu xanh
        svgContent = `
        <circle cx="200" cy="100" r="80" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.3"/>
        <circle cx="200" cy="100" r="50" fill="#0f1f3d" stroke="${primaryColor}" stroke-width="2"/>
        <path d="M170,85 Q180,75 190,90 T210,100 T230,80 T240,110 Q210,130 180,120 Z" fill="#1b3b5f" opacity="0.7"/>
        <circle cx="200" cy="100" r="58" fill="none" stroke="#60a5fa" stroke-width="4" stroke-dasharray="8,4" opacity="0.8" filter="drop-shadow(0 0 4px #60a5fa)"/>
        `;
    } else if (title.includes("Tế bào") || title.includes("sự sống") || title.includes("bào") || title.includes("Sự sống")) {
        // Cấu trúc tế bào phức tạp sinh động có nhân và ty thể
        svgContent = `
        <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
        <circle cx="200" cy="100" r="55" fill="none" stroke="${primaryColor}" stroke-width="3" opacity="0.6"/>
        <circle cx="190" cy="95" r="18" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.8"/>
        <circle cx="190" cy="95" r="8" fill="#a78bfa" opacity="0.7"/>
        <ellipse cx="225" cy="115" rx="10" ry="5" fill="#f43f5e" opacity="0.6" transform="rotate(30, 225, 115)"/>
        <ellipse cx="170" cy="120" rx="8" ry="4" fill="#10b981" opacity="0.6" transform="rotate(-40, 170, 120)"/>
        <circle cx="220" cy="80" r="3" fill="#eab308" opacity="0.8"/>
        <circle cx="170" cy="80" r="2.5" fill="#eab308" opacity="0.7"/>
        `;
    } else if (title.includes("Thực vật") || title.includes("Hoa") || title.includes("hạt") || title.includes("cỏ")) {
        // Cành dương xỉ/bông hoa nở rực rỡ sắc xuân hồng
        svgContent = `
        <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.3"/>
        <g stroke="${primaryColor}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M200,160 Q200,110 185,70"/>
            <path d="M193,120 Q225,100 220,80 Q195,95 193,120 Z" fill="rgba(16, 185, 129, 0.25)"/>
            <path d="M188,95 Q155,80 160,60 Q180,75 188,95 Z" fill="rgba(16, 185, 129, 0.25)"/>
        </g>
        ${title.includes("Hoa") ? `
        <g fill="#ec4899" opacity="0.9" transform="translate(182, 65)">
            <circle cx="0" cy="0" r="6" fill="#eab308"/>
            <circle cx="0" cy="-12" r="7"/>
            <circle cx="0" cy="12" r="7"/>
            <circle cx="-12" cy="0" r="7"/>
            <circle cx="12" cy="0" r="7"/>
        </g>
        ` : ''}
        `;
    } else if (title.includes("đơn giản") || title.includes("Chân khớp") || title.includes("bò sát") || title.includes("vú") || title.includes("Chim") || title.includes("Cá")) {
        // Chim bay, cá bơi lội hoặc vết chân bò sát cổ xưa
        if (title.includes("Chim")) {
            svgContent = `
            <circle cx="200" cy="120" r="85" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.3"/>
            <path d="M140,80 Q170,75 200,100 Q230,75 260,80 Q225,95 200,120 Q175,95 140,80 Z" fill="${primaryColor}" stroke="#fff" stroke-width="1" opacity="0.9"/>
            <path d="M160,95 Q180,92 200,110 Q220,92 240,95 Q220,105 200,125 Q180,105 160,95 Z" fill="#fff" opacity="0.2"/>
            `;
        } else if (title.includes("Cá") || title.includes("cá")) {
            svgContent = `
            <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
            <path d="M140,100 Q190,70 240,100 Q255,90 260,85 L260,115 Q255,110 240,100 Q190,130 140,100 Z" fill="${primaryColor}" opacity="0.8"/>
            <polygon points="140,100 120,85 125,100 120,115" fill="${primaryColor}"/>
            <circle cx="230" cy="97" r="2" fill="#000"/>
            `;
        } else if (title.includes("bò sát") || title.includes("Khủng long")) {
            svgContent = `
            <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
            <path d="M150,130 C160,110 170,110 180,100 C190,90 210,80 230,70" stroke="${primaryColor}" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.75"/>
            <path d="M170,85 Q190,100 200,120" stroke="${primaryColor}" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.75"/>
            `;
        } else {
            svgContent = `
            <circle cx="200" cy="100" r="75" fill="url(#glow_${event.month || 12}_${event.day || 31})" opacity="0.25"/>
            <ellipse cx="200" cy="105" rx="35" ry="18" fill="${primaryColor}" opacity="0.8"/>
            <circle cx="160" cy="90" r="14" fill="${primaryColor}" opacity="0.8"/>
            <rect x="175" y="120" width="8" height="15" fill="${primaryColor}" opacity="0.8"/>
            <rect x="215" y="120" width="8" height="15" fill="${primaryColor}" opacity="0.8"/>
            `;
        }
    } else {
        // Không có từ khóa tương thích -> Dùng ảnh nền chung của vũ trụ
        return null;
    }

    // Ghép nối cấu trúc khung bao SVG hoàn chỉnh
    const finalSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
        <defs>
            <linearGradient id="bgGrad_${event.month || 12}_${event.day || 31}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#020617"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <radialGradient id="glow_${event.month || 12}_${event.day || 31}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="fire_${event.month || 12}_${event.day || 31}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444"/>
                <stop offset="60%" stop-color="#f97316"/>
                <stop offset="100%" stop-color="#fde047"/>
            </linearGradient>
            <linearGradient id="ice_${event.month || 12}_${event.day || 31}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0891b2"/>
                <stop offset="100%" stop-color="#083344"/>
            </linearGradient>
            <linearGradient id="ice_light_${event.month || 12}_${event.day || 31}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#22d3ee"/>
                <stop offset="100%" stop-color="#0e7490"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgGrad_${event.month || 12}_${event.day || 31})"/>
        ${svgContent}
        <circle cx="60" cy="50" r="1.2" fill="#fff" opacity="0.4"/>
        <circle cx="340" cy="150" r="1" fill="#fff" opacity="0.3"/>
        <circle cx="150" cy="30" r="1.5" fill="#fff" opacity="0.5"/>
        <circle cx="280" cy="170" r="0.8" fill="#fff" opacity="0.4"/>
    </svg>
    `;

    return `data:image/svg+xml;utf8,${encodeURIComponent(finalSvg.trim())}`;
}



// ============================================================
// DYNAMIC PROCEDURAL SVG COSMIC ILLUSTRATION GENERATOR
// Sinh ảnh Vector vũ trụ nền (dự phòng)
// ============================================================
function generateCosmicSVG(event, index) {
    const primaryColor = event.color || '#f59e0b';
    let svg = '';

    if (index % 4 === 0) {
        // Deep Space & Cosmic Nebula
        svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bgGrad${index}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                </linearGradient>
                <radialGradient id="nebula${index}" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGrad${index})"/>
            <circle cx="200" cy="100" r="130" fill="url(#nebula${index})"/>
            <ellipse cx="200" cy="100" rx="140" ry="40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <ellipse cx="200" cy="100" rx="160" ry="65" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" transform="rotate(30, 200, 100)"/>
            <circle cx="80" cy="60" r="1" fill="#fff" opacity="0.6"/>
            <circle cx="320" cy="140" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="150" cy="160" r="1" fill="#fff" opacity="0.5"/>
            <circle cx="260" cy="40" r="2" fill="${primaryColor}" opacity="0.4"/>
            <circle cx="200" cy="100" r="6" fill="#fff" opacity="0.9"/>
            <circle cx="200" cy="100" r="18" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.5"/>
            <line x1="200" y1="70" x2="200" y2="130" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
            <line x1="170" y1="100" x2="230" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        </svg>
        `;
    } else if (index % 4 === 1) {
        // Biochemical / Cellular Organic
        svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bgGrad${index}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#020813"/>
                    <stop offset="100%" stop-color="#0b1e36"/>
                </linearGradient>
                <radialGradient id="organicGlow${index}" cx="35%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#020813" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGrad${index})"/>
            <rect width="100%" height="100%" fill="url(#organicGlow${index})"/>
            <path d="M-50,140 Q100,90 200,150 T450,120 L450,220 L-50,220 Z" fill="rgba(255,255,255,0.03)"/>
            <path d="M-50,160 Q120,120 250,170 T450,140 L450,220 L-50,220 Z" fill="${primaryColor}" opacity="0.08"/>
            <circle cx="120" cy="90" r="12" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.4"/>
            <circle cx="120" cy="90" r="5" fill="${primaryColor}" opacity="0.6"/>
            <circle cx="280" cy="110" r="16" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
            <circle cx="280" cy="110" r="3" fill="#fff" opacity="0.7"/>
            <circle cx="210" cy="60" r="3" fill="${primaryColor}" opacity="0.5"/>
            <circle cx="180" cy="130" r="2" fill="#fff" opacity="0.4"/>
            <line x1="120" y1="90" x2="210" y2="60" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="280" y1="110" x2="210" y2="60" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3,3"/>
        </svg>
        `;
    } else if (index % 4 === 2) {
        // Terrestrial Primeval Atmosphere
        svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bgGrad${index}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#110d21"/>
                    <stop offset="100%" stop-color="#020308"/>
                </linearGradient>
                <radialGradient id="sunGlow${index}" cx="200" cy="180" r="120">
                    <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#110d21" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGrad${index})"/>
            <circle cx="200" cy="180" r="70" fill="url(#sunGlow${index})"/>
            <circle cx="200" cy="180" r="40" fill="${primaryColor}" opacity="0.15"/>
            <path d="M0,200 L120,130 L220,175 L320,120 L400,200 Z" fill="rgba(255,255,255,0.02)"/>
            <path d="M0,200 L80,150 L180,180 L290,140 L400,200 Z" fill="#020308"/>
            <line x1="200" y1="180" x2="100" y2="80" stroke="${primaryColor}" stroke-width="1" opacity="0.08"/>
            <line x1="200" y1="180" x2="300" y2="80" stroke="${primaryColor}" stroke-width="1" opacity="0.08"/>
            <line x1="200" y1="180" x2="200" y2="50" stroke="${primaryColor}" stroke-width="1" opacity="0.08"/>
            <path d="M120,90 Q125,80 135,88 Q130,98 120,90 Z" fill="${primaryColor}" opacity="0.5" transform="rotate(15, 120, 90)"/>
            <path d="M270,70 Q275,60 285,68 Q280,78 270,70 Z" fill="rgba(255,255,255,0.4)" opacity="0.6" transform="rotate(-20, 270, 70)"/>
        </svg>
        `;
    } else {
        // Solar Wisdom
        svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bgGrad${index}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a0f05"/>
                    <stop offset="100%" stop-color="#050200"/>
                </linearGradient>
                <radialGradient id="fireGlow${index}" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#050200" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGrad${index})"/>
            <circle cx="200" cy="100" r="130" fill="url(#fireGlow${index})"/>
            <circle cx="200" cy="100" r="75" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <circle cx="200" cy="100" r="55" fill="none" stroke="${primaryColor}" stroke-width="1" opacity="0.15"/>
            <g opacity="0.12">
                <line x1="200" y1="100" x2="200" y2="0" stroke="#fff" stroke-width="1"/>
                <line x1="200" y1="100" x2="200" y2="200" stroke="#fff" stroke-width="1"/>
                <line x1="200" y1="100" x2="0" y2="100" stroke="#fff" stroke-width="1"/>
                <line x1="200" y1="100" x2="400" y2="100" stroke="#fff" stroke-width="1"/>
            </g>
            <polygon points="200,85 215,112 185,112" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.6"/>
            <circle cx="200" cy="100" r="25" fill="none" stroke="#fff" stroke-width="1" opacity="0.08"/>
        </svg>
        `;
    }

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

// Loop to automatically assign procedural vector images to events that don't have static images
function populateProceduralImages() {
    TIMELINE_DATA.phase1.forEach((event, i) => {
        if (!event.image) {
            event.image = generateHistoricalSVG(event) || generateCosmicSVG(event, i);
        }
    });

    TIMELINE_DATA.phase2.forEach((event, i) => {
        if (!event.image) {
            event.image = generateHistoricalSVG(event) || generateCosmicSVG(event, i + 10);
        }
    });

    TIMELINE_DATA.phase3.forEach((event, i) => {
        if (!event.image) {
            event.image = generateHistoricalSVG(event) || generateCosmicSVG(event, i + 20);
        }
    });
}

// Execute population
populateProceduralImages();
