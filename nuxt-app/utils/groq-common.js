export const typeFilter = function(type, slug) {
  if(slug) {
    if(!slug.includes('^')) {
      slug = `'${slug}'`;
    }
    return `
      coalesce(
        *[_type == '${type}' && slug.current == ${slug} && _id in path('drafts.**')][0],
        *[_type == '${type}' && slug.current == ${slug}][0]
      )
    `;
  } else {
    return `
      coalesce(
        *[_type == '${type}' && _id in path('drafts.**')][0],
        *[_type == '${type}'][0],
      )
    `;
  }
};

export const imageProjection = `
  {
    'src': asset->url,
    'width': asset->metadata.dimensions.width,
    'height': asset->metadata.dimensions.height,
    'focalPointX': coalesce(hotspot.x, 0.5),
    'focalPointY': coalesce(hotspot.y, 0.5),
    'lqip': asset->metadata.lqip
  }
`;
