'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const password = (Math.random() + 1).toString(36).substring(12);
        await queryInterface.bulkInsert('users', [{
            username: 'John Doe',
            password: bcrypt.hashSync(password, 12),
            tel: '010-1234-1234',
            email: 'any@string.com'
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
