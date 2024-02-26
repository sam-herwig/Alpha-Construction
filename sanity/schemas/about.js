import { defineField, defineType } from 'sanity';
// import { HomeIcon } from '@sanity/icons';
// Sanity Icon Set: https://icons.sanity.build/all

export default defineType({
  name: 'about',
  title: 'About Module',
  type: 'document',
  singleton: true,
  // icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string', 
      hidden: true
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string'
    }), 
    defineField({
      name: 'aboutDescription',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
  ]
});