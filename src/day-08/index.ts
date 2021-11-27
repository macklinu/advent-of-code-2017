const MAX = '__MAX__'

export function processRegisters(
  input: string,
  keepTrackOfMax: boolean = false
): number {
  let instructions = input
    .split('\n')
    .filter(Boolean)
    .map((str) => str.trim())

  let registerMap = instructions.reduce(
    (obj, str) => {
      let {
        registerToChange,
        changeType,
        changeValue,
        registerToCheck,
        checkType,
        checkValue,
      } = parseInstruction(str)

      if (obj[registerToChange] === undefined) {
        obj[registerToChange] = 0
      }
      if (obj[registerToCheck] === undefined) {
        obj[registerToCheck] = 0
      }

      let shouldChange: boolean = eval(
        `${obj[registerToCheck]} ${checkType} ${checkValue}`
      )

      if (shouldChange) {
        obj[registerToChange] =
          changeType === 'inc'
            ? obj[registerToChange] + changeValue
            : obj[registerToChange] - changeValue

        if (keepTrackOfMax && obj[registerToChange] > obj[MAX]) {
          obj[MAX] = obj[registerToChange]
        }
      }

      return obj
    },
    { [MAX]: -1 } as { [key: string]: number }
  )

  if (keepTrackOfMax) {
    return registerMap[MAX]
  } else {
    delete registerMap[MAX]
    return Math.max.apply(Math, Object.values(registerMap))
  }
}

interface Instruction {
  registerToChange: string
  changeType: string
  changeValue: number
  registerToCheck: string
  checkType: string
  checkValue: number
}

function parseInstruction(input: string): Instruction {
  let match = input.match(
    /([a-z]+)\s(inc|dec)\s(-?[0-9]+)\sif\s([a-z]+)\s(.*)\s(-?[0-9]+)/
  )
  if (match === null) {
    throw new Error('Instruction not parsed properly')
  }
  let [
    ,
    registerToChange,
    changeType,
    changeValue,
    registerToCheck,
    checkType,
    checkValue,
  ] = match

  return {
    registerToChange,
    changeType,
    changeValue: Number(changeValue),
    registerToCheck,
    checkType,
    checkValue: Number(checkValue),
  }
}
