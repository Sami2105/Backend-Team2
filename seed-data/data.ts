function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    
     
    
      name: 'Nike Vapormax',
      description: 'Kind of squeaky on some floors',
      status: 'AVAILABLE',
      price: 83456,
      photo: {
        id: '5e2a142c689b2835ae71d1ab',
        filename: 'vapormax.jpg',
        originalFilename: 'vapormax.jpg',
        mimetype: 'image/jpeg',
        encoding: '7bit',
        _meta: {
          public_id: 'sick-fits-keystone/5e2a142c689b2835ae71d1ab',
          version: 1579815980,
          signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
          width: 1100,
          height: 735,
          format: 'jpg',
          resource_type: 'image',
          created_at: timestamp(),
          tags: [],
          bytes: 183071,
          type: 'upload',
          etag: '5550566c7fab113ba32d85ed08f54faa',
          placeholder: false,
          url:
            'http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
          secure_url:
            'https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
          original_filename: 'file',
        },
      },
     
    
    
  }
    
];
