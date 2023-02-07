import axios from 'axios';

const config = {
    //기본 고정 값 설정
    kobisBaseUrl : "http://kobis.or.kr/kobisopenapi/webservice/rest/"
    ,searchDailyBoxOfficeList : "boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&"
    ,searchMovieInfo : "movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&"
    ,naverClientId : 'Qkvw61PUxEekTNRfc13g'
    ,naverClientSecret : 'WrVenJRFEp'
}

function boxofficeList(selectDt){
    return axios.get(`${config.kobisBaseUrl}${config.searchDailyBoxOfficeList}targetDt=${selectDt}`);
 }

 function movieDetail(movieCd){
    return axios.get(`${config.kobisBaseUrl}${config.searchMovieInfo}movieCd=${movieCd}`);
 }

 function movieSearch(movieNm){
    return axios.get('v1/search/movie.json?',
        {
            params : { query : movieNm}
            ,headers : {
            'X-Naver-Client-Id': config.naverClientId
            ,'X-Naver-Client-Secret': config.naverClientSecret
            }
        }
    );
 }

export {
    boxofficeList
    ,movieDetail
    ,movieSearch
}