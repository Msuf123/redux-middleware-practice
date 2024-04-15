export default function reducer(state,action){
 switch(action.type){
    case 'inc':
        return state+1
    default:
       return state
 }
}