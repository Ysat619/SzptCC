/**
 * 处理点击标签切换状态事件
 */
function handleTapHead(e) {
    let url;
    if (e === 0) {
        url = "index.html";
    } else if (e === 1) {
        url = "disk.html"
    } else if (e === 2) {
        url = "sign_in.html"
    } else if (e === 3) {
        url = "exam.html"
    } else if (e === 4) {
        url = "shared_file.html"
    } else if (e === 5) {
        url = "stu_function.html"
    } else if (e === 6) {
        url = "user_info.html"
    }
    if (getLoggedStatus()) {
        location.href = url + "?login=root";
    } else {
        location.href = url;
    }
}

/**
 * 获取当前页面的index(未登录情况)
 * @returns {*}
 */
function getPageIndex_notLogged() {
    let index;
    if (location.href.indexOf("index.html") >= 0) {
        index = 0;
    } else if (location.href.indexOf("sign_in.html") >= 0) {
        index = 1;
    } else if (location.href.indexOf("exam.html") >= 0) {
        index = 2;
    } else if (location.href.indexOf("shared_file.html") >= 0) {
        index = 3;
    }
    return index;
}

/**
 * 获取当前页面的index(已登录情况)
 * @returns {*}
 */
function getPageIndex_Logged() {
    let index;
    if (location.href.indexOf("stu_function.html") >= 0) {
        index = 0;
    } else if (location.href.indexOf("disk.html") >= 0) {
        index = 1;
    } else if (location.href.indexOf("sign_in.html") >= 0) {
        index = 2;
    } else if (location.href.indexOf("exam.html") >= 0) {
        index = 3;
    } else if (location.href.indexOf("shared_file.html") >= 0) {
        index = 4;
    } else if (location.href.indexOf("user_info.html") >= 0) {
        index = 5;
    } else {
        index = 0;
    }
    return index;
}

/**
 * 判断是否登录
 * @returns {*}
 */
function getLoggedStatus() {
    return location.href.indexOf("login=root") > 0;
}

function toggle(index) {
    Tags.forEach((v, i) => {
        let tagId = "head_tag" + v.id;
        let tag = document.getElementById(tagId);
        if (v.id === index) {
            tag.className = "active";
            v.active = true;
        } else {
            tag.removeAttribute("class");
            v.active = false;
        }
    });
}

let Tags = [
    {
        id: 0,
        active: true
    },
    {
        id: 1,
        active: false
    },
    {
        id: 2,
        active: false
    },
    {
        id: 3,
        active: false
    },
    {
        id: 4,
        active: false
    },
    {
        id: 5,
        active: false
    }];

onload = function () {
    writeFooter();
    try {
        if (!getLoggedStatus()) {
            notLoggedHead(getPageIndex_notLogged());
        } else {
            alreadyLoggedHead(getPageIndex_Logged());
        }
    } catch (e) {
        location.href = "index.html";
    }

};

function writeFooter() {
    document.getElementById("footer").innerHTML = '<div class="bottom_wrap">Copyright ©\n' +
        '        <a href="https://www.szpt.edu.cn/" class="link">深圳职业技术学院&nbsp;</a>\n' +
        '        Power by 20软件3李嘉兴\n' +
        '    </div>';
}

function handlePopup() {
    let popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "root" && password === "root") {
        alert("登录成功!");
        location.href = "stu_function.html?login=root";
    } else {
        alert("账号或密码错误!")
    }
}

/**
 * 未登录情况下的head
 */
function notLoggedHead(index) {
    document.getElementsByClassName("index_head_wrap")[0].innerHTML = '<div class="head_empty_wrap"></div>\n' +
        '        <div class="head_left">\n' +
        '            <div class="head_title"><img src="img/logo.png" alt="">CC教学辅助平台</div>\n' +
        '        </div>\n' +
        '        <div class="head_right">\n' +
        '            <div class="head_tag" onclick="handleTapHead(0)" >\n' +
        '                <span class="iconfont icon-shouye"></span>网站首页\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(2)">\n' +
        '                <span class="iconfont icon-qiandao"></span>签到考勤\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(3)">\n' +
        '                <span class="iconfont icon-kaoshi"></span>考试结果上传\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(4)">\n' +
        '                <span class="iconfont icon-gongxiangbeifen"></span>共享文件下载\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="head_empty_wrap"></div>';
    document.getElementsByClassName("head_tag")[index].className = "active";
}

