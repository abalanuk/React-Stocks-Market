const rewire = require("rewire")
const mock = rewire("./mock")
const createAsset = mock.__get__("createAsset")
// @ponicode
describe("createAsset", () => {
    test("0", () => {
        let callFunction = () => {
            createAsset("fake_project_id", "payment")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createAsset(12, "withdrawal")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createAsset("YOUR_PROJECT_ID", "invoice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createAsset("project_secret_", "withdrawal")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createAsset(2, "Stock")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createAsset(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
