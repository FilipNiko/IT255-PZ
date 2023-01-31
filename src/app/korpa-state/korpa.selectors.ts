import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Knjiga } from '../modeli/knjiga';
import { GrupaKnjiga } from '../modeli/grupaKnjiga';


export const selectBrojKnjiga = createSelector(
    createFeatureSelector('korpaUnosi'),
    (state: Knjiga[]) => {
        return state.length;
    }
);

export const selectUkupnaCena = createSelector(
    createFeatureSelector('korpaUnosi'),
    (state: Knjiga[]) => {
        var ukupnaCena = 0;
        state.forEach(knjiga => ukupnaCena += knjiga.cena);
        return ukupnaCena;
    }
);



export const selectGrupovaneKnjige = createSelector(
    createFeatureSelector('korpaUnosi'),
    (state: Knjiga[]) => {
        var map: Map<number, GrupaKnjiga> = new Map;

        state.forEach(knjiga => {
            if (map.get(knjiga.id)) {
                (map.get(knjiga.id) as GrupaKnjiga).broj++
            } else {
                map.set(knjiga.id, { knjiga: knjiga, broj: 1 });
            }
        })

        const sortedMap = new Map([...map.entries()].sort());
        return Array.from(sortedMap.values());
    }
);