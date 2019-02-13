"use strict";

const User = use("App/Models/User");

class UserController {
  async login({ request, auth }) {
    const { username, password } = request.all();
    const token = await auth.attempt(username, password);
    return token;
  }

  async register({ request }) {
    const { username, email, password } = request.all();
    await User.create({
      username,
      email,
      password
    });
    return this.login(...arguments);
  }
}

module.exports = UserController;
