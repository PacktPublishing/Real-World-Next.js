const faker = require('faker');
const gen = require('random-seed');

const generateUser = (seed) => {
  faker.seed(seed + 1);

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.helpers.slugify(`${firstName} ${lastName}`);
  const random = gen.create(seed.toString());
  const occupations = random.intBetween(1, 3);

  return {
    id: faker.git.commitSha(),
    name: {
      username,
      first: firstName,
      last: lastName,
    },
    description: faker.lorem.paragraph(),
    work: {
      openToWork: faker.datatype.boolean(),
      resume: Array.from({ length: occupations })
        .map((_, i) => {
          return {
            image: faker.image.business(),
            company: faker.company.companyName(),
            title: faker.name.jobTitle(),
            phrase: faker.company.catchPhrase(),
            date: {
              start: faker.date.between(`201${i + 1}-01-01`, `201${i + 2}-05-05`),
              end: faker.date.between(`201${i + 2}-06-01`, `201${i + 2}-06-05`),
            },
          };
        })
        .reverse(),
    },
    images: {
      profile: faker.image.avatar(),
      cover: faker.image.image(),
    },
  };
};

const data = Array.from({ length: 50 }).map((_, i) => generateUser(i));

console.log(JSON.stringify(data, null, 2));
