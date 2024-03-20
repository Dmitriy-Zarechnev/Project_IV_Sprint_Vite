import axios from 'axios'

// ----- Типизация запроса ------
export type SwaggerGetResponseType = {
  items: Array<ItemsResponseType>,
  pagination: PaginationResponseType
}

export type ItemsResponseType = {
  author: AuthorResponseType,
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number
}

export type AuthorResponseType = {
  id: string,
  name: string
}

type PaginationResponseType = {
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  totalItems: number
}


// *********** Объект экземпляр для избежания дублирования **********
export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksAPI = {
  // ----- Запросили decks с сервера ------
  getDecks() {
    return instance.get<SwaggerGetResponseType>(`v2/decks`)
      .then(res => res.data) // getDecksData
  },

  // ----- Создали deck и отправили на сервер ------
  createDeck(name: string) {
    return instance.post<ItemsResponseType>(`v1/decks`, { name })
      .then(res => res.data) // createDeckData
  },

  // ----- Удалили deck ------
  deleteDeck(id: string) {
    return instance.delete<ItemsResponseType>(`v1/decks/${id}`)
      .then(res => res.data) // deleteDeckData
  },
  // ----- Update deck ------
  updateDeck(deck: AuthorResponseType) {
    return instance.patch<ItemsResponseType>(`v1/decks/${deck.id}`, { name: deck.name })
      .then(res => res.data) // updateDeckData
  },
}