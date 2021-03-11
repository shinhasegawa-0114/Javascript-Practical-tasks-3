$(function () {
  searchWord = function(){
    let search = document.getElementById("search-text");
    let searchText = search.value; // 検索ボックスに入力された値
   

    $(".keyWord").each(function() {
      let targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        $(this).parent().removeClass('hidden');
      } else {
        $(this).parent().addClass('hidden');
      }
    });
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});


