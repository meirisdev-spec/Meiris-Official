import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { teamMember } from './teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, teamMember],
}
