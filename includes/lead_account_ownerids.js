function ownerid(ownerid) {
    return `CASE 
when ${ownerid} = '00515000006YiMnAAK' then 'Snehal Smart'
when ${ownerid} = '00515000006YiMuAAK' then 'Danielle DiPietro'
when ${ownerid} = '00515000006YiMtAAK' then 'Amy Pelegrin'
when ${ownerid} = '00515000006YiMkAAK' then 'Karen Selby'
when ${ownerid} = '00515000006YiMoAAK' then 'Vanessa Blanco'
when ${ownerid} = '00515000006YiMlAAK' then 'Missy Miller' 
when ${ownerid} = '00515000006YiMYAA0' then 'Aaron Munz'
when ${ownerid} = '0051C000008gy2YQAQ' then 'Brigitte Rudman'
when ${ownerid} = '00515000007GPmgAAG' then 'Nicole Burlinson'
else 'Other'
end`;
}
module.exports = { ownerid };