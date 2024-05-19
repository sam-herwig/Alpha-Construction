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
       options: {
        source: 'buildTitle'
      },
      hidden: true
    }),
    defineField({
      name: 'buildTitle',
      title: 'Build Title',
      type: 'string'
    }), 
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug is a lowercase dashed name for the project URL. Press "Generate" to automatically create a slug from the title above.',
      options: {
        source: 'buildTitle'
      },
      validation: Rule => [
        Rule.required().custom((slug) => {
          if (typeof slug === "undefined") return true;
          const regex = /(^[a-z0-9-]+$)/;
          if(regex.test(slug.current)) {
            return true;
          } else {
            return 'Invalid slug: Only numbers, lowercase letters, and dashes are allowed.'
          }
        })
      ]
    }),
    defineField({
      name: 'buildDescription',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'buildAddress',
      title: 'Address',
      type: 'string'
    }),
    defineField({
      name: 'buildSquareFeet',
      title: 'Square Feet',
      type: 'string'
    }),
    defineField({
      name: 'buildArchitect',
      title: 'Architect',
      type: 'string'
    }),
    defineField({
      name: 'buildBedBath',
      title: 'Bed/Bath',
      type: 'string'
    }),
    defineField({
      name: 'buildImage',
      title: 'Build Image',
      //description: 'Recommended image size: 2000px × 2500px (4:5 aspect ratio)',
      type: 'image'
    }),
    defineField({
      name: 'exteriorImages',
      title: 'Exterior Images',
      type: 'array',
      of: [{ type: 'image' }]
    }), 
     defineField({
      name: 'interiorImages',
      title: 'Interior Images',
      type: 'array',
      of: [{ type: 'image' }]
    })
  ]
});