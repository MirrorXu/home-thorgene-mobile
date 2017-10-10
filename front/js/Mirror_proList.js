/**
 * Created by MirrorXu on 2017/8/23.
 */

var app = new Vue({
    el: '#app',
    data: {
        proLists: {
            checked: false,
            children: [
                {
                    checked: false,
                    children: [
                        {
                            checked: false,
                            id: "pid_0072",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161130661.jpg",
                            product_information: "检测覆盖人体全部2万多个基因，解读9大类生命密码。基于业界领先的基因检测技术，结合医疗大数据分析技术和优质的医疗资源，为您提供精准健康管理服务，帮助您全面了解自己的生命密码，提前预知健康风险，做到早发现，早诊断，早治疗。",
                            product_isparent: "T",
                            product_pid: "pid_0067",
                            text: "生命之光（个人全面基因检测）"
                        }
                    ],
                    id: "pid_0067",
                    product_isparent: "T",
                    product_pid: "pid_003",
                    text: "精准健康检测"
                },
                {
                    checked: false,
                    children: [
                        {
                            checked: false,
                            id: "pid_0073",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161253037.jpg",
                            product_information: "遗传病是指由遗传物质发生改变而引起的或者受其影响的疾病。遗传的危害性首先在于其具有遗传性，即发病主要是由遗传物质引起的。在人类基因中大约有180,000外显子，仅占人类基因组的1%-2%，但却包含多达85%疾病相关的基因突变。",
                            product_isparent: "T",
                            product_pid: "pid_0068",
                            text: "遗传病基因筛查"
                        },
                        {
                            checked: false,
                            id: "pid_0074",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161323975.jpg",
                            product_information: "在我国，每年出生新生儿有先天缺陷约90万例，出生缺陷率高达5.6%。平均每个人都携带2.8个隐性遗传病的致病突变，大多数人都是某些遗传病致病突变基因的携带者，隐性遗传病携带者本身不发病，但是会将致病基因遗传给下一代，增加下一代的患病风险。",
                            product_isparent: "T",
                            product_pid: "pid_0068",
                            text: "孕前基因检测筛查"
                        }
                    ],
                    id: "pid_0068",
                    product_isparent: "T",
                    product_pid: "pid_003",
                    text: "生殖与遗传检测"
                },
                {
                    checked: false,
                    children: [
                        {
                            checked: false,
                            id: "pid_0075",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161440616.jpg",
                            product_information: "澳大利亚体育研究院调查，参加奥运会短跑、举重等爆发力项目，并取得出色成绩的运动员，ACTN3等位基因的携带比例高达95%，被誉为“金牌基因”。目前，美国、澳大利亚、中国等多个国家陆续采用基因检测技术，进行运动员选拔。有的人，基因有缺陷，某些肌腱特别容易断，运动时就得注意，甚至有些人有遗传性恶性心律失常，易运动中猝死，需要高度警惕，这些都跟基因特征有关。",
                            product_isparent: "T",
                            product_pid: "pid_0069",
                            text: "永不止步（运动潜能及运动风险基因检测）"
                        },
                        {
                            checked: false,
                            id: "pid_0076",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161516944.jpg",
                            product_information: "众所周知，多种营养物质包括维生素、微量元素等对维持机体正常生理机能及预防疾病至关重要。不同人在生命的各个阶段对营养元素的需求不同，如何根据代谢能力，给予合理的营养补充呢？研究表明，营养元素的代谢能力受基因调控，基因的个体间差异是人与人之间营养元素代谢能力高低不同的决定因素之一。通过基因检测，可以科学评估营养代谢能力，真正做到“补养有方”。",
                            product_isparent: "T",
                            product_pid: "pid_0069",
                            text: "补养有方（营养元素代谢能力基因检测）"
                        },
                        {
                            checked: false,
                            id: "pid_0077",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830162616823.jpg",
                            product_information: "英国权威科学杂志《自然》指出“肥胖是遗传和环境因素相互作用的结果”。肥胖除了影响外形，还会诱发心脏病、中风、糖尿病、关节炎和癌症等诸多疾病。通过基因检测，找到您的肥胖根源，为您定制个体化的科学减肥方案。",
                            product_isparent: "T",
                            product_pid: "pid_0069",
                            text: "纤体秘密（肥胖基因检测）"
                        },
                        {
                            checked: false,
                            id: "pid_0078",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161550710.jpg",
                            product_information: "有的人，豪饮不醉，面不改色；有的人，一杯就倒，满脸通红。为什么会有这么大的差别?怎样喝酒才能尽兴而不伤身体?酒的主要成分是乙醇，90%以上的乙醇通过肝脏代谢。乙醇首先在乙醇脱氢酶的作用下代谢为乙醛，再由乙醛脱氢酶代谢为乙酸。这两种酶的活性主要和遗传有关，不同基因型的酶的活性不同，酒精的代谢能力也不同。",
                            product_isparent: "T",
                            product_pid: "pid_0069",
                            text: "“量”力而行（酒精代谢能力基因检测）"
                        }
                    ],
                    id: "pid_0069",
                    product_isparent: "T",
                    product_pid: "pid_003",
                    text: "生活方式指导检测"
                },
                {
                    checked: false,
                    children: [
                        {
                            checked: false,
                            id: "pid_0079",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161609304.jpg",
                            product_information: "乳腺癌是中国女性发病率最高的恶性肿瘤，平均每年被确诊为乳腺癌的人数约18万，因乳腺癌去世的人数约5.5万。基因突变导致的遗传性乳腺癌终生发病率最高为80%。BRCA1、BRCA2基因是遗传性乳腺癌/卵巢癌综合症的主要致病因素。",
                            product_isparent: "T",
                            product_pid: "pid_0070",
                            text: "女性两癌易感基因检测"
                        },
                        {
                            checked: false,
                            id: "pid_0080",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161624351.jpg",
                            product_information: "我国是食管癌的高发国家，也是本病死亡率最高的国家，全世界每年食管癌新发病例约32万，而我国占17万。随着工业的发展，吸烟人数的增多，空气污染增加，口腔/咽喉癌的发病率处于上升趋势。",
                            product_isparent: "T",
                            product_pid: "pid_0070",
                            text: "口腔和咽喉癌、食管癌基因检测"
                        },
                        {
                            checked: false,
                            id: "pid_0081",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161649242.jpg",
                            product_information: "据数据统计估计，2015年我国新增癌症病例4292000个，癌症死亡2814000个。癌症的发生是遗传因素和环境因素共同作用的结果。世界卫生组织认为：三分之一的癌症可以预防;三分之一的癌症可以早期诊断并治愈；三分之一的癌症可以通过有效治疗而减轻痛苦。",
                            product_isparent: "T",
                            product_pid: "pid_0070",
                            text: "常见肿瘤易感基因检测"
                        },
                        {
                            checked: false,
                            id: "pid_0082",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161707195.jpg",
                            product_information: "评估3大常见肿瘤和3种常见心血管疾病风险 我国癌症死亡率世界第一，在不到20年的时间里，我国癌症发病率上升了69%，死亡率增长29.4%，平均4个死亡中就有1个是因为癌症死亡。心血管疾病是中老年人群常见疾病，并且目前此类疾病发病出现年轻化趋势。",
                            product_isparent: "T",
                            product_pid: "pid_0070",
                            text: "男六项基因检测"
                        },
                        {
                            checked: false,
                            id: "pid_0083",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161719976.jpg",
                            product_information: "评估3大常见肿瘤和3种常见心血管疾病风险 我国癌症死亡率世界第一，在不到20年的时间里，我国癌症发病率上升了69%，死亡率增长29.4%，平均4个死亡中就有1个是因为癌症死亡。心血管疾病是中老年人群常见疾病，并且目前此类疾病发病出现年轻化趋势。通过基因检测，可及早发现患病风险，科学调整和改善自身生活习惯，为预防疾病的发生提供可靠的科学依据。",
                            product_isparent: "T",
                            product_pid: "pid_0070",
                            text: "女六项基因检测"
                        }
                    ],
                    id: "pid_0070",
                    product_isparent: "T",
                    product_pid: "pid_003",
                    text: "疾病预防检测"
                },
                {
                    checked: false,
                    children: [
                        {
                            checked: false,
                            id: "pid_0084",
                            product_image: "/img/utf8-jsp/jsp/upload/image/product/20170830161735101.jpg",
                            product_information: "硝酸甘油是临床上广泛用于治疗及预防冠心病、心绞痛的常用药，其在治疗心绞痛方面已有100多年的历史，被称为心绞痛患者的“救命法宝”，心绞痛发作时，舌下含服给药2～3分钟即可起效，5～10分钟可缓解症状。然而中国汉族人群中含服硝酸甘油无效的比例高达25%以上。",
                            product_isparent: "T",
                            product_pid: "pid_0071",
                            text: "心血管疾病用药检测"
                        }
                    ],
                    id: "pid_0071",
                    product_isparent: "T",
                    product_pid: "pid_003",
                    text: "精准用药检测"
                }
            ],
            id: "pid_003",
            product_isparent: "T",
            product_pid: "-1",
            text: "大众健康"
        },
        bUrl:'product-details.html?id='
    }
});

function getId () {
    return window.location.href.split('?')[1].split('=')[1];
}


$(function () {
   $.ajax({
       url:'/thorgeneweb/thorgeneweb_product/thorgeneweb_product!findByParent_idForHtml.action',
       data:{
           product_id:getId()
       },
       async:false,
       dataType:'json',
       success:function (data) {
           if(data){
               app.proLists = data[0];
               var bgImg = data[0].product_iamge;
               if( bgImg ){
                   window.onload = function () {
                       $('.page-header').css('background',bgImg );
                   }
               }
           }
       }
   })
});