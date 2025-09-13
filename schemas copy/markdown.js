export default {
  name: 'markdown',
  title: 'Markdown',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
};
