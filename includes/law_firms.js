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

/*
 * You can call the function from any of your SQL scripts. For example, if this file is named includes/country_mapping.js, you can use the function as below:
    
    SELECT ${country_mapping.countryGroup("country_code")} AS country_group 
    ...

  * The query will be compiled into the following SQL before it is run:
    SELECT
    CASE
        WHEN country_code IN ("US", "CA") THEN "NA"
        WHEN country_code IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
        WHEN country_code IN ("AU") THEN country_code
        ELSE "Other countries"
    END AS country_group
*/
  