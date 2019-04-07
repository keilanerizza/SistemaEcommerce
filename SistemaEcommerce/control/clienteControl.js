var app = angular.module('clienteModule', []);
app.controller('clienteControl', function ($scope, $http) {

    var url = 'http://localhost:8080/clientes';

    $scope.pesquisar = function () {
        $http.get(url).then(function (response) {
            $scope.clientes = response.data;
        }, function (error) {
            $scope.clientes = [];
            console.log(error);
        });
    }

    $scope.pesquisar(); 

    $scope.novo = function () {
        $scope.cliente = {};
    }

    $scope.salvar = function () {
        $scope.clientes.push($scope.cliente);
        $scope.novo();
    }

    $scope.excluir = function (cliente) {
        $scope.clientes.splice($scope.clientes.indexOf($scope.cliente), 1);
        $scope.novo();
    }

    $scope.seleciona = function (cliente) {
        $scope.cliente = cliente;
    }


})