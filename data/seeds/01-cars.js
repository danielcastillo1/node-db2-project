// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "toyota",
    model: "prius",
    mileage: 120000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "2222222222222",
    make: "toyota",
    model: "corolla",
    mileage: 300000,
    title: "salvage",
    transmission: "automatic",
  },
  {
    vin: "3333333333333",
    make: "toyota",
    model: "tundra",
    mileage: 400000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
