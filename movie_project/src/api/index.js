import axios from 'axios';

function config(){
    //기본 고정 값 설정
}

function boxofficeList(selectDt){
    return axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + selectDt);
}

export {
    boxofficeList
}