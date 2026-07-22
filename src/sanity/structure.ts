import type { StructureResolver } from 'sanity/structure'

const LANGUAGES = [
  { id: 'en', title: '🇬🇧 International English' },
  { id: 'es-419', title: 'Español (Latinoamérica)' },
]

const I18N_TYPES = ['post', 'teamMember', 'solution', 'homePage', 'productsPage', 'aboutPage', 'careersPage', 'contactPage', 'footer', 'navbar']

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Meiris Content')
    .items([
      // ── Insights / Blog Posts (multilingual) ──────────────────────────────
      S.listItem()
        .title('Insights & Posts')
        .child(
          S.list()
            .title('Insights & Posts')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Posts`)
                      .filter('_type == "post" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`post-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Solutions (multilingual) ──────────────────────────────────────────
      S.listItem()
        .title('Solutions')
        .child(
          S.list()
            .title('Solutions')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Solutions`)
                      .filter('_type == "solution" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`solution-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Team Members (multilingual) ───────────────────────────────────────
      S.listItem()
        .title('Team Members')
        .child(
          S.list()
            .title('Team Members')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Team`)
                      .filter('_type == "teamMember" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`teamMember-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Home Page (multilingual singleton) ────────────────────────────────
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Home Page`)
                      .filter('_type == "homePage" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`homePage-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Products Page (multilingual singleton) ────────────────────────────
      S.listItem()
        .title('Products Page')
        .child(
          S.list()
            .title('Products Page')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Products Page`)
                      .filter('_type == "productsPage" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`productsPage-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── About Page (multilingual singleton) ───────────────────────────────
      S.listItem()
        .title('About Page')
        .child(
          S.list()
            .title('About Page')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — About Page`)
                      .filter('_type == "aboutPage" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`aboutPage-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Careers Page (multilingual singleton) ───────────────────────────────
      S.listItem()
        .title('Careers Page')
        .child(
          S.list()
            .title('Careers Page')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Careers Page`)
                      .filter('_type == "careersPage" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`careersPage-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Contact Page (multilingual singleton) ───────────────────────────────
      S.listItem()
        .title('Contact Page')
        .child(
          S.list()
            .title('Contact Page')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Contact Page`)
                      .filter('_type == "contactPage" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`contactPage-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── Navbar (multilingual singleton) ───────────────────────────────
      S.listItem()
        .title('Navbar')
        .child(
          S.list()
            .title('Navbar by Language')
            .items([
              S.listItem()
                .title('English (EN)')
                .child(
                  S.document()
                    .schemaType('navbar')
                    .documentId('navbar-en')
                    .title('Navbar (EN)')
                ),
              S.listItem()
                .title('Español (ES)')
                .child(
                  S.document()
                    .schemaType('navbar')
                    .documentId('navbar-es-419')
                    .title('Navbar (ES)')
                ),
            ])
        ),
        
      // ── Footer (multilingual singleton) ───────────────────────────────
      S.listItem()
        .title('Footer')
        .child(
          S.list()
            .title('Footer')
            .items(
              LANGUAGES.map((lang) =>
                S.listItem()
                  .title(lang.title)
                  .child(
                    S.documentList()
                      .title(`${lang.title} — Footer`)
                      .filter('_type == "footer" && (language == $lang || ($lang == "en" && !defined(language)))')
                      .params({ lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`footer-${lang.id}`)
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // ── All documents (fallback view) ─────────────────────────────────────
      ...S.documentTypeListItems().filter(
        (item) => !I18N_TYPES.includes(item.getId() ?? '')
      ),
    ])
