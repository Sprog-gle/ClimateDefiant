var Bing = require('node-bing-api')({ accKey: "5e0807dc266b4f90ba19bc22898e541a" });


Bing.news("xbox", {
    top: 10,  // Number of results (max 15) 
    skip: 3,   // Skip first 3 results 
    newsSortBy: "Date", //Choices are: Date, Relevance 
    newsCategory: "rt_Business" // Choices are: 
                                //   rt_Business 
                                //   rt_Entertainment 
                                //   rt_Health 
                                //   rt_Politics 
                                //   rt_Sports 
                                //   rt_US 
                                //   rt_World 
                                //   rt_ScienceAndTechnology 
  }, function(error, res, body){
    console.log(body);
  });
  