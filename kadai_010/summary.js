$(function() {
  // id属性がchange-colorのボタンがクリックされた場合
  $('#change-color').on('click', function() {
    // 文字色が赤に変化
    $('#target').css('color', 'red');
  });

  // id属性がchange-textのボタンがクリックされた場合
  $('#change-text').on('click', function() {
    // 文字内容変化
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする（1秒かけて透明化し、非表示にする）
    $('#target').fadeOut(1000);
  });

    // id属性がfade-inの要素がクリックされたら
    $('#fade-in').on('click', function() {
      // フェードインする（1秒かけて表示させる）
      $('#target').fadeIn(1000);
    });
});