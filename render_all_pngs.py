"""
render_all_pngs.py
Tạo 18 ảnh PNG nghệ thuật cao cấp cho Nhật Ký Du Hành Thời Gian
bằng cách vẽ SVG và render qua Microsoft Edge Headless.
"""

import os
import subprocess
import tempfile
import shutil

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "images")
TEMP_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_render_temp")

IMAGES = [
    {
        "name": "early_humans_stone_tools",
        "bg_from": "#0a0500", "bg_to": "#150b00",
        "glow": "#fbbf24",
        "title": "Người Nguyên Thủy",
        "svg_body": """
        <defs>
          <radialGradient id="fireG" cx="50%" cy="80%" r="55%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.55"/>
            <stop offset="60%" stop-color="#f97316" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#0a0500" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="sparksG" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="50%" stop-color="#f97316"/>
            <stop offset="100%" stop-color="#fde68a"/>
          </linearGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="2"/></filter>
        </defs>
        <!-- Cave wall dark -->
        <rect width="800" height="400" fill="#0a0500"/>
        <path d="M0,0 Q200,30 400,10 Q600,30 800,0 L800,100 Q600,80 400,90 Q200,80 0,100 Z" fill="#120800" opacity="0.6"/>
        <!-- Rock surfaces -->
        <path d="M0,300 Q100,280 200,295 Q300,285 400,300 Q500,290 600,305 Q700,290 800,300 L800,400 L0,400 Z" fill="#1c0d00"/>
        <!-- Distant campfire glow -->
        <circle cx="650" cy="300" r="40" fill="#f97316" opacity="0.2" filter="url(#blur1)"/>
        <circle cx="650" cy="295" r="20" fill="#fbbf24" opacity="0.3" filter="url(#blur2)"/>
        <!-- Main glow from sparks -->
        <ellipse cx="400" cy="260" rx="200" ry="120" fill="url(#fireG)" filter="url(#blur1)"/>
        <!-- Stone (anvil) -->
        <ellipse cx="420" cy="310" rx="70" ry="22" fill="#292524"/>
        <ellipse cx="420" cy="305" rx="65" ry="18" fill="#3c3533"/>
        <!-- Hand axe being struck -->
        <path d="M340,295 Q355,275 380,260 Q395,255 410,270 Q405,285 390,295 Q375,305 360,300 Z" fill="#78716c"/>
        <path d="M340,295 Q355,275 380,260" fill="none" stroke="#a8a29e" stroke-width="1.5" opacity="0.7"/>
        <!-- Striking stone -->
        <ellipse cx="355" cy="235" rx="30" ry="18" fill="#57534e" transform="rotate(-30,355,235)"/>
        <!-- Arm silhouette -->
        <path d="M250,180 Q290,200 330,230 Q345,240 355,235" stroke="#1c0a00" stroke-width="18" fill="none" stroke-linecap="round"/>
        <!-- Sparks burst -->
        <line x1="380" y1="270" x2="340" y2="220" stroke="#fde68a" stroke-width="2" opacity="0.9"/>
        <line x1="380" y1="270" x2="320" y2="240" stroke="#fbbf24" stroke-width="1.5" opacity="0.85"/>
        <line x1="380" y1="270" x2="415" y2="218" stroke="#f97316" stroke-width="2" opacity="0.8"/>
        <line x1="380" y1="270" x2="440" y2="235" stroke="#fde68a" stroke-width="1.5" opacity="0.75"/>
        <line x1="380" y1="270" x2="425" y2="245" stroke="#fbbf24" stroke-width="2" opacity="0.9"/>
        <line x1="380" y1="270" x2="360" y2="210" stroke="#fde68a" stroke-width="1" opacity="0.7"/>
        <line x1="380" y1="270" x2="300" y2="255" stroke="#f97316" stroke-width="1.5" opacity="0.8"/>
        <!-- Spark particles -->
        <circle cx="340" cy="220" r="3" fill="#fde68a" opacity="0.9" filter="url(#blur2)"/>
        <circle cx="415" cy="218" r="4" fill="#fbbf24" opacity="0.85" filter="url(#blur2)"/>
        <circle cx="440" cy="235" r="2.5" fill="#fbbf24" opacity="0.8"/>
        <circle cx="320" cy="240" r="3" fill="#f97316" opacity="0.8" filter="url(#blur2)"/>
        <circle cx="360" cy="210" r="2" fill="#fde68a" opacity="0.9"/>
        <circle cx="300" cy="255" r="3" fill="#f97316" opacity="0.7"/>
        <!-- Trailing sparks (falling) -->
        <circle cx="335" cy="245" r="1.5" fill="#fbbf24" opacity="0.7"/>
        <circle cx="325" cy="260" r="1" fill="#f97316" opacity="0.6"/>
        <circle cx="430" cy="252" r="1.5" fill="#fde68a" opacity="0.7"/>
        <!-- Cave wall painting hint -->
        <path d="M580,200 Q600,190 615,200 Q620,215 605,220 Q590,220 580,210 Z" fill="#7c2d12" opacity="0.25"/>
        <path d="M560,230 Q580,225 590,235 Q585,250 570,250 Q558,245 560,232 Z" fill="#7c2d12" opacity="0.2"/>
        """
    },
    {
        "name": "end_of_ice_age",
        "bg_from": "#020d1a", "bg_to": "#041a2e",
        "glow": "#38bdf8",
        "title": "Kết Thúc Kỷ Băng Hà",
        "svg_body": """
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#082f49"/>
            <stop offset="50%" stop-color="#0c4a6e"/>
            <stop offset="85%" stop-color="#0369a1"/>
            <stop offset="100%" stop-color="#0ea5e9"/>
          </linearGradient>
          <linearGradient id="iceG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="100%" stop-color="#0369a1"/>
          </linearGradient>
          <radialGradient id="sunG" cx="55%" cy="30%" r="25%">
            <stop offset="0%" stop-color="#fde68a" stop-opacity="1"/>
            <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#020d1a" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky)"/>
        <!-- Sun brilliant -->
        <circle cx="440" cy="120" r="80" fill="url(#sunG)" filter="url(#blur1)"/>
        <circle cx="440" cy="120" r="45" fill="#fde68a" opacity="0.9"/>
        <!-- Sun rays -->
        <line x1="440" y1="60" x2="440" y2="40" stroke="#fde68a" stroke-width="3" opacity="0.6"/>
        <line x1="490" y1="75" x2="508" y2="58" stroke="#fde68a" stroke-width="2.5" opacity="0.5"/>
        <line x1="510" y1="120" x2="535" y2="120" stroke="#fde68a" stroke-width="2.5" opacity="0.5"/>
        <line x1="390" y1="75" x2="372" y2="58" stroke="#fde68a" stroke-width="2.5" opacity="0.5"/>
        <line x1="370" y1="120" x2="345" y2="120" stroke="#fde68a" stroke-width="2.5" opacity="0.5"/>
        <!-- Glacier mountain -->
        <polygon points="0,310 150,80 300,310" fill="url(#iceG)"/>
        <polygon points="100,310 270,100 420,310" fill="#bae6fd" opacity="0.85"/>
        <polygon points="50,310 180,130 310,310" fill="#e0f2fe" opacity="0.7"/>
        <!-- Glacier cracks / melting -->
        <path d="M130,200 Q125,220 135,250" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.7"/>
        <path d="M200,220 Q205,245 198,270" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.6"/>
        <!-- Melting waterfalls -->
        <path d="M150,285 Q148,310 152,340 Q155,360 150,380" stroke="#38bdf8" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.85"/>
        <path d="M220,295 Q218,325 222,355 Q225,370 220,390" stroke="#7dd3fc" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.75"/>
        <!-- Water river pool -->
        <path d="M0,350 Q150,330 300,345 Q450,330 600,348 Q700,340 800,350 L800,400 L0,400 Z" fill="#0369a1" opacity="0.8"/>
        <ellipse cx="400" cy="358" rx="380" ry="18" fill="#38bdf8" opacity="0.3"/>
        <!-- Water ripples -->
        <ellipse cx="300" cy="355" rx="60" ry="8" fill="none" stroke="#7dd3fc" stroke-width="1" opacity="0.5"/>
        <ellipse cx="500" cy="360" rx="45" ry="6" fill="none" stroke="#7dd3fc" stroke-width="1" opacity="0.4"/>
        <!-- New plant shoots -->
        <path d="M470,345 Q472,320 468,300" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="468" cy="298" rx="10" ry="6" fill="#16a34a" opacity="0.9"/>
        <path d="M490,348 Q491,328 488,312" stroke="#16a34a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="488" cy="310" rx="8" ry="5" fill="#22c55e" opacity="0.85"/>
        <path d="M510,345 Q512,325 509,315" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Horizon glow -->
        <ellipse cx="400" cy="310" rx="400" ry="40" fill="#0ea5e9" opacity="0.25" filter="url(#blur2)"/>
        <!-- Ice sparkles -->
        <circle cx="160" cy="150" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="200" cy="180" r="1.5" fill="#e0f2fe" opacity="0.7"/>
        <circle cx="250" cy="130" r="2.5" fill="#fff" opacity="0.75"/>
        <circle cx="90" cy="200" r="1.8" fill="#bae6fd" opacity="0.8"/>
        """
    },
    {
        "name": "chalcolithic_age",
        "bg_from": "#150500", "bg_to": "#200800",
        "glow": "#f97316",
        "title": "Thời Đại Đồ Đồng",
        "svg_body": """
        <defs>
          <radialGradient id="forgeG" cx="50%" cy="70%" r="55%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.8"/>
            <stop offset="50%" stop-color="#dc2626" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#150500" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="metalG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fde68a" stop-opacity="1"/>
            <stop offset="50%" stop-color="#f97316" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#b45309" stop-opacity="0.5"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="blur3"><feGaussianBlur stdDeviation="2"/></filter>
        </defs>
        <!-- Dark forge room -->
        <rect width="800" height="400" fill="#150500"/>
        <!-- Forge glow from bottom -->
        <ellipse cx="400" cy="380" rx="360" ry="120" fill="url(#forgeG)" filter="url(#blur1)"/>
        <!-- Furnace structure -->
        <rect x="280" y="230" width="240" height="170" rx="10" fill="#292524"/>
        <rect x="280" y="230" width="240" height="170" rx="10" fill="none" stroke="#57534e" stroke-width="2" opacity="0.6"/>
        <!-- Furnace opening -->
        <ellipse cx="400" cy="280" rx="70" ry="50" fill="#f97316" opacity="0.9"/>
        <ellipse cx="400" cy="280" rx="55" ry="38" fill="#fbbf24" opacity="0.85"/>
        <ellipse cx="400" cy="278" rx="42" ry="28" fill="#fde68a" opacity="0.95"/>
        <!-- Fire flames inside -->
        <path d="M375,300 Q380,265 390,250 Q400,240 400,260 Q408,240 415,250 Q425,265 420,300 Z" fill="#f97316" opacity="0.9"/>
        <path d="M385,300 Q388,270 395,258 Q400,248 405,258 Q412,270 415,300 Z" fill="#fbbf24" opacity="0.85"/>
        <path d="M393,300 Q395,275 400,265 Q405,275 407,300 Z" fill="#fde68a" opacity="0.95"/>
        <!-- Molten copper stream pouring from ladle -->
        <path d="M180,150 L230,200 Q250,230 260,280" stroke="#fbbf24" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M180,150 L230,200 Q250,230 260,280" stroke="#fde68a" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
        <!-- Ladle -->
        <path d="M140,120 Q150,110 170,115 Q175,130 165,138 Q155,142 145,135 Z" fill="#57534e"/>
        <line x1="165" y1="128" x2="240" y2="165" stroke="#78716c" stroke-width="8" stroke-linecap="round"/>
        <!-- Mold on ground -->
        <rect x="240" y="295" width="60" height="35" rx="4" fill="#1c0a00" stroke="#57534e" stroke-width="2"/>
        <!-- Metal pouring into mold -->
        <ellipse cx="270" cy="295" rx="22" ry="8" fill="url(#metalG)" filter="url(#blur3)"/>
        <!-- Smoke wisps -->
        <path d="M380,230 Q370,200 375,170 Q380,140 370,110" fill="none" stroke="#78716c" stroke-width="3" stroke-dasharray="5,5" opacity="0.4"/>
        <path d="M420,225 Q430,195 425,165 Q418,135 428,105" fill="none" stroke="#78716c" stroke-width="2.5" stroke-dasharray="5,5" opacity="0.35"/>
        <!-- Sparks from forge -->
        <circle cx="330" cy="220" r="3" fill="#fde68a" opacity="0.9" filter="url(#blur3)"/>
        <circle cx="460" cy="215" r="2.5" fill="#fbbf24" opacity="0.85" filter="url(#blur3)"/>
        <circle cx="350" cy="200" r="2" fill="#f97316" opacity="0.8"/>
        <circle cx="440" cy="195" r="3" fill="#fde68a" opacity="0.9" filter="url(#blur3)"/>
        <circle cx="370" cy="185" r="2" fill="#fbbf24" opacity="0.7"/>
        <!-- Arms and tools shadows -->
        <path d="M100,100 Q130,120 160,130" stroke="#1c0a00" stroke-width="20" fill="none" stroke-linecap="round" opacity="0.9"/>
        """
    },
    {
        "name": "proto_writing",
        "bg_from": "#1a0f00", "bg_to": "#2d1a00",
        "glow": "#fbbf24",
        "title": "Chữ Viết Tiền Ký Tự",
        "svg_body": """
        <defs>
          <radialGradient id="candleG" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.6"/>
            <stop offset="70%" stop-color="#f97316" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#1a0f00" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Dark background -->
        <rect width="800" height="400" fill="#1a0f00"/>
        <!-- Candle glow from right -->
        <circle cx="640" cy="200" r="130" fill="url(#candleG)" filter="url(#blur1)"/>
        <!-- Candle -->
        <rect x="628" y="240" width="24" height="100" rx="5" fill="#fafafa"/>
        <ellipse cx="640" cy="240" rx="12" ry="5" fill="#f5f5f4"/>
        <!-- Candle flame -->
        <path d="M634,240 Q636,215 640,205 Q644,215 646,240 Z" fill="#fde68a" opacity="0.95"/>
        <path d="M637,240 Q638,222 640,215 Q642,222 643,240 Z" fill="#fff" opacity="0.85"/>
        <!-- Candle wax drip -->
        <path d="M628,255 Q624,265 626,275" stroke="#f5f5f4" stroke-width="4" fill="none" opacity="0.6"/>
        <!-- Clay tablet main -->
        <rect x="120" y="80" width="380" height="250" rx="12" fill="#b45309"/>
        <rect x="120" y="80" width="380" height="250" rx="12" fill="#92400e" opacity="0.6"/>
        <!-- Tablet texture -->
        <rect x="120" y="80" width="380" height="250" rx="12" fill="none" stroke="#78350f" stroke-width="3" opacity="0.5"/>
        <!-- Cuneiform pictographs -->
        <!-- Row 1 -->
        <g fill="none" stroke="#fde68a" stroke-width="2.5" opacity="0.8" stroke-linecap="round">
          <line x1="145" y1="110" x2="165" y2="110"/>
          <line x1="155" y1="110" x2="148" y2="125"/>
          <line x1="185" y1="105" x2="205" y2="105"/>
          <line x1="195" y1="105" x2="188" y2="122"/>
          <line x1="188" y1="122" x2="210" y2="122"/>
        </g>
        <!-- Ox head symbol -->
        <g stroke="#fde68a" stroke-width="2" fill="none" opacity="0.75">
          <path d="M225,100 Q240,108 255,100 Q248,120 240,128 Q232,120 225,100 Z"/>
          <line x1="225" y1="100" x2="218" y2="90"/>
          <line x1="255" y1="100" x2="262" y2="90"/>
        </g>
        <!-- Water wavy lines -->
        <g stroke="#fde68a" stroke-width="2" fill="none" opacity="0.75">
          <path d="M280,100 Q288,95 296,100 Q304,105 312,100"/>
          <path d="M280,112 Q288,107 296,112 Q304,117 312,112"/>
        </g>
        <!-- Row 2 cuneiform wedges -->
        <g fill="#fde68a" opacity="0.7">
          <polygon points="145,140 155,135 155,145"/>
          <polygon points="165,140 175,135 175,145"/>
          <polygon points="155,140 155,148 165,144"/>
          <polygon points="195,138 205,133 205,143"/>
          <polygon points="218,138 228,133 228,143"/>
          <polygon points="205,140 205,148 218,144"/>
        </g>
        <!-- Row 3: more complex symbols -->
        <g fill="none" stroke="#fde68a" stroke-width="2" opacity="0.7">
          <circle cx="155" cy="178" r="12"/>
          <line x1="155" y1="166" x2="155" y2="160"/>
          <line x1="167" y1="178" x2="172" y2="178"/>
          <circle cx="205" cy="175" r="9"/>
          <path d="M214,175 Q220,168 228,172"/>
          <rect x="248" y="165" width="24" height="18" rx="2" fill="#fde68a" opacity="0.2" stroke-width="1.5"/>
          <line x1="248" y1="174" x2="272" y2="174"/>
        </g>
        <!-- Row 4 -->
        <g fill="#fde68a" opacity="0.65">
          <polygon points="145,205 155,200 155,210"/>
          <polygon points="165,205 175,200 175,210"/>
          <polygon points="185,205 195,200 195,210"/>
          <polygon points="155,210 155,218 165,214"/>
          <polygon points="225,202 235,197 235,207"/>
          <polygon points="248,202 258,197 258,207"/>
          <polygon points="235,208 235,216 248,212"/>
        </g>
        <!-- Stylus (reed pen) -->
        <line x1="490" y1="130" x2="380" y2="280" stroke="#a16207" stroke-width="5" stroke-linecap="round"/>
        <polygon points="380,280 372,290 390,284" fill="#a16207"/>
        <!-- Reed pen tip mark -->
        <path d="M380,280 L372,290 Q376,275 385,272 Z" fill="#fbbf24" opacity="0.8"/>
        <!-- Hand holding stylus (silhouette) -->
        <path d="M520,100 Q510,110 495,120 Q480,128 465,135" stroke="#2c1a0a" stroke-width="22" fill="none" stroke-linecap="round"/>
        <!-- Second smaller tablet -->
        <rect x="520" y="230" width="150" height="110" rx="8" fill="#92400e" opacity="0.7"/>
        <g fill="none" stroke="#fde68a" stroke-width="1.5" opacity="0.5">
          <line x1="535" y1="252" x2="655" y2="252"/>
          <line x1="535" y1="268" x2="635" y2="268"/>
          <line x1="535" y1="284" x2="650" y2="284"/>
          <line x1="535" y1="300" x2="620" y2="300"/>
          <line x1="535" y1="316" x2="645" y2="316"/>
        </g>
        """
    },
    {
        "name": "alphabet_wheel",
        "bg_from": "#0d0a1e", "bg_to": "#1a1435",
        "glow": "#f97316",
        "title": "Bảng Chữ Cái & Bánh Xe",
        "svg_body": """
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#0d0a1e" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Background glow -->
        <circle cx="400" cy="200" r="220" fill="url(#g1)" filter="url(#blur1)"/>
        <!-- Desert road hint -->
        <path d="M0,360 Q400,310 800,360 L800,400 L0,400 Z" fill="#1c1505"/>
        <!-- Outer rim of wheel -->
        <circle cx="400" cy="200" r="150" fill="none" stroke="#f97316" stroke-width="12" opacity="0.9"/>
        <!-- Outer rim highlight -->
        <circle cx="400" cy="200" r="150" fill="none" stroke="#fde68a" stroke-width="3" opacity="0.4"/>
        <!-- Inner hub -->
        <circle cx="400" cy="200" r="30" fill="#1a1435" stroke="#f97316" stroke-width="6" opacity="0.9"/>
        <circle cx="400" cy="200" r="16" fill="#f97316" opacity="0.8"/>
        <!-- Spokes (8 spokes) -->
        <g stroke="#f97316" stroke-width="7" stroke-linecap="round" opacity="0.85">
          <line x1="400" y1="200" x2="400" y2="52"/>
          <line x1="400" y1="200" x2="506" y2="95"/>
          <line x1="400" y1="200" x2="548" y2="200"/>
          <line x1="400" y1="200" x2="506" y2="305"/>
          <line x1="400" y1="200" x2="400" y2="348"/>
          <line x1="400" y1="200" x2="294" y2="305"/>
          <line x1="400" y1="200" x2="252" y2="200"/>
          <line x1="400" y1="200" x2="294" y2="95"/>
        </g>
        <!-- Spoke inner glow -->
        <g stroke="#fde68a" stroke-width="2" stroke-linecap="round" opacity="0.4">
          <line x1="400" y1="200" x2="400" y2="52"/>
          <line x1="400" y1="200" x2="506" y2="95"/>
          <line x1="400" y1="200" x2="548" y2="200"/>
          <line x1="400" y1="200" x2="506" y2="305"/>
          <line x1="400" y1="200" x2="400" y2="348"/>
          <line x1="400" y1="200" x2="294" y2="305"/>
          <line x1="400" y1="200" x2="252" y2="200"/>
          <line x1="400" y1="200" x2="294" y2="95"/>
        </g>
        <!-- Ancient alphabet letters floating in orbit -->
        <g font-family="serif" font-size="22" fill="#fbbf24" opacity="0.85" text-anchor="middle">
          <text x="400" y="25" transform="rotate(0,400,200)">𐤀</text>
          <text x="400" y="25" transform="rotate(40,400,200)">𐤁</text>
          <text x="400" y="25" transform="rotate(80,400,200)">𐤂</text>
          <text x="400" y="25" transform="rotate(120,400,200)">𐤃</text>
          <text x="400" y="25" transform="rotate(160,400,200)">𐤄</text>
          <text x="400" y="25" transform="rotate(200,400,200)">𐤅</text>
          <text x="400" y="25" transform="rotate(240,400,200)">𐤆</text>
          <text x="400" y="25" transform="rotate(280,400,200)">𐤇</text>
          <text x="400" y="25" transform="rotate(320,400,200)">𐤈</text>
        </g>
        <!-- Stone pillar left -->
        <rect x="90" y="160" width="40" height="200" rx="5" fill="#292524"/>
        <rect x="80" y="155" width="60" height="18" rx="4" fill="#3c3533"/>
        <!-- Pillar inscriptions -->
        <g stroke="#fbbf24" stroke-width="1.2" fill="none" opacity="0.5">
          <line x1="100" y1="185" x2="120" y2="185"/>
          <line x1="100" y1="200" x2="125" y2="200"/>
          <line x1="100" y1="215" x2="118" y2="215"/>
          <line x1="100" y1="230" x2="124" y2="230"/>
        </g>
        <!-- Cart axle -->
        <line x1="580" y1="340" x2="760" y2="340" stroke="#78716c" stroke-width="8" stroke-linecap="round"/>
        <!-- Cart body -->
        <rect x="580" y="295" width="180" height="50" rx="6" fill="#3c2e18"/>
        <rect x="580" y="295" width="180" height="50" rx="6" fill="none" stroke="#78716c" stroke-width="2"/>
        <!-- Smaller wheel on cart -->
        <circle cx="615" cy="350" r="32" fill="none" stroke="#d97706" stroke-width="6"/>
        <circle cx="615" cy="350" r="10" fill="#1a1435" stroke="#d97706" stroke-width="4"/>
        <line x1="615" y1="350" x2="615" y2="320" stroke="#d97706" stroke-width="4"/>
        <line x1="615" y1="350" x2="643" y2="350" stroke="#d97706" stroke-width="4"/>
        <line x1="615" y1="350" x2="615" y2="380" stroke="#d97706" stroke-width="4"/>
        <line x1="615" y1="350" x2="587" y2="350" stroke="#d97706" stroke-width="4"/>
        <circle cx="725" cy="350" r="32" fill="none" stroke="#d97706" stroke-width="6"/>
        <circle cx="725" cy="350" r="10" fill="#1a1435" stroke="#d97706" stroke-width="4"/>
        <line x1="725" y1="350" x2="725" y2="320" stroke="#d97706" stroke-width="4"/>
        <line x1="725" y1="350" x2="753" y2="350" stroke="#d97706" stroke-width="4"/>
        <line x1="725" y1="350" x2="725" y2="380" stroke="#d97706" stroke-width="4"/>
        <line x1="725" y1="350" x2="697" y2="350" stroke="#d97706" stroke-width="4"/>
        """
    },
    {
        "name": "code_of_hammurabi",
        "bg_from": "#060a14", "bg_to": "#0d1525",
        "glow": "#d946ef",
        "title": "Bộ Luật Hammurabi",
        "svg_body": """
        <defs>
          <radialGradient id="g1" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#d946ef" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#060a14" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="steleG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e1b4b"/>
            <stop offset="100%" stop-color="#0f0a23"/>
          </linearGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Background glow -->
        <ellipse cx="400" cy="180" rx="280" ry="220" fill="url(#g1)" filter="url(#blur1)"/>
        <!-- Stele base -->
        <rect x="245" y="310" width="310" height="90" rx="8" fill="#1e1b4b"/>
        <rect x="245" y="310" width="310" height="90" rx="8" fill="none" stroke="#d946ef" stroke-width="2" opacity="0.5"/>
        <!-- Stele main column -->
        <rect x="270" y="65" width="260" height="265" rx="12" fill="url(#steleG)"/>
        <rect x="270" y="65" width="260" height="265" rx="12" fill="none" stroke="#d946ef" stroke-width="2.5" opacity="0.7"/>
        <!-- Stele glow edge -->
        <rect x="270" y="65" width="260" height="265" rx="12" fill="none" stroke="#f0abfc" stroke-width="1" opacity="0.3"/>
        <!-- Rounded top of stele -->
        <ellipse cx="400" cy="65" rx="130" ry="40" fill="#1e1b4b"/>
        <ellipse cx="400" cy="65" rx="130" ry="40" fill="none" stroke="#d946ef" stroke-width="2" opacity="0.6"/>
        <!-- Relief carving top: Shamash (sun god) and Hammurabi -->
        <!-- Shamash on throne (right) -->
        <rect x="430" y="30" width="55" height="80" rx="5" fill="#0f0a23" opacity="0.8"/>
        <!-- Crown rays of Shamash -->
        <line x1="457" y1="30" x2="457" y2="15" stroke="#fbbf24" stroke-width="2.5" opacity="0.8"/>
        <line x1="470" y1="33" x2="480" y2="20" stroke="#fbbf24" stroke-width="2.5" opacity="0.8"/>
        <line x1="444" y1="33" x2="434" y2="20" stroke="#fbbf24" stroke-width="2.5" opacity="0.8"/>
        <line x1="478" y1="42" x2="492" y2="35" stroke="#fbbf24" stroke-width="2" opacity="0.7"/>
        <circle cx="457" cy="42" r="10" fill="#fbbf24" opacity="0.85"/>
        <!-- Hammurabi standing (left, receiving law) -->
        <rect x="315" y="35" width="38" height="78" rx="4" fill="#0f0a23" opacity="0.8"/>
        <circle cx="334" cy="35" r="12" fill="#1e1b4b" stroke="#d946ef" stroke-width="1" opacity="0.8"/>
        <!-- Arm reaching toward Shamash -->
        <path d="M353,55 Q390,48 430,50" fill="none" stroke="#d946ef" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        <!-- Cuneiform text columns on stele -->
        <g fill="none" stroke="#c4b5fd" stroke-width="1.2" opacity="0.6">
          <!-- Column 1 -->
          <line x1="295" y1="120" x2="360" y2="120"/><line x1="295" y1="134" x2="355" y2="134"/>
          <line x1="295" y1="148" x2="358" y2="148"/><line x1="295" y1="162" x2="350" y2="162"/>
          <line x1="295" y1="176" x2="357" y2="176"/><line x1="295" y1="190" x2="353" y2="190"/>
          <line x1="295" y1="204" x2="360" y2="204"/><line x1="295" y1="218" x2="352" y2="218"/>
          <line x1="295" y1="232" x2="355" y2="232"/><line x1="295" y1="246" x2="358" y2="246"/>
          <line x1="295" y1="260" x2="350" y2="260"/><line x1="295" y1="274" x2="356" y2="274"/>
          <line x1="295" y1="288" x2="353" y2="288"/><line x1="295" y1="302" x2="358" y2="302"/>
          <!-- Column 2 -->
          <line x1="385" y1="120" x2="500" y2="120"/><line x1="385" y1="134" x2="495" y2="134"/>
          <line x1="385" y1="148" x2="498" y2="148"/><line x1="385" y1="162" x2="490" y2="162"/>
          <line x1="385" y1="176" x2="497" y2="176"/><line x1="385" y1="190" x2="493" y2="190"/>
          <line x1="385" y1="204" x2="500" y2="204"/><line x1="385" y1="218" x2="492" y2="218"/>
          <line x1="385" y1="232" x2="495" y2="232"/><line x1="385" y1="246" x2="498" y2="246"/>
          <line x1="385" y1="260" x2="490" y2="260"/><line x1="385" y1="274" x2="496" y2="274"/>
          <line x1="385" y1="288" x2="493" y2="288"/><line x1="385" y1="302" x2="498" y2="302"/>
        </g>
        <!-- Wedge marks -->
        <g fill="#d946ef" opacity="0.55">
          <polygon points="295,120 302,117 302,123"/>
          <polygon points="295,148 302,145 302,151"/>
          <polygon points="295,176 302,173 302,179"/>
          <polygon points="385,120 392,117 392,123"/>
          <polygon points="385,148 392,145 392,151"/>
          <polygon points="385,176 392,173 392,179"/>
          <polygon points="385,204 392,201 392,207"/>
        </g>
        <!-- Purple aura glow on stele -->
        <rect x="270" y="65" width="260" height="265" rx="12" fill="none" stroke="#d946ef" stroke-width="6" opacity="0.12" filter="url(#blur2)"/>
        <!-- Stars -->
        <circle cx="80" cy="60" r="1.2" fill="#fff" opacity="0.4"/>
        <circle cx="700" cy="40" r="1.5" fill="#f0abfc" opacity="0.4"/>
        <circle cx="730" cy="100" r="1" fill="#fff" opacity="0.35"/>
        """
    },
    {
        "name": "iron_age",
        "bg_from": "#0a0500", "bg_to": "#150800",
        "glow": "#64748b",
        "title": "Thời Đại Đồ Sắt",
        "svg_body": """
        <defs>
          <radialGradient id="hotG" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.9"/>
            <stop offset="40%" stop-color="#dc2626" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#0a0500" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
          <filter id="blur3"><feGaussianBlur stdDeviation="1.5"/></filter>
        </defs>
        <!-- Dark smithy -->
        <rect width="800" height="400" fill="#0a0500"/>
        <!-- Forge glow -->
        <ellipse cx="400" cy="340" rx="380" ry="100" fill="url(#hotG)" filter="url(#blur1)"/>
        <!-- Anvil base -->
        <rect x="290" y="300" width="220" height="50" rx="6" fill="#1c1917"/>
        <!-- Anvil body -->
        <path d="M310,300 L490,300 L480,260 L320,260 Z" fill="#292524"/>
        <!-- Anvil horn -->
        <path d="M310,275 Q270,268 250,260 Q270,255 310,270 Z" fill="#1c1917"/>
        <!-- Red hot iron sword on anvil -->
        <rect x="330" y="242" width="180" height="22" rx="4" fill="#f97316"/>
        <rect x="330" y="242" width="180" height="22" rx="4" fill="#fbbf24" opacity="0.5"/>
        <!-- Sword tip glow -->
        <ellipse cx="510" cy="253" rx="25" ry="12" fill="#fde68a" opacity="0.8" filter="url(#blur3)"/>
        <!-- Hammer -->
        <rect x="335" y="195" width="90" height="50" rx="6" fill="#3c3533" transform="rotate(-25, 380, 220)"/>
        <line x1="408" y1="237" x2="470" y2="340" stroke="#57534e" stroke-width="14" stroke-linecap="round"/>
        <!-- Hands holding hammer (silhouette) -->
        <path d="M480,340 Q510,320 540,305" stroke="#1c0a00" stroke-width="24" fill="none" stroke-linecap="round"/>
        <!-- Sparks burst from impact -->
        <g opacity="0.95">
          <line x1="380" y1="242" x2="340" y2="190" stroke="#fde68a" stroke-width="2.5"/>
          <line x1="380" y1="242" x2="310" y2="210" stroke="#fbbf24" stroke-width="2"/>
          <line x1="380" y1="242" x2="420" y2="185" stroke="#f97316" stroke-width="2.5"/>
          <line x1="380" y1="242" x2="450" y2="200" stroke="#fde68a" stroke-width="2"/>
          <line x1="380" y1="242" x2="350" y2="175" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="380" y1="242" x2="290" y2="225" stroke="#f97316" stroke-width="2"/>
          <line x1="380" y1="242" x2="430" y2="175" stroke="#fde68a" stroke-width="1.5"/>
          <line x1="380" y1="242" x2="280" y2="200" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Spark glowing dots -->
        <circle cx="340" cy="190" r="4" fill="#fde68a" filter="url(#blur3)"/>
        <circle cx="420" cy="185" r="5" fill="#fbbf24" filter="url(#blur3)"/>
        <circle cx="310" cy="210" r="3.5" fill="#f97316" filter="url(#blur3)"/>
        <circle cx="450" cy="200" r="4" fill="#fde68a" filter="url(#blur3)"/>
        <circle cx="350" cy="175" r="3" fill="#fbbf24"/>
        <circle cx="290" cy="225" r="4" fill="#f97316" filter="url(#blur3)"/>
        <circle cx="430" cy="175" r="3" fill="#fde68a"/>
        <circle cx="280" cy="200" r="3.5" fill="#fbbf24" filter="url(#blur3)"/>
        <!-- Falling ember trails -->
        <circle cx="330" cy="215" r="2" fill="#fbbf24" opacity="0.8"/>
        <circle cx="320" cy="235" r="1.5" fill="#f97316" opacity="0.7"/>
        <circle cx="440" cy="210" r="2" fill="#fde68a" opacity="0.8"/>
        <circle cx="455" cy="228" r="1.5" fill="#fbbf24" opacity="0.65"/>
        <!-- Iron glow on hot sword -->
        <rect x="330" y="242" width="180" height="22" rx="4" fill="#fde68a" opacity="0.2" filter="url(#blur2)"/>
        <!-- Tools on wall background -->
        <line x1="100" y1="80" x2="100" y2="250" stroke="#3c3533" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
        <rect x="88" y="80" width="24" height="35" rx="4" fill="#3c3533" opacity="0.7"/>
        <line x1="150" y1="95" x2="150" y2="240" stroke="#3c3533" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
        <ellipse cx="150" cy="90" rx="15" ry="10" fill="#3c3533" opacity="0.7"/>
        """
    },
    {
        "name": "philosophy_math",
        "bg_from": "#030a14", "bg_to": "#061425",
        "glow": "#06b6d4",
        "title": "Triết Học & Toán Học",
        "svg_body": """
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#030a14" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Glow center -->
        <circle cx="400" cy="200" r="230" fill="url(#g1)" filter="url(#blur1)"/>
        <!-- Sacred geometry circles (Flower of Life base) -->
        <circle cx="400" cy="200" r="140" fill="none" stroke="#0e7490" stroke-width="1.5" opacity="0.35"/>
        <circle cx="400" cy="200" r="105" fill="none" stroke="#0891b2" stroke-width="1" opacity="0.4"/>
        <circle cx="400" cy="200" r="70" fill="none" stroke="#06b6d4" stroke-width="1.5" opacity="0.5"/>
        <circle cx="400" cy="130" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <circle cx="460" cy="165" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <circle cx="460" cy="235" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <circle cx="400" cy="270" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <circle cx="340" cy="235" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <circle cx="340" cy="165" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.35"/>
        <!-- Outer decorative circles -->
        <circle cx="400" cy="200" r="180" fill="none" stroke="#0e7490" stroke-width="1" stroke-dasharray="6,4" opacity="0.4"/>
        <!-- Fibonacci spiral -->
        <path d="M400,200 A10,10 0 0,1 410,200 A20,20 0 0,1 400,220 A40,40 0 0,1 360,200 A80,80 0 0,1 400,120 A160,160 0 0,1 560,200" fill="none" stroke="#22d3ee" stroke-width="3" opacity="0.8"/>
        <!-- Pentagon / golden ratio lines -->
        <polygon points="400,62 513,143 470,275 330,275 287,143" fill="none" stroke="#06b6d4" stroke-width="1.5" opacity="0.5"/>
        <!-- Euler's formula text -->
        <text x="400" y="205" text-anchor="middle" font-family="serif" font-size="28" fill="#22d3ee" opacity="0.9">e^iπ + 1 = 0</text>
        <!-- Pi symbol -->
        <text x="180" y="140" font-family="serif" font-size="55" fill="#0891b2" opacity="0.45">π</text>
        <!-- Infinity symbol -->
        <text x="560" y="260" font-family="serif" font-size="50" fill="#0891b2" opacity="0.4">∞</text>
        <!-- Delta / triangle -->
        <text x="175" y="280" font-family="serif" font-size="45" fill="#0e7490" opacity="0.45">Δ</text>
        <!-- Sigma -->
        <text x="570" y="155" font-family="serif" font-size="45" fill="#0e7490" opacity="0.4">Σ</text>
        <!-- Center dot -->
        <circle cx="400" cy="200" r="8" fill="#22d3ee" opacity="0.9"/>
        <circle cx="400" cy="200" r="4" fill="#fff" opacity="0.9"/>
        <!-- Star points on outer ring -->
        <circle cx="400" cy="62" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="513" cy="143" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="470" cy="275" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="330" cy="275" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="287" cy="143" r="3" fill="#22d3ee" opacity="0.8"/>
        <!-- Outer stars -->
        <circle cx="60" cy="40" r="1.2" fill="#fff" opacity="0.4"/>
        <circle cx="720" cy="50" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="50" cy="330" r="1.5" fill="#22d3ee" opacity="0.4"/>
        <circle cx="730" cy="340" r="1.2" fill="#22d3ee" opacity="0.4"/>
        """
    },
    {
        "name": "roman_empire",
        "bg_from": "#1a0000", "bg_to": "#2d0808",
        "glow": "#ef4444",
        "title": "Đế Quốc La Mã",
        "svg_body": """
        <defs>
          <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3b0764"/>
            <stop offset="40%" stop-color="#7c2d12"/>
            <stop offset="80%" stop-color="#c2410c"/>
            <stop offset="100%" stop-color="#f97316"/>
          </linearGradient>
          <radialGradient id="sunG" cx="55%" cy="75%" r="35%">
            <stop offset="0%" stop-color="#fde68a" stop-opacity="0.9"/>
            <stop offset="60%" stop-color="#f97316" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#1a0000" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
        </defs>
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#skyG)"/>
        <!-- Sunset glow -->
        <ellipse cx="440" cy="390" rx="350" ry="100" fill="url(#sunG)" filter="url(#blur1)"/>
        <!-- Cloud wisps -->
        <path d="M100,80 Q150,65 200,80 Q175,90 140,88 Q120,85 100,80 Z" fill="#4c1d95" opacity="0.4"/>
        <path d="M550,60 Q600,48 660,62 Q635,72 595,70 Q570,67 550,60 Z" fill="#4c1d95" opacity="0.35"/>
        <!-- Ground -->
        <rect x="0" y="335" width="800" height="65" fill="#1c0a00"/>
        <!-- Colosseum far background (silhouette) -->
        <rect x="50" y="190" width="700" height="165" rx="5" fill="#2c1800" opacity="0.6"/>
        <!-- Colosseum outer wall arches tier 1 -->
        <g fill="none">
          <rect x="50" y="190" width="700" height="165" rx="5" fill="#3c2000" opacity="0.85"/>
          <!-- Arch openings tier 1 (ground floor) -->
          <g fill="#1c0a00" opacity="0.9">
            <path d="M80,290 L80,355 L115,355 L115,300 Q97,290 80,290 Z"/>
            <path d="M125,290 L125,355 L160,355 L160,300 Q142,290 125,290 Z"/>
            <path d="M170,290 L170,355 L205,355 L205,300 Q187,290 170,290 Z"/>
            <path d="M215,290 L215,355 L250,355 L250,300 Q232,290 215,290 Z"/>
            <path d="M260,290 L260,355 L295,355 L295,300 Q277,290 260,290 Z"/>
            <path d="M305,290 L305,355 L340,355 L340,300 Q322,290 305,290 Z"/>
            <path d="M350,290 L350,355 L385,355 L385,300 Q367,290 350,290 Z"/>
            <path d="M395,290 L395,355 L430,355 L430,300 Q412,290 395,290 Z"/>
            <path d="M440,290 L440,355 L475,355 L475,300 Q457,290 440,290 Z"/>
            <path d="M485,290 L485,355 L520,355 L520,300 Q502,290 485,290 Z"/>
            <path d="M530,290 L530,355 L565,355 L565,300 Q547,290 530,290 Z"/>
            <path d="M575,290 L575,355 L610,355 L610,300 Q592,290 575,290 Z"/>
            <path d="M620,290 L620,355 L655,355 L655,300 Q637,290 620,290 Z"/>
            <path d="M665,290 L665,355 L700,355 L700,300 Q682,290 665,290 Z"/>
          </g>
          <!-- Arch openings tier 2 -->
          <g fill="#1c0a00" opacity="0.8">
            <path d="M80,230 L80,288 L115,288 L115,240 Q97,230 80,230 Z"/>
            <path d="M125,230 L125,288 L160,288 L160,240 Q142,230 125,230 Z"/>
            <path d="M170,230 L170,288 L205,288 L205,240 Q187,230 170,230 Z"/>
            <path d="M260,230 L260,288 L295,288 L295,240 Q277,230 260,230 Z"/>
            <path d="M350,230 L350,288 L385,288 L385,240 Q367,230 350,230 Z"/>
            <path d="M440,230 L440,288 L475,288 L475,240 Q457,230 440,230 Z"/>
            <path d="M530,230 L530,288 L565,288 L565,240 Q547,230 530,230 Z"/>
            <path d="M620,230 L620,288 L655,288 L655,240 Q637,230 620,230 Z"/>
          </g>
          <!-- Arch openings tier 3 -->
          <g fill="#150800" opacity="0.7">
            <path d="M115,196 L115,228 L160,228 L160,202 Q137,196 115,196 Z"/>
            <path d="M215,196 L215,228 L260,228 L260,202 Q237,196 215,196 Z"/>
            <path d="M395,196 L395,228 L440,228 L440,202 Q417,196 395,196 Z"/>
            <path d="M575,196 L575,228 L620,228 L620,202 Q597,196 575,196 Z"/>
            <path d="M665,196 L665,228 L700,228 L700,202 Q682,196 665,196 Z"/>
          </g>
        </g>
        <!-- Colosseum top edge detail -->
        <rect x="50" y="185" width="700" height="12" rx="3" fill="#4a2500" opacity="0.7"/>
        <!-- Silhouette figures walking -->
        <circle cx="200" cy="340" r="8" fill="#1c0a00"/>
        <rect x="196" y="348" width="8" height="18" rx="3" fill="#1c0a00"/>
        <circle cx="250" cy="338" r="7" fill="#1c0a00"/>
        <rect x="247" y="345" width="7" height="16" rx="3" fill="#1c0a00"/>
        <circle cx="560" cy="342" r="8" fill="#1c0a00"/>
        <rect x="556" y="350" width="8" height="17" rx="3" fill="#1c0a00"/>
        <!-- Imperial eagle standard -->
        <line x1="400" y1="170" x2="400" y2="340" stroke="#b45309" stroke-width="4"/>
        <path d="M375,180 Q400,165 425,180 Q415,195 400,200 Q385,195 375,180 Z" fill="#d97706" opacity="0.85"/>
        <!-- Standard crossbar -->
        <line x1="375" y1="215" x2="425" y2="215" stroke="#b45309" stroke-width="3"/>
        <!-- SPQR text on standard -->
        <text x="400" y="213" text-anchor="middle" font-family="serif" font-size="11" fill="#fde68a" opacity="0.8">SPQR</text>
        """
    },
    {
        "name": "maya_song_dynasty",
        "bg_from": "#030a14", "bg_to": "#061422",
        "glow": "#0ea5e9",
        "title": "Maya & Nhà Tống",
        "svg_body": """
        <defs>
          <linearGradient id="splitG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#0a1a0a"/>
            <stop offset="50%" stop-color="#030a14"/>
            <stop offset="100%" stop-color="#0a0a1a"/>
          </linearGradient>
          <radialGradient id="moonG" cx="75%" cy="30%" r="25%">
            <stop offset="0%" stop-color="#dbeafe" stop-opacity="0.9"/>
            <stop offset="70%" stop-color="#0ea5e9" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#030a14" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="starsG" cx="25%" cy="35%" r="30%">
            <stop offset="0%" stop-color="#fde68a" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#030a14" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <!-- Background -->
        <rect width="800" height="400" fill="url(#splitG)"/>
        <!-- Divider line in center -->
        <line x1="400" y1="0" x2="400" y2="400" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="8,6" opacity="0.4"/>
        <!-- LEFT SIDE: Maya pyramid in misty jungle -->
        <!-- Stars left -->
        <circle cx="50" cy="30" r="1.2" fill="#fde68a" opacity="0.8"/>
        <circle cx="100" cy="55" r="1" fill="#fff" opacity="0.6"/>
        <circle cx="180" cy="25" r="1.5" fill="#fde68a" opacity="0.7"/>
        <circle cx="280" cy="40" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="60" cy="100" r="0.8" fill="#fff" opacity="0.5"/>
        <circle cx="350" cy="60" r="1.2" fill="#fde68a" opacity="0.6"/>
        <!-- Maya sky glow -->
        <ellipse cx="200" cy="250" rx="200" ry="150" fill="url(#starsG)" filter="url(#blur1)"/>
        <!-- Jungle trees left -->
        <rect x="0" y="230" width="18" height="170" fill="#0a2d0a"/>
        <ellipse cx="9" cy="225" rx="35" ry="22" fill="#0d3b0d" opacity="0.85"/>
        <rect x="30" y="250" width="14" height="150" fill="#0a2d0a"/>
        <ellipse cx="37" cy="245" rx="28" ry="18" fill="#0d3b0d" opacity="0.8"/>
        <rect x="330" y="240" width="16" height="160" fill="#0a2d0a"/>
        <ellipse cx="338" cy="235" rx="30" ry="19" fill="#0d3b0d" opacity="0.8"/>
        <!-- Mayan pyramid (step pyramid) -->
        <g fill="#163a22" stroke="#1d5c30" stroke-width="1.5">
          <!-- Base -->
          <rect x="75" y="295" width="250" height="80" rx="3"/>
          <!-- Step 1 -->
          <rect x="100" y="258" width="200" height="40" rx="3"/>
          <!-- Step 2 -->
          <rect x="125" y="225" width="150" height="36" rx="3"/>
          <!-- Step 3 -->
          <rect x="150" y="197" width="100" height="31" rx="3"/>
          <!-- Temple on top -->
          <rect x="168" y="165" width="64" height="35" rx="2" fill="#1a4a28"/>
          <!-- Pyramid roof -->
          <polygon points="168,165 232,165 200,140" fill="#1d5c30"/>
        </g>
        <!-- Pyramid highlight edges -->
        <g fill="none" stroke="#22c55e" stroke-width="0.8" opacity="0.4">
          <line x1="75" y1="295" x2="325" y2="295"/>
          <line x1="100" y1="258" x2="300" y2="258"/>
          <line x1="125" y1="225" x2="275" y2="225"/>
          <line x1="150" y1="197" x2="250" y2="197"/>
        </g>
        <!-- Mist at pyramid base -->
        <ellipse cx="200" cy="310" rx="180" ry="25" fill="#0d3b0d" opacity="0.5" filter="url(#blur2)"/>
        <!-- RIGHT SIDE: Song Dynasty harbor with lanterns -->
        <!-- Moon right -->
        <circle cx="600" cy="80" r="65" fill="url(#moonG)" filter="url(#blur1)"/>
        <circle cx="600" cy="80" r="42" fill="#dbeafe" opacity="0.88"/>
        <!-- Stars right -->
        <circle cx="460" cy="40" r="1.2" fill="#fff" opacity="0.6"/>
        <circle cx="520" cy="25" r="1" fill="#fff" opacity="0.7"/>
        <circle cx="700" cy="35" r="1.5" fill="#bfdbfe" opacity="0.7"/>
        <circle cx="760" cy="60" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="480" cy="100" r="0.8" fill="#fff" opacity="0.4"/>
        <!-- River water right -->
        <path d="M400,330 Q550,310 800,330 L800,400 L400,400 Z" fill="#082f49" opacity="0.85"/>
        <!-- Water shimmer -->
        <path d="M410,340 Q500,330 600,340 Q700,330 800,340" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5"/>
        <path d="M410,355 Q500,345 600,355 Q700,345 800,355" fill="none" stroke="#7dd3fc" stroke-width="1" opacity="0.4"/>
        <!-- Pagoda building -->
        <rect x="440" y="220" width="100" height="115" rx="3" fill="#1e293b"/>
        <!-- Pagoda windows -->
        <rect x="458" y="240" width="25" height="30" rx="2" fill="#0ea5e9" opacity="0.4"/>
        <rect x="500" y="240" width="25" height="30" rx="2" fill="#0ea5e9" opacity="0.4"/>
        <!-- Tiered pagoda roofs -->
        <path d="M420,220 L580,220 L560,198 L440,198 Z" fill="#0f172a"/>
        <path d="M430,220 L570,220 L555,202 L445,202 Z" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.5"/>
        <path d="M435,198 L565,198 L548,178 L452,178 Z" fill="#0f172a"/>
        <path d="M448,178 L552,178 L538,162 L462,162 Z" fill="#1e293b"/>
        <path d="M458,162 L542,162 L530,148 L470,148 Z" fill="#0f172a"/>
        <path d="M468,148 L532,148 L500,135 Z" fill="#1e293b"/>
        <!-- Pagoda ridge ornament -->
        <circle cx="500" cy="132" r="5" fill="#38bdf8" opacity="0.85"/>
        <!-- Second smaller pagoda -->
        <rect x="680" y="260" width="70" height="80" rx="3" fill="#1e293b"/>
        <path d="M665,260 L755,260 L742,244 L678,244 Z" fill="#0f172a"/>
        <path d="M672,244 L728,244 L718,232 L682,232 Z" fill="#1e293b"/>
        <path d="M678,232 L722,232 L700,218 Z" fill="#0f172a"/>
        <!-- Lanterns hanging from pagoda -->
        <g fill="#ef4444" opacity="0.9">
          <ellipse cx="470" cy="215" rx="7" ry="10"/>
          <ellipse cx="490" cy="215" rx="7" ry="10"/>
          <ellipse cx="510" cy="215" rx="7" ry="10"/>
          <ellipse cx="530" cy="215" rx="7" ry="10"/>
        </g>
        <g stroke="#fbbf24" stroke-width="1" opacity="0.7">
          <line x1="470" y1="205" x2="470" y2="215"/>
          <line x1="490" y1="205" x2="490" y2="215"/>
          <line x1="510" y1="205" x2="510" y2="215"/>
          <line x1="530" y1="205" x2="530" y2="215"/>
        </g>
        <!-- Lantern glow -->
        <circle cx="490" cy="215" r="20" fill="#ef4444" opacity="0.15" filter="url(#blur2)"/>
        <circle cx="510" cy="215" r="18" fill="#fbbf24" opacity="0.12" filter="url(#blur2)"/>
        <!-- Boat on river -->
        <path d="M430,345 Q500,335 560,345 L555,365 L435,365 Z" fill="#1e293b"/>
        <line x1="495" y1="335" x2="495" y2="300" stroke="#78716c" stroke-width="3"/>
        <path d="M495,300 Q470,315 495,325 Z" fill="#dbeafe" opacity="0.7"/>
        <!-- Lantern reflections in water -->
        <ellipse cx="490" cy="350" rx="8" ry="3" fill="#ef4444" opacity="0.3"/>
        <ellipse cx="510" cy="352" rx="6" ry="2.5" fill="#fbbf24" opacity="0.25"/>
        <!-- Moon reflection in river -->
        <ellipse cx="600" cy="360" rx="40" ry="8" fill="#bfdbfe" opacity="0.2"/>
        """
    },
    {
        "name": "crusades_renaissance",
        "bg_from": "#08041a", "bg_to": "#0f0828",
        "glow": "#a855f7",
        "title": "Phục Hưng",
        "svg_body": """
        <defs>
          <radialGradient id="g1" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#08041a" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="candleG" cx="70%" cy="65%" r="30%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.7"/>
            <stop offset="70%" stop-color="#f97316" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#08041a" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <!-- Background -->
        <rect width="800" height="400" fill="#08041a"/>
        <!-- Background glow -->
        <ellipse cx="400" cy="200" rx="350" ry="200" fill="url(#g1)" filter="url(#blur1)"/>
        <!-- Candle glow -->
        <circle cx="560" cy="250" r="120" fill="url(#candleG)" filter="url(#blur1)"/>
        <!-- Stars outside window -->
        <circle cx="80" cy="40" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="140" cy="70" r="1" fill="#fff" opacity="0.7"/>
        <circle cx="50" cy="120" r="1.2" fill="#c4b5fd" opacity="0.7"/>
        <circle cx="700" cy="50" r="2" fill="#fff" opacity="0.6"/>
        <circle cx="740" cy="90" r="1.2" fill="#fff" opacity="0.7"/>
        <circle cx="660" cy="30" r="1.5" fill="#c4b5fd" opacity="0.6"/>
        <!-- Window frame with stars visible -->
        <rect x="50" y="50" width="200" height="220" rx="8" fill="#0f0828"/>
        <rect x="50" y="50" width="200" height="220" rx="8" fill="none" stroke="#4c1d95" stroke-width="3"/>
        <!-- Window cross -->
        <line x1="150" y1="50" x2="150" y2="270" stroke="#4c1d95" stroke-width="2"/>
        <line x1="50" y1="160" x2="250" y2="160" stroke="#4c1d95" stroke-width="2"/>
        <!-- Star field in window -->
        <circle cx="100" cy="90" r="1.5" fill="#fff" opacity="0.9"/>
        <circle cx="180" cy="80" r="1" fill="#fff" opacity="0.8"/>
        <circle cx="85" cy="130" r="1.2" fill="#c4b5fd" opacity="0.9"/>
        <circle cx="200" cy="120" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="130" cy="200" r="1" fill="#fff" opacity="0.7"/>
        <circle cx="80" cy="220" r="1.2" fill="#c4b5fd" opacity="0.8"/>
        <circle cx="210" cy="235" r="1" fill="#fff" opacity="0.75"/>
        <!-- Constellation lines -->
        <line x1="100" y1="90" x2="85" y2="130" stroke="#c4b5fd" stroke-width="0.8" opacity="0.4"/>
        <line x1="85" y1="130" x2="130" y2="200" stroke="#c4b5fd" stroke-width="0.8" opacity="0.4"/>
        <line x1="180" y1="80" x2="200" y2="120" stroke="#c4b5fd" stroke-width="0.8" opacity="0.35"/>
        <!-- Telescope pointed at window/stars -->
        <path d="M280,295 L150,180" stroke="#78716c" stroke-width="12" stroke-linecap="round"/>
        <!-- Lens cap -->
        <ellipse cx="148" cy="178" rx="16" ry="10" fill="#57534e" transform="rotate(-40,148,178)"/>
        <!-- Eyepiece -->
        <ellipse cx="280" cy="297" rx="12" ry="8" fill="#3c3533" transform="rotate(-40,280,297)"/>
        <!-- Telescope tripod legs -->
        <line x1="265" y1="315" x2="230" y2="380" stroke="#57534e" stroke-width="5" stroke-linecap="round"/>
        <line x1="295" y1="320" x2="310" y2="385" stroke="#57534e" stroke-width="5" stroke-linecap="round"/>
        <!-- Parchment sketch (da Vinci style) -->
        <rect x="370" y="100" width="250" height="200" rx="8" fill="#fef3c7" transform="rotate(-5,495,200)"/>
        <rect x="370" y="100" width="250" height="200" rx="8" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.5" transform="rotate(-5,495,200)"/>
        <!-- Vitruvian man sketch outline -->
        <g transform="rotate(-5,495,200)" stroke="#92400e" stroke-width="1.5" fill="none" opacity="0.75">
          <!-- Circle -->
          <circle cx="495" cy="195" r="80"/>
          <!-- Square -->
          <rect x="435" y="140" width="120" height="120" rx="2"/>
          <!-- Human figure simplified -->
          <circle cx="495" cy="155" r="14"/>
          <line x1="495" y1="169" x2="495" y2="225"/>
          <line x1="458" y1="185" x2="532" y2="185"/>
          <line x1="495" y1="225" x2="472" y2="258"/>
          <line x1="495" y1="225" x2="518" y2="258"/>
          <!-- Arms spread -->
          <line x1="415" y1="185" x2="575" y2="185"/>
        </g>
        <!-- Mirror writing (da Vinci style) -->
        <g font-family="serif" font-size="9" fill="#92400e" opacity="0.5" transform="rotate(-5,495,200) scale(-1,1) translate(-990,0)">
          <text x="450" y="278">ɘɿuƚɒn ɘʜƚ lo vbuƚƨ</text>
          <text x="452" y="290">ɘlɔɿiɔ noƚlob ɘʜƚ</text>
        </g>
        <!-- Candle on desk -->
        <rect x="545" y="295" width="20" height="75" rx="4" fill="#fef9c3"/>
        <ellipse cx="555" cy="295" rx="10" ry="5" fill="#fef3c7"/>
        <path d="M549,295 Q552,270 555,260 Q558,270 561,295 Z" fill="#fde68a" opacity="0.9"/>
        <path d="M553,295 Q554,276 555,268 Q556,276 557,295 Z" fill="#fff" opacity="0.8"/>
        <!-- Candle glow aura -->
        <circle cx="555" cy="268" r="30" fill="#fbbf24" opacity="0.15" filter="url(#blur2)"/>
        <!-- Lute beside -->
        <ellipse cx="690" cy="290" rx="35" ry="45" fill="#3c2e18" opacity="0.85"/>
        <line x1="690" y1="245" x2="690" y2="180" stroke="#78716c" stroke-width="5" stroke-linecap="round"/>
        <!-- Lute strings -->
        <g stroke="#d4a574" stroke-width="0.8" opacity="0.7">
          <line x1="672" y1="270" x2="672" y2="310"/>
          <line x1="682" y1="258" x2="682" y2="322"/>
          <line x1="690" y1="255" x2="690" y2="325"/>
          <line x1="698" y1="258" x2="698" y2="322"/>
          <line x1="708" y1="270" x2="708" y2="310"/>
        </g>
        """
    },
    {
        "name": "modern_history",
        "bg_from": "#010308", "bg_to": "#020610",
        "glow": "#fbbf24",
        "title": "Lịch Sử Hiện Đại",
        "svg_body": """
        <defs>
          <radialGradient id="earthG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.9"/>
            <stop offset="70%" stop-color="#1e40af" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.5"/>
          </radialGradient>
          <radialGradient id="glowG" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#010308" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="holoG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#010308" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="blur3"><feGaussianBlur stdDeviation="2"/>
          </filter>
        </defs>
        <!-- Deep space -->
        <rect width="800" height="400" fill="#010308"/>
        <!-- Stars field -->
        <circle cx="50" cy="30" r="1.2" fill="#fff" opacity="0.8"/>
        <circle cx="100" cy="70" r="0.8" fill="#fff" opacity="0.6"/>
        <circle cx="180" cy="25" r="1.5" fill="#fff" opacity="0.9"/>
        <circle cx="250" cy="60" r="1" fill="#fff" opacity="0.7"/>
        <circle cx="330" cy="35" r="1.2" fill="#c4b5fd" opacity="0.7"/>
        <circle cx="420" cy="18" r="0.8" fill="#fff" opacity="0.6"/>
        <circle cx="510" cy="40" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="600" cy="25" r="1" fill="#fde68a" opacity="0.7"/>
        <circle cx="680" cy="55" r="1.2" fill="#fff" opacity="0.7"/>
        <circle cx="740" cy="30" r="0.8" fill="#fff" opacity="0.6"/>
        <circle cx="60" cy="150" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="730" cy="160" r="1.2" fill="#fff" opacity="0.55"/>
        <circle cx="80" cy="340" r="1.5" fill="#fff" opacity="0.4"/>
        <circle cx="720" cy="360" r="1" fill="#c4b5fd" opacity="0.5"/>
        <circle cx="160" cy="380" r="0.8" fill="#fff" opacity="0.4"/>
        <circle cx="640" cy="380" r="1" fill="#fff" opacity="0.45"/>
        <!-- Nebula wisps -->
        <ellipse cx="150" cy="200" rx="120" ry="60" fill="#4c1d95" opacity="0.08" filter="url(#blur1)"/>
        <ellipse cx="650" cy="300" rx="100" ry="50" fill="#1d4ed8" opacity="0.08" filter="url(#blur1)"/>
        <!-- Earth globe -->
        <circle cx="580" cy="280" r="95" fill="url(#earthG)"/>
        <!-- Continents -->
        <path d="M535,215 Q545,208 558,210 Q572,220 575,235 Q562,240 548,235 Q538,228 535,215 Z" fill="#166534" opacity="0.8"/>
        <path d="M565,248 Q580,242 592,250 Q598,265 585,275 Q575,270 565,260 Z" fill="#15803d" opacity="0.75"/>
        <path d="M530,255 Q542,250 550,258 Q548,272 538,275 Q528,268 530,255 Z" fill="#166534" opacity="0.7"/>
        <path d="M560,295 Q572,290 580,300 Q575,315 565,318 Q555,310 560,295 Z" fill="#15803d" opacity="0.65"/>
        <!-- Earth atmosphere glow -->
        <circle cx="580" cy="280" r="95" fill="none" stroke="#38bdf8" stroke-width="6" opacity="0.4"/>
        <circle cx="580" cy="280" r="105" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.2" filter="url(#blur3)"/>
        <!-- Satellite orbit ring -->
        <ellipse cx="580" cy="280" rx="130" ry="40" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.5" transform="rotate(-30,580,280)"/>
        <!-- Small satellite -->
        <g transform="rotate(-30,580,280)">
          <rect x="700" y="262" width="16" height="10" rx="2" fill="#f1f5f9"/>
          <line x1="700" y1="267" x2="680" y2="267" stroke="#60a5fa" stroke-width="3"/>
          <line x1="716" y1="267" x2="736" y2="267" stroke="#60a5fa" stroke-width="3"/>
        </g>
        <!-- Astronaut floating in foreground -->
        <!-- Space suit body -->
        <ellipse cx="230" cy="220" rx="55" ry="65" fill="#e2e8f0"/>
        <!-- Helmet -->
        <circle cx="230" cy="148" r="42" fill="#f1f5f9"/>
        <circle cx="230" cy="148" r="38" fill="#0ea5e9" opacity="0.3"/>
        <circle cx="230" cy="148" r="30" fill="#0c1a2e" opacity="0.9"/>
        <!-- Visor reflection -->
        <ellipse cx="220" cy="138" rx="12" ry="8" fill="#fff" opacity="0.25" transform="rotate(-20,220,138)"/>
        <!-- HELMET glow -->
        <circle cx="230" cy="148" r="42" fill="none" stroke="#e2e8f0" stroke-width="4" opacity="0.85"/>
        <!-- Arms -->
        <path d="M175,195 Q155,210 148,235 Q155,245 168,238 Q178,218 190,205 Z" fill="#e2e8f0"/>
        <path d="M285,195 Q305,210 312,235 Q305,245 292,238 Q282,218 270,205 Z" fill="#e2e8f0"/>
        <!-- Gloves -->
        <circle cx="150" cy="240" r="18" fill="#cbd5e1"/>
        <circle cx="310" cy="240" r="18" fill="#cbd5e1"/>
        <!-- Legs -->
        <path d="M195,275 Q185,310 183,345 L210,345 Q215,312 218,280 Z" fill="#e2e8f0"/>
        <path d="M265,275 Q275,310 277,345 L250,345 Q245,312 242,280 Z" fill="#e2e8f0"/>
        <!-- Boots -->
        <ellipse cx="196" cy="348" rx="22" ry="12" fill="#cbd5e1"/>
        <ellipse cx="264" cy="348" rx="22" ry="12" fill="#cbd5e1"/>
        <!-- Spacesuit patches/details -->
        <circle cx="215" cy="215" r="8" fill="#1d4ed8" opacity="0.7"/>
        <circle cx="245" cy="215" r="6" fill="#dc2626" opacity="0.6"/>
        <rect x="215" y="235" width="30" height="18" rx="3" fill="#334155" opacity="0.6"/>
        <!-- Tether cord -->
        <path d="M175,205 Q100,180 60,200" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,3" opacity="0.6"/>
        <!-- Hologram network -->
        <g opacity="0.7">
          <!-- Hologram nodes -->
          <circle cx="120" cy="100" r="5" fill="#06b6d4" filter="url(#blur3)"/>
          <circle cx="170" cy="60" r="4" fill="#06b6d4" filter="url(#blur3)"/>
          <circle cx="60" cy="75" r="3.5" fill="#22d3ee" filter="url(#blur3)"/>
          <!-- Connections -->
          <line x1="120" y1="100" x2="170" y2="60" stroke="#06b6d4" stroke-width="1" opacity="0.6"/>
          <line x1="120" y1="100" x2="60" y2="75" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
          <line x1="170" y1="60" x2="60" y2="75" stroke="#06b6d4" stroke-width="0.8" opacity="0.45"/>
          <!-- Additional nodes -->
          <circle cx="85" cy="130" r="3" fill="#7c3aed" filter="url(#blur3)"/>
          <line x1="60" y1="75" x2="85" y2="130" stroke="#7c3aed" stroke-width="0.8" opacity="0.45"/>
          <line x1="120" y1="100" x2="85" y2="130" stroke="#7c3aed" stroke-width="0.8" opacity="0.4"/>
        </g>
        <!-- Solar panels on left (renewable energy) -->
        <rect x="30" y="290" width="60" height="40" rx="3" fill="#1d4ed8" opacity="0.8"/>
        <line x1="30" y1="310" x2="90" y2="310" stroke="#3b82f6" stroke-width="1" opacity="0.6"/>
        <line x1="30" y1="296" x2="90" y2="296" stroke="#3b82f6" stroke-width="1" opacity="0.6"/>
        <line x1="60" y1="290" x2="60" y2="330" stroke="#3b82f6" stroke-width="1" opacity="0.6"/>
        <!-- Wind turbine silhouette right -->
        <line x1="750" y1="150" x2="750" y2="360" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
        <g transform="rotate(30,750,150)">
          <line x1="750" y1="150" x2="750" y2="90" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
        </g>
        <g transform="rotate(150,750,150)">
          <line x1="750" y1="150" x2="750" y2="90" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
        </g>
        <g transform="rotate(270,750,150)">
          <line x1="750" y1="150" x2="750" y2="90" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
        </g>
        <circle cx="750" cy="150" r="7" fill="#94a3b8"/>
        <!-- Glow from astronaut/earth -->
        <ellipse cx="400" cy="260" rx="380" ry="150" fill="url(#glowG)" filter="url(#blur1)" opacity="0.3"/>
        """
    },
]

