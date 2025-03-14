import PocketBase from 'pocketbase' ;
const pb = new PocketBase("https://miaullywood-sae.mathis-guellati.fr:443") ;

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
  try {
      let record = await pb.collection('Film').getFullList({
          sort: 'date_projection',
      });
      record = record.map((film) => {
          film.img = pb.files.getURL(film, film.affiche_film);
          return film;
      });
      return record;
  } catch (error) {
      console.log('Une erreur est survenue en lisant la liste des films', error);
      return [];
  }
}

export async function getInviteByRole(role) {
  const inviteRole = await pb.collection('Invite').getFullList({
      filter: `role = '${role}'`,
  });
  inviteRole.forEach((invite) => {
      invite.img = pb.files.getURL(invite, invite.photo);
  });
  return inviteRole;  
}

export async function ActeurReaSorted() {
    let record = await pb.collection("Invite").getFullList({
        filter: 'role = "acteur" || role = "realisateur"',
        sort: 'nom',
    });
    record = record.map((invite) => {
      invite.img = pb.files.getURL(invite, invite.photo);
      return invite;
  });
    return record ;
}

export async function allFestival() {
    const record = await pb.collection("Festival").getFullList() ;
    return record ;
}

export async function FilmById(id) {
  try {
      let data = await pb.collection('Film').getOne(id);
      data.imageUrl = pb.files.getURL(data, data.affiche_film);
      return data;
  } catch (error) {
      console.log('Une erreur est survenue en lisant la maison', error);
      return null;
  }
}

export async function ActivitesById(id) {
    const record = await pb.collection("Activites").getOne(id) ;
    return record ;
}

export async function ActeurReaById(id) {
    let record = await pb.collection("Invite").getOne(id);
    record.img = pb.files.getURL(record, record.photo);
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

export async function addFilm(data) {
    const record = await pb.collection("Film").create(data) ;
    return record ;
}

export async function addActivite(data) {
    const record = await pb.collection("Activites").create(data) ;
    return record ;
}

export async function addInvite(data) {
    const record = await pb.collection("Invite").create(data);
    return record;
}