import {sum} from '../sum'

test("The expected answer should be" , ()=>{
    const ans = sum(3,4);

    expect(ans).toBe(7);
});