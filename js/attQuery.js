// 模拟数据库查表
let attData = [
    {
        id: 0,
        name: "Java程序设计基础--20软件3 --秦高德老师",
        active: true,
        data: [
            {
                id: 1,
                week: "6周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 2,
                week: "7周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 3,
                week: "7周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 4,
                week: "7周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-10-21 10:03:29",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 5,
                week: "8周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-10-26 15:33:45",
                remark: ''
            },
            {
                id: 6,
                week: "8周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-10-26 18:20:50",
                remark: ''
            },
            {
                id: 7,
                week: "8周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "教师",
                time: "2020-11-30 20:02:44",
                remark: ''
            },
            {
                id: 8,
                week: "9周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-02 15:37:57",
                remark: ''
            },
            {
                id: 9,
                week: "9周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-02 18:23:38",
                remark: ''
            },
            {
                id: 10,
                week: "9周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "12",
                time: "2020-11-04 10:05:31",
                remark: ''
            },
            {
                id: 11,
                week: "10周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-09 15:34:39",
                remark: ''
            },
            {
                id: 12,
                week: "10周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-09 18:24:12",
                remark: ''
            },
            {
                id: 13,
                week: "10周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "30",
                time: "2020-11-11 10:01:26",
                remark: ''
            },
            {
                id: 14,
                week: "11周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-16 15:35:28",
                remark: ''
            },
            {
                id: 15,
                week: "11周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-16 18:27:59",
                remark: ''
            },
            {
                id: 16,
                week: "11周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-18 09:59:00",
                remark: ''
            },
            {
                id: 17,
                week: "12周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-23 15:31:14",
                remark: ''
            },
            {
                id: 18,
                week: "12周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-23 18:21:11",
                remark: ''
            },
            {
                id: 19,
                week: "12周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-25 09:58:09",
                remark: ''
            },
            {
                id: 20,
                week: "13周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-30 15:38:56",
                remark: ''
            },
            {
                id: 21,
                week: "13周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-11-30 18:28:04",
                remark: ''
            },
            {
                id: 22,
                week: "13周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-02 10:02:13",
                remark: ''
            },
            {
                id: 23,
                week: "14周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-07 15:34:16",
                remark: ''
            },
            {
                id: 24,
                week: "14周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-07 18:17:05",
                remark: ''
            },
            {
                id: 25,
                week: "14周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-09 10:00:26",
                remark: ''
            },
            {
                id: 26,
                week: "15周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-14 15:34:22",
                remark: ''
            },
            {
                id: 27,
                week: "15周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-14 18:23:16",
                remark: ''
            },
            {
                id: 28,
                week: "15周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-16 10:02:50",
                remark: ''
            },
            {
                id: 29,
                week: "16周",
                day: "星期一",
                section: "7-8节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-21 15:36:40",
                remark: ''
            },
            {
                id: 30,
                week: "16周",
                day: "星期一",
                section: "9-10节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-21 18:14:53",
                remark: ''
            },
            {
                id: 31,
                week: "16周",
                day: "星期三",
                section: "3-4节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "32",
                time: "2020-12-23 10:04:49",
                remark: ''
            },
        ]
    },
    {
        id: 1,
        name: "人工智能引论--20软件3 --李云程老师",
        active: false,
        data: [
            {
                id: 1,
                week: "6周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 2,
                week: "7周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 3,
                week: "8周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "1.5.3",
                time: "2020-10-27 13:57:49",
                remark: ''
            },
            {
                id: 4,
                week: "9周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "1.5.4",
                time: "2020-11-03 13:59:43",
                remark: ''
            },
            {
                id: 5,
                week: "10周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.2.1",
                time: "2020-11-10 13:57:37",
                remark: ''
            },
            {
                id: 6,
                week: "11周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.2.4",
                time: "2020-11-17 13:51:29",
                remark: ''
            },
            {
                id: 7,
                week: "12周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.1.2",
                time: "2020-11-24 13:52:23",
                remark: ''
            },
            {
                id: 8,
                week: "13周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.2.3",
                time: "2020-12-01 13:53:54",
                remark: ''
            },
            {
                id: 9,
                week: "14周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.2.4",
                time: "2020-12-08 13:48:08",
                remark: ''
            },
            {
                id: 10,
                week: "15周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "1.5.1",
                time: "2020-12-15 13:43:19",
                remark: ''
            },
            {
                id: 11,
                week: "16周",
                day: "星期二",
                section: "5-6节",
                sectionCount: "2节",
                attStatus: "正常",
                seatNum: "2.1.2",
                time: "2020-12-22 13:49:41",
                remark: ''
            },
        ]
    },
    {
        id: 2,
        name: "网页设计与制作技术--20软件3 --肖乐萍老师",
        active: false,
        data: [
            {
                id: 1,
                week: "6周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "请假",
                seatNum: "系统",
                time: "2020-10-20 15:49:30",
                remark: '“新增学生”(蔡思翔老师)'
            },
            {
                id: 2,
                week: "7周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "23",
                time: "2020-10-23 08:14:58",
                remark: ''
            },
            {
                id: 3,
                week: "8周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "请假",
                seatNum: "教师",
                time: "2020-10-30 08:18:49",
                remark: ''
            },
            {
                id: 4,
                week: "9周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "33",
                time: "2020-11-06 08:16:31",
                remark: ''
            },
            {
                id: 5,
                week: "10周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-11-13 08:17:15",
                remark: ''
            },
            {
                id: 6,
                week: "11周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-11-20 08:20:24",
                remark: ''
            },
            {
                id: 7,
                week: "12周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-11-27 08:12:48",
                remark: ''
            },
            {
                id: 8,
                week: "13周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-12-04 08:16:37",
                remark: ''
            },
            {
                id: 9,
                week: "14周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-12-11 08:16:51",
                remark: ''
            },
            {
                id: 10,
                week: "15周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-12-18 08:18:51",
                remark: ''
            },
            {
                id: 11,
                week: "16周",
                day: "星期五",
                section: "1-2-3-4节",
                sectionCount: "4节",
                attStatus: "正常",
                seatNum: "系统",
                time: "2020-12-25 08:14:19",
                remark: ''
            },
        ]
    },
    {
        id: 3,
        name: "算法思维及工程应用--校任选课--邓雪峰老师",
        active: false,
        data: [
            {
                week: "3周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "正常",
                seatNum: "教师",
                time: "2020-09-29 11:56:57",
                remark: ''
            },
            {
                week: "4周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "正常",
                seatNum: "15",
                time: "2020-09-29 13:48:45",
                remark: ''
            },
            {
                week: "6周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "正常",
                seatNum: "14",
                time: "2020-10-13 13:49:12",
                remark: ''
            },
            {
                week: "7周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "请假",
                seatNum: "教师",
                time: "2020-10-20 13:43:59",
                remark: ''
            },
            {
                week: "8周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-10-28 03:00:03",
                remark: ''
            },
            {
                week: "9周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-11-04 03:00:03",
                remark: ''
            },
            {
                week: "10周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-11-11 03:00:05",
                remark: ''
            },
            {
                week: "11周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-11-18 03:00:04",
                remark: ''
            },
            {
                week: "12周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-11-25 03:00:04",
                remark: ''
            },
            {
                week: "13周",
                day: "星期二",
                section: "5-6-7节",
                sectionCount: "3节",
                attStatus: "旷课",
                seatNum: "系统",
                time: "2020-12-02 03:00:05",
                remark: ''
            },
        ]
    }
];

