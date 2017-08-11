import {uiModules } from 'ui/modules';

//load c3.js
import c3 from 'c3';

const appModule = uiModules.get('kibana/rab_c3', ['kibana']);

appModule.controller('C3Controller', function($scope, $element, Private){

    // this.$onInit = function () {
    //    $scope.data = {
    //                 data1:  ($scope.vis.params.data1+'').split(',').map(Number),
    //                 data2:  ($scope.vis.params.data2+'').split(',').map(Number)
    //               };
    // };

    $scope.data = {
                    data1:  ($scope.vis.params.data1+'').split(',').map(Number),
                    data2:  ($scope.vis.params.data2+'').split(',').map(Number)
                  };
   

   
    // Identify the div element in HTML to place c3 chart
    var id_chart = $element.children().find('#mychart');
   

    $scope.genChart = ()=>{

         setTimeout(function(){
            var chart = c3.generate({
                bindto: id_chart[0],
                data: {
                    columns: [
                        ['data1', ...$scope.data.data1 ],
                        ['data2', ...$scope.data.data2 ]
                    ]
                    }
                });
         },100);        
   };

    $scope.genChart();



   // Be alert to changes in vis_params
	$scope.$watch('vis.params', function (params) {
        
        if(params.data1){
            $scope.data.data1 = (params.data1+'').split(',').map(Number);
        }

        if(params.data2){
            $scope.data.data2 = (params.data2+'').split(',').map(Number);
        }

        $scope.params = params;
       
        $scope.genChart();
         
	});


});