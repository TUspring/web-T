var cityData = [
    {
        pinyin: 'beijing',
        text: '北京市'
    },
    {
        pinyin: '120000',
        text: '天津市'
    },
    {
        pinyin: "130100",
        text: "石家庄市"
    },
    {
        pinyin: "130200",
        text: "唐山市"
    },
    {
        pinyin: "130300",
        text: "秦皇岛市"
    },
    {
        pinyin: "130400",
        text: "邯郸市"
    },
    {
        pinyin: "130500",
        text: "邢台市"
    },
    {
        pinyin: "130600",
        text: "保定市"
    },
    {
        pinyin: "130700",
        text: "张家口市"
    },
    {
        pinyin: "130800",
        text: "承德市"
    },
    {
        pinyin: "130900",
        text: "沧州市"
    },
    {
        pinyin: "131000",
        text: "廊坊市"
    },
    {
        pinyin: "131100",
        text: "衡水市"
    },
    {
        pinyin: "140100",
        text: "太原市"
    },
    {
        pinyin: "140200",
        text: "大同市"
    },
    {
        pinyin: "140300",
        text: "阳泉市"
    },
    {
        pinyin: "140400",
        text: "长治市"
    },
    {
        pinyin: "140500",
        text: "晋城市"
    },
    {
        pinyin: "140600",
        text: "朔州市"
    },
    {
        pinyin: "140700",
        text: "晋中市"
    },
    {
        pinyin: "140800",
        text: "运城市"
    },
    {
        pinyin: "140900",
        text: "忻州市"
    },
    {
        pinyin: "141000",
        text: "临汾市"
    },
    {
        pinyin: "141100",
        text: "吕梁市"
    },
    {
        pinyin: "150100",
        text: "呼和浩特市"
    },
    {
        pinyin: "150200",
        text: "包头市"
    },
    {
        pinyin: "150300",
        text: "乌海市"
    },
    {
        pinyin: "150400",
        text: "赤峰市"
    },
    {
        pinyin: "150500",
        text: "通辽市"
    },
    {
        pinyin: "150600",
        text: "鄂尔多斯市"
    },
    {
        pinyin: "150700",
        text: "呼伦贝尔市"
    },
    {
        pinyin: "150800",
        text: "巴彦淖尔市"
    },
    {
        pinyin: "150900",
        text: "乌兰察布市"
    },
    {
        pinyin: "152200",
        text: "兴安盟"
    },
    {
        pinyin: "152500",
        text: "锡林郭勒盟"
    },
    {
        pinyin: "152900",
        text: "阿拉善盟"
    },
    {
        pinyin: "210100",
        text: "沈阳市"
    },
    {
        pinyin: "210200",
        text: "大连市"
    },
    {
        pinyin: "210300",
        text: "鞍山市"
    },
    {
        pinyin: "210400",
        text: "抚顺市"
    },
    {
        pinyin: "210500",
        text: "本溪市"
    },
    {
        pinyin: "210600",
        text: "丹东市"
    },
    {
        pinyin: "210700",
        text: "锦州市"
    },
    {
        pinyin: "210800",
        text: "营口市"
    },
    {
        pinyin: "210900",
        text: "阜新市"
    },
    {
        pinyin: "211000",
        text: "辽阳市"
    },
    {
        pinyin: "211100",
        text: "盘锦市"
    },
    {
        pinyin: "211200",
        text: "铁岭市"
    },
    {
        pinyin: "211300",
        text: "朝阳市"
    },
    {
        pinyin: "211400",
        text: "葫芦岛市"
    },
    {
        pinyin: "220100",
        text: "长春市"
    },
    {
        pinyin: "220200",
        text: "吉林市"
    },
    {
        pinyin: "220300",
        text: "四平市"
    },
    {
        pinyin: "220400",
        text: "辽源市"
    },
    {
        pinyin: "220500",
        text: "通化市"
    },
    {
        pinyin: "220600",
        text: "白山市"
    },
    {
        pinyin: "220700",
        text: "松原市"
    },
    {
        pinyin: "220800",
        text: "白城市"
    },
    {
        pinyin: "222400",
        text: "延边朝鲜族自治州"
    },
    {
        pinyin: "230100",
        text: "哈尔滨市"
    },
    {
        pinyin: "230200",
        text: "齐齐哈尔市"
    },
    {
        pinyin: "230300",
        text: "鸡西市"
    },
    {
        pinyin: "230400",
        text: "鹤岗市"
    },
    {
        pinyin: "230500",
        text: "双鸭山市"
    },
    {
        pinyin: "230600",
        text: "大庆市"
    },
    {
        pinyin: "230700",
        text: "伊春市"
    },
    {
        pinyin: "230800",
        text: "佳木斯市"
    },
    {
        pinyin: "230900",
        text: "七台河市"
    },
    {
        pinyin: "231000",
        text: "牡丹江市"
    },
    {
        pinyin: "231100",
        text: "黑河市"
    },
    {
        pinyin: "231200",
        text: "绥化市"
    },
    {
        pinyin: "232700",
        text: "大兴安岭地区"
    },
    {
        pinyin: '310000',
        text: '上海市'
    },
    {
        pinyin: "320100",
        text: "南京市"
    },
    {
        pinyin: "320200",
        text: "无锡市"
    },
    {
        pinyin: "320300",
        text: "徐州市"
    },
    {
        pinyin: "320400",
        text: "常州市"
    },
    {
        pinyin: "320500",
        text: "苏州市"
    },
    {
        pinyin: "320600",
        text: "南通市"
    },
    {
        pinyin: "320700",
        text: "连云港市"
    },
    {
        pinyin: "320800",
        text: "淮安市"
    },
    {
        pinyin: "320900",
        text: "盐城市"
    },
    {
        pinyin: "321000",
        text: "扬州市"
    },
    {
        pinyin: "321100",
        text: "镇江市"
    },
    {
        pinyin: "321200",
        text: "泰州市"
    },
    {
        pinyin: "321300",
        text: "宿迁市"
    },
    {
        pinyin: "330100",
        text: "杭州市"
    },
    {
        pinyin: "330200",
        text: "宁波市"
    },
    {
        pinyin: "330300",
        text: "温州市"
    },
    {
        pinyin: "330400",
        text: "嘉兴市"
    },
    {
        pinyin: "330500",
        text: "湖州市"
    },
    {
        pinyin: "330600",
        text: "绍兴市"
    },
    {
        pinyin: "330700",
        text: "金华市"
    },
    {
        pinyin: "330800",
        text: "衢州市"
    },
    {
        pinyin: "330900",
        text: "舟山市"
    },
    {
        pinyin: "331000",
        text: "台州市"
    },
    {
        pinyin: "331100",
        text: "丽水市"
    },
    {
        pinyin: "340100",
        text: "合肥市"
    },
    {
        pinyin: "340200",
        text: "芜湖市"
    },
    {
        pinyin: "340300",
        text: "蚌埠市"
    },
    {
        pinyin: "340400",
        text: "淮南市"
    },
    {
        pinyin: "340500",
        text: "马鞍山市"
    },
    {
        pinyin: "340600",
        text: "淮北市"
    },
    {
        pinyin: "340700",
        text: "铜陵市"
    },
    {
        pinyin: "340800",
        text: "安庆市"
    },
    {
        pinyin: "341000",
        text: "黄山市"
    },
    {
        pinyin: "341100",
        text: "滁州市"
    },
    {
        pinyin: "341200",
        text: "阜阳市"
    },
    {
        pinyin: "341300",
        text: "宿州市"
    },
    {
        pinyin: "341500",
        text: "六安市"
    },
    {
        pinyin: "341600",
        text: "亳州市"
    },
    {
        pinyin: "341700",
        text: "池州市"
    },
    {
        pinyin: "341800",
        text: "宣城市"
    },
    {
        pinyin: "350100",
        text: "福州市"
    },
    {
        pinyin: "350200",
        text: "厦门市"
    },
    {
        pinyin: "350300",
        text: "莆田市"
    },
    {
        pinyin: "350400",
        text: "三明市"
    },
    {
        pinyin: "350500",
        text: "泉州市"
    },
    {
        pinyin: "350600",
        text: "漳州市"
    },
    {
        pinyin: "350700",
        text: "南平市"
    },
    {
        pinyin: "350800",
        text: "龙岩市"
    },
    {
        pinyin: "350900",
        text: "宁德市"
    },
    {
        pinyin: "360100",
        text: "南昌市"
    },
    {
        pinyin: "360200",
        text: "景德镇市"
    },
    {
        pinyin: "360300",
        text: "萍乡市"
    },
    {
        pinyin: "360400",
        text: "九江市"
    },
    {
        pinyin: "360500",
        text: "新余市"
    },
    {
        pinyin: "360600",
        text: "鹰潭市"
    },
    {
        pinyin: "360700",
        text: "赣州市"
    },
    {
        pinyin: "360800",
        text: "吉安市"
    },
    {
        pinyin: "360900",
        text: "宜春市"
    },
    {
        pinyin: "361000",
        text: "抚州市"
    },
    {
        pinyin: "361100",
        text: "上饶市"
    },
    {
        pinyin: "370100",
        text: "济南市"
    },
    {
        pinyin: "370200",
        text: "青岛市"
    },
    {
        pinyin: "370300",
        text: "淄博市"
    },
    {
        pinyin: "370400",
        text: "枣庄市"
    },
    {
        pinyin: "370500",
        text: "东营市"
    },
    {
        pinyin: "370600",
        text: "烟台市"
    },
    {
        pinyin: "370700",
        text: "潍坊市"
    },
    {
        pinyin: "370800",
        text: "济宁市"
    },
    {
        pinyin: "370900",
        text: "泰安市"
    },
    {
        pinyin: "371000",
        text: "威海市"
    },
    {
        pinyin: "371100",
        text: "日照市"
    },
    {
        pinyin: "371200",
        text: "莱芜市"
    },
    {
        pinyin: "371300",
        text: "临沂市"
    },
    {
        pinyin: "371400",
        text: "德州市"
    },
    {
        pinyin: "371500",
        text: "聊城市"
    },
    {
        pinyin: "371600",
        text: "滨州市"
    },
    {
        pinyin: "371700",
        text: "菏泽市"
    },
    {
        pinyin: "410100",
        text: "郑州市"
    },
    {
        pinyin: "410200",
        text: "开封市"
    },
    {
        pinyin: "410300",
        text: "洛阳市"
    },
    {
        pinyin: "410400",
        text: "平顶山市"
    },
    {
        pinyin: "410500",
        text: "安阳市"
    },
    {
        pinyin: "410600",
        text: "鹤壁市"
    },
    {
        pinyin: "410700",
        text: "新乡市"
    },
    {
        pinyin: "410800",
        text: "焦作市"
    },
    {
        pinyin: "410881",
        text: "济源市"
    },
    {
        pinyin: "410900",
        text: "濮阳市"
    },
    {
        pinyin: "411000",
        text: "许昌市"
    },
    {
        pinyin: "411100",
        text: "漯河市"
    },
    {
        pinyin: "411200",
        text: "三门峡市"
    },
    {
        pinyin: "411300",
        text: "南阳市"
    },
    {
        pinyin: "411400",
        text: "商丘市"
    },
    {
        pinyin: "411500",
        text: "信阳市"
    },
    {
        pinyin: "411600",
        text: "周口市"
    },
    {
        pinyin: "411700",
        text: "驻马店市"
    },
    {
        pinyin: "420100",
        text: "武汉市"
    },
    {
        pinyin: "420200",
        text: "黄石市"
    },
    {
        pinyin: "420300",
        text: "十堰市"
    },
    {
        pinyin: "420500",
        text: "宜昌市"
    },
    {
        pinyin: "420600",
        text: "襄阳市"
    },
    {
        pinyin: "420700",
        text: "鄂州市"
    },
    {
        pinyin: "420800",
        text: "荆门市"
    },
    {
        pinyin: "420900",
        text: "孝感市"
    },
    {
        pinyin: "421000",
        text: "荆州市"
    },
    {
        pinyin: "421100",
        text: "黄冈市"
    },
    {
        pinyin: "421200",
        text: "咸宁市"
    },
    {
        pinyin: "421300",
        text: "随州市"
    },
    {
        pinyin: "422800",
        text: "恩施土家族苗族自治州"
    },
    {
        pinyin: "429004",
        text: "仙桃市"
    },
    {
        pinyin: "429005",
        text: "潜江市"
    },
    {
        pinyin: "429006",
        text: "天门市"
    },
    {
        pinyin: "429021",
        text: "神农架林区"
    },
    {
        pinyin: "430100",
        text: "长沙市"
    },
    {
        pinyin: "430200",
        text: "株洲市"
    },
    {
        pinyin: "430300",
        text: "湘潭市"
    },
    {
        pinyin: "430400",
        text: "衡阳市"
    },
    {
        pinyin: "430500",
        text: "邵阳市"
    },
    {
        pinyin: "430600",
        text: "岳阳市"
    },
    {
        pinyin: "430700",
        text: "常德市"
    },
    {
        pinyin: "430800",
        text: "张家界市"
    },
    {
        pinyin: "430900",
        text: "益阳市"
    },
    {
        pinyin: "431000",
        text: "郴州市"
    },
    {
        pinyin: "431100",
        text: "永州市"
    },
    {
        pinyin: "431200",
        text: "怀化市"
    },
    {
        pinyin: "431300",
        text: "娄底市"
    },
    {
        pinyin: "433100",
        text: "湘西土家族苗族自治州"
    },
    {
        pinyin: "440100",
        text: "广州市"
    },
    {
        pinyin: "440200",
        text: "韶关市"
    },
    {
        pinyin: "440300",
        text: "深圳市"
    },
    {
        pinyin: "440400",
        text: "珠海市"
    },
    {
        pinyin: "440500",
        text: "汕头市"
    },
    {
        pinyin: "440600",
        text: "佛山市"
    },
    {
        pinyin: "440700",
        text: "江门市"
    },
    {
        pinyin: "440800",
        text: "湛江市"
    },
    {
        pinyin: "440900",
        text: "茂名市"
    },
    {
        pinyin: "441200",
        text: "肇庆市"
    },
    {
        pinyin: "441300",
        text: "惠州市"
    },
    {
        pinyin: "441400",
        text: "梅州市"
    },
    {
        pinyin: "441500",
        text: "汕尾市"
    },
    {
        pinyin: "441600",
        text: "河源市"
    },
    {
        pinyin: "441700",
        text: "阳江市"
    },
    {
        pinyin: "441800",
        text: "清远市"
    },
    {
        pinyin: "441900",
        text: "东莞市"
    },
    {
        pinyin: "442000",
        text: "中山市"
    },
    {
        pinyin: "445100",
        text: "潮州市"
    },
    {
        pinyin: "445200",
        text: "揭阳市"
    },
    {
        pinyin: "445300",
        text: "云浮市"
    },
    {
        pinyin: "450100",
        text: "南宁市"
    },
    {
        pinyin: "450200",
        text: "柳州市"
    },
    {
        pinyin: "450300",
        text: "桂林市"
    },
    {
        pinyin: "450400",
        text: "梧州市"
    },
    {
        pinyin: "450500",
        text: "北海市"
    },
    {
        pinyin: "450600",
        text: "防城港市"
    },
    {
        pinyin: "450700",
        text: "钦州市"
    },
    {
        pinyin: "450800",
        text: "贵港市"
    },
    {
        pinyin: "450900",
        text: "玉林市"
    },
    {
        pinyin: "451000",
        text: "百色市"
    },
    {
        pinyin: "451100",
        text: "贺州市"
    },
    {
        pinyin: "451200",
        text: "河池市"
    },
    {
        pinyin: "451300",
        text: "来宾市"
    },
    {
        pinyin: "451400",
        text: "崇左市"
    },
    {
        pinyin: "460100",
        text: "海口市"
    },
    {
        pinyin: "460200",
        text: "三亚市"
    },
    {
        pinyin: "469001",
        text: "五指山市"
    },
    {
        pinyin: "469002",
        text: "琼海市"
    },
    {
        pinyin: "469003",
        text: "儋州市"
    },
    {
        pinyin: "469005",
        text: "文昌市"
    },
    {
        pinyin: "469006",
        text: "万宁市"
    },
    {
        pinyin: "469007",
        text: "东方市"
    },
    {
        pinyin: "469025",
        text: "定安县"
    },
    {
        pinyin: "469026",
        text: "屯昌县"
    },
    {
        pinyin: "469027",
        text: "澄迈县"
    },
    {
        pinyin: "469028",
        text: "临高县"
    },
    {
        pinyin: "469030",
        text: "白沙黎族自治县"
    },
    {
        pinyin: "469031",
        text: "昌江黎族自治县"
    },
    {
        pinyin: "469033",
        text: "乐东黎族自治县"
    },
    {
        pinyin: "469034",
        text: "陵水黎族自治县"
    },
    {
        pinyin: "469035",
        text: "保亭黎族苗族自治县"
    },
    {
        pinyin: "469036",
        text: "琼中黎族苗族自治县"
    },
    {
        pinyin: "469037",
        text: "西沙群岛"
    },
    {
        pinyin: "469038",
        text: "南沙群岛"
    },
    {
        pinyin: "469039",
        text: "中沙群岛的岛礁及其海域"
    },
    {
        pinyin: "500101",
        text: "万州区"
    },
    {
        pinyin: "500102",
        text: "涪陵区"
    },
    {
        pinyin: "500103",
        text: "渝中区"
    },
    {
        pinyin: "500104",
        text: "大渡口区"
    },
    {
        pinyin: "500105",
        text: "江北区"
    },
    {
        pinyin: "500106",
        text: "沙坪坝区"
    },
    {
        pinyin: "500107",
        text: "九龙坡区"
    },
    {
        pinyin: "500108",
        text: "南岸区"
    },
    {
        pinyin: "500109",
        text: "北碚区"
    },
    {
        pinyin: "500110",
        text: "万盛区"
    },
    {
        pinyin: "500111",
        text: "双桥区"
    },
    {
        pinyin: "500112",
        text: "渝北区"
    },
    {
        pinyin: "500113",
        text: "巴南区"
    },
    {
        pinyin: "500114",
        text: "黔江区"
    },
    {
        pinyin: "500115",
        text: "长寿区"
    },
    {
        pinyin: "500222",
        text: "綦江县"
    },
    {
        pinyin: "500223",
        text: "潼南县"
    },
    {
        pinyin: "500224",
        text: "铜梁县"
    },
    {
        pinyin: "500225",
        text: "大足县"
    },
    {
        pinyin: "500226",
        text: "荣昌县"
    },
    {
        pinyin: "500227",
        text: "璧山县"
    },
    {
        pinyin: "500228",
        text: "梁平县"
    },
    {
        pinyin: "500229",
        text: "城口县"
    },
    {
        pinyin: "500230",
        text: "丰都县"
    },
    {
        pinyin: "500231",
        text: "垫江县"
    },
    {
        pinyin: "500232",
        text: "武隆县"
    },
    {
        pinyin: "500233",
        text: "忠县"
    },
    {
        pinyin: "500234",
        text: "开县"
    },
    {
        pinyin: "500235",
        text: "云阳县"
    },
    {
        pinyin: "500236",
        text: "奉节县"
    },
    {
        pinyin: "500237",
        text: "巫山县"
    },
    {
        pinyin: "500238",
        text: "巫溪县"
    },
    {
        pinyin: "500240",
        text: "石柱土家族自治县"
    },
    {
        pinyin: "500241",
        text: "秀山土家族苗族自治县"
    },
    {
        pinyin: "500242",
        text: "酉阳土家族苗族自治县"
    },
    {
        pinyin: "500243",
        text: "彭水苗族土家族自治县"
    },
    {
        pinyin: "500381",
        text: "江津区"
    },
    {
        pinyin: "500382",
        text: "合川区"
    },
    {
        pinyin: "500383",
        text: "永川区"
    },
    {
        pinyin: "500384",
        text: "南川区"
    },
    {
        pinyin: "500385",
        text: "其它区"
    },
    {
        pinyin: "510100",
        text: "成都市"
    },
    {
        pinyin: "510300",
        text: "自贡市"
    },
    {
        pinyin: "510400",
        text: "攀枝花市"
    },
    {
        pinyin: "510500",
        text: "泸州市"
    },
    {
        pinyin: "510600",
        text: "德阳市"
    },
    {
        pinyin: "510700",
        text: "绵阳市"
    },
    {
        pinyin: "510800",
        text: "广元市"
    },
    {
        pinyin: "510900",
        text: "遂宁市"
    },
    {
        pinyin: "511000",
        text: "内江市"
    },
    {
        pinyin: "511100",
        text: "乐山市"
    },
    {
        pinyin: "511300",
        text: "南充市"
    },
    {
        pinyin: "511400",
        text: "眉山市"
    },
    {
        pinyin: "511500",
        text: "宜宾市"
    },
    {
        pinyin: "511600",
        text: "广安市"
    },
    {
        pinyin: "511700",
        text: "达州市"
    },
    {
        pinyin: "511800",
        text: "雅安市"
    },
    {
        pinyin: "511900",
        text: "巴中市"
    },
    {
        pinyin: "512000",
        text: "资阳市"
    },
    {
        pinyin: "513200",
        text: "阿坝藏族羌族自治州"
    },
    {
        pinyin: "513300",
        text: "甘孜藏族自治州"
    },
    {
        pinyin: "513400",
        text: "凉山彝族自治州"
    },
    {
        pinyin: "520100",
        text: "贵阳市"
    },
    {
        pinyin: "520200",
        text: "六盘水市"
    },
    {
        pinyin: "520300",
        text: "遵义市"
    },
    {
        pinyin: "520400",
        text: "安顺市"
    },
    {
        pinyin: "522200",
        text: "铜仁地区"
    },
    {
        pinyin: "522300",
        text: "黔西南布依族苗族自治州"
    },
    {
        pinyin: "522400",
        text: "毕节地区"
    },
    {
        pinyin: "522600",
        text: "黔东南苗族侗族自治州"
    },
    {
        pinyin: "522700",
        text: "黔南布依族苗族自治州"
    },
    {
        pinyin: "530100",
        text: "昆明市"
    },
    {
        pinyin: "530300",
        text: "曲靖市"
    },
    {
        pinyin: "530400",
        text: "玉溪市"
    },
    {
        pinyin: "530500",
        text: "保山市"
    },
    {
        pinyin: "530600",
        text: "昭通市"
    },
    {
        pinyin: "530700",
        text: "丽江市"
    },
    {
        pinyin: "530800",
        text: "普洱市"
    },
    {
        pinyin: "530900",
        text: "临沧市"
    },
    {
        pinyin: "532300",
        text: "楚雄彝族自治州"
    },
    {
        pinyin: "532500",
        text: "红河哈尼族彝族自治州"
    },
    {
        pinyin: "532600",
        text: "文山壮族苗族自治州"
    },
    {
        pinyin: "532800",
        text: "西双版纳傣族自治州"
    },
    {
        pinyin: "532900",
        text: "大理白族自治州"
    },
    {
        pinyin: "533100",
        text: "德宏傣族景颇族自治州"
    },
    {
        pinyin: "533300",
        text: "怒江傈僳族自治州"
    },
    {
        pinyin: "533400",
        text: "迪庆藏族自治州"
    },
    {
        pinyin: "540100",
        text: "拉萨市"
    },
    {
        pinyin: "542100",
        text: "昌都地区"
    },
    {
        pinyin: "542200",
        text: "山南地区"
    },
    {
        pinyin: "542300",
        text: "日喀则地区"
    },
    {
        pinyin: "542400",
        text: "那曲地区"
    },
    {
        pinyin: "542500",
        text: "阿里地区"
    },
    {
        pinyin: "542600",
        text: "林芝地区"
    },
    {
        pinyin: "610100",
        text: "西安市"
    },
    {
        pinyin: "610200",
        text: "铜川市"
    },
    {
        pinyin: "610300",
        text: "宝鸡市"
    },
    {
        pinyin: "610400",
        text: "咸阳市"
    },
    {
        pinyin: "610500",
        text: "渭南市"
    },
    {
        pinyin: "610600",
        text: "延安市"
    },
    {
        pinyin: "610700",
        text: "汉中市"
    },
    {
        pinyin: "610800",
        text: "榆林市"
    },
    {
        pinyin: "610900",
        text: "安康市"
    },
    {
        pinyin: "611000",
        text: "商洛市"
    },
    {
        pinyin: "620100",
        text: "兰州市"
    },
    {
        pinyin: "620200",
        text: "嘉峪关市"
    },
    {
        pinyin: "620300",
        text: "金昌市"
    },
    {
        pinyin: "620400",
        text: "白银市"
    },
    {
        pinyin: "620500",
        text: "天水市"
    },
    {
        pinyin: "620600",
        text: "武威市"
    },
    {
        pinyin: "620700",
        text: "张掖市"
    },
    {
        pinyin: "620800",
        text: "平凉市"
    },
    {
        pinyin: "620900",
        text: "酒泉市"
    },
    {
        pinyin: "621000",
        text: "庆阳市"
    },
    {
        pinyin: "621100",
        text: "定西市"
    },
    {
        pinyin: "621200",
        text: "陇南市"
    },
    {
        pinyin: "622900",
        text: "临夏回族自治州"
    },
    {
        pinyin: "623000",
        text: "甘南藏族自治州"
    },
    {
        pinyin: "630100",
        text: "西宁市"
    },
    {
        pinyin: "632100",
        text: "海东地区"
    },
    {
        pinyin: "632200",
        text: "海北藏族自治州"
    },
    {
        pinyin: "632300",
        text: "黄南藏族自治州"
    },
    {
        pinyin: "632500",
        text: "海南藏族自治州"
    },
    {
        pinyin: "632600",
        text: "果洛藏族自治州"
    },
    {
        pinyin: "632700",
        text: "玉树藏族自治州"
    },
    {
        pinyin: "632800",
        text: "海西蒙古族藏族自治州"
    },
    {
        pinyin: "640100",
        text: "银川市"
    },
    {
        pinyin: "640200",
        text: "石嘴山市"
    },
    {
        pinyin: "640300",
        text: "吴忠市"
    },
    {
        pinyin: "640400",
        text: "固原市"
    },
    {
        pinyin: "640500",
        text: "中卫市"
    },
    {
        pinyin: "650100",
        text: "乌鲁木齐市"
    },
    {
        pinyin: "650200",
        text: "克拉玛依市"
    },
    {
        pinyin: "652100",
        text: "吐鲁番地区"
    },
    {
        pinyin: "652200",
        text: "哈密地区"
    },
    {
        pinyin: "652300",
        text: "昌吉回族自治州"
    },
    {
        pinyin: "652700",
        text: "博尔塔拉蒙古自治州"
    },
    {
        pinyin: "652800",
        text: "巴音郭楞蒙古自治州"
    },
    {
        pinyin: "652900",
        text: "阿克苏地区"
    },
    {
        pinyin: "653000",
        text: "克孜勒苏柯尔克孜自治州"
    },
    {
        pinyin: "653100",
        text: "喀什地区"
    },
    {
        pinyin: "653200",
        text: "和田地区"
    },
    {
        pinyin: "654000",
        text: "伊犁哈萨克自治州"
    },
    {
        pinyin: "654200",
        text: "塔城地区"
    },
    {
        pinyin: "654300",
        text: "阿勒泰地区"
    },
    {
        pinyin: "659001",
        text: "石河子市"
    },
    {
        pinyin: "659002",
        text: "阿拉尔市"
    },
    {
        pinyin: "659003",
        text: "图木舒克市"
    },
    {
        pinyin: "659004",
        text: "五家渠市"
    },
    {
        pinyin: "710100",
        text: "台北市"
    },
    {
        pinyin: "710200",
        text: "高雄市"
    },
    {
        pinyin: "710300",
        text: "台南市"
    },
    {
        pinyin: "710400",
        text: "台中市"
    },
    {
        pinyin: "710500",
        text: "金门县"
    },
    {
        pinyin: "710600",
        text: "南投县"
    },
    {
        pinyin: "710700",
        text: "基隆市"
    },
    {
        pinyin: "710800",
        text: "新竹市"
    },
    {
        pinyin: "710900",
        text: "嘉义市"
    },
    {
        pinyin: "711100",
        text: "新北市"
    },
    {
        pinyin: "711200",
        text: "宜兰县"
    },
    {
        pinyin: "711300",
        text: "新竹县"
    },
    {
        pinyin: "711400",
        text: "桃园县"
    },
    {
        pinyin: "711500",
        text: "苗栗县"
    },
    {
        pinyin: "711700",
        text: "彰化县"
    },
    {
        pinyin: "711900",
        text: "嘉义县"
    },
    {
        pinyin: "712100",
        text: "云林县"
    },
    {
        pinyin: "712400",
        text: "屏东县"
    },
    {
        pinyin: "712500",
        text: "台东县"
    },
    {
        pinyin: "712600",
        text: "花莲县"
    },
    {
        pinyin: "712700",
        text: "澎湖县"
    },
    {
        pinyin: '810000',
        text: '香港'
    },
    {
        pinyin: '820000',
        text: '澳门'
    }
]