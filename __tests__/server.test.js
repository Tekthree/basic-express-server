'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const {expect} = require('@jest/globals');
const mockRequest = supertest(server);

describe('API Server', () => {
  test('404 on a bad route', async () =>{
    const response = await mockRequest.get('/badroute');
    expect(response.status).toEqual(404);
  })

  test('404 on a bad method', async () =>{
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(404);
  })

  test('500 if no name is in the query sting', async () =>{
    const response = await mockRequest.get('/person?name=');
    expect(response.status).toEqual(500);
  })

  test('200 if the name is in the query sting', async () =>{
    const response = await mockRequest.get('/person?name=tek');
    expect(response.status).toEqual(200);
  })

  test('got a name in the string, the output object is correct', async () =>{
    const response = await mockRequest.get('/person?name=tek');
    expect(JSON.parse(response.text)).toEqual({name: "tek"});
  })

  

});