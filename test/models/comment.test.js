import { expect } from 'chai';
import supertest from 'supertest';

const URL = 'http://localhost:8082/graphql';
const request = supertest(URL);

describe('Comment', () => {
  it('should return false', () => {
    expect(true).to.equal(true);
  });
});

