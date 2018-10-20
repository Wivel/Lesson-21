function addNull(num) {
    let str = String(num);
    if (str.length < 2) {
        str = '0' + str;
    }
    return str;
}

function getBirthday(elem) {
    let
        Arr         = String(elem.value).split('-'),
        BirtDate    = new Date(Arr[0], String((Number(Arr[1])-1)), Arr[2]),
        Now         = new Date(),
        MouthNow    = Now.getMonth(),
        ChangedYear = Now.getFullYear();
    if (MouthNow > Arr[1]) {
        ChangedYear++;
    }
    else {
        if (MouthNow == Arr[1] && Arr[2] > Now.getDate()) {
            ChangedYear++;
        }
    }
    let
        Needdate = new Date(String(ChangedYear),String((Number(Arr[1])-1)),Arr[2]),
        NeeddateSec = Needdate.getTime(),
        NowSec      = Now.getTime(),
        dif         = (NeeddateSec - NowSec)/(1000*60*60*24);
    alert(dif.toFixed())


}