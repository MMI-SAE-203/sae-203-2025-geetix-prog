import { allFilmSorted } from './backend.mjs';

try {
    const record = await allFilmSorted();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}