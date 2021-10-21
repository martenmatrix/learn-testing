import Caesar from '../code/caesarCipher';

test('Is able to encrypt', () => {
    expect(Caesar.encipher(3, 'neso')).toEqual('qhvr');
});

test('Is able to decrypt', () => {
    expect(Caesar.decipher(3, 'qhvr')).toEqual('neso');
})

test('works with capitalized letters', () => {
    expect(Caesar.encipher(3, 'Neso')).toEqual('Qhvr');
    expect(Caesar.decipher(3, 'Qhvr')).toEqual('Neso');
});

test('Is able to wrap from Z to A', () => {
    expect(Caesar.encipher(23, 'a')).toEqual('x');
});
test('Works with punctuation', () => {
    expect(Caesar.encipher(23, 'a .!?/')).toEqual('x .!?/');
    expect(Caesar.decipher(23, 'x .!?/')).toEqual('a .!?/');
});