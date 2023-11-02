const { Given, When, Then, Before, After, Step } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/
    );

  assert.deepEqual({}, {});
});

Given("I do some hypothetical pre test setup", () => {
  expect(1).to.eql(1)
});


When("I do some post hypothetical test cleanup", () => {
  expect(1).to.eql(1)
});

Before(() => {
  expect(1).to.eql(1)
  Step(this, 'I do some hypothetical pre test setup')
})

beforeEach(() =>{
  expect(1).to.eql(1)
  Step(this, 'I do some hypothetical pre test setup')
})

After(() => {
  expect(1).to.eql(1)
  Step(this, 'I do some post hypothetical test cleanup')
})

afterEach(() => {
  expect(1).to.eql(1)
  Step(this, 'I do some post hypothetical test cleanup')
})