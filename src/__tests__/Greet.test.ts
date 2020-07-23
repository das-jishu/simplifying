import { Greet } from "../index";

test('Greet', () =>  {
    expect(Greet()).toBe('Thanks for using!');
});