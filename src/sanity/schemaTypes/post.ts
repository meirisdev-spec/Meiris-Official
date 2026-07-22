import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Insight / Post',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Path',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag1',
      title: 'Primary Tag (e.g., PRESS, BLOG)',
      type: 'string',
    }),
    defineField({
      name: 'tag2',
      title: 'Secondary Tag (e.g., HERO CHARGE PLUS)',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'details',
      title: 'Meta Details (e.g. PDF | 3.8 MB)',
      type: 'text',
      rows: 2,
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
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'contentCol2',
      title: 'Content (Right Column)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag1',
      media: 'image',
      language: 'language',
    },
    prepare({ title, subtitle, media, language }) {
      return {
        title,
        subtitle: `${language ? `[${language.toUpperCase()}] ` : ''}${subtitle || ''}`,
        media,
      }
    }
  }
})
