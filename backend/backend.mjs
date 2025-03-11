import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilmSorted() {
    const record = await pb.collection("Film").getFullList({sort: 'date_projection',}) ;
    return record ;
}