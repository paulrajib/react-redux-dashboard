export function output_input(
  $id,
  $title,
  $placeHolder,
  $required = false,
  $type = "text",
  $class = "",
  $attributes = "",
) {
  let $data = [];
  $data["title"] = $title;
  $data["placeHolder"] = $placeHolder;
  $data["required"] = $required;
  $data["attributes"] = $attributes;
  $data["type"] = $type;
  $data["class"] = $class;
  // let $onchange = '';
  function testfun(e){
    console.log("testing success");
  };
  let $onchange = `testfun()`;
  let $inputHtml = "";

  $inputHtml = '<label for="' + $id + '" class="control-label">' + $title;
  // if required
  if ($required == true) {
    $inputHtml += '<span class="required">*</span>';
  }
  $inputHtml += '</label><div class="controls">';
  // html
  $inputHtml +=
    '<input type="' +  $type + '" value="" placeholder="' + $placeHolder + '" id="' + $id + '" name="' + $id + '" class="span11 ' + $class + '" ' + $attributes + '" onChange="' + $onchange + '" />';

  $inputHtml += "</div>";
  $data["html"] = $inputHtml;

  //return console.log($data);
  return $data["html"];
}
