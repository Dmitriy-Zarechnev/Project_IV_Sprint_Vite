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

type AuthorResponseType = {
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
      .then(res => res.data) // createDecksData
  },
}