let classes = document.getElementsByClassName("disk_classes_wrap")[0];
let classesHtml = '';
attData.forEach((v, i) => {
    let className = v.name;
    if (v.active) {
        classesHtml += ' <div class="disk_class active1" onclick="handleChooseClass(' + i + ')" data-index="' + i + '"><span class="iconfont' +
            ' icon-kecheng"></span>' + className + '</div>';
        loadAttData(i);
    } else {
        classesHtml += ' <div class="disk_class" onclick="handleChooseClass(' + i + ')" data-index="' + i + '"><span class="iconfont' +
            ' icon-kecheng"></span>' + className + '</div>';
    }
});
classes.innerHTML = classesHtml;

function loadAttData(i) {
    let tbodyEle = document.getElementsByTagName("tbody")[0];
    let tbodyHtml = '';
    // 正常考勤次数
    let normalSum = 0;
    // 迟到次数
    let lateSum = 0;
    // 早退次数
    let earlySum = 0;
    // 旷课次数
    let truantSum = 0;
    // 请假次数
    let leaveSum = 0;
    attData[i].data.forEach((v, i) => {
        tbodyHtml += '<tr class="disk_list_row">\n' +
            '                            <td>' + v.week + '</td>\n' +
            '                            <td>' + v.day + '</td>\n' +
            '                            <td>' + v.section + '</td>\n' +
            '                            <td>' + v.sectionCount + '</td>\n' +
            '                            <td class="att_status_' + getAttStatus(v.attStatus) + '">' + v.attStatus + '</td>\n' +
            '                            <td>' + v.seatNum + '</td>\n' +
            '                            <td>' + v.time + '</td>\n' +
            '                            <td>' + v.remark + '</td>\n' +
            '                        </tr>';
        if (v.attStatus === "正常") {
            normalSum++;
        } else if (v.attStatus === "迟到") {
            lateSum++;
        } else if (v.attStatus === "早退") {
            earlySum++;
        } else if (v.attStatus === "旷课") {
            truantSum++;
        } else if (v.attStatus === "请假") {
            leaveSum++;
        }
    });
    // 总记录数
    document.getElementById("att_count").innerText = attData[i].data.length;
    // 正常
    document.getElementById("att_normal_num").innerText = normalSum;
    // 迟到
    document.getElementById("att_late_num").innerText = lateSum;
    // 早退
    document.getElementById("att_early_num").innerText = earlySum;
    // 旷课
    document.getElementById("att_truant_num").innerText = truantSum;
    // 请假
    document.getElementById("att_leave_num").innerText = leaveSum;
    tbodyEle.innerHTML = tbodyHtml;
}

function getAttStatus(text) {
    if (text === "正常") {
        return "normal";
    } else if (text === "迟到") {
        return "late";
    } else if (text === "早退") {
        return "early";
    } else if (text === "旷课") {
        return "truant";
    } else if (text === "请假") {
        return "leave";
    }
}

function handleChooseClass(index) {
    attData.forEach((v, i) => {
        let classes = document.getElementsByClassName("disk_class")[i];
        if (i === index) {
            v.active = true;
            classes.className = "disk_class active1";
            loadAttData(i);
        } else {
            v.active = false;
            classes.className = "disk_class";
        }
    });
}

onscroll = function () {
    // 左侧课程选择栏随着滚动条的位置而改变
    if (document.documentElement.scrollTop > 60) {
        let ele = document.getElementsByClassName("disk_left_class_wrap")[0];
        ele.style.top = "0";
    } else {
        let ele = document.getElementsByClassName("disk_left_class_wrap")[0];
        let dist = 65 - document.documentElement.scrollTop;
        ele.style.top = dist + "px";
    }
};