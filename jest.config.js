module.exports = {
    "roots": [
        "<rootDir>/src/tests"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "preset": "jest-puppeteer",
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    "testRunner": "jest-jasmine2"
}