const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Получить список пользователей
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Список пользователей успешно возвращён
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: 'Ivan'
 */
router.get('/', userController.getAllUsers);
/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Получить пользователя по ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID пользователя
 *     responses:
 *       200:
 *         description: Пользователь найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: 'Ivan'
 *       404:
 *         description: Пользователь не найден
 */
router.get('/:id', userController.getUserById);
/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Создать нового пользователя
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Ivan'
 *     responses:
 *       201:
 *         description: Пользователь создан
 */
router.post('/', userController.createUser);
/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Обновить данные пользователя
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID пользователя
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Ivan updated'
 *     responses:
 *       200:
 *         description: Пользователь обновлён
 *       404:
 *         description: Пользователь не найден
 */
router.put('/:id', userController.updateUser);
/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Удалить пользователя
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID пользователя
 *     responses:
 *       200:
 *         description: Пользователь удалён
 *       404:
 *         description: Пользователь не найден
 */
router.delete('/:id', userController.deleteUser);

module.exports = router;