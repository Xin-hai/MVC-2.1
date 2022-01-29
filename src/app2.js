import "./app2.css"
import Vue from 'vue'

const init = (el) =>
    new Vue({
        el: el,
        data: {
            index: 0
        },
        template: `
            <section id="app2">
                <ol class="tab-bar">
                    <li :class="index === 0 ? 'selected' : ''" @click="index=0"><span>这是1111Tab</span></li>
                    <li :class="index === 1 ? 'selected' : ''" @click="index=1"><span>这是2222Tab</span></li>
                </ol>
                <ol class="tab-content">
                    <li :class="index === 0 ? 'active' : ''">1111.我的名字是Xinhai</li>
                    <li :class="index === 1 ? 'active' : ''">2222.我不满意现在的生活，但是我现在真的没办法改变它，我会努力的！</li>
                </ol>
            </section>
        `
    })

export default init


