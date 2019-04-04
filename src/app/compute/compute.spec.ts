import { compute } from "./compute" ;

describe ('compute', ()=>{ // compute suit
    it ('should return 0 if input is negative ', () => {
      expect(compute(-1)).toBe(0);
    })

    it ('should increment if input is positive ', () => {
      expect(compute(1)).toBe(2);
    })
})
