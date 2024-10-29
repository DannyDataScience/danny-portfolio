import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Danny Analytics",
  DESCRIPTION: "Welcome to Danny Analytics, a portfolio showcasing data-driven solutions and business expertise for the entertainment industry and other sectors.",
  AUTHOR: "Daniel Aguilar",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "daniel272aguilar@gmail.com",
    HREF: "mailto:daniel272aguilar@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "DannyDataScience",
    HREF: "https://github.com/DannyDataScience"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Daniel Aguilar",
    HREF: "https://www.linkedin.com/in/danielaguilargarcia/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Danny_Analytics",
    HREF: "https://x.com/Danny_Analytics",
  },
]

