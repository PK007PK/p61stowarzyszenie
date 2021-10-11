import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Site tech config')
        .child(
          S.document().schemaType('siteTechConfig').documentId('siteTechConfig')
        ),
      S.listItem()
        .title('Home page')
        .child(
          S.document().schemaType('pageDataHome').documentId('pageDataHome')
        ),
      S.listItem()
        .title('Strona "O nas"')
        .child(S.document().schemaType('oNasPage').documentId('oNasPage')),
      S.listItem()
        .title('Strona "Kontakt"')
        .child(
          S.document().schemaType('kontaktPage').documentId('kontaktPage')
        ),
      S.listItem()
        .title('Referencje')
        .child(
          S.document().schemaType('testimonials').documentId('testimonials')
        ),
      S.listItem()
        .title('Gallery')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      S.listItem()
        .title('All projects data')
        .child(
          S.document()
            .schemaType('allProjectsData')
            .documentId('allProjectsData')
        ),
      S.listItem()
        .title('Blog page')
        .child(
          S.document().schemaType('pageDataBlog').documentId('pageDataBlog')
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'siteTechConfig',
            'allProjectsData',
            'pageDataHome',
            'pageDataBlog',
            'oNasPage',
            'kontaktPage',
            'gallery',
            'testimonials',
          ].includes(item.getId())
      ),
    ]);
