import{
    boxofficeList
} from '../api/index.js'

export default{
    FETCH_NEWS(context) {
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

}