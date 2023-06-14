import { useEffect, useState } from 'react';
import './styles.css';
import { companies, employees } from './db';
// const createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };
// const db = Array(10)
//   .fill()
//   .map((el) => createRandomUser());



export function Promises() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const getDataEmployees = async () =>{
      const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(employees);
        }, 300);
      })
      return myPromise
        .then((data)=>(data))
        .catch((err) => console.log(err));
    }
    const getDataCompanies = async () =>{
      const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(companies);
        }, 300);
      })
      return myPromise
        .then((data)=>(data))
        .catch((err) => console.log(err));
    }
    const prom = getDataEmployees();
    const prom1 = getDataCompanies();
    Promise.all([prom, prom1]).then((values)=>console.log({data: values[0], DataCompanies: values[1]}));
  }, [] );
  
  return (
  <> <h5>Companies</h5>
  {companies.map((company) => (
    <div key={company.companyIdid} title={company.companyId}>
      {company.companyName}
    </div>
  ))}
  <hr />
  <h5>Employees</h5>
  {employees.map((employee) => (
    <div key={employee.userId} title={employee.id}>
      <b>Username: {employee.username}</b>
      <p>
        {employee.username} , DoB:{' '}
        {`${employee.birthdate.getDay()}.${employee.birthdate.getMonth()}.${employee.birthdate.getFullYear()}`} works for
        <i > {companies.find((company)=>company.companyId===employee.companyId)?.companyName}</i>
        
      </p>
    </div>
  ))}</>
  );
}
