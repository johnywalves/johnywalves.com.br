export type LangFile = {
  seo: {
    description: string
    position: string
    headline: string
  }
  personal: {
    name: string
    phone: string
    location: string
  }
  ui: {
    labels: {
      and: string
      hour: string
      completionIn: string
      about: string
      seeMore: string
      seeLess: string
      mostRecent: string
      visit: string
      sourceCode: string
      search: string
      notFound: string
      backToHome: string
    }
    searchResult: string
  }
  resume: {
    title: string
    files: Array<{
      language: string
      path: string
    }>
  }
  contact: {
    title: string
    message: string
  }
  coverLetter: string[]
  blog: {
    title: string
    category: string
    categories: string
    highlights: string
    all: string
    viewAll: string
    feed: string
  }
  comics: {
    title: string
    pagination: {
      first: string
      previous: string
      next: string
      last: string
    }
    all: string
    viewAll: string
    feed: string
  }
  languages: {
    title: string
    list: Array<{
      name: string
      proficiency: string
    }>
  }
  skills: {
    title: string
    categories: Array<{
      name: string
      items: Array<{
        name: string
        icon: string
      }>
    }>
  }
  certifications: {
    title: string
    seeMore: string
    list: Array<{
      date: string
      name: string
      issuer: string
      file: string
      type: string
      hours?: number
    }>
  }
  projects: {
    title: string
    sections: {
      featured: string
      others: string
    }
    viewAll: string
    viewFeatured: string
    list: Array<{
      name: string
      sourceCode?: string
      image: string
      url?: string
      description: string
      imagePosition?: string
    }>
  }
  miniProjects: {
    title: string
    list: Array<{
      name: string
      description: string
      url: string
    }>
  }
  education: {
    title: string
    seeMore: string
    list: Array<{
      period: string
      degree: string
      institution: string
      description: string[]
      details?: string[]
      certificate?: string
      thesis?: {
        title: string
        file: string
      }
      honors?: Array<{
        name: string
        file: string
      }>
    }>
  }
  experience: {
    title: string
    seeMore: string
    list: Array<{
      period: string
      role: string
      company: string
      location: string
      highlights?: string[]
      project?: string
      clients?: Array<{
        name: string
        highlights: string[]
      }>
    }>
  }
  utilities: {
    title: string
    cheatsheets: string
    tools: string
    colorExplorer: {
      title: string
    }
  }
  navigation: {
    menu: Array<{
      label: string
      url: string
    }>
    social: Array<{
      platform: string
      icon: string
      url: string
    }>
  }
}
