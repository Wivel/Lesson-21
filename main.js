function addNull(num) {
    let str = String(num);
    if (str.length < 2) {
        str = '0' + str;
    }
    return str;
}

function delNull(string) {
    let str = String(string);
    for (let i = 0; i < str.length;) {
        if (str[i] == '0') {
            str = str.substr(i + 1);
        }
        else {
            break;
        }
    }
    return str;
}

function getBirthday_old(elem) {
    let
        Arr = String(elem.value).split('-'),
        BirtDate = new Date(Arr[0], String((Number(Arr[1]) - 1)), Arr[2]),
        Now = new Date(),
        MouthNow = Now.getMonth(),
        ChangedYear = Now.getFullYear();
    if (MouthNow > (Arr[1] - 1)) {
        ChangedYear++;
    }
    else {
        if (MouthNow == (Arr[1] - 1) && Arr[2] > Now.getDate()) {
            ChangedYear++;
        }
    }
    // let
    //     Needdate = new Date(String(ChangedYear),String((Number(Arr[1])-1)),Arr[2]),
    //     NeeddateSec = Needdate.getTime(),
    //     NowSec      = Now.getTime(),
    //     dif         = (NeeddateSec - NowSec)/(1000*60*60*24);
    alert(ChangedYear);


}

function getBirthday(elem) {
    let Day, Mouth, Year,
        arr   = [];
        arr   = elem.value.split('-');
    if (arr[0].length == 4 && arr[1].length == 2 && arr[2].length == 2) {
        alert('right');
        Day     = delNull(arr[2]);
        Mouth   = delNull(arr[1]);
        Year    = delNull(arr[0]);
    } else {
        alert('Неправильно введены данные');
        return 0;
    }

}