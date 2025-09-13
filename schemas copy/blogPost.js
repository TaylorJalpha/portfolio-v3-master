import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: Rule => Rule.required().max(200)}),
    defineField({name: 'description', type: 'text', validation: Rule => Rule.required().max(500)}),
    defineField({name: 'metaDescription', type: 'string', validation: Rule => Rule.max(160)}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: Rule => Rule.required()}),
    defineField({name: 'content', type: 'blockContent'}),
  defineField({name: 'markdown', type: 'markdown', title: 'Markdown Content'}),
    defineField({name: 'featuredImage', type: 'image'}),
    defineField({name: 'status', type: 'string', options: {list: [
      {title: 'Draft', value: 'draft'},
      {title: 'Published', value: 'published'},
      {title: 'Archived', value: 'archived'}
    ]}, validation: Rule => Rule.required()}),
    defineField({name: 'publishedAt', type: 'datetime'}),
    defineField({name: 'tags', type: 'array', of: [{type: 'reference', to: [{type: 'tag'}]}]}),
    // If metadata fields are needed in the future, add them here.
    // defineField({name: 'metadata', type: 'object', fields: []})
  ]
})