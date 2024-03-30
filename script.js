Vue.component("block", {
template: `
<div id="header">
<div v-bind:style="header">
<h1>{{title}}</h1>
</div>
</div>

`,

data() {
return {
title: "Каталог товаров",
header: {
width: "100%",
textAlign: "center"
}
}
}
});

Vue.component("Tovar",{
template: `
<div id="Tovar">
<div v-for="m in Tovar" v-bind:style="div1" id="Tovar1">
<h1>{{m.title}}</h1>
<img v-bind:src=m.pic v-bind:style="img">
<h3>{{m.text}}</h3>
</div>
</div>`,
data() {
return {
Tovar: [
{
title: "Camry",
pic: "https://serviceportal.toyota.ru/uploads/eloquent-relay-files/CarModel/3462/brochure_car_model_image/offer_191x97.png",
text: "При разработке Тойота Камри особое внимание уделялось динамике. Благодаря этому автомобиль имеет мощность 150 л. с. при объеме двигателя 2 л. Транспортное средство способно разогнаться до 100 км/час за 10,4 с."
},
{
title: "Land Cruiser 300",
pic: "https://serviceportal.toyota.ru/uploads/eloquent-relay-files/CarModel/3464/brochure_car_model_image/acc.png",
text: "Это мощный внедорожник, разгоняющийся до 100 км/ч всего за 6,8 с. Полный привод и дорожный просвет 230 мм обеспечивают авто повышенную проходимость. АКПП на 10 передач содействует плавному разгону без толчков."
},
{
title: "Hilux",
pic: "https://serviceportal.toyota.ru/uploads/eloquent-relay-files/CarModel/3460/brochure_car_model_image/accessories.png",
text: "Модели агрегируют механической («Стандарт», «Комфорт») и автоматической («Комфорт», «Престиж», «Exclusive Black») коробкой передач. Максимально допустимая скорость 175 км/ч – самая благоприятная для выполнения текущих транспортно-грузовых задач."
},
{
title: "RAV4",
pic: "https://serviceportal.toyota.ru/uploads/eloquent-relay-files/CarModel/2939/brochure_car_model_image/10.2.jpg",
text: "Креативный дорогой автомобиль, но в то же время по-домашнему удобный, практичный и надежный, с новой архитектурой, свежим дизайном внутри и снаружи.Увеличенный дорожный просвет открыл для кроссовера новые маршруты, ранее недосягаемые."
}
],
div1: {
margin: "10px",
padding: "10px",
width: "350px",
height: "650px",
border: "2px solid black"
},

img: {
width: "300px",
height: "300px"
}

}
}
});


new Vue({
el: "#main"
});