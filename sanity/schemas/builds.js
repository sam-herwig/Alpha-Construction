import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';
// Sanity Icon Set: https://icons.sanity.build/all

export default defineType({
  name: 'singleBuild',
  title: 'Single Build',
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
      name: 'buildTitle',
      title: 'Build Title',
      type: 'string'
    }), 
    defineField({
      name: 'buildDescription',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'buildImage',
      title: 'Build Image',
      //description: 'Recommended image size: 2000px × 2500px (4:5 aspect ratio)',
      type: 'image'
    }),
  ]
});