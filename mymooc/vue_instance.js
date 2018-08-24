// var card=
// {
//     src:"./image/class_recommend_1.jpg",
//     h3:"Vue2.5开发去哪儿网App 从零基础入门到实战项目",
//     level1:"实战",
//     level2:"中级",
//     people:"2741",
//     stars:"☆☆☆☆☆",
//     price:"¥266.00",
// };
// new Vue({
//     //  el: '#app',
//     el: '#class_recommend',
//      data:
//      {
//          card:
//          {
//             src:"./image/class_recommend_1.jpg",
//             h3:"Vue2.5开发去哪儿网App 从零基础入门到实战项目",
//             level1:"实战",
//             level2:"中级",
//             people:"2741",
//             stars:"☆☆☆☆☆",
//             price:"¥266.00",
//          }
//      }
//  })

$.get("./json/index-class-recommend.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#class_recommend',
        data:
        {
            cards: result
        }
    })
    // //这里显示返回的状态
    // alert(state);
})


$.get("./json/index-class-new.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#class_new',
        data:
        {
            cards: result
        }
    })
    // //这里显示返回的状态
    // alert(state);
})

$.get("./json/index-class-basic.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#class_basic',
        data:
        {
            cards: result
        }
    })
    // //这里显示返回的状态
    // alert(state);
})

$.get("./json/index-teachers-card-p1.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#mooc_teachers_card_p1',
        data:
        {
            cards: result
        }
    })
    // //这里显示返回的状态
    // alert(state);
})

$.get("./json/index-teachers-card-p2.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#mooc_teachers_card_p2',
        data:
        {
            cards: result  
        }
    })
    // //这里显示返回的状态
    // alert(state);
})


$.get("./json/index-teachers-card-p3.json",
function(result, state)
{
    //这里显示从服务器返回的数据
    new Vue
    ({
        //  el: '#app',
        el: '#mooc_teachers_card_p3',
        data:
        {
            cards: result  
        }
    })
    // //这里显示返回的状态
    // alert(state);
})
