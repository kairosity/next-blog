import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:8000/posts?_sort=publish_date&_order=desc', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": 1,
                    "title": "Blog post #1",
                    "author": "Melissa Manges",
                    "author_headshot": "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                    "publish_date": "2016-02-23",
                    "slug": "blog-post-1",
                    "photo": "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "description": "Utroque denique invenire et has.",
                    "content": "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>"
                },
                {
                    "id": 2,
                    "title": "Blog post #2",
                    "author": "Olene Ogan",
                    "author_headshot": "https://images.unsplash.com/photo-1598913869600-ed6df6320309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                    "publish_date": "2016-03-16",
                    "slug": "blog-post-2",
                    "photo": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "description": "Ex legere perpetua electram vim, per nisl inermis quaestio ea.",
                    "content": "<p>Ex legere perpetua electram vim, per nisl inermis quaestio ea. Everti adolescens ut nec. Quod labitur assueverit vis at, sea an erat modus delicata.</p> <p>Dico omnesque epicurei te vix. Tota verterem temporibus eu quo, eu iudicabit repudiandae sea. Elitr nihil gloriatur vis in.</p>"
                },
            ])
        )
    }),
]
