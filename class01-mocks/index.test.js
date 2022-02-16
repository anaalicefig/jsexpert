const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

;
(async () => {
  {
    const filePath = './mocks/four-items-invalid.csv'

    const result = File.csvToJson(filePath)
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)


    await rejects(result, rejection)
  }
  {
    // const filePath = './mocks/three-items-valid.csv'
    // const filePath = './mocks/invalid-header.csv'
    const filePath = './mocks/empty-file-invalid.csv'

    const result = File.csvToJson(filePath)
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)


    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/three-items-valid.csv'

    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "id": 123,
        "name": "Erick Wendel",
        "profession": "Javascript Instructor",
        "birthDay": 1997
      },
      {
        "id": 321,
        "name": "Xuxa da Silva",
        "profession": "JS Expert",
        "birthDay": 1932
      },
      {
        "id": 231,
        "name": "Joaozinho",
        "profession": "Java Developer",
        "birthDay": 1992
      }
    ]


    await deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

  // console.log(result)
})();