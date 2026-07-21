import type { StructureResolver } from 'sanity/structure'

const LANGUAGES = [
  { id: 'en', title: '🇬🇧 International English' },
  { id: 'es-419', title: 'Español (Latinoamérica)' },
]

const I18N_TYPES = ['post', 'teamMember', 'homePage', 'productsPage']

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

      // ── All documents (fallback view) ─────────────────────────────────────
      ...S.documentTypeListItems().filter(
        (item) => !I18N_TYPES.includes(item.getId() ?? '')
      ),
    ])
