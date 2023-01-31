const table = {
  columns: [
    {
      name: "house_number",
      type: "int",
      isPrimaryKey: true,
      isIdentity: false,
      isNull: false,
    },

    {
      name: "street",
      type: "varchar(50)",
    },
    {
      name: "town",
      type: "varchar(50)",
    },
    {
      name: "city",
      type: "varchar(50)",
    },
    {
      name: "country",
      type: "varchar(50)",
    },
    {
      name: "postal_code",
      type: "int",
      isPrimaryKey: true,
      isIdentity: true,
      isNull: false,
    },
  ],
};

export default table;
