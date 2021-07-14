import { generateDocs } from './generateDocs.mjs'
import { updateDoc } from './updateDoc.mjs'
import { promises as fs } from 'fs'
import { join } from 'path'

await generateDocs()

let interfaces = await fs.readdir('docs/interfaces')
interfaces = interfaces.map(file => join('docs/interfaces', file))
let modules = await fs.readdir('docs/modules')
modules = modules.map(file => join('docs/modules', file))

for (const file of interfaces) {
    updateDoc(file)
}
for (const file of modules) {
    updateDoc(file)
}

await fs.rename('docs/README.md', 'docs/index.md')