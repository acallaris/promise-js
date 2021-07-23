import { handlePromise, handlePromiseArray } from '../dist/index.js';
import { describe, it } from 'mocha';


function somePromise() {
  return Promise.resolve('hello world');
}

describe('Test', () => {
  it('handlePromise', async () => {
    const [data, error] = await handlePromise(somePromise());
    if (error) throw error;
    console.assert(data === 'hello world');
  });

  it('handlePromiseArray', async () => {
    const [data, error] = await handlePromiseArray([somePromise(), somePromise(), somePromise()]);
    if (error) throw error;

    console.assert(data[0] === 'hello world');
    console.assert(data[1] === 'hello world');
    console.assert(data[2] === 'hello world');
  });
});