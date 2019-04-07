var app = angular.module('livroModule', []);
app.controller('livroControl', function ($scope, $http) {

    var url = 'http://localhost:8080/livros';

    $scope.pesquisar = function () {
        $http.get(url).then(function (response) {
            $scope.livros = response.data;
        }, function (error) {
            $scope.livros = [];
            console.log(error);
        });
    }

    $scope.pesquisar();

    $scope.novo = function () {
        $scope.livro = {};
    }

    $scope.salvar = function () {
        $scope.livros.push($scope.livro);
        $scope.novo();
    }

    $scope.excluir = function (livro) {
        $scope.livros.splice($scope.livros.indexOf($scope.livro), 1);
        $scope.novo();
    }

    $scope.seleciona = function (livro) {
        $scope.livro = livro;
    }


})