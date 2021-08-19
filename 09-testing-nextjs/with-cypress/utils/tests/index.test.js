import { cutTextToLength, slugify, composeArticleSlug, extractArticleIdFromSlug } from '../index';

describe("cutTextToLength cuts a string when it's too long", () => {
  test('Should cut a string that exceeds 10 characters', () => {
    const initialString = 'This is a 34 character long string';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('This is a ...');
  });

  test("Should not cut a string if it's shorter than 10 characters", () => {
    const initialString = '7 chars';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('7 chars');
  });
});

describe('slugify makes a string URL-safe', () => {
  test('Should convert a string to URL-safe format', () => {
    const initialString = 'This is a string to slugify';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });

  test('Should slugify a string with special characters', () => {
    const initialString = 'This is a string to slugify!@#$%^&*()+';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });
});

describe('composeArticleSlug should create a complete article URL given a title and an ID', () => {
  test('Should create a complete article URL', () => {
    const title = 'This is a title';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });

  test('Should create a complete article URL with special characters', () => {
    const title = 'This is a title!@#$%^&*()+';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });
});

describe('extractArticleIdFromSlug should correctly extract the ID out of an article URL', () => {
  test('Should correctly extract the ID out of an article URL', () => {
    const articleUrl = 'this-is-a-title-j81j91s';
    const id = extractArticleIdFromSlug(articleUrl);
    expect(id).toEqual('j81j91s');
  });
});
