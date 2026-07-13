import {
    getDevelopers,
    baseURL,
    postDeveloper,
    putDeveloper,
    searchDevelopers,
    baseGraphQL,
  } from "../apiCalls/devAPI";
  import Developer from "../models/Developer";
  import clean from 'clean-tagged-string'
  
  let fakeDevs = [
    new Developer(null, "Jason", "Monroe", "JavaScript", 1999),
    new Developer("2", "Steve", "Wozniac", "Objective C", 1970),
  ];
  
  it(`should have a getDevelopers function that calls GET url
     and returns the response`, () => {
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockResolvedValue({ json: () => fakeDevs });
  
    getDevelopers().then((res) => expect(res).toEqual(fakeDevs));
  
    expect(fetchSpy).toHaveBeenCalledWith(baseURL + "/all");
  });

  it(`should have a postDevleoper function that calls POST url
    with correct arguments`, () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue(fakeDevs[0]);
    postDeveloper(fakeDevs[0]).then((res) => expect(res).toEqual(fakeDevs[0]));
    expect(fetchSpy).toHaveBeenCalledWith(baseURL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeDevs[0]),
    });
  });

  it(`should have a putDeveloper function that calls PUT url
    with correct aguments`, () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue(fakeDevs[0]);
    putDeveloper(fakeDevs[0]).then((res) => expect(res).toEqual(fakeDevs[0]));
    expect(fetchSpy).toHaveBeenCalledWith(baseURL + "/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeDevs[0]),
    });
  
  });

  it(`should have a searchDevelopers function that calls 
    graphQL url with correct arguments`, () => {
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockResolvedValue({ json: () => fakeDevs[0] });

      const query = clean `{
        devsByFirstName(name:"Jason"){
          id
          firstName
          lastName
          favoriteLanguage
          yearStarted
        }
      }`;

      searchDevelopers(query).then((res) => expect(res).toEqual(fakeDevs[0]));
      expect(fetchSpy).toHaveBeenCalledWith(baseGraphQL + encodeURIComponent(query));
    });