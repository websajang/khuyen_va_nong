// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'iphone 14 Pro',
      description: 'best phone ever',
      category: 'phones',
      picture: '/iphone.png'
    },
    {
      name: 'iphone 20 Pro',
      description: 'best phone ever',
      category: 'phones',
      picture: '/iphone.png'
    },
    {
      name: 'iphone 40 Pro',
      description: 'best phone ever',
      category: 'phones',
      picture: '/iphone.png'
    },
    {
      name: 'headphone 40 Pro',
      description: 'best phone ever',
      category: 'headphones',
      picture: '/iphone.png'
    },
    {
      name: 'headPhone 50 Pro',
      description: 'best phone ever',
      category: 'headphones',
      picture: '/iphone.png'
    },
  ]
  )
}
