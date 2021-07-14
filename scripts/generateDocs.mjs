import { Application, TSConfigReader } from 'typedoc'
import { promises as fs } from 'fs'
import { join } from 'path'

export async function generateDocs() {
    let interfaces = await fs.readdir('docs/interfaces')
    interfaces = interfaces.map(file => join('docs/interfaces', file))
    let modules = await fs.readdir('docs/modules')
    modules = modules.map(file => join('docs/modules', file))
    const index = 'docs/index.md'
    const allFiles = interfaces.concat(index, modules)

    for (const file of allFiles) {
        try {
            await fs.access(file)
            await fs.unlink(file)
        } catch {}
    }

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
