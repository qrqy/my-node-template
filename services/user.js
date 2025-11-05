const { User } = require('../models');

const userService = {
  async getAllUsers() {
    return await User.findAll({
      attributes: { exclude: ['password'] },
    });
  },

  async getUserById(id) {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },

  async createUser(userData) {
    const existingUser = await User.findOne({ 
      where: { email: userData.email } 
    });
    
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = await User.create(userData);
    const { password, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
  },

  async updateUser(id, userData) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }

    await user.update(userData);
    const { password, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
  },

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return true;
  },
};

module.exports = userService;