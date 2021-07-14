import { promises as fs } from 'fs'

export async function updateDoc(path) {
    console.log('Updating: ' + path)
    // Transform file names
    let newPath = path.replace(/__(.*)_/gi, '$1')
    newPath = newPath.replace(/_/gi, '-')
    if (path === 'docs/README.md') newPath = 'docs/index.md'
    await fs.rename(path, newPath)

    // Transform content
    const buffer = await fs.readFile(newPath)
    let text = new TextDecoder().decode(buffer)

    text = text.replace(/# Interface: (.*)/gi, '# $1')
    text = text.replace(/# Namespace: "(.*)"/gi, '# $1')
    text = text.replace('# extension-types', '# Scripts')

    text = "---\ndescription: ''\nsidebar: 'extensions'\n---\n\n" + text

    await fs.writeFile(newPath, text)
}