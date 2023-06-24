const Product = require("./model/product");

class SampleDb {
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText2:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText3:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        coverImage: "./assets/img/phone-cover.jpeg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText2:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText3:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        coverImage: "./assets/img/phone-cover.jpeg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText2:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText3:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        coverImage: "./assets/img/phone-cover.jpeg",
      },
      {
        name: "Phone Special",
        price: 999,
        description: "",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText2:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        headingText3:
          "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        coverImage: "./assets/img/phone-cover.jpeg",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = SampleDb;
