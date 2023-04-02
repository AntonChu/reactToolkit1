import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 0, fact: 'the empire strikes back' }];

const serviceShowSlice = createSlice({
  name: "serviceShow",
  initialState,
  reducers: {
    showService: (state, action) => {
      const quantity = action.payload;

      function provideFact(quantity) {
        const data = [
            { id: 1, fact: 'прообразом Чубакки стал пёс режиссёр' },
            { id: 2, fact: 'актёрам разрешили подобрать любимый цвет для своих световых мечей' },
            { id: 3, fact: 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину' },
            { id: 4, fact: 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу' },
            { id: 5, fact: 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок' }
        ];

        return data.slice(0, quantity);
      }
      return [...provideFact(Number(quantity))];
    },
  }
});

export const { showService } = serviceShowSlice.actions;
export default serviceShowSlice.reducer;
