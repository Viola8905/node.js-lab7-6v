const Abonent = require("./model_db");
const controller = require("./controller_db");

describe("DB abonent model testing", () =>{
    const testAbonent = {
        phone:"1111156",
        adress:"Korzo",
        owner:"Alina",
        duration:"15",
        bill:"10"
    };

    const res = {
        send: jest.fn(),
        status: jest.fn(()=> res),
    };

    beforeEach(async()=>{
        await Abonent.truncate();
    });

    it("should crate abonent", async() =>{
        const req = { body: testAbonent };
        await controller.post(req, res);
        expect(res.send).toBeCalledWith(expect.objectContaining(testAbonent));
    });

    it("should update abonent", async() => {
        const abonent = await Abonent.create(testAbonent);
        const updatedAbonent = {
          phone:"56",
          adress:"Kor",
          owner:"Taras",
          duration:"15",
          bill:"10"
        };

        const req = { body: updatedAbonent, params: { id: abonent.id } };

        await controller.patch(req, res);

        expect(res.send).toBeCalledWith(expect.objectContaining(updatedAbonent));
    });

    it("should return Not Found if Abonent for update is not found", async() => {
        const updatedAbonent = {
          phone:"56",
          adress:"Kor",
          owner:"Taras",
          duration:"15",
          bill:"10"
        };

        const req = { body: updatedAbonent, params: { id: -1 } };

        await controller.patch(req, res);

        expect(res.status).toBeCalledWith(404);
    });
});