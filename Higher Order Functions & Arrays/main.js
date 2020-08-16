const companies = [
    {name: "Company One",  category:"Finance", start:1981, end:2003},
    {name: "Company Two",  category:"Retail", start:1992, end:2008},
    {name: "Company Three",  category:"Auto", start:1999, end:2007},
    {name: "Company Four",  category:"Retail", start:1989, end:2010},
    {name: "Company Five",  category:"Technology", start:2009, end:2014},
    {name: "Company six",  category:"Finance", start:1987, end:2010},
    {name: "Company Seven",  category:"Technology", start:2011, end:2016},
    {name: "Company Eight",  category:"Retail", start:1981, end:1989},
    {name: "Company Nine",  category:"Auto", start:1986, end:1996}
];

const ages = [33, 12, 20, 16, 5, 21, 54, 21, 44, 61, 13, 45, 15, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company){
//     console.log(company.category);
// })

// filter

// Get 21 and  older

// let canDrink = [];
// for(let i = 0; i<ages.length; i++){
//     if(ages[i]>= 21){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

// const canDrink = ages.filter(age => age >= 21);
 
// console.log(canDrink)

// Filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// })

// const retailCompanies = companies.filter(company => company.category === 'Auto');

// console.log(retailCompanies);

// Get 80s companies

// const eightiesCompanies = companies.filter(function(company){
//     if(company.start >=1980 && company.start <1990){
//         return true;
//     }
// });

// const eightiesCompanies = companies.filter(company => (company.start >=1980 && company.start <1990))

// console.log(eightiesCompanies);

// Get companies that lasted 10 years
 const lastedTenYearsCompanies = companies.filter(company => (company.end - company.start) >= 10);

 console.log(lastedTenYearsCompanies);



// map
// sort
// reduce