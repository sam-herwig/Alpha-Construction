import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';
// Sanity Icon Set: https://icons.sanity.build/all

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  singleton: true,
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string', 
      hidden: true
    }),
    defineField({
      name: 'homeTitle',
      title: 'Home Title',
      type: 'string'
    }), 
    defineField({
      name: 'homeDescription',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
  ]
});