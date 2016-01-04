'use strict';

/**
 * @ngdoc function
 * @name anguGHApp.controller:StatsCtrl
 * @description
 * # StatsCtrl
 * Controller of the anguGHApp
 */
angular.module('anguGHApp')
  .controller('StatsCtrl', ['$scope', 'Stats', '$routeParams', '$filter',
    function ($scope, Stats, $routeParams, $filter) {
      $scope.getContributors = function () {

        Stats.contributors({user: $routeParams.user, repo: $routeParams.repo}, function (contributions) {
          $scope.nbContribution = 0;

          $scope.chartStatsCodeFrequencyLabels = [];
          $scope.chartStatsCodeFrequencyData = [];
          $scope.chartStatsCodeFrequencySeries = ['Additions', 'Deletions', 'Commit'];
          var add = [];
          var del = [];
          var com = [];

          $scope.chartStatsContribuLabels = [];
          $scope.chartStatsContribuData = [];
          var data = [];

          angular.forEach(contributions, function (contribution) {

            angular.forEach(contribution.weeks, function (week) {

              // * 1000 = unix timestamp
              var weekTxt = $filter('date')(week.w * 1000, 'ww');

              if ($scope.chartStatsCodeFrequencyLabels.indexOf(weekTxt) < 0) {
                $scope.chartStatsCodeFrequencyLabels.push(weekTxt);
              }

              add[$scope.chartStatsCodeFrequencyLabels.indexOf(weekTxt)] = week.a;
              del[$scope.chartStatsCodeFrequencyLabels.indexOf(weekTxt)] = week.d * -1;
              //com[$scope.chartStatsCodeFrequencyLabels.indexOf(weekTxt)] = week.c;
            });

            $scope.nbContribution += contribution.total;

            var author = contribution.author.login;

            if ($scope.chartStatsContribuLabels.indexOf(author) < 0) {
              $scope.chartStatsContribuLabels.push(author);
            }


            data[$scope.chartStatsContribuLabels.indexOf(author)] = contribution.total;
          });

          $scope.chartStatsCodeFrequencyData.push(add);
          $scope.chartStatsCodeFrequencyData.push(del);
          //$scope.chartStatsCodeFrequencyData.push(com);

          $scope.chartStatsContribuData.push(data);
        });
      };

      $scope.getPunchCards = function () {
        Stats.punchCards({user: $routeParams.user, repo: $routeParams.repo}, function (punchCards) {

          $scope.chartStatsPunchCardsLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

          $scope.chartStatsPunchCardsData = [];

          var day = 0;
          var data = [];
          var nbCommit = 0;

          angular.forEach(punchCards, function (punchCard) {

            if (day !== punchCard[0]) {
              data.push(nbCommit);
              nbCommit = 0;
            }

            nbCommit += punchCard[2];

            day = punchCard[0];
          });

          data.push(nbCommit);
          $scope.chartStatsPunchCardsData.push(data);
        });
      };
    }]);
