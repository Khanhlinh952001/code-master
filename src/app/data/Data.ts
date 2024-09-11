import { LessonData } from "@/types/LanguageData";

export const cData: LessonData[] = [
  {
    id: 1,
    title: 'Giới thiệu về ngôn ngữ C',
    theory: `C là một ngôn ngữ lập trình cấp thấp, được phát triển bởi Dennis Ritchie tại Bell Labs vào đầu những năm 1970. Nó là một ngôn ngữ mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển hệ thống và ứng dụng.

Đặc điểm chính của C:
1. Ngôn ngữ cấp thấp với hiệu suất cao
2. Hỗ trợ lập trình có cấu trúc
3. Khả năng truy cập bộ nhớ cấp thấp
4. Tính di động cao (có thể chạy trên nhiều nền tảng khác nhau)
5. Thư viện chuẩn phong phú`,
    initialCode: `// Không có mã mẫu cho bài này`,
    task: "Nghiên cứu và liệt kê ít nhất 3 ứng dụng phổ biến của ngôn ngữ C trong thực tế.",
    expectedOutput: "Không có output cụ thể. Học viên hiểu được khái niệm và ứng dụng của C."
  },
  {
    id: 2,
    title: 'Cài đặt môi trường phát triển C',
    theory: `Để bắt đầu lập trình C, bạn cần cài đặt một trình biên dịch C và một IDE (Integrated Development Environment). Các bước cơ bản bao gồm:

1. Cài đặt trình biên dịch:
   - Windows: MinGW hoặc Visual Studio Community
   - macOS: Xcode Command Line Tools
   - Linux: GCC (thường đã được cài đặt sẵn)

2. Cài đặt IDE:
   - Visual Studio Code với extension C/C++
   - Code::Blocks
   - CLion

3. Cấu hình IDE để sử dụng trình biên dịch đã cài đặt`,
    initialCode: `// Không có mã mẫu cho bài này`,
    task: "Cài đặt môi trường phát triển C trên máy tính của bạn và viết một chương trình Hello World đơn giản để kiểm tra.",
    expectedOutput: "Môi trường được cài đặt thành công và chương trình Hello World chạy được."
  },
  {
    id: 3,
    title: 'Cấu trúc của một chương trình C đơn giản',
    theory: `Một chương trình C cơ bản thường có cấu trúc sau:

1. Các lệnh tiền xử lý (#include)
2. Khai báo hằng số toàn cục (nếu có)
3. Khai báo prototype của hàm (nếu cần)
4. Hàm main()
5. Định nghĩa các hàm khác (nếu có)

Ví dụ:`,
    initialCode: `#include <stdio.h>

#define PI 3.14159

// Khai báo prototype
double tinhDienTichHinhTron(double banKinh);

int main() {
    double banKinh = 5.0;
    printf("Dien tich hinh tron: %.2f\n", tinhDienTichHinhTron(banKinh));
    return 0;
}

// Định nghĩa hàm
double tinhDienTichHinhTron(double banKinh) {
    return PI * banKinh * banKinh;
}`,
    task: "Giải thích cấu trúc của chương trình C trên và chạy nó để xem kết quả.",
    expectedOutput: "Dien tich hinh tron: 78.54"
  },
  {
    id: 4,
    title: 'Biến và kiểu dữ liệu trong C',
    theory: `C có nhiều kiểu dữ liệu cơ bản:

1. int: số nguyên
2. float: số thực (độ chính xác đơn)
3. double: số thực (độ chính xác kép)
4. char: ký tự

Khai báo biến: <kiểu dữ liệu> <tên biến>;`,
    initialCode: `#include <stdio.h>

int main() {
    int soNguyen = 10;
    float soThuc = 3.14;
    double soThucChinhXacCao = 3.14159265359;
    char kyTu = 'A';

    printf("So nguyen: %d\n", soNguyen);
    printf("So thuc: %.2f\n", soThuc);
    printf("So thuc chinh xac cao: %.10f\n", soThucChinhXacCao);
    printf("Ky tu: %c\n", kyTu);

    return 0;
}`,
    task: "Thêm một biến mới kiểu long và in giá trị của nó.",
    expectedOutput: "So nguyen: 10\nSo thuc: 3.14\nSo thuc chinh xac cao: 3.1415926536\nKy tu: A"
  },
  {
    id: 5,
    title: 'Kiểu dữ liệu cơ bản',
    theory: `C có các kiểu dữ liệu cơ bản như int, float, double, char. Mỗi kiểu dữ liệu có kích thước và phạm vi khác nhau.`,
    initialCode: `#include <stdio.h>

int main() {
    int a = 10;
    float b = 3.14;
    char c = 'A';
    printf("%d %.2f %c", a, b, c);
    return 0;
}`,
    task: "Chạy chương trình và giải thích output.",
    expectedOutput: "10 3.14 A"
  },
  {
    id: 6,
    title: 'Cấu trúc điều khiển if-else',
    theory: `Cấu trúc if-else cho phép thực hiện các khối lệnh khác nhau dựa trên điều kiện.`,
    initialCode: `#include <stdio.h>

int main() {
    int age = 18;
    if (age >= 18) {
        printf("Bạn đủ tuổi bầu cử");
    } else {
        printf("Bạn chưa đủ tuổi bầu cử");
    }
    return 0;
}`,
    task: "Thay đổi giá trị của biến age và quan sát kết quả.",
    expectedOutput: "Bạn đủ tuổi bầu cử"
  },
  {
    id: 7,
    title: 'Vòng lặp while',
    theory: `Vòng lặp while thực hiện một khối lệnh lặp đi lặp lại miễn là điều kiện còn đúng.`,
    initialCode: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,
    task: "Chạy chương trình và giải thích cách hoạt động của vòng lặp while.",
    expectedOutput: "0 1 2 3 4"
  },
  // ... more lessons ...
];

