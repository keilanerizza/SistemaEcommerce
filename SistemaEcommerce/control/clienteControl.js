var app = angular.module('clienteModule', []);
app.controller('clienteControl', function ($scope, $http) {

    var url = 'http://localhost:8080/clientes';

    $scope.pesquisar = function () {
        $http.get(url).then(function (response) {
            $scope.clientes = response.data;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.pesquisar();

/*     $scope.clientes = [
        {
            'codigo': '1',
            'nome': 'Carlos',
            'cargo': 'Professor',
            'endereco': 'Rua teste, 65, Jardim das Palmeiras',
            'cidade': 'Uberlandia',
            'cep': '38400-000',
            'pais': 'Brasil',
            'telefone': '34944423402',
            'fax': '343434344'
        },
        {
            'codigo': '2',
            'nome': 'Martin Fowler',
            'cargo': 'CEO',
            'endereco': '40, street view, google',
            'cidade': 'Miami',
            'cep': '30111',
            'pais': 'USA',
            'telefone': '55100912333',
            'fax': '232323'
        },
    ] */

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