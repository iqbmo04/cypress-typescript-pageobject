import {openApp} from "../page-object";

describe("Mixins", () => {
    it("Repositories/Users", () => {
        openApp()
            .fillSearch("Spring{enter}")

            .withRepositories(repositories => expect(repositories.length).to.be.above(1))

            .clickOnMenuUsers()
            .withUsers(users => expect(users.length).to.be.above(1))

            .clickOnMenuRepositories()
            .withRepositories(repositories => expect(repositories.length).to.be.above(1))

            .clickOnMenuUsers()
            .withUsers(users => expect(users.length).to.be.above(1));
    });
});
