import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export function getDayName(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  }
  
  export async function allActiviteSorted() {
    try {
      const activites = await pb.collection('Activites').getFullList({
        sort: 'date',
      });
      return activites;
    } catch (error) {
      console.error("Erreur lors de la récupération des activités:", error);
      return [];
    }
  }
  
  export async function getActivitiesByDay() {
    const activites = await allActiviteSorted();
    const activitesByDay = {};
    
    activites.forEach(activite => {
      const date = new Date(activite.date);
      const dateKey = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
      const dayName = getDayName(activite.date);
      
      if (!activitesByDay[dayName]) {
        activitesByDay[dayName] = {
          dayName: dayName,
          date: dateKey,
          activities: []
        };
      }
      
      activitesByDay[dayName].activities.push(activite);
    });
    
    return Object.values(activitesByDay).sort((a, b) => new Date(a.date) - new Date(b.date));
  }

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