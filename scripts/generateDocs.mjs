import { Application, TSConfigReader } from 'typedoc'

export async function generateDocs() {
    const app = new Application()

    app.options.addReader(new TSConfigReader())
    app.bootstrap({
        plugin: ['typedoc-plugin-markdown'],
        theme: 'markdown',
        hideInPageTOC: true,
        readme: 'none',
        disableSources: true,
        hideBreadcrumbs: true,
        entryPoints: ['types/index.d.ts']
    })

    const project = app.convert()

    if (project) {
        const outputDir = 'docs'
        await app.generateDocs(project, outputDir)
    }
}
