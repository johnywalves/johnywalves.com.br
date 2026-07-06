import PropTypes from "prop-types"

const clientShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
})

const experienceItemShape = PropTypes.shape({
  period: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string),
  project: PropTypes.string,
  clients: PropTypes.arrayOf(clientShape),
})

const educationItemShape = PropTypes.shape({
  period: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.arrayOf(PropTypes.string),
  certificate: PropTypes.string,
  thesis: PropTypes.shape({
    title: PropTypes.string.isRequired,
    file: PropTypes.string,
  }),
  honors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
    })
  ),
})

const skillCategoryShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
})

const certificationShape = PropTypes.shape({
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  file: PropTypes.string,
  type: PropTypes.string,
  hours: PropTypes.number,
})

export const languagePropType = PropTypes.shape({
  seo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    position: PropTypes.string,
    headline: PropTypes.string.isRequired,
  }).isRequired,
  personal: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  ui: PropTypes.shape({
    labels: PropTypes.shape({
      and: PropTypes.string,
      hour: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      seeMore: PropTypes.string,
      seeLess: PropTypes.string,
      mostRecent: PropTypes.string,
      visit: PropTypes.string,
      sourceCode: PropTypes.string,
      search: PropTypes.string,
      notFound: PropTypes.string,
      backToHome: PropTypes.string,
    }).isRequired,
  }).isRequired,
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(experienceItemShape).isRequired,
  }).isRequired,
  education: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(educationItemShape).isRequired,
  }).isRequired,
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(skillCategoryShape).isRequired,
  }).isRequired,
  languages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        proficiency: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  certifications: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(certificationShape).isRequired,
  }).isRequired,
})
