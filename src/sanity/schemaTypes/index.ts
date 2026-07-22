import { type SchemaTypeDefinition } from 'sanity'

import { post } from './post'
import { teamMember } from './teamMember'
import { homePageType } from './homePageType'
import { productsPageType } from './productsPageType'
import { aboutPageType } from './aboutPageType'
import { careersPageType } from './careersPageType'
import { contactPageType } from './contactPageType'
import { solutionType } from './solutionType'
import { footerType } from './footerType'
import { navbarType } from './navbarType'
import { resourcesPageType } from './resourcesPageType'
import { resourceCategoryType } from './resourceCategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    solutionType,
    homePageType,
    aboutPageType,
    careersPageType,
    contactPageType,
    productsPageType,
    teamMember,
    footerType,
    navbarType,
    resourcesPageType,
    resourceCategoryType,
  ],
}
