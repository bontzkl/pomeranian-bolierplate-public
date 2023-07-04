import { faker } from '@faker-js/faker';

// Every user has a company that he/she is working for

export const createRandomUser = (companyId) => {
  return {
    // TODO comapny ID
    companyId,
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

// TODO: Create this function

export const createRandomCompany = () => {
  return {
    companyId: faker.string.uuid(),
    companyName: faker.company.name(),
    companyPhrase: faker.company.catchPhrase(),
  };
};
