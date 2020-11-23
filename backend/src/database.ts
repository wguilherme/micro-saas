import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:33223322@localhost:3306/pitu');

export default sequelize