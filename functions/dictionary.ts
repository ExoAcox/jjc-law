import 'server-only'

import id from '../dictionaries/id.json'
export type Dictionary = typeof id;

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    id: () => import('../dictionaries/id.json').then((module) => module.default),
}

const useDictionary = async (locale: 'en' | 'id') =>
    dictionaries[locale ?? "id"]()

export default useDictionary