        /*vue 生成 card*/
        Vue.component('card-post',
        {
            props: ['card'],
            template:
            `
                <div class="class_card_div">
                    <a href="#">
                        <img :src='card.src'>
                        <h3>{{card.h3}}</h3>
                        <p>
                            <span>{{card.level1}}</span>
                            <span>{{card.level2}}</span>
                            <span>{{card.people}}</span>
                            <span class="class_card_content_stars">{{card.stars}}</span>
                        </p>
                        <p class="class_card_price">{{card.price}}</p>
                    </a>
                </div> 
            `
        })
        Vue.component('teacher-card',
        {
            props: ['card'],
            template:
            `
                <div class="mooc_teachers_card">
                    <a href="#">
                        <img :src='card.src'>
                        <span class="mooc_teacher_name">{{card.name}}</span>
                        <span class="mooc_teacher_job">{{card.job}}</span>
                        <span class="mooc_teacher_abstract">{{card.abstract}}</span>
                    </a>
                </div>
            `
        })