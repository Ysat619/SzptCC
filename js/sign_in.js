// 左侧座位的行
const leftRow = 5;
// 左侧座位的列
const leftColumn = 5;
// 右侧座位的行
const rightRow = 5;
// 右侧座位的列
const rightColumn = 5;
let rank = 0;
// 签到的座位
let seatNum = 1;
document.getElementById("sign_in_date").innerText = new Date().toLocaleString();

/**
 * 模拟数据库查表
 * @type {({name: string, id: string}|{name: string, id: string})[]}
 */
const stu_info = [
    {id: "19090415", name: "李嘉兴", status: false, time: 0, subject: ""},
    {id: "19080034", name: "郑健衡", status: false, time: 0, subject: ""},
    {id: "19030271", name: "陈红名", status: false, time: 0, subject: ""},
];

let seatingChartList = [
    left = [],
    right = []
];

initSeatingChart();

/**
 * 签到
 * @param stuName 学生姓名
 * @param seatNum 座位号
 */
function signIn(stuName, seatNum) {
    seatingChartList.forEach((v, i) => {
        seatingChartList[i].forEach((v1, i1)=> {
            // 判断座位号是否为1
            if(v1.id === seatNum) {
                // 判断是否是第一次签到
                if(v1.name === '') {
                    rank++;
                }
                v1.name = stuName;
                v1.rank = rank;
                loadSeatingChart();
                document.getElementById("seat_" + v1.id).className = "seat_wrap seat_wrap_theme0";
            }
        })


    });
}

function handleSignIn() {
    let stuNum = document.getElementById("stu_id").value;
    let ele = document.getElementsByClassName("sign_in_success_info")[0];
    for (let i = 0; i < stu_info.length; i++) {
        let stu = stu_info[i];
        if (stu.id === stuNum) {
            // 查有此人
            ele.style.display = "flex";
            ele.innerHTML = '<span class="iconfont icon-chenggong"></span>' + stu.name + '(' + stu.id + ')签到成功!';
            let seatingChart = document.getElementsByClassName("seating_chart_wrap")[0];
            // 显示座位表
            seatingChart.style.visibility = "visible";
            signIn(stu.name, seatNum);
            break;
        } else {
            ele.style.display = "flex";
            ele.innerHTML = '<span class="iconfont icon-fail_icon"></span>签到失败！请输入正确的学号信息！';
        }
    }
    localStorage.setItem("stu_info", "test");
}

/**
 * 处理签到时的键盘回车事件
 * @param e
 */
function handleSignInEnter(e) {
    if (e.keyCode === 13) {
        handleSignIn();
    }
}
/*
    l_row = 5; l_column = 5  r_row = 5; r_column = 5
    l_row0:10 9 8 7 6      v_start = (current_row + 1) * 10; v_end = (current_row + 1) * 10 - r_column; --
    l_row1:20 19 18 17
    l_row2:30 29 28 27 26
    l_row3:40 39 38 37 36
    l_row4:50 49 48 47 46
    ---------------------
    r_row0:5 4 3 2 1       v_start = (current_row + 1) * 10 - l_column; v_end = (current_row + 1) * 10 - (l_column + r_column) + 1; --
    r_row1:15 14 13 12 11
    r_row2:25 24 23 22 21
    r_row3:35 34 33 32 31
    r_row4:45 44 43 42 41
 */

/**
 * 初始化座位表数据集合
 */
function initSeatingChartList() {
    // 放左边座位表
    for (let i = 0; i < leftRow; i++) {
        let rowFirstNum = (i + 1) * 10;
        let index = 0;
        for (let j = rowFirstNum; j > rowFirstNum - rightColumn; j--) {
            seatingChartList[0].push(
                {
                    id: j,
                    name: "",
                    rank: ''
                }
            );
            index++;
        }
    }
    // 放右边座位表
    for (let i = 0; i < rightRow; i++) {
        let rowFirstNum = (i + 1) * 10 - leftColumn;
        let index = 0;
        for (let j = rowFirstNum; j > rowFirstNum - rightColumn; j--) {
            seatingChartList[1].push(
                {
                    id: j,
                    name: "",
                    rank: ''
                }
            );
            index++;
        }
    }
}

/**
 * 初始化座位表
 */
function initSeatingChart() {
    initSeatingChartList();
    loadSeatingChart()
}

/**
 * 加载座位表HTML代码
 */
function loadSeatingChart() {
    console.log(seatingChartList);
    let seatingChartHtml = '';
    seatingChartHtml += '<div class="seating_chart">';
    seatingChartHtml += '<!-- 过道以左的座位 -->\n' +
        '                    <div class="seating_chart_left">\n';

    let flag = 0;
    for (let i = 0; i < leftRow; i++) {
        seatingChartHtml += '                        <div class="seating_chart_left_row">\n';
        for (let j = 0; j < leftColumn; j++) {
            seatingChartHtml += '<div class="seat_wrap seat_wrap_theme_init" onclick="setSeatNum('+seatingChartList[0][flag].id+')" id="seat_' + seatingChartList[0][flag].id + '">\n' +
                '                                <div class="seat_num">\n' +
                '                                    --- ' + seatingChartList[0][flag].id + ' ---\n' +
                '                                </div>\n' +
                '                                <div class="seat_stu_name">\n' +
                '                                    ' + seatingChartList[0][flag].name + '\n' +
                '                                </div>\n' +
                '                                <div class="sign_in_rank">\n' +
                '                                    ' + seatingChartList[0][flag].rank + '\n' +
                '                                </div>\n' +
                '                            </div>';
            flag++;
        }
        seatingChartHtml += '                        </div>'
    }

    seatingChartHtml += '</div>\n';
    seatingChartHtml += '                    <!--中间过道-->\n' +
        '                    <div class="seating_chart_middle">\n' +
        '                        <div class="seating_chart_middle_text">\n' +
        '                            中<br><br>间<br><br>过<br><br>道\n' +
        '                        </div>\n' +
        '                    </div>';

    flag = 0;
    seatingChartHtml += '<!-- 过道以右的座位 -->\n' +
        '                    <div class="seating_chart_right">';
    for (let i = 0; i < rightRow; i++) {
        seatingChartHtml += '                        <div class="seating_chart_right_row">\n';
        for (let j = 0; j < rightColumn; j++) {
            seatingChartHtml += '<div class="seat_wrap seat_wrap_theme_init" onclick="setSeatNum('+seatingChartList[1][flag].id+')" id="seat_' + seatingChartList[1][flag].id + '">\n' +
                '                                <div class="seat_num">\n' +
                '                                    --- ' + seatingChartList[1][flag].id + ' ---\n' +
                '                                </div>\n' +
                '                                <div class="seat_stu_name">\n' +
                '                                    ' + seatingChartList[1][flag].name + '\n' +
                '                                </div>\n' +
                '                                <div class="sign_in_rank">\n' +
                '                                    ' + seatingChartList[1][flag].rank + '\n' +
                '                                </div>\n' +
                '                            </div>';
            flag++;
        }
        seatingChartHtml += '                        </div>'
    }

    seatingChartHtml += '</div>';
    seatingChartHtml += '</div>';
    let seatingChart = document.getElementsByClassName("seating_chart")[0];
    seatingChart.innerHTML = seatingChartHtml;
}

function setSeatNum(i) {
    seatNum = i;
    console.log(seatNum)
}
