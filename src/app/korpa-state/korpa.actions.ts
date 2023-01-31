import { createAction, props } from '@ngrx/store';
import { Knjiga } from '../modeli/knjiga';

export const dodajKnjigu = createAction('Dodaj Knjigu', props<Knjiga>());
export const izbrisiKnjigu = createAction('Izbrisi Knjigu', props<Knjiga>());
export const ocistiKorpu = createAction('Ocisti Korpu');