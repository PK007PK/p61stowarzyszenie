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
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings'].includes(item.getId())
      ),
    ]);
