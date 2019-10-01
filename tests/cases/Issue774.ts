import util from "util"
import chalk from "chalk" // import

const Levels = {
    0: { label: "DEBUG", color: chalk.gray.bold },
    1: { label: "INFO ", color: chalk.blueBright.bold },
    2: { label: "WARN ", color: chalk.magenta.bold },
    3: { label: "ERROR", color: chalk.red.bold },
}
type Level = keyof typeof Levels