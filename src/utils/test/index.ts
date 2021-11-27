import * as fs from 'fs'

export function readFile(path: string): Promise<string> {
  return fs.promises.readFile(path, 'utf8')
}
