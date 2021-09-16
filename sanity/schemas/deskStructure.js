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
          ].includes(item.getId())
      ),
    ]);
