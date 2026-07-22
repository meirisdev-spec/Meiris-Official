import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const resourceCategoryType = defineType({
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: 'e.g., Brochures, Case Studies',
    }),
  ],
})
