import { ATM } from "./atm"

describe('ATM', () => {
    it('should return correct configuration for a given withdrawal ammount', () => {
        const bills = [100, 50, 20, 10]
        const billsAmmount = [10, 10, 10, 10]
        const initialVariation = new Array(4).fill(0)
        const withdrawAmmount = 300
        const result = ATM.solutions(bills, billsAmmount, initialVariation, withdrawAmmount, 0)
        // 2 x 50; 2 x 100
        // 1 x 10; 2 x 20; 3 x 50; 1 x 100
        expect(result.some( function (element) {
            return element === [2, 2, 0, 0]
        }))
        expect(result.some( function (element) {
            return element === [1, 3, 2, 1]
        }))
    })


it('should return two configurations: one with more higher bills, another with more lower bills', () => {
    const bills = [100, 50, 20, 10]
    const billsAmount = [10, 10, 10, 10]
    const atm = new ATM(bills, billsAmount)
    const configurations = atm.getConfigurations(300)
    const higherBills = summation(configurations.moreHigherBills)
    const lowerBills = summation(configurations.moreLowerBills)
    expect(higherBills).toBeLessThan(lowerBills)
  })

  function summation (array: number[]): number {
      return array.reduce((a: number, b: number) => a + b, 0)
  }
})