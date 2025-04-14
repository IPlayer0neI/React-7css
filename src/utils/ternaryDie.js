/**
 * Eu odeio a sintaxe de ternário, namoral.
 * condition ? firstValue : secondValue
 * @param condition
 * @param secondValue
 * @param thirdValue
 */
export function dieTernary(condition, firstValue, secondValue) {
    if (condition) {
        return firstValue;
    } else {
        return secondValue;
    }
}

/**
 * @param defaultValue - Valor padrão para o retorno
 * @returns {function}
 */
export function createCondition(defaultValue) {
    /**
     * @param condition
     * @param firstValue
     */
    return function (condition, firstValue) {
        return dieTernary(condition, firstValue, defaultValue);
    }
}

/**
 * condition ? firstValue : object
 * @function  
 * @param condition
 * @param firstValue
 * @returns {object} Um Objeto vazio ou um valor que passe na condição
 */
export const conditionObject = createCondition({});

/** 
 * condition ? firstValue : string
 * @function  
 * @param condition
 * @param firstValue
 * @returns {string} - Uma string vazia ou um valor que passe na condição
 */
export const conditionString = createCondition("");