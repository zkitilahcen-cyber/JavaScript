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
companies.forEach(function(company){
    console.log(company.category);
})
// filter
// map
// sort
// reduce