//где-то уже существует order

function buy (orderId) {

    var order = orderRep.getById(orderId);
    var idProduct = order._product;

    var product = productRep.getById(idProduct);


    if ((product._count - order._count)>=0){

        successful = transaction(orderId);

        if (successful===true){
        //уменьшаяем количество экземпляров товара на складе
        product._count = product._count - order._count;
        //отметили, что куплен в order
        orderRep.pay(orederId);
        return ("Вы успешно оформили заказ");
        }
        else return successful; //вернет описание ошибки
    }

    else return ("Извините, повторите процесс покупки позднее, сейчас такого товара на складе не наблюдается! Воооот...");
}

function transaction () {
    return true;
}