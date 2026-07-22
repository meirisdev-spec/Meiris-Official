import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'
import { CategoryDropdownInput } from '../components/CategoryDropdownInput'

export const resourcesPageType = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'tabCategories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add categories to sort the cards (e.g., "Brochures", "Specifications"). These will appear as tabs in the order specified.',
    }),
    defineField({
      name: 'resourceItems',
      title: 'Resource Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'cardCategory',
              title: 'Category',
              type: 'string',
              components: {
                input: CategoryDropdownInput,
              },
            }),
            defineField({
              name: 'cardTitle',
              title: 'Resource Title',
              type: 'string',
            }),
            defineField({
              name: 'cardFile',
              title: 'File Upload',
              type: 'file',
            }),
            defineField({
              name: 'cardVersion',
              title: 'Version Number',
              type: 'string',
              description: 'e.g., "v1.2"',
            }),
            defineField({
              name: 'cardUploadDate',
              title: 'Upload Date (Display)',
              type: 'string',
              description: 'e.g., "16 Jun 2026"',
            }),
            defineField({
              name: 'cardThumbnail',
              title: 'Card Thumbnail',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              media: 'thumbnail',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Resources Page Configuration',
      }
    },
  },
})
