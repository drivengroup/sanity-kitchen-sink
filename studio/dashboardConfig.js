export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd08a40210297a0900816f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z1xhtuxt',
                  apiId: '5713c99b-4f9e-439c-a629-9d129bf83fab'
                },
                {
                  buildHookId: '5ebd08a50530a0aa92bb212c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qkr9ibi1',
                  apiId: 'f41c2222-eb4b-4cf1-8415-265cc50d0b4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drivengroup/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qkr9ibi1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
