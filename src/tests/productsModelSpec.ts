// // in this file I'am testing all product models

//import book_handlers to test each one of its methods
import { Product_handlers } from "../models/product";

// import jasmine from "jasmine";

//create an instance from the class to be able to test it's methods and return functions
const product = new Product_handlers();



describe('Test that every model inside productModel is defined', () => {
    it('product.index is defined', () => {
      expect(product.index).toBeDefined();
    });
    it('product.show is defined', () => {
    expect(product.show).toBeDefined();
  });
    it('product.allProductsByCategory is defined', () => {
    expect(product.allProductsByCategory).toBeDefined();
  });
    it('product.create is defined', () => {
    expect(product.create).toBeDefined();
  });
    it('product.delete is defined', () => {
    expect(product.delete).toBeDefined();
  });

});

// describe("test that user models return an initial empty return", ()=>{
//   it('user.index initial return is working', async () => {
//   const result = await user.index();
//   expect(result).toEqual([]);
//   });
//   it('user.index initial return is working', async () => {
//   const result = await user.authenticate();
//   expect(result).toEqual([]);
//   });
//   it('user.index initial return is working', async () => {
//   const result = await user.index();
//   expect(result).toEqual([]);
//   });
//   it('user.index initial return is working', async () => {
//   const result = await user.index();
//   expect(result).toEqual([]);
//   });
//   it('user.index initial return is working', async () => {
//   const result = await user.index();
//   expect(result).toEqual([]);
//   });
//   it('user.index initial return is working', async () => {
//   const result = await user.index();
//   expect(result).toEqual([]);
//   });
// })