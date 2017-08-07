const s = require('./sample')
const expect = require('expect')

it("should add two numbers", function() {
  let res = s.add(1, 2)
  expect(res).toBe(3)
})
