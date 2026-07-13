import queryArgsFunctions from "../graphQLUtils/devQueryArgsBuilder";

test(`Given a query type of "devsByFirstName" and a query value of "John",
    When I call queryArgsFunctions.devsByFirstName("John"),
    Then I should get "(name:"John")"`, () => {
    expect(queryArgsFunctions.devsByFirstName("John")).toBe('(name:"John")');
});

test(`Given a query type of "devsByLastName" and a query value of "Doe",
    When I call queryArgsFunctions.devsByLastName("Doe"),
    Then I should get "(name:"Doe")"`, () => {
    expect(queryArgsFunctions.devsByLastName("Doe")).toBe('(name:"Doe")');
});

test(`Given a query type of "devsByFavLang" and a query value of "JavaScript",
    When I call queryArgsFunctions.devsByFavLang("JavaScript"),
    Then I should get "(language:"JavaScript")"`, () => {
    expect(queryArgsFunctions.devsByFavLang("JavaScript")).toBe('(language:"JavaScript")');
});

test(`Given a query type of "devsByYearStarted" and a query value of 2000,
    When I call queryArgsFunctions.devsByYearStarted(2000),
    Then I should get "(year:2000)"`, () => {
    expect(queryArgsFunctions.devsByYearStarted(2000)).toBe('(year:2000)');
});