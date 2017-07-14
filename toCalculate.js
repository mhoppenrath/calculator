<script>
	$(document).ready(function() {
		var numberHolder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		var operatorHolder = ["+", "-", "X", "/", "^"];

		var firstNumber;
		var operator;
		var secondNumber;

		var result


      $(".letter-button").on("click", function() {

        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color");
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagnet);

      });		

	}
</script>