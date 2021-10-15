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
        .title('Menu strony"')
        .child(S.document().schemaType('menuData').documentId('menuData')),
      S.listItem()
        .title('Strona główna')
        .child(S.document().schemaType('pageHome').documentId('pageHome')),
      S.listItem()
        .title('Strona "O nas"')
        .child(S.document().schemaType('pageONas').documentId('pageONas')),
      S.listItem()
        .title('Strona "Kontakt"')
        .child(
          S.document().schemaType('pageKontakt').documentId('pageKontakt')
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
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'siteTechConfig',
            'allProjectsData',
            'pageHome',
            'pageBlog',
            'oNasPage',
            'kontaktPage',
            'gallery',
            'testimonials',
          ].includes(item.getId())
      ),
    ]);
