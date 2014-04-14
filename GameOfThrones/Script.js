


function PlayerController($scope) {
   
    $scope.player = [{ Name: "Lisa Tully", House: "Arryn", Picture: "Lisa's Picture" },
                        { Name: "Rickon Stark", House: "stark", Picture: "Rickon" },
    { Name: "Edmure Tully", House: "Tully", Picture: "Edmure" }];
    $scope.addPlayer = function (name, house, picture) {

        $scope.player.push({ Name: name, House: house, Picture: picture });
        $scope.Name = "";
        $scope.House = "";
        $scope.Picture = "";
        
    };
};
$('#bt').popover('toggle');
$('#bt').popover('hide');