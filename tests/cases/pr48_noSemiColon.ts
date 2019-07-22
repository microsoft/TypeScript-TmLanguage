class Test {
	private data: TemplateData[] = []
	private options: TemplateOptions = {}
	private state = {}
}

export type Stats = fs.Stats
export const touch = thenify(tch)

/**
 * Verify comments
 */
export function isFile(path: string): Promise<boolean> {
	return stat(path).then(stat => stat.isFile(), () => false)
}


export const readFile = thenify<string, string, string>(fs.readFile)
export const writeFile = thenify<string, string | Buffer, void>(fs.writeFile)

