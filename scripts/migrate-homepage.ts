import { getCliClient } from 'sanity/cli'
import fs from 'fs'
import path from 'path'

async function migrate() {
  const client = getCliClient()

  // Load translations
  const enPath = path.join(process.cwd(), 'messages/en.json')
  const esPath = path.join(process.cwd(), 'messages/es-419.json')
  
  const enMessages = JSON.parse(fs.readFileSync(enPath, 'utf8'))
  const esMessages = JSON.parse(fs.readFileSync(esPath, 'utf8'))

  const createHomePage = (lang: any, messages: any) => {
    return {
      _type: 'homePage',
      _id: `homePage-${lang}`,
      language: lang,
      hero: {
        title1: messages.Hero.title1,
        title2: messages.Hero.title2,
        title3: messages.Hero.title3,
        title4: messages.Hero.title4,
        title5: messages.Hero.title5,
        description: messages.Hero.description,
        btnExplore: messages.Hero.btnExplore,
        btnSolutions: messages.Hero.btnSolutions,
        videoUrl: '/videos/Home Page.mp4'
      },
      solutionsSection: {
        heading: messages.Solutions.heading,
        exploreText: messages.Solutions.explore,
        solutions: [
          {
            _key: 'sol-depot',
            title: messages.Solutions.depot.title,
            description: messages.Solutions.depot.description,
            href: `/${lang}/solutions/depot-infrastructure`,
            // image: we will leave image empty for now and let user upload or script can upload
          },
          {
            _key: 'sol-cpo',
            title: messages.Solutions.cpo.title,
            description: messages.Solutions.cpo.description,
            href: `/${lang}/solutions/charge-point-operators`,
          },
          {
            _key: 'sol-hosp',
            title: messages.Solutions.hospitality.title,
            description: messages.Solutions.hospitality.description,
            href: `/${lang}/solutions/hospitality-workplace`,
          },
          {
            _key: 'sol-res',
            title: messages.Solutions.residential.title,
            description: messages.Solutions.residential.description,
            href: `/${lang}/solutions/residential`,
          },
          {
            _key: 'sol-cus',
            title: messages.Solutions.custom.title,
            description: messages.Solutions.custom.description,
            href: `/${lang}/solutions/custom-solutions`,
          }
        ]
      },
      latestNewsSection: {
        heading: messages.LatestNews.heading,
        viewAll: messages.LatestNews.viewAll,
        readMore: messages.LatestNews.readMore,
      },
      contactSection: {
        heading: messages.Contact.heading,
        description: messages.Contact.description,
        namePlaceholder: messages.Contact.namePlaceholder,
        emailPlaceholder: messages.Contact.emailPlaceholder,
        messagePlaceholder: messages.Contact.messagePlaceholder,
        submitBtn: messages.Contact.submit,
      }
    }
  }

  const transaction = client.transaction()
  transaction.createOrReplace(createHomePage('en', enMessages))
  transaction.createOrReplace(createHomePage('es-419', esMessages))

  console.log('Committing home pages...')
  await transaction.commit()
  console.log('Migration complete!')
}

migrate().catch((err) => {
  console.error('Error during migration:', err)
  process.exit(1)
})
