const sequelize = require("sequelize");

const Sequelize = new sequelize("forex", "harcourt", "eckankar2757101", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false
  }
});

Sequelize.authenticate()
  .then(console.log("POSTGRES SERVER RUNNING"))
  .catch(err => console.log(err));

const userShema = Sequelize.define(
  "users",
  {
    firstname: {
      allowNull: false,
      type: sequelize.TEXT
    },
    lastname: {
      allowNull: false,
      type: sequelize.TEXT
    },
    password: {
      allowNull: false,
      type: sequelize.CHAR(20)
    },
    emailaddress: {
      allowNull: false,
      type: sequelize.CHAR(100)
    },
    role: {
      allowNull: false,
      type: sequelize.TEXT
    }
  },
  { freezeTableName: "false" }
);
module.exports = userShema;
