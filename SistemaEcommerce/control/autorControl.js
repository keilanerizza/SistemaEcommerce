var app = angular.module('autorModule', []);
app.controller('autorControl', function ($scope, $http) {

    var url = 'http://localhost:8080/autores';

    $scope.pesquisar = function () {
        $http.get(url).then(function (response) {
            $scope.autores = response.data;
        }, function (error) {
            $scope.autores = [];
            console.log(error);
        });
    }

    $scope.pesquisar();

    $scope.novo = function () {
        $scope.autor = {};
    }

    $scope.salvar = function () {
        $scope.autores.push($scope.autor);
        $scope.novo();
    }

    $scope.excluir = function (autor) {
        $scope.autores.splice($scope.autores.indexOf($scope.autor), 1);
        $scope.novo();
    }

    $scope.seleciona = function (autor) {
        $scope.autor = autor;
    }


})