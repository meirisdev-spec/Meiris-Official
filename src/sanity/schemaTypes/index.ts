import { type SchemaTypeDefinition } from 'sanity'

import { post } from './post'
import { teamMember } from './teamMember'
import { homePageType } from './homePageType'
import { productsPageType } from './productsPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, teamMember, homePageType, productsPageType],
}
