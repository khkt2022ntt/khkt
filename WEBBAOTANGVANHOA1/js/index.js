var items = [
    {
      type: "text",
      title: "Tượng thần Vishnu",
      picturePath: "image/tuongthanvishnu.jpg",
      description: "<b>Chất liệu: </b> Đá sa thạch \n <b>Niên đại: </b> Thế kỷ 8",
      position: {
        left: 130,
        top: 300
      }
    },
    {
      type: "provider",
      providerName: "youtube",
      parameters: {
        videoId: "iPRiQ6SBntQ"
      },
      position: {
        left: 300,
        top: 200
      },
      sticky: true
    },
  ];
  
  var options = {
    allowHtml: true
  };
  
  $(document).ready(function() {
    $("#my-interactive-image").interactiveImage(items, options);
  });