import { getBooksFromHtml } from "./html-utils";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../__test__/data/response.test.html");
const sampleHtml = fs.readFileSync(filePath).toString();

describe("html utilities", () => {
  it("returns books from empty html", () => {
    const books = getBooksFromHtml("");
    expect(books.length).toBe(0);
  });

  it("returns books from sample html", () => {
    const books = getBooksFromHtml(sampleHtml);
    expect(books.length).toBe(5);
  });
});
