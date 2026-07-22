import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'
import { InsightsCategoryDropdown } from '../components/InsightsCategoryDropdown'

export const insightsPageType = defineType({
  name: 'insightsPage',
  title: 'Insights Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
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
      description: 'Add categories to sort the blog posts (e.g., "Press Releases", "Announcements"). These will appear as tabs in the order specified. These categories will also be available when creating Blog Posts.',
    }),
    defineField({
      name: 'insightsItems',
      title: 'Insights Posts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'postCategory',
              title: 'Category',
              type: 'string',
              components: {
                input: InsightsCategoryDropdown,
              },
            }),
            defineField({
              name: 'publishedAt',
              title: 'Published at',
              type: 'datetime',
            }),
            defineField({
              name: 'details',
              title: 'Meta Details (e.g. Read Time or Author)',
              type: 'text',
              rows: 2,
              description: 'Optional. e.g. "5 MIN READ\\nWritten by John Doe"',
            }),
            defineField({
              name: 'image',
              title: 'Cover Image',
              type: 'image',
              options: { hotspot: true }
            }),
            defineField({
              name: 'contentCol1',
              title: 'Content (Left Column)',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal Paragraph', value: 'normal' },
                    { title: 'Heading 2', value: 'h2' },
                    { title: 'Subheading (H3)', value: 'h3' },
                  ],
                  lists: [{ title: 'Bullet List', value: 'bullet' }],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
                { type: 'image', options: { hotspot: true } },
              ],
            }),
            defineField({
              name: 'contentCol2',
              title: 'Content (Right Column)',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal Paragraph', value: 'normal' },
                    { title: 'Heading 2', value: 'h2' },
                    { title: 'Subheading (H3)', value: 'h3' },
                  ],
                  lists: [{ title: 'Bullet List', value: 'bullet' }],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
                { type: 'image', options: { hotspot: true } },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'postCategory',
              media: 'image',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Post',
                subtitle: subtitle || 'Uncategorized',
                media,
              }
            }
          }
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      language: 'language',
    },
    prepare({ title, language }) {
      return {
        title: title || 'Insights Page',
        subtitle: language ? `[${language.toUpperCase()}]` : '',
      }
    },
  },
})
