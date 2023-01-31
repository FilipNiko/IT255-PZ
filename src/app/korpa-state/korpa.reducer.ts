import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Knjiga } from '../modeli/knjiga';
import { dodajKnjigu, izbrisiKnjigu, ocistiKorpu } from './korpa.actions';

export const pocetnaKorpa: Knjiga[] = [];

export const korpaReducer = createReducer(
    pocetnaKorpa,

    on(ocistiKorpu, _ => []),
    
    on(dodajKnjigu, (korpaUnosi, unos) => {
        const korpaClone: Knjiga[] = JSON.parse(JSON.stringify(korpaUnosi));
        korpaClone.push(unos);
        return korpaClone;
      }),

      on(izbrisiKnjigu, (korpaUnosi, unos) => {
        const korpaClone: Knjiga[] = JSON.parse(JSON.stringify(korpaUnosi));
        const found = korpaClone.find(u => u.id == unos.id);
        if (found) {
            korpaClone.splice(korpaClone.indexOf(found), 1)
        }
        return korpaClone;
      })
)


export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
}