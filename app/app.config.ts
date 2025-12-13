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
      'to': 'https://github.com/NocturnLabs/docs',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Built by NocturnLabs • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/NocturnLabs',
      'target': '_blank',
      'aria-label': 'NocturnLabs on GitHub'
    }]
  },
  toc: {
    title: 'On This Page',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/NocturnLabs/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/NocturnLabs/docs',
        target: '_blank'
      }]
    }
  }
})
