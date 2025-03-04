/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        let onlyNum: number = numbers[0];
        return [onlyNum, onlyNum];
    }

    // returns first and last number from array of numbers
    let nums = [numbers[0], numbers[numbers.length - 1]];
    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNumbers: number[] = numbers.map((number) => number * 3);

    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let realNumbers: number[] = numbers.map((number) =>
        Number.isNaN(Number(number)) ? 0 : Number(number),
    );

    return realNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let copiedNumbers = [...amounts];

    let realNumbers: number[] = copiedNumbers.map((number) => {
        let clearedNum = number.replace("$", "");
        return Number.isNaN(Number(clearedNum)) ? 0 : Number(clearedNum);
    });

    return realNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let messagesCopy = [...messages];

    messagesCopy = messagesCopy.filter((message) => !message.endsWith("?"));
    messagesCopy = messagesCopy.map((message) =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );

    return messagesCopy;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: number = 0;
    words.forEach((word: string) => {
        if (word.length < 4) {
            shortWords++;
        }
    });
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    return colors.every(
        (color: string) =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    let sum: number = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0,
    );
    let addedString: string = addends.join("+");

    return sum + "=" + addedString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex((num: number) => num < 0);

    if (firstNegative === -1) {
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0,
        );
        return [...values, sum];
    }

    let copy: number[] = [...values];

    let sumBeforeNegative = copy
        .slice(0, firstNegative)
        .reduce((total: number, num: number) => total + num, 0);

    copy.splice(firstNegative + 1, 0, sumBeforeNegative);
    return copy;
}
