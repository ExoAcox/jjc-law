import 'server-only'

import en from '../dictionaries/en.json'
export type Dictionary = typeof en;

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    id: () => import('../dictionaries/id.json').then((module) => module.default),
}

const useDictionary = async (locale: 'en' | 'id') =>
    dictionaries[locale ?? "id"]()

export default useDictionary