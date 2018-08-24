        // cart鼠标悬停事件回调
        function cart_mouse_event(status)
        {
            document.getElementById("cart_div").style.display = status ? "inline-block" : "none";
        }

        // menu_recommend 图片定时切换
        var menu_recommend_imgx = 1;
        var menu_recommend_mouseover_flag = 0;
        setInterval(function()
        {
            recommend_img_tim_change()
        }, 3000);

        function recommend_img_tim_change()
        {
            if (!menu_recommend_mouseover_flag)
            {
                // alert("cart_img_change!");
                menu_recommend_imgx < 6 ? menu_recommend_imgx++ : menu_recommend_imgx = 1;
                img_and_dot_change(menu_recommend_imgx);
            }
        }

        function img_and_dot_change(dot_id)
        {
            menu_recommend_imgx = dot_id;
            for (var i = 1; i <= 6; i++)
                document.getElementById("img_dot_" + i).innerText = "○";
            document.getElementById("img_dot_" + dot_id).innerText = "●";
            document.getElementById('menu_recommend').src = "./image/recommend_" + dot_id + ".jpg";
        }

        // 图片鼠标悬停事件回调
        function menu_recommend_mouse_event(status)
        {
            menu_recommend_mouseover_flag = status ? 1 : 0;
        }

        // 菜单悬浮窗回调
        function menu_mouse_event(menu_id, status)
        {
            document.getElementById("menu_div").style.display = status ? "inline-block" : "none";
            if (menu_id != 0)
            {
                //document.getElementById("menu_div").innerText="menu_mouse_event("+menu_id+","+status+")";

                // 更新文字部分
                // menu_div_dataset title1/2 link1/2
                // menu_div_d1> <a href="#">微服务</a>
                document.getElementById("menu_div_t1").innerText = menu_div_dataset[menu_id - 1].title1;
                document.getElementById("menu_div_d1").innerHTML = "";
                for (var i = 0; i < menu_div_dataset[menu_id - 1].link1.length; i++)
                    document.getElementById("menu_div_d1").innerHTML += "<a href=\"#\">" + menu_div_dataset[menu_id - 1].link1[i] + "</a>";
                document.getElementById("menu_div_t2").innerText = menu_div_dataset[menu_id - 1].title2;
                document.getElementById("menu_div_d2").innerHTML = "";
                for (var i = 0; i < menu_div_dataset[menu_id - 1].link2.length; i++)
                    document.getElementById("menu_div_d2").innerHTML += "<a href=\"#\">" + menu_div_dataset[menu_id - 1].link2[i] + "</a>";
                // 更新推荐课程部分
                // menu_div_dataset recommend1/2/3/4:{src h3 price level people}
                //<div class="menu_div_recommend_card menu_div_recommend_card_1">
                // <a href="#">
                //     <img src="./image/menu_div_101.jpg">
                //     <h3>区块链入门与去中心化应用实战</h3>
                //     <div class="menu_div_recommend_info">
                //         <span>¥199.00</span>
                //         <span>初级</span>
                //         <span>570</span>
                //     </div>
                // </a>
                for (var i = 0; i < 4; i++)
                    document.getElementsByClassName("menu_div_recommend_card")[i].innerHTML =
                    "<a href=\"#\">                                                             \
                        <img src=\"" + menu_div_dataset[menu_id - 1].recommend[i].src + "\">          \
                        <h3>" + menu_div_dataset[menu_id - 1].recommend[i].h3 + "</h3>                \
                        <div class=\"menu_div_recommend_info\">                                 \
                            <span>" + menu_div_dataset[menu_id - 1].recommend[i].price + "</span>     \
                            <span>" + menu_div_dataset[menu_id - 1].recommend[i].level + "</span>     \
                            <span>" + menu_div_dataset[menu_id - 1].recommend[i].people + "</span>    \
                        </div>                                                                  \
                    </a>";
            }
        }

        // 加载完成后布局
        function min_index(a, b, c)
        {
            // return a<=b?(a<=c?a:c):(b<=c?b:c);
            return a <= b ? (a <= c ? 0 : 2) : (b <= c ? 1 : 2);
        }

        function max_index(a, b, c)
        {
            // return a<=b?(a<=c?a:c):(b<=c?b:c);
            return a >= b ? (a >= c ? 0 : 2) : (b >= c ? 1 : 2);
        }

        function loaded()
        {
            // alert(min_index(0,0,0));
            // 三列布局
            var column_width = 372;
            var column_y = [20, 20, 20]; // 列高度指针
            var column_todo_pointer = 0; // 待放 div 指针

            var column_gap_top = 20;
            var column_gap_left = 20;
            var column_margin_left = 20;

            for (var i = 0; i < 13; i++)
            {
                column_todo_pointer = min_index(column_y[0], column_y[1], column_y[2]);
                // console.log("counter:" + i + ",column_todo_pointer:" + column_todo_pointer + ",column_y:" + column_y);
                document.getElementsByClassName("class_article_card")[i].style.left = column_margin_left + column_todo_pointer * (column_width + column_gap_left) + "px";
                document.getElementsByClassName("class_article_card")[i].style.top = column_y[column_todo_pointer] + "px";
                column_y[column_todo_pointer] += Number(document.getElementsByClassName("class_article_card")[i].style.height.replace("px", ""));
                column_y[column_todo_pointer] += column_gap_top;
            }
            // console.log("counter:" + i + ",column_todo_pointer:" + column_todo_pointer + ",column_y:" + column_y);
            // failed to autosize class_article
            // document.getElementsByClassName("class_article")[0].style.height=column_y[max_index(column_y[0],column_y[1],column_y[2])]+"px!important";
            // alert(column_y[max_index(column_y[0],column_y[1],column_y[2])]);
        }

        // mooc_teachers_card 图片定时切换
        var mooc_teachers_card_px = 1;
        var mooc_teachers_card_mouseover_flag = 0;
        setInterval(function()
        {
            mooc_teachers_card_tim_change()
        }, 5000);

        function mooc_teachers_card_tim_change()
        {
            if (!mooc_teachers_card_mouseover_flag)
            {
                // alert("cart_img_change!");
                mooc_teachers_card_px < 3 ? mooc_teachers_card_px++ : mooc_teachers_card_px = 1;
                mooc_teachers_card_and_dot_change(mooc_teachers_card_px);
            }
        }

        function mooc_teachers_card_and_dot_change(dot_id)
        {
            mooc_teachers_card_px = dot_id;
            for (var i = 1; i <= 3; i++)
                document.getElementById("card_dot_" + i).innerText = "○";
            document.getElementById("card_dot_" + dot_id).innerText = "●";

            document.getElementById('mooc_teachers_card_p1').style.display = "none";
            document.getElementById('mooc_teachers_card_p2').style.display = "none";
            document.getElementById('mooc_teachers_card_p3').style.display = "none";
            if (dot_id == 1)
                document.getElementById('mooc_teachers_card_p1').style.display = "inline-block";
            if (dot_id == 2)
                document.getElementById('mooc_teachers_card_p2').style.display = "inline-block";
            if (dot_id == 3)
                document.getElementById('mooc_teachers_card_p3').style.display = "inline-block";
        }

        // 图片鼠标悬停事件回调
        function mooc_teachers_card_mouse_event(status)
        {
            mooc_teachers_card_mouseover_flag = status ? 1 : 0;
        }