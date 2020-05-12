/* 
 * In the example below, the function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function lawfirm(law_firm_account__c) {
    return `CASE 
when ${law_firm_account__c} = '0011500001CmrT7AAJ' then 'Weitz & Luxenberg'
when ${law_firm_account__c} = '0011500001Cn0POAAZ' then 'Simmons Hanly Conroy'
when ${law_firm_account__c} = '0011500001Ub9qQAAR' then 'Cooney & Conway'
when ${law_firm_account__c} = '0011C00001uYIAtQAO' then 'Nemeroff'
when ${law_firm_account__c} = '0011500001Cn0RtAAJ' then 'Meirowitz & Wasserberg'
when ${law_firm_account__c} = '0011C00001uYIIOQA4' then 'Galliher'
else 'Other'
end`;
}
module.exports = { lawfirm };


  