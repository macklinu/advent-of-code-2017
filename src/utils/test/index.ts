import * as fs from 'fs'
import * as util from 'util'

export async function readFile(path: string): Promise<string> {
  const readFile = util.promisify(fs.readFile)
  return await readFile(path, 'utf8')
}
