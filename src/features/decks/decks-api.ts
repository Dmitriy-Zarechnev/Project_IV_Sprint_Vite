import axios from 'axios'

// ----- Типизация Get запроса ------
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


// ----- Объект экземпляр для избежания дублирования ------
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
}