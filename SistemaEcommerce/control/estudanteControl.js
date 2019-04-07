var app = angular.module('estudanteModule', []);
app.controller('estudanteControl', function ($scope, $http) {

    var url = 'http://localhost:8080/estudantes';

    $scope.pesquisar = function () {
        $http.get(url).then(function (response) {
            $scope.estudantes = response.data;
        }, function (error) {
            $scope.estudantes = [];
            console.log(error);
        });
    }

    $scope.pesquisar();

    $scope.novo = function () {
        $scope.estudante = {};
    }

    $scope.salvar = function () {
        $scope.estudantes.push($scope.estudante);
        $scope.novo();
    }

    $scope.excluir = function (estudante) {
        $scope.estudantes.splice($scope.estudantes.indexOf($scope.estudante), 1);
        $scope.novo();
    }

    $scope.seleciona = function (estudante) {
        $scope.estudante = estudante;
    }


})