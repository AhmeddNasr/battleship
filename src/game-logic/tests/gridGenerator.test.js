const gridGenerator = require("../gridGenerator").gridGenerator;

test("grid hotizontal width 5", () => {
    expect(gridGenerator(5)[0].length).toBe(5);
})

test("grid vertical length 5", () => {
    expect(gridGenerator(5).length).toBe(5);
})

test("position (0,0) is 0", () => {
    expect(gridGenerator(5)[0][0]).toBe(0);
})

test("position (4, 4) is 0", () => {
    expect(gridGenerator(5)[4][4]).toBe(0);
})

test("grid matches", () => {
    expect(gridGenerator(5)).toEqual([
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ]
      ]);
})