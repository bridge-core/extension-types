import { generateDocs } from './generateDocs.mjs'
import { updateDoc } from './updateDoc.mjs'
import { promises as fs } from 'fs'
import { join } from 'path'

await generateDocs()

const interfaces = await fs.readdir('docs/interfaces')
const modules = await fs.readdir('docs/modules')

for (const file of interfaces) {
    updateDoc(join('docs/interfaces', file))
}
for (const file of modules) {
    updateDoc(join('docs/modules', file))
}