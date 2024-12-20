import { Location } from 'history'
import { HttpError } from '@tetsuo/axios-ts/lib/Error'
import { Location as Route, parse } from './Router'
import { Movie, SearchResult } from '../tmdb/model'

export interface Navigate {
  readonly _tag: 'Navigate'
  readonly route: Route
}

export function navigate(location: Location): Navigate {
  return { _tag: 'Navigate', route: parse(`${location.pathname}${location.search}`) }
}

export interface PushUrl {
  readonly _tag: 'PushUrl'
  readonly url: string
}

export function pushUrl(url: string): PushUrl {
  return { _tag: 'PushUrl', url }
}

export interface UpdateSearchTerm {
  readonly _tag: 'UpdateSearchTerm'
  readonly term: string
}

export function updateSearchTerm(term: string): UpdateSearchTerm {
  return { _tag: 'UpdateSearchTerm', term }
}

export const SubmitSearch = { _tag: 'SubmitSearch' } as const

export interface SetHttpError {
  readonly _tag: 'SetHttpError'
  readonly error: HttpError
}

export const setHttpError = (error: HttpError): SetHttpError => ({ _tag: 'SetHttpError', error })

export interface SetNotification {
  readonly _tag: 'SetNotification'
  readonly severity: 'error'
  readonly text: string
}

export const setNotification = (severity: 'error', text: string): SetNotification => ({
  _tag: 'SetNotification',
  severity,
  text,
})

export interface SetSearchResults {
  readonly _tag: 'SetSearchResults'
  readonly results: Array<SearchResult>
}

export interface SetPopularResults {
  readonly _tag: 'SetPopularResults'
  readonly results: Array<SearchResult>
}

export const setSearchResults = (results: Array<SearchResult>): SetSearchResults => ({
  _tag: 'SetSearchResults',
  results,
})

export const setPopularResults = (results: Array<SearchResult>): SetPopularResults => ({
  _tag: 'SetPopularResults',
  results,
})

export interface SetMovie {
  readonly _tag: 'SetMovie'
  readonly movie: Movie
}

export const setMovie = (movie: Movie): SetMovie => ({
  _tag: 'SetMovie',
  movie,
})

export type Msg =
  | Navigate
  | PushUrl
  | UpdateSearchTerm
  | typeof SubmitSearch
  | SetHttpError
  | SetNotification
  | SetSearchResults
  | SetPopularResults
  | SetMovie
