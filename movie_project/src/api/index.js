import axios from 'axios';

const config = {
    //기본 고정 값 설정
    kobisBaseUrl : "http://kobis.or.kr/kobisopenapi/webservice/rest/"
    ,searchDailyBoxOfficeList : "boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&"
    ,searchMovieInfo : "movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&"
}

function boxofficeList(selectDt){
    return axios.get(`${config.kobisBaseUrl}${config.searchDailyBoxOfficeList}targetDt=${selectDt}`);
 }

 function movieDetail(movieCd){
    return axios.get(`${config.kobisBaseUrl}${config.searchMovieInfo}movieCd=${movieCd}`);
 }

export {
    boxofficeList
    ,movieDetail
}