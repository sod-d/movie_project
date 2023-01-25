import{
    boxofficeList
    ,movieDetail
} from '../api/index.js'

export default{
    FETCH_BOXOFFICE() {
        boxofficeList()
        .then(response => {
            console.log(response);
            //context.commit('SET_NEWS', response.data);
            return response;
        })
        .catch(function(error){
            console.log(error);
        });
    },
    FETCH_MOVIEDETAIL(movieCd) {
        movieDetail(movieCd)
        .then(response => {
            console.log(response);
            //context.commit('SET_NEWS', response.data);
            return response;
        })
        .catch(function(error){
            console.log(error);
        });
    },

}