const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testarAplicacao() {
  const options = new chrome.Options();
  options.addArguments('--headless');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3000');

    const titulo = await driver.findElement(By.tagName('h1')).getText();

    expect(titulo).toBe('Olá! Bem-vindo à aplicação DevOps!');
  } finally {
    await driver.quit();
  }
}

test('deve exibir a mensagem principal da aplicação', async () => {
  await testarAplicacao();
});