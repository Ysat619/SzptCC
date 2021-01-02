fileList = [];
chooseClass = [];

function handleChooseFile(index) {
    fileList.forEach((v, i) => {
        let row = document.getElementsByClassName("disk_list_row")[index];
        if (index == v.id) {
            let cb = document.getElementsByClassName("cb")[index];
            if (v.active) {
                row.className = "disk_list_row"
                cb.removeAttribute("checked")
            } else {
                row.className = "disk_list_row active1";
                cb.setAttribute("checked", "true");
            }
            v.active = !v.active;
        }

    })
}

function handleChooseClass(index) {
    chooseClass.forEach((v, i) => {
        let diskClass = document.getElementsByClassName("disk_class")[i];
        if (index == v.id) {
            // 如果匹配到是点击的index则改为激活状态, 并更新数组
            diskClass.className = "disk_class active1";
            v.active = true;
        } else {
            diskClass.className = "disk_class";
            v.active = false;
        }

    })
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

let diskList = document.getElementsByClassName("disk_list_row");
for (let i = 0; i < diskList.length; i++) {
    let id = diskList[i].getAttribute("data-index");
    fileList.push({
        "id": id,
        "active": false
    })
}

let diskClass = document.getElementsByClassName("disk_class");
for (let i = 0; i < diskClass.length; i++) {
    let id = diskClass[i].getAttribute("data-index");
    i === 0 ? chooseClass.push({"id": id, "active": true}) : chooseClass.push({"id": id, "active": false})
}