def build_html(image_info):
    """Build an HTML file with the SVG artwork for a given image."""
    bg_from = image_info["bg_from"]
    bg_to = image_info["bg_to"]
    svg_body = image_info["svg_body"]
    title = image_info["title"]

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{
    width: 800px; height: 400px; overflow: hidden;
    background: linear-gradient(135deg, {bg_from} 0%, {bg_to} 100%);
  }}
  svg {{ width: 800px; height: 400px; display: block; }}
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
  <defs>
    <linearGradient id="bgMain" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{bg_from}"/>
      <stop offset="100%" stop-color="{bg_to}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#bgMain)"/>
  {svg_body}
</svg>
</body>
</html>"""


def render_png(html_path, output_path):
    """Render an HTML file to a PNG using Edge Headless."""
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        f"--screenshot={output_path}",
        "--window-size=800,400",
        "--hide-scrollbars",
        f"file:///{html_path.replace(chr(92), '/')}"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    return os.path.exists(output_path)


def main():
    os.makedirs(TEMP_DIR, exist_ok=True)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    success = []
    failed = []

    for img_info in IMAGES:
        name = img_info["name"]
        html_content = build_html(img_info)
        html_path = os.path.join(TEMP_DIR, f"{name}.html")
        output_path = os.path.join(OUTPUT_DIR, f"{name}.png")

        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)

        print(f"Rendering {name}.png ...", end=" ", flush=True)
        ok = render_png(html_path, output_path)
        if ok:
            size = os.path.getsize(output_path)
            print(f"OK ({size:,} bytes)")
            success.append(name)
        else:
            print("FAILED")
            failed.append(name)

    # Cleanup temp dir
    shutil.rmtree(TEMP_DIR, ignore_errors=True)

    print(f"\nDone! {len(success)}/{len(IMAGES)} images rendered successfully.")
    if failed:
        print(f"Failed: {failed}")
    else:
        print("All images generated successfully!")


if __name__ == "__main__":
    main()