/**
 * 登录情况下的head
 */
function alreadyLoggedHead(index) {
    document.getElementsByClassName("index_head_wrap")[0].innerHTML = '<div class="head_empty_wrap"></div>\n' +
        '        <div class="head_left">\n' +
        '            <div class="head_title"><img src="img/logo.png" alt="">CC教学辅助平台</div>\n' +
        '        </div>\n' +
        '        <div class="head_right">\n' +
        '            <div class="head_tag" onclick="handleTapHead(5)">\n' +
        '                <span class="iconfont icon-shouye"></span>学生功能\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(1)">\n' +
        '                <span class="iconfont icon-wangpan"></span>CC网盘\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(2)">\n' +
        '                <span class="iconfont icon-qiandao"></span>签到考勤\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(3)">\n' +
        '                <span class="iconfont icon-kaoshi"></span>考试结果上传\n' +
        '            </div>\n' +
        '            <div class="head_tag" onclick="handleTapHead(4)">\n' +
        '                <span class="iconfont icon-gongxiangbeifen"></span>共享文件下载\n' +
        '            </div>\n' +
        '            <div class="head_tag user_info" onclick="handleTapHead(6)">\n' +
        '                <span class="iconfont icon-xingmingyonghumingnicheng"></span>当前用户: 李嘉兴\n' +
        '            </div>\n' +
        '            <div class="log_out" onclick="logOut();">\n' +
        '                <span class="iconfont icon-tuichu"></span>退出登录\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="head_empty_wrap"></div>';
    document.getElementsByClassName("head_tag")[index].className = "head_tag active";
}

/**
 * 退出登录
 */
function logOut() {
    if (confirm("您确定退出登录吗?")) {
        location.href = "index.html";
    }
}

function handleStuFunction(i) {
    let url;
    if (i === 0) {
        // 网盘
        url = "disk.html";
    } else if (i === 1) {
        // 签到考勤
        url = "sign_in.html";
    } else if (i === 2) {
        // 考勤查询
        url = "attendance_query.html";
    } else if (i === 3) {
        // 考试上传
        url = "exam.html";
    } else if (i === 4) {
        // 共享文件
        url = "shared_file.html";
    } else if (i === 5) {
        // 软件下载
        url = "softwareDownload.html";
    } else if (i === 6) {
        // 个人设定
        url = "user_info.html";
    } else if (i === 7) {
        // 登陆记录
        url = "login_record.html";
    } else if (i === 8) {
        logOut();
        return;
    } else {
        alert("test");
        return;
    }
    location.href = url + "?login=root";
}

/**
 * 处理登录时键盘回车事件
 * @param e
 */
function handleLoginEnter(e) {
    if (e.keyCode === 13) {
        handleLogin();
    }
}

function show_user_edit() {
    let userInfo = document.getElementsByClassName("user_info_table")[0];
    userInfo.style.display = "none";
    let userEdit = document.getElementsByClassName("user_edit_wrap")[0];
    userEdit.style.display = "inline";
}

function hidden_user_edit() {
    let userEdit = document.getElementsByClassName("user_edit_wrap")[0];
    userEdit.style.display = "none";
    let userInfo = document.getElementsByClassName("user_info_table")[0];
    userInfo.style.display = "flex";
}

/**
 * 处理用户设置提交按钮单击
 */
function handleUserEditSubmit() {
    alert("提交成功!");
    hidden_user_edit();
}

/**
 * 处理用户设置取消按钮单击
 */
function handleUserEditCancel() {
    hidden_user_edit();
}