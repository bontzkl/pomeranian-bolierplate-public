import { createRandomCompany, createRandomUser } from './utils';

export const companies = Array(5)
    .fill()
    .map((el) => createRandomCompany());

export const employees = Array(25)
    .fill()
    .map((el) => createRandomUser(companies[Math.floor(Math.random() * companies.length)].companyId));