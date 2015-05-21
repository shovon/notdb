import { find } from './src';
import expect from 'expect.js';

const objs = [
  { title: 'Contoso 1' },
  { title: 'Contoso 2' },
  { title: 'Contoso 3' },
  { title: 'FooBar' },
  { title: 'FooBar 1' },
  { title: 'Contoso 4', prop: 10 }
];

describe('find', function () {
  it('should be able to find based on either string or regexp', () => {
    expect(find(objs, { title: 'Contoso' })).to.eql([]);
    expect(find(objs, { title: /Contoso/ })).to.eql([
      { title: 'Contoso 1' },
      { title: 'Contoso 2' },
      { title: 'Contoso 3' },
      { title: 'Contoso 4', prop: 10 }
    ]);
  });

  it('should be able to find by number', () => {
    expect(find(objs, { prop: 10 })).to.eql([
      { title: 'Contoso 4', prop: 10 }
    ]);
  });
});
