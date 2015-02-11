  //Here I use CanvasJS to make a chart for my polls.

  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Favourite Video Game"    
      },
      data: [

      {     
        //Plotting the data   
        dataPoints: [      
        { x: 1, y: 12, label: "Hearthstone"},
        { x: 2, y: 15,  label: "Leauge of Legonds" },
        { x: 3, y: 2,  label: "Starcraft"},
        { x: 4, y: 4,  label: "WoW"},
        { x: 5, y: 13,  label: "CouterStrike"},
        { x: 6, y: 3, label: "Civilization"},
        ]
      }
      ]
    });
    //Second Poll
    var chartTwo = new CanvasJS.Chart("chartContainerTwo",
    {
      title:{
        text: "Best Night of the Week for Events"    
      },
      data: [

      {        
        dataPoints: [      
        { x: 1, y: 3, label: "Monday"},
        { x: 2, y: 9,  label: "Tuesday" },
        { x: 3, y: 5,  label: "Wednesday"},
        { x: 4, y: 8,  label: "Thursday"},
        { x: 5, y: 12,  label: "Friday"},
        ]
      }
      ]
    });
    chartTwo.render();
    chart.render();
  }

  function submitButton(){
    window.alert("Thank you for voting. Note that only your first vote will count towards the poll.");
  }
 