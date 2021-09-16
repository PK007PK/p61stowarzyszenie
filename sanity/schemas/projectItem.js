export default {
  title: 'Project item',
  name: 'projectItem',
  type: 'object',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
    },
    {
      title: 'Project subtitle',
      name: 'projectSubtitle',
      type: 'string',
    },
    {
      title: 'Page slug',
      name: 'pageSlug',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'projectName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
