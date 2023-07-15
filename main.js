"ui";

const storage = storages.create("X1688");

const isShow = storage.get("show", false)
var scriptName = 'xx全自动'
var version = '1.8.9'
var themeColor = '#4EBFDD'
var scriptTitle = scriptName + ' v' + version
var APPVersion = 'xx'
password = '9999';

// ui.statusBarColor("#1495E7");
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#FF5c50e6" title="1688V1.0.0" paddingTop="2dp" h="auto" />
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                {/* 第一个Frame */}
                <frame>
                    <scroll>
                        <vertical gravity="center">
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" h="auto">
                                    <linear>
                                        <text text="账号:" textColor="black" w="auto" textStyle="bold" />
                                        <input id="textAccount" color="#666666" paddingLeft="5" w="*" />
                                    </linear>
                                    <linear>
                                        <text text="密码:" textColor="black" w="auto" textStyle="bold" />
                                        <input id="textPassword" color="#666666" paddingLeft="5" w="*" />
                                    </linear>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="简单版种草" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="自动识别二维码、收藏、店铺运营分" />
                                </vertical>
                                <checkbox id="checkboxSample" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="高质量种草" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="关键词搜索、主图、副图产品浏览、收藏、店铺运营分" />
                                </vertical>
                                <checkbox id="checkboxComplex" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="right">
                                <button style="Widget.AppCompat.Button.Colored" id="btnStart" text="启动" padding="12dp" w="auto" />
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
                {/* 第二个Frame */}
                <frame>
                    <scroll>
                        <vertical>
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <View bg="#1495E7" h="*" w="5" />
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <horizontal>
                                            <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="14" />
                                            <Switch id="isShow" text="悬浮窗" checked="{{isShow}}" padding="8 8 8 8" textSize="14" />
                                        </horizontal>
                                    </vertical>
                                </horizontal>
                            </card>
                            <text id="info" text="联系方式：13333333333" layout_gravity="center" textColor="red" w="auto" textStyle="bold" />

                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" h="auto">
                                    <text text="功能选择:" marginLeft="5" w="auto" textStyle="bold" textColor='black' />
                                    <linear>
                                        <checkbox id="checkboxIsFavorite" text="收藏" textColor="black" checked='true' />
                                        <checkbox id="checkboxIsAddCart" text="加购" textColor="black" checked='true' />
                                        <checkbox id="checkboxIsFollow" text="关注" textColor="black" checked='false' />
                                    </linear>
                                    <text text="全局设置:" marginLeft="5" w="auto" textStyle="bold" textColor='black' />
                                    <checkbox id="checkboxIsBonus" text="做运营分" textColor="black" checked='true' />
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[运营分设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="动态浏览时长（秒）:" textStyle="bold" textSize="15sp" />
                                        <input id="textTrendsDuration" text="60" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="动态点赞数量（个）:" textStyle="bold" textSize="15sp" />
                                        <input id="textTrendsLikeCount" text="4" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="动态评论数量（个）:" textStyle="bold" textSize="15sp" />
                                        <input id="textTrendsCommentCount" text="1" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="铺货数量（个）:" textStyle="bold" textSize="15sp" />
                                        <input id="textDistributionCount" text="1" color="#666666" w="*" />
                                    </horizontal>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[高质量种草设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="主图、视频浏览时长（秒）:" textStyle="bold" textSize="15sp" />
                                        <input id="textGoodMainPicDuration" text="60" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="查看评价时长（秒）:" textStyle="bold" textSize="15sp" />
                                        <input id="textGoodEvaluateDuration" text="60" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="查看商品参数时长（秒）:" textStyle="bold" textSize="15sp" />
                                        <input id="textGoodDetailDuration" text="120" color="#666666" w="*" />
                                    </horizontal>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="btnSaveConfig" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
                {/* 第三页*/}
                <frame>
                    <scroll>
                        <vertical>
                            <horizontal gravity="center_vertical" padding="5 5"  >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" color="#111111" size="16" text="1、需要启动无障碍服务。" />
                                    <text w="auto" color="#111111" size="16" text="2、允许app显示在其他应用的上层。" />
                                </vertical>
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
            </viewpager>
        </vertical>
    </drawer>
);

//设置滑动页面的标题
ui.viewpager.setTitles(["首页", "配置", "说明"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
activity.setSupportActionBar(ui.toolbar);

// 先禁用高质量
ui.checkboxComplex.setEnabled(false);
ui.checkboxComplex.click(function() {
    toastLog("高质量种草开发中，敬请期待~");
});

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
//android.permission.SYSTEM_ALERT_WINDOW
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

// 保存配置
ui.btnSaveConfig.click(function () {
    var locStorage = storages.create("test1688");//创建本地存储
    locStorage.put("isFavorite", "" + ui.checkboxIsFavorite.isChecked() + "");
    locStorage.put("isAddCart", "" + ui.checkboxIsAddCart.isChecked() + "");
    locStorage.put("isFollow", "" + ui.checkboxIsFollow.isChecked() + "");
    locStorage.put("isBonus", "" + ui.checkboxIsBonus.isChecked() + "");

    locStorage.put("trendsDuration", "" + ui.textTrendsDuration.getText() + "");
    locStorage.put("trendsLikeCount", "" + ui.textTrendsLikeCount.getText() + "");
    locStorage.put("trendsCommentCount", "" + ui.textTrendsCommentCount.getText() + "");
    locStorage.put("distributionCount", "" + ui.textDistributionCount.getText() + "");

    locStorage.put("goodMainPicDuration", "" + ui.textGoodMainPicDuration.getText() + "");
    locStorage.put("goodEvaluateDuration", "" + ui.textGoodEvaluateDuration.getText() + "");
    locStorage.put("goodDetailDuration", "" + ui.textGoodDetailDuration.getText() + "");

    toastLog("配置保存成功！");
});


initializeData();


/**
 * 初始化UI和数据
 */
function initializeData() {
    var locStorage = storages.create("test1688");//创建本地存储

    var isFavorite = locStorage.get("isFavorite");
    if (isFavorite != null && isFavorite == "true") {
        ui.checkboxIsFavorite.setChecked(true);
    } else {
        ui.checkboxIsFavorite.setChecked(false);
    }
    var isAddCart = locStorage.get("isAddCart");
    if (isAddCart != null && isAddCart == "true") {
        ui.checkboxIsAddCart.setChecked(true);
    } else {
        ui.checkboxIsAddCart.setChecked(false);
    }
    var isFollow = locStorage.get("isFollow");
    if (isFollow != null && isFollow == "true") {
        ui.checkboxIsFollow.setChecked(true);
    } else {
        ui.checkboxIsFollow.setChecked(false);
    }
    var isBonus = locStorage.get("isBonus");
    if (isBonus != null && isBonus == "true") {
        ui.checkboxIsBonus.setChecked(true);
    } else {
        ui.checkboxIsBonus.setChecked(false);
    }

    var trendsDuration = locStorage.get("trendsDuration");
    if (trendsDuration != null) {
        ui.textTrendsDuration.setText(trendsDuration);
    }
    var trendsLikeCount = locStorage.get("trendsLikeCount");
    if (trendsLikeCount != null) {
        ui.textTrendsLikeCount.setText(trendsLikeCount);
    }
    var trendsCommentCount = locStorage.get("trendsCommentCount");
    if (trendsCommentCount != null) {
        ui.textTrendsCommentCount.setText(trendsCommentCount);
    }
    var distributionCount = locStorage.get("distributionCount");
    if (distributionCount != null) {
        ui.textDistributionCount.setText(distributionCount);
    }

    var goodMainPicDuration = locStorage.get("goodMainPicDuration");
    if (goodMainPicDuration != null) {
        ui.textGoodMainPicDuration.setText(goodMainPicDuration);
    }
    var goodEvaluateDuration = locStorage.get("goodEvaluateDuration");
    if (goodEvaluateDuration != null) {
        ui.textGoodEvaluateDuration.setText(goodEvaluateDuration);
    }
    var goodDetailDuration = locStorage.get("goodDetailDuration");
    if (goodDetailDuration != null) {
        ui.textGoodDetailDuration.setText(goodDetailDuration);
    }
}


/**
 * 启动脚本
 */
ui.btnStart.click(function () {
    var account = ui.textAccount.text();
    if (!account) {
        toastLog("请输入账号");
        return false;
    }
    var password = ui.textPassword.text();
    if (!password) {
        toastLog("请输入密码");
        return false;
    }
    if (account != "user1" && password != "pass1") {
        toastLog("账号或密码错误");
        return false;
    }

    var tipMessage = "确认执行吗？如果配置不正确请点击取消，前往配置页面进行参数修正！";
    confirm(tipMessage).then(value => {
        //当点击确定后会执行这里, value为true或false, 表示点击"确定"或"取消"
        if (value) {
            // scriptExecution = engines.execScriptFile("./mian.js");
            scriptExecution = engines.execScriptFile("/sdcard/脚本/1688/simple.js");
            // scriptExecution = engines.execScriptFile("./main.js");
            log(scriptExecution)
        }
    });
});
