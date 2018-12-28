function pick(mass)
{
   return mass[Math.floor(Math.random() * mass.length)];
}

module.exports = pick;