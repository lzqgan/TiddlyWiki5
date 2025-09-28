        // 图集内容配置 - 分为国标和中南标
        window.contentConfig = {
            // 国标图集
            'GB': {
                '23J909': {
                    name: '23J909 工程做法',
                    pages: 442,
                    baseUrl: 'https://ebook.chinabuilding.com.cn/upload/resources/pdf/20240111/150239725/bg',
                    outline: `
	  <ul>
	   <li><a title="23J909" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]">23J909</a></li>
	   <li><a title="编制说明" class="l" href="#pf9" data-dest-detail="[9,&quot;Fit&quot;]">编制说明</a></li>
	   <li><a title="室外工程" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">室外工程</a>
	    <ul>
	     <li><a title="室外工程说明" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">室外工程说明</a></li>
	     <li><a title="室外工程选用表" class="l" href="#pf10" data-dest-detail="[16,&quot;Fit&quot;]">室外工程选用表</a></li>
	     <li><a title="台阶" class="l" href="#pf12" data-dest-detail="[18,&quot;Fit&quot;]">台阶</a></li>
	     <li><a title="坡道" class="l" href="#pf19" data-dest-detail="[25,&quot;Fit&quot;]">坡道</a></li>
	     <li><a title="散水" class="l" href="#pf1f" data-dest-detail="[31,&quot;Fit&quot;]">散水</a></li>
	     <li><a title="运动场地" class="l" href="#pf23" data-dest-detail="[35,&quot;Fit&quot;]">运动场地</a></li>
	     <li><a title="场地内车行道" class="l" href="#pf29" data-dest-detail="[41,&quot;Fit&quot;]">场地内车行道</a></li>
	     <li><a title="场地内人行道" class="l" href="#pf2e" data-dest-detail="[46,&quot;Fit&quot;]">场地内人行道</a></li>
	    </ul></li>
	   <li><a title="地下工程防水" class="l" href="#pf32" data-dest-detail="[50,&quot;Fit&quot;]">地下工程防水</a>
	    <ul>
	     <li><a title="地下工程防水说明" class="l" href="#pf32" data-dest-detail="[50,&quot;Fit&quot;]">地下工程防水说明</a></li>
	     <li><a title="地下工程防水构造选用表、种植顶板防水层选用表" class="l" href="#pf39" data-dest-detail="[57,&quot;Fit&quot;]">地下工程防水构造选用表、种植顶板防水层选用表</a></li>
	     <li><a title="地下工程常用防水层选用表" class="l" href="#pf3a" data-dest-detail="[58,&quot;Fit&quot;]">地下工程常用防水层选用表</a></li>
	     <li><a title="地下工程底板防水" class="l" href="#pf3c" data-dest-detail="[60,&quot;Fit&quot;]">地下工程底板防水</a></li>
	     <li><a title="地下工程侧墙防水" class="l" href="#pf3e" data-dest-detail="[62,&quot;Fit&quot;]">地下工程侧墙防水</a></li>
	     <li><a title="地下工程侧墙及顶板防水" class="l" href="#pf41" data-dest-detail="[65,&quot;Fit&quot;]">地下工程侧墙及顶板防水</a></li>
	     <li><a title="地下工程顶板防水" class="l" href="#pf42" data-dest-detail="[66,&quot;Fit&quot;]">地下工程顶板防水</a></li>
	    </ul></li>
	   <li><a title="楼地面" class="l" href="#pf4a" data-dest-detail="[74,&quot;Fit&quot;]">楼地面</a>
	    <ul>
	     <li><a title="楼地面说明" class="l" href="#pf4a" data-dest-detail="[74,&quot;Fit&quot;]">楼地面说明</a></li>
	     <li><a title="防水隔离层选用表" class="l" href="#pf4e" data-dest-detail="[78,&quot;Fit&quot;]">防水隔离层选用表</a></li>
	     <li><a title="楼地面选用表" class="l" href="#pf4f" data-dest-detail="[79,&quot;Fit&quot;]">楼地面选用表</a></li>
	     <li><a title="水泥类整体面层楼地面" class="l" href="#pf51" data-dest-detail="[81,&quot;Fit&quot;]">水泥类整体面层楼地面</a></li>
	     <li><a title="树脂类整体面层楼地面" class="l" href="#pf5c" data-dest-detail="[92,&quot;Fit&quot;]">树脂类整体面层楼地面</a></li>
	     <li><a title="地毯面层楼地面" class="l" href="#pf71" data-dest-detail="[113,&quot;Fit&quot;]">地毯面层楼地面</a></li>
	     <li><a title="板块类面层楼地面" class="l" href="#pf73" data-dest-detail="[115,&quot;Fit&quot;]">板块类面层楼地面</a></li>
	     <li><a title="木地板面层楼地面" class="l" href="#pf88" data-dest-detail="[136,&quot;Fit&quot;]">木地板面层楼地面</a></li>
	     <li><a title="保温楼地面" class="l" href="#pf8d" data-dest-detail="[141,&quot;Fit&quot;]">保温楼地面</a></li>
	     <li><a title="采暖楼地面" class="l" href="#pf92" data-dest-detail="[146,&quot;Fit&quot;]">采暖楼地面</a></li>
	     <li><a title="隔声楼面" class="l" href="#pf97" data-dest-detail="[151,&quot;Fit&quot;]">隔声楼面</a></li>
	     <li><a title="隔声保温楼面" class="l" href="#pf9d" data-dest-detail="[157,&quot;Fit&quot;]">隔声保温楼面</a></li>
	     <li><a title="运动楼地面" class="l" href="#pf9f" data-dest-detail="[159,&quot;Fit&quot;]">运动楼地面</a></li>
	     <li><a title="防静电楼地面" class="l" href="#pfa5" data-dest-detail="[165,&quot;Fit&quot;]">防静电楼地面</a></li>
	     <li><a title="不发火楼地面" class="l" href="#pfaf" data-dest-detail="[175,&quot;Fit&quot;]">不发火楼地面</a></li>
	     <li><a title="防静电不发火楼地面" class="l" href="#pfb3" data-dest-detail="[179,&quot;Fit&quot;]">防静电不发火楼地面</a></li>
	     <li><a title="防静电不发火防爆楼地面" class="l" href="#pfb8" data-dest-detail="[184,&quot;Fit&quot;]">防静电不发火防爆楼地面</a></li>
	     <li><a title="防油渗楼地面" class="l" href="#pfbc" data-dest-detail="[188,&quot;Fit&quot;]">防油渗楼地面</a></li>
	     <li><a title="耐热楼地面" class="l" href="#pfc1" data-dest-detail="[193,&quot;Fit&quot;]">耐热楼地面</a></li>
	     <li><a title="耐热重载地面" class="l" href="#pfc2" data-dest-detail="[194,&quot;Fit&quot;]">耐热重载地面</a></li>
	     <li><a title="混凝土重载地面" class="l" href="#pfc3" data-dest-detail="[195,&quot;Fit&quot;]">混凝土重载地面</a></li>
	     <li><a title="耐热重载耐磨防静电地面" class="l" href="#pfc4" data-dest-detail="[196,&quot;Fit&quot;]">耐热重载耐磨防静电地面</a></li>
	     <li><a title="常用防腐蚀楼地面材料选用表" class="l" href="#pfc6" data-dest-detail="[198,&quot;Fit&quot;]">常用防腐蚀楼地面材料选用表</a></li>
	     <li><a title="防腐蚀楼地面" class="l" href="#pfc7" data-dest-detail="[199,&quot;Fit&quot;]">防腐蚀楼地面</a></li>
	    </ul></li>
	   <li><a title="踢脚" class="l" href="#pfcd" data-dest-detail="[205,&quot;Fit&quot;]">踢脚</a>
	    <ul>
	     <li><a title="踢脚说明" class="l" href="#pfcd" data-dest-detail="[205,&quot;Fit&quot;]">踢脚说明</a></li>
	     <li><a title="踢脚分类及性能表" class="l" href="#pfce" data-dest-detail="[206,&quot;Fit&quot;]">踢脚分类及性能表</a></li>
	     <li><a title="踢脚选用表" class="l" href="#pfcf" data-dest-detail="[207,&quot;Fit&quot;]">踢脚选用表</a></li>
	     <li><a title="水泥踢脚" class="l" href="#pfd0" data-dest-detail="[208,&quot;Fit&quot;]">水泥踢脚</a></li>
	     <li><a title="水泥踢脚、水磨石踢脚" class="l" href="#pfd1" data-dest-detail="[209,&quot;Fit&quot;]">水泥踢脚、水磨石踢脚</a></li>
	     <li><a title="水磨石踢脚、石材踢脚" class="l" href="#pfd2" data-dest-detail="[210,&quot;Fit&quot;]">水磨石踢脚、石材踢脚</a></li>
	     <li><a title="石材踢脚" class="l" href="#pfd3" data-dest-detail="[211,&quot;Fit&quot;]">石材踢脚</a></li>
	     <li><a title="面砖踢脚" class="l" href="#pfd4" data-dest-detail="[212,&quot;Fit&quot;]">面砖踢脚</a></li>
	     <li><a title="面砖踢脚、木踢脚" class="l" href="#pfd8" data-dest-detail="[216,&quot;Fit&quot;]">面砖踢脚、木踢脚</a></li>
	     <li><a title="木踢脚" class="l" href="#pfd9" data-dest-detail="[217,&quot;Fit&quot;]">木踢脚</a></li>
	     <li><a title="金属踢脚" class="l" href="#pfda" data-dest-detail="[218,&quot;Fit&quot;]">金属踢脚</a></li>
	     <li><a title="金属踢脚、弹性踢脚" class="l" href="#pfdb" data-dest-detail="[219,&quot;Fit&quot;]">金属踢脚、弹性踢脚</a></li>
	     <li><a title="弹性踢脚" class="l" href="#pfdc" data-dest-detail="[220,&quot;Fit&quot;]">弹性踢脚</a></li>
	     <li><a title="涂料踢脚" class="l" href="#pfdd" data-dest-detail="[221,&quot;Fit&quot;]">涂料踢脚</a></li>
	     <li><a title="涂料踢脚、防腐蚀踢脚" class="l" href="#pfde" data-dest-detail="[222,&quot;Fit&quot;]">涂料踢脚、防腐蚀踢脚</a></li>
	     <li><a title="防腐蚀踢脚" class="l" href="#pfdf" data-dest-detail="[223,&quot;Fit&quot;]">防腐蚀踢脚</a></li>
	    </ul></li>
	   <li><a title="屋面" class="l" href="#pfe0" data-dest-detail="[224,&quot;Fit&quot;]">屋面</a>
	    <ul>
	     <li><a title="屋面说明" class="l" href="#pfe0" data-dest-detail="[224,&quot;Fit&quot;]">屋面说明</a></li>
	     <li><a title="屋面构造选用表" class="l" href="#pfeb" data-dest-detail="[235,&quot;Fit&quot;]">屋面构造选用表</a></li>
	     <li><a title="屋面防水层选用表" class="l" href="#pfed" data-dest-detail="[237,&quot;Fit&quot;]">屋面防水层选用表</a></li>
	     <li><a title="平屋面" class="l" href="#pff1" data-dest-detail="[241,&quot;Fit&quot;]">平屋面</a></li>
	     <li><a title="平屋面（倒置式）" class="l" href="#pffd" data-dest-detail="[253,&quot;Fit&quot;]">平屋面（倒置式）</a></li>
	     <li><a title="平屋面（无保温）" class="l" href="#pf100" data-dest-detail="[256,&quot;Fit&quot;]">平屋面（无保温）</a></li>
	     <li><a title="架空屋面" class="l" href="#pf102" data-dest-detail="[258,&quot;Fit&quot;]">架空屋面</a></li>
	     <li><a title="停车屋面" class="l" href="#pf109" data-dest-detail="[265,&quot;Fit&quot;]">停车屋面</a></li>
	     <li><a title="瓦屋面" class="l" href="#pf10b" data-dest-detail="[267,&quot;Fit&quot;]">瓦屋面</a></li>
	     <li><a title="压型金属板屋面" class="l" href="#pf116" data-dest-detail="[278,&quot;Fit&quot;]">压型金属板屋面</a></li>
	     <li><a title="种植屋面" class="l" href="#pf11a" data-dest-detail="[282,&quot;Fit&quot;]">种植屋面</a></li>
	     <li><a title="单层防水卷材屋面" class="l" href="#pf124" data-dest-detail="[292,&quot;Fit&quot;]">单层防水卷材屋面</a></li>
	    </ul></li>
	   <li><a title="外墙饰面" class="l" href="#pf128" data-dest-detail="[296,&quot;Fit&quot;]">外墙饰面</a>
	    <ul>
	     <li><a title="外墙饰面说明" class="l" href="#pf128" data-dest-detail="[296,&quot;Fit&quot;]">外墙饰面说明</a></li>
	     <li><a title="外墙饰面说明、防水层选用表" class="l" href="#pf12b" data-dest-detail="[299,&quot;Fit&quot;]">外墙饰面说明、防水层选用表</a></li>
	     <li><a title="外墙饰面做法选用表" class="l" href="#pf12c" data-dest-detail="[300,&quot;Fit&quot;]">外墙饰面做法选用表</a></li>
	     <li><a title="清水饰面" class="l" href="#pf12e" data-dest-detail="[302,&quot;Fit&quot;]">清水饰面</a></li>
	     <li><a title="一般抹灰饰面" class="l" href="#pf12f" data-dest-detail="[303,&quot;Fit&quot;]">一般抹灰饰面</a></li>
	     <li><a title="装饰抹灰饰面" class="l" href="#pf130" data-dest-detail="[304,&quot;Fit&quot;]">装饰抹灰饰面</a></li>
	     <li><a title="涂料饰面" class="l" href="#pf133" data-dest-detail="[307,&quot;Fit&quot;]">涂料饰面</a></li>
	     <li><a title="面砖饰面" class="l" href="#pf134" data-dest-detail="[308,&quot;Fit&quot;]">面砖饰面</a></li>
	     <li><a title="石材饰面" class="l" href="#pf136" data-dest-detail="[310,&quot;Fit&quot;]">石材饰面</a></li>
	     <li><a title="板材饰面" class="l" href="#pf138" data-dest-detail="[312,&quot;Fit&quot;]">板材饰面</a></li>
	     <li><a title="外墙涂料说明" class="l" href="#pf13b" data-dest-detail="[315,&quot;Fit&quot;]">外墙涂料说明</a></li>
	     <li><a title="外墙涂料选用表" class="l" href="#pf13d" data-dest-detail="[317,&quot;Fit&quot;]">外墙涂料选用表</a></li>
	     <li><a title="外墙涂料" class="l" href="#pf13e" data-dest-detail="[318,&quot;Fit&quot;]">外墙涂料</a></li>
	    </ul></li>
	   <li><a title="内墙饰面（含墙面和墙裙）" class="l" href="#pf141" data-dest-detail="[321,&quot;Fit&quot;]">内墙饰面（含墙面和墙裙）</a>
	    <ul>
	     <li><a title="内墙饰面说明" class="l" href="#pf141" data-dest-detail="[321,&quot;Fit&quot;]">内墙饰面说明</a></li>
	     <li><a title="内墙饰面选用表" class="l" href="#pf143" data-dest-detail="[323,&quot;Fit&quot;]">内墙饰面选用表</a></li>
	     <li><a title="清水饰面、抹灰涂料饰面" class="l" href="#pf146" data-dest-detail="[326,&quot;Fit&quot;]">清水饰面、抹灰涂料饰面</a></li>
	     <li><a title="抹灰涂料饰面" class="l" href="#pf147" data-dest-detail="[327,&quot;Fit&quot;]">抹灰涂料饰面</a></li>
	     <li><a title="面砖饰面" class="l" href="#pf14b" data-dest-detail="[331,&quot;Fit&quot;]">面砖饰面</a></li>
	     <li><a title="石材饰面" class="l" href="#pf153" data-dest-detail="[339,&quot;Fit&quot;]">石材饰面</a></li>
	     <li><a title="装饰板饰面" class="l" href="#pf158" data-dest-detail="[344,&quot;Fit&quot;]">装饰板饰面</a></li>
	     <li><a title="壁纸、织物饰面" class="l" href="#pf162" data-dest-detail="[354,&quot;Fit&quot;]">壁纸、织物饰面</a></li>
	     <li><a title="吸声饰面" class="l" href="#pf166" data-dest-detail="[358,&quot;Fit&quot;]">吸声饰面</a></li>
	     <li><a title="特殊功能饰面" class="l" href="#pf16c" data-dest-detail="[364,&quot;Fit&quot;]">特殊功能饰面</a></li>
	     <li><a title="内墙涂料说明" class="l" href="#pf170" data-dest-detail="[368,&quot;Fit&quot;]">内墙涂料说明</a></li>
	     <li><a title="内墙涂料" class="l" href="#pf171" data-dest-detail="[369,&quot;Fit&quot;]">内墙涂料</a></li>
	    </ul></li>
	   <li><a title="顶棚" class="l" href="#pf173" data-dest-detail="[371,&quot;Fit&quot;]">顶棚</a>
	    <ul>
	     <li><a title="顶棚及吊顶说明" class="l" href="#pf173" data-dest-detail="[371,&quot;Fit&quot;]">顶棚及吊顶说明</a></li>
	     <li><a title="顶棚及吊顶选用表" class="l" href="#pf175" data-dest-detail="[373,&quot;Fit&quot;]">顶棚及吊顶选用表</a></li>
	     <li><a title="轻钢龙骨吊顶整体板选用表" class="l" href="#pf177" data-dest-detail="[375,&quot;Fit&quot;]">轻钢龙骨吊顶整体板选用表</a></li>
	     <li><a title="普通顶棚" class="l" href="#pf178" data-dest-detail="[376,&quot;Fit&quot;]">普通顶棚</a></li>
	     <li><a title="保湿吸声顶棚" class="l" href="#pf179" data-dest-detail="[377,&quot;Fit&quot;]">保湿吸声顶棚</a></li>
	     <li><a title="整体板材吊顶" class="l" href="#pf17a" data-dest-detail="[378,&quot;Fit&quot;]">整体板材吊顶</a></li>
	     <li><a title="板块吊顶" class="l" href="#pf17c" data-dest-detail="[380,&quot;Fit&quot;]">板块吊顶</a></li>
	     <li><a title="吸声吊顶" class="l" href="#pf17e" data-dest-detail="[382,&quot;Fit&quot;]">吸声吊顶</a></li>
	     <li><a title="金属吊顶" class="l" href="#pf181" data-dest-detail="[385,&quot;Fit&quot;]">金属吊顶</a></li>
	     <li><a title="玻璃吊顶、织物张拉吊顶" class="l" href="#pf184" data-dest-detail="[388,&quot;Fit&quot;]">玻璃吊顶、织物张拉吊顶</a></li>
	    </ul></li>
	   <li><a title="涂料" class="l" href="#pf185" data-dest-detail="[389,&quot;Fit&quot;]">涂料</a>
	    <ul>
	     <li><a title="涂料说明" class="l" href="#pf185" data-dest-detail="[389,&quot;Fit&quot;]">涂料说明</a></li>
	     <li><a title="涂料选用表" class="l" href="#pf189" data-dest-detail="[393,&quot;Fit&quot;]">涂料选用表</a></li>
	     <li><a title="钢材防腐涂料" class="l" href="#pf18a" data-dest-detail="[394,&quot;Fit&quot;]">钢材防腐涂料</a></li>
	     <li><a title="钢材防火涂料" class="l" href="#pf18f" data-dest-detail="[399,&quot;Fit&quot;]">钢材防火涂料</a></li>
	     <li><a title="钢材防腐防火涂料" class="l" href="#pf190" data-dest-detail="[400,&quot;Fit&quot;]">钢材防腐防火涂料</a></li>
	     <li><a title="木材涂料" class="l" href="#pf191" data-dest-detail="[401,&quot;Fit&quot;]">木材涂料</a></li>
	     <li><a title="混凝土、水泥砂浆表面防腐涂料" class="l" href="#pf195" data-dest-detail="[405,&quot;Fit&quot;]">混凝土、水泥砂浆表面防腐涂料</a></li>
	    </ul></li>
	   <li><a title="附录A 不发火花、导（防）静电、防爆楼地面及面层材料要求" class="l" href="#pf199" data-dest-detail="[409,&quot;Fit&quot;]">附录A 不发火花、导（防）静电、防爆楼地面及面层材料要求</a></li>
	  </ul>
                    `
                },
                '24J910': {
                    name: '24J910 建筑节能',
                    pages: 8,
                    baseUrl: 'https://via.placeholder.com/800x1000/3498db/ffffff?text=24J910+Page+',
                    outline: `
                        <ul>
                            <li><a title="24J910" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]">24J910</a></li>
                            <li><a title="建筑节能" class="l" href="#pf9" data-dest-detail="[9,&quot;Fit&quot;]">建筑节能</a></li>
                            <li><a title="绿色建筑" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">绿色建筑</a>
                                <ul>
                                    <li><a title="节能材料" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">节能材料</a></li>
                                    <li><a title="节能构造" class="l" href="#pf10" data-dest-detail="[16,&quot;Fit&quot;]">节能构造</a></li>
                                    <li><a title="节能设计" class="l" href="#pf12" data-dest-detail="[18,&quot;Fit&quot;]">节能设计</a></li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                '25J911': {
                    name: '25J911 装配式建筑',
                    pages: 6,
                    baseUrl: 'https://via.placeholder.com/800x1000/2ecc71/ffffff?text=25J911+Page+',
                    outline: `
                        <ul>
                            <li><a title="25J911" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]">25J911</a></li>
                            <li><a title="装配式建筑" class="l" href="#pf9" data-dest-detail="[9,&quot;Fit&quot;]">装配式建筑</a></li>
                            <li><a title="预制构件" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">预制构件</a>
                                <ul>
                                    <li><a title="墙板" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">墙板</a></li>
                                    <li><a title="楼板" class="l" href="#pf10" data-dest-detail="[16,&quot;Fit&quot;]">楼板</a></li>
                                    <li><a title="楼梯" class="l" href="#pf12" data-dest-detail="[18,&quot;Fit&quot;]">楼梯</a></li>
                                </ul>
                            </li>
                        </ul>
                    `
                }
            },
            // 中南标图集
            'ZN': {
                '15ZJ001': {
                    name: '15ZJ001：建筑构造用料做法',
                    pages: 159,
                    baseUrl: 'https://ebook.chinabuilding.com.cn/upload/resources/20170315/101101593/bg',
                    outline: `
<ul>
     <li><a title="15ZJ001(1)" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]" _pageno="1"><mark class="searchJumper" data-content="15zj001" style="background: rgb(255, 255, 0) !important; color: black !important;">15ZJ001</mark>(1)</a></li>
     <li><a title="目录(6)" class="l" href="#pf6" data-dest-detail="[6,&quot;Fit&quot;]" _pageno="6">目录(6)</a></li>
     <li><a title="总说明(7)" class="l" href="#pf7" data-dest-detail="[7,&quot;Fit&quot;]" _pageno="7">总说明(7)</a></li>
     <li><a title="地下室及水池防水说明(10)" class="l" href="#pfa" data-dest-detail="[10,&quot;Fit&quot;]" _pageno="10">地下室及水池防水说明(10)</a></li>
     <li><a title="地下室(16)" class="l" href="#pf10" data-dest-detail="[16,&quot;Fit&quot;]" _pageno="16">地下室(16)</a></li>
     <li><a title="水池(23)" class="l" href="#pf17" data-dest-detail="[23,&quot;Fit&quot;]" _pageno="23">水池(23)</a></li>
     <li><a title="楼地面、踢脚说明(25)" class="l" href="#pf19" data-dest-detail="[25,&quot;Fit&quot;]" _pageno="25">楼地面、踢脚说明(25)</a></li>
     <li><a title="楼地面(27)" class="l" href="#pf1b" data-dest-detail="[27,&quot;Fit&quot;]" _pageno="27">楼地面(27)</a></li>
     <li><a title="踢脚(52)" class="l" href="#pf34" data-dest-detail="[52,&quot;Fit&quot;]" _pageno="52">踢脚(52)</a></li>
     <li><a title="内外墙、墙裙说明(60)" class="l" href="#pf3c" data-dest-detail="[60,&quot;Fit&quot;]" _pageno="60">内外墙、墙裙说明(60)</a></li>
     <li><a title="内墙(63)" class="l" href="#pf3f" data-dest-detail="[63,&quot;Fit&quot;]" _pageno="63">内墙(63)</a></li>
     <li><a title="墙裙(77)" class="l" href="#pf4d" data-dest-detail="[77,&quot;Fit&quot;]" _pageno="77">墙裙(77)</a></li>
     <li><a title="外墙(82)" class="l" href="#pf52" data-dest-detail="[82,&quot;Fit&quot;]" _pageno="82">外墙(82)</a></li>
     <li><a title="顶棚说明(88)" class="l" href="#pf58" data-dest-detail="[88,&quot;Fit&quot;]" _pageno="88">顶棚说明(88)</a></li>
     <li><a title="顶棚(91)" class="l" href="#pf5b" data-dest-detail="[91,&quot;Fit&quot;]" _pageno="91">顶棚(91)</a></li>
     <li><a title="涂料、刷浆、裱糊说明(101)" class="l" href="#pf65" data-dest-detail="[101,&quot;Fit&quot;]" _pageno="101">涂料、刷浆、裱糊说明(101)</a></li>
     <li><a title="涂料(103)" class="l" href="#pf67" data-dest-detail="[103,&quot;Fit&quot;]" _pageno="103">涂料(103)</a></li>
     <li><a title="刷浆、裱糊(112)" class="l" href="#pf70" data-dest-detail="[112,&quot;Fit&quot;]" _pageno="112">刷浆、裱糊(112)</a></li>
     <li><a title="屋面说明(113)" class="l" href="#pf71" data-dest-detail="[113,&quot;Fit&quot;]" _pageno="113">屋面说明(113)</a></li>
     <li><a title="屋面(123)" class="l" href="#pf7b" data-dest-detail="[123,&quot;Fit&quot;]" _pageno="123">屋面(123)</a></li>
     <li><a title="散水、台阶、坡道说明(143)" class="l" href="#pf8f" data-dest-detail="[143,&quot;Fit&quot;]" _pageno="143">散水、台阶、坡道说明(143)</a></li>
     <li><a title="散水(144)" class="l" href="#pf90" data-dest-detail="[144,&quot;Fit&quot;]" _pageno="144">散水(144)</a></li>
     <li><a title="台阶(146)" class="l" href="#pf92" data-dest-detail="[146,&quot;Fit&quot;]" _pageno="146">台阶(146)</a></li>
     <li><a title="坡道(148)" class="l" href="#pf94" data-dest-detail="[148,&quot;Fit&quot;]" _pageno="148">坡道(148)</a></li>
     <li><a title="道路、场地说明(151)" class="l" href="#pf97" data-dest-detail="[151,&quot;Fit&quot;]" _pageno="151">道路、场地说明(151)</a></li>
     <li><a title="道路(152)" class="l" href="#pf98" data-dest-detail="[152,&quot;Fit&quot;]" _pageno="152">道路(152)</a></li>
     <li><a title="场地(157)" class="l" href="#pf9d" data-dest-detail="[157,&quot;Fit&quot;]" _pageno="157">场地(157)</a></li>
    </ul>
                    `
                },
                '13ZJ002': {
                    name: '13ZJ002 建筑节能构造用料做法',
                    pages: 242,
                    baseUrl: 'https://ebook.chinabuilding.com.cn/iPadresource/2015-07/2014090212192945873/bg',
                    outline: `
<ul>
     <li><a title="13ZJ002(1)" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]" _pageno="1">13ZJ002(1)</a></li>
     <li><a title="目录(7)" class="l" href="#pf7" data-dest-detail="[7,&quot;Fit&quot;]" _pageno="7">目录(7)</a></li>
     <li><a title="总说明(10)" class="l" href="#pfa" data-dest-detail="[10,&quot;Fit&quot;]" _pageno="10">总说明(10)</a></li>
     <li><a title="Ⅰ 外墙与分户墙及隔墙(19)" class="l" href="#pf13" data-dest-detail="[19,&quot;Fit&quot;]" _pageno="19">Ⅰ 外墙与分户墙及隔墙(19)</a>
      <ul>
       <li><a title="外墙与分户墙及隔墙说明(19)" class="l" href="#pf13" data-dest-detail="[19,&quot;Fit&quot;]" _pageno="19">外墙与分户墙及隔墙说明(19)</a></li>
      </ul></li>
     <li><a title="一 内外保温系统与内外墙面基本构造用料做法(31)" class="l" href="#pf1f" data-dest-detail="[31,&quot;Fit&quot;]" _pageno="31">一 内外保温系统与内外墙面基本构造用料做法(31)</a>
      <ul>
       <li><a title="墙A 外保温系统构造用料做法(31)" class="l" href="#pf1f" data-dest-detail="[31,&quot;Fit&quot;]" _pageno="31">墙A 外保温系统构造用料做法(31)</a></li>
       <li><a title="墙B 内保温系统构造用料做法(43)" class="l" href="#pf2b" data-dest-detail="[43,&quot;Fit&quot;]" _pageno="43">墙B 内保温系统构造用料做法(43)</a></li>
       <li><a title="墙C 外墙面构造用料做法(52)" class="l" href="#pf34" data-dest-detail="[52,&quot;Fit&quot;]" _pageno="52">墙C 外墙面构造用料做法(52)</a></li>
       <li><a title="墙D 内墙面构造用料做法(54)" class="l" href="#pf36" data-dest-detail="[54,&quot;Fit&quot;]" _pageno="54">墙D 内墙面构造用料做法(54)</a></li>
      </ul></li>
     <li><a title="二 外墙(57)" class="l" href="#pf39" data-dest-detail="[57,&quot;Fit&quot;]" _pageno="57">二 外墙(57)</a>
      <ul>
       <li><a title="（一）混凝土结构(含蒸压加气混凝土砌块填充墙)外墙(57)" class="l" href="#pf39" data-dest-detail="[57,&quot;Fit&quot;]" _pageno="57">（一）混凝土结构(含蒸压加气混凝土砌块填充墙)外墙(57)</a></li>
       <li><a title="外墙1～外墙6（外保温）(57)" class="l" href="#pf39" data-dest-detail="[57,&quot;Fit&quot;]" _pageno="57">外墙1～外墙6（外保温）(57)</a></li>
       <li><a title="外墙7～外墙8（混凝土梁柱墙部位外保温）(65)" class="l" href="#pf41" data-dest-detail="[65,&quot;Fit&quot;]" _pageno="65">外墙7～外墙8（混凝土梁柱墙部位外保温）(65)</a></li>
       <li><a title="外墙9～外墙17（混凝土梁柱墙及整体外保温）(66)" class="l" href="#pf42" data-dest-detail="[66,&quot;Fit&quot;]" _pageno="66">外墙9～外墙17（混凝土梁柱墙及整体外保温）(66)</a></li>
       <li><a title="外墙18、外墙19（夹芯墙外保温）(74)" class="l" href="#pf4a" data-dest-detail="[74,&quot;Fit&quot;]" _pageno="74">外墙18、外墙19（夹芯墙外保温）(74)</a></li>
       <li><a title="外墙20～外墙25（内保温）(75)" class="l" href="#pf4b" data-dest-detail="[75,&quot;Fit&quot;]" _pageno="75">外墙20～外墙25（内保温）(75)</a></li>
       <li><a title="外墙26（内、外保温）(82)" class="l" href="#pf52" data-dest-detail="[82,&quot;Fit&quot;]" _pageno="82">外墙26（内、外保温）(82)</a></li>
      </ul></li>
     <li><a title="（二）砖外墙(92)" class="l" href="#pf5c" data-dest-detail="[92,&quot;Fit&quot;]" _pageno="92">（二）砖外墙(92)</a>
      <ul>
       <li><a title="外墙27～外墙31（烧结页岩砖，外保温）(92)" class="l" href="#pf5c" data-dest-detail="[92,&quot;Fit&quot;]" _pageno="92">外墙27～外墙31（烧结页岩砖，外保温）(92)</a></li>
       <li><a title="外墙32～外墙36（粉煤灰砖，外保温）(95)" class="l" href="#pf5f" data-dest-detail="[95,&quot;Fit&quot;]" _pageno="95">外墙32～外墙36（粉煤灰砖，外保温）(95)</a></li>
       <li><a title="外墙37～外墙41（蒸压灰砂砖，外保温）(98)" class="l" href="#pf62" data-dest-detail="[98,&quot;Fit&quot;]" _pageno="98">外墙37～外墙41（蒸压灰砂砖，外保温）(98)</a></li>
       <li><a title="外墙42～外墙46（混凝土多孔砖，外保温）(101)" class="l" href="#pf65" data-dest-detail="[101,&quot;Fit&quot;]" _pageno="101">外墙42～外墙46（混凝土多孔砖，外保温）(101)</a></li>
       <li><a title="外墙47～外墙51（混凝土实心砖，外保温）(104)" class="l" href="#pf68" data-dest-detail="[104,&quot;Fit&quot;]" _pageno="104">外墙47～外墙51（混凝土实心砖，外保温）(104)</a></li>
       <li><a title="外墙52～外墙56（烧结页岩多孔砖，外保温）(107)" class="l" href="#pf6b" data-dest-detail="[107,&quot;Fit&quot;]" _pageno="107">外墙52～外墙56（烧结页岩多孔砖，外保温）(107)</a></li>
      </ul></li>
     <li><a title="（三）混凝土小型空心砌块外墙(110)" class="l" href="#pf6e" data-dest-detail="[110,&quot;Fit&quot;]" _pageno="110">（三）混凝土小型空心砌块外墙(110)</a>
      <ul>
       <li><a title="外墙57～外墙63（外保温 ）(110)" class="l" href="#pf6e" data-dest-detail="[110,&quot;Fit&quot;]" _pageno="110">外墙57～外墙63（外保温 ）(110)</a></li>
      </ul></li>
     <li><a title="（四）蒸压加气混凝土砌块外墙(116)" class="l" href="#pf74" data-dest-detail="[116,&quot;Fit&quot;]" _pageno="116">（四）蒸压加气混凝土砌块外墙(116)</a>
      <ul>
       <li><a title="外墙64（承重砌块墙自保温）(116)" class="l" href="#pf74" data-dest-detail="[116,&quot;Fit&quot;]" _pageno="116">外墙64（承重砌块墙自保温）(116)</a></li>
       <li><a title="外墙65（梁柱部位外保温）(116)" class="l" href="#pf74" data-dest-detail="[116,&quot;Fit&quot;]" _pageno="116">外墙65（梁柱部位外保温）(116)</a></li>
       <li><a title="外墙66～外墙70（外保温）(117)" class="l" href="#pf75" data-dest-detail="[117,&quot;Fit&quot;]" _pageno="117">外墙66～外墙70（外保温）(117)</a></li>
       <li><a title="外墙71～外墙75（梁柱部位及整体外保温）(121)" class="l" href="#pf79" data-dest-detail="[121,&quot;Fit&quot;]" _pageno="121">外墙71～外墙75（梁柱部位及整体外保温）(121)</a></li>
      </ul></li>
     <li><a title="（五）地下室触土外墙(125)" class="l" href="#pf7d" data-dest-detail="[125,&quot;Fit&quot;]" _pageno="125">（五）地下室触土外墙(125)</a>
      <ul>
       <li><a title="地下室外墙1～地下室外墙3(125)" class="l" href="#pf7d" data-dest-detail="[125,&quot;Fit&quot;]" _pageno="125">地下室外墙1～地下室外墙3(125)</a></li>
      </ul></li>
     <li><a title="（六）外保温外墙外挑外凸构件保温隔热构造(128)" class="l" href="#pf80" data-dest-detail="[128,&quot;Fit&quot;]" _pageno="128">（六）外保温外墙外挑外凸构件保温隔热构造(128)</a>
      <ul>
       <li><a title="凸窗顶板1～凸窗顶板2(128)" class="l" href="#pf80" data-dest-detail="[128,&quot;Fit&quot;]" _pageno="128">凸窗顶板1～凸窗顶板2(128)</a></li>
       <li><a title="凸窗底板1～凸窗底板2(132)" class="l" href="#pf84" data-dest-detail="[132,&quot;Fit&quot;]" _pageno="132">凸窗底板1～凸窗底板2(132)</a></li>
       <li><a title="凸窗侧墙板1～凸窗侧墙板2(136)" class="l" href="#pf88" data-dest-detail="[136,&quot;Fit&quot;]" _pageno="136">凸窗侧墙板1～凸窗侧墙板2(136)</a></li>
       <li><a title="空调室外机搁板(140)" class="l" href="#pf8c" data-dest-detail="[140,&quot;Fit&quot;]" _pageno="140">空调室外机搁板(140)</a></li>
       <li><a title="空调室外机钢支架(142)" class="l" href="#pf8e" data-dest-detail="[142,&quot;Fit&quot;]" _pageno="142">空调室外机钢支架(142)</a></li>
       <li><a title="天（檐）沟或有组织排水雨篷(143)" class="l" href="#pf8f" data-dest-detail="[143,&quot;Fit&quot;]" _pageno="143">天（檐）沟或有组织排水雨篷(143)</a></li>
       <li><a title="雨篷板，水平遮阳板，垂直遮阳板，外墙连系梁等(146)" class="l" href="#pf92" data-dest-detail="[146,&quot;Fit&quot;]" _pageno="146">雨篷板，水平遮阳板，垂直遮阳板，外墙连系梁等(146)</a></li>
       <li><a title="阳台(149)" class="l" href="#pf95" data-dest-detail="[149,&quot;Fit&quot;]" _pageno="149">阳台(149)</a></li>
      </ul></li>
     <li><a title="（七）内保温外墙内接构件保温隔热构造(151)" class="l" href="#pf97" data-dest-detail="[151,&quot;Fit&quot;]" _pageno="151">（七）内保温外墙内接构件保温隔热构造(151)</a>
      <ul>
       <li><a title="与外墙衔接混凝土结构内墙局部内保温隔热系统(151)" class="l" href="#pf97" data-dest-detail="[151,&quot;Fit&quot;]" _pageno="151">与外墙衔接混凝土结构内墙局部内保温隔热系统(151)</a></li>
       <li><a title="与混凝土结构外墙衔接屋面板底顶棚局部内保温隔热系统(153)" class="l" href="#pf99" data-dest-detail="[153,&quot;Fit&quot;]" _pageno="153">与混凝土结构外墙衔接屋面板底顶棚局部内保温隔热系统(153)</a></li>
       <li><a title="与混凝土结构外墙衔接楼板板底顶棚局部内保温隔热系统(156)" class="l" href="#pf9c" data-dest-detail="[156,&quot;Fit&quot;]" _pageno="156">与混凝土结构外墙衔接楼板板底顶棚局部内保温隔热系统(156)</a></li>
      </ul></li>
     <li><a title="（八）外墙变形缝保温隔热构造(157)" class="l" href="#pf9d" data-dest-detail="[157,&quot;Fit&quot;]" _pageno="157">（八）外墙变形缝保温隔热构造(157)</a>
      <ul>
       <li><a title="外保温外墙变形缝1～外保温外墙变形缝3(157)" class="l" href="#pf9d" data-dest-detail="[157,&quot;Fit&quot;]" _pageno="157">外保温外墙变形缝1～外保温外墙变形缝3(157)</a></li>
       <li><a title="内保温外墙变形缝(161)" class="l" href="#pfa1" data-dest-detail="[161,&quot;Fit&quot;]" _pageno="161">内保温外墙变形缝(161)</a></li>
      </ul></li>
     <li><a title="三 分户墙/分隔采暖空调空间与非采暖空调空间的隔墙(162)" class="l" href="#pfa2" data-dest-detail="[162,&quot;Fit&quot;]" _pageno="162">三 分户墙/分隔采暖空调空间与非采暖空调空间的隔墙(162)</a>
      <ul>
       <li><a title="分户墙/隔墙1～分户墙/隔墙14(162)" class="l" href="#pfa2" data-dest-detail="[162,&quot;Fit&quot;]" _pageno="162">分户墙/隔墙1～分户墙/隔墙14(162)</a></li>
       <li><a title="隔墙15～隔墙23(165)" class="l" href="#pfa5" data-dest-detail="[165,&quot;Fit&quot;]" _pageno="165">隔墙15～隔墙23(165)</a></li>
      </ul></li>
     <li><a title="Ⅱ 楼地面(168)" class="l" href="#pfa8" data-dest-detail="[168,&quot;Fit&quot;]" _pageno="168">Ⅱ 楼地面(168)</a>
      <ul>
       <li><a title="楼地面说明(168)" class="l" href="#pfa8" data-dest-detail="[168,&quot;Fit&quot;]" _pageno="168">楼地面说明(168)</a></li>
       <li><a title="楼A 楼地面面层及结合层构造用料做法(171)" class="l" href="#pfab" data-dest-detail="[171,&quot;Fit&quot;]" _pageno="171">楼A 楼地面面层及结合层构造用料做法(171)</a></li>
       <li><a title="楼B 顶棚构造用料做法(172)" class="l" href="#pfac" data-dest-detail="[172,&quot;Fit&quot;]" _pageno="172">楼B 顶棚构造用料做法(172)</a></li>
      </ul></li>
     <li><a title="一 分层楼面(173)" class="l" href="#pfad" data-dest-detail="[173,&quot;Fit&quot;]" _pageno="173">一 分层楼面(173)</a>
      <ul>
       <li><a title="楼1～楼2(173)" class="l" href="#pfad" data-dest-detail="[173,&quot;Fit&quot;]" _pageno="173">楼1～楼2(173)</a></li>
      </ul></li>
     <li><a title="二 底面接触室外空气的架空或外挑楼面(174)" class="l" href="#pfae" data-dest-detail="[174,&quot;Fit&quot;]" _pageno="174">二 底面接触室外空气的架空或外挑楼面(174)</a>
      <ul>
       <li><a title="楼3～楼8(174)" class="l" href="#pfae" data-dest-detail="[174,&quot;Fit&quot;]" _pageno="174">楼3～楼8(174)</a></li>
      </ul></li>
     <li><a title="三 非采暖空调地下室（半地下室）顶板，非采暖空调房间与采暖空调房间的楼板等(179)" class="l" href="#pfb3" data-dest-detail="[179,&quot;Fit&quot;]" _pageno="179">三 非采暖空调地下室（半地下室）顶板，非采暖空调房间与采暖空调房间的楼板等(179)</a>
      <ul>
       <li><a title="楼9～楼12(179)" class="l" href="#pfb3" data-dest-detail="[179,&quot;Fit&quot;]" _pageno="179">楼9～楼12(179)</a></li>
      </ul></li>
     <li><a title="四 无保温楼（地）面(182)" class="l" href="#pfb6" data-dest-detail="[182,&quot;Fit&quot;]" _pageno="182">四 无保温楼（地）面(182)</a>
      <ul>
       <li><a title="楼13～楼17(182)" class="l" href="#pfb6" data-dest-detail="[182,&quot;Fit&quot;]" _pageno="182">楼13～楼17(182)</a></li>
      </ul></li>
     <li><a title="五 触土地面(183)" class="l" href="#pfb7" data-dest-detail="[183,&quot;Fit&quot;]" _pageno="183">五 触土地面(183)</a>
      <ul>
       <li><a title="地 1～地7(183)" class="l" href="#pfb7" data-dest-detail="[183,&quot;Fit&quot;]" _pageno="183">地 1～地7(183)</a></li>
      </ul></li>
     <li><a title="Ⅲ 屋面(186)" class="l" href="#pfba" data-dest-detail="[186,&quot;Fit&quot;]" _pageno="186">Ⅲ 屋面(186)</a>
      <ul>
       <li><a title="屋面说明(186)" class="l" href="#pfba" data-dest-detail="[186,&quot;Fit&quot;]" _pageno="186">屋面说明(186)</a></li>
      </ul></li>
     <li><a title="一 平屋面(193)" class="l" href="#pfc1" data-dest-detail="[193,&quot;Fit&quot;]" _pageno="193">一 平屋面(193)</a>
      <ul>
       <li><a title="（一）泡沫玻璃板或加气混凝土砌块保温隔热屋面(193)" class="l" href="#pfc1" data-dest-detail="[193,&quot;Fit&quot;]" _pageno="193">（一）泡沫玻璃板或加气混凝土砌块保温隔热屋面(193)</a></li>
       <li><a title="屋 1～屋 3(193)" class="l" href="#pfc1" data-dest-detail="[193,&quot;Fit&quot;]" _pageno="193">屋 1～屋 3(193)</a></li>
      </ul></li>
     <li><a title="（二）泡沫玻璃板或砌块保温隔热楔形砌块找坡屋面(196)" class="l" href="#pfc4" data-dest-detail="[196,&quot;Fit&quot;]" _pageno="196">（二）泡沫玻璃板或砌块保温隔热楔形砌块找坡屋面(196)</a>
      <ul>
       <li><a title="屋 4～屋 6(196)" class="l" href="#pfc4" data-dest-detail="[196,&quot;Fit&quot;]" _pageno="196">屋 4～屋 6(196)</a></li>
      </ul></li>
     <li><a title="（三）有机保温板板保温隔热屋面(199)" class="l" href="#pfc7" data-dest-detail="[199,&quot;Fit&quot;]" _pageno="199">（三）有机保温板板保温隔热屋面(199)</a>
      <ul>
       <li><a title="屋 7～屋 9(199)" class="l" href="#pfc7" data-dest-detail="[199,&quot;Fit&quot;]" _pageno="199">屋 7～屋 9(199)</a></li>
      </ul></li>
     <li><a title="（四）有机保温板保温隔热倒置屋面(202)" class="l" href="#pfca" data-dest-detail="[202,&quot;Fit&quot;]" _pageno="202">（四）有机保温板保温隔热倒置屋面(202)</a>
      <ul>
       <li><a title="屋10、屋11(202)" class="l" href="#pfca" data-dest-detail="[202,&quot;Fit&quot;]" _pageno="202">屋10、屋11(202)</a></li>
      </ul></li>
     <li><a title="（五）容器种植屋面(204)" class="l" href="#pfcc" data-dest-detail="[204,&quot;Fit&quot;]" _pageno="204">（五）容器种植屋面(204)</a>
      <ul>
       <li><a title="屋12、屋13(204)" class="l" href="#pfcc" data-dest-detail="[204,&quot;Fit&quot;]" _pageno="204">屋12、屋13(204)</a></li>
      </ul></li>
     <li><a title="二 坡屋面(207)" class="l" href="#pfcf" data-dest-detail="[207,&quot;Fit&quot;]" _pageno="207">二 坡屋面(207)</a>
      <ul>
       <li><a title="屋14～屋25(207)" class="l" href="#pfcf" data-dest-detail="[207,&quot;Fit&quot;]" _pageno="207">屋14～屋25(207)</a></li>
      </ul></li>
     <li><a title="三 出屋面构件与女儿墙保温隔热构造(218)" class="l" href="#pfda" data-dest-detail="[218,&quot;Fit&quot;]" _pageno="218">三 出屋面构件与女儿墙保温隔热构造(218)</a>
      <ul>
       <li><a title="太阳能集热器及设备混凝土支座隔热构造(218)" class="l" href="#pfda" data-dest-detail="[218,&quot;Fit&quot;]" _pageno="218">太阳能集热器及设备混凝土支座隔热构造(218)</a></li>
       <li><a title="出屋面排气道保温隔热构造(219)" class="l" href="#pfdb" data-dest-detail="[219,&quot;Fit&quot;]" _pageno="219">出屋面排气道保温隔热构造(219)</a></li>
       <li><a title="出屋面管道井保温隔热构造(220)" class="l" href="#pfdc" data-dest-detail="[220,&quot;Fit&quot;]" _pageno="220">出屋面管道井保温隔热构造(220)</a></li>
       <li><a title="检修孔保温隔热构造(221)" class="l" href="#pfdd" data-dest-detail="[221,&quot;Fit&quot;]" _pageno="221">检修孔保温隔热构造(221)</a></li>
       <li><a title="屋面变形缝保温隔热构造(222)" class="l" href="#pfde" data-dest-detail="[222,&quot;Fit&quot;]" _pageno="222">屋面变形缝保温隔热构造(222)</a></li>
       <li><a title="高低跨屋面变形缝保温隔热构造(223)" class="l" href="#pfdf" data-dest-detail="[223,&quot;Fit&quot;]" _pageno="223">高低跨屋面变形缝保温隔热构造(223)</a></li>
       <li><a title="混凝土女儿墙保温隔热构造(224)" class="l" href="#pfe0" data-dest-detail="[224,&quot;Fit&quot;]" _pageno="224">混凝土女儿墙保温隔热构造(224)</a></li>
       <li><a title="加气混凝土砌块女儿墙保温隔热构造(228)" class="l" href="#pfe4" data-dest-detail="[228,&quot;Fit&quot;]" _pageno="228">加气混凝土砌块女儿墙保温隔热构造(228)</a></li>
       <li><a title="砖女儿墙隔热构造(231)" class="l" href="#pfe7" data-dest-detail="[231,&quot;Fit&quot;]" _pageno="231">砖女儿墙隔热构造(231)</a></li>
      </ul></li>
    </ul>

                    `
                },
                'ZN-003': {
                    name: 'ZN-003 中南地区节能设计',
                    pages: 8,
                    baseUrl: 'https://via.placeholder.com/800x1000/f39c12/ffffff?text=ZN-003+Page+',
                    outline: `
                        <ul>
                            <li><a title="ZN-003" class="l" href="#pf1" data-dest-detail="[1,&quot;Fit&quot;]">ZN-003 中南地区节能设计</a></li>
                            <li><a title="节能标准" class="l" href="#pf9" data-dest-detail="[9,&quot;Fit&quot;]">节能标准</a></li>
                            <li><a title="节能措施" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">节能措施</a>
                                <ul>
                                    <li><a title="外墙保温" class="l" href="#pfd" data-dest-detail="[13,&quot;Fit&quot;]">外墙保温</a></li>
                                    <li><a title="屋面保温" class="l" href="#pf10" data-dest-detail="[16,&quot;Fit&quot;]">屋面保温</a></li>
                                    <li><a title="门窗节能" class="l" href="#pf12" data-dest-detail="[18,&quot;Fit&quot;]">门窗节能</a></li>
                                </ul>
                            </li>
                        </ul>
                    `
                }
            }
        };

