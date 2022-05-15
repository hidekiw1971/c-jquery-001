jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //マウスを乗せたら発動
  $(".target").hover(
    function () {
      //マウスを乗せたら色が変わる
      $(this).css("background", "#c00");
    },
    function () {
      //色指定を空欄にすれば元の色に戻る
      $(this).css("background", "");
    }
  );
});
