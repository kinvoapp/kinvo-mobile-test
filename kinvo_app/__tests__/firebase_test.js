import Mockfirebase from '../utils/mockc_firebase';

global.firebase = Mockfirebase;

describe('addProduct', () => {
  it('Posso adicionar?', () => Mockfirebase.rtdb.ref('data')
    .push({ key: 1 }).then((data) => {
      expect(data.toJSON()).toBe('key');
    }));
});
