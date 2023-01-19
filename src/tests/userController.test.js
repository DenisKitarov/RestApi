const app = require("../loader");
const supertest = require("supertest");
const request = supertest("http://localhost:5558");

//Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjJ9.PtEBWL6liZlgRT-9NSPvRS5un-XmhINOiZrzbob_IRA

describe("User Controller", () => {
    describe("/users/1", () => {
        it("should change account", async () => {
            await request
                .put("/users/1")
                .send({
                    email: "nik@mail.ru",
                    password: "niknik",
                })
                .expect(401);
        });
    });
});

describe("User Controller", () => {
    describe("/users/login", () => {
        it("should authorize account", async () => {
            await request
                .post("/users/login")
                .send({
                    email: "niki@mail.ru",
                    password: "niknik123"
                })
                .expect(200);
        });
    });

    describe("/users", () => {
        it("should get all users", async () => {
            await request
                .get("/users")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjJ9.PtEBWL6liZlgRT-9NSPvRS5un-XmhINOiZrzbob_IRA"
                )
                .expect(200);
        });
    });

    describe("/users/:id", () => {
        it("should get user by id", async () => {
            await request
                .get("/users/1")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjJ9.PtEBWL6liZlgRT-9NSPvRS5un-XmhINOiZrzbob_IRA"
                )
                .expect(200);
        });
    });
});