const supertest = require("supertest");
const app = require("../src");
const { copyFile, unlink } = require("fs").promises;

const testAbonent = {
  phone:"1111156",
  adress:"Korzo",
  owner:"Alina",
  duration:"15",
  bill:"10"
};

describe("Integration test API", () =>{
    beforeAll(async() =>{
        await copyFile("./backend/data/Test.db", "./backend/data/Copy.db");
    });

    afterAll(async() => {
        await copyFile("./backend/data/Copy.db", "./backend/data/Test.db");
        await unlink("./backend/data/Copy.db");
    });

    it("should create object if Post", async() =>{
        const response = await supertest(app).post("/abonents/").send(testAbonent);
        const data = JSON.parse(response.text);
        // data.date = new Date(data.date);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(testAbonent);
    });

    it("should be able GET/:id after POST", async() => {
        let response = await supertest(app).post("/abonents/").send(testAbonent);
        const id = JSON.parse(response.text).id;
        response = await supertest(app).get(`/abonents/${id}`);
        const data = JSON.parse(response.text);
        // data.date = new Date(data.date);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(testAbonent);
    });
});