export const CppData: LessonData[] = [
  {
    id: 1,
    title: 'Giới thiệu về ngôn ngữ C++',
    theory: `C++ là một ngôn ngữ lập trình cấp cao, được phát triển bởi Bjarne Stroustrup tại Bell Labs vào đầu những năm 1980. Nó là một ngôn ngữ mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển phần mềm, trò chơi, ứng dụng đồ họa, và nhiều lĩnh vực khác.

Đặc điểm chính của C++:
1. Ngôn ngữ cấp cao với hiệu suất cao
2. Hỗ trợ lập trình hướng đối tượng
3. Khả năng truy cập bộ nhớ cấp thấp
4. Tính di động cao (có thể chạy trên nhiều nền tảng khác nhau)
5. Thư viện chuẩn phong phú`,
    initialCode: `// Không có mã mẫu cho bài này`,
    task: "Nghiên cứu và liệt kê ít nhất 3 ứng dụng phổ biến của ngôn ngữ C++ trong thực tế.",
    expectedOutput: "Không có output cụ thể. Học viên hiểu được khái niệm và ứng dụng của C++."
  },
  {
    id: 2,
    title: 'Cài đặt môi trường phát triển C++',
    theory: `Để bắt đầu lập trình C++, bạn cần cài đặt một trình biên dịch C++ và một IDE (Integrated Development Environment). Các bước cơ bản bao gồm:

1. Cài đặt trình biên dịch:
   - Windows: MinGW-w64 hoặc Visual Studio Community
   - macOS: Xcode Command Line Tools
   - Linux: GCC (thường đã được cài đặt sẵn)

2. Cài đặt IDE:
   - Visual Studio Code với extension C/C++
   - CLion
   - Code::Blocks

3. Cấu hình IDE để sử dụng trình biên dịch đã cài đặt`,
    initialCode: `// Không có mã mẫu cho bài này`,
    task: "Cài đặt môi trường phát triển C++ trên máy tính của bạn và viết một chương trình Hello World đơn giản để kiểm tra.",
    expectedOutput: "Môi trường được cài đặt thành công và chương trình Hello World chạy được."
  },
  {
    id: 3,
    title: 'Cấu trúc của một chương trình C++ đơn giản',
    theory: `Một chương trình C++ cơ bản thường có cấu trúc sau:

1. Các lệnh tiền xử lý (#include)
2. Sử dụng namespace (tùy chọn)
3. Khai báo hằng số toàn cục (nếu có)
4. Khai báo prototype của hàm (nếu cần)
5. Hàm main()
6. Định nghĩa các hàm khác (nếu có)

Ví dụ:`,
    initialCode: `#include <iostream>
using namespace std;

#define PI 3.14159

// Khai báo prototype
double tinhDienTichHinhTron(double banKinh);

int main() {
    double banKinh = 5.0;
    cout << "Dien tich hinh tron: " << tinhDienTichHinhTron(banKinh) << endl;
    return 0;
}

// Định nghĩa hàm
double tinhDienTichHinhTron(double banKinh) {
    return PI * banKinh * banKinh;
}`,
    task: "Giải thích cấu trúc của chương trình C++ trên và chạy nó để xem kết quả.",
    expectedOutput: "Dien tich hinh tron: 78.54"
  },
  {
    id: 4,
    title: 'Biến và kiểu dữ liệu trong C++',
    theory: `C++ có nhiều kiểu dữ liệu cơ bản:

1. int: số nguyên
2. float: số thực (độ chính xác đơn)
3. double: số thực (độ chính xác kép)
4. char: ký tự
5. bool: giá trị logic
6. string: chuỗi ký tự

Khai báo biến: <kiểu dữ liệu> <tên biến>;`,
    initialCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int soNguyen = 10;
    float soThuc = 3.14;
    double soThucChinhXacCao = 3.14159265359;
    char kyTu = 'A';
    bool logic = true;
    string chuoi = "Hello, World!";

    return 0;
}`,
    task: "Viết một chương trình khai báo và in ra giá trị của các biến với các kiểu dữ liệu khác nhau.",
    expectedOutput: "Chương trình in ra giá trị của các biến với các kiểu dữ liệu int, float, double, char, bool và string."
  }
];


export const javascriptData: LessonData[] = [
  {
    id: 1,
    title: 'Giới thiệu về Biến',
    theory: `Biến là một không gian lưu trữ trong bộ nhớ để lưu dữ liệu. Bạn có thể khai báo biến với từ khóa \`let\`, \`const\`, hoặc \`var\`.`,
    initialCode: `let y = 10;
console.log(y);`,
    task: "Khai báo một biến 'y' với giá trị 10 và in ra giá trị của nó.",
    expectedOutput: '10'
  },
  {
    id: 2,
    title: 'Câu lệnh Điều kiện',
    theory: `Câu lệnh điều kiện cho phép bạn thực hiện các khối mã dựa trên điều kiện logic. Bạn có thể sử dụng \`if\`, \`else\`, và \`else if\` để kiểm tra điều kiện.`,
    initialCode: `let age = 18;
if (age >= 18) {
console.log('Đủ tuổi');
} else {
console.log('Chưa đủ tuổi');
}`,
    task: "Thay đổi giá trị của 'age' thành 16 và chạy lại mã.",
    expectedOutput: "Chưa đủ tuổi"
  },
  {
    id: 3,
    title: 'Vòng lặp for',
    theory: `Vòng lặp \`for\` cho phép bạn lặp qua một dãy số hoặc mảng các giá trị. Đây là một cách để lặp lại các khối mã nhiều lần.

Ví dụ:
\`\`\`javascript
for (let i = 0; i < 5; i++) {
console.log(i);
}
\`\`\``,
    initialCode: `// Viết vòng lặp for ở đây`,
    task: "Viết một vòng lặp for để in ra các số từ 0 đến 4.",
    expectedOutput: "0\n1\n2\n3\n4"
  },
  // Thêm một cấp độ mới để minh họa việc mở rộng
  {
    id: 4,
    title: 'Hàm',
    theory: `Hàm là một khối mã có thể tái sử dụng để thực hiện một nhiệm vụ cụ thể. Bạn có thể định nghĩa hàm bằng từ khóa \`function\`.

Ví dụ:
\`\`\`javascript
function sayHello(name) {
console.log('Xin chào, ' + name + '!');
}
sayHello('Alice'); // Kết quả: Xin chào, Alice!
\`\`\``,
    initialCode: `function sayHello(name) {
      // Viết mã của bạn ở đây
    }
    sayHello('Bạn');`,
    task: "Hoàn thành hàm sayHello để in ra 'Xin chào, ' cộng với tên được truyền vào.",
    expectedOutput: "Xin chào, Bạn!"
  },
  // Thêm các cấp độ khác ở đây
];

