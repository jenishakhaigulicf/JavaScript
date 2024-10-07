const obj = { name: "jen", job: { company: "-", years: "3" } };
const obj1 = { name: "jen", job: { company: "-", years: "3" } };

delete obj.name;
delete obj.job.company;
// delete obj.job;
// delete obj

console.log(obj);
