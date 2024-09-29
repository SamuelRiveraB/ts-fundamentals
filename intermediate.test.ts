import { fetchUserData } from "./intermediate";

test("fetch user data", async () => {
  fetchUserData(1)
    .then((data) => {
      expect(data).toEqual("Mike");
    })
    .catch((err) => expect(err).toBeUndefined());
});
