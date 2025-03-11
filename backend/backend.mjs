import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilmSorted() {
    const record = await pb.collection("Film").getFullList({sort: 'date_projection',}) ;
    return record ;
}

export async function allActiviteSorted() {
    const record = await pb.collection("Activites").getFullList({sort: 'date',}) ;
    return record ;
}

export async function ActeurReaSorted() {
    const record = await pb.collection("Invite").getFullList({
        filter: 'role = "acteur" || role = "realisateur"',
        sort: 'nom',
    });
    return record ;
}

export async function FilmById(id) {
    const record = await pb.collection("Film").getOne(id) ;
    return record ;
}

export async function ActivitesById(id) {
    const record = await pb.collection("Activites").getOne(id) ;
    return record ;
}

export async function ActeurReaById(id) {
    const record = await pb.collection("Invite").getOne(id);
    return record;
}

export async function allActiviteByAnimateurId(id) {
    const record = await pb.collection("Activites").getFullList({
        filter: `animateur.id='${id}'`, expand: 'Invite'
    });
    return record;
}

export async function allActiviteByAnimateurNom(nom) {
    const records = await pb.collection('Activites').getFullList({
    filter: `animateur.nom ='${nom}'`, expand: 'Invite'
});
return records;
}

export async function UpdateFilm(id, data) {
    const record = await pb.collection("Film").update(id, data) ;
    return record ;
}

export async function UpdateActivite(id, data) {
    const record = await pb.collection("Activites").update(id, data) ;
    return record ;
}

export async function UpdateInvite(id, data) {
    const record = await pb.collection("Invite").update(id, data);
    return record;
}