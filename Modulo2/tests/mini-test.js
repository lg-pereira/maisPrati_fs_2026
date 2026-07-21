let totalTests = 0;
let passedTests = 0;

function expect(value) {
  return {
    toBe(expectedValue) {
      totalTests++;
      if (value === expectedValue) {
        passedTests++;
        console.log("Passed ✅");
      } else {
        console.error("Failed ❌");
      }
    },
  };
}

function test(name, functionTest) {
  functionTest();
}

function finalTest() {
  console.log(`\n${passedTests}/${totalTests} tests passed!`);
}

module.exports = { expect, test, finalTest };
