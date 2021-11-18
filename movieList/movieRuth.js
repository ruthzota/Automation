import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://www.google.com/')
})


beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

afterAll(async () => {
    await driver.quit()
})

test('Adds a movie to the page', async () => {
    let addMovie = await (await driver).findElement(By.xpath('//form/input'))
    await addMovie.sendKeys('Mean Girls')

    let designButton = await (await driver).findElement(By.xpath('//form/button'))
    await designButton.click()

    await driver.sleep(2000)
}) 

test('delete a movie', async () => {
    let deleteMovie = await (await driver). findElement(By.xpath('//form/input'))
    await deleteMovie.sendKeys('The Notebook')

    let deleteButton = await (await drive).findElement(By.xpath('//li/button'))
    await deleteButton.click()

    await drive.sleep(2000)

})

