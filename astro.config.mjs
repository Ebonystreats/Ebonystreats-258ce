starlight({
  title: 'Ebonys Treats and More',
  logo: { src: '/favicon.svg', alt: 'Ebonys Treats Logo' },
  nav: [
    { label: '🏠 Home', link: '/' }, // 👈 This adds the top nav link
    { label: 'Place an Order', link: '/guides/example/' },
    { label: 'Gallery', link: '/reference/example/' },
  ],
  social: [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
  ],
  sidebar: [
    {
      label: 'Orders',
      items: [
        { label: 'Place an Order', slug: 'guides/example' },
      ],
    },
    {
      label: 'Gallery',
      autogenerate: { directory: 'reference' },
    },
  ],
})
