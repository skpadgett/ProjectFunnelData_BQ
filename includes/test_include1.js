/*
 * The example below includes a function that aggregates all metrics (using SUM) and groups by every dimension.
 * You can learn more about functions on https://docs.dataform.co/how-to-guides/includes
 */

function renderScript(table, dimensions, metrics) {
    return `
        SELECT
        ${dimensions.map(field => `${field} AS ${field}`).join(",")},
        ${metrics.map(field => `SUM(${field}) AS ${field}`).join(",")}
        FROM ${table}
        GROUP BY ${dimensions.map((field, i) => `${i + 1}`).join(", ")}
    `;
}
module.exports = { renderScript };

/* You can call the function from any of your SQL scripts. For example, if this file is named includes/script_builder.js, you can use the function as below:
    
${script_builder.renderScript(
      "my_schema.source_table",
      ["country", "device_type"],
      ["revenue", "pageviews", "sessions"]
    )}

**** The query will be compiled into the following SQL before it is run:

SELECT
    country AS country,
    device_type AS device_type,
    SUM(revenue) AS revenue,
    SUM(pageviews) AS pageviews,
    SUM(sessions) AS sessions
FROM 
    my_schema.source_table
GROUP BY 1, 2

*/
  