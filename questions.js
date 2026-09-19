const examData = {
    maDe: "DE19TOAN10PSO19",
    title: "ĐỀ SỐ 19 - TOÁN 10. ÔN TẬP HỌC KÌ 1",
    password: "",
    timeLimitMinutes: 90,
    
    // Cấu hình thời gian MỞ và ĐÓNG bài thi (Định dạng: YYYY-MM-DDTHH:mm:ss)
    examStartTimeStr: "2026-09-18T00:00:00",
    examEndTimeStr: "2026-09-25T23:59:59",
    
    images: {


        "img_1": "",
        "img_2": "",
        "img_3": "",
        "img_4": "",
        "img_5": "",
        "img_6": "",
        "img_7": "",
        "img_8": "",
        "img_9": "",
        "img_10": "",
        "img_11": "",
        "img_12": "",
        "img_13": "",
        "img_14": "",
        "img_15": "",
        "img_16": "",
        "img_17": "",
        "img_18": "",
        "img_19": "",
        "img_20": "https://i.ibb.co/JwbRB3gJ/c20.png",
        "img_21": "https://i.ibb.co/Q3wnKjrt/c21.png",
        "img_22": "https://i.ibb.co/gpQPgQP/c22.png",
        "img_23": "https://i.ibb.co/mVSHbbsX/c23.png",
        "img_24": "",
        "img_25": "https://i.ibb.co/kV7G04fz/c25.png",
        "img_26": "https://i.ibb.co/fVLWB7sm/c26.png",
        "img_27": "https://i.ibb.co/yF2xCnQM/c27.png",
        "img_28": "https://i.ibb.co/chczC3sK/c29.png",
        "img_29": "",
        "img_30": "https://i.ibb.co/zTKkL3t9/c30.png",
        "img_31": "",
        "img_32": "",
        "img_33": "",
        "img_34": "",
        "img_35": "",
        "img_36": "",
        "img_37": "",
        "img_38": "",
        "img_39": "",
        "img_40": "",
        "img_41": "",
        "img_42": "",
        "img_43": "https://i.ibb.co/XZq5tGZ5/c43.png"
    },
    questions: [
        // ==================== PHẦN 1. TRẮC NGHIỆM NHIỀU LỰA CHỌN (CÂU 1 - CÂU 31) ====================
        {
            id: 1,
            type: "multiple_choice",
            question: "Ký hiệu nào sau đây dùng để viết đúng mệnh đề: \"3 là một số tự nhiên\"?",
            imageKey: "img_1",
            options: [
                "$3 \\subset \\mathbb{N}$",
                "$3 \\in \\mathbb{N}$",
                "$3 < \\mathbb{N}$",
                "$3 \\le \\mathbb{N}$"
            ],
            correct: 1,
            explanation: "3 là một phần tử thuộc tập số tự nhiên $\\mathbb{N}$, do đó kí hiệu đúng là $3 \\in \\mathbb{N}$."
        },
        {
            id: 2,
            type: "multiple_choice",
            question: "Ký hiệu nào sau đây để chỉ $\\sqrt{5}$ không phải là một số hữu tỉ?",
            imageKey: "img_2",
            options: [
                "$\\sqrt{5} \\ne \\mathbb{Q}$",
                "$\\sqrt{5} \\notin \\mathbb{Q}$",
                "$\\sqrt{5} \\notin \\mathbb{Q}$",
                "$\\sqrt{5} \\subset \\mathbb{Q}$"
            ],
            correct: 1,
            explanation: "$\\sqrt{5}$ không thuộc tập số hữu tỉ $\\mathbb{Q}$, do đó kí hiệu đúng là $\\sqrt{5} \\notin \\mathbb{Q}$."
        },
        {
            id: 3,
            type: "multiple_choice",
            question: "Cho tập hợp $A = \\{x+1 \\mid x \\in \\mathbb{N}, x \\le 5\\}$. Tập hợp A là:",
            imageKey: "img_3",
            options: [
                "$A = \\{1; 2; 3; 4; 5\\}$",
                "$A = \\{0; 1; 2; 3; 4; 5; 6\\}$",
                "$A = \\{0; 1; 2; 3; 4; 5\\}$",
                "$A = \\{1; 2; 3; 4; 5; 6\\}$"
            ],
            correct: 3,
            explanation: "Vì $x \\in \\mathbb{N}$ và $x \\le 5 \\Rightarrow x \\in \\{0; 1; 2; 3; 4; 5\\}$. Khi đó $x + 1 \\in \\{1; 2; 3; 4; 5; 6\\}$."
        },
        {
            id: 4,
            type: "multiple_choice",
            question: "Hãy liệt kê các phần tử của tập hợp $X = \\{x \\in \\mathbb{Z} \\mid 2x^2 - 3x + 1 = 0\\}$.",
            imageKey: "img_4",
            options: [
                "$X = \\{0\\}$",
                "$X = \\{1\\}$",
                "$X = \\left\\{1; \\frac{1}{2}\\right\\}$",
                "$X = \\left\\{1; \\frac{3}{2}\\right\\}$"
            ],
            correct: 1,
            explanation: "Phương trình $2x^2 - 3x + 1 = 0$ có hai nghiệm $x = 1$ và $x = \\frac{1}{2}$. Vì $x \\in \\mathbb{Z}$ nên chỉ nhận $x = 1$. Vậy $X = \\{1\\}$."
        },
        {
            id: 5,
            type: "multiple_choice",
            question: "Cho tập hợp $X = \\{a; b; c\\}$. Số tập con có 2 phần tử của X là",
            imageKey: "img_5",
            options: [
                "4",
                "6",
                "8",
                "3"
            ],
            correct: 3,
            explanation: "Các tập con có 2 phần tử của X là: $\\{a; b\\}, \\{b; c\\}, \\{a; c\\}$. Số tập con là $C_3^2 = 3$."
        },
        {
            id: 6,
            type: "multiple_choice",
            question: "Cho tập hợp $X = \\{1; 5\\}$, $Y = \\{1; 3; 5\\}$. Tập $X \\cap Y$ là tập hợp nào sau đây?",
            imageKey: "img_6",
            options: [
                "$\\{1\\}$",
                "$\\{1; 3\\}$",
                "$\\{1; 3; 5\\}$",
                "$\\{1; 5\\}$"
            ],
            correct: 3,
            explanation: "Giao của hai tập hợp $X$ và $Y$ là tập gồm các phần tử thuộc cả hai tập: $X \\cap Y = \\{1; 5\\}$."
        },
        {
            id: 7,
            type: "multiple_choice",
            question: "Cho hai tập hợp $A = [-5; 3)$, $B = (1; +\\infty)$. Khi đó $A \\cap B$ là tập nào sau đây?",
            imageKey: "img_7",
            options: [
                "$(1; 3)$",
                "$(1; 3]$",
                "$[-5; +\\infty)$",
                "$[-5; 1]$"
            ],
            correct: 0,
            explanation: "Giao của hai khoảng là các số thực $x$ thỏa mãn đồng thời $-5 \\le x < 3$ và $x > 1$, suy ra $1 < x < 3$ tức khoảng $(1; 3)$."
        },
        {
            id: 8,
            type: "multiple_choice",
            question: "Cho tập hợp $X = \\{a; b\\}$, $Y = \\{a; b; c\\}$. $X \\cup Y$ là tập hợp nào sau đây?",
            imageKey: "img_8",
            options: [
                "$\\{a; b; c; d\\}$",
                "$\\{a; b\\}$",
                "$\\{c\\}$",
                "$\\{a; b; c\\}$"
            ],
            correct: 3,
            explanation: "Hợp của hai tập hợp chứa toàn bộ các phần tử thuộc $X$ hoặc $Y$. Vậy $X \\cup Y = \\{a; b; c\\}$."
        },
        {
            id: 9,
            type: "multiple_choice",
            question: "Cho tập hợp $A = (-\\infty; -1]$ và tập $B = (-2; +\\infty)$. Khi đó $A \\cup B$ là:",
            imageKey: "img_9",
            options: [
                "$(-2; +\\infty)$",
                "$(-2; -1]$",
                "$\\mathbb{R}$",
                "$\\emptyset$"
            ],
            correct: 2,
            explanation: "Biểu diễn trên trục số, hợp của hai khoảng phủ toàn bộ trục số thực $\\mathbb{R}$."
        },
        {
            id: 10,
            type: "multiple_choice",
            question: "Cho tập $X = \\{2; 4; 6; 9\\}$, $Y = \\{1; 2; 3; 4\\}$. Tập nào sau đây bằng tập $X \\setminus Y$?",
            imageKey: "img_10",
            options: [
                "$\\{1; 2; 3; 5\\}$",
                "$\\{1; 3; 6; 9\\}$",
                "$\\{6; 9\\}$",
                "$\\{1\\}$"
            ],
            correct: 2,
            explanation: "Tập hợp $X \\setminus Y$ gồm các phần tử thuộc $X$ nhưng không thuộc $Y$, đó là $\\{6; 9\\}$."
        },
        {
            id: 11,
            type: "multiple_choice",
            question: "Cho hai tập hợp $A = (1; 5]$; $B = (2; 7]$. Tập hợp $A \\setminus B$ là:",
            imageKey: "img_11",
            options: [
                "$(1; 2]$",
                "$(2; 5)$",
                "$(-1; 7]$",
                "$(-1; 2)$"
            ],
            correct: 0,
            explanation: "Loại bỏ các phần tử thuộc $B = (2; 7]$ ra khỏi $A = (1; 5]$, ta còn lại nửa khoảng $(1; 2]$."
        },
        {
            id: 12,
            type: "multiple_choice",
            question: "Cho hai tập hợp $X = \\{1; 2; 3; 4\\}$, $Y = \\{1; 2\\}$. $C_X Y$ là tập hợp sau đây?",
            imageKey: "img_12",
            options: [
                "$\\{1; 2\\}$",
                "$\\{1; 2; 3; 4\\}$",
                "$\\{3; 4\\}$",
                "$\\emptyset$"
            ],
            correct: 2,
            explanation: "Phần bù của $Y$ trong $X$ chính là $X \\setminus Y = \\{3; 4\\}$."
        },
        {
            id: 13,
            type: "multiple_choice",
            question: "Cho tập hợp $A = (2; +\\infty)$. Khi đó $C_{\\mathbb{R}} A$ là:",
            imageKey: "img_13",
            options: [
                "$[2; +\\infty)$",
                "$(2; +\\infty)$",
                "$(-\\infty; 2]$",
                "$(-\\infty; -2]$"
            ],
            correct: 2,
            explanation: "Phần bù của khoảng $(2; +\\infty)$ trên $\\mathbb{R}$ là nửa khoảng $(-\\infty; 2]$."
        },
        {
            id: 14,
            type: "multiple_choice",
            question: "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
            imageKey: "img_14",
            options: [
                "54",
                "40",
                "26",
                "68"
            ],
            correct: 1,
            explanation: "Số học sinh giỏi ít nhất một môn là $25 + 23 - 14 = 34$. Tổng số học sinh của lớp là $34 + 6 = 40$."
        },
        {
            id: 15,
            type: "multiple_choice",
            question: "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9 em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10A có bao nhiêu bạn học giỏi cả ba môn Toán, Lý, Hóa, biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong 3 môn Toán, Lý, Hóa?",
            imageKey: "img_15",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 2,
            explanation: "Theo công thức hợp 3 tập hợp: $N = n(T) + n(L) + n(H) - n(T \\cap L) - n(L \\cap H) - n(T \\cap H) + n(T \\cap L \\cap H)$. Ta có $45 = 25 + 23 + 20 - 11 - 8 - 9 + x \\Leftrightarrow 45 = 40 + x \\Leftrightarrow x = 5$."
        },
        {
            id: 16,
            type: "multiple_choice",
            question: "Điểm nào dưới đây thuộc miền nghiệm của bất phương trình $2x + y - 1 < 0$?",
            imageKey: "img_16",
            options: [
                "$Q(1; 1)$",
                "$M(1; -2)$",
                "$P(2; -2)$",
                "$N(1; 0)$"
            ],
            correct: 1,
            explanation: "Thay tọa độ $M(1; -2)$ vào bất phương trình: $2(1) + (-2) - 1 = -1 < 0$ (Đúng)."
        },
        {
            id: 17,
            type: "multiple_choice",
            question: "Cặp số $(1; -1)$ là nghiệm của bất phương trình nào sau đây?",
            imageKey: "img_17",
            options: [
                "$x + y - 3 > 0$",
                "$-x - y < 0$",
                "$x + 3y + 1 < 0$",
                "$-x - 3y - 1 < 0$"
            ],
            correct: 2,
            explanation: "Thay $x = 1, y = -1$ vào câu C: $1 + 3(-1) + 1 = -1 < 0$ (Đúng)."
        },
        {
            id: 18,
            type: "multiple_choice",
            question: "Cho bất phương trình $x - 2y + 5 > 0$ có tập nghiệm là S. Mệnh đề nào sau đây là đúng?",
            imageKey: "img_18",
            options: [
                "$(-2; 2) \\in S$",
                "$(2; 2) \\in S$",
                "$(-2; 4) \\in S$",
                "$(1; 3) \\in S$"
            ],
            correct: 1,
            explanation: "Thay $(2; 2)$ vào bất phương trình: $2 - 2(2) + 5 = 3 > 0$ (Mệnh đề đúng)."
        },
        {
            id: 19,
            type: "multiple_choice",
            question: "Cặp số $(x; y)$ nào sau đây không phải là một nghiệm của hệ bất phương trình $\\begin{cases} 2x - y - 3 \\le 0 \\\\ 2x + y + 3 \\ge 0 \\\\ 3x + 4y < 5 \\end{cases}$?",
            imageKey: "img_19",
            options: [
                "$(x; y) = (0; 1)$",
                "$(x; y) = (-2; 2)$",
                "$(x; y) = (1; 6)$",
                "$(x; y) = (-3; 3)$"
            ],
            correct: 2,
            explanation: "Thay $(1; 6)$ vào bất phương trình thứ 3: $3(1) + 4(6) = 27 < 5$ (Sai). Do đó $(1; 6)$ không phải là nghiệm."
        },
        {
            id: 20,
            type: "multiple_choice",
            question: "Miền nghiệm được cho bởi hình bên là miền nghiệm của bất phương trình nào?",
            imageKey: "img_20",
            options: [
                "$2x + y - 6 > 0$",
                "$2x + y - 6 < 0$",
                "$x + 2y - 6 < 0$",
                "$x + 2y - 6 > 0$"
            ],
            correct: 0,
            explanation: "Đường thẳng d đi qua $(3; 0)$ và $(0; 6)$ có phương trình $2x + y - 6 = 0$. Miền nghiệm tô đậm không chứa điểm $O(0; 0)$ nên tương ứng với $2x + y - 6 > 0$."
        },
        {
            id: 21,
            type: "multiple_choice",
            question: "Phần không gạch chéo trong hình vẽ dưới đây (không bao gồm đường thẳng d) là miền nghiệm của bất phương trình bậc nhất hai ẩn nào dưới đây?",
            imageKey: "img_21",
            options: [
                "$2x - y < 0$",
                "$x - 2y < 2$",
                "$2x - y < -2$",
                "$2x - y > 1$"
            ],
            correct: 1,
            explanation: "Đường thẳng d đi qua $(2; 0)$ và $(0; -1)$ có phương trình $x - 2y = 2$. Miền không gạch chéo chứa gốc tọa độ $O(0; 0)$ thỏa mãn $0 - 2(0) = 0 < 2$ nên phương trình là $x - 2y < 2$."
        },
        {
            id: 22,
            type: "multiple_choice",
            question: "Hình vẽ nào biểu diễn miền nghiệm của bất phương trình $3x - 2y > -6$?",
            imageKey: "img_22",
            options: [
                "Hình 1",
                "Hình 2",
                "Hình 3",
                "Hình 4"
            ],
            correct: 2,
            explanation: "Đường thẳng $3x - 2y = -6$ đi qua $(-2; 0)$ và $(0; 3)$. Thử điểm $O(0; 0)$ ta có $0 > -6$ (Đúng) nên miền nghiệm chứa $O(0; 0)$, tương ứng với Hình 3."
        },
        {
            id: 23,
            type: "multiple_choice",
            question: "Hình vẽ nào sau đây biểu diễn miền nghiệm của bất phương trình $2x - 3y - 6 \\le 0$?",
            imageKey: "img_23",
            options: [
                "Hình 1",
                "Hình 2",
                "Hình 3",
                "Hình 4"
            ],
            correct: 2,
            explanation: "Đường thẳng $2x - 3y - 6 = 0$ đi qua $(3; 0)$ và $(0; -2)$. Điểm $O(0; 0)$ thỏa mãn $2(0) - 3(0) - 6 = -6 \\le 0$ nên miền nghiệm chứa $O(0; 0)$."
        },
        {
            id: 24,
            type: "multiple_choice",
            question: "Cho đường thẳng $d: 7x - 9y + 2 = 0$ chia mặt phẳng tọa độ làm hai nửa mặt phẳng, trong đó miền nghiệm của bất phương trình $7x - 9y + 2 \\ge 0$ là nửa mặt phẳng",
            imageKey: "img_24",
            options: [
                "có bờ là đường thẳng d và không chứa điểm $O(0;0)$.",
                "có bờ là đường thẳng d và chứa điểm $O(0;0)$.",
                "có bờ là đường thẳng d và không chứa điểm $M(1;0)$.",
                "có bờ là đường thẳng d và chứa điểm $N(0;1)$."
            ],
            correct: 1,
            explanation: "Thử điểm $O(0; 0)$ vào bất phương trình: $7(0) - 9(0) + 2 = 2 \\ge 0$ (Đúng). Do đó miền nghiệm là nửa mặt phẳng có bờ d và chứa điểm $O(0; 0)$."
        },
        {
            id: 25,
            type: "multiple_choice",
            question: "Phần không gạch chéo ở hình sau đây là biểu diễn miền nghiệm của hệ bất phương trình nào trong bốn hệ A, B, C, D?",
            imageKey: "img_25",
            options: [
                "$\\begin{cases} y > 0 \\\\ 3x + 2y < 6 \\end{cases}$",
                "$\\begin{cases} y > 0 \\\\ 3x + 2y < -6 \\end{cases}$",
                "$\\begin{cases} x > 0 \\\\ 3x + 2y < 6 \\end{cases}$",
                "$\\begin{cases} x > 0 \\\\ 3x + 2y > -6 \\end{cases}$"
            ],
            correct: 0,
            explanation: "Miền nằm phía trên trục hoành ($y > 0$) và phía dưới đường thẳng $3x + 2y = 6$ (chứa $O(0; 0)$ nên $3x + 2y < 6$). Hệ đúng là A."
        },
        {
            id: 26,
            type: "multiple_choice",
            question: "Cho miền biểu diễn tập nghiệm của hệ bất phương trình là miền không bị gạch chéo (không kể biên). Điểm nào không thuộc miền nghiệm của hệ?",
            imageKey: "img_26",
            options: [
                "$A(-1; 1)$",
                "$B(-2; 2)$",
                "$C(1; 6)$",
                "$D(-3; 3)$"
            ],
            correct: 2,
            explanation: "Thử tọa độ điểm $C(1; 6)$ nhận thấy điểm nằm ngoài khu vực tô/không gạch chéo của hệ bất phương trình."
        },
        {
            id: 27,
            type: "multiple_choice",
            question: "Trong các bất phương trình bên dưới, bất phương trình nào có miền nghiệm được biểu diễn trên hệ trục toạ độ Oxy như hình vẽ?",
            imageKey: "img_27",
            options: [
                "$2x + 2y \\le 0$",
                "$x + y \\ge 2$",
                "$x + y \\le 2$",
                "$x - y \\le 2$"
            ],
            correct: 2,
            explanation: "Đường thẳng nét đứt đi qua $(2; 0)$ và $(0; 2)$ có phương trình $x + y = 2$. Miền không gạch chéo chứa $O(0; 0)$ thỏa mãn $0 + 0 < 2$, do đó là $x + y \\le 2$."
        },
        {
            id: 28,
            type: "multiple_choice",
            question: "Cho hệ bất phương trình $\\begin{cases} x - y < -3 \\\\ 2y \\ge -4 \\end{cases}$. Điểm nào sau đây thuộc miền nghiệm của hệ đã cho?",
            imageKey: "img_28",
            options: [
                "$(0; 0)$",
                "$(-2; 1)$",
                "$(3; -1)$",
                "$(-3; 1)$"
            ],
            correct: 3,
            explanation: "Thay điểm $D(-3; 1)$ vào hệ: $-3 - 1 = -4 < -3$ và $2(1) = 2 \\ge -4$ (Đúng cả hai bất phương trình)."
        },
        {
            id: 29,
            type: "multiple_choice",
            question: "Hình nào sau đây biểu diễn miền nghiệm của bất phương trình $x - y > 3$?",
            imageKey: "img_29",
            options: [
                "Hình 1",
                "Hình 2",
                "Hình 3",
                "Hình 4"
            ],
            correct: 3,
            explanation: "Đường thẳng $x - y = 3$ đi qua $(3; 0)$ và $(0; -3)$. Thử gốc tọa độ $O(0; 0)$ vào bất phương trình ta có $0 - 0 = 0 > 3$ (Sai), nên miền nghiệm là nửa mặt phẳng bờ $x - y = 3$ không chứa gốc tọa độ $O(0; 0)$, tương ứng với Hình 4."
        },
        {
            id: 30,
            type: "multiple_choice",
            question: "Miền nghiệm của bất phương trình $-2x + y < 4$ được biểu diễn bởi miền nào (nửa mặt phẳng không bị gạch và không kể đường thẳng d) sau đây?",
            imageKey: "img_30",
            options: [
                "Hình 1",
                "Hình 2",
                "Hình 3",
                "Hình 4"
            ],
            correct: 0,
            explanation: "Đường thẳng $-2x + y = 4$ đi qua $(-2; 0)$ và $(0; 4)$. Thử $O(0; 0)$ ta có $-2(0) + 0 = 0 < 4$ (Đúng), do đó miền nghiệm chứa $O(0; 0)$ tương ứng với Hình 1."
        },
        {
            id: 31,
            type: "multiple_choice",
            question: "Giá trị nhỏ nhất của biểu thức $F = x + 2y$ trên miền xác định bởi hệ $\\begin{cases} y - 2x \\le 2 \\\\ 2y - x \\ge 4 \\\\ x + y \\le 5 \\end{cases}$ là:",
            imageKey: "img_31",
            options: [
                "$\\min F = 1$ khi $x = 2, y = 3$",
                "$\\min F = 4$ khi $x = 0, y = 2$",
                "$\\min F = 3$ khi $x = 1, y = 4$",
                "$\\min F = 0$ khi $x = 0, y = 0$"
            ],
            correct: 1,
            explanation: "Các đỉnh của miền nghiệm là $A(0; 2), B(1; 4), C(2; 3)$. Tính $F$ tại các đỉnh: $F(A) = 4, F(B) = 9, F(C) = 8$. Vậy $\\min F = 4$ tại $x = 0, y = 2$."
        },

        // ==================== PHẦN 2. TRẮC NGHIỆM ĐÚNG SAI (CÂU 32 - CÂU 34) ====================
        {
            id: 32,
            type: "true_false",
            question: "Cho các tập hợp $A = \\{x \\in \\mathbb{R} \\mid -12 \\le x \\le 21\\}$, $B = \\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 17\\}$. Các mệnh đề sau đúng hay sai?",
            imageKey: "img_32",
            statements: [
                { id: "a", statement: "$A = [-12; 21]$", correct: true },
                { id: "b", statement: "$B = [0; 17]$", correct: true },
                { id: "c", statement: "$B \\subset A$", correct: true },
                { id: "d", statement: "Tập hợp B có 18 phần tử.", correct: false }
            ],
            explanation: "a, b) Đúng theo định nghĩa đoạn. c) Đúng vì $[0; 17] \\subset [-12; 21]$. d) Sai vì B là tập hợp các số thực chứa vô số phần tử."
        },
        {
            id: 33,
            type: "true_false",
            question: "Cho ba tập hợp $A = \\{x \\in \\mathbb{R} \\mid -1 < x \\le 4\\}$, $B = (-3; +\\infty)$ và $C = [2m-2; 2m+3]$. Xác định tính đúng, sai của các khẳng định sau.",
            imageKey: "img_33",
            statements: [
                { id: "a", statement: "Tập hợp A có 5 phần tử.", correct: false },
                { id: "b", statement: "$A \\subset B$", correct: true },
                { id: "c", statement: "$A \\cap B = (-3; 4]$", correct: false },
                { id: "d", statement: "Tổng các giá trị nguyên của m để $A \\cap C \\ne \\emptyset$ là 3.", correct: false }
            ],
            explanation: "a) Sai vì A là khoảng số thực vô hạn phần tử. b) Đúng vì $(-1; 4] \\subset (-3; +\\infty)$. c) Sai vì $A \\cap B = A = (-1; 4]$. d) $A \\cap C \\ne \\emptyset \\Leftrightarrow -2 < m \\le 3 \\Rightarrow m \\in \\{-1; 0; 1; 2; 3\\}$, tổng là $5 \\ne 3$ nên d) sai."
        },
        {
            id: 34,
            type: "true_false",
            question: "Một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipit mỗi ngày. Mỗi kg thịt bò chứa 800 đơn vị protein và 200 đơn vị lipit. Mỗi kg thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipit. Gia đình này chỉ mua nhiều nhất 1,6 kg thịt bò và 1,1 kg thịt lợn. Giá 1 kg thịt bò là 250 nghìn đồng, 1 kg thịt lợn là 160 nghìn đồng. Gọi x, y lần lượt là số kg thịt bò và thịt lợn mua.",
            imageKey: "img_34",
            statements: [
                { id: "a", statement: "Hệ bất phương trình biểu thị các điều kiện của bài toán là: $\\begin{cases} 8x + 6y \\ge 9 \\\\ 2x + 4y \\ge 4 \\\\ 0 \\le x \\le 1,6 \\\\ 0 \\le y \\le 1,1 \\end{cases}$", correct: true },
                { id: "b", statement: "Biểu thức tiền phải trả theo x và y là: $F(x, y) = 250x + 160y$", correct: true },
                { id: "c", statement: "Miền nghiệm của hệ bất phương trình ở ý a chứa điểm $M(1; 0,5)$.", correct: true },
                { id: "d", statement: "Chi phí ít nhất mà gia đình đó cần phải trả là 388 nghìn đồng.", correct: false }
            ],
            explanation: "a, b) Đúng theo đề bài. c) Đúng vì $M(1; 0,5)$ thỏa mãn tất cả các bất phương trình trong hệ. d) Chi phí ít nhất đạt tại $(0,3; 1,1)$ là $F = 250(0,3) + 160(1,1) = 251$ nghìn đồng, nên d) sai."
        },

        // ==================== PHẦN 3. TRẢ LỜI NGẮN (CÂU 35 - CÂU 40) ====================
        {
            id: 35,
            type: "short_answer",
            question: "Cho tập hợp $A = \\{x; y; z\\}$ và $B = \\{x; y; z; t; u\\}$. Có bao nhiêu tập X thỏa mãn $A \\subset X \\subset B$?",
            imageKey: "img_35",
            correctAnswer: "4",
            explanation: "Tập $X$ chứa các phần tử của $A$ và chọn thêm các phần tử thuộc $B \\setminus A = \\{t; u\\}$. Số tập $X$ là $2^2 = 4$."
        },
        {
            id: 36,
            type: "short_answer",
            question: "Cho tập hợp $A = [-3; 1) \\cup (0; 10)$. Tập hợp A có bao nhiêu giá trị nguyên?",
            imageKey: "img_36",
            correctAnswer: "13",
            explanation: "Ta có $A = [-3; 10)$. Các giá trị nguyên thuộc $A$ là $-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9$. Tổng cộng có 13 giá trị nguyên."
        },
        {
            id: 37,
            type: "short_answer",
            question: "Xác định số phần tử của tập hợp $X = \\{n \\in \\mathbb{N} \\mid n \\vdots 4, n < 2126\\}$.",
            imageKey: "img_37",
            correctAnswer: "532",
            explanation: "Các số tự nhiên chia hết cho 4 nhỏ hơn 2126 là $0, 4, 8, ..., 2124$. Số phần tử là $\\frac{2124 - 0}{4} + 1 = 532$."
        },
        {
            id: 38,
            type: "short_answer",
            question: "Cho hai tập hợp khác rỗng $A = (m-1; 4]$ và $B = (-2; 2m+2), m \\in \\mathbb{R}$. Có bao nhiêu giá trị nguyên dương của tham số m để $A \\cap B \\ne \\emptyset$.",
            imageKey: "img_38",
            correctAnswer: "4",
            explanation: "Để A, B khác rỗng thì $m \\in (-2; 5)$. Để $A \\cap B \\ne \\emptyset$ thì $2m+2 > m-1 \\Leftrightarrow m > -3$. Do đó $-2 < m < 5$. Các giá trị nguyên dương của $m$ là $1, 2, 3, 4$ (tổng cộng 4 giá trị)."
        },
        {
            id: 39,
            type: "short_answer",
            question: "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
            imageKey: "img_39",
            correctAnswer: "40",
            explanation: "Số học sinh giỏi ít nhất 1 môn là $25 + 23 - 14 = 34$. Tổng số học sinh là $34 + 6 = 40$."
        },
        {
            id: 40,
            type: "short_answer",
            question: "Cho m là tham số thực và hai tập hợp $A = [1-2m; m+3]$, $B = [8-5m; +\\infty)$. Tìm số các giá trị nguyên của m để $B \\setminus A = B$.",
            imageKey: "img_40",
            correctAnswer: "1",
            explanation: "Để $B \\setminus A = B$ thì $A \\cap B = \\emptyset \\Leftrightarrow m+3 < 8-5m \\Leftrightarrow m < \\frac{5}{6}$. Điều kiện A tồn tại là $1-2m \\le m+3 \\Leftrightarrow m \\ge -\\frac{2}{3}$. Do đó $-\\frac{2}{3} \\le m < \\frac{5}{6}$. Giá trị nguyên duy nhất là $m = 0$."
        },

        // ==================== PHẦN 4. TỰ LUẬN (CÂU 41 - CÂU 43) ====================
        {
            id: 41,
            type: "essay",
            question: "Trong mặt phẳng tọa độ (Oxy) cho tam giác ABC có $A(1;0), B(-1;1), C(5;-1)$. Tọa độ trực tâm $H(a;b)$ của tam giác ABC. Tính $a+b$.",
            imageKey: "img_41",
            correctAnswer: "-35",
            explanation: "Giải hệ $\\begin{cases} \\vec{AH} \\cdot \\vec{BC} = 0 \\\\ \\vec{BH} \\cdot \\vec{AC} = 0 \\end{cases} \\Leftrightarrow \\begin{cases} 6(a-1) - 2b = 0 \\\\ 4(a+1) - (b-1) = 0 \\end{cases} \\Rightarrow a = -8, b = -27$. Vậy $a + b = -35$."
        },
        {
            id: 42,
            type: "essay",
            question: "Điểm kiểm tra môn văn của bạn Bình được ghi lại như sau: 6, 7, 9, 8, 7, 8, 9, 8. Độ lệch chuẩn của điểm kiểm tra môn văn của bạn Bình là (lấy 2 chữ số thập phân).",
            imageKey: "img_42",
            correctAnswer: "0.97",
            explanation: "Điểm trung bình $\\bar{x} = 7.75$. Phương sai $s^2 = 0.9375$. Độ lệch chuẩn $s = \\sqrt{0.9375} \\approx 0.97$."
        },
        {
            id: 43,
            type: "essay",
            question: "Một mảnh đất hình chữ nhật bị xén đi một góc, phần còn lại có dạng hình tứ giác ABCD với độ dài các cạnh $AB = 15\\text{ m}, BC = 19\\text{ m}, CD = 10\\text{ m}, DA = 20\\text{ m}$. Diện tích mảnh đất ABCD bằng bao nhiêu mét vuông (làm tròn đến hàng đơn vị)?",
            imageKey: "img_43",
            correctAnswer: "236",
            explanation: "Chia tứ giác thành 2 tam giác: $S_{ABD} = \\frac{1}{2} \\cdot 15 \\cdot 20 = 150\\text{ m}^2$. Đường chéo $BD = \\sqrt{15^2 + 20^2} = 25\\text{ m}$. Dùng công thức Heron cho $\\triangle BCD$ có ba cạnh $25, 19, 10$ ta được $S_{BCD} \\approx 85.7\\text{ m}^2$. Tổng diện tích $S = 150 + 85.7 \\approx 236\\text{ m}^2$."
        }
    ]
};