export const pythonData: LessonData[] = [
  {
    id: 1,
    title: 'Khai báo biến',
    theory: `Trong Python, bạn có thể khai báo biến mà không cần chỉ định kiểu dữ liệu. Python sẽ tự động xác định kiểu dữ liệu dựa trên giá trị được gán.`,
    initialCode: `x = 5
print(x)`,
    task: "Khai báo một biến 'x' với giá trị 5 và in ra giá trị của nó.",
    expectedOutput: "5"
  },
  {
    id: 2,
    title: 'In ra màn hình',
    theory: `Trong Python, bạn có thể sử dụng hàm print() để in dữ liệu ra màn hình. Hàm này rất linh hoạt và có thể in nhiều loại dữ liệu khác nhau.`,
    initialCode: `print("Hello, World!")`,
    task: "Sử dụng print() để in ra chuỗi 'Hello, World!'.",
    expectedOutput: "Hello, World!"
  },
  {
    id: 3,
    title: 'Vòng lặp for',
    theory: `Python sử dụng vòng lặp for để lặp qua một chuỗi (như list, tuple, dictionary, set, hoặc string) hoặc bất kỳ đối tượng nào có thể lặp lại.`,
    initialCode: `for i in range(5):
    print(i, end=' ')`,
    task: "Sử dụng vòng lặp for để in ra các số từ 0 đ��n 4.",
    expectedOutput: "0 1 2 3 4"
  },
  // Thêm các bài học Python khác ở đây
];

