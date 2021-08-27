'use strict';

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  let idOfObj;
  it("should register a user ", async () => {
    // arrange
    // act
    // assert
  });
})