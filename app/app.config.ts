export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'NocturnLabs Docs'
  },
  header: {
    title: 'NocturnLabs',
    to: '/',
    logo: {
      alt: 'NocturnLabs',
      light: '/logo.png',
      dark: '/logo.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/yumlabs',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Built by NocturnLabs • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
<<<<<<< HEAD
      'to': 'https://github.com/NocturnLabs',
=======
      'to': 'https://github.com/yumlabs',
>>>>>>> 32992a0 (feat: initial commit of NocturnLabs docs site)
      'target': '_blank',
      'aria-label': 'NocturnLabs on GitHub'
    }]
  },
  toc: {
    title: 'On This Page',
    bottom: {
      title: 'Community',
<<<<<<< HEAD
      edit: 'https://github.com/NocturnLabs/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/NocturnLabs/docs',
=======
      edit: 'https://github.com/yumlabs/nocturnlabs-docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/yumlabs',
>>>>>>> 32992a0 (feat: initial commit of NocturnLabs docs site)
        target: '_blank'
      }]
    }
  }
})
