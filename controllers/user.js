const { User } = require('../models');
const userService = require('../services/user');

const userController = {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  },

  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async createUser(req, res, next) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const user = await userService.updateUser(id, userData);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      await userService.deleteUser(id);
      res.json({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;