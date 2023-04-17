function toyShop(input) {

    let travelPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let tracks = Number(input[5]);

    let totalPrice = (puzzles * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.2 + tracks * 2);
    let totalCountToys = (puzzles+dolls+teddyBears+minions+tracks);

    if (totalCountToys >= 50){
        totalPrice = totalPrice * 0.75;
    } 

    let totalMoney = totalPrice * 0.90;
    let moneyAfterRent = totalMoney-travelPrice;

    if(totalMoney >= travelPrice){

        console.log(`Yes! ${(moneyAfterRent).toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${Math.abs(moneyAfterRent).toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8","20","25","30","50","10"])

toyShop(["320","8","2","5","5","